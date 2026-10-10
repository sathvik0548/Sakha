import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CORPUS_DIR = path.join(__dirname, "test_synthetic_corpus");

if (!fs.existsSync(CORPUS_DIR)) {
  fs.mkdirSync(CORPUS_DIR, { recursive: true });
}

// 25 distinct synthetic form structures covering:
// 1. label via "for"
// 2. wrapping labels
// 3. placeholder-only
// 4. aria-label only
// 5. div-based inputs / contenteditable
// 6. multi-step wizard forms
// 7. same-origin iframes
// 8. open shadow DOM
// 9. randomized attribute names and scrambled classes
// 10. English, romanized Hindi, romanized Telugu labels
// 11. Tables, fieldsets, flex containers, modal forms

const templates = [
  // 1. Standard Government Service (for/id)
  {
    name: "page_01_gov_pension_label_for.html",
    title: "Bharat Senior Care Portal (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form id="pension-form">
      <label for="uid_1">Aadhaar Identity Number</label>
      <input type="text" id="uid_1" name="aadhaar_num" placeholder="XXXX XXXX XXXX" />

      <label for="pan_1">Permanent Account Number (PAN)</label>
      <input type="text" id="pan_1" name="pan_card" />

      <label for="acc_1">Bank Account Number</label>
      <input type="text" id="acc_1" name="account_no" />
    </form>`
  },

  // 2. Wrapping labels pattern
  {
    name: "page_02_wrapping_labels_tax.html",
    title: "Kalyan Tax Return Filing (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <label>Aadhaar Card: <input type="text" name="txt_aadhaar" /></label>
      <label>Tax Identification PAN: <input type="text" name="txt_pan" /></label>
      <label>Mobile Number: <input type="tel" name="txt_mobile" /></label>
    </form>`
  },

  // 3. Placeholder-only inputs (modern SaaS style)
  {
    name: "page_03_placeholder_only_vendor.html",
    title: "Gramin Merchant Onboarding (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <div class="form-container">
      <input type="text" placeholder="Enter Aadhaar Number" id="fld_a" />
      <input type="text" placeholder="Enter Bank IFSC Code" id="fld_b" />
      <input type="text" placeholder="Enter Account Number" id="fld_c" />
    </div>`
  },

  // 4. Aria-label only inputs (accessible headless style)
  {
    name: "page_04_aria_labels_banking.html",
    title: "Nagarik Seva Wallet (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <section>
      <input type="text" aria-label="Aadhaar number of applicant" />
      <input type="text" aria-label="PAN card verification" />
      <input type="password" aria-label="UPI MPIN code" />
    </section>`
  },

  // 5. Romanized Hindi Labels
  {
    name: "page_05_romanized_hindi_krishi.html",
    title: "Krishi Sahayata Nidhi (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <label for="h_uid">Aadhaar Sankhya Darj Karein</label>
      <input type="text" id="h_uid" name="aadhaar_sankhya" />

      <label for="h_pan">PAN Card Sankhya</label>
      <input type="text" id="h_pan" name="pan_kramank" />

      <label for="h_phone">Mobile Number Darj Karein</label>
      <input type="tel" id="h_phone" name="chalti_mobile" />
    </form>`
  },

  // 6. Romanized Telugu Labels
  {
    name: "page_06_romanized_telugu_rythu.html",
    title: "Rythu Bandhu Seva Kendra (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <label for="te_aadhaar">Mee Aadhaar Number Vivaralu</label>
      <input type="text" id="te_aadhaar" name="aadhaar_sankhya" />

      <label for="te_bank">Bank Khata Number</label>
      <input type="text" id="te_bank" name="khata_number" />

      <label for="te_ifsc">Bank IFSC Code</label>
      <input type="text" id="te_ifsc" name="ifsc_vivaralu" />
    </form>`
  },

  // 7. Multi-step Wizard Form (Tabbed)
  {
    name: "page_07_wizard_multistep.html",
    title: "Pravasi Registration Step 2 (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <div class="step step-2 active">
      <h3>Step 2: Financial Verification</h3>
      <input type="text" id="wiz_pan" placeholder="PAN Number" autocomplete="off" />
      <input type="text" id="wiz_ifsc" placeholder="Branch IFSC" autocomplete="off" />
      <input type="text" id="wiz_acc" placeholder="Bank Account" autocomplete="off" />
    </div>`
  },

  // 8. Div-based / Table Grid layout
  {
    name: "page_08_grid_table_layout.html",
    title: "Cooperative Society Registry (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <table>
      <tr><td>Aadhaar ID:</td><td><input type="text" name="member_uid" /></td></tr>
      <tr><td>Income Tax PAN:</td><td><input type="text" name="member_pan" /></td></tr>
      <tr><td>Savings Account:</td><td><input type="text" name="member_bank_acc" /></td></tr>
    </table>`
  },

  // 9. Randomized IDs and Obfuscated Classnames (anti-pattern test)
  {
    name: "page_09_randomized_obfuscated_ids.html",
    title: "Modern Portal (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form class="x78_form">
      <input type="text" id="rnd_98231" name="f_98231" placeholder="Aadhaar 12-digit" class="c_892" />
      <input type="text" id="rnd_55120" name="f_55120" placeholder="Permanent Account Number (PAN)" class="c_893" />
      <input type="password" id="rnd_3312" name="f_3312" placeholder="Card CVV" class="c_894" />
    </form>`
  },

  // 10. Open Shadow DOM Custom Element
  {
    name: "page_10_shadow_dom_element.html",
    title: "Web Component Verification (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <div id="host-element"></div>
    <script>
      const host = document.getElementById("host-element");
      const shadow = host.attachShadow({ mode: "open" });
      shadow.innerHTML = \`
        <div class="shadow-inner">
          <label>Aadhaar Identity: <input type="text" id="shadow_aadhaar" name="shadow_aadhaar" /></label>
          <label>IFSC Branch: <input type="text" id="shadow_ifsc" name="shadow_ifsc" /></label>
        </div>
      \`;
    </script>`
  },

  // 11. Same-Origin Iframe Embedding
  {
    name: "page_11_same_origin_iframe.html",
    title: "Parent Portal with Frame (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <iframe id="inner-frame" srcdoc='
      <!DOCTYPE html><html><body>
        <form>
          <input type="text" placeholder="Aadhaar Number" name="frame_aadhaar" />
          <input type="text" placeholder="PAN Card" name="frame_pan" />
        </form>
      </body></html>
    '></iframe>`
  },

  // 12. Pre-filled Validated Synthetic Values
  {
    name: "page_12_prefilled_valid_checksums.html",
    title: "Profile Review (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" id="v_uid" value="5489 1234 5674" />
      <input type="text" id="v_pan" value="ABCDE1234F" />
      <input type="text" id="v_ifsc" value="HDFC0001234" />
    </form>`
  },

  // 13. High-Density Mixed Application
  {
    name: "page_13_high_density_application.html",
    title: "Scholarship Disbursement (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" name="student_name" placeholder="Full Legal Name" />
      <input type="text" name="student_aadhaar" placeholder="12-digit Aadhaar" />
      <input type="text" name="parent_pan" placeholder="Parent PAN Card" />
      <input type="text" name="bank_account_number" placeholder="Savings Account" />
      <input type="text" name="branch_ifsc" placeholder="IFSC Code" />
      <input type="tel" name="student_phone" placeholder="Mobile Number" />
    </form>`
  },

  // 14. UPI Collect / Cashback Demo (Scam scenario)
  {
    name: "page_14_upi_reward_claim.html",
    title: "Rewards Claim (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <div>Enter UPI PIN to receive money cashback reward of Rs 5000</div>
    <form>
      <input type="password" name="upi_pin" placeholder="Enter UPI PIN" />
    </form>`
  },

  // 15. Electricity Bill Intimidation (Caution scenario)
  {
    name: "page_15_electricity_urgency_threat.html",
    title: "Power Support Desk (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <p>Dear consumer your electricity power cut tonight unless bill paid immediately.</p>
    <form>
      <input type="text" name="consumer_id" placeholder="Consumer Number" />
      <input type="text" name="card_number" placeholder="Card Number" />
    </form>`
  },

  // 16. SIM Card Intimidation Romanized Telugu
  {
    name: "page_16_telugu_sim_threat.html",
    title: "Telecom Portal (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <p>Mee SIM card block avuthundi ventane cheyandi KYC update.</p>
    <form>
      <input type="text" name="te_phone" placeholder="Mobile Number" />
      <input type="text" name="te_aadhaar" placeholder="Aadhaar" />
    </form>`
  },

  // 17. Remote Desktop AnyDesk Scam (Caution scenario)
  {
    name: "page_17_anydesk_remote_download.html",
    title: "Quick Support Desk (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <p>Please install AnyDesk for our KYC agent to verify your bank account.</p>
    <a href="https://example.test/download.apk">Download APK</a>`
  },

  // 18. Genuine E-Commerce Checkout (Allowlisted structure)
  {
    name: "page_18_genuine_store_checkout.html",
    title: "Swadeshi Handicrafts (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" name="shipping_address" placeholder="Delivery Address" />
      <input type="text" name="shipping_city" placeholder="City" />
      <input type="text" name="shipping_pincode" placeholder="Postal Code" />
    </form>`
  },

  // 19. Plain News Article (Zero inputs)
  {
    name: "page_19_plain_news_article.html",
    title: "Vigyan Weekly Science Digest (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <article>
      <h1>Solar Observation Missions in 2026</h1>
      <p>Scientific payloads continue to record data from orbit across geomagnetic cycles.</p>
    </article>`
  },

  // 20. Hospital Doctor Appointment Booking
  {
    name: "page_20_hospital_appointment.html",
    title: "Arogya Clinic (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" name="patient_name" placeholder="Patient Name" />
      <input type="date" name="appointment_date" />
      <input type="tel" name="patient_contact_phone" placeholder="Phone Number" />
    </form>`
  },

  // 21. Senior Citizen Pension Registration
  {
    name: "page_21_pension_registration_deep.html",
    title: "Senior Pension Scheme (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <fieldset>
      <legend>Applicant Credentials</legend>
      <label for="fld_aadh">Aadhaar Card Number:</label>
      <input type="text" id="fld_aadh" name="aadhaar_num" />
      
      <label for="fld_panno">PAN Card Identification:</label>
      <input type="text" id="fld_panno" name="pan_num" />
    </fieldset>`
  },

  // 22. Card Payment Harvest Combo (Danger scenario)
  {
    name: "page_22_credential_harvest_combo.html",
    title: "Secure Payment Gateway (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" name="card_number" placeholder="16-digit Card Number" />
      <input type="password" name="cvv" placeholder="CVV" />
      <input type="password" name="card_pin_or_otp" placeholder="ATM PIN / OTP" />
    </form>`
  },

  // 23. UPI ID VPA Field Form
  {
    name: "page_23_upi_vpa_entry.html",
    title: "Direct UPI Payout (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <label for="upi_vpa">Enter Your Virtual Payment Address (UPI ID):</label>
      <input type="text" id="upi_vpa" name="user_upi_id" placeholder="username@bank" />
    </form>`
  },

  // 24. Multi-language Bilingual Labels
  {
    name: "page_24_bilingual_labels.html",
    title: "Jan Seva Kendra (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <label>Aadhaar / ఆధార్ నంబర్: <input type="text" name="bilingual_uid" /></label>
      <label>PAN Card / పాన్ కార్డు: <input type="text" name="bilingual_pan" /></label>
    </form>`
  },

  // 25. Complete Financial Profile
  {
    name: "page_25_complete_financial_profile.html",
    title: "Vyapar Credit Portal (DEMO - NOT A REAL SITE)",
    body: `
    <div class="demo-banner">DEMO - NOT A REAL SITE</div>
    <form>
      <input type="text" id="fin_aadhaar" placeholder="Applicant Aadhaar" />
      <input type="text" id="fin_pan" placeholder="Business PAN" />
      <input type="text" id="fin_acc" placeholder="Current Account Number" />
      <input type="text" id="fin_ifsc" placeholder="Branch IFSC Code" />
      <input type="tel" id="fin_phone" placeholder="Primary Mobile" />
    </form>`
  }
];

templates.forEach((tmpl, i) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${tmpl.title}</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .demo-banner { background: #fef08a; padding: 8px; font-weight: bold; margin-bottom: 12px; }
    input { display: block; margin-bottom: 8px; padding: 6px; width: 280px; }
  </style>
</head>
<body>
  ${tmpl.body}
</body>
</html>`;

  fs.writeFileSync(path.join(CORPUS_DIR, tmpl.name), html, "utf8");
});

console.log(`✓ Generated ${templates.length} synthetic test pages in ${CORPUS_DIR}`);
