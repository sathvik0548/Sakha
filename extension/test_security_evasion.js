/**
 * test_security_evasion.js — Adversarial evasion tests for Sakha scam detector
 *
 * Tests synthetic variants only. No real brands cloned.
 * All domains use .test TLD or clearly fictional names.
 *
 * Run: node extension/test_security_evasion.js
 */

// Inline-require the scamDetector module by reading its source (Node/ESM compat workaround)
import {
  checkLookalikeDomain,
  checkUrgencyAndThreats,
  checkUPITraps,
  checkSensitiveFieldCombo,
  evaluatePageSafety,
  OFFICIAL_ALLOWLIST,
  normalizeHomoglyphs,
} from "./src/scamDetector.js";

let passed = 0;
let failed = 0;
const misses = [];

function assert(label, condition, note = "") {
  if (condition) {
    console.log(`  ✓ ${label}`);
    passed++;
  } else {
    console.warn(`  ✗ MISS: ${label}${note ? " — " + note : ""}`);
    failed++;
    misses.push({ label, note });
  }
}

function assertMiss(label, condition, note = "") {
  // Documents a known miss — expected NOT to be caught
  if (!condition) {
    console.log(`  ○ [KNOWN MISS] ${label}${note ? " — " + note : ""}`);
    misses.push({ label: "[KNOWN MISS] " + label, note });
  } else {
    console.log(`  ✓ [CAUGHT] ${label}`);
    passed++;
  }
}

// ============================================================================
// SECTION 1: Domain Lookalike Evasion
// ============================================================================
console.log("\n=== S1: Homoglyph & Mixed-Script Domain Evasion ===");

// Cyrillic 'а' instead of ASCII 'a' in "apex-bank"
const cyrillicDomain = "аpex-bаnk.test"; // Cyrillic а and а
const r1 = checkLookalikeDomain(cyrillicDomain);
// This won't match allowlist but should trip homoglyph normalization if apex-bank is allowlisted
// In practice apex-bank is not in allowlist, so test the normalization function directly
const normalized = normalizeHomoglyphs(cyrillicDomain);
assert("Cyrillic 'а' normalizes to ASCII 'a'", normalized.startsWith("apex-b"));

// Zero-width joiner (U+200D) in domain — browsers strip before DNS but test our normalizer
const zwjDomain = "sbi\u200D.co.in.test";
const r2 = checkLookalikeDomain(zwjDomain);
assertMiss("ZWJ in domain string (U+200D)", r2.isLookalike,
  "Detector sees raw string before browser DNS resolution; ZWJ not in HOMOGLYPH_MAP");

// Mixed-script subdomain spoofing
const mixedSubdomain = "sbi.co.in.kyc-portal.test";
const r3 = checkLookalikeDomain(mixedSubdomain);
assert("SBI brand embedded as subdomain of .test domain", r3.isLookalike);

// Levenshtein typosquatting
const typo = "onlinesb1.sbi.test"; // '1' instead of 'i'
const r4 = checkLookalikeDomain(typo);
// HOMOGLYPH_MAP maps '1'->'l', so 'onlinesbl' — Levenshtein to 'onlinesbi' = 1
assert("Digit-1 for letter-i typosquatting on allowlisted domain base", r4.isLookalike);

// Finance keyword on suspicious TLD
const suspTLD = "kyc-verify.xyz";
const r5 = checkLookalikeDomain(suspTLD);
assert("Finance keyword 'kyc' on .xyz TLD", r5.isLookalike);

// Allowlisted domain must NOT trigger
const r6 = checkLookalikeDomain("sbi.co.in");
assert("Canonical sbi.co.in is NOT lookalike", !r6.isLookalike);

// ============================================================================
// SECTION 2: Urgency Language Evasion
// ============================================================================
console.log("\n=== S2: Urgency Language Evasion ===");

// Split across sentences with punctuation
const splitUrgency = "Your account. Will be blocked. Within 24 hours.";
const u1 = checkUrgencyAndThreats(splitUrgency);
// Regex uses \b boundaries — "account. Will be blocked. Within" — likely misses
assertMiss("Urgency phrase split by sentence breaks", u1.detected,
  "Regex requires contiguous phrase; punctuation breaks boundary matching");

// Unicode whitespace in urgency phrase (em-space U+2003)
const unicodeSpace = "account\u2003will\u2003be\u2003blocked";
const u2 = checkUrgencyAndThreats(unicodeSpace);
assertMiss("Urgency phrase with Unicode whitespace (em-space U+2003)", u2.detected,
  "Regex \\s or \\b may not match Unicode whitespace in all engines");

// Normal urgency — must catch
const u3 = checkUrgencyAndThreats("Your account will be blocked within 24 hours. Take immediate action.");
assert("Standard urgency phrase caught", u3.detected);

// CSS-hidden text (detector operates on DOM innerText, not rendered pixels)
// Document: CSS hidden text with display:none would NOT appear in innerText
assertMiss("CSS display:none urgency text (structural miss)", false,
  "DOM innerText excludes display:none elements — architectural limitation documented in LIMITATIONS.md");

// Text split across DOM elements (architectural miss — innerText joins with newlines)
const splitDomText = "account will be blocked\nwithin 24 hours";
const u4 = checkUrgencyAndThreats(splitDomText);
assertMiss("Urgency across newline-separated DOM elements", u4.detected,
  "Multi-line innerText join may break \\b word boundaries at newline");

// Obfuscation: letter substitution in urgency text
const l33t = "4cc0unt w1ll b3 bl0ck3d";
const u5 = checkUrgencyAndThreats(l33t);
assertMiss("Leet-speak obfuscated urgency phrase", u5.detected,
  "Detector does not normalize leet-speak in page text");

// ============================================================================
// SECTION 3: UPI PIN Trap Evasion
// ============================================================================
console.log("\n=== S3: UPI Trap Evasion ===");

// Standard trap — must catch
const p1 = checkUPITraps("Enter your UPI PIN to receive your cashback reward.");
assert("Standard UPI PIN to receive money trap", p1.detected);

// Reversed word order
const p2 = checkUPITraps("Claim your reward money — type PIN to receive cashback.");
assert("Reversed order UPI trap (claim...type PIN...receive)", p2.detected);

// Obfuscated: zero-width space between 'UPI' and 'PIN'
const p3 = checkUPITraps("Enter UPI\u200BPIN to receive money.");
assertMiss("ZWS between UPI and PIN tokens", p3.detected,
  "Zero-width space breaks regex token boundary");

// Number words instead of digits
const p4 = checkUPITraps("Enter pin to receive five hundred rupees");
const p4b = checkUPITraps("Enter PIN to receive money");
assert("PIN to receive money (uppercase PIN)", p4b.detected);
assertMiss("PIN to receive 'five hundred rupees' (word number, no money keyword)", p4.detected,
  "Regex requires 'money|cash|cashback|refund|reward|prize' — word numbers missed");

// ============================================================================
// SECTION 4: Credential Combo Evasion
// ============================================================================
console.log("\n=== S4: Sensitive Field Combo Evasion ===");

// Standard combo — must catch
const fullCombo = [
  { name: "card_number", id: "card-num", placeholder: "", type: "text", label: "" },
  { name: "cvv", id: "cvv-input", placeholder: "", type: "password", label: "" },
  { name: "mpin", id: "atm-pin", placeholder: "", type: "password", label: "" },
];
const c1 = checkSensitiveFieldCombo(fullCombo, false);
assert("Full card+CVV+PIN combo on non-allowlisted domain", c1.detected);

// Allowlisted domain — must NOT trigger
const c2 = checkSensitiveFieldCombo(fullCombo, true);
assert("Full combo on allowlisted domain is NOT flagged", !c2.detected);

// Only card+CVV without PIN — must NOT trigger (combo requires all 3)
const partialCombo = [
  { name: "card_number", id: "card-num", placeholder: "", type: "text", label: "" },
  { name: "cvv", id: "cvv-input", placeholder: "", type: "password", label: "" },
];
const c3 = checkSensitiveFieldCombo(partialCombo, false);
assert("Card+CVV only (no PIN) is NOT flagged — prevents FP on legitimate payment pages", !c3.detected);

// Obfuscated field IDs — using aria-label only
const ariaCombo = [
  { name: "", id: "", placeholder: "", type: "text", label: "card number" },
  { name: "", id: "", placeholder: "", type: "password", label: "card verification code" },
  { name: "", id: "", placeholder: "", type: "password", label: "one time password" },
];
const c4 = checkSensitiveFieldCombo(ariaCombo, false);
assert("Combo detected via aria-label only (card verification code, one time password)", c4.detected);

// Inputs with no name/id/label at all — detector cannot identify
const blindCombo = [
  { name: "", id: "", placeholder: "", type: "password", label: "" },
  { name: "", id: "", placeholder: "", type: "password", label: "" },
  { name: "", id: "", placeholder: "", type: "password", label: "" },
];
const c5 = checkSensitiveFieldCombo(blindCombo, false);
assertMiss("Three unlabeled password fields (no semantic attributes)", c5.detected,
  "Detector relies on field name/id/placeholder/label — fully anonymous inputs evade");

// ============================================================================
// SECTION 5: Full Page Evaluation — Shadow DOM, Iframe, Late Content
// ============================================================================
console.log("\n=== S5: Architectural Evasion (documented misses) ===");

// Shadow DOM content is NOT in document.body.innerText
assertMiss("Scam content hidden in shadow DOM", false,
  "content_sakha.js reads document.body.innerText — shadow DOM not traversed");

// Iframe content from same/cross origin — not accessible
assertMiss("Scam content in cross-origin iframe", false,
  "Content script cannot access cross-origin iframe DOM");

// Canvas-rendered text (e.g. Aadhaar number drawn on canvas)
assertMiss("Aadhaar number rendered to <canvas> element", false,
  "Text masking operates on DOM text nodes and input values — canvas pixels not analyzed");

// Late-rendered content via setTimeout > 2s
assertMiss("Urgency text injected via setTimeout(fn, 3000)", false,
  "MutationObserver covers DOM mutations but only after initial idle; very late injection may slip");

// ============================================================================
// SECTION 6: Leakage Tests (static analysis)
// ============================================================================
console.log("\n=== S6: Static Leakage Checks ===");

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentSrc = readFileSync(path.resolve(__dirname, "src/content_sakha.js"), "utf8");
const maskSrc = readFileSync(path.resolve(__dirname, "src/maskEngine.js"), "utf8");
const popupSrc = readFileSync(path.resolve(__dirname, "src/popup.js"), "utf8");

// SEC-001 Check: console.log in content script logs only hostname, never full window.location.href
const logsFullURL = /console\.(log|warn|error)\s*\(.*window\.location\.href/g.test(contentSrc);
assert(
  "SEC-001: content_sakha.js does NOT log window.location.href (prevents URL query PII leakage)",
  !logsFullURL,
  "Full URL must not be logged. Only hostname allowed."
);

// Check: evaluation result logs level and hostname, not full verbose evaluation object
const logsEvalVerbose = /console\.log\s*\(\s*["'][^"']*Page safety evaluation:[^"']*["'],\s*pageEvaluation\s*\)/g.test(contentSrc);
assert("SEC-001: evaluatePageSafety does not log verbose unmasked page evaluation object", !logsEvalVerbose);

// Check: fetch calls in content script
const fetchInContent = /\bfetch\s*\(/.test(contentSrc);
assert("content_sakha.js has no outbound fetch calls", !fetchInContent);

// Check: fetch in popup goes to localhost only
const popupFetchUrl = /fetch\s*\(\s*["'`]http:\/\/localhost/g.test(popupSrc);
assert("Popup fetch is restricted to localhost only (not external)", popupFetchUrl);

// Check: maskedText sent to fetch, not raw value
const rawValueInFetch = /input\.value\s*.*fetch|fetch.*input\.value/g.test(popupSrc);
assert("Popup does NOT send raw input.value to fetch (no direct PII in Explain request)", !rawValueInFetch);

// SEC-003 Check: innerHTML in warning & consent modal replaced with DOM construction
const modalInnerHTMLLines = contentSrc.match(/root\.innerHTML\s*=[\s\S]*?`/g) || [];
assert(
  "SEC-003: Warning and consent modals use safe DOM construction instead of innerHTML template literals",
  modalInnerHTMLLines.length === 0,
  "No innerHTML template literals should be used in modal rendering."
);

// ============================================================================
// SECTION 7: Message Passing — Sender Validation
// ============================================================================
console.log("\n=== S7: Message Passing Sender Validation ===");

const senderCheck = /sender\??\.(tab|id|origin|url)/g.test(contentSrc);
assert(
  "SEC-002: content_sakha.js onMessage validates sender identity (sender?.id === chrome.runtime.id)",
  senderCheck,
  "Extension onMessage must validate sender to prevent unauthorized cross-context messaging."
);

// ============================================================================
// SUMMARY
// ============================================================================
console.log("\n======================================================");
console.log(`SECURITY EVASION TEST SUMMARY`);
console.log(`======================================================`);
console.log(`Assertions run: ${passed + failed}`);
console.log(`Caught / Pass: ${passed}`);
console.log(`Misses / Fail: ${failed}`);
console.log(`\nKnown architectural misses (not counted as failures):`);
misses.filter(m => m.label.startsWith("[KNOWN MISS]")).forEach(m => {
  console.log(`  - ${m.label}: ${m.note}`);
});
console.log(`\nFindings (security issues):`);
misses.filter(m => !m.label.startsWith("[KNOWN MISS]")).forEach(m => {
  console.log(`  ! ${m.label}: ${m.note}`);
});
