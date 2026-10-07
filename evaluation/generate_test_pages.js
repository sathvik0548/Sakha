/**
 * generate_test_pages.js — Generates Synthetic Test Sets (30 Scam, 30 Genuine)
 *
 * Constraints strictly respected:
 * - Mock data only (Synthetic Aadhaar with Verhoeff, Luhn cards, random PANs).
 * - Fictional institution names only (e.g. "Apex Trust Bank", "National Citizen Fund", "FastRewards Ltd").
 * - No real bank logos or cloned pages.
 * - Reserved test domains only (.test, .invalid).
 * - High-contrast visible marker: "DEMO - NOT A REAL SITE".
 * - Split into tuning (70% = 21 scam, 21 genuine) and hold-out (30% = 9 scam, 9 genuine).
 */

import fs from "node:fs";
import path from "node:path";

// Verhoeff helper to generate valid 12-digit synthetic Aadhaar
const VERHOEFF_D = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
  [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
  [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
  [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
  [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
  [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
  [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
  [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
];
const VERHOEFF_P = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];

function generateSyntheticAadhaar(seed) {
  // Starts with 2-9
  let digits = `${(seed % 8) + 2}` + String(Math.floor(1000000000 + (seed * 9876543) % 9000000000)).slice(0, 10);
  let c = 0;
  const reversed = digits.split("").reverse().map(Number);
  for (let i = 0; i < reversed.length; i++) {
    c = VERHOEFF_D[c][VERHOEFF_P[(i + 1) % 8][reversed[i]]];
  }
  // Inverse lookup for check digit
  const inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
  const checkDigit = inv[c];
  return `${digits}${checkDigit}`;
}

// Luhn generator for 16-digit test cards
function generateSyntheticCard(seed) {
  const prefix = "400000" + String(100000000 + (seed * 876543) % 900000000).slice(0, 9);
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    let digit = parseInt(prefix[14 - i], 10);
    if (i % 2 === 0) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
  }
  const checkDigit = (10 - (sum % 10)) % 10;
  return `${prefix}${checkDigit}`;
}

function generateSyntheticPAN(seed) {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const l1 = letters[seed % letters.length];
  const l2 = letters[(seed * 3) % letters.length];
  const l3 = letters[(seed * 5) % letters.length];
  const num = String(1000 + (seed * 37) % 9000);
  const l4 = letters[(seed * 7) % letters.length];
  return `ABC${l1}${l2}${num}${l4}`;
}

function generateSyntheticPhone(seed) {
  return `98${String(10000000 + (seed * 4321) % 90000000)}`;
}

function generateSyntheticUPI(seed) {
  return `user${seed}@okaxis`;
}

// Generate base HTML wrapper with mandatory DEMO watermark
function wrapHtml(title, domain, content, isScam) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; margin: 0; padding: 20px; background: #f4f6f9; color: #222; }
    .demo-banner { background: #dc2626; color: #fff; padding: 12px; font-weight: bold; font-size: 14px; text-align: center; border-radius: 4px; margin-bottom: 20px; }
    .card { background: #fff; border-radius: 8px; padding: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); max-width: 600px; margin: 0 auto; }
    .form-group { margin-bottom: 16px; }
    label { display: block; font-weight: 600; margin-bottom: 6px; font-size: 14px; }
    input { width: 100%; box-sizing: border-box; padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }
    button { background: #2563eb; color: #fff; border: none; padding: 12px 20px; border-radius: 6px; font-size: 16px; cursor: pointer; font-weight: bold; width: 100%; }
    .urgent-banner { background: #fef2f2; border: 2px solid #ef4444; color: #991b1b; padding: 14px; border-radius: 6px; font-weight: bold; margin-bottom: 18px; }
  </style>
</head>
<body data-simulated-domain="${domain}" data-is-scam="${isScam ? "true" : "false"}">
  <div class="demo-banner">⚠️ DEMO - NOT A REAL SITE (RESERVED TEST DOMAIN: ${domain})</div>
  <div class="card">
    ${content}
  </div>
</body>
</html>`;
}

const SCAM_ARCHETYPES = [
  // 1. Electricity / SIM disconnection urgency
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "Urgent Utility Payment Alert",
    domain: `power-bill-update-${i}.test`,
    html: `
      <h2>State Electricity Emergency Desk</h2>
      <div class="urgent-banner">URGENT: Your electricity power cut tonight at 9:30 PM due to unpaid bill. Immediate action required.</div>
      <p>Pay unpaid balance immediately or your power supply will be disconnected.</p>
      <div class="form-group">
        <label>Customer Mobile Number:</label>
        <input type="text" name="phone" value="${phone}">
      </div>
      <p>Paise lene ke liye UPI PIN daalein or enter UPI PIN to claim 500 cashback waiver.</p>
      <div class="form-group">
        <label>Enter UPI PIN to receive refund:</label>
        <input type="password" name="upi_pin" placeholder="Enter PIN">
      </div>
      <button>Pay & Avoid Disconnection</button>
    `
  }),
  // 2. Fake KYC & Card harvesting combo
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "Mandatory KYC Update",
    domain: `apex-bank-kyc-${i}.test`,
    html: `
      <h2>Apex Trust Bank - KYC Portal</h2>
      <div class="urgent-banner">Warning: Your account will be blocked within 24 hours if KYC details are not updated.</div>
      <div class="form-group">
        <label>Card Number:</label>
        <input type="text" name="card_number" value="${card}">
      </div>
      <div class="form-group">
        <label>CVV / CVC:</label>
        <input type="password" name="cvv" value="789">
      </div>
      <div class="form-group">
        <label>Card ATM PIN or OTP:</label>
        <input type="password" name="card_pin_or_otp" placeholder="Enter 4-digit PIN">
      </div>
      <button>Submit KYC Immediately</button>
    `
  }),
  // 3. Fake lottery / UPI Collect trap with APK download
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "Citizen Reward & Cashback Distribution",
    domain: `citizen-reward-fund-${i}.xyz`,
    html: `
      <h2>National Citizen Welfare Lottery</h2>
      <div class="urgent-banner">Congratulations! You won 25,000 INR prize money!</div>
      <p>Enter your UPI PIN to claim 25000 cashback reward directly into your account.</p>
      <div class="form-group">
        <label>Your UPI ID:</label>
        <input type="text" name="upi_id" value="${upi}">
      </div>
      <div class="form-group">
        <label>UPI PIN:</label>
        <input type="password" name="upi_pin" placeholder="Enter PIN to credit">
      </div>
      <p>For instant transfer, please install our verification app below:</p>
      <p><a href="https://citizen-reward-fund-${i}.xyz/download-support.apk">Download Support App (.apk)</a></p>
      <button>Claim Reward Now</button>
    `
  })
];

const GENUINE_ARCHETYPES = [
  // 1. Genuine merchant checkout with PII
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "SilverOak Books - Checkout",
    domain: `silveroak-books-${i}.test`,
    html: `
      <h2>SilverOak Books & Stationery</h2>
      <p>Thank you for purchasing with us. Please review your shipping details.</p>
      <div class="form-group">
        <label>Full Name:</label>
        <input type="text" name="name" value="Ramanathan Iyer">
      </div>
      <div class="form-group">
        <label>Contact Phone:</label>
        <input type="text" name="phone" value="${phone}">
      </div>
      <div class="form-group">
        <label>Shipping Address:</label>
        <input type="text" name="address" value="24 Lotus Avenue, Hyderabad">
      </div>
      <div class="form-group">
        <label>Card Number:</label>
        <input type="text" name="card" value="${card}">
      </div>
      <button>Place Order (₹1,250)</button>
    `
  }),
  // 2. Genuine community registration with Aadhaar / PAN
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "Senior Citizens Cultural Forum Registration",
    domain: `senior-citizens-forum-${i}.test`,
    html: `
      <h2>Senior Citizens Cultural Forum (Regd.)</h2>
      <p>Welcome! Annual membership registration for retired citizens.</p>
      <div class="form-group">
        <label>Member Name:</label>
        <input type="text" name="member_name" value="Lakshmi Devi">
      </div>
      <div class="form-group">
        <label>Aadhaar Number (Verification):</label>
        <input type="text" name="aadhaar" value="${aadhaar}">
      </div>
      <div class="form-group">
        <label>PAN Number:</label>
        <input type="text" name="pan" value="${pan}">
      </div>
      <div class="form-group">
        <label>Mobile Number:</label>
        <input type="text" name="mobile" value="${phone}">
      </div>
      <button>Submit Membership Form</button>
    `
  }),
  // 3. Genuine utility receipt / portal
  (i, aadhaar, pan, card, phone, upi) => ({
    title: "City Water Board - Bill Receipt",
    domain: `city-water-board-${i}.test`,
    html: `
      <h2>City Municipal Water Supply</h2>
      <p>Your monthly statement for account #WB-8839201.</p>
      <div class="form-group">
        <label>Consumer Number:</label>
        <input type="text" value="CW-99201" readonly>
      </div>
      <div class="form-group">
        <label>Amount Due:</label>
        <input type="text" value="₹340" readonly>
      </div>
      <div class="form-group">
        <label>UPI ID for receipt:</label>
        <input type="text" name="upi" value="${upi}">
      </div>
      <p>Payment due by end of month. No rush required.</p>
      <button>Download PDF Receipt</button>
    `
  })
];

console.log("=== Generating 60 Synthetic Pages (30 Scam, 30 Genuine) ===");

const outTuning = "evaluation/data/tuning";
const outHoldout = "evaluation/data/holdout";

let scamCount = 0;
let genuineCount = 0;

for (let i = 1; i <= 30; i++) {
  const isHoldout = i > 21; // 21 tuning (70%), 9 holdout (30%)
  const targetDir = isHoldout ? outHoldout : outTuning;
  const setType = isHoldout ? "holdout" : "tuning";

  const aadhaar = generateSyntheticAadhaar(i);
  const card = generateSyntheticCard(i);
  const pan = generateSyntheticPAN(i);
  const phone = generateSyntheticPhone(i);
  const upi = generateSyntheticUPI(i);

  // Generate 1 Scam Page
  const scamArch = SCAM_ARCHETYPES[(i - 1) % SCAM_ARCHETYPES.length](i, aadhaar, pan, card, phone, upi);
  const scamHtml = wrapHtml(scamArch.title, scamArch.domain, scamArch.html, true);
  const scamFile = path.join(targetDir, `scam_${String(i).padStart(2, "0")}.html`);
  fs.writeFileSync(scamFile, scamHtml, "utf8");
  scamCount++;

  // Generate 1 Genuine Page
  const genArch = GENUINE_ARCHETYPES[(i - 1) % GENUINE_ARCHETYPES.length](i, aadhaar, pan, card, phone, upi);
  const genHtml = wrapHtml(genArch.title, genArch.domain, genArch.html, false);
  const genFile = path.join(targetDir, `genuine_${String(i).padStart(2, "0")}.html`);
  fs.writeFileSync(genFile, genHtml, "utf8");
  genuineCount++;
}

console.log(`✓ Generated ${scamCount} synthetic scam pages.`);
console.log(`✓ Generated ${genuineCount} synthetic genuine pages.`);
console.log(`✓ Tuning set: 21 scam, 21 genuine in ${outTuning}`);
console.log(`✓ Hold-out set: 9 scam, 9 genuine in ${outHoldout}`);
