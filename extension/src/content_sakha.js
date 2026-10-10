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
import { applyPageMasking, maskSensitiveText, classifyGenericField } from "./maskEngine.js";
import { logPilotEvent } from "./eventLogger.js";
import { t } from "./i18n.js";

// SEC-001: Log only hostname — never full URL (query strings may contain PII)
console.log("[Sakha] On-device safety companion active on:", window.location.hostname);

let currentLanguage = "en";
let pageEvaluation = null;
let reevaluationTimer = null;

// Collect elements across standard DOM, same-origin iframes, and open shadow roots
function collectAllInputNodes(root = document) {
  const elements = [];

  function traverse(node) {
    if (!node) return;

    // Open Shadow DOM traversal
    if (node.shadowRoot) {
      traverse(node.shadowRoot);
    }

    if (node.querySelectorAll) {
      const inputs = node.querySelectorAll("input, select, textarea");
      inputs.forEach(el => elements.push(el));

      // Same-origin iframes
      const iframes = node.querySelectorAll("iframe");
      iframes.forEach(iframe => {
        try {
          if (iframe.contentDocument && iframe.contentDocument.body) {
            traverse(iframe.contentDocument.body);
          }
        } catch {
          // Cross-origin iframe: security boundary, safely skip
        }
      });
    }

    // Children traversal for custom element shadow roots
    if (node.children) {
      for (const child of node.children) {
        if (child.shadowRoot) traverse(child.shadowRoot);
      }
    }
  }

  traverse(root);
  return elements;
}

// Find closest associated label text for an input
function findAssociatedLabel(el) {
  if (!el) return "";

  // 1. Explicit <label for="id">
  if (el.id) {
    const labelEl = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
    if (labelEl && labelEl.innerText) return labelEl.innerText.trim();
  }

  // 2. Wrapping <label>
  const parentLabel = el.closest("label");
  if (parentLabel && parentLabel.innerText) {
    return parentLabel.innerText.replace(el.value || "", "").trim();
  }

  // 3. aria-labelledby
  const labelledBy = el.getAttribute("aria-labelledby");
  if (labelledBy) {
    const labelNode = document.getElementById(labelledBy);
    if (labelNode && labelNode.innerText) return labelNode.innerText.trim();
  }

  // 4. aria-label
  if (el.getAttribute("aria-label")) {
    return el.getAttribute("aria-label").trim();
  }

  // 5. Nearby preceding sibling text
  const prev = el.previousElementSibling;
  if (prev && prev.innerText && prev.innerText.length < 50) {
    return prev.innerText.trim();
  }

  return "";
}

function extractGenericPageFields() {
  const rawNodes = collectAllInputNodes(document);
  const fields = [];

  rawNodes.forEach(el => {
    // Skip submit and button inputs
    const type = (el.getAttribute("type") || "text").toLowerCase();
    if (["submit", "button", "reset", "image"].includes(type)) return;

    const labelText = findAssociatedLabel(el);
    const nearby = el.parentElement ? (el.parentElement.innerText || "").slice(0, 60) : "";

    const fieldMeta = {
      name: el.getAttribute("name") || "",
      id: el.getAttribute("id") || "",
      placeholder: el.getAttribute("placeholder") || "",
      autocomplete: el.getAttribute("autocomplete") || "",
      ariaLabel: el.getAttribute("aria-label") || "",
      type,
      label: labelText,
      nearbyText: nearby,
      value: el.value || ""
    };

    const classification = classifyGenericField(fieldMeta);

    // Mask value preview strictly (never expose raw sensitive value)
    let maskedVal = "";
    if (fieldMeta.value) {
      maskedVal = maskSensitiveText(fieldMeta.value);
    }

    fields.push({
      id: fieldMeta.id || fieldMeta.name || `field_${fields.length + 1}`,
      name: fieldMeta.name,
      label: fieldMeta.label || fieldMeta.name || fieldMeta.id || "Field",
      detectedType: classification.type,
      confidence: classification.confidence,
      evidence: classification.evidence,
      maskedValue: maskedVal,
      element: el
    });
  });

  return fields;
}

// Removable highlights on analyzed fields
function highlightAnalyzedFields(fields) {
  // Clear any existing highlights
  document.querySelectorAll(".sakha-analyzed-outline").forEach(el => {
    el.classList.remove("sakha-analyzed-outline");
  });

  fields.forEach(f => {
    if (f.element && f.element.classList) {
      f.element.classList.add("sakha-analyzed-outline");
    }
  });
}

// Load preferred language from storage if available
if (typeof chrome !== "undefined" && chrome.storage?.local) {
  chrome.storage.local.get(["sakha_consent_accepted", "sakha_lang"], (data) => {
    if (data?.sakha_lang) {
      currentLanguage = data.sakha_lang;
    }
    if (!data?.sakha_consent_accepted) {
      renderConsentModal();
    } else {
      initializeSakha();
    }
  });
} else {
  initializeSakha();
}

// ---------------------------------------------------------------------------
// First-Run Consent Modal
// ---------------------------------------------------------------------------
function renderConsentModal() {
  if (document.getElementById("sakha-consent-root")) return;

  const root = document.createElement("div");
  root.id = "sakha-consent-root";

  const titleEn = t("consent_title", "en");
  const titleLang = t("consent_title", currentLanguage);
  const bodyEn = t("consent_body", "en");
  const bodyLang = t("consent_body", currentLanguage);
  const agreeEn = t("consent_agree", "en");
  const agreeLang = t("consent_agree", currentLanguage);

  // SEC-003: DOM construction — no innerHTML with i18n string interpolation
  const card = document.createElement("div");
  card.className = "sakha-modal-card caution";
  card.style.maxWidth = "480px";

  const header = document.createElement("div");
  header.className = "sakha-modal-header";
  const iconEl = document.createElement("span");
  iconEl.className = "sakha-icon";
  iconEl.textContent = "🛡️";
  const titleWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.textContent = titleEn;
  const subTitle = document.createElement("div");
  subTitle.style.cssText = "font-size:15px;opacity:0.9;margin-top:4px";
  subTitle.textContent = titleLang;
  titleWrap.appendChild(h2);
  titleWrap.appendChild(subTitle);
  header.appendChild(iconEl);
  header.appendChild(titleWrap);

  const body = document.createElement("div");
  body.className = "sakha-modal-body";
  const bodyEnEl = document.createElement("div");
  bodyEnEl.className = "sakha-modal-reason-en";
  bodyEnEl.textContent = bodyEn;
  const bodyLangEl = document.createElement("div");
  bodyLangEl.className = "sakha-modal-reason-te";
  bodyLangEl.textContent = bodyLang;
  const actions = document.createElement("div");
  actions.className = "sakha-modal-actions";
  const agreeBtn = document.createElement("button");
  agreeBtn.id = "sakha-consent-agree";
  agreeBtn.className = "sakha-btn sakha-btn-primary";
  agreeBtn.textContent = `\u2705 ${agreeEn} / ${agreeLang}`;
  actions.appendChild(agreeBtn);
  body.appendChild(bodyEnEl);
  body.appendChild(bodyLangEl);
  body.appendChild(actions);
  card.appendChild(header);
  card.appendChild(body);
  root.appendChild(card);


  document.body.appendChild(root);

  document.getElementById("sakha-consent-agree")?.addEventListener("click", () => {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      chrome.storage.local.set({ sakha_consent_accepted: true }, () => {
        logPilotEvent("CONSENT_GIVEN", { lang: currentLanguage });
        root.remove();
        initializeSakha();
      });
    } else {
      root.remove();
      initializeSakha();
    }
  });
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

  // 2. Continuous masking and debounced safety check on dynamic DOM updates (SPAs)
  const observer = new MutationObserver(() => {
    applyPageMasking(document, currentLanguage);
    if (reevaluationTimer) clearTimeout(reevaluationTimer);
    reevaluationTimer = setTimeout(() => {
      runPageSafetyCheck();
    }, 400); // 400ms debounce
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // 3. Scan page for scams
  runPageSafetyCheck();
}

function runPageSafetyCheck() {
  const pageText = document.body ? document.body.innerText || "" : "";
  const classifiedFields = extractGenericPageFields();
  
  // Highlight analyzed fields on the page with removable outline
  highlightAnalyzedFields(classifiedFields);

  const inputElements = classifiedFields.map(f => ({
    name: f.name || "",
    id: f.id || "",
    placeholder: "",
    type: "",
    label: f.label || ""
  }));

  const linkElements = Array.from(document.querySelectorAll("a[href]")).map(a => a.href);
  const formsCount = document.querySelectorAll("form").length;
  const framesCount = document.querySelectorAll("iframe, frame").length;

  const serializedFields = classifiedFields.map(f => ({
    id: f.id,
    name: f.name,
    label: f.label,
    detectedType: f.detectedType,
    confidence: f.confidence,
    evidence: f.evidence,
    maskedValue: f.maskedValue
  }));

  pageEvaluation = evaluatePageSafety({
    url: window.location.href,
    pageText,
    inputs: inputElements,
    links: linkElements,
    domStats: {
      fieldsCount: classifiedFields.length,
      formsCount,
      linksCount: linkElements.length,
      framesCount
    },
    classifiedFields: serializedFields
  });

  // SEC-001: Log only level, not full evaluation object
  console.log("[Sakha] Page evaluation:", pageEvaluation.level, "on", pageEvaluation.hostname);

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
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "sakha-alert-title");
  root.setAttribute("aria-describedby", "sakha-alert-desc");

  const isDanger = evaluation.level === "danger";
  const icon = isDanger ? "🚨" : "⚠️";
  const titleKey = isDanger ? "warning_danger_title" : "warning_caution_title";
  const titleEn = t(titleKey, "en");
  const titleTe = t(titleKey, "te");

  // SEC-003: Build modal via DOM API — never innerHTML with data that could be
  // externally influenced. Defense in depth: even if i18n strings were mutated,
  // textContent assignment prevents HTML injection.
  const card = document.createElement("div");
  card.className = `sakha-modal-card ${isDanger ? "danger" : "caution"}`;

  const header = document.createElement("div");
  header.className = "sakha-modal-header";

  const iconEl = document.createElement("span");
  iconEl.className = "sakha-icon";
  iconEl.setAttribute("aria-hidden", "true");
  iconEl.textContent = icon;

  const titleWrap = document.createElement("div");
  const h2 = document.createElement("h2");
  h2.id = "sakha-alert-title";
  h2.textContent = titleEn;
  const subTitle = document.createElement("div");
  subTitle.style.cssText = "font-size:16px;opacity:0.9;margin-top:4px";
  subTitle.textContent = titleTe;
  titleWrap.appendChild(h2);
  titleWrap.appendChild(subTitle);
  header.appendChild(iconEl);
  header.appendChild(titleWrap);

  const body = document.createElement("div");
  body.id = "sakha-alert-desc";
  body.className = "sakha-modal-body";

  const reasonEnEl = document.createElement("div");
  reasonEnEl.className = "sakha-modal-reason-en";
  reasonEnEl.textContent = evaluation.reasonEn;

  const reasonTeEl = document.createElement("div");
  reasonTeEl.className = "sakha-modal-reason-te";
  reasonTeEl.textContent = evaluation.reasonTe;

  const actions = document.createElement("div");
  actions.className = "sakha-modal-actions";

  const btnLeave = document.createElement("button");
  btnLeave.id = "sakha-btn-leave";
  btnLeave.className = "sakha-btn sakha-btn-primary";
  btnLeave.textContent = `\uD83D\uDEE1\uFE0F ${t("btn_understand_leave", "en")} / ${t("btn_understand_leave", "te")}`;

  const btnProceed = document.createElement("button");
  btnProceed.id = "sakha-btn-proceed";
  btnProceed.className = "sakha-btn sakha-btn-secondary";
  btnProceed.textContent = `${t("btn_proceed_anyway", "en")} / ${t("btn_proceed_anyway", "te")}`;

  actions.appendChild(btnLeave);
  actions.appendChild(btnProceed);
  body.appendChild(reasonEnEl);
  body.appendChild(reasonTeEl);
  body.appendChild(actions);
  card.appendChild(header);
  card.appendChild(body);
  root.appendChild(card);


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
    // SEC-002: Only respond to messages from our own extension pages (popup, background).
    // Hostile web pages CANNOT spoof chrome.runtime.sendMessage but a compromised
    // extension page could; rejecting non-extension senders is defense in depth.
    const isExtensionSender = sender?.id === chrome.runtime.id;
    if (!isExtensionSender) {
      // Silently ignore — do not expose internal state to web pages
      return false;
    }

    if (msg.type === "GET_PAGE_SAFETY") {
      // Re-query current masked count on page
      const currentMaskedInputs = document.querySelectorAll(".sakha-masked-input").length;
      const currentMaskedText = document.querySelectorAll(".sakha-blurred").length;
      sendResponse({ 
        evaluation: pageEvaluation,
        maskStats: {
          maskedInputs: currentMaskedInputs,
          maskedTextNodes: currentMaskedText,
          totalMasked: currentMaskedInputs + currentMaskedText
        }
      });
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
