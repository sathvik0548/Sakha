/**
 * test_scamDetector.js — Unit Tests for Sakha Scam Warning Engine
 * Runs in Node without external dependencies using standard assert.
 */

import assert from "node:assert";
import {
  levenshteinDistance,
  normalizeHomoglyphs,
  checkLookalikeDomain,
  checkUrgencyAndThreats,
  checkUPITraps,
  checkSensitiveFieldCombo,
  checkMaliciousAppDownloads,
  evaluatePageSafety,
  isAllowlistedDomain
} from "./src/scamDetector.js";

console.log("=== Running Sakha Scam Warning Unit Tests ===");

// 1. Levenshtein Distance
assert.strictEqual(levenshteinDistance("sbi", "sbi"), 0);
assert.strictEqual(levenshteinDistance("sbi", "sb1"), 1);
assert.strictEqual(levenshteinDistance("hdfc", "hdfcc"), 1);
assert.strictEqual(levenshteinDistance("kitten", "sitting"), 3);
console.log("✓ Levenshtein distance calculations verified");

// 2. Homoglyph Normalization
// 'с' (Cyrillic U+0441) -> 'c', 'а' (Cyrillic U+0430) -> 'a'
const homoglyphStr = "sbi-bаnk";
assert.strictEqual(normalizeHomoglyphs(homoglyphStr), "sbi-bank");
console.log("✓ Homoglyph mapping verified");

// 3. Allowlist Check
assert.strictEqual(isAllowlistedDomain("sbi.co.in"), true);
assert.strictEqual(isAllowlistedDomain("retail.onlinesbi.sbi"), true);
assert.strictEqual(isAllowlistedDomain("fake-sbi.com"), false);
console.log("✓ Allowlist domain check verified");

// 4. Lookalike & Typosquatting Engine
// Punycode
const punycodeRes = checkLookalikeDomain("xn--sbi-9ha.com");
assert.strictEqual(punycodeRes.isLookalike, true);

// Subdomain trick: sbi.co.in.fake-portal.com
const subdomainRes = checkLookalikeDomain("sbi.co.in.fake-portal.com");
assert.strictEqual(subdomainRes.isLookalike, true);

// Typosquatting edit distance: onlinesb1.sbi or hdfcbanck.com
const typoRes = checkLookalikeDomain("hdfcbanck.com");
assert.strictEqual(typoRes.isLookalike, true);

// Shady TLD + banking keyword
const shadyTldRes = checkLookalikeDomain("sbi-kyc-update.xyz");
assert.strictEqual(shadyTldRes.isLookalike, true);

// Legitimate non-financial site
const legitOtherRes = checkLookalikeDomain("wikipedia.org");
assert.strictEqual(legitOtherRes.isLookalike, false);
console.log("✓ Lookalike and spoofed domain rules verified");

// 5. Urgency & Threats (English, Romanized Hindi, Romanized Telugu)
const urgEn = checkUrgencyAndThreats("URGENT: Your electricity power cut tonight unless bill paid immediately.");
assert.strictEqual(urgEn.detected, true);

const urgHi = checkUrgencyAndThreats("Aadhaar link nahi kiya to khata band ho jayega turant karein");
assert.strictEqual(urgHi.detected, true);

const urgTe = checkUrgencyAndThreats("Mee SIM card block avuthundi ventane cheyandi");
assert.strictEqual(urgTe.detected, true);

const noUrg = checkUrgencyAndThreats("Welcome to our online store. Browse our items.");
assert.strictEqual(noUrg.detected, false);
console.log("✓ Urgency and threat language patterns verified (EN, Romanized HI, Romanized TE)");

// 6. UPI Collect & "Enter PIN to receive money" Trap
const upiEn = checkUPITraps("Congratulations! Enter your UPI PIN to claim 5000 cashback reward.");
assert.strictEqual(upiEn.detected, true);

const upiHi = checkUPITraps("Paise lene ke liye UPI PIN daalein");
assert.strictEqual(upiHi.detected, true);

const upiTe = checkUPITraps("Dabbulu ravadaniki UPI PIN enter cheyandi");
assert.strictEqual(upiTe.detected, true);

const legitPayment = checkUPITraps("Scan QR code or send payment to merchant.");
assert.strictEqual(legitPayment.detected, false);
console.log("✓ UPI PIN collection trap patterns verified");

// 7. Credential Harvesting Combo
const harvestInputs = [
  { name: "card_number", type: "text" },
  { name: "cvv", type: "password" },
  { name: "card_pin_or_otp", type: "password" }
];
assert.strictEqual(checkSensitiveFieldCombo(harvestInputs, false).detected, true);
// Same inputs on official bank domain should not trigger fake combo rule
assert.strictEqual(checkSensitiveFieldCombo(harvestInputs, true).detected, false);
console.log("✓ Credential harvesting combo check verified");

// 8. Malicious App & APK Download
const apkText = checkMaliciousAppDownloads("Click here to download app", ["https://fake-bank.test/support.apk"]);
assert.strictEqual(apkText.detected, true);

const anyDeskText = checkMaliciousAppDownloads("Please install AnyDesk for our KYC agent to verify your account", []);
assert.strictEqual(anyDeskText.detected, true);
console.log("✓ Malicious APK and remote access app check verified");

// 9. Full Page Safety Evaluation (Integration)
const scamPageEval = evaluatePageSafety({
  url: "https://sbi.co.in.scam-portal.test/kyc",
  pageText: "Your account will be suspended within 24 hours. Enter your UPI PIN to receive verification reward.",
  inputs: harvestInputs,
  links: ["https://scam-portal.test/app.apk"]
});
assert.strictEqual(scamPageEval.level, "danger");
assert.ok(scamPageEval.rulesTriggered.includes("LOOKALIKE_DOMAIN"));
assert.ok(scamPageEval.rulesTriggered.includes("UPI_PIN_RECEIVE_TRAP"));
assert.ok(scamPageEval.reasonTe.length > 0); // Telugu translation present
assert.ok(scamPageEval.reasonEn.length > 0); // English translation present

const safePageEval = evaluatePageSafety({
  url: "https://onlinesbi.sbi/personal",
  pageText: "Welcome to SBI Internet Banking. Please log in with your credentials.",
  inputs: [{ name: "username" }, { name: "password" }],
  links: []
});
assert.strictEqual(safePageEval.level, "safe");
assert.strictEqual(safePageEval.rulesTriggered.length, 0);

console.log("✓ Full page safety evaluation tests passed successfully!");
console.log("=== ALL SCAM ENGINE TESTS PASSED (100% OK) ===");
