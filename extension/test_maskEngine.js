/**
 * test_maskEngine.js — Unit Tests for On-Page Sensitive Data Masking Engine
 */

import assert from "node:assert";
import { identifySensitiveSpans, maskSensitiveText, validateUPI } from "./src/maskEngine.js";

console.log("=== Running Sakha Masking Engine Tests ===");

// 1. UPI validation
assert.strictEqual(validateUPI("user@okhdfcbank"), true);
assert.strictEqual(validateUPI("invalid-upi"), false);
console.log("✓ UPI validation check passed");

// 2. Aadhaar Masking with Verhoeff
// 5489 1234 5674 passes Verhoeff check
const testAadhaar = "My Aadhaar is 5489 1234 5674 for verification.";
const aadhaarSpans = identifySensitiveSpans(testAadhaar);
assert.strictEqual(aadhaarSpans.length, 1);
assert.strictEqual(aadhaarSpans[0].type, "AADHAAR");
assert.strictEqual(aadhaarSpans[0].masked, "XXXX XXXX 5674");

const maskedAadhaarText = maskSensitiveText(testAadhaar);
assert.strictEqual(maskedAadhaarText, "My Aadhaar is XXXX XXXX 5674 for verification.");
console.log("✓ Aadhaar detection and masking passed");

// 3. PAN Masking
const testPAN = "Permanent account number: ABCDE1234F allocated.";
const panSpans = identifySensitiveSpans(testPAN);
assert.strictEqual(panSpans.length, 1);
assert.strictEqual(panSpans[0].type, "PAN");
assert.strictEqual(panSpans[0].masked, "ABXXXXXF");
console.log("✓ PAN detection and masking passed");

// 4. Luhn Credit Card Masking
// 4532 1234 5678 9014 is a valid Luhn card number
const testCard = "Billing card: 4532 1234 5678 9014 on file.";
const cardSpans = identifySensitiveSpans(testCard);
assert.strictEqual(cardSpans.length, 1);
assert.strictEqual(cardSpans[0].type, "CARD");
assert.strictEqual(cardSpans[0].masked, "•••• •••• •••• 9014");
console.log("✓ Luhn card number masking passed");

// 5. IFSC Masking
const testIFSC = "Bank branch IFSC: SBIN0001234 registered.";
const ifscSpans = identifySensitiveSpans(testIFSC);
assert.strictEqual(ifscSpans.length, 1);
assert.strictEqual(ifscSpans[0].type, "IFSC");
assert.strictEqual(ifscSpans[0].masked, "SBIN0••••••");
console.log("✓ IFSC detection and masking passed");

// 6. UPI ID Masking
const testUPI = "Transfer money to vendor.store@icici immediately.";
const upiSpans = identifySensitiveSpans(testUPI);
assert.strictEqual(upiSpans.length, 1);
assert.strictEqual(upiSpans[0].type, "UPI_ID");
assert.strictEqual(upiSpans[0].masked, "ve•••@icici");
console.log("✓ UPI ID masking passed");

// 7. Multi-Entity Masking in Single Text
const multiText = "User with PAN ABCDE1234F and IFSC SBIN0001234 paid via vendor@axis.";
const maskedMulti = maskSensitiveText(multiText);
assert.ok(maskedMulti.includes("ABXXXXXF"));
assert.ok(maskedMulti.includes("SBIN0••••••"));
assert.ok(maskedMulti.includes("ve•••@axis"));
console.log("✓ Multi-entity masking passed");

console.log("=== ALL MASKING TESTS PASSED (100% OK) ===");
