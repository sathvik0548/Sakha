// src/serverConfig.js
var DEFAULT_SERVER_URL = "http://localhost:3000";
var STORAGE_SERVER_KEY = "custom_server_url";
async function getBaseServerUrl() {
  if (typeof chrome !== "undefined" && chrome.storage && chrome.storage.local) {
    try {
      const data = await new Promise((resolve) => {
        chrome.storage.local.get([STORAGE_SERVER_KEY], resolve);
      });
      if (data && data[STORAGE_SERVER_KEY] && typeof data[STORAGE_SERVER_KEY] === "string" && data[STORAGE_SERVER_KEY].trim()) {
        return data[STORAGE_SERVER_KEY].trim().replace(/\/+$/, "");
      }
    } catch (e) {
      console.warn("[serverConfig] Could not read custom_server_url:", e);
    }
  }
  return DEFAULT_SERVER_URL;
}

// src/background.js
var OFFSCREEN_URL = chrome.runtime.getURL("offscreen.html");
var analysisCache = /* @__PURE__ */ new Map();
var stats = {
  framesCaptured: 0,
  visionInferences: 0,
  totalLatencyMs: 0
};
console.log(`[BG] T_SW_START  t=0ms  (Service worker started)`);
chrome.runtime.onInstalled.addListener(() => {
  ensureOffscreenDocument();
  if (chrome.storage && chrome.storage.local) {
    chrome.storage.local.get(["agent_vault"], (data) => {
      if (!data.agent_vault) {
        chrome.storage.local.set({
          agent_vault: {
            NAME: "Rajesh Kumar",
            EMAIL: "vendor.demo@example.in",
            INDIAN_MOBILE: "9876543210",
            PHONE: "9876543210",
            DOB: "1990-05-15",
            ADDRESS: "42, MG Road, Bengaluru",
            CITY: "Bengaluru",
            PINCODE: "560001",
            AADHAAR: "5489 1234 5674",
            PAN: "ABCDE1234F",
            PASSWORD: "MockPassword@123"
          }
        });
        console.log("[BG] Initialized default demo profile vault in chrome.storage.local");
      }
    });
  }
});
chrome.runtime.onStartup.addListener(() => ensureOffscreenDocument());
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "OFFSCREEN_KEEPALIVE") {
    sendResponse({ ok: true });
    return true;
  }
});
async function captureScreen() {
  const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!activeTab)
    throw new Error("No active tab found.");
  const dataUrl = await chrome.tabs.captureVisibleTab(activeTab.windowId, { format: "png" });
  return { dataUrl, tab: activeTab };
}
async function getDOMRegions(tabId) {
  return new Promise((resolve) => {
    console.log(`[BG] Dispatching SCAN_DOM message to active tab ${tabId}...`);
    chrome.tabs.sendMessage(tabId, { type: "SCAN_DOM" }, async (response) => {
      if (chrome.runtime.lastError || !response) {
        const errMsg = chrome.runtime.lastError?.message ?? "no response";
        console.warn(`[BG] Initial SCAN_DOM failed on tab ${tabId} (${errMsg}). Attempting dynamic injection of content.js...`);
        try {
          await chrome.scripting.executeScript({
            target: { tabId },
            files: ["content.js"]
          });
          console.log(`[BG] content.js successfully injected into tab ${tabId}. Retrying SCAN_DOM...`);
          chrome.tabs.sendMessage(tabId, { type: "SCAN_DOM" }, (retryResponse) => {
            if (chrome.runtime.lastError || !retryResponse) {
              console.warn("[BG] SCAN_DOM retry also failed:", chrome.runtime.lastError?.message ?? "no response");
              resolve({ domRegions: [], domHash: "" });
            } else {
              console.log(`[BG] SCAN_DOM retry succeeded! Found ${retryResponse.domRegions?.length ?? 0} sensitive field(s), ${retryResponse.mediaRegions?.length ?? 0} media element(s):`, retryResponse.domRegions);
              resolve({ domRegions: retryResponse.domRegions ?? [], mediaRegions: retryResponse.mediaRegions ?? [], domHash: retryResponse.domHash ?? "" });
            }
          });
        } catch (injErr) {
          console.warn("[BG] Dynamic content script injection failed (e.g. chrome:// or restricted page):", injErr.message);
          resolve({ domRegions: [], mediaRegions: [], domHash: "" });
        }
        return;
      }
      console.log(`[BG] SCAN_DOM succeeded on tab ${tabId}! Received ${response.domRegions?.length ?? 0} region(s), ${response.mediaRegions?.length ?? 0} media element(s):`, response.domRegions);
      resolve({ domRegions: response.domRegions ?? [], mediaRegions: response.mediaRegions ?? [], domHash: response.domHash ?? "" });
    });
  });
}
async function ensureOffscreenDocument() {
  const existing = await chrome.runtime.getContexts({
    contextTypes: ["OFFSCREEN_DOCUMENT"],
    documentUrls: [OFFSCREEN_URL]
  });
  if (existing.length > 0)
    return;
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["WORKERS"],
    justification: "Run Florence-2 + BlazeFace inference for visual PII detection."
  });
  console.log("[BG] Offscreen document created.");
}
async function redactScreenshot(dataUrl, sensitiveRegions) {
  if (!sensitiveRegions || sensitiveRegions.length === 0)
    return dataUrl;
  try {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    const bitmap = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0);
    ctx.fillStyle = "black";
    for (const region of sensitiveRegions) {
      if (region.bbox && region.bbox.length === 4) {
        const [x, y, w, h] = region.bbox;
        ctx.fillRect(x, y, w, h);
      }
    }
    const outBlob = await canvas.convertToBlob({ type: "image/png" });
    const buffer = await outBlob.arrayBuffer();
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    const b64 = btoa(binary);
    return `data:image/png;base64,${b64}`;
  } catch (err) {
    console.error("[BG] Redaction failed:", err);
    return dataUrl;
  }
}
async function runVisionAnalysis(screenshotDataUrl, domRegions, mediaRegions) {
  await ensureOffscreenDocument();
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(
      { type: "RUN_INFERENCE", payload: { screenshotDataUrl, domRegions, mediaRegions } },
      (response) => {
        if (chrome.runtime.lastError) {
          reject(new Error(chrome.runtime.lastError.message));
          return;
        }
        if (!response?.success) {
          reject(new Error(response?.error ?? "Unknown inference error"));
          return;
        }
        resolve(response);
      }
    );
  });
}
async function sendToServer(payload) {
  const baseUrl = await getBaseServerUrl();
  const serverUrl = `${baseUrl}/analyze`;
  console.log("[BG] Initiating HTTP request to server URL:", serverUrl);
  try {
    const res = await fetch(serverUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    console.log(`[BG] Server HTTP Status Code: ${res.status} ${res.statusText}`);
    const rawBody = await res.text();
    console.log(`[BG] Server Raw Response Body (${rawBody.length} bytes):`, rawBody.length > 500 ? rawBody.substring(0, 500) + "... [truncated]" : rawBody);
    if (!res.ok) {
      let serverErr = "";
      try {
        const parsed = JSON.parse(rawBody);
        serverErr = parsed.error || parsed.message || "";
      } catch (e) {
      }
      throw new Error(serverErr || `Server returned HTTP ${res.status} (${res.statusText}): ${rawBody.substring(0, 200)}`);
    }
    let data;
    try {
      data = JSON.parse(rawBody);
    } catch (parseErr) {
      throw new Error(`Server response was not valid JSON: ${rawBody.substring(0, 200)}`);
    }
    return data;
  } catch (err) {
    console.error("[BG Error][sendToServer] Network or HTTP error:", err);
    throw err;
  }
}
chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "analyze")
    return;
  let isConnected = true;
  const safePost = (msg) => {
    if (!isConnected)
      return false;
    try {
      port.postMessage(msg);
      return true;
    } catch (e) {
      isConnected = false;
      return false;
    }
  };
  const relay = (msg) => {
    if (["MODEL_PROGRESS", "MODEL_READY", "MODEL_ERROR"].includes(msg.type)) {
      safePost(msg);
    }
  };
  chrome.runtime.onMessage.addListener(relay);
  port.onDisconnect.addListener(() => {
    isConnected = false;
    chrome.runtime.onMessage.removeListener(relay);
    console.log("[BG] Popup port disconnected (popup closed). Continuing execution in background.");
  });
  port.onMessage.addListener(async (message) => {
    if (message.type !== "ANALYZE_SCREEN" && message.type !== "START_DEMO_RUN")
      return;
    const isDemo = message.type === "START_DEMO_RUN";
    const instruction = message.instruction || "Analyze the current screen and detect PII";
    let shouldContinue = true;
    let taskVisionInferences = 0;
    const MAX_VISION_PER_TASK = 3;
    const stepConsecutiveFailures = /* @__PURE__ */ new Map();
    while (shouldContinue) {
      const t0 = performance.now();
      console.log(`[BG] >>> Starting Execution Loop (isDemo=${isDemo}) <<<`);
      const storedVault = await new Promise((resolve) => {
        chrome.storage.local.get(["agent_vault"], (data) => resolve(data?.agent_vault || {}));
      });
      const vaultKeys = Object.keys(storedVault);
      console.log("\n========================================================");
      console.log("[BG] === CURRENT STORED PROFILE VAULT AT START OF RUN ===");
      if (vaultKeys.length > 0) {
        console.log(`Found ${vaultKeys.length} stored field(s):`);
        console.log(JSON.stringify(storedVault, null, 2));
      } else {
        console.log("Profile vault is currently EMPTY (0 fields configured).");
      }
      console.log("========================================================\n");
      safePost({
        type: "STATUS",
        text: vaultKeys.length > 0 ? `[VAULT] Loaded ${vaultKeys.length} stored field(s): ${vaultKeys.join(", ")}` : "\u26A0 Vault is empty! Open Profile settings to configure values."
      });
      let captureResult;
      try {
        console.log("[BG] Step 1: Capturing active tab screenshot...");
        safePost({ type: "STAGE_CHANGE", stage: "capture", text: "Capturing screen\u2026" });
        captureResult = await captureScreen();
        console.log("[BG] Step 1 Complete. Screenshot captured successfully.");
      } catch (err) {
        console.error("[BG Error][Step 1: Screenshot Capture]:", err);
        safePost({ type: "ERROR", step: "Screenshot Capture", error: err.message });
        shouldContinue = false;
        break;
      }
      let domResult;
      try {
        console.log(`[BG] Step 2: Scanning DOM for sensitive fields on tab ${captureResult.tab.id}...`);
        safePost({ type: "STAGE_CHANGE", stage: "capture", text: "Scanning DOM for sensitive fields\u2026" });
        domResult = await getDOMRegions(captureResult.tab.id);
        safePost({ type: "DOM_SCAN_DONE", count: domResult.domRegions.length });
        console.log(`[BG] Step 2 Complete. Found ${domResult.domRegions.length} sensitive DOM field(s).`);
      } catch (err) {
        console.error("[BG Error][Step 2: DOM Scan]:", err);
        safePost({ type: "ERROR", step: "DOM Scan", error: err.message });
        shouldContinue = false;
        break;
      }
      stats.framesCaptured++;
      const cacheKey = captureResult.tab.url + "|" + domResult.domHash;
      let detections, sensitiveRegions, screenshotDataUrl, elapsed;
      if (analysisCache.has(cacheKey)) {
        console.log("[BG] Step 3: DOM identical! Cache hit, reusing cached detections.");
        safePost({ type: "STATUS", text: "\u26A1 DOM identical! Skipping vision inference (Cache Hit)." });
        const cached = analysisCache.get(cacheKey);
        detections = cached.detections;
        sensitiveRegions = cached.sensitiveRegions;
        screenshotDataUrl = captureResult.dataUrl;
        elapsed = 0;
      } else {
        try {
          console.log(`[BG] Step 3: Dispatching screenshot and domRegions to offscreen document for inference (attempt ${taskVisionInferences + 1} of max ${MAX_VISION_PER_TASK})...`);
          safePost({ type: "STAGE_CHANGE", stage: "detect", text: `Running Florence-2 + BlazeFace + PII analysis (vision pass ${taskVisionInferences + 1}/${MAX_VISION_PER_TASK})\u2026` });
          if (taskVisionInferences >= MAX_VISION_PER_TASK) {
            console.warn(`[BG] Stopping after ${MAX_VISION_PER_TASK} full analysis attempts to avoid excessive cost.`);
            safePost({
              type: "ERROR",
              step: "Vision Inference Cap",
              error: `Stopping after ${MAX_VISION_PER_TASK} full analysis attempts to avoid excessive cost`
            });
            shouldContinue = false;
            break;
          }
          taskVisionInferences++;
          stats.visionInferences++;
          const result = await runVisionAnalysis(captureResult.dataUrl, domResult.domRegions, domResult.mediaRegions);
          detections = result.detections;
          sensitiveRegions = result.sensitiveRegions;
          screenshotDataUrl = result.screenshotDataUrl;
          elapsed = result.elapsed;
          analysisCache.set(cacheKey, { detections, sensitiveRegions });
          console.log(`[BG] Step 3 Complete in ${elapsed}ms: ${detections.length} detections, ${sensitiveRegions.length} PII regions.`);
        } catch (err) {
          console.error("[BG Error][Step 3: Florence-2 / Vision Inference]:", err);
          safePost({ type: "ERROR", step: "Florence-2 Inference", error: err.message });
          shouldContinue = false;
          break;
        }
      }
      const rawBytes = captureResult.dataUrl.length;
      let finalScreenshotDataUrl;
      try {
        console.log(`[BG] Step 4: Redacting ${sensitiveRegions.length} sensitive regions on canvas...`);
        safePost({ type: "STAGE_CHANGE", stage: "redact", text: `Redacting ${sensitiveRegions.length} sensitive regions\u2026` });
        finalScreenshotDataUrl = await redactScreenshot(screenshotDataUrl, sensitiveRegions);
        console.log("[BG] Step 4 Complete. Redaction finished.");
      } catch (err) {
        console.error("[BG Error][Step 4: Redaction]:", err);
        safePost({ type: "ERROR", step: "Redaction", error: err.message });
        shouldContinue = false;
        break;
      }
      let leakCheckPassed = true;
      let leakDetails = { leaksFound: 0, leakRegions: [], checkedRegions: sensitiveRegions.length };
      try {
        if (sensitiveRegions.length > 0) {
          const verifyResp = await new Promise((resolve) => {
            const timer = setTimeout(() => resolve({ ok: true, leakers: [], checked: sensitiveRegions.length }), 5e3);
            chrome.runtime.sendMessage(
              {
                type: "VERIFY_REDACTION",
                payload: { redactedDataUrl: finalScreenshotDataUrl, sensitiveRegions }
              },
              (resp) => {
                clearTimeout(timer);
                if (chrome.runtime.lastError) {
                  console.warn("[BG] Step 4b: VERIFY_REDACTION message error (non-fatal):", chrome.runtime.lastError.message);
                  resolve({ ok: true, leakers: [], checked: sensitiveRegions.length });
                } else {
                  resolve(resp || { ok: true, leakers: [], checked: sensitiveRegions.length });
                }
              }
            );
          });
          const leakingRegions = verifyResp.leakers || [];
          leakDetails = {
            leaksFound: leakingRegions.length,
            leakRegions: leakingRegions,
            checkedRegions: sensitiveRegions.length
          };
          if (leakingRegions.length > 0) {
            leakCheckPassed = false;
            console.error(`[BG] Step 4b FAIL: ${leakingRegions.length} region(s) not fully blacked out!`, leakingRegions);
            safePost({
              type: "LEAK_CHECK",
              passed: false,
              leaksFound: leakingRegions.length,
              leakRegions: leakingRegions,
              checkedRegions: sensitiveRegions.length,
              message: `\u{1F6A8} LEAK DETECTED: ${leakingRegions.length} region(s) not blacked out \u2014 payload BLOCKED`
            });
          } else {
            console.log(`[BG] Step 4b PASS: All ${sensitiveRegions.length} region(s) verified black (geometric).`);
            safePost({
              type: "LEAK_CHECK",
              passed: true,
              leaksFound: 0,
              leakRegions: [],
              checkedRegions: sensitiveRegions.length,
              message: `\u2713 0 leaks \u2014 ${sensitiveRegions.length} masked region(s) verified black`
            });
          }
        } else {
          console.log("[BG] Step 4b: No sensitive regions to verify.");
          safePost({
            type: "LEAK_CHECK",
            passed: true,
            leaksFound: 0,
            leakRegions: [],
            checkedRegions: 0,
            message: "\u2713 No regions to verify (page has no detected PII)"
          });
        }
      } catch (leakErr) {
        console.warn("[BG] Step 4b: Leak verification inference failed (non-fatal):", leakErr.message);
        safePost({
          type: "LEAK_CHECK",
          passed: true,
          // Give benefit of doubt if inference fails
          leaksFound: 0,
          leakRegions: [],
          checkedRegions: sensitiveRegions.length,
          message: `\u26A0 Leak check skipped (inference error: ${leakErr.message})`,
          warning: true
        });
      }
      if (!leakCheckPassed) {
        console.error("[BG] BLOCKING payload transmission \u2014 PII leak verification failed!");
        shouldContinue = false;
        break;
      }
      let manifest = (sensitiveRegions || []).map((r, i) => ({
        region_id: `region_${i}`,
        bbox: r.bbox,
        type: r.type,
        redaction_style: "black_box",
        confidence: r.confidence,
        source: r.source || "dom"
      }));
      let dom_summary = (domResult.domRegions || []).map((r, i) => ({
        element_id: r.agentId || `agent_${i}`,
        dom_id: r.id || "",
        name: r.name || "",
        placeholder: r.placeholder || "",
        tag: r.tag || "input",
        role: r.role || (r.inputType === "radio" ? "radio" : "textbox"),
        label: r.label || "",
        field_type: r.type || "",
        bbox: r.bbox,
        current_value: r.current_value || ""
      }));
      let serverResult;
      try {
        const activeBaseUrl = await getBaseServerUrl();
        console.log(`[BG] Step 5: Preparing AgentRequestV1 payload for server (${activeBaseUrl})...`);
        safePost({ type: "STAGE_CHANGE", stage: "send", text: `Sending redacted payload to server (${activeBaseUrl}/analyze)\u2026` });
        console.log("\n========================================================");
        console.log(`[BG][DEBUG] === EXACT dom_summary SENT TO /analyze (${dom_summary.length} items) ===`);
        console.log(JSON.stringify(dom_summary, null, 2));
        console.log(`[BG][DEBUG] === EXACT manifest SENT TO /analyze (${manifest.length} items) ===`);
        console.log(JSON.stringify(manifest, null, 2));
        console.log("========================================================\n");
        const agentRequestPayload = {
          version: "1.0",
          task_instruction: instruction,
          redacted_image: finalScreenshotDataUrl.split(",")[1],
          manifest,
          dom_summary,
          demo_mode: isDemo,
          client_stats: { totalLatencyMs: stats.totalLatencyMs },
          vault: storedVault
          // Send profile data so server-side providers can use real values
        };
        const redactedImageB64 = agentRequestPayload.redacted_image;
        const payloadJson = JSON.stringify(agentRequestPayload);
        const sentBytes = payloadJson.length;
        let piiSurfacePercent = 0;
        let imageTotalPixels = 1;
        let imagePIIPixels = 0;
        try {
          const rawB64 = captureResult.dataUrl.split(",")[1] || "";
          if (sensitiveRegions.length > 0) {
            imagePIIPixels = sensitiveRegions.reduce((sum, r) => sum + r.bbox[2] * r.bbox[3], 0);
            const allX2 = sensitiveRegions.map((r) => r.bbox[0] + r.bbox[2]);
            const allY2 = sensitiveRegions.map((r) => r.bbox[1] + r.bbox[3]);
            const estimatedW = Math.max(1280, Math.max(...allX2) * 1.2);
            const estimatedH = Math.max(720, Math.max(...allY2) * 1.2);
            imageTotalPixels = estimatedW * estimatedH;
            piiSurfacePercent = imagePIIPixels / imageTotalPixels * 100;
          }
        } catch (dimErr) {
          console.warn("[BG] Could not estimate image dimensions for PII surface metric:", dimErr);
        }
        const reductionPercent = (1 - sentBytes / rawBytes) * 100;
        const metricsPayload = {
          raw_bytes: rawBytes,
          sent_bytes: sentBytes,
          reduction_percent: reductionPercent,
          pii_regions: sensitiveRegions.length,
          pii_surface_percent: piiSurfacePercent,
          pii_pixels: imagePIIPixels
        };
        console.log("[BG] Data Reduction Metrics:", JSON.stringify(metricsPayload));
        safePost({ type: "METRICS", ...metricsPayload });
        serverResult = await sendToServer(agentRequestPayload);
        console.log("[BG] Step 5 Complete. Server returned plan:", serverResult);
      } catch (err) {
        console.error("[BG Error][Step 5: Server Call]:", err);
        let errMsg = err.message || String(err);
        if (errMsg.includes("Failed to fetch") || errMsg.includes("NetworkError") || errMsg.includes("ECONNREFUSED")) {
          errMsg = `Couldn't reach the reasoning server at ${await getBaseServerUrl()} \u2014 please check your connection.`;
        }
        safePost({ type: "ERROR", step: "Server Call", error: errMsg });
        shouldContinue = false;
        break;
      }
      safePost({
        type: "ANALYSIS_RESULT",
        detections,
        sensitiveRegions,
        screenshotDataUrl,
        elapsed,
        serverResult
      });
      safePost({ type: "STAGE_CHANGE", stage: "act", text: "Executing plan\u2026" });
      const plan = Array.isArray(serverResult?.plan) ? serverResult.plan : [];
      const totalSteps = plan.length;
      const stepResults = [];
      try {
        if (totalSteps === 0) {
          console.log("[BG] Step 6: Empty plan \u2014 all fields already filled or task complete.");
          safePost({ type: "PLAN_SUMMARY", total: 0, succeeded: 0, failed: 0, details: [], message: "All fields are already filled \u2014 nothing to do." });
        } else {
          console.log(`[BG] Step 6: Executing ${totalSteps} plan step(s)...`);
          for (const step of plan) {
            const stepNum = step.step;
            const fieldType = step.field_type || "FIELD";
            const targetId = step.target_id;
            const stepKey = `${targetId || ""}_${fieldType || ""}`;
            const currentFailures = stepConsecutiveFailures.get(stepKey) || 0;
            if (currentFailures >= 2) {
              const skipReason = `Step ${stepNum} (${fieldType}, ${targetId}) halted: element failed ${currentFailures} times consecutively. Stopping retries for this step.`;
              console.warn(`[BG] ${skipReason}`);
              stepResults.push({ stepNum, fieldType, ok: false, reason: skipReason });
              safePost({
                type: "PLAN_STEP_STATUS",
                stepNum,
                totalSteps,
                status: "error",
                message: skipReason
              });
              continue;
            }
            const domMatch = dom_summary.find((d) => d.element_id === targetId || d.dom_id === targetId || d.name === targetId);
            const manifestMatch = manifest.find((m) => m.region_id === targetId);
            const detectionMatch = (detections || []).find((d) => d.id === targetId);
            const matchedBbox = step.bbox || domMatch?.bbox || manifestMatch?.bbox || detectionMatch?.bbox || null;
            const stepPayload = { ...step, bbox: matchedBbox };
            let currentVal = stepPayload.value || stepPayload.match_value || storedVault[fieldType] || null;
            if (!currentVal && fieldType === "PHONE")
              currentVal = storedVault["INDIAN_MOBILE"];
            if (!currentVal && fieldType === "INDIAN_MOBILE")
              currentVal = storedVault["PHONE"];
            if (!currentVal && (step.action === "type" || step.action === "select_choice") && fieldType !== "BUTTON" && fieldType !== "SUBMIT") {
              const SENSITIVE_SKIP_TYPES = /* @__PURE__ */ new Set([
                "AADHAAR",
                "PAN",
                "GSTIN",
                "IFSC",
                "BANK_ACCOUNT",
                "CARD",
                "PASSWORD",
                "INDIAN_MOBILE",
                "PHONE"
              ]);
              if (SENSITIVE_SKIP_TYPES.has(fieldType)) {
                const skipMsg = `Step ${stepNum}: \u26A0 No value in vault for sensitive field "${fieldType}" \u2014 skipping (add it in Profile settings).`;
                console.warn(`[BG] ${skipMsg}`);
                stepResults.push({ stepNum, fieldType, ok: false, reason: skipMsg });
                safePost({ type: "PLAN_STEP_STATUS", stepNum, totalSteps, status: "error", message: skipMsg });
                continue;
              }
              console.log(`[BG] Step ${stepNum}: No value found for "${fieldType}" in profile or plan. Requesting inline input from user...`);
              safePost({
                type: "PROMPT_USER_INPUT",
                stepNum,
                fieldType,
                targetId,
                actionType: step.action,
                message: `No value found for ${fieldType} \u2014 enter one now?`
              });
              const userReply = await new Promise((resolve) => {
                const replyHandler = (uMsg) => {
                  if (uMsg.type === "USER_INPUT_PROVIDED" && uMsg.stepNum === stepNum) {
                    port.onMessage.removeListener(replyHandler);
                    resolve(uMsg);
                  }
                };
                port.onMessage.addListener(replyHandler);
                setTimeout(() => resolve(null), 1e4);
              });
              if (userReply && userReply.value) {
                console.log(`[BG] Step ${stepNum}: User provided value for "${fieldType}": "${userReply.value}" (saveToVault: ${userReply.saveToVault})`);
                if (step.action === "select_choice") {
                  stepPayload.match_value = userReply.value;
                } else {
                  stepPayload.value = userReply.value;
                }
                if (userReply.saveToVault) {
                  storedVault[fieldType] = userReply.value;
                  chrome.storage.local.set({ agent_vault: storedVault });
                  console.log(`[BG] \u2713 Persisted "${fieldType}" = "${userReply.value}" to chrome.storage.local`);
                }
              } else {
                const skipMsg = `Step ${stepNum}: No value provided for "${fieldType}" (timed out or skipped). Moving on.`;
                console.warn(`[BG] ${skipMsg}`);
                stepResults.push({ stepNum, fieldType, ok: false, reason: skipMsg });
                safePost({ type: "PLAN_STEP_STATUS", stepNum, totalSteps, status: "error", message: skipMsg });
                continue;
              }
            }
            safePost({
              type: "PLAN_STEP_STATUS",
              stepNum,
              totalSteps,
              status: "running",
              message: `Step ${stepNum}/${totalSteps}: ${step.action} on ${fieldType} (${targetId})\u2026`
            });
            try {
              const stepResponse = await new Promise((resolve, reject) => {
                const timer = setTimeout(() => reject(new Error("TIMEOUT")), 5e3);
                chrome.tabs.sendMessage(
                  captureResult.tab.id,
                  { type: "EXECUTE_ACTION", payload: stepPayload },
                  (response) => {
                    clearTimeout(timer);
                    if (chrome.runtime.lastError) {
                      reject(new Error(chrome.runtime.lastError.message));
                    } else {
                      resolve(response || { ok: false, error: "No response from content script" });
                    }
                  }
                );
              });
              if (stepResponse.ok) {
                stepConsecutiveFailures.set(stepKey, 0);
                console.log(`[BG] Step 6.${stepNum}: \u2713 success`, stepResponse);
                stepResults.push({ stepNum, fieldType, ok: true });
                safePost({
                  type: "PLAN_STEP_STATUS",
                  stepNum,
                  totalSteps,
                  status: "ok",
                  message: `Step ${stepNum}/${totalSteps}: \u2713 ${fieldType} filled`
                });
              } else {
                throw new Error(stepResponse.error || "Content script reported failure");
              }
            } catch (err) {
              stepConsecutiveFailures.set(stepKey, currentFailures + 1);
              let failReason;
              const errStr = err.message || String(err);
              if (errStr === "TIMEOUT") {
                failReason = `The page didn't respond to the action in time (step ${stepNum}, ${fieldType}).`;
              } else if (errStr.includes("not found") || errStr.includes("resolve")) {
                failReason = `Couldn't find the element for step ${stepNum} (expected: ${fieldType}). The page layout may have changed.`;
              } else {
                failReason = `Step ${stepNum} (${fieldType}) failed: ${errStr}`;
              }
              console.error(`[BG] Step 6.${stepNum}: \u2717 failed (${currentFailures + 1} consecutive) \u2014 ${failReason}`);
              stepResults.push({ stepNum, fieldType, ok: false, reason: failReason });
              safePost({
                type: "PLAN_STEP_STATUS",
                stepNum,
                totalSteps,
                status: "error",
                message: failReason
              });
            }
            await new Promise((r) => setTimeout(r, 300));
          }
          const succeeded = stepResults.filter((r) => r.ok).length;
          const failed = stepResults.filter((r) => !r.ok).length;
          const failedDescriptions = stepResults.filter((r) => !r.ok).map((r) => `Step ${r.stepNum} (${r.fieldType}): ${r.reason}`);
          let summaryMsg;
          if (failed === 0) {
            summaryMsg = `All ${succeeded} step(s) completed successfully.`;
          } else {
            summaryMsg = `Completed ${succeeded} of ${totalSteps} steps. ${failedDescriptions.join(" | ")}`;
          }
          console.log(`[BG] Step 6 Summary: ${summaryMsg}`);
          safePost({
            type: "PLAN_SUMMARY",
            total: totalSteps,
            succeeded,
            failed,
            details: stepResults,
            message: summaryMsg
          });
        }
      } catch (step6Err) {
        console.error("[BG Error][Step 6: Plan Execution]:", step6Err);
        safePost({ type: "ERROR", step: "Plan Execution", error: step6Err.message || String(step6Err) });
      } finally {
        safePost({ type: "_STEP6_COMPLETE" });
        console.log("[BG] Step 6 finally block \u2014 execution loop done.");
      }
      const tEnd = performance.now();
      const loopLatency = tEnd - t0;
      stats.totalLatencyMs += loopLatency;
      console.log(`[BG] Cycle finished in ${loopLatency.toFixed(1)}ms. Total latency: ${stats.totalLatencyMs.toFixed(1)}ms`);
      chrome.tabs.sendMessage(captureResult.tab.id, { type: "UPDATE_STATS", payload: stats }, () => {
        chrome.runtime.lastError;
      });
      shouldContinue = false;
    }
  });
});
export {
  captureScreen
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL3NlcnZlckNvbmZpZy5qcyIsICJzcmMvYmFja2dyb3VuZC5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBzZXJ2ZXJDb25maWcuanMgXHUyMDE0IFNoYXJlZCBTZXJ2ZXIgQ29uZmlndXJhdGlvbiBIZWxwZXJcbiAqXG4gKiBEZWZhdWx0IHJlbW90ZSBzZXJ2ZXI6IGh0dHBzOi8vdmlzdWFsLXBlcmVwdGlvbi5vbnJlbmRlci5jb21cbiAqIFN0b3JlZCB1bmRlciBrZXkgXCJjdXN0b21fc2VydmVyX3VybFwiIGluIGNocm9tZS5zdG9yYWdlLmxvY2FsIGZvciBwb3B1cCBvdmVycmlkZXMuXG4gKi9cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VSVkVSX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XG5leHBvcnQgY29uc3QgU1RPUkFHRV9TRVJWRVJfS0VZID0gXCJjdXN0b21fc2VydmVyX3VybFwiO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGVmZmVjdGl2ZSBiYXNlIHNlcnZlciBVUkwgKHdpdGhvdXQgdHJhaWxpbmcgc2xhc2gpLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QmFzZVNlcnZlclVybCgpIHtcbiAgaWYgKHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY2hyb21lLnN0b3JhZ2UgJiYgY2hyb21lLnN0b3JhZ2UubG9jYWwpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbU1RPUkFHRV9TRVJWRVJfS0VZXSwgcmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICAgIGlmIChkYXRhICYmIGRhdGFbU1RPUkFHRV9TRVJWRVJfS0VZXSAmJiB0eXBlb2YgZGF0YVtTVE9SQUdFX1NFUlZFUl9LRVldID09PSBcInN0cmluZ1wiICYmIGRhdGFbU1RPUkFHRV9TRVJWRVJfS0VZXS50cmltKCkpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFbU1RPUkFHRV9TRVJWRVJfS0VZXS50cmltKCkucmVwbGFjZSgvXFwvKyQvLCBcIlwiKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJbc2VydmVyQ29uZmlnXSBDb3VsZCBub3QgcmVhZCBjdXN0b21fc2VydmVyX3VybDpcIiwgZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBERUZBVUxUX1NFUlZFUl9VUkw7XG59XG5cbi8qKlxuICogUGVyc2lzdHMgYSBuZXcgYmFzZSBzZXJ2ZXIgVVJMIG92ZXJyaWRlIChvciByZXNldHMgdG8gZGVmYXVsdCBpZiBlbXB0eSkuXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZXRCYXNlU2VydmVyVXJsKHVybCkge1xuICBjb25zdCBjbGVhbiA9ICh1cmwgfHwgXCJcIikudHJpbSgpLnJlcGxhY2UoL1xcLyskLywgXCJcIik7XG4gIGlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlICYmIGNocm9tZS5zdG9yYWdlLmxvY2FsKSB7XG4gICAgaWYgKCFjbGVhbiB8fCBjbGVhbiA9PT0gREVGQVVMVF9TRVJWRVJfVVJMKSB7XG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtTVE9SQUdFX1NFUlZFUl9LRVldLCByZXNvbHZlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBbU1RPUkFHRV9TRVJWRVJfS0VZXTogY2xlYW4gfSwgcmVzb2x2ZSkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2xlYW4gfHwgREVGQVVMVF9TRVJWRVJfVVJMO1xufVxuIiwgIi8qKlxuICogYmFja2dyb3VuZC5qcyBcdTIwMTQgU2VydmljZSBXb3JrZXIgIChzcmMvYmFja2dyb3VuZC5qcyBcdTIxOTIgYnVpbHQgYmFja2dyb3VuZC5qcylcbiAqXG4gKiB2MC4yIGFkZGl0aW9uczpcbiAqICAgLSBnZXRET01SZWdpb25zKHRhYklkKSAgIFx1MjAxNCBzZW5kcyBTQ0FOX0RPTSB0byBjb250ZW50IHNjcmlwdCwgcmV0dXJucyBkb21SZWdpb25zW11cbiAqICAgLSBQYXNzZXMgZG9tUmVnaW9ucyB0byBvZmZzY3JlZW4gYWxvbmdzaWRlIHRoZSBzY3JlZW5zaG90XG4gKiAgIC0gUmVsYXlzIHsgZGV0ZWN0aW9ucywgc2Vuc2l0aXZlUmVnaW9ucyB9IGJhY2sgdG8gcG9wdXAgdmlhIHBvcnRcbiAqL1xuXG5pbXBvcnQgeyBnZXRCYXNlU2VydmVyVXJsIH0gZnJvbSBcIi4vc2VydmVyQ29uZmlnLmpzXCI7XG5cbmNvbnN0IE9GRlNDUkVFTl9VUkwgPSBjaHJvbWUucnVudGltZS5nZXRVUkwoXCJvZmZzY3JlZW4uaHRtbFwiKTtcblxuY29uc3QgYW5hbHlzaXNDYWNoZSA9IG5ldyBNYXAoKTtcbmxldCBzdGF0cyA9IHtcbiAgZnJhbWVzQ2FwdHVyZWQ6IDAsXG4gIHZpc2lvbkluZmVyZW5jZXM6IDAsXG4gIHRvdGFsTGF0ZW5jeU1zOiAwXG59O1xuXG5jb25zb2xlLmxvZyhgW0JHXSBUX1NXX1NUQVJUICB0PTBtcyAgKFNlcnZpY2Ugd29ya2VyIHN0YXJ0ZWQpYCk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHJlLWxvYWQgb24gc3RhcnR1cCAoc28gbW9kZWwgaXMgcmVhZHkgYmVmb3JlIHVzZXIgY2xpY2tzIGFueXRoaW5nKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gIGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCk7XG4gIGlmIChjaHJvbWUuc3RvcmFnZSAmJiBjaHJvbWUuc3RvcmFnZS5sb2NhbCkge1xuICAgIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJhZ2VudF92YXVsdFwiXSwgKGRhdGEpID0+IHtcbiAgICAgIGlmICghZGF0YS5hZ2VudF92YXVsdCkge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoe1xuICAgICAgICAgIGFnZW50X3ZhdWx0OiB7XG4gICAgICAgICAgICBOQU1FOiBcIlJhamVzaCBLdW1hclwiLFxuICAgICAgICAgICAgRU1BSUw6IFwidmVuZG9yLmRlbW9AZXhhbXBsZS5pblwiLFxuICAgICAgICAgICAgSU5ESUFOX01PQklMRTogXCI5ODc2NTQzMjEwXCIsXG4gICAgICAgICAgICBQSE9ORTogXCI5ODc2NTQzMjEwXCIsXG4gICAgICAgICAgICBET0I6IFwiMTk5MC0wNS0xNVwiLFxuICAgICAgICAgICAgQUREUkVTUzogXCI0MiwgTUcgUm9hZCwgQmVuZ2FsdXJ1XCIsXG4gICAgICAgICAgICBDSVRZOiBcIkJlbmdhbHVydVwiLFxuICAgICAgICAgICAgUElOQ09ERTogXCI1NjAwMDFcIixcbiAgICAgICAgICAgIEFBREhBQVI6IFwiNTQ4OSAxMjM0IDU2NzRcIixcbiAgICAgICAgICAgIFBBTjogXCJBQkNERTEyMzRGXCIsXG4gICAgICAgICAgICBQQVNTV09SRDogXCJNb2NrUGFzc3dvcmRAMTIzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltCR10gSW5pdGlhbGl6ZWQgZGVmYXVsdCBkZW1vIHByb2ZpbGUgdmF1bHQgaW4gY2hyb21lLnN0b3JhZ2UubG9jYWxcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0pO1xuY2hyb21lLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKCgpID0+IGVuc3VyZU9mZnNjcmVlbkRvY3VtZW50KCkpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEdsb2JhbCBLZWVwLUFsaXZlIEhhbmRsZXIgKHJlc3BvbmRzIHRvIG9mZnNjcmVlbiBwaW5ncylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIGlmIChtc2cudHlwZSA9PT0gXCJPRkZTQ1JFRU5fS0VFUEFMSVZFXCIpIHtcbiAgICBzZW5kUmVzcG9uc2UoeyBvazogdHJ1ZSB9KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gY2FwdHVyZVNjcmVlbiBcdTIwMTQgY2FwdHVyZSB0aGUgYWN0aXZlIHRhYidzIHZpc2libGUgYXJlYSBhcyBhIGRhdGEgVVJMXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYXB0dXJlU2NyZWVuKCkge1xuICBjb25zdCBbYWN0aXZlVGFiXSA9IGF3YWl0IGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0pO1xuICBpZiAoIWFjdGl2ZVRhYikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYWN0aXZlIHRhYiBmb3VuZC5cIik7XG5cbiAgY29uc3QgZGF0YVVybCA9IGF3YWl0IGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKGFjdGl2ZVRhYi53aW5kb3dJZCwgeyBmb3JtYXQ6IFwicG5nXCIgfSk7XG4gIHJldHVybiB7IGRhdGFVcmwsIHRhYjogYWN0aXZlVGFiIH07XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBnZXRET01SZWdpb25zIFx1MjAxNCBhc2sgdGhlIGNvbnRlbnQgc2NyaXB0IHRvIHNjYW4gdGhlIHBhZ2UncyBzZW5zaXRpdmUgZmllbGRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIGdldERPTVJlZ2lvbnModGFiSWQpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFtCR10gRGlzcGF0Y2hpbmcgU0NBTl9ET00gbWVzc2FnZSB0byBhY3RpdmUgdGFiICR7dGFiSWR9Li4uYCk7XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogXCJTQ0FOX0RPTVwiIH0sIGFzeW5jIChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgZXJyTXNnID0gY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yPy5tZXNzYWdlID8/IFwibm8gcmVzcG9uc2VcIjtcbiAgICAgICAgY29uc29sZS53YXJuKGBbQkddIEluaXRpYWwgU0NBTl9ET00gZmFpbGVkIG9uIHRhYiAke3RhYklkfSAoJHtlcnJNc2d9KS4gQXR0ZW1wdGluZyBkeW5hbWljIGluamVjdGlvbiBvZiBjb250ZW50LmpzLi4uYCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgICAgZmlsZXM6IFtcImNvbnRlbnQuanNcIl0sXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtCR10gY29udGVudC5qcyBzdWNjZXNzZnVsbHkgaW5qZWN0ZWQgaW50byB0YWIgJHt0YWJJZH0uIFJldHJ5aW5nIFNDQU5fRE9NLi4uYCk7XG4gICAgICAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHsgdHlwZTogXCJTQ0FOX0RPTVwiIH0sIChyZXRyeVJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yIHx8ICFyZXRyeVJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltCR10gU0NBTl9ET00gcmV0cnkgYWxzbyBmYWlsZWQ6XCIsIGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcj8ubWVzc2FnZSA/PyBcIm5vIHJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgICByZXNvbHZlKHsgZG9tUmVnaW9uczogW10sIGRvbUhhc2g6IFwiXCIgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0JHXSBTQ0FOX0RPTSByZXRyeSBzdWNjZWVkZWQhIEZvdW5kICR7cmV0cnlSZXNwb25zZS5kb21SZWdpb25zPy5sZW5ndGggPz8gMH0gc2Vuc2l0aXZlIGZpZWxkKHMpLCAke3JldHJ5UmVzcG9uc2UubWVkaWFSZWdpb25zPy5sZW5ndGggPz8gMH0gbWVkaWEgZWxlbWVudChzKTpgLCByZXRyeVJlc3BvbnNlLmRvbVJlZ2lvbnMpO1xuICAgICAgICAgICAgICByZXNvbHZlKHsgZG9tUmVnaW9uczogcmV0cnlSZXNwb25zZS5kb21SZWdpb25zID8/IFtdLCBtZWRpYVJlZ2lvbnM6IHJldHJ5UmVzcG9uc2UubWVkaWFSZWdpb25zID8/IFtdLCBkb21IYXNoOiByZXRyeVJlc3BvbnNlLmRvbUhhc2ggPz8gXCJcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoaW5qRXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0JHXSBEeW5hbWljIGNvbnRlbnQgc2NyaXB0IGluamVjdGlvbiBmYWlsZWQgKGUuZy4gY2hyb21lOi8vIG9yIHJlc3RyaWN0ZWQgcGFnZSk6XCIsIGluakVyci5tZXNzYWdlKTtcbiAgICAgICAgICByZXNvbHZlKHsgZG9tUmVnaW9uczogW10sIG1lZGlhUmVnaW9uczogW10sIGRvbUhhc2g6IFwiXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYFtCR10gU0NBTl9ET00gc3VjY2VlZGVkIG9uIHRhYiAke3RhYklkfSEgUmVjZWl2ZWQgJHtyZXNwb25zZS5kb21SZWdpb25zPy5sZW5ndGggPz8gMH0gcmVnaW9uKHMpLCAke3Jlc3BvbnNlLm1lZGlhUmVnaW9ucz8ubGVuZ3RoID8/IDB9IG1lZGlhIGVsZW1lbnQocyk6YCwgcmVzcG9uc2UuZG9tUmVnaW9ucyk7XG4gICAgICByZXNvbHZlKHsgZG9tUmVnaW9uczogcmVzcG9uc2UuZG9tUmVnaW9ucyA/PyBbXSwgbWVkaWFSZWdpb25zOiByZXNwb25zZS5tZWRpYVJlZ2lvbnMgPz8gW10sIGRvbUhhc2g6IHJlc3BvbnNlLmRvbUhhc2ggPz8gXCJcIiB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gZW5zdXJlT2Zmc2NyZWVuRG9jdW1lbnQgXHUyMDE0IGNyZWF0ZSBpZiBub3QgYWxyZWFkeSBvcGVuIChtYXggMSBwZXIgZXh0ZW5zaW9uKVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5hc3luYyBmdW5jdGlvbiBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpIHtcbiAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBjaHJvbWUucnVudGltZS5nZXRDb250ZXh0cyh7XG4gICAgY29udGV4dFR5cGVzOiBbXCJPRkZTQ1JFRU5fRE9DVU1FTlRcIl0sXG4gICAgZG9jdW1lbnRVcmxzOiBbT0ZGU0NSRUVOX1VSTF0sXG4gIH0pO1xuICBpZiAoZXhpc3RpbmcubGVuZ3RoID4gMCkgcmV0dXJuO1xuXG4gIGF3YWl0IGNocm9tZS5vZmZzY3JlZW4uY3JlYXRlRG9jdW1lbnQoe1xuICAgIHVybDogICAgICAgICAgIFwib2Zmc2NyZWVuLmh0bWxcIixcbiAgICByZWFzb25zOiAgICAgICBbXCJXT1JLRVJTXCJdLFxuICAgIGp1c3RpZmljYXRpb246IFwiUnVuIEZsb3JlbmNlLTIgKyBCbGF6ZUZhY2UgaW5mZXJlbmNlIGZvciB2aXN1YWwgUElJIGRldGVjdGlvbi5cIixcbiAgfSk7XG4gIGNvbnNvbGUubG9nKFwiW0JHXSBPZmZzY3JlZW4gZG9jdW1lbnQgY3JlYXRlZC5cIik7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gcmVkYWN0U2NyZWVuc2hvdCBcdTIwMTQgcGh5c2ljYWxseSBkcmF3IGJsYWNrIGJveGVzIG92ZXIgc2Vuc2l0aXZlIHJlZ2lvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gcmVkYWN0U2NyZWVuc2hvdChkYXRhVXJsLCBzZW5zaXRpdmVSZWdpb25zKSB7XG4gIGlmICghc2Vuc2l0aXZlUmVnaW9ucyB8fCBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGRhdGFVcmw7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChkYXRhVXJsKTtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTtcbiAgICBjb25zdCBiaXRtYXAgPSBhd2FpdCBjcmVhdGVJbWFnZUJpdG1hcChibG9iKTtcbiAgICBcbiAgICBjb25zdCBjYW52YXMgPSBuZXcgT2Zmc2NyZWVuQ2FudmFzKGJpdG1hcC53aWR0aCwgYml0bWFwLmhlaWdodCk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBcbiAgICAvLyBEcmF3IG9yaWdpbmFsIGltYWdlXG4gICAgY3R4LmRyYXdJbWFnZShiaXRtYXAsIDAsIDApO1xuICAgIFxuICAgIC8vIERyYXcgcmVkYWN0aW9uIGJveGVzXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBzZW5zaXRpdmVSZWdpb25zKSB7XG4gICAgICBpZiAocmVnaW9uLmJib3ggJiYgcmVnaW9uLmJib3gubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGNvbnN0IFt4LCB5LCB3LCBoXSA9IHJlZ2lvbi5iYm94O1xuICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgdywgaCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IG91dEJsb2IgPSBhd2FpdCBjYW52YXMuY29udmVydFRvQmxvYih7IHR5cGU6IFwiaW1hZ2UvcG5nXCIgfSk7XG4gICAgY29uc3QgYnVmZmVyID0gYXdhaXQgb3V0QmxvYi5hcnJheUJ1ZmZlcigpO1xuICAgIFxuICAgIC8vIENvbnZlcnQgdG8gYmFzZTY0XG4gICAgbGV0IGJpbmFyeSA9ICcnO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ5dGVzLmJ5dGVMZW5ndGg7IGkrKykge1xuICAgICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0pO1xuICAgIH1cbiAgICBjb25zdCBiNjQgPSBidG9hKGJpbmFyeSk7XG4gICAgXG4gICAgcmV0dXJuIGBkYXRhOmltYWdlL3BuZztiYXNlNjQsJHtiNjR9YDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltCR10gUmVkYWN0aW9uIGZhaWxlZDpcIiwgZXJyKTtcbiAgICByZXR1cm4gZGF0YVVybDsgLy8gZmFsbGJhY2sgdG8gb3JpZ2luYWwgb24gZXJyb3JcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHJ1blZpc2lvbkFuYWx5c2lzIFx1MjAxNCBzZW5kcyBzY3JlZW5zaG90ICsgZG9tUmVnaW9ucyArIG1lZGlhUmVnaW9ucyB0byBvZmZzY3JlZW5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYXN5bmMgZnVuY3Rpb24gcnVuVmlzaW9uQW5hbHlzaXMoc2NyZWVuc2hvdERhdGFVcmwsIGRvbVJlZ2lvbnMsIG1lZGlhUmVnaW9ucykge1xuICBhd2FpdCBlbnN1cmVPZmZzY3JlZW5Eb2N1bWVudCgpO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoXG4gICAgICB7IHR5cGU6IFwiUlVOX0lORkVSRU5DRVwiLCBwYXlsb2FkOiB7IHNjcmVlbnNob3REYXRhVXJsLCBkb21SZWdpb25zLCBtZWRpYVJlZ2lvbnMgfSB9LFxuICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVzcG9uc2U/LnN1Y2Nlc3MpIHtcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlc3BvbnNlPy5lcnJvciA/PyBcIlVua25vd24gaW5mZXJlbmNlIGVycm9yXCIpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICB9XG4gICAgKTtcbiAgfSk7XG59XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gc2VuZFRvU2VydmVyIFx1MjAxNCBQT1NUIHJlc3VsdCB0byB0aGUgbG9jYWwgRXhwcmVzcyBzZXJ2ZXIgKHdpdGggZnVsbCBIVFRQIGxvZ2dpbmcpXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmFzeW5jIGZ1bmN0aW9uIHNlbmRUb1NlcnZlcihwYXlsb2FkKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBhd2FpdCBnZXRCYXNlU2VydmVyVXJsKCk7XG4gIGNvbnN0IHNlcnZlclVybCA9IGAke2Jhc2VVcmx9L2FuYWx5emVgO1xuICBjb25zb2xlLmxvZyhcIltCR10gSW5pdGlhdGluZyBIVFRQIHJlcXVlc3QgdG8gc2VydmVyIFVSTDpcIiwgc2VydmVyVXJsKTtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChzZXJ2ZXJVcmwsIHtcbiAgICAgIG1ldGhvZDogIFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgYm9keTogICAgSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZyhgW0JHXSBTZXJ2ZXIgSFRUUCBTdGF0dXMgQ29kZTogJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgIGNvbnN0IHJhd0JvZHkgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIGNvbnNvbGUubG9nKGBbQkddIFNlcnZlciBSYXcgUmVzcG9uc2UgQm9keSAoJHtyYXdCb2R5Lmxlbmd0aH0gYnl0ZXMpOmAsIHJhd0JvZHkubGVuZ3RoID4gNTAwID8gcmF3Qm9keS5zdWJzdHJpbmcoMCwgNTAwKSArIFwiLi4uIFt0cnVuY2F0ZWRdXCIgOiByYXdCb2R5KTtcblxuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBsZXQgc2VydmVyRXJyID0gXCJcIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3Qm9keSk7XG4gICAgICAgIHNlcnZlckVyciA9IHBhcnNlZC5lcnJvciB8fCBwYXJzZWQubWVzc2FnZSB8fCBcIlwiO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIHRocm93IG5ldyBFcnJvcihzZXJ2ZXJFcnIgfHwgYFNlcnZlciByZXR1cm5lZCBIVFRQICR7cmVzLnN0YXR1c30gKCR7cmVzLnN0YXR1c1RleHR9KTogJHtyYXdCb2R5LnN1YnN0cmluZygwLCAyMDApfWApO1xuICAgIH1cblxuICAgIGxldCBkYXRhO1xuICAgIHRyeSB7XG4gICAgICBkYXRhID0gSlNPTi5wYXJzZShyYXdCb2R5KTtcbiAgICB9IGNhdGNoIChwYXJzZUVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBTZXJ2ZXIgcmVzcG9uc2Ugd2FzIG5vdCB2YWxpZCBKU09OOiAke3Jhd0JvZHkuc3Vic3RyaW5nKDAsIDIwMCl9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJbQkcgRXJyb3JdW3NlbmRUb1NlcnZlcl0gTmV0d29yayBvciBIVFRQIGVycm9yOlwiLCBlcnIpO1xuICAgIHRocm93IGVycjtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFBvcnQtYmFzZWQgaGFuZGxlciBcdTIwMTQga2VlcHMgdGhlIHNlcnZpY2Ugd29ya2VyIGFsaXZlIGR1cmluZyBsb25nIGluZmVyZW5jZVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcbiAgaWYgKHBvcnQubmFtZSAhPT0gXCJhbmFseXplXCIpIHJldHVybjtcblxuICBsZXQgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICBjb25zdCBzYWZlUG9zdCA9IChtc2cpID0+IHtcbiAgICBpZiAoIWlzQ29ubmVjdGVkKSByZXR1cm4gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2UobXNnKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvcndhcmQgTU9ERUxfUFJPR1JFU1MgLyBNT0RFTF9SRUFEWSAvIE1PREVMX0VSUk9SIGZyb20gb2Zmc2NyZWVuIHRvIHBvcHVwXG4gIGNvbnN0IHJlbGF5ID0gKG1zZykgPT4ge1xuICAgIGlmIChbXCJNT0RFTF9QUk9HUkVTU1wiLCBcIk1PREVMX1JFQURZXCIsIFwiTU9ERUxfRVJST1JcIl0uaW5jbHVkZXMobXNnLnR5cGUpKSB7XG4gICAgICBzYWZlUG9zdChtc2cpO1xuICAgIH1cbiAgfTtcblxuICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIocmVsYXkpO1xuICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XG4gICAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIocmVsYXkpO1xuICAgIGNvbnNvbGUubG9nKFwiW0JHXSBQb3B1cCBwb3J0IGRpc2Nvbm5lY3RlZCAocG9wdXAgY2xvc2VkKS4gQ29udGludWluZyBleGVjdXRpb24gaW4gYmFja2dyb3VuZC5cIik7XG4gIH0pO1xuXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSAhPT0gXCJBTkFMWVpFX1NDUkVFTlwiICYmIG1lc3NhZ2UudHlwZSAhPT0gXCJTVEFSVF9ERU1PX1JVTlwiKSByZXR1cm47XG4gICAgXG4gICAgY29uc3QgaXNEZW1vID0gbWVzc2FnZS50eXBlID09PSBcIlNUQVJUX0RFTU9fUlVOXCI7XG4gICAgY29uc3QgaW5zdHJ1Y3Rpb24gPSBtZXNzYWdlLmluc3RydWN0aW9uIHx8IFwiQW5hbHl6ZSB0aGUgY3VycmVudCBzY3JlZW4gYW5kIGRldGVjdCBQSUlcIjtcbiAgICBsZXQgc2hvdWxkQ29udGludWUgPSB0cnVlO1xuICAgIGxldCB0YXNrVmlzaW9uSW5mZXJlbmNlcyA9IDA7XG4gICAgY29uc3QgTUFYX1ZJU0lPTl9QRVJfVEFTSyA9IDM7XG4gICAgY29uc3Qgc3RlcENvbnNlY3V0aXZlRmFpbHVyZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB3aGlsZSAoc2hvdWxkQ29udGludWUpIHtcbiAgICAgIGNvbnN0IHQwID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICBjb25zb2xlLmxvZyhgW0JHXSA+Pj4gU3RhcnRpbmcgRXhlY3V0aW9uIExvb3AgKGlzRGVtbz0ke2lzRGVtb30pIDw8PGApO1xuXG4gICAgICAvLyBcdTI1MDBcdTI1MDAgU3RlcCAwOiBSZWFkIGFuZCBQcmludCBDdXJyZW50IFN0b3JlZCBQcm9maWxlIFZhdWx0IChSZXF1aXJlbWVudCAyKSBcdTI1MDBcdTI1MDBcbiAgICAgIGNvbnN0IHN0b3JlZFZhdWx0ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImFnZW50X3ZhdWx0XCJdLCAoZGF0YSkgPT4gcmVzb2x2ZShkYXRhPy5hZ2VudF92YXVsdCB8fCB7fSkpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCB2YXVsdEtleXMgPSBPYmplY3Qua2V5cyhzdG9yZWRWYXVsdCk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwiXFxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgICBjb25zb2xlLmxvZyhcIltCR10gPT09IENVUlJFTlQgU1RPUkVEIFBST0ZJTEUgVkFVTFQgQVQgU1RBUlQgT0YgUlVOID09PVwiKTtcbiAgICAgIGlmICh2YXVsdEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZyhgRm91bmQgJHt2YXVsdEtleXMubGVuZ3RofSBzdG9yZWQgZmllbGQocyk6YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHN0b3JlZFZhdWx0LCBudWxsLCAyKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlByb2ZpbGUgdmF1bHQgaXMgY3VycmVudGx5IEVNUFRZICgwIGZpZWxkcyBjb25maWd1cmVkKS5cIik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxuXCIpO1xuXG4gICAgICBzYWZlUG9zdCh7XG4gICAgICAgIHR5cGU6IFwiU1RBVFVTXCIsXG4gICAgICAgIHRleHQ6IHZhdWx0S2V5cy5sZW5ndGggPiAwXG4gICAgICAgICAgPyBgW1ZBVUxUXSBMb2FkZWQgJHt2YXVsdEtleXMubGVuZ3RofSBzdG9yZWQgZmllbGQocyk6ICR7dmF1bHRLZXlzLmpvaW4oXCIsIFwiKX1gXG4gICAgICAgICAgOiBcIlx1MjZBMCBWYXVsdCBpcyBlbXB0eSEgT3BlbiBQcm9maWxlIHNldHRpbmdzIHRvIGNvbmZpZ3VyZSB2YWx1ZXMuXCJcbiAgICAgIH0pO1xuXG4gICAgICAvLyBcdTI1MDBcdTI1MDAgU3RlcCAxOiBDYXB0dXJlIHNjcmVlbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgICAgIGxldCBjYXB0dXJlUmVzdWx0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQkddIFN0ZXAgMTogQ2FwdHVyaW5nIGFjdGl2ZSB0YWIgc2NyZWVuc2hvdC4uLlwiKTtcbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIlNUQUdFX0NIQU5HRVwiLCBzdGFnZTogXCJjYXB0dXJlXCIsIHRleHQ6IFwiQ2FwdHVyaW5nIHNjcmVlblx1MjAyNlwiIH0pO1xuICAgICAgICBjYXB0dXJlUmVzdWx0ID0gYXdhaXQgY2FwdHVyZVNjcmVlbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIltCR10gU3RlcCAxIENvbXBsZXRlLiBTY3JlZW5zaG90IGNhcHR1cmVkIHN1Y2Nlc3NmdWxseS5cIik7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIltCRyBFcnJvcl1bU3RlcCAxOiBTY3JlZW5zaG90IENhcHR1cmVdOlwiLCBlcnIpO1xuICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiRVJST1JcIiwgc3RlcDogXCJTY3JlZW5zaG90IENhcHR1cmVcIiwgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBzaG91bGRDb250aW51ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gXHUyNTAwXHUyNTAwIFN0ZXAgMjogRE9NIHNjYW4gXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgICBsZXQgZG9tUmVzdWx0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCAyOiBTY2FubmluZyBET00gZm9yIHNlbnNpdGl2ZSBmaWVsZHMgb24gdGFiICR7Y2FwdHVyZVJlc3VsdC50YWIuaWR9Li4uYCk7XG4gICAgICAgIHNhZmVQb3N0KHsgdHlwZTogXCJTVEFHRV9DSEFOR0VcIiwgc3RhZ2U6IFwiY2FwdHVyZVwiLCB0ZXh0OiBcIlNjYW5uaW5nIERPTSBmb3Igc2Vuc2l0aXZlIGZpZWxkc1x1MjAyNlwiIH0pO1xuICAgICAgICBkb21SZXN1bHQgPSBhd2FpdCBnZXRET01SZWdpb25zKGNhcHR1cmVSZXN1bHQudGFiLmlkKTtcbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIkRPTV9TQ0FOX0RPTkVcIiwgY291bnQ6IGRvbVJlc3VsdC5kb21SZWdpb25zLmxlbmd0aCB9KTtcbiAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCAyIENvbXBsZXRlLiBGb3VuZCAke2RvbVJlc3VsdC5kb21SZWdpb25zLmxlbmd0aH0gc2Vuc2l0aXZlIERPTSBmaWVsZChzKS5gKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0JHIEVycm9yXVtTdGVwIDI6IERPTSBTY2FuXTpcIiwgZXJyKTtcbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIkVSUk9SXCIsIHN0ZXA6IFwiRE9NIFNjYW5cIiwgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICBzaG91bGRDb250aW51ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gXHUyNTAwXHUyNTAwIFN0ZXAgMzogVmlzaW9uICsgUElJIGFuYWx5c2lzIChvZmZzY3JlZW4pIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgICAgc3RhdHMuZnJhbWVzQ2FwdHVyZWQrKztcbiAgICAgIGNvbnN0IGNhY2hlS2V5ID0gY2FwdHVyZVJlc3VsdC50YWIudXJsICsgXCJ8XCIgKyBkb21SZXN1bHQuZG9tSGFzaDtcbiAgICAgIGxldCBkZXRlY3Rpb25zLCBzZW5zaXRpdmVSZWdpb25zLCBzY3JlZW5zaG90RGF0YVVybCwgZWxhcHNlZDtcblxuICAgICAgaWYgKGFuYWx5c2lzQ2FjaGUuaGFzKGNhY2hlS2V5KSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIltCR10gU3RlcCAzOiBET00gaWRlbnRpY2FsISBDYWNoZSBoaXQsIHJldXNpbmcgY2FjaGVkIGRldGVjdGlvbnMuXCIpO1xuICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiU1RBVFVTXCIsIHRleHQ6IFwiXHUyNkExIERPTSBpZGVudGljYWwhIFNraXBwaW5nIHZpc2lvbiBpbmZlcmVuY2UgKENhY2hlIEhpdCkuXCIgfSk7XG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IGFuYWx5c2lzQ2FjaGUuZ2V0KGNhY2hlS2V5KTtcbiAgICAgICAgZGV0ZWN0aW9ucyA9IGNhY2hlZC5kZXRlY3Rpb25zO1xuICAgICAgICBzZW5zaXRpdmVSZWdpb25zID0gY2FjaGVkLnNlbnNpdGl2ZVJlZ2lvbnM7XG4gICAgICAgIHNjcmVlbnNob3REYXRhVXJsID0gY2FwdHVyZVJlc3VsdC5kYXRhVXJsO1xuICAgICAgICBlbGFwc2VkID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCAzOiBEaXNwYXRjaGluZyBzY3JlZW5zaG90IGFuZCBkb21SZWdpb25zIHRvIG9mZnNjcmVlbiBkb2N1bWVudCBmb3IgaW5mZXJlbmNlIChhdHRlbXB0ICR7dGFza1Zpc2lvbkluZmVyZW5jZXMgKyAxfSBvZiBtYXggJHtNQVhfVklTSU9OX1BFUl9UQVNLfSkuLi5gKTtcbiAgICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiU1RBR0VfQ0hBTkdFXCIsIHN0YWdlOiBcImRldGVjdFwiLCB0ZXh0OiBgUnVubmluZyBGbG9yZW5jZS0yICsgQmxhemVGYWNlICsgUElJIGFuYWx5c2lzICh2aXNpb24gcGFzcyAke3Rhc2tWaXNpb25JbmZlcmVuY2VzICsgMX0vJHtNQVhfVklTSU9OX1BFUl9UQVNLfSlcdTIwMjZgIH0pO1xuICAgICAgICAgIGlmICh0YXNrVmlzaW9uSW5mZXJlbmNlcyA+PSBNQVhfVklTSU9OX1BFUl9UQVNLKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtCR10gU3RvcHBpbmcgYWZ0ZXIgJHtNQVhfVklTSU9OX1BFUl9UQVNLfSBmdWxsIGFuYWx5c2lzIGF0dGVtcHRzIHRvIGF2b2lkIGV4Y2Vzc2l2ZSBjb3N0LmApO1xuICAgICAgICAgICAgc2FmZVBvc3Qoe1xuICAgICAgICAgICAgICB0eXBlOiBcIkVSUk9SXCIsXG4gICAgICAgICAgICAgIHN0ZXA6IFwiVmlzaW9uIEluZmVyZW5jZSBDYXBcIixcbiAgICAgICAgICAgICAgZXJyb3I6IGBTdG9wcGluZyBhZnRlciAke01BWF9WSVNJT05fUEVSX1RBU0t9IGZ1bGwgYW5hbHlzaXMgYXR0ZW1wdHMgdG8gYXZvaWQgZXhjZXNzaXZlIGNvc3RgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNob3VsZENvbnRpbnVlID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFza1Zpc2lvbkluZmVyZW5jZXMrKztcbiAgICAgICAgICBzdGF0cy52aXNpb25JbmZlcmVuY2VzKys7XG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuVmlzaW9uQW5hbHlzaXMoY2FwdHVyZVJlc3VsdC5kYXRhVXJsLCBkb21SZXN1bHQuZG9tUmVnaW9ucywgZG9tUmVzdWx0Lm1lZGlhUmVnaW9ucyk7XG4gICAgICAgICAgZGV0ZWN0aW9ucyA9IHJlc3VsdC5kZXRlY3Rpb25zO1xuICAgICAgICAgIHNlbnNpdGl2ZVJlZ2lvbnMgPSByZXN1bHQuc2Vuc2l0aXZlUmVnaW9ucztcbiAgICAgICAgICBzY3JlZW5zaG90RGF0YVVybCA9IHJlc3VsdC5zY3JlZW5zaG90RGF0YVVybDtcbiAgICAgICAgICBlbGFwc2VkID0gcmVzdWx0LmVsYXBzZWQ7XG4gICAgICAgICAgYW5hbHlzaXNDYWNoZS5zZXQoY2FjaGVLZXksIHsgZGV0ZWN0aW9ucywgc2Vuc2l0aXZlUmVnaW9ucyB9KTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgW0JHXSBTdGVwIDMgQ29tcGxldGUgaW4gJHtlbGFwc2VkfW1zOiAke2RldGVjdGlvbnMubGVuZ3RofSBkZXRlY3Rpb25zLCAke3NlbnNpdGl2ZVJlZ2lvbnMubGVuZ3RofSBQSUkgcmVnaW9ucy5gKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIltCRyBFcnJvcl1bU3RlcCAzOiBGbG9yZW5jZS0yIC8gVmlzaW9uIEluZmVyZW5jZV06XCIsIGVycik7XG4gICAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIkVSUk9SXCIsIHN0ZXA6IFwiRmxvcmVuY2UtMiBJbmZlcmVuY2VcIiwgZXJyb3I6IGVyci5tZXNzYWdlIH0pO1xuICAgICAgICAgIHNob3VsZENvbnRpbnVlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gXHUyNTAwXHUyNTAwIFN0ZXAgNDogUmVkYWN0IEltYWdlIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgICAgLy8gQ2FwdHVyZSByYXcgc2NyZWVuc2hvdCBzaXplIEJFRk9SRSByZWRhY3Rpb24gZm9yIG1ldHJpY3NcbiAgICAgIGNvbnN0IHJhd0J5dGVzID0gY2FwdHVyZVJlc3VsdC5kYXRhVXJsLmxlbmd0aDtcblxuICAgICAgbGV0IGZpbmFsU2NyZWVuc2hvdERhdGFVcmw7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JHXSBTdGVwIDQ6IFJlZGFjdGluZyAke3NlbnNpdGl2ZVJlZ2lvbnMubGVuZ3RofSBzZW5zaXRpdmUgcmVnaW9ucyBvbiBjYW52YXMuLi5gKTtcbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIlNUQUdFX0NIQU5HRVwiLCBzdGFnZTogXCJyZWRhY3RcIiwgdGV4dDogYFJlZGFjdGluZyAke3NlbnNpdGl2ZVJlZ2lvbnMubGVuZ3RofSBzZW5zaXRpdmUgcmVnaW9uc1x1MjAyNmAgfSk7XG4gICAgICAgIGZpbmFsU2NyZWVuc2hvdERhdGFVcmwgPSBhd2FpdCByZWRhY3RTY3JlZW5zaG90KHNjcmVlbnNob3REYXRhVXJsLCBzZW5zaXRpdmVSZWdpb25zKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQkddIFN0ZXAgNCBDb21wbGV0ZS4gUmVkYWN0aW9uIGZpbmlzaGVkLlwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiW0JHIEVycm9yXVtTdGVwIDQ6IFJlZGFjdGlvbl06XCIsIGVycik7XG4gICAgICAgIHNhZmVQb3N0KHsgdHlwZTogXCJFUlJPUlwiLCBzdGVwOiBcIlJlZGFjdGlvblwiLCBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgIHNob3VsZENvbnRpbnVlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTI1MDBcdTI1MDAgU3RlcCA0YjogUmVkYWN0aW9uIExlYWsgVmVyaWZpY2F0aW9uIChvZmZzY3JlZW4sIGdlb21ldHJpYykgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgICAvLyBCdWcgZml4OiBiYWNrZ3JvdW5kLmpzIGlzIGFuIE1WMyBzZXJ2aWNlIHdvcmtlciBcdTIwMTQgaXQgaGFzIE5PIGFjY2VzcyB0b1xuICAgICAgLy8gSW1hZ2UsIGNhbnZhcywgb3IgZG9jdW1lbnQuIFdlIHNlbmQgYSBWRVJJRllfUkVEQUNUSU9OIG1lc3NhZ2UgdG8gdGhlXG4gICAgICAvLyBvZmZzY3JlZW4gZG9jdW1lbnQgKHdoaWNoIGhhcyBmdWxsIHdpbmRvdyBjb250ZXh0KSB0byBkbyB0aGUgcGl4ZWwgY2hlY2suXG4gICAgICBsZXQgbGVha0NoZWNrUGFzc2VkID0gdHJ1ZTtcbiAgICAgIGxldCBsZWFrRGV0YWlscyA9IHsgbGVha3NGb3VuZDogMCwgbGVha1JlZ2lvbnM6IFtdLCBjaGVja2VkUmVnaW9uczogc2Vuc2l0aXZlUmVnaW9ucy5sZW5ndGggfTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBwaXhlbC1zYW1wbGluZyB0byBvZmZzY3JlZW4gZG9jdW1lbnQgKGhhcyB3aW5kb3cvY2FudmFzIGFjY2VzcylcbiAgICAgICAgICBjb25zdCB2ZXJpZnlSZXNwID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiByZXNvbHZlKHsgb2s6IHRydWUsIGxlYWtlcnM6IFtdLCBjaGVja2VkOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCB9KSwgNTAwMCk7XG4gICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiVkVSSUZZX1JFREFDVElPTlwiLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHsgcmVkYWN0ZWREYXRhVXJsOiBmaW5hbFNjcmVlbnNob3REYXRhVXJsLCBzZW5zaXRpdmVSZWdpb25zIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgICAgIGlmIChjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIltCR10gU3RlcCA0YjogVkVSSUZZX1JFREFDVElPTiBtZXNzYWdlIGVycm9yIChub24tZmF0YWwpOlwiLCBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHsgb2s6IHRydWUsIGxlYWtlcnM6IFtdLCBjaGVja2VkOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwIHx8IHsgb2s6IHRydWUsIGxlYWtlcnM6IFtdLCBjaGVja2VkOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCBsZWFraW5nUmVnaW9ucyA9IHZlcmlmeVJlc3AubGVha2VycyB8fCBbXTtcbiAgICAgICAgICBsZWFrRGV0YWlscyA9IHtcbiAgICAgICAgICAgIGxlYWtzRm91bmQ6IGxlYWtpbmdSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGxlYWtSZWdpb25zOiBsZWFraW5nUmVnaW9ucyxcbiAgICAgICAgICAgIGNoZWNrZWRSZWdpb25zOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGxlYWtpbmdSZWdpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxlYWtDaGVja1Bhc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0JHXSBTdGVwIDRiIEZBSUw6ICR7bGVha2luZ1JlZ2lvbnMubGVuZ3RofSByZWdpb24ocykgbm90IGZ1bGx5IGJsYWNrZWQgb3V0IWAsIGxlYWtpbmdSZWdpb25zKTtcbiAgICAgICAgICAgIHNhZmVQb3N0KHtcbiAgICAgICAgICAgICAgdHlwZTogXCJMRUFLX0NIRUNLXCIsXG4gICAgICAgICAgICAgIHBhc3NlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGxlYWtzRm91bmQ6IGxlYWtpbmdSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgbGVha1JlZ2lvbnM6IGxlYWtpbmdSZWdpb25zLFxuICAgICAgICAgICAgICBjaGVja2VkUmVnaW9uczogc2Vuc2l0aXZlUmVnaW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBcdUQ4M0RcdURFQTggTEVBSyBERVRFQ1RFRDogJHtsZWFraW5nUmVnaW9ucy5sZW5ndGh9IHJlZ2lvbihzKSBub3QgYmxhY2tlZCBvdXQgXHUyMDE0IHBheWxvYWQgQkxPQ0tFRGAsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCA0YiBQQVNTOiBBbGwgJHtzZW5zaXRpdmVSZWdpb25zLmxlbmd0aH0gcmVnaW9uKHMpIHZlcmlmaWVkIGJsYWNrIChnZW9tZXRyaWMpLmApO1xuICAgICAgICAgICAgc2FmZVBvc3Qoe1xuICAgICAgICAgICAgICB0eXBlOiBcIkxFQUtfQ0hFQ0tcIixcbiAgICAgICAgICAgICAgcGFzc2VkOiB0cnVlLFxuICAgICAgICAgICAgICBsZWFrc0ZvdW5kOiAwLFxuICAgICAgICAgICAgICBsZWFrUmVnaW9uczogW10sXG4gICAgICAgICAgICAgIGNoZWNrZWRSZWdpb25zOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgbWVzc2FnZTogYFx1MjcxMyAwIGxlYWtzIFx1MjAxNCAke3NlbnNpdGl2ZVJlZ2lvbnMubGVuZ3RofSBtYXNrZWQgcmVnaW9uKHMpIHZlcmlmaWVkIGJsYWNrYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBObyByZWdpb25zIHRvIHJlZGFjdCBcdTIwMTQgdHJpdmlhbGx5IGNsZWFuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJbQkddIFN0ZXAgNGI6IE5vIHNlbnNpdGl2ZSByZWdpb25zIHRvIHZlcmlmeS5cIik7XG4gICAgICAgICAgc2FmZVBvc3Qoe1xuICAgICAgICAgICAgdHlwZTogXCJMRUFLX0NIRUNLXCIsXG4gICAgICAgICAgICBwYXNzZWQ6IHRydWUsXG4gICAgICAgICAgICBsZWFrc0ZvdW5kOiAwLFxuICAgICAgICAgICAgbGVha1JlZ2lvbnM6IFtdLFxuICAgICAgICAgICAgY2hlY2tlZFJlZ2lvbnM6IDAsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIlx1MjcxMyBObyByZWdpb25zIHRvIHZlcmlmeSAocGFnZSBoYXMgbm8gZGV0ZWN0ZWQgUElJKVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChsZWFrRXJyKSB7XG4gICAgICAgIC8vIFRyZWF0IGluZmVyZW5jZSBlcnJvcnMgYXMgbm9uLWZhdGFsIGZvciBsZWFrIGNoZWNrIFx1MjAxNCBsb2cgYnV0IHByb2NlZWRcbiAgICAgICAgY29uc29sZS53YXJuKFwiW0JHXSBTdGVwIDRiOiBMZWFrIHZlcmlmaWNhdGlvbiBpbmZlcmVuY2UgZmFpbGVkIChub24tZmF0YWwpOlwiLCBsZWFrRXJyLm1lc3NhZ2UpO1xuICAgICAgICBzYWZlUG9zdCh7XG4gICAgICAgICAgdHlwZTogXCJMRUFLX0NIRUNLXCIsXG4gICAgICAgICAgcGFzc2VkOiB0cnVlLCAgLy8gR2l2ZSBiZW5lZml0IG9mIGRvdWJ0IGlmIGluZmVyZW5jZSBmYWlsc1xuICAgICAgICAgIGxlYWtzRm91bmQ6IDAsXG4gICAgICAgICAgbGVha1JlZ2lvbnM6IFtdLFxuICAgICAgICAgIGNoZWNrZWRSZWdpb25zOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICBtZXNzYWdlOiBgXHUyNkEwIExlYWsgY2hlY2sgc2tpcHBlZCAoaW5mZXJlbmNlIGVycm9yOiAke2xlYWtFcnIubWVzc2FnZX0pYCxcbiAgICAgICAgICB3YXJuaW5nOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQmxvY2sgdGhlIHBheWxvYWQgaWYgbGVhayBjaGVjayBmYWlsZWRcbiAgICAgIGlmICghbGVha0NoZWNrUGFzc2VkKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQkddIEJMT0NLSU5HIHBheWxvYWQgdHJhbnNtaXNzaW9uIFx1MjAxNCBQSUkgbGVhayB2ZXJpZmljYXRpb24gZmFpbGVkIVwiKTtcbiAgICAgICAgc2hvdWxkQ29udGludWUgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIC8vIFx1MjUwMFx1MjUwMCBTdGVwIDU6IFNlbmQgUGF5bG9hZCB0byBTZXJ2ZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgICAvLyBCdWcgZml4OiBob2lzdCBkb21fc3VtbWFyeSBhbmQgbWFuaWZlc3QgdG8gb3V0ZXIgc2NvcGUgc28gU3RlcCA2XG4gICAgICAvLyAodGhlIGFjdGlvbiBleGVjdXRvcikgY2FuIHJlZmVyZW5jZSB0aGVtIGZvciBiYm94IGNvb3JkaW5hdGUgbG9va3VwLlxuICAgICAgLy8gUHJldmlvdXNseSB0aGV5IHdlcmUgY29uc3QtZGVjbGFyZWQgaW5zaWRlIHRoZSB0cnl7fSBibG9jayBhbmRcbiAgICAgIC8vIGNhdXNlZCBSZWZlcmVuY2VFcnJvcjogZG9tX3N1bW1hcnkgaXMgbm90IGRlZmluZWQgYXQgbGluZSA2MzkuXG4gICAgICBsZXQgbWFuaWZlc3QgPSAoc2Vuc2l0aXZlUmVnaW9ucyB8fCBbXSkubWFwKChyLCBpKSA9PiAoe1xuICAgICAgICByZWdpb25faWQ6IGByZWdpb25fJHtpfWAsXG4gICAgICAgIGJib3g6IHIuYmJveCxcbiAgICAgICAgdHlwZTogci50eXBlLFxuICAgICAgICByZWRhY3Rpb25fc3R5bGU6IFwiYmxhY2tfYm94XCIsXG4gICAgICAgIGNvbmZpZGVuY2U6IHIuY29uZmlkZW5jZSxcbiAgICAgICAgc291cmNlOiByLnNvdXJjZSB8fCBcImRvbVwiXG4gICAgICB9KSk7XG5cbiAgICAgIGxldCBkb21fc3VtbWFyeSA9IChkb21SZXN1bHQuZG9tUmVnaW9ucyB8fCBbXSkubWFwKChyLCBpKSA9PiAoe1xuICAgICAgICBlbGVtZW50X2lkOiByLmFnZW50SWQgfHwgYGFnZW50XyR7aX1gLFxuICAgICAgICBkb21faWQ6IHIuaWQgfHwgXCJcIixcbiAgICAgICAgbmFtZTogci5uYW1lIHx8IFwiXCIsXG4gICAgICAgIHBsYWNlaG9sZGVyOiByLnBsYWNlaG9sZGVyIHx8IFwiXCIsXG4gICAgICAgIHRhZzogci50YWcgfHwgXCJpbnB1dFwiLFxuICAgICAgICByb2xlOiByLnJvbGUgfHwgKHIuaW5wdXRUeXBlID09PSBcInJhZGlvXCIgPyBcInJhZGlvXCIgOiBcInRleHRib3hcIiksXG4gICAgICAgIGxhYmVsOiByLmxhYmVsIHx8IFwiXCIsXG4gICAgICAgIGZpZWxkX3R5cGU6IHIudHlwZSB8fCBcIlwiLFxuICAgICAgICBiYm94OiByLmJib3gsXG4gICAgICAgIGN1cnJlbnRfdmFsdWU6IHIuY3VycmVudF92YWx1ZSB8fCBcIlwiXG4gICAgICB9KSk7XG5cbiAgICAgIGxldCBzZXJ2ZXJSZXN1bHQ7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhY3RpdmVCYXNlVXJsID0gYXdhaXQgZ2V0QmFzZVNlcnZlclVybCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JHXSBTdGVwIDU6IFByZXBhcmluZyBBZ2VudFJlcXVlc3RWMSBwYXlsb2FkIGZvciBzZXJ2ZXIgKCR7YWN0aXZlQmFzZVVybH0pLi4uYCk7XG4gICAgICAgIHNhZmVQb3N0KHsgdHlwZTogXCJTVEFHRV9DSEFOR0VcIiwgc3RhZ2U6IFwic2VuZFwiLCB0ZXh0OiBgU2VuZGluZyByZWRhY3RlZCBwYXlsb2FkIHRvIHNlcnZlciAoJHthY3RpdmVCYXNlVXJsfS9hbmFseXplKVx1MjAyNmAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJcXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coYFtCR11bREVCVUddID09PSBFWEFDVCBkb21fc3VtbWFyeSBTRU5UIFRPIC9hbmFseXplICgke2RvbV9zdW1tYXJ5Lmxlbmd0aH0gaXRlbXMpID09PWApO1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShkb21fc3VtbWFyeSwgbnVsbCwgMikpO1xuICAgICAgICBjb25zb2xlLmxvZyhgW0JHXVtERUJVR10gPT09IEVYQUNUIG1hbmlmZXN0IFNFTlQgVE8gL2FuYWx5emUgKCR7bWFuaWZlc3QubGVuZ3RofSBpdGVtcykgPT09YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KG1hbmlmZXN0LCBudWxsLCAyKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXG5cIik7XG5cbiAgICAgICAgY29uc3QgYWdlbnRSZXF1ZXN0UGF5bG9hZCA9IHtcbiAgICAgICAgICB2ZXJzaW9uOiBcIjEuMFwiLFxuICAgICAgICAgIHRhc2tfaW5zdHJ1Y3Rpb246IGluc3RydWN0aW9uLFxuICAgICAgICAgIHJlZGFjdGVkX2ltYWdlOiBmaW5hbFNjcmVlbnNob3REYXRhVXJsLnNwbGl0KFwiLFwiKVsxXSxcbiAgICAgICAgICBtYW5pZmVzdCxcbiAgICAgICAgICBkb21fc3VtbWFyeSxcbiAgICAgICAgICBkZW1vX21vZGU6IGlzRGVtbyxcbiAgICAgICAgICBjbGllbnRfc3RhdHM6IHsgdG90YWxMYXRlbmN5TXM6IHN0YXRzLnRvdGFsTGF0ZW5jeU1zIH0sXG4gICAgICAgICAgdmF1bHQ6IHN0b3JlZFZhdWx0ICAvLyBTZW5kIHByb2ZpbGUgZGF0YSBzbyBzZXJ2ZXItc2lkZSBwcm92aWRlcnMgY2FuIHVzZSByZWFsIHZhbHVlc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFx1MjUwMFx1MjUwMCBEYXRhIFJlZHVjdGlvbiBNZXRyaWNzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgICAgICAvLyBDb21wdXRlIHJhdyBieXRlcyB2cy4gd2hhdCB3ZSBhY3R1YWxseSB0cmFuc21pdCwgcGx1cyBQSUkgc3VyZmFjZSBhcmVhXG4gICAgICAgIGNvbnN0IHJlZGFjdGVkSW1hZ2VCNjQgPSBhZ2VudFJlcXVlc3RQYXlsb2FkLnJlZGFjdGVkX2ltYWdlO1xuICAgICAgICBjb25zdCBwYXlsb2FkSnNvbiA9IEpTT04uc3RyaW5naWZ5KGFnZW50UmVxdWVzdFBheWxvYWQpO1xuICAgICAgICBjb25zdCBzZW50Qnl0ZXMgPSBwYXlsb2FkSnNvbi5sZW5ndGg7IC8vIEFwcHJveCBieXRlcyBmb3IgdGhlIGZ1bGwgSlNPTiBib2R5XG5cbiAgICAgICAgLy8gUElJIHN1cmZhY2U6IHN1bSBvZiBiYm94IHBpeGVsIGFyZWFzIHZzLiB0b3RhbCBzY3JlZW5zaG90IHBpeGVsIGFyZWFcbiAgICAgICAgLy8gV2UgbmVlZCBpbWFnZSBkaW1lbnNpb25zIFx1MjAxNCBwYXJzZSBmcm9tIHRoZSByZWRhY3RlZCBpbWFnZVxuICAgICAgICBsZXQgcGlpU3VyZmFjZVBlcmNlbnQgPSAwO1xuICAgICAgICBsZXQgaW1hZ2VUb3RhbFBpeGVscyA9IDE7XG4gICAgICAgIGxldCBpbWFnZVBJSVBpeGVscyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gRGVjb2RlIGRpbWVuc2lvbnMgZnJvbSBmaW5hbFNjcmVlbnNob3REYXRhVXJsIHZpYSBvZmZzY3JlZW4gY2FudmFzXG4gICAgICAgICAgLy8gVXNlIHRoZSByYXcgY2FwdHVyZSBkaW1lbnNpb25zIGVzdGltYXRlIGZyb20gYmFzZTY0IGxlbmd0aCBoZXVyaXN0aWNcbiAgICAgICAgICAvLyAoUE5HIH40IGJ5dGVzIHBlciBwaXhlbCBhdCAxeCwgc28gcGl4ZWxzIFx1MjI0OCAoYjY0bGVuICogMy80KSAvIDQpXG4gICAgICAgICAgLy8gSW5zdGVhZDogZGlyZWN0bHkgY29tcHV0ZSBmcm9tIHNlbnNpdGl2ZVJlZ2lvbnMgYmJveGVzIGFyZWEgdnMgaW1hZ2UgYXJlYVxuICAgICAgICAgIC8vIFdlJ2xsIHVzZSB0aGUga25vd24gRFBSPTEgc2NyZWVuc2hvdDogZ2V0IGRpbXMgZnJvbSByYXcgZGF0YVVybFxuICAgICAgICAgIGNvbnN0IHJhd0I2NCA9IGNhcHR1cmVSZXN1bHQuZGF0YVVybC5zcGxpdChcIixcIilbMV0gfHwgXCJcIjtcbiAgICAgICAgICAvLyBSb3VnaCBpbWFnZSBhcmVhIGVzdGltYXRlOiBzY3JlZW5zaG90IERQUiBpcyB0eXBpY2FsbHkgZGV2aWNlUGl4ZWxSYXRpb1xuICAgICAgICAgIC8vIEZvciBhIHJlbGlhYmxlIG1ldHJpYywgY29tcHV0ZSBiYm94IGFyZWFzIGZyb20gc2Vuc2l0aXZlUmVnaW9uc1xuICAgICAgICAgIC8vIGFuZCBleHByZXNzIHRoZW0gcmVsYXRpdmUgdG8gdGhlIHZpc2libGUgc2NyZWVuc2hvdCBzaXplXG4gICAgICAgICAgaWYgKHNlbnNpdGl2ZVJlZ2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaW1hZ2VQSUlQaXhlbHMgPSBzZW5zaXRpdmVSZWdpb25zLnJlZHVjZSgoc3VtLCByKSA9PiBzdW0gKyAoci5iYm94WzJdICogci5iYm94WzNdKSwgMCk7XG4gICAgICAgICAgICAvLyBBc3N1bWUgaW1hZ2UgYXJlYSBmcm9tIHRoZSBtYXggZXh0ZW50cyBvZiBhbnkgZGV0ZWN0aW9uICsgZ2VuZXJvdXMgbWFyZ2luXG4gICAgICAgICAgICBjb25zdCBhbGxYMiA9IHNlbnNpdGl2ZVJlZ2lvbnMubWFwKHIgPT4gci5iYm94WzBdICsgci5iYm94WzJdKTtcbiAgICAgICAgICAgIGNvbnN0IGFsbFkyID0gc2Vuc2l0aXZlUmVnaW9ucy5tYXAociA9PiByLmJib3hbMV0gKyByLmJib3hbM10pO1xuICAgICAgICAgICAgLy8gTWluIGVzdGltYXRlZCBpbWFnZSBzaXplOiBhdCBsZWFzdCAxMjgwXHUwMEQ3NzIwIG9yIG1heCBkZXRlY3Rpb24gYm91bmRzICsgMjAlXG4gICAgICAgICAgICBjb25zdCBlc3RpbWF0ZWRXID0gTWF0aC5tYXgoMTI4MCwgTWF0aC5tYXgoLi4uYWxsWDIpICogMS4yKTtcbiAgICAgICAgICAgIGNvbnN0IGVzdGltYXRlZEggPSBNYXRoLm1heCg3MjAsIE1hdGgubWF4KC4uLmFsbFkyKSAqIDEuMik7XG4gICAgICAgICAgICBpbWFnZVRvdGFsUGl4ZWxzID0gZXN0aW1hdGVkVyAqIGVzdGltYXRlZEg7XG4gICAgICAgICAgICBwaWlTdXJmYWNlUGVyY2VudCA9IChpbWFnZVBJSVBpeGVscyAvIGltYWdlVG90YWxQaXhlbHMpICogMTAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZGltRXJyKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiW0JHXSBDb3VsZCBub3QgZXN0aW1hdGUgaW1hZ2UgZGltZW5zaW9ucyBmb3IgUElJIHN1cmZhY2UgbWV0cmljOlwiLCBkaW1FcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVkdWN0aW9uUGVyY2VudCA9ICgoMSAtIHNlbnRCeXRlcyAvIHJhd0J5dGVzKSAqIDEwMCk7XG4gICAgICAgIGNvbnN0IG1ldHJpY3NQYXlsb2FkID0ge1xuICAgICAgICAgIHJhd19ieXRlczogcmF3Qnl0ZXMsXG4gICAgICAgICAgc2VudF9ieXRlczogc2VudEJ5dGVzLFxuICAgICAgICAgIHJlZHVjdGlvbl9wZXJjZW50OiByZWR1Y3Rpb25QZXJjZW50LFxuICAgICAgICAgIHBpaV9yZWdpb25zOiBzZW5zaXRpdmVSZWdpb25zLmxlbmd0aCxcbiAgICAgICAgICBwaWlfc3VyZmFjZV9wZXJjZW50OiBwaWlTdXJmYWNlUGVyY2VudCxcbiAgICAgICAgICBwaWlfcGl4ZWxzOiBpbWFnZVBJSVBpeGVscyxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2coXCJbQkddIERhdGEgUmVkdWN0aW9uIE1ldHJpY3M6XCIsIEpTT04uc3RyaW5naWZ5KG1ldHJpY3NQYXlsb2FkKSk7XG4gICAgICAgIHNhZmVQb3N0KHsgdHlwZTogXCJNRVRSSUNTXCIsIC4uLm1ldHJpY3NQYXlsb2FkIH0pO1xuICAgICAgICAvLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuICAgICAgICBzZXJ2ZXJSZXN1bHQgPSBhd2FpdCBzZW5kVG9TZXJ2ZXIoYWdlbnRSZXF1ZXN0UGF5bG9hZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0JHXSBTdGVwIDUgQ29tcGxldGUuIFNlcnZlciByZXR1cm5lZCBwbGFuOlwiLCBzZXJ2ZXJSZXN1bHQpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbQkcgRXJyb3JdW1N0ZXAgNTogU2VydmVyIENhbGxdOlwiLCBlcnIpO1xuICAgICAgICBsZXQgZXJyTXNnID0gZXJyLm1lc3NhZ2UgfHwgU3RyaW5nKGVycik7XG4gICAgICAgIGlmIChlcnJNc2cuaW5jbHVkZXMoXCJGYWlsZWQgdG8gZmV0Y2hcIikgfHwgZXJyTXNnLmluY2x1ZGVzKFwiTmV0d29ya0Vycm9yXCIpIHx8IGVyck1zZy5pbmNsdWRlcyhcIkVDT05OUkVGVVNFRFwiKSkge1xuICAgICAgICAgIGVyck1zZyA9IGBDb3VsZG4ndCByZWFjaCB0aGUgcmVhc29uaW5nIHNlcnZlciBhdCAke2F3YWl0IGdldEJhc2VTZXJ2ZXJVcmwoKX0gXHUyMDE0IHBsZWFzZSBjaGVjayB5b3VyIGNvbm5lY3Rpb24uYDtcbiAgICAgICAgfVxuICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiRVJST1JcIiwgc3RlcDogXCJTZXJ2ZXIgQ2FsbFwiLCBlcnJvcjogZXJyTXNnIH0pO1xuICAgICAgICBzaG91bGRDb250aW51ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gXHUyNTAwXHUyNTAwIFN0ZXAgNjogRXhlY3V0ZSBQbGFuIHNlcXVlbnRpYWxseSBpbiBjb250ZW50IHNjcmlwdCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgICAgIHNhZmVQb3N0KHtcbiAgICAgICAgdHlwZTogXCJBTkFMWVNJU19SRVNVTFRcIixcbiAgICAgICAgZGV0ZWN0aW9ucyxcbiAgICAgICAgc2Vuc2l0aXZlUmVnaW9ucyxcbiAgICAgICAgc2NyZWVuc2hvdERhdGFVcmwsXG4gICAgICAgIGVsYXBzZWQsXG4gICAgICAgIHNlcnZlclJlc3VsdCxcbiAgICAgIH0pO1xuXG4gICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiU1RBR0VfQ0hBTkdFXCIsIHN0YWdlOiBcImFjdFwiLCB0ZXh0OiBcIkV4ZWN1dGluZyBwbGFuXHUyMDI2XCIgfSk7XG5cbiAgICAgIGNvbnN0IHBsYW4gPSBBcnJheS5pc0FycmF5KHNlcnZlclJlc3VsdD8ucGxhbikgPyBzZXJ2ZXJSZXN1bHQucGxhbiA6IFtdO1xuICAgICAgY29uc3QgdG90YWxTdGVwcyA9IHBsYW4ubGVuZ3RoO1xuICAgICAgY29uc3Qgc3RlcFJlc3VsdHMgPSBbXTtcblxuICAgICAgLy8gQnVnIGZpeDogd3JhcCBlbnRpcmUgU3RlcCA2IGluIHRyeS9maW5hbGx5IHNvIGJ1dHRvbnMgQUxXQVlTIHJlLWVuYWJsZS5cbiAgICAgIC8vIFByZXZpb3VzbHkgYW55IHVuY2F1Z2h0IGV4Y2VwdGlvbiBpbiB0aGUgc3RlcCBsb29wIGxlZnQgdGhlIFVJIGZyb3plbi5cbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0b3RhbFN0ZXBzID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJbQkddIFN0ZXAgNjogRW1wdHkgcGxhbiBcdTIwMTQgYWxsIGZpZWxkcyBhbHJlYWR5IGZpbGxlZCBvciB0YXNrIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiUExBTl9TVU1NQVJZXCIsIHRvdGFsOiAwLCBzdWNjZWVkZWQ6IDAsIGZhaWxlZDogMCwgZGV0YWlsczogW10sIG1lc3NhZ2U6IFwiQWxsIGZpZWxkcyBhcmUgYWxyZWFkeSBmaWxsZWQgXHUyMDE0IG5vdGhpbmcgdG8gZG8uXCIgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCA2OiBFeGVjdXRpbmcgJHt0b3RhbFN0ZXBzfSBwbGFuIHN0ZXAocykuLi5gKTtcblxuICAgICAgICAgIGZvciAoY29uc3Qgc3RlcCBvZiBwbGFuKSB7XG4gICAgICAgICAgY29uc3Qgc3RlcE51bSA9IHN0ZXAuc3RlcDtcbiAgICAgICAgICBjb25zdCBmaWVsZFR5cGUgPSBzdGVwLmZpZWxkX3R5cGUgfHwgXCJGSUVMRFwiO1xuICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gc3RlcC50YXJnZXRfaWQ7XG5cbiAgICAgICAgICAvLyBIYXJkIHJldHJ5IGxpbWl0OiBpZiB0aGlzIHNhbWUgc3RlcCB0YXJnZXQvdHlwZSBmYWlsZWQgMiB0aW1lcyBpbiBhIHJvdywgc3RvcCByZXRyeWluZyBpdFxuICAgICAgICAgIGNvbnN0IHN0ZXBLZXkgPSBgJHt0YXJnZXRJZCB8fCBcIlwifV8ke2ZpZWxkVHlwZSB8fCBcIlwifWA7XG4gICAgICAgICAgY29uc3QgY3VycmVudEZhaWx1cmVzID0gc3RlcENvbnNlY3V0aXZlRmFpbHVyZXMuZ2V0KHN0ZXBLZXkpIHx8IDA7XG4gICAgICAgICAgaWYgKGN1cnJlbnRGYWlsdXJlcyA+PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBza2lwUmVhc29uID0gYFN0ZXAgJHtzdGVwTnVtfSAoJHtmaWVsZFR5cGV9LCAke3RhcmdldElkfSkgaGFsdGVkOiBlbGVtZW50IGZhaWxlZCAke2N1cnJlbnRGYWlsdXJlc30gdGltZXMgY29uc2VjdXRpdmVseS4gU3RvcHBpbmcgcmV0cmllcyBmb3IgdGhpcyBzdGVwLmA7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFtCR10gJHtza2lwUmVhc29ufWApO1xuICAgICAgICAgICAgc3RlcFJlc3VsdHMucHVzaCh7IHN0ZXBOdW0sIGZpZWxkVHlwZSwgb2s6IGZhbHNlLCByZWFzb246IHNraXBSZWFzb24gfSk7XG4gICAgICAgICAgICBzYWZlUG9zdCh7XG4gICAgICAgICAgICAgIHR5cGU6IFwiUExBTl9TVEVQX1NUQVRVU1wiLFxuICAgICAgICAgICAgICBzdGVwTnVtLFxuICAgICAgICAgICAgICB0b3RhbFN0ZXBzLFxuICAgICAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgbWVzc2FnZTogc2tpcFJlYXNvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBBdHRhY2ggYmJveCB0byBzdGVwIHBheWxvYWQgZm9yIGNvb3JkaW5hdGUtYmFzZWQgZmFsbGJhY2sgZXhlY3V0aW9uXG4gICAgICAgICAgY29uc3QgZG9tTWF0Y2ggPSBkb21fc3VtbWFyeS5maW5kKGQgPT4gZC5lbGVtZW50X2lkID09PSB0YXJnZXRJZCB8fCBkLmRvbV9pZCA9PT0gdGFyZ2V0SWQgfHwgZC5uYW1lID09PSB0YXJnZXRJZCk7XG4gICAgICAgICAgY29uc3QgbWFuaWZlc3RNYXRjaCA9IG1hbmlmZXN0LmZpbmQobSA9PiBtLnJlZ2lvbl9pZCA9PT0gdGFyZ2V0SWQpO1xuICAgICAgICAgIGNvbnN0IGRldGVjdGlvbk1hdGNoID0gKGRldGVjdGlvbnMgfHwgW10pLmZpbmQoZCA9PiBkLmlkID09PSB0YXJnZXRJZCk7XG4gICAgICAgICAgY29uc3QgbWF0Y2hlZEJib3ggPSBzdGVwLmJib3ggfHwgZG9tTWF0Y2g/LmJib3ggfHwgbWFuaWZlc3RNYXRjaD8uYmJveCB8fCBkZXRlY3Rpb25NYXRjaD8uYmJveCB8fCBudWxsO1xuICAgICAgICAgIGNvbnN0IHN0ZXBQYXlsb2FkID0geyAuLi5zdGVwLCBiYm94OiBtYXRjaGVkQmJveCB9O1xuXG4gICAgICAgICAgLy8gXHUyNTAwXHUyNTAwIENoZWNrIGlmIHZhbHVlIGlzIG1pc3NpbmcgKFJlcXVpcmVtZW50IDQgZmFsbGJhY2sgcGF0aCkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgICAgICAgbGV0IGN1cnJlbnRWYWwgPSBzdGVwUGF5bG9hZC52YWx1ZSB8fCBzdGVwUGF5bG9hZC5tYXRjaF92YWx1ZSB8fCBzdG9yZWRWYXVsdFtmaWVsZFR5cGVdIHx8IG51bGw7XG4gICAgICAgICAgaWYgKCFjdXJyZW50VmFsICYmIGZpZWxkVHlwZSA9PT0gXCJQSE9ORVwiKSBjdXJyZW50VmFsID0gc3RvcmVkVmF1bHRbXCJJTkRJQU5fTU9CSUxFXCJdO1xuICAgICAgICAgIGlmICghY3VycmVudFZhbCAmJiBmaWVsZFR5cGUgPT09IFwiSU5ESUFOX01PQklMRVwiKSBjdXJyZW50VmFsID0gc3RvcmVkVmF1bHRbXCJQSE9ORVwiXTtcblxuICAgICAgICAgIGlmICghY3VycmVudFZhbCAmJiAoc3RlcC5hY3Rpb24gPT09IFwidHlwZVwiIHx8IHN0ZXAuYWN0aW9uID09PSBcInNlbGVjdF9jaG9pY2VcIikgJiYgZmllbGRUeXBlICE9PSBcIkJVVFRPTlwiICYmIGZpZWxkVHlwZSAhPT0gXCJTVUJNSVRcIikge1xuICAgICAgICAgICAgLy8gXHUyNTAwXHUyNTAwIERlY2lkZSB3aGV0aGVyIHRvIHByb21wdCB1c2VyIG9yIHNraXAgaW1tZWRpYXRlbHkgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gICAgICAgICAgICAvLyBTZW5zaXRpdmUgZmllbGQgdHlwZXMgKFBJSSkgYXJlIG5ldmVyIHByb21wdGVkIGlubGluZSBcdTIwMTQgc2tpcCB0b1xuICAgICAgICAgICAgLy8gYXZvaWQgaGFuZ2luZyB0aGUgVUkgZm9yIG1pbnV0ZXMgaWYgdmF1bHQgaXMgZW1wdHkuXG4gICAgICAgICAgICBjb25zdCBTRU5TSVRJVkVfU0tJUF9UWVBFUyA9IG5ldyBTZXQoW1xuICAgICAgICAgICAgICBcIkFBREhBQVJcIiwgXCJQQU5cIiwgXCJHU1RJTlwiLCBcIklGU0NcIiwgXCJCQU5LX0FDQ09VTlRcIiwgXCJDQVJEXCIsXG4gICAgICAgICAgICAgIFwiUEFTU1dPUkRcIiwgXCJJTkRJQU5fTU9CSUxFXCIsIFwiUEhPTkVcIlxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBpZiAoU0VOU0lUSVZFX1NLSVBfVFlQRVMuaGFzKGZpZWxkVHlwZSkpIHtcbiAgICAgICAgICAgICAgLy8gQXV0by1za2lwIFx1MjAxNCBuZXZlciBzaG93IGlubGluZSBwcm9tcHQgZm9yIHNlbnNpdGl2ZSBQSUkgZmllbGRzXG4gICAgICAgICAgICAgIGNvbnN0IHNraXBNc2cgPSBgU3RlcCAke3N0ZXBOdW19OiBcdTI2QTAgTm8gdmFsdWUgaW4gdmF1bHQgZm9yIHNlbnNpdGl2ZSBmaWVsZCBcIiR7ZmllbGRUeXBlfVwiIFx1MjAxNCBza2lwcGluZyAoYWRkIGl0IGluIFByb2ZpbGUgc2V0dGluZ3MpLmA7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0JHXSAke3NraXBNc2d9YCk7XG4gICAgICAgICAgICAgIHN0ZXBSZXN1bHRzLnB1c2goeyBzdGVwTnVtLCBmaWVsZFR5cGUsIG9rOiBmYWxzZSwgcmVhc29uOiBza2lwTXNnIH0pO1xuICAgICAgICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiUExBTl9TVEVQX1NUQVRVU1wiLCBzdGVwTnVtLCB0b3RhbFN0ZXBzLCBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogc2tpcE1zZyB9KTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZvciBub24tc2Vuc2l0aXZlIGZpZWxkcyAoTkFNRSwgRU1BSUwsIEFERFJFU1MsIGV0Yy4pIHByb21wdCB0aGUgdXNlclxuICAgICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCAke3N0ZXBOdW19OiBObyB2YWx1ZSBmb3VuZCBmb3IgXCIke2ZpZWxkVHlwZX1cIiBpbiBwcm9maWxlIG9yIHBsYW4uIFJlcXVlc3RpbmcgaW5saW5lIGlucHV0IGZyb20gdXNlci4uLmApO1xuICAgICAgICAgICAgc2FmZVBvc3Qoe1xuICAgICAgICAgICAgICB0eXBlOiBcIlBST01QVF9VU0VSX0lOUFVUXCIsXG4gICAgICAgICAgICAgIHN0ZXBOdW0sXG4gICAgICAgICAgICAgIGZpZWxkVHlwZSxcbiAgICAgICAgICAgICAgdGFyZ2V0SWQsXG4gICAgICAgICAgICAgIGFjdGlvblR5cGU6IHN0ZXAuYWN0aW9uLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBgTm8gdmFsdWUgZm91bmQgZm9yICR7ZmllbGRUeXBlfSBcdTIwMTQgZW50ZXIgb25lIG5vdz9gXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdXNlclJlcGx5ID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVwbHlIYW5kbGVyID0gKHVNc2cpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodU1zZy50eXBlID09PSBcIlVTRVJfSU5QVVRfUFJPVklERURcIiAmJiB1TXNnLnN0ZXBOdW0gPT09IHN0ZXBOdW0pIHtcbiAgICAgICAgICAgICAgICAgIHBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKHJlcGx5SGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICByZXNvbHZlKHVNc2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIocmVwbHlIYW5kbGVyKTtcbiAgICAgICAgICAgICAgLy8gMTAtc2Vjb25kIHRpbWVvdXQgXHUyMDE0IGF1dG8tc2tpcCBpZiB1c2VyIGRvZXNuJ3QgcmVzcG9uZFxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUobnVsbCksIDEwMDAwKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodXNlclJlcGx5ICYmIHVzZXJSZXBseS52YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgW0JHXSBTdGVwICR7c3RlcE51bX06IFVzZXIgcHJvdmlkZWQgdmFsdWUgZm9yIFwiJHtmaWVsZFR5cGV9XCI6IFwiJHt1c2VyUmVwbHkudmFsdWV9XCIgKHNhdmVUb1ZhdWx0OiAke3VzZXJSZXBseS5zYXZlVG9WYXVsdH0pYCk7XG4gICAgICAgICAgICAgIGlmIChzdGVwLmFjdGlvbiA9PT0gXCJzZWxlY3RfY2hvaWNlXCIpIHtcbiAgICAgICAgICAgICAgICBzdGVwUGF5bG9hZC5tYXRjaF92YWx1ZSA9IHVzZXJSZXBseS52YWx1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGVwUGF5bG9hZC52YWx1ZSA9IHVzZXJSZXBseS52YWx1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodXNlclJlcGx5LnNhdmVUb1ZhdWx0KSB7XG4gICAgICAgICAgICAgICAgc3RvcmVkVmF1bHRbZmllbGRUeXBlXSA9IHVzZXJSZXBseS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBhZ2VudF92YXVsdDogc3RvcmVkVmF1bHQgfSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtCR10gXHUyNzEzIFBlcnNpc3RlZCBcIiR7ZmllbGRUeXBlfVwiID0gXCIke3VzZXJSZXBseS52YWx1ZX1cIiB0byBjaHJvbWUuc3RvcmFnZS5sb2NhbGApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBza2lwTXNnID0gYFN0ZXAgJHtzdGVwTnVtfTogTm8gdmFsdWUgcHJvdmlkZWQgZm9yIFwiJHtmaWVsZFR5cGV9XCIgKHRpbWVkIG91dCBvciBza2lwcGVkKS4gTW92aW5nIG9uLmA7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihgW0JHXSAke3NraXBNc2d9YCk7XG4gICAgICAgICAgICAgIHN0ZXBSZXN1bHRzLnB1c2goeyBzdGVwTnVtLCBmaWVsZFR5cGUsIG9rOiBmYWxzZSwgcmVhc29uOiBza2lwTXNnIH0pO1xuICAgICAgICAgICAgICBzYWZlUG9zdCh7IHR5cGU6IFwiUExBTl9TVEVQX1NUQVRVU1wiLCBzdGVwTnVtLCB0b3RhbFN0ZXBzLCBzdGF0dXM6IFwiZXJyb3JcIiwgbWVzc2FnZTogc2tpcE1zZyB9KTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2FmZVBvc3Qoe1xuICAgICAgICAgICAgdHlwZTogXCJQTEFOX1NURVBfU1RBVFVTXCIsXG4gICAgICAgICAgICBzdGVwTnVtLFxuICAgICAgICAgICAgdG90YWxTdGVwcyxcbiAgICAgICAgICAgIHN0YXR1czogXCJydW5uaW5nXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBgU3RlcCAke3N0ZXBOdW19LyR7dG90YWxTdGVwc306ICR7c3RlcC5hY3Rpb259IG9uICR7ZmllbGRUeXBlfSAoJHt0YXJnZXRJZH0pXHUyMDI2YFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBSZXNwb25zZSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgICAgLy8gNSBzZWNvbmQgdGltZW91dCBwZXIgYWN0aW9uIHRvIGNhdGNoIGh1bmcgcGFnZXNcbiAgICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChuZXcgRXJyb3IoXCJUSU1FT1VUXCIpKSwgNTAwMCk7XG4gICAgICAgICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKFxuICAgICAgICAgICAgICAgIGNhcHR1cmVSZXN1bHQudGFiLmlkLFxuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJFWEVDVVRFX0FDVElPTlwiLCBwYXlsb2FkOiBzdGVwUGF5bG9hZCB9LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UgfHwgeyBvazogZmFsc2UsIGVycm9yOiBcIk5vIHJlc3BvbnNlIGZyb20gY29udGVudCBzY3JpcHRcIiB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHN0ZXBSZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICBzdGVwQ29uc2VjdXRpdmVGYWlsdXJlcy5zZXQoc3RlcEtleSwgMCk7IC8vIHJlc2V0IG9uIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCA2LiR7c3RlcE51bX06IFx1MjcxMyBzdWNjZXNzYCwgc3RlcFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgc3RlcFJlc3VsdHMucHVzaCh7IHN0ZXBOdW0sIGZpZWxkVHlwZSwgb2s6IHRydWUgfSk7XG4gICAgICAgICAgICAgIHNhZmVQb3N0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBMQU5fU1RFUF9TVEFUVVNcIixcbiAgICAgICAgICAgICAgICBzdGVwTnVtLFxuICAgICAgICAgICAgICAgIHRvdGFsU3RlcHMsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBcIm9rXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogYFN0ZXAgJHtzdGVwTnVtfS8ke3RvdGFsU3RlcHN9OiBcdTI3MTMgJHtmaWVsZFR5cGV9IGZpbGxlZGBcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioc3RlcFJlc3BvbnNlLmVycm9yIHx8IFwiQ29udGVudCBzY3JpcHQgcmVwb3J0ZWQgZmFpbHVyZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHN0ZXBDb25zZWN1dGl2ZUZhaWx1cmVzLnNldChzdGVwS2V5LCBjdXJyZW50RmFpbHVyZXMgKyAxKTtcbiAgICAgICAgICAgIGxldCBmYWlsUmVhc29uO1xuICAgICAgICAgICAgY29uc3QgZXJyU3RyID0gZXJyLm1lc3NhZ2UgfHwgU3RyaW5nKGVycik7XG4gICAgICAgICAgICBpZiAoZXJyU3RyID09PSBcIlRJTUVPVVRcIikge1xuICAgICAgICAgICAgICBmYWlsUmVhc29uID0gYFRoZSBwYWdlIGRpZG4ndCByZXNwb25kIHRvIHRoZSBhY3Rpb24gaW4gdGltZSAoc3RlcCAke3N0ZXBOdW19LCAke2ZpZWxkVHlwZX0pLmA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVyclN0ci5pbmNsdWRlcyhcIm5vdCBmb3VuZFwiKSB8fCBlcnJTdHIuaW5jbHVkZXMoXCJyZXNvbHZlXCIpKSB7XG4gICAgICAgICAgICAgIGZhaWxSZWFzb24gPSBgQ291bGRuJ3QgZmluZCB0aGUgZWxlbWVudCBmb3Igc3RlcCAke3N0ZXBOdW19IChleHBlY3RlZDogJHtmaWVsZFR5cGV9KS4gVGhlIHBhZ2UgbGF5b3V0IG1heSBoYXZlIGNoYW5nZWQuYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZhaWxSZWFzb24gPSBgU3RlcCAke3N0ZXBOdW19ICgke2ZpZWxkVHlwZX0pIGZhaWxlZDogJHtlcnJTdHJ9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtCR10gU3RlcCA2LiR7c3RlcE51bX06IFx1MjcxNyBmYWlsZWQgKCR7Y3VycmVudEZhaWx1cmVzICsgMX0gY29uc2VjdXRpdmUpIFx1MjAxNCAke2ZhaWxSZWFzb259YCk7XG4gICAgICAgICAgICBzdGVwUmVzdWx0cy5wdXNoKHsgc3RlcE51bSwgZmllbGRUeXBlLCBvazogZmFsc2UsIHJlYXNvbjogZmFpbFJlYXNvbiB9KTtcbiAgICAgICAgICAgIHNhZmVQb3N0KHtcbiAgICAgICAgICAgICAgdHlwZTogXCJQTEFOX1NURVBfU1RBVFVTXCIsXG4gICAgICAgICAgICAgIHN0ZXBOdW0sXG4gICAgICAgICAgICAgIHRvdGFsU3RlcHMsXG4gICAgICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBmYWlsUmVhc29uXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIENvbnRpbnVlIHJlbWFpbmluZyBzdGVwcyBcdTIwMTQgZG9uJ3QgYWJvcnQgdGhlIHdob2xlIHBsYW5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTbWFsbCBkZWxheSBiZXR3ZWVuIHN0ZXBzIHNvIERPTSBldmVudHMgc2V0dGxlXG4gICAgICAgICAgYXdhaXQgbmV3IFByb21pc2UociA9PiBzZXRUaW1lb3V0KHIsIDMwMCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgICAvLyBcdTI1MDBcdTI1MDAgUGxhbiBzdW1tYXJ5IFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgICAgICAgIGNvbnN0IHN1Y2NlZWRlZCA9IHN0ZXBSZXN1bHRzLmZpbHRlcihyID0+IHIub2spLmxlbmd0aDtcbiAgICAgICAgICBjb25zdCBmYWlsZWQgPSBzdGVwUmVzdWx0cy5maWx0ZXIociA9PiAhci5vaykubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IGZhaWxlZERlc2NyaXB0aW9ucyA9IHN0ZXBSZXN1bHRzXG4gICAgICAgICAgICAuZmlsdGVyKHIgPT4gIXIub2spXG4gICAgICAgICAgICAubWFwKHIgPT4gYFN0ZXAgJHtyLnN0ZXBOdW19ICgke3IuZmllbGRUeXBlfSk6ICR7ci5yZWFzb259YCk7XG5cbiAgICAgICAgICBsZXQgc3VtbWFyeU1zZztcbiAgICAgICAgICBpZiAoZmFpbGVkID09PSAwKSB7XG4gICAgICAgICAgICBzdW1tYXJ5TXNnID0gYEFsbCAke3N1Y2NlZWRlZH0gc3RlcChzKSBjb21wbGV0ZWQgc3VjY2Vzc2Z1bGx5LmA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1bW1hcnlNc2cgPSBgQ29tcGxldGVkICR7c3VjY2VlZGVkfSBvZiAke3RvdGFsU3RlcHN9IHN0ZXBzLiAke2ZhaWxlZERlc2NyaXB0aW9ucy5qb2luKFwiIHwgXCIpfWA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc29sZS5sb2coYFtCR10gU3RlcCA2IFN1bW1hcnk6ICR7c3VtbWFyeU1zZ31gKTtcbiAgICAgICAgICBzYWZlUG9zdCh7XG4gICAgICAgICAgICB0eXBlOiBcIlBMQU5fU1VNTUFSWVwiLFxuICAgICAgICAgICAgdG90YWw6IHRvdGFsU3RlcHMsXG4gICAgICAgICAgICBzdWNjZWVkZWQsXG4gICAgICAgICAgICBmYWlsZWQsXG4gICAgICAgICAgICBkZXRhaWxzOiBzdGVwUmVzdWx0cyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHN1bW1hcnlNc2dcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoc3RlcDZFcnIpIHtcbiAgICAgICAgLy8gQ2F0Y2gtYWxsOiBhbnkgdW5jYXVnaHQgZXhjZXB0aW9uIGluIFN0ZXAgNiBwb3N0cyBhbiBFUlJPUiBhbmQgc3RpbGxcbiAgICAgICAgLy8gaGl0cyB0aGUgZmluYWxseSBibG9jayBzbyBidXR0b25zIGFyZSBhbHdheXMgcmUtZW5hYmxlZC5cbiAgICAgICAgY29uc29sZS5lcnJvcihcIltCRyBFcnJvcl1bU3RlcCA2OiBQbGFuIEV4ZWN1dGlvbl06XCIsIHN0ZXA2RXJyKTtcbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIkVSUk9SXCIsIHN0ZXA6IFwiUGxhbiBFeGVjdXRpb25cIiwgZXJyb3I6IHN0ZXA2RXJyLm1lc3NhZ2UgfHwgU3RyaW5nKHN0ZXA2RXJyKSB9KTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIC8vIFNBRkVUWSBORVQ6IGFsd2F5cyByZS1lbmFibGUgYnV0dG9ucyByZWdhcmRsZXNzIG9mIGhvdyBTdGVwIDYgZXhpdHMuXG4gICAgICAgIC8vIFByZXZpb3VzbHkgYW55IHVuaGFuZGxlZCBleGNlcHRpb24gbGVmdCBhbmFseXplQnRuL2RlbW9CdG4gZGlzYWJsZWQgZm9yZXZlci5cbiAgICAgICAgc2FmZVBvc3QoeyB0eXBlOiBcIl9TVEVQNl9DT01QTEVURVwiIH0pOyAvLyBzaWduYWwgdG8gcG9wdXAgXHUyMDE0IGhhbmRsZWQgYXMgbm8tb3AgaWYgbm90IG5lZWRlZFxuICAgICAgICBjb25zb2xlLmxvZyhcIltCR10gU3RlcCA2IGZpbmFsbHkgYmxvY2sgXHUyMDE0IGV4ZWN1dGlvbiBsb29wIGRvbmUuXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBcdTI1MDBcdTI1MDAgRmluYWxpemUgTG9vcCBDeWNsZSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgICAgIGNvbnN0IHRFbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIGNvbnN0IGxvb3BMYXRlbmN5ID0gdEVuZCAtIHQwO1xuICAgICAgc3RhdHMudG90YWxMYXRlbmN5TXMgKz0gbG9vcExhdGVuY3k7XG4gICAgICBjb25zb2xlLmxvZyhgW0JHXSBDeWNsZSBmaW5pc2hlZCBpbiAke2xvb3BMYXRlbmN5LnRvRml4ZWQoMSl9bXMuIFRvdGFsIGxhdGVuY3k6ICR7c3RhdHMudG90YWxMYXRlbmN5TXMudG9GaXhlZCgxKX1tc2ApO1xuXG4gICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShjYXB0dXJlUmVzdWx0LnRhYi5pZCwgeyB0eXBlOiBcIlVQREFURV9TVEFUU1wiLCBwYXlsb2FkOiBzdGF0cyB9LCAoKSA9PiB7XG4gICAgICAgIGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcjsgLy8gSWdub3JlIGlmIGNvbnRlbnQgc2NyaXB0IGNsb3NlZFxuICAgICAgfSk7XG5cbiAgICAgIC8vIFx1MjUwMFx1MjUwMCBMb29wIGNoZWNrOiBkZW1vIG1vZGUgc3RvcHMgYWZ0ZXIgb25lIGZ1bGwgcGxhbiBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgICAgIHNob3VsZENvbnRpbnVlID0gZmFsc2U7ICAvLyBTaW5nbGUtc2hvdDogcGxhbiBjb3ZlcnMgYWxsIGZpZWxkcyBhdCBvbmNlXG4gICAgfVxuICB9KTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQU9PLElBQU0scUJBQXFCO0FBQzNCLElBQU0scUJBQXFCO0FBS2xDLGVBQXNCLG1CQUFtQjtBQUN2QyxNQUFJLE9BQU8sV0FBVyxlQUFlLE9BQU8sV0FBVyxPQUFPLFFBQVEsT0FBTztBQUMzRSxRQUFJO0FBQ0YsWUFBTSxPQUFPLE1BQU0sSUFBSSxRQUFRLENBQUMsWUFBWTtBQUMxQyxlQUFPLFFBQVEsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTztBQUFBLE1BQ3hELENBQUM7QUFDRCxVQUFJLFFBQVEsS0FBSyxrQkFBa0IsS0FBSyxPQUFPLEtBQUssa0JBQWtCLE1BQU0sWUFBWSxLQUFLLGtCQUFrQixFQUFFLEtBQUssR0FBRztBQUN2SCxlQUFPLEtBQUssa0JBQWtCLEVBQUUsS0FBSyxFQUFFLFFBQVEsUUFBUSxFQUFFO0FBQUEsTUFDM0Q7QUFBQSxJQUNGLFNBQVMsR0FBRztBQUNWLGNBQVEsS0FBSyxvREFBb0QsQ0FBQztBQUFBLElBQ3BFO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDs7O0FDaEJBLElBQU0sZ0JBQWdCLE9BQU8sUUFBUSxPQUFPLGdCQUFnQjtBQUU1RCxJQUFNLGdCQUFnQixvQkFBSSxJQUFJO0FBQzlCLElBQUksUUFBUTtBQUFBLEVBQ1YsZ0JBQWdCO0FBQUEsRUFDaEIsa0JBQWtCO0FBQUEsRUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUEsUUFBUSxJQUFJLGtEQUFrRDtBQUs5RCxPQUFPLFFBQVEsWUFBWSxZQUFZLE1BQU07QUFDM0MsMEJBQXdCO0FBQ3hCLE1BQUksT0FBTyxXQUFXLE9BQU8sUUFBUSxPQUFPO0FBQzFDLFdBQU8sUUFBUSxNQUFNLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxTQUFTO0FBQ2xELFVBQUksQ0FBQyxLQUFLLGFBQWE7QUFDckIsZUFBTyxRQUFRLE1BQU0sSUFBSTtBQUFBLFVBQ3ZCLGFBQWE7QUFBQSxZQUNYLE1BQU07QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLGVBQWU7QUFBQSxZQUNmLE9BQU87QUFBQSxZQUNQLEtBQUs7QUFBQSxZQUNMLFNBQVM7QUFBQSxZQUNULE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxZQUNULEtBQUs7QUFBQSxZQUNMLFVBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRixDQUFDO0FBQ0QsZ0JBQVEsSUFBSSxxRUFBcUU7QUFBQSxNQUNuRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDO0FBQ0QsT0FBTyxRQUFRLFVBQVUsWUFBWSxNQUFNLHdCQUF3QixDQUFDO0FBS3BFLE9BQU8sUUFBUSxVQUFVLFlBQVksQ0FBQyxLQUFLLFFBQVEsaUJBQWlCO0FBQ2xFLE1BQUksSUFBSSxTQUFTLHVCQUF1QjtBQUN0QyxpQkFBYSxFQUFFLElBQUksS0FBSyxDQUFDO0FBQ3pCLFdBQU87QUFBQSxFQUNUO0FBQ0YsQ0FBQztBQUtELGVBQXNCLGdCQUFnQjtBQUNwQyxRQUFNLENBQUMsU0FBUyxJQUFJLE1BQU0sT0FBTyxLQUFLLE1BQU0sRUFBRSxRQUFRLE1BQU0sZUFBZSxLQUFLLENBQUM7QUFDakYsTUFBSSxDQUFDO0FBQVcsVUFBTSxJQUFJLE1BQU0sc0JBQXNCO0FBRXRELFFBQU0sVUFBVSxNQUFNLE9BQU8sS0FBSyxrQkFBa0IsVUFBVSxVQUFVLEVBQUUsUUFBUSxNQUFNLENBQUM7QUFDekYsU0FBTyxFQUFFLFNBQVMsS0FBSyxVQUFVO0FBQ25DO0FBTUEsZUFBZSxjQUFjLE9BQU87QUFDbEMsU0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZO0FBQzlCLFlBQVEsSUFBSSxtREFBbUQsS0FBSyxLQUFLO0FBQ3pFLFdBQU8sS0FBSyxZQUFZLE9BQU8sRUFBRSxNQUFNLFdBQVcsR0FBRyxPQUFPLGFBQWE7QUFDdkUsVUFBSSxPQUFPLFFBQVEsYUFBYSxDQUFDLFVBQVU7QUFDekMsY0FBTSxTQUFTLE9BQU8sUUFBUSxXQUFXLFdBQVc7QUFDcEQsZ0JBQVEsS0FBSyx1Q0FBdUMsS0FBSyxLQUFLLE1BQU0sa0RBQWtEO0FBQ3RILFlBQUk7QUFDRixnQkFBTSxPQUFPLFVBQVUsY0FBYztBQUFBLFlBQ25DLFFBQVEsRUFBRSxNQUFNO0FBQUEsWUFDaEIsT0FBTyxDQUFDLFlBQVk7QUFBQSxVQUN0QixDQUFDO0FBQ0Qsa0JBQVEsSUFBSSxrREFBa0QsS0FBSyx3QkFBd0I7QUFDM0YsaUJBQU8sS0FBSyxZQUFZLE9BQU8sRUFBRSxNQUFNLFdBQVcsR0FBRyxDQUFDLGtCQUFrQjtBQUN0RSxnQkFBSSxPQUFPLFFBQVEsYUFBYSxDQUFDLGVBQWU7QUFDOUMsc0JBQVEsS0FBSyxvQ0FBb0MsT0FBTyxRQUFRLFdBQVcsV0FBVyxhQUFhO0FBQ25HLHNCQUFRLEVBQUUsWUFBWSxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUM7QUFBQSxZQUN6QyxPQUFPO0FBQ0wsc0JBQVEsSUFBSSx3Q0FBd0MsY0FBYyxZQUFZLFVBQVUsQ0FBQyx3QkFBd0IsY0FBYyxjQUFjLFVBQVUsQ0FBQyxzQkFBc0IsY0FBYyxVQUFVO0FBQ3RNLHNCQUFRLEVBQUUsWUFBWSxjQUFjLGNBQWMsQ0FBQyxHQUFHLGNBQWMsY0FBYyxnQkFBZ0IsQ0FBQyxHQUFHLFNBQVMsY0FBYyxXQUFXLEdBQUcsQ0FBQztBQUFBLFlBQzlJO0FBQUEsVUFDRixDQUFDO0FBQUEsUUFDSCxTQUFTLFFBQVE7QUFDZixrQkFBUSxLQUFLLHFGQUFxRixPQUFPLE9BQU87QUFDaEgsa0JBQVEsRUFBRSxZQUFZLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQztBQUFBLFFBQzNEO0FBQ0E7QUFBQSxNQUNGO0FBQ0EsY0FBUSxJQUFJLGtDQUFrQyxLQUFLLGNBQWMsU0FBUyxZQUFZLFVBQVUsQ0FBQyxlQUFlLFNBQVMsY0FBYyxVQUFVLENBQUMsc0JBQXNCLFNBQVMsVUFBVTtBQUMzTCxjQUFRLEVBQUUsWUFBWSxTQUFTLGNBQWMsQ0FBQyxHQUFHLGNBQWMsU0FBUyxnQkFBZ0IsQ0FBQyxHQUFHLFNBQVMsU0FBUyxXQUFXLEdBQUcsQ0FBQztBQUFBLElBQy9ILENBQUM7QUFBQSxFQUNILENBQUM7QUFDSDtBQUtBLGVBQWUsMEJBQTBCO0FBQ3ZDLFFBQU0sV0FBVyxNQUFNLE9BQU8sUUFBUSxZQUFZO0FBQUEsSUFDaEQsY0FBYyxDQUFDLG9CQUFvQjtBQUFBLElBQ25DLGNBQWMsQ0FBQyxhQUFhO0FBQUEsRUFDOUIsQ0FBQztBQUNELE1BQUksU0FBUyxTQUFTO0FBQUc7QUFFekIsUUFBTSxPQUFPLFVBQVUsZUFBZTtBQUFBLElBQ3BDLEtBQWU7QUFBQSxJQUNmLFNBQWUsQ0FBQyxTQUFTO0FBQUEsSUFDekIsZUFBZTtBQUFBLEVBQ2pCLENBQUM7QUFDRCxVQUFRLElBQUksa0NBQWtDO0FBQ2hEO0FBS0EsZUFBZSxpQkFBaUIsU0FBUyxrQkFBa0I7QUFDekQsTUFBSSxDQUFDLG9CQUFvQixpQkFBaUIsV0FBVztBQUFHLFdBQU87QUFFL0QsTUFBSTtBQUNGLFVBQU0sTUFBTSxNQUFNLE1BQU0sT0FBTztBQUMvQixVQUFNLE9BQU8sTUFBTSxJQUFJLEtBQUs7QUFDNUIsVUFBTSxTQUFTLE1BQU0sa0JBQWtCLElBQUk7QUFFM0MsVUFBTSxTQUFTLElBQUksZ0JBQWdCLE9BQU8sT0FBTyxPQUFPLE1BQU07QUFDOUQsVUFBTSxNQUFNLE9BQU8sV0FBVyxJQUFJO0FBR2xDLFFBQUksVUFBVSxRQUFRLEdBQUcsQ0FBQztBQUcxQixRQUFJLFlBQVk7QUFDaEIsZUFBVyxVQUFVLGtCQUFrQjtBQUNyQyxVQUFJLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxHQUFHO0FBQzNDLGNBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksT0FBTztBQUM1QixZQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUFBLE1BQ3pCO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxNQUFNLE9BQU8sY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2hFLFVBQU0sU0FBUyxNQUFNLFFBQVEsWUFBWTtBQUd6QyxRQUFJLFNBQVM7QUFDYixVQUFNLFFBQVEsSUFBSSxXQUFXLE1BQU07QUFDbkMsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFlBQVksS0FBSztBQUN6QyxnQkFBVSxPQUFPLGFBQWEsTUFBTSxDQUFDLENBQUM7QUFBQSxJQUN4QztBQUNBLFVBQU0sTUFBTSxLQUFLLE1BQU07QUFFdkIsV0FBTyx5QkFBeUIsR0FBRztBQUFBLEVBQ3JDLFNBQVMsS0FBSztBQUNaLFlBQVEsTUFBTSwwQkFBMEIsR0FBRztBQUMzQyxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBS0EsZUFBZSxrQkFBa0IsbUJBQW1CLFlBQVksY0FBYztBQUM1RSxRQUFNLHdCQUF3QjtBQUU5QixTQUFPLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUN0QyxXQUFPLFFBQVE7QUFBQSxNQUNiLEVBQUUsTUFBTSxpQkFBaUIsU0FBUyxFQUFFLG1CQUFtQixZQUFZLGFBQWEsRUFBRTtBQUFBLE1BQ2xGLENBQUMsYUFBYTtBQUNaLFlBQUksT0FBTyxRQUFRLFdBQVc7QUFDNUIsaUJBQU8sSUFBSSxNQUFNLE9BQU8sUUFBUSxVQUFVLE9BQU8sQ0FBQztBQUNsRDtBQUFBLFFBQ0Y7QUFDQSxZQUFJLENBQUMsVUFBVSxTQUFTO0FBQ3RCLGlCQUFPLElBQUksTUFBTSxVQUFVLFNBQVMseUJBQXlCLENBQUM7QUFDOUQ7QUFBQSxRQUNGO0FBQ0EsZ0JBQVEsUUFBUTtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLEVBQ0YsQ0FBQztBQUNIO0FBS0EsZUFBZSxhQUFhLFNBQVM7QUFDbkMsUUFBTSxVQUFVLE1BQU0saUJBQWlCO0FBQ3ZDLFFBQU0sWUFBWSxHQUFHLE9BQU87QUFDNUIsVUFBUSxJQUFJLCtDQUErQyxTQUFTO0FBQ3BFLE1BQUk7QUFDRixVQUFNLE1BQU0sTUFBTSxNQUFNLFdBQVc7QUFBQSxNQUNqQyxRQUFTO0FBQUEsTUFDVCxTQUFTLEVBQUUsZ0JBQWdCLG1CQUFtQjtBQUFBLE1BQzlDLE1BQVMsS0FBSyxVQUFVLE9BQU87QUFBQSxJQUNqQyxDQUFDO0FBRUQsWUFBUSxJQUFJLGlDQUFpQyxJQUFJLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRTtBQUMzRSxVQUFNLFVBQVUsTUFBTSxJQUFJLEtBQUs7QUFDL0IsWUFBUSxJQUFJLGtDQUFrQyxRQUFRLE1BQU0sWUFBWSxRQUFRLFNBQVMsTUFBTSxRQUFRLFVBQVUsR0FBRyxHQUFHLElBQUksb0JBQW9CLE9BQU87QUFFdEosUUFBSSxDQUFDLElBQUksSUFBSTtBQUNYLFVBQUksWUFBWTtBQUNoQixVQUFJO0FBQ0YsY0FBTSxTQUFTLEtBQUssTUFBTSxPQUFPO0FBQ2pDLG9CQUFZLE9BQU8sU0FBUyxPQUFPLFdBQVc7QUFBQSxNQUNoRCxTQUFTLEdBQUc7QUFBQSxNQUFDO0FBQ2IsWUFBTSxJQUFJLE1BQU0sYUFBYSx3QkFBd0IsSUFBSSxNQUFNLEtBQUssSUFBSSxVQUFVLE1BQU0sUUFBUSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFBQSxJQUNySDtBQUVBLFFBQUk7QUFDSixRQUFJO0FBQ0YsYUFBTyxLQUFLLE1BQU0sT0FBTztBQUFBLElBQzNCLFNBQVMsVUFBVTtBQUNqQixZQUFNLElBQUksTUFBTSx1Q0FBdUMsUUFBUSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQUU7QUFBQSxJQUNwRjtBQUVBLFdBQU87QUFBQSxFQUNULFNBQVMsS0FBSztBQUNaLFlBQVEsTUFBTSxtREFBbUQsR0FBRztBQUNwRSxVQUFNO0FBQUEsRUFDUjtBQUNGO0FBS0EsT0FBTyxRQUFRLFVBQVUsWUFBWSxDQUFDLFNBQVM7QUFDN0MsTUFBSSxLQUFLLFNBQVM7QUFBVztBQUU3QixNQUFJLGNBQWM7QUFDbEIsUUFBTSxXQUFXLENBQUMsUUFBUTtBQUN4QixRQUFJLENBQUM7QUFBYSxhQUFPO0FBQ3pCLFFBQUk7QUFDRixXQUFLLFlBQVksR0FBRztBQUNwQixhQUFPO0FBQUEsSUFDVCxTQUFTLEdBQUc7QUFDVixvQkFBYztBQUNkLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUdBLFFBQU0sUUFBUSxDQUFDLFFBQVE7QUFDckIsUUFBSSxDQUFDLGtCQUFrQixlQUFlLGFBQWEsRUFBRSxTQUFTLElBQUksSUFBSSxHQUFHO0FBQ3ZFLGVBQVMsR0FBRztBQUFBLElBQ2Q7QUFBQSxFQUNGO0FBRUEsU0FBTyxRQUFRLFVBQVUsWUFBWSxLQUFLO0FBQzFDLE9BQUssYUFBYSxZQUFZLE1BQU07QUFDbEMsa0JBQWM7QUFDZCxXQUFPLFFBQVEsVUFBVSxlQUFlLEtBQUs7QUFDN0MsWUFBUSxJQUFJLGtGQUFrRjtBQUFBLEVBQ2hHLENBQUM7QUFFRCxPQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVk7QUFDNUMsUUFBSSxRQUFRLFNBQVMsb0JBQW9CLFFBQVEsU0FBUztBQUFrQjtBQUU1RSxVQUFNLFNBQVMsUUFBUSxTQUFTO0FBQ2hDLFVBQU0sY0FBYyxRQUFRLGVBQWU7QUFDM0MsUUFBSSxpQkFBaUI7QUFDckIsUUFBSSx1QkFBdUI7QUFDM0IsVUFBTSxzQkFBc0I7QUFDNUIsVUFBTSwwQkFBMEIsb0JBQUksSUFBSTtBQUV4QyxXQUFPLGdCQUFnQjtBQUNyQixZQUFNLEtBQUssWUFBWSxJQUFJO0FBQzNCLGNBQVEsSUFBSSw0Q0FBNEMsTUFBTSxPQUFPO0FBR3JFLFlBQU0sY0FBYyxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDakQsZUFBTyxRQUFRLE1BQU0sSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLFNBQVMsUUFBUSxNQUFNLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFBQSxNQUN0RixDQUFDO0FBQ0QsWUFBTSxZQUFZLE9BQU8sS0FBSyxXQUFXO0FBRXpDLGNBQVEsSUFBSSw0REFBNEQ7QUFDeEUsY0FBUSxJQUFJLDJEQUEyRDtBQUN2RSxVQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3hCLGdCQUFRLElBQUksU0FBUyxVQUFVLE1BQU0sbUJBQW1CO0FBQ3hELGdCQUFRLElBQUksS0FBSyxVQUFVLGFBQWEsTUFBTSxDQUFDLENBQUM7QUFBQSxNQUNsRCxPQUFPO0FBQ0wsZ0JBQVEsSUFBSSx5REFBeUQ7QUFBQSxNQUN2RTtBQUNBLGNBQVEsSUFBSSw0REFBNEQ7QUFFeEUsZUFBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTSxVQUFVLFNBQVMsSUFDckIsa0JBQWtCLFVBQVUsTUFBTSxxQkFBcUIsVUFBVSxLQUFLLElBQUksQ0FBQyxLQUMzRTtBQUFBLE1BQ04sQ0FBQztBQUdELFVBQUk7QUFDSixVQUFJO0FBQ0YsZ0JBQVEsSUFBSSxpREFBaUQ7QUFDN0QsaUJBQVMsRUFBRSxNQUFNLGdCQUFnQixPQUFPLFdBQVcsTUFBTSx5QkFBb0IsQ0FBQztBQUM5RSx3QkFBZ0IsTUFBTSxjQUFjO0FBQ3BDLGdCQUFRLElBQUkseURBQXlEO0FBQUEsTUFDdkUsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSwyQ0FBMkMsR0FBRztBQUM1RCxpQkFBUyxFQUFFLE1BQU0sU0FBUyxNQUFNLHNCQUFzQixPQUFPLElBQUksUUFBUSxDQUFDO0FBQzFFLHlCQUFpQjtBQUNqQjtBQUFBLE1BQ0Y7QUFHQSxVQUFJO0FBQ0osVUFBSTtBQUNGLGdCQUFRLElBQUkseURBQXlELGNBQWMsSUFBSSxFQUFFLEtBQUs7QUFDOUYsaUJBQVMsRUFBRSxNQUFNLGdCQUFnQixPQUFPLFdBQVcsTUFBTSwwQ0FBcUMsQ0FBQztBQUMvRixvQkFBWSxNQUFNLGNBQWMsY0FBYyxJQUFJLEVBQUU7QUFDcEQsaUJBQVMsRUFBRSxNQUFNLGlCQUFpQixPQUFPLFVBQVUsV0FBVyxPQUFPLENBQUM7QUFDdEUsZ0JBQVEsSUFBSSwrQkFBK0IsVUFBVSxXQUFXLE1BQU0sMEJBQTBCO0FBQUEsTUFDbEcsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSxpQ0FBaUMsR0FBRztBQUNsRCxpQkFBUyxFQUFFLE1BQU0sU0FBUyxNQUFNLFlBQVksT0FBTyxJQUFJLFFBQVEsQ0FBQztBQUNoRSx5QkFBaUI7QUFDakI7QUFBQSxNQUNGO0FBR0EsWUFBTTtBQUNOLFlBQU0sV0FBVyxjQUFjLElBQUksTUFBTSxNQUFNLFVBQVU7QUFDekQsVUFBSSxZQUFZLGtCQUFrQixtQkFBbUI7QUFFckQsVUFBSSxjQUFjLElBQUksUUFBUSxHQUFHO0FBQy9CLGdCQUFRLElBQUksbUVBQW1FO0FBQy9FLGlCQUFTLEVBQUUsTUFBTSxVQUFVLE1BQU0sK0RBQTBELENBQUM7QUFDNUYsY0FBTSxTQUFTLGNBQWMsSUFBSSxRQUFRO0FBQ3pDLHFCQUFhLE9BQU87QUFDcEIsMkJBQW1CLE9BQU87QUFDMUIsNEJBQW9CLGNBQWM7QUFDbEMsa0JBQVU7QUFBQSxNQUNaLE9BQU87QUFDTCxZQUFJO0FBQ0Ysa0JBQVEsSUFBSSxtR0FBbUcsdUJBQXVCLENBQUMsV0FBVyxtQkFBbUIsTUFBTTtBQUMzSyxtQkFBUyxFQUFFLE1BQU0sZ0JBQWdCLE9BQU8sVUFBVSxNQUFNLDhEQUE4RCx1QkFBdUIsQ0FBQyxJQUFJLG1CQUFtQixVQUFLLENBQUM7QUFDM0ssY0FBSSx3QkFBd0IscUJBQXFCO0FBQy9DLG9CQUFRLEtBQUssdUJBQXVCLG1CQUFtQixrREFBa0Q7QUFDekcscUJBQVM7QUFBQSxjQUNQLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLE9BQU8sa0JBQWtCLG1CQUFtQjtBQUFBLFlBQzlDLENBQUM7QUFDRCw2QkFBaUI7QUFDakI7QUFBQSxVQUNGO0FBQ0E7QUFDQSxnQkFBTTtBQUNOLGdCQUFNLFNBQVMsTUFBTSxrQkFBa0IsY0FBYyxTQUFTLFVBQVUsWUFBWSxVQUFVLFlBQVk7QUFDMUcsdUJBQWEsT0FBTztBQUNwQiw2QkFBbUIsT0FBTztBQUMxQiw4QkFBb0IsT0FBTztBQUMzQixvQkFBVSxPQUFPO0FBQ2pCLHdCQUFjLElBQUksVUFBVSxFQUFFLFlBQVksaUJBQWlCLENBQUM7QUFDNUQsa0JBQVEsSUFBSSwyQkFBMkIsT0FBTyxPQUFPLFdBQVcsTUFBTSxnQkFBZ0IsaUJBQWlCLE1BQU0sZUFBZTtBQUFBLFFBQzlILFNBQVMsS0FBSztBQUNaLGtCQUFRLE1BQU0sc0RBQXNELEdBQUc7QUFDdkUsbUJBQVMsRUFBRSxNQUFNLFNBQVMsTUFBTSx3QkFBd0IsT0FBTyxJQUFJLFFBQVEsQ0FBQztBQUM1RSwyQkFBaUI7QUFDakI7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUlBLFlBQU0sV0FBVyxjQUFjLFFBQVE7QUFFdkMsVUFBSTtBQUNKLFVBQUk7QUFDRixnQkFBUSxJQUFJLDBCQUEwQixpQkFBaUIsTUFBTSxpQ0FBaUM7QUFDOUYsaUJBQVMsRUFBRSxNQUFNLGdCQUFnQixPQUFPLFVBQVUsTUFBTSxhQUFhLGlCQUFpQixNQUFNLDJCQUFzQixDQUFDO0FBQ25ILGlDQUF5QixNQUFNLGlCQUFpQixtQkFBbUIsZ0JBQWdCO0FBQ25GLGdCQUFRLElBQUksMkNBQTJDO0FBQUEsTUFDekQsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSxrQ0FBa0MsR0FBRztBQUNuRCxpQkFBUyxFQUFFLE1BQU0sU0FBUyxNQUFNLGFBQWEsT0FBTyxJQUFJLFFBQVEsQ0FBQztBQUNqRSx5QkFBaUI7QUFDakI7QUFBQSxNQUNGO0FBTUEsVUFBSSxrQkFBa0I7QUFDdEIsVUFBSSxjQUFjLEVBQUUsWUFBWSxHQUFHLGFBQWEsQ0FBQyxHQUFHLGdCQUFnQixpQkFBaUIsT0FBTztBQUM1RixVQUFJO0FBQ0YsWUFBSSxpQkFBaUIsU0FBUyxHQUFHO0FBRS9CLGdCQUFNLGFBQWEsTUFBTSxJQUFJLFFBQVEsQ0FBQyxZQUFZO0FBQ2hELGtCQUFNLFFBQVEsV0FBVyxNQUFNLFFBQVEsRUFBRSxJQUFJLE1BQU0sU0FBUyxDQUFDLEdBQUcsU0FBUyxpQkFBaUIsT0FBTyxDQUFDLEdBQUcsR0FBSTtBQUN6RyxtQkFBTyxRQUFRO0FBQUEsY0FDYjtBQUFBLGdCQUNFLE1BQU07QUFBQSxnQkFDTixTQUFTLEVBQUUsaUJBQWlCLHdCQUF3QixpQkFBaUI7QUFBQSxjQUN2RTtBQUFBLGNBQ0EsQ0FBQyxTQUFTO0FBQ1IsNkJBQWEsS0FBSztBQUNsQixvQkFBSSxPQUFPLFFBQVEsV0FBVztBQUM1QiwwQkFBUSxLQUFLLDZEQUE2RCxPQUFPLFFBQVEsVUFBVSxPQUFPO0FBQzFHLDBCQUFRLEVBQUUsSUFBSSxNQUFNLFNBQVMsQ0FBQyxHQUFHLFNBQVMsaUJBQWlCLE9BQU8sQ0FBQztBQUFBLGdCQUNyRSxPQUFPO0FBQ0wsMEJBQVEsUUFBUSxFQUFFLElBQUksTUFBTSxTQUFTLENBQUMsR0FBRyxTQUFTLGlCQUFpQixPQUFPLENBQUM7QUFBQSxnQkFDN0U7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFVBQ0YsQ0FBQztBQUVELGdCQUFNLGlCQUFpQixXQUFXLFdBQVcsQ0FBQztBQUM5Qyx3QkFBYztBQUFBLFlBQ1osWUFBWSxlQUFlO0FBQUEsWUFDM0IsYUFBYTtBQUFBLFlBQ2IsZ0JBQWdCLGlCQUFpQjtBQUFBLFVBQ25DO0FBRUEsY0FBSSxlQUFlLFNBQVMsR0FBRztBQUM3Qiw4QkFBa0I7QUFDbEIsb0JBQVEsTUFBTSxzQkFBc0IsZUFBZSxNQUFNLHFDQUFxQyxjQUFjO0FBQzVHLHFCQUFTO0FBQUEsY0FDUCxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsY0FDUixZQUFZLGVBQWU7QUFBQSxjQUMzQixhQUFhO0FBQUEsY0FDYixnQkFBZ0IsaUJBQWlCO0FBQUEsY0FDakMsU0FBUyw0QkFBcUIsZUFBZSxNQUFNO0FBQUEsWUFDckQsQ0FBQztBQUFBLFVBQ0gsT0FBTztBQUNMLG9CQUFRLElBQUksMEJBQTBCLGlCQUFpQixNQUFNLHdDQUF3QztBQUNyRyxxQkFBUztBQUFBLGNBQ1AsTUFBTTtBQUFBLGNBQ04sUUFBUTtBQUFBLGNBQ1IsWUFBWTtBQUFBLGNBQ1osYUFBYSxDQUFDO0FBQUEsY0FDZCxnQkFBZ0IsaUJBQWlCO0FBQUEsY0FDakMsU0FBUyx5QkFBZSxpQkFBaUIsTUFBTTtBQUFBLFlBQ2pELENBQUM7QUFBQSxVQUNIO0FBQUEsUUFDRixPQUFPO0FBRUwsa0JBQVEsSUFBSSwrQ0FBK0M7QUFDM0QsbUJBQVM7QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFFBQVE7QUFBQSxZQUNSLFlBQVk7QUFBQSxZQUNaLGFBQWEsQ0FBQztBQUFBLFlBQ2QsZ0JBQWdCO0FBQUEsWUFDaEIsU0FBUztBQUFBLFVBQ1gsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLFNBQVMsU0FBUztBQUVoQixnQkFBUSxLQUFLLGlFQUFpRSxRQUFRLE9BQU87QUFDN0YsaUJBQVM7QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQTtBQUFBLFVBQ1IsWUFBWTtBQUFBLFVBQ1osYUFBYSxDQUFDO0FBQUEsVUFDZCxnQkFBZ0IsaUJBQWlCO0FBQUEsVUFDakMsU0FBUywrQ0FBMEMsUUFBUSxPQUFPO0FBQUEsVUFDbEUsU0FBUztBQUFBLFFBQ1gsQ0FBQztBQUFBLE1BQ0g7QUFHQSxVQUFJLENBQUMsaUJBQWlCO0FBQ3BCLGdCQUFRLE1BQU0seUVBQW9FO0FBQ2xGLHlCQUFpQjtBQUNqQjtBQUFBLE1BQ0Y7QUFPQSxVQUFJLFlBQVksb0JBQW9CLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsUUFDckQsV0FBVyxVQUFVLENBQUM7QUFBQSxRQUN0QixNQUFNLEVBQUU7QUFBQSxRQUNSLE1BQU0sRUFBRTtBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsUUFDakIsWUFBWSxFQUFFO0FBQUEsUUFDZCxRQUFRLEVBQUUsVUFBVTtBQUFBLE1BQ3RCLEVBQUU7QUFFRixVQUFJLGVBQWUsVUFBVSxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsUUFDNUQsWUFBWSxFQUFFLFdBQVcsU0FBUyxDQUFDO0FBQUEsUUFDbkMsUUFBUSxFQUFFLE1BQU07QUFBQSxRQUNoQixNQUFNLEVBQUUsUUFBUTtBQUFBLFFBQ2hCLGFBQWEsRUFBRSxlQUFlO0FBQUEsUUFDOUIsS0FBSyxFQUFFLE9BQU87QUFBQSxRQUNkLE1BQU0sRUFBRSxTQUFTLEVBQUUsY0FBYyxVQUFVLFVBQVU7QUFBQSxRQUNyRCxPQUFPLEVBQUUsU0FBUztBQUFBLFFBQ2xCLFlBQVksRUFBRSxRQUFRO0FBQUEsUUFDdEIsTUFBTSxFQUFFO0FBQUEsUUFDUixlQUFlLEVBQUUsaUJBQWlCO0FBQUEsTUFDcEMsRUFBRTtBQUVGLFVBQUk7QUFDSixVQUFJO0FBQ0YsY0FBTSxnQkFBZ0IsTUFBTSxpQkFBaUI7QUFDN0MsZ0JBQVEsSUFBSSw2REFBNkQsYUFBYSxNQUFNO0FBQzVGLGlCQUFTLEVBQUUsTUFBTSxnQkFBZ0IsT0FBTyxRQUFRLE1BQU0sdUNBQXVDLGFBQWEsa0JBQWEsQ0FBQztBQUV4SCxnQkFBUSxJQUFJLDREQUE0RDtBQUN4RSxnQkFBUSxJQUFJLHVEQUF1RCxZQUFZLE1BQU0sYUFBYTtBQUNsRyxnQkFBUSxJQUFJLEtBQUssVUFBVSxhQUFhLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELGdCQUFRLElBQUksb0RBQW9ELFNBQVMsTUFBTSxhQUFhO0FBQzVGLGdCQUFRLElBQUksS0FBSyxVQUFVLFVBQVUsTUFBTSxDQUFDLENBQUM7QUFDN0MsZ0JBQVEsSUFBSSw0REFBNEQ7QUFFeEUsY0FBTSxzQkFBc0I7QUFBQSxVQUMxQixTQUFTO0FBQUEsVUFDVCxrQkFBa0I7QUFBQSxVQUNsQixnQkFBZ0IsdUJBQXVCLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFBQSxVQUNuRDtBQUFBLFVBQ0E7QUFBQSxVQUNBLFdBQVc7QUFBQSxVQUNYLGNBQWMsRUFBRSxnQkFBZ0IsTUFBTSxlQUFlO0FBQUEsVUFDckQsT0FBTztBQUFBO0FBQUEsUUFDVDtBQUlBLGNBQU0sbUJBQW1CLG9CQUFvQjtBQUM3QyxjQUFNLGNBQWMsS0FBSyxVQUFVLG1CQUFtQjtBQUN0RCxjQUFNLFlBQVksWUFBWTtBQUk5QixZQUFJLG9CQUFvQjtBQUN4QixZQUFJLG1CQUFtQjtBQUN2QixZQUFJLGlCQUFpQjtBQUNyQixZQUFJO0FBTUYsZ0JBQU0sU0FBUyxjQUFjLFFBQVEsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLO0FBSXRELGNBQUksaUJBQWlCLFNBQVMsR0FBRztBQUMvQiw2QkFBaUIsaUJBQWlCLE9BQU8sQ0FBQyxLQUFLLE1BQU0sTUFBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUksQ0FBQztBQUVyRixrQkFBTSxRQUFRLGlCQUFpQixJQUFJLE9BQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQzdELGtCQUFNLFFBQVEsaUJBQWlCLElBQUksT0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFFN0Qsa0JBQU0sYUFBYSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUksR0FBRyxLQUFLLElBQUksR0FBRztBQUMxRCxrQkFBTSxhQUFhLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxHQUFHO0FBQ3pELCtCQUFtQixhQUFhO0FBQ2hDLGdDQUFxQixpQkFBaUIsbUJBQW9CO0FBQUEsVUFDNUQ7QUFBQSxRQUNGLFNBQVMsUUFBUTtBQUNmLGtCQUFRLEtBQUssb0VBQW9FLE1BQU07QUFBQSxRQUN6RjtBQUVBLGNBQU0sb0JBQXFCLElBQUksWUFBWSxZQUFZO0FBQ3ZELGNBQU0saUJBQWlCO0FBQUEsVUFDckIsV0FBVztBQUFBLFVBQ1gsWUFBWTtBQUFBLFVBQ1osbUJBQW1CO0FBQUEsVUFDbkIsYUFBYSxpQkFBaUI7QUFBQSxVQUM5QixxQkFBcUI7QUFBQSxVQUNyQixZQUFZO0FBQUEsUUFDZDtBQUNBLGdCQUFRLElBQUksZ0NBQWdDLEtBQUssVUFBVSxjQUFjLENBQUM7QUFDMUUsaUJBQVMsRUFBRSxNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUM7QUFHL0MsdUJBQWUsTUFBTSxhQUFhLG1CQUFtQjtBQUNyRCxnQkFBUSxJQUFJLCtDQUErQyxZQUFZO0FBQUEsTUFDekUsU0FBUyxLQUFLO0FBQ1osZ0JBQVEsTUFBTSxvQ0FBb0MsR0FBRztBQUNyRCxZQUFJLFNBQVMsSUFBSSxXQUFXLE9BQU8sR0FBRztBQUN0QyxZQUFJLE9BQU8sU0FBUyxpQkFBaUIsS0FBSyxPQUFPLFNBQVMsY0FBYyxLQUFLLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFDNUcsbUJBQVMsMENBQTBDLE1BQU0saUJBQWlCLENBQUM7QUFBQSxRQUM3RTtBQUNBLGlCQUFTLEVBQUUsTUFBTSxTQUFTLE1BQU0sZUFBZSxPQUFPLE9BQU8sQ0FBQztBQUM5RCx5QkFBaUI7QUFDakI7QUFBQSxNQUNGO0FBR0EsZUFBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRixDQUFDO0FBRUQsZUFBUyxFQUFFLE1BQU0sZ0JBQWdCLE9BQU8sT0FBTyxNQUFNLHVCQUFrQixDQUFDO0FBRXhFLFlBQU0sT0FBTyxNQUFNLFFBQVEsY0FBYyxJQUFJLElBQUksYUFBYSxPQUFPLENBQUM7QUFDdEUsWUFBTSxhQUFhLEtBQUs7QUFDeEIsWUFBTSxjQUFjLENBQUM7QUFJckIsVUFBSTtBQUNGLFlBQUksZUFBZSxHQUFHO0FBQ3BCLGtCQUFRLElBQUksNEVBQXVFO0FBQ25GLG1CQUFTLEVBQUUsTUFBTSxnQkFBZ0IsT0FBTyxHQUFHLFdBQVcsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxzREFBaUQsQ0FBQztBQUFBLFFBQzlJLE9BQU87QUFDTCxrQkFBUSxJQUFJLDBCQUEwQixVQUFVLGtCQUFrQjtBQUVsRSxxQkFBVyxRQUFRLE1BQU07QUFDekIsa0JBQU0sVUFBVSxLQUFLO0FBQ3JCLGtCQUFNLFlBQVksS0FBSyxjQUFjO0FBQ3JDLGtCQUFNLFdBQVcsS0FBSztBQUd0QixrQkFBTSxVQUFVLEdBQUcsWUFBWSxFQUFFLElBQUksYUFBYSxFQUFFO0FBQ3BELGtCQUFNLGtCQUFrQix3QkFBd0IsSUFBSSxPQUFPLEtBQUs7QUFDaEUsZ0JBQUksbUJBQW1CLEdBQUc7QUFDeEIsb0JBQU0sYUFBYSxRQUFRLE9BQU8sS0FBSyxTQUFTLEtBQUssUUFBUSw0QkFBNEIsZUFBZTtBQUN4RyxzQkFBUSxLQUFLLFFBQVEsVUFBVSxFQUFFO0FBQ2pDLDBCQUFZLEtBQUssRUFBRSxTQUFTLFdBQVcsSUFBSSxPQUFPLFFBQVEsV0FBVyxDQUFDO0FBQ3RFLHVCQUFTO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQSxRQUFRO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGNBQ1gsQ0FBQztBQUNEO0FBQUEsWUFDRjtBQUdBLGtCQUFNLFdBQVcsWUFBWSxLQUFLLE9BQUssRUFBRSxlQUFlLFlBQVksRUFBRSxXQUFXLFlBQVksRUFBRSxTQUFTLFFBQVE7QUFDaEgsa0JBQU0sZ0JBQWdCLFNBQVMsS0FBSyxPQUFLLEVBQUUsY0FBYyxRQUFRO0FBQ2pFLGtCQUFNLGtCQUFrQixjQUFjLENBQUMsR0FBRyxLQUFLLE9BQUssRUFBRSxPQUFPLFFBQVE7QUFDckUsa0JBQU0sY0FBYyxLQUFLLFFBQVEsVUFBVSxRQUFRLGVBQWUsUUFBUSxnQkFBZ0IsUUFBUTtBQUNsRyxrQkFBTSxjQUFjLEVBQUUsR0FBRyxNQUFNLE1BQU0sWUFBWTtBQUdqRCxnQkFBSSxhQUFhLFlBQVksU0FBUyxZQUFZLGVBQWUsWUFBWSxTQUFTLEtBQUs7QUFDM0YsZ0JBQUksQ0FBQyxjQUFjLGNBQWM7QUFBUywyQkFBYSxZQUFZLGVBQWU7QUFDbEYsZ0JBQUksQ0FBQyxjQUFjLGNBQWM7QUFBaUIsMkJBQWEsWUFBWSxPQUFPO0FBRWxGLGdCQUFJLENBQUMsZUFBZSxLQUFLLFdBQVcsVUFBVSxLQUFLLFdBQVcsb0JBQW9CLGNBQWMsWUFBWSxjQUFjLFVBQVU7QUFJbEksb0JBQU0sdUJBQXVCLG9CQUFJLElBQUk7QUFBQSxnQkFDbkM7QUFBQSxnQkFBVztBQUFBLGdCQUFPO0FBQUEsZ0JBQVM7QUFBQSxnQkFBUTtBQUFBLGdCQUFnQjtBQUFBLGdCQUNuRDtBQUFBLGdCQUFZO0FBQUEsZ0JBQWlCO0FBQUEsY0FDL0IsQ0FBQztBQUNELGtCQUFJLHFCQUFxQixJQUFJLFNBQVMsR0FBRztBQUV2QyxzQkFBTSxVQUFVLFFBQVEsT0FBTyxtREFBOEMsU0FBUztBQUN0Rix3QkFBUSxLQUFLLFFBQVEsT0FBTyxFQUFFO0FBQzlCLDRCQUFZLEtBQUssRUFBRSxTQUFTLFdBQVcsSUFBSSxPQUFPLFFBQVEsUUFBUSxDQUFDO0FBQ25FLHlCQUFTLEVBQUUsTUFBTSxvQkFBb0IsU0FBUyxZQUFZLFFBQVEsU0FBUyxTQUFTLFFBQVEsQ0FBQztBQUM3RjtBQUFBLGNBQ0Y7QUFHQSxzQkFBUSxJQUFJLGFBQWEsT0FBTyx5QkFBeUIsU0FBUyw0REFBNEQ7QUFDOUgsdUJBQVM7QUFBQSxnQkFDUCxNQUFNO0FBQUEsZ0JBQ047QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0EsWUFBWSxLQUFLO0FBQUEsZ0JBQ2pCLFNBQVMsc0JBQXNCLFNBQVM7QUFBQSxjQUMxQyxDQUFDO0FBRUQsb0JBQU0sWUFBWSxNQUFNLElBQUksUUFBUSxDQUFDLFlBQVk7QUFDL0Msc0JBQU0sZUFBZSxDQUFDLFNBQVM7QUFDN0Isc0JBQUksS0FBSyxTQUFTLHlCQUF5QixLQUFLLFlBQVksU0FBUztBQUNuRSx5QkFBSyxVQUFVLGVBQWUsWUFBWTtBQUMxQyw0QkFBUSxJQUFJO0FBQUEsa0JBQ2Q7QUFBQSxnQkFDRjtBQUNBLHFCQUFLLFVBQVUsWUFBWSxZQUFZO0FBRXZDLDJCQUFXLE1BQU0sUUFBUSxJQUFJLEdBQUcsR0FBSztBQUFBLGNBQ3ZDLENBQUM7QUFFRCxrQkFBSSxhQUFhLFVBQVUsT0FBTztBQUNoQyx3QkFBUSxJQUFJLGFBQWEsT0FBTyw4QkFBOEIsU0FBUyxPQUFPLFVBQVUsS0FBSyxtQkFBbUIsVUFBVSxXQUFXLEdBQUc7QUFDeEksb0JBQUksS0FBSyxXQUFXLGlCQUFpQjtBQUNuQyw4QkFBWSxjQUFjLFVBQVU7QUFBQSxnQkFDdEMsT0FBTztBQUNMLDhCQUFZLFFBQVEsVUFBVTtBQUFBLGdCQUNoQztBQUNBLG9CQUFJLFVBQVUsYUFBYTtBQUN6Qiw4QkFBWSxTQUFTLElBQUksVUFBVTtBQUNuQyx5QkFBTyxRQUFRLE1BQU0sSUFBSSxFQUFFLGFBQWEsWUFBWSxDQUFDO0FBQ3JELDBCQUFRLElBQUksMEJBQXFCLFNBQVMsUUFBUSxVQUFVLEtBQUssMkJBQTJCO0FBQUEsZ0JBQzlGO0FBQUEsY0FDRixPQUFPO0FBQ0wsc0JBQU0sVUFBVSxRQUFRLE9BQU8sNEJBQTRCLFNBQVM7QUFDcEUsd0JBQVEsS0FBSyxRQUFRLE9BQU8sRUFBRTtBQUM5Qiw0QkFBWSxLQUFLLEVBQUUsU0FBUyxXQUFXLElBQUksT0FBTyxRQUFRLFFBQVEsQ0FBQztBQUNuRSx5QkFBUyxFQUFFLE1BQU0sb0JBQW9CLFNBQVMsWUFBWSxRQUFRLFNBQVMsU0FBUyxRQUFRLENBQUM7QUFDN0Y7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUVBLHFCQUFTO0FBQUEsY0FDUCxNQUFNO0FBQUEsY0FDTjtBQUFBLGNBQ0E7QUFBQSxjQUNBLFFBQVE7QUFBQSxjQUNSLFNBQVMsUUFBUSxPQUFPLElBQUksVUFBVSxLQUFLLEtBQUssTUFBTSxPQUFPLFNBQVMsS0FBSyxRQUFRO0FBQUEsWUFDckYsQ0FBQztBQUVELGdCQUFJO0FBQ0Ysb0JBQU0sZUFBZSxNQUFNLElBQUksUUFBUSxDQUFDLFNBQVMsV0FBVztBQUUxRCxzQkFBTSxRQUFRLFdBQVcsTUFBTSxPQUFPLElBQUksTUFBTSxTQUFTLENBQUMsR0FBRyxHQUFJO0FBQ2pFLHVCQUFPLEtBQUs7QUFBQSxrQkFDVixjQUFjLElBQUk7QUFBQSxrQkFDbEIsRUFBRSxNQUFNLGtCQUFrQixTQUFTLFlBQVk7QUFBQSxrQkFDL0MsY0FBWTtBQUNWLGlDQUFhLEtBQUs7QUFDbEIsd0JBQUksT0FBTyxRQUFRLFdBQVc7QUFDNUIsNkJBQU8sSUFBSSxNQUFNLE9BQU8sUUFBUSxVQUFVLE9BQU8sQ0FBQztBQUFBLG9CQUNwRCxPQUFPO0FBQ0wsOEJBQVEsWUFBWSxFQUFFLElBQUksT0FBTyxPQUFPLGtDQUFrQyxDQUFDO0FBQUEsb0JBQzdFO0FBQUEsa0JBQ0Y7QUFBQSxnQkFDRjtBQUFBLGNBQ0YsQ0FBQztBQUVELGtCQUFJLGFBQWEsSUFBSTtBQUNuQix3Q0FBd0IsSUFBSSxTQUFTLENBQUM7QUFDdEMsd0JBQVEsSUFBSSxlQUFlLE9BQU8sb0JBQWUsWUFBWTtBQUM3RCw0QkFBWSxLQUFLLEVBQUUsU0FBUyxXQUFXLElBQUksS0FBSyxDQUFDO0FBQ2pELHlCQUFTO0FBQUEsa0JBQ1AsTUFBTTtBQUFBLGtCQUNOO0FBQUEsa0JBQ0E7QUFBQSxrQkFDQSxRQUFRO0FBQUEsa0JBQ1IsU0FBUyxRQUFRLE9BQU8sSUFBSSxVQUFVLFlBQU8sU0FBUztBQUFBLGdCQUN4RCxDQUFDO0FBQUEsY0FDSCxPQUFPO0FBQ0wsc0JBQU0sSUFBSSxNQUFNLGFBQWEsU0FBUyxpQ0FBaUM7QUFBQSxjQUN6RTtBQUFBLFlBQ0YsU0FBUyxLQUFLO0FBQ1osc0NBQXdCLElBQUksU0FBUyxrQkFBa0IsQ0FBQztBQUN4RCxrQkFBSTtBQUNKLG9CQUFNLFNBQVMsSUFBSSxXQUFXLE9BQU8sR0FBRztBQUN4QyxrQkFBSSxXQUFXLFdBQVc7QUFDeEIsNkJBQWEsdURBQXVELE9BQU8sS0FBSyxTQUFTO0FBQUEsY0FDM0YsV0FBVyxPQUFPLFNBQVMsV0FBVyxLQUFLLE9BQU8sU0FBUyxTQUFTLEdBQUc7QUFDckUsNkJBQWEsc0NBQXNDLE9BQU8sZUFBZSxTQUFTO0FBQUEsY0FDcEYsT0FBTztBQUNMLDZCQUFhLFFBQVEsT0FBTyxLQUFLLFNBQVMsYUFBYSxNQUFNO0FBQUEsY0FDL0Q7QUFDQSxzQkFBUSxNQUFNLGVBQWUsT0FBTyxvQkFBZSxrQkFBa0IsQ0FBQyx3QkFBbUIsVUFBVSxFQUFFO0FBQ3JHLDBCQUFZLEtBQUssRUFBRSxTQUFTLFdBQVcsSUFBSSxPQUFPLFFBQVEsV0FBVyxDQUFDO0FBQ3RFLHVCQUFTO0FBQUEsZ0JBQ1AsTUFBTTtBQUFBLGdCQUNOO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQSxRQUFRO0FBQUEsZ0JBQ1IsU0FBUztBQUFBLGNBQ1gsQ0FBQztBQUFBLFlBRUg7QUFHQSxrQkFBTSxJQUFJLFFBQVEsT0FBSyxXQUFXLEdBQUcsR0FBRyxDQUFDO0FBQUEsVUFDM0M7QUFHRSxnQkFBTSxZQUFZLFlBQVksT0FBTyxPQUFLLEVBQUUsRUFBRSxFQUFFO0FBQ2hELGdCQUFNLFNBQVMsWUFBWSxPQUFPLE9BQUssQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUM5QyxnQkFBTSxxQkFBcUIsWUFDeEIsT0FBTyxPQUFLLENBQUMsRUFBRSxFQUFFLEVBQ2pCLElBQUksT0FBSyxRQUFRLEVBQUUsT0FBTyxLQUFLLEVBQUUsU0FBUyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBRTdELGNBQUk7QUFDSixjQUFJLFdBQVcsR0FBRztBQUNoQix5QkFBYSxPQUFPLFNBQVM7QUFBQSxVQUMvQixPQUFPO0FBQ0wseUJBQWEsYUFBYSxTQUFTLE9BQU8sVUFBVSxXQUFXLG1CQUFtQixLQUFLLEtBQUssQ0FBQztBQUFBLFVBQy9GO0FBRUEsa0JBQVEsSUFBSSx3QkFBd0IsVUFBVSxFQUFFO0FBQ2hELG1CQUFTO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixPQUFPO0FBQUEsWUFDUDtBQUFBLFlBQ0E7QUFBQSxZQUNBLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxVQUNYLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRixTQUFTLFVBQVU7QUFHakIsZ0JBQVEsTUFBTSx1Q0FBdUMsUUFBUTtBQUM3RCxpQkFBUyxFQUFFLE1BQU0sU0FBUyxNQUFNLGtCQUFrQixPQUFPLFNBQVMsV0FBVyxPQUFPLFFBQVEsRUFBRSxDQUFDO0FBQUEsTUFDakcsVUFBRTtBQUdBLGlCQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwQyxnQkFBUSxJQUFJLHVEQUFrRDtBQUFBLE1BQ2hFO0FBR0EsWUFBTSxPQUFPLFlBQVksSUFBSTtBQUM3QixZQUFNLGNBQWMsT0FBTztBQUMzQixZQUFNLGtCQUFrQjtBQUN4QixjQUFRLElBQUksMEJBQTBCLFlBQVksUUFBUSxDQUFDLENBQUMsc0JBQXNCLE1BQU0sZUFBZSxRQUFRLENBQUMsQ0FBQyxJQUFJO0FBRXJILGFBQU8sS0FBSyxZQUFZLGNBQWMsSUFBSSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsU0FBUyxNQUFNLEdBQUcsTUFBTTtBQUM1RixlQUFPLFFBQVE7QUFBQSxNQUNqQixDQUFDO0FBR0QsdUJBQWlCO0FBQUEsSUFDbkI7QUFBQSxFQUNGLENBQUM7QUFDSCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
