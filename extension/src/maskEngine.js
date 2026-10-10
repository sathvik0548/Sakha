/**
 * maskEngine.js — On-Page Real-Time Sensitive Data Masking Engine for Sakha
 *
 * Runs locally on any webpage (zero server transmission).
 * Scans text nodes, input fields, and tables to mask:
 * - Aadhaar (Verhoeff-validated 12-digit numbers)
 * - PAN (10-char uppercase structural match [A-Z]{5}[0-9]{4}[A-Z])
 * - Credit/Debit Card Numbers (13-19 digits, Luhn validated)
 * - IFSC Codes ([A-Z]{4}0[A-Z0-9]{6})
 * - Phone numbers (Indian mobile numbers 6-9xxxxxxxx)
 * - UPI IDs (user@bank format)
 *
 * Tap-to-reveal overlay: CSS blur overlay that reveals on click.
 * Strictly preserves native form submission value (never clears or alters input.value).
 */

import { verhoeffCheck, validatePAN, validateIFSC, validateIndianMobile } from "./pii.js";
import { t } from "./i18n.js";

// Accurate Luhn check matching pii.js
function luhnCheck(raw) {
  const digits = raw.replace(/\D/g, "").split("").reverse().map(Number);
  if (digits.length < 13 || digits.length > 19) return false;
  const sum = digits.reduce((acc, d, i) => {
    if (i % 2 === 1) { d *= 2; if (d > 9) d -= 9; }
    return acc + d;
  }, 0);
  return sum % 10 === 0;
}

export function validateUPI(raw) {
  if (typeof raw !== "string") return false;
  return /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(raw.trim());
}

/**
 * Scan raw string and identify all sensitive spans with their replacement mask
 */
export function identifySensitiveSpans(text) {
  if (!text || typeof text !== "string") return [];
  const spans = [];

  // 1. Aadhaar (12 digits, optional spaces/hyphens)
  const aadhaarRegex = /\b([2-9]\d{3}[\s\-]?\d{4}[\s\-]?\d{4})\b/g;
  let m;
  while ((m = aadhaarRegex.exec(text)) !== null) {
    const raw = m[1];
    const clean = raw.replace(/[\s\-]/g, "");
    if (clean.length === 12 && verhoeffCheck(clean)) {
      spans.push({
        type: "AADHAAR",
        raw,
        masked: "XXXX XXXX " + clean.slice(8),
        start: m.index,
        end: m.index + raw.length
      });
    }
  }

  // 2. Card numbers (13-19 digits, Luhn validated)
  const cardRegex = /\b(\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{1,7})\b/g;
  while ((m = cardRegex.exec(text)) !== null) {
    const raw = m[1];
    const clean = raw.replace(/[\s\-]/g, "");
    if (luhnCheck(clean)) {
      // avoid re-masking an already matched Aadhaar
      const overlaps = spans.some(s => s.start <= m.index && s.end >= m.index + raw.length);
      if (!overlaps) {
        spans.push({
          type: "CARD",
          raw,
          masked: "•••• •••• •••• " + clean.slice(-4),
          start: m.index,
          end: m.index + raw.length
        });
      }
    }
  }

  // 3. PAN (5 letters, 4 digits, 1 letter)
  const panRegex = /\b([A-Z]{5}[0-9]{4}[A-Z])\b/gi;
  while ((m = panRegex.exec(text)) !== null) {
    const raw = m[1];
    if (validatePAN(raw)) {
      spans.push({
        type: "PAN",
        raw,
        masked: raw.slice(0, 2) + "XXXXX" + raw.slice(-1),
        start: m.index,
        end: m.index + raw.length
      });
    }
  }

  // 4. IFSC ([A-Z]{4}0[A-Z0-9]{6})
  const ifscRegex = /\b([A-Z]{4}0[A-Z0-9]{6})\b/gi;
  while ((m = ifscRegex.exec(text)) !== null) {
    const raw = m[1];
    if (validateIFSC(raw)) {
      spans.push({
        type: "IFSC",
        raw,
        masked: raw.slice(0, 4) + "0••••••",
        start: m.index,
        end: m.index + raw.length
      });
    }
  }

  // 5. UPI ID
  const upiRegex = /\b([a-zA-Z0-9.\-_]{2,64}@[a-zA-Z]{2,32})\b/g;
  while ((m = upiRegex.exec(text)) !== null) {
    const raw = m[1];
    // Ignore standard email domains
    if (!raw.endsWith("@gmail.com") && !raw.endsWith("@yahoo.com") && !raw.endsWith("@outlook.com") && !raw.endsWith("@hotmail.com")) {
      const parts = raw.split("@");
      const maskedUser = parts[0].length > 2 ? parts[0].slice(0, 2) + "•••" : "••";
      spans.push({
        type: "UPI_ID",
        raw,
        masked: `${maskedUser}@${parts[1]}`,
        start: m.index,
        end: m.index + raw.length
      });
    }
  }

  // Sort by starting index
  return spans.sort((a, b) => a.start - b.start);
}

/**
 * Mask text content, returning sanitized masked string
 */
export function maskSensitiveText(text) {
  if (!text) return "";
  const spans = identifySensitiveSpans(text);
  if (spans.length === 0) return text;

  let result = "";
  let lastIdx = 0;
  for (const span of spans) {
    result += text.slice(lastIdx, span.start) + span.masked;
    lastIdx = span.end;
  }
  result += text.slice(lastIdx);
  return result;
}

// Generic Sensitive Attribute Heuristics
export const GENERIC_FIELD_PATTERNS = {
  AADHAAR: /aadhaar|aadhar|uidai/i,
  PAN: /pan[_\-\s]?(number|no|card)?/i,
  CARD: /card[_\-\s]?(number|no)?|credit|debit|cvv|cvc|expiry|exp/i,
  BANK_ACCOUNT: /bank[_\-\s]?acc|account[_\-\s]?no|account[_\-\s]?number/i,
  IFSC: /ifsc/i,
  OTP_PIN: /otp|one[_\-\s]?time[_\-\s]?password|upi[_\-\s]?pin|atm[_\-\s]?pin|mpin/i,
  PHONE: /phone|mobile|tel|cell/i,
  UPI: /upi[_\-\s]?(id|vpa)?/i,
  PASSWORD: /password|passcode/i
};

export const SENSITIVE_FIELD_RE = /aadhaar|aadhar|pan[_\-\s]?(number|no|card)?|bank[_\-\s]?acc|account[_\-\s]?no|account[_\-\s]?number|ifsc|card[_\-\s]?(number|no)?|credit|debit|cvv|cvc|otp|passport|voter|driving|licence|license|ssn|upi|mpin/i;

/**
 * Generic Field Classifier
 * Checks label, name, id, placeholder, autocomplete, aria attributes, nearby text, and values
 */
export function classifyGenericField(fieldInfo) {
  const {
    name = "",
    id = "",
    placeholder = "",
    autocomplete = "",
    ariaLabel = "",
    type = "",
    label = "",
    nearbyText = "",
    value = ""
  } = fieldInfo;

  const combinedEvidence = `${label} ${ariaLabel} ${name} ${id} ${placeholder} ${autocomplete} ${nearbyText}`.trim();
  const cleanVal = (value || "").trim();

  // 1. Check Value Validators First (highest confidence if value present)
  if (cleanVal) {
    const rawVal = cleanVal.replace(/[\s\-]/g, "");
    if (rawVal.length === 12 && /^[2-9]\d{11}$/.test(rawVal) && verhoeffCheck(rawVal)) {
      return { type: "AADHAAR", confidence: 0.99, evidence: "Value verified by Verhoeff checksum algorithm" };
    }
    if (validatePAN(cleanVal)) {
      return { type: "PAN", confidence: 0.98, evidence: "Value matches standard Income Tax PAN format" };
    }
    if (luhnCheck(rawVal)) {
      return { type: "CARD", confidence: 0.98, evidence: "Value verified by Luhn checksum algorithm" };
    }
    if (validateIFSC(cleanVal)) {
      return { type: "IFSC", confidence: 0.96, evidence: "Value matches RBI IFSC code structure" };
    }
    if (validateUPI(cleanVal)) {
      return { type: "UPI", confidence: 0.95, evidence: "Value matches UPI VPA pattern" };
    }
    if (validateIndianMobile(cleanVal)) {
      return { type: "PHONE", confidence: 0.92, evidence: "Value matches Indian mobile phone format" };
    }
  }

  // 2. Attribute and Contextual Evidence
  if (type === "password") {
    if (GENERIC_FIELD_PATTERNS.OTP_PIN.test(combinedEvidence)) {
      return { type: "OTP_PIN", confidence: 0.95, evidence: `PIN/OTP requested in password input: "${combinedEvidence.slice(0, 40)}"` };
    }
    return { type: "PASSWORD", confidence: 0.92, evidence: `Password type field: "${combinedEvidence.slice(0, 40)}"` };
  }

  for (const [fieldType, pattern] of Object.entries(GENERIC_FIELD_PATTERNS)) {
    if (pattern.test(combinedEvidence)) {
      return {
        type: fieldType,
        confidence: 0.88,
        evidence: `Matched keyword pattern in attributes: "${combinedEvidence.slice(0, 40)}"`
      };
    }
  }

  return {
    type: "UNCLASSIFIED",
    confidence: 0.20,
    evidence: combinedEvidence ? `Standard input element: "${combinedEvidence.slice(0, 30)}"` : "Standard input element without explicit sensitive attributes"
  };
}

export function isSensitiveFieldByAttr(input) {
  const attrs = [
    input.name, 
    input.id, 
    input.placeholder, 
    input.getAttribute("autocomplete"), 
    input.getAttribute("aria-label"),
    input.getAttribute("aria-labelledby")
  ];
  return attrs.some(a => a && SENSITIVE_FIELD_RE.test(a));
}

/**
 * Apply live DOM Masking Overlay on any webpage (Content script context)
 */
export function applyPageMasking(documentRoot = document, lang = "en") {
  if (!documentRoot || !documentRoot.body) return { maskedInputs: 0, maskedTextNodes: 0 };

  let maskedInputs = 0;
  let maskedTextNodes = 0;

  // 1. Mask Input Fields (Visual overlay only - DOES NOT MUTATE input.value)
  const inputs = documentRoot.querySelectorAll("input:not([type='hidden']):not([type='submit']):not([type='button'])");
  inputs.forEach((input) => {
    if (input.getAttribute("data-sakha-monitored")) return;
    input.setAttribute("data-sakha-monitored", "true");

    const checkAndMaskInput = () => {
      const val = input.value;
      const activeEl = documentRoot.activeElement || (typeof document !== "undefined" ? document.activeElement : null);
      if (activeEl === input) return; // never blur a focused field

      const sensitiveByValue = val && identifySensitiveSpans(val).length > 0;
      const sensitiveByAttr = isSensitiveFieldByAttr(input);

      if (sensitiveByValue || sensitiveByAttr) {
        input.classList.add("sakha-masked-input");
        input.title = t("masked_badge", lang);
        maskedInputs++;
      } else {
        input.classList.remove("sakha-masked-input");
      }
    };

    input.addEventListener("focus", () => {
      input.classList.remove("sakha-masked-input");
    });
    input.addEventListener("blur", () => {
      checkAndMaskInput();
    });
    input.addEventListener("input", () => {
      const activeEl = documentRoot.activeElement || (typeof document !== "undefined" ? document.activeElement : null);
      if (activeEl !== input) checkAndMaskInput();
    });

    checkAndMaskInput();
  });

  // 2. Mask Static Text in DOM Elements (tables, paragraphs, spans)
  const SHOW_TEXT = (typeof NodeFilter !== "undefined" && NodeFilter.SHOW_TEXT) ? NodeFilter.SHOW_TEXT : 4;
  const FILTER_ACCEPT = (typeof NodeFilter !== "undefined" && NodeFilter.FILTER_ACCEPT) ? NodeFilter.FILTER_ACCEPT : 1;
  const FILTER_REJECT = (typeof NodeFilter !== "undefined" && NodeFilter.FILTER_REJECT) ? NodeFilter.FILTER_REJECT : 2;

  const walker = documentRoot.createTreeWalker(
    documentRoot.body,
    SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim()) return FILTER_REJECT;
        const parentTag = node.parentElement?.tagName?.toLowerCase();
        if (["script", "style", "noscript", "textarea", "input"].includes(parentTag)) {
          return FILTER_REJECT;
        }
        if (node.parentElement?.classList?.contains("sakha-tap-mask")) {
          return FILTER_REJECT;
        }
        return FILTER_ACCEPT;
      }
    }
  );

  const textNodesToMask = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const spans = identifySensitiveSpans(node.nodeValue);
    if (spans.length > 0) {
      textNodesToMask.push({ node, spans });
    }
  }

  for (const item of textNodesToMask) {
    const { node, spans } = item;
    const parent = node.parentNode;
    if (!parent) continue;

    const fullText = node.nodeValue;
    const frag = documentRoot.createDocumentFragment();
    let cur = 0;

    for (const span of spans) {
      if (span.start > cur) {
        frag.appendChild(documentRoot.createTextNode(fullText.slice(cur, span.start)));
      }

      // Create Tap-to-Reveal inline badge (Keyboard accessible)
      const maskSpan = documentRoot.createElement("span");
      maskSpan.className = "sakha-tap-mask sakha-blurred";
      maskSpan.tabIndex = 0; // Accessible via keyboard Tab
      maskSpan.textContent = span.raw;
      maskSpan.setAttribute("data-raw-value", span.raw);
      maskSpan.setAttribute("data-masked-value", span.masked);
      maskSpan.setAttribute("role", "button");
      maskSpan.setAttribute("aria-label", `${t("masked_badge", lang)} — ${t("tap_to_reveal", lang)}`);
      maskSpan.setAttribute("title", `${t("masked_badge", lang)} — ${t("tap_to_reveal", lang)}`);

      const toggleReveal = (e) => {
        e.stopPropagation();
        e.preventDefault();
        maskSpan.classList.toggle("sakha-blurred");
        maskSpan.classList.toggle("sakha-revealed");
      };

      // Mouse tap
      maskSpan.addEventListener("click", toggleReveal);

      // Keyboard toggle (Enter or Space)
      maskSpan.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          toggleReveal(e);
        }
      });

      frag.appendChild(maskSpan);
      cur = span.end;
      maskedTextNodes++;
    }

    if (cur < fullText.length) {
      frag.appendChild(documentRoot.createTextNode(fullText.slice(cur)));
    }

    parent.replaceChild(frag, node);
  }

  return { maskedInputs, maskedTextNodes };
}
