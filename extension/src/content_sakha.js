/**
 * content_sakha.js — Sakha Content Script Bundle Entry Point
 *
 * Runs on every loaded page:
 * 1. Executes real-time on-page masking (Aadhaar, PAN, Card, IFSC, Phone, UPI)
 * 2. Evaluates page for scam signals (lookalike domain, UPI PIN trap, credential combos, APKs)
 * 3. Shows high-contrast modal warning in plain English & Telugu if danger/caution detected
 * 4. Logs non-PII pilot telemetry
 */

import { evaluatePageSafety } from "./scamDetector.js";
import { applyPageMasking, maskSensitiveText } from "./maskEngine.js";
import { logPilotEvent } from "./eventLogger.js";
import { t } from "./i18n.js";

console.log("[Sakha] On-device safety companion active on:", window.location.href);

let currentLanguage = "en";
let pageEvaluation = null;

// Load preferred language from storage if available
if (typeof chrome !== "undefined" && chrome.storage?.local) {
  chrome.storage.local.get(["sakha_lang"], (data) => {
    if (data?.sakha_lang) {
      currentLanguage = data.sakha_lang;
    }
    initializeSakha();
  });
} else {
  initializeSakha();
}

function initializeSakha() {
  // 1. Initial on-page sensitive data masking
  try {
    const maskStats = applyPageMasking(document, currentLanguage);
    if (maskStats.maskedInputs > 0 || maskStats.maskedTextNodes > 0) {
      logPilotEvent("MASKING_APPLIED", {
        domain: window.location.hostname,
        inputsMasked: maskStats.maskedInputs,
        textNodesMasked: maskStats.maskedTextNodes
      });
    }
  } catch (err) {
    console.warn("[Sakha] Masking error:", err);
  }

  // 2. Continuous masking on dynamic DOM updates (e.g. SPAs, live feeds)
  const observer = new MutationObserver(() => {
    applyPageMasking(document, currentLanguage);
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // 3. Scan page for scams
  runPageSafetyCheck();
}

function runPageSafetyCheck() {
  const pageText = document.body ? document.body.innerText || "" : "";
  const inputElements = Array.from(document.querySelectorAll("input, select, textarea")).map(el => ({
    name: el.getAttribute("name") || "",
    id: el.getAttribute("id") || "",
    placeholder: el.getAttribute("placeholder") || "",
    type: el.getAttribute("type") || "",
    label: el.getAttribute("aria-label") || ""
  }));
  const linkElements = Array.from(document.querySelectorAll("a[href]")).map(a => a.href);

  pageEvaluation = evaluatePageSafety({
    url: window.location.href,
    pageText,
    inputs: inputElements,
    links: linkElements
  });

  console.log("[Sakha] Page safety evaluation:", pageEvaluation);

  if (pageEvaluation.level === "danger" || pageEvaluation.level === "caution") {
    logPilotEvent("WARNING_SHOWN", {
      domain: pageEvaluation.hostname,
      level: pageEvaluation.level,
      rulesTriggered: pageEvaluation.rulesTriggered
    });
    renderSeniorWarningModal(pageEvaluation);
  }
}

/**
 * Display High-Contrast Acknowledgment Warning Modal
 */
function renderSeniorWarningModal(evaluation) {
  if (document.getElementById("sakha-alert-modal-root")) return;

  const root = document.createElement("div");
  root.id = "sakha-alert-modal-root";

  const isDanger = evaluation.level === "danger";
  const icon = isDanger ? "🚨" : "⚠️";
  const titleKey = isDanger ? "warning_danger_title" : "warning_caution_title";
  const titleEn = t(titleKey, "en");
  const titleTe = t(titleKey, "te");

  root.innerHTML = `
    <div class="sakha-modal-card ${isDanger ? 'danger' : 'caution'}">
      <div class="sakha-modal-header">
        <span class="sakha-icon">${icon}</span>
        <div>
          <h2>${titleEn}</h2>
          <div style="font-size: 16px; opacity: 0.9; margin-top: 4px;">${titleTe}</div>
        </div>
      </div>
      <div class="sakha-modal-body">
        <div class="sakha-modal-reason-en">
          ${evaluation.reasonEn}
        </div>
        <div class="sakha-modal-reason-te">
          ${evaluation.reasonTe}
        </div>
        <div class="sakha-modal-actions">
          <button id="sakha-btn-leave" class="sakha-btn sakha-btn-primary">
            🛡️ ${t("btn_understand_leave", "en")} / ${t("btn_understand_leave", "te")}
          </button>
          <button id="sakha-btn-proceed" class="sakha-btn sakha-btn-secondary">
            ${t("btn_proceed_anyway", "en")} / ${t("btn_proceed_anyway", "te")}
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(root);

  document.getElementById("sakha-btn-leave")?.addEventListener("click", () => {
    logPilotEvent("USER_DECISION", {
      domain: evaluation.hostname,
      decision: "LEFT_PAGE"
    });
    // Navigate away to safe browser default
    window.location.href = "about:blank";
  });

  document.getElementById("sakha-btn-proceed")?.addEventListener("click", () => {
    logPilotEvent("USER_DECISION", {
      domain: evaluation.hostname,
      decision: "PROCEEDED_ANYWAY"
    });
    root.remove();
  });
}

// ---------------------------------------------------------------------------
// Extension Message Listeners
// ---------------------------------------------------------------------------
if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "GET_PAGE_SAFETY") {
      sendResponse({ evaluation: pageEvaluation });
      return true;
    }

    if (msg.type === "GET_MASKED_PAGE_TEXT") {
      // Return strictly masked text for the Explain feature (NO raw PII leaves)
      const rawText = document.body ? document.body.innerText || "" : "";
      const safeMaskedText = maskSensitiveText(rawText);
      sendResponse({ maskedText: safeMaskedText });
      return true;
    }

    if (msg.type === "SET_LANGUAGE") {
      currentLanguage = msg.lang || "en";
      applyPageMasking(document, currentLanguage);
      sendResponse({ ok: true });
      return true;
    }
  });
}
