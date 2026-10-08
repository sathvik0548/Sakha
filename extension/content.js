// src/i18n.js
var STRINGS = {
  en: {
    app_name: "Sakha",
    app_subtitle: "Your Digital Safety Companion",
    warning_danger_title: "DANGER: Potential Scam Detected",
    warning_caution_title: "CAUTION: Suspicious Page Activity",
    warning_safe_title: "Page Appears Safe",
    rule_fake_domain: "This website name looks like a fake version of an official bank or government site.",
    rule_pin_to_receive: "Warning: You NEVER need to enter your UPI PIN to receive money.",
    rule_sensitive_combo: "Danger: This unofficial site is asking for your card number, CVV, and OTP/PIN together.",
    rule_urgency_threat: "This page is using urgent or threatening words (like account blocked, SIM deactivated) to rush you.",
    rule_apk_download: "Warning: This page is asking to download an unknown app (.apk or remote access app).",
    masked_badge: "Hidden for your protection",
    tap_to_reveal: "Tap once to see",
    tap_to_hide: "Tap to hide",
    btn_understand_leave: "Leave this page (Recommended)",
    btn_proceed_anyway: "I understand, continue anyway",
    btn_explain: "What is this page asking me?",
    consent_title: "Welcome to Sakha: Your Digital Safety Companion",
    consent_body: "Sakha stays completely on your device. Your Aadhaar, cards, and personal details are never sent to any server.",
    consent_agree: "I Agree & Start Protection",
    loading_explanation: "Analyzing what this page is asking safely...",
    explain_error: "Could not explain this page at this time.",
    explain_offline: "Explain is offline. The optional explain feature needs the local Sakha server running (see README). No content was generated.",
    explain_safe_summary: "Page Summary:"
  },
  te: {
    app_name: "\u0C38\u0C16 (Sakha)",
    app_subtitle: "\u0C2E\u0C40 \u0C21\u0C3F\u0C1C\u0C3F\u0C1F\u0C32\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C3E \u0C38\u0C39\u0C3E\u0C2F\u0C15\u0C41\u0C21\u0C41",
    warning_danger_title: "\u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02: \u0C2E\u0C4B\u0C38\u0C2A\u0C42\u0C30\u0C3F\u0C24 \u0C38\u0C48\u0C1F\u0C4D \u0C15\u0C3E\u0C35\u0C1A\u0C4D\u0C1A\u0C41",
    warning_caution_title: "\u0C1C\u0C3E\u0C17\u0C4D\u0C30\u0C24\u0C4D\u0C24: \u0C05\u0C28\u0C41\u0C2E\u0C3E\u0C28\u0C3E\u0C38\u0C4D\u0C2A\u0C26 \u0C2A\u0C47\u0C1C\u0C40",
    warning_safe_title: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F",
    rule_fake_domain: "\u0C08 \u0C35\u0C46\u0C2C\u0C4D\u200C\u0C38\u0C48\u0C1F\u0C4D \u0C2A\u0C47\u0C30\u0C41 \u0C05\u0C38\u0C32\u0C48\u0C28 \u0C2C\u0C4D\u0C2F\u0C3E\u0C02\u0C15\u0C4D \u0C32\u0C47\u0C26\u0C3E \u0C2A\u0C4D\u0C30\u0C2D\u0C41\u0C24\u0C4D\u0C35 \u0C38\u0C48\u0C1F\u0C4D\u200C\u0C32\u0C3E \u0C15\u0C28\u0C3F\u0C2A\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28 \u0C28\u0C15\u0C3F\u0C32\u0C40 \u0C38\u0C48\u0C1F\u0C4D \u0C15\u0C3E\u0C35\u0C1A\u0C4D\u0C1A\u0C41.",
    rule_pin_to_receive: "\u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15: \u0C21\u0C2C\u0C4D\u0C2C\u0C41\u0C32\u0C41 \u0C05\u0C02\u0C26\u0C41\u0C15\u0C4B\u0C35\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C40\u0C30\u0C41 \u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C42 UPI \u0C2A\u0C3F\u0C28\u0C4D (PIN) \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C35\u0C32\u0C38\u0C3F\u0C28 \u0C05\u0C35\u0C38\u0C30\u0C02 \u0C32\u0C47\u0C26\u0C41.",
    rule_sensitive_combo: "\u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C02: \u0C08 \u0C05\u0C28\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F\u0C15 \u0C38\u0C48\u0C1F\u0C4D \u0C2E\u0C40 \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D, CVV \u0C2E\u0C30\u0C3F\u0C2F\u0C41 OTP \u0C12\u0C15\u0C47\u0C38\u0C3E\u0C30\u0C3F \u0C05\u0C21\u0C41\u0C17\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F.",
    rule_urgency_threat: "\u0C2E\u0C40 \u0C16\u0C3E\u0C24\u0C3E \u0C28\u0C3F\u0C32\u0C3F\u0C2A\u0C3F\u0C35\u0C47\u0C2F\u0C2C\u0C21\u0C41\u0C24\u0C41\u0C02\u0C26\u0C28\u0C3F \u0C32\u0C47\u0C26\u0C3E \u0C38\u0C3F\u0C2E\u0C4D \u0C30\u0C26\u0C4D\u0C26\u0C35\u0C41\u0C24\u0C41\u0C02\u0C26\u0C28\u0C3F \u0C2C\u0C46\u0C26\u0C3F\u0C30\u0C3F\u0C02\u0C1A\u0C3F \u0C2E\u0C3F\u0C2E\u0C4D\u0C2E\u0C32\u0C4D\u0C28\u0C3F \u0C24\u0C4A\u0C02\u0C26\u0C30\u0C2A\u0C46\u0C21\u0C41\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C41.",
    rule_apk_download: "\u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15: \u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C2A\u0C4D\u0C30\u0C2E\u0C3E\u0C26\u0C15\u0C30\u0C2E\u0C48\u0C28 \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C2F\u0C3E\u0C2A\u0C4D\u200C\u0C28\u0C41 (APK) \u0C21\u0C4C\u0C28\u0C4D\u200C\u0C32\u0C4B\u0C21\u0C4D \u0C1A\u0C47\u0C38\u0C41\u0C15\u0C4B\u0C2E\u0C28\u0C3F \u0C1A\u0C46\u0C2C\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F.",
    masked_badge: "\u0C2E\u0C40 \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C4B\u0C38\u0C02 \u0C26\u0C3E\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
    tap_to_reveal: "\u0C1A\u0C42\u0C21\u0C1F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C15\u0C02\u0C21\u0C3F",
    tap_to_hide: "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C26\u0C3E\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C15\u0C02\u0C21\u0C3F",
    btn_understand_leave: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C35\u0C46\u0C33\u0C4D\u0C33\u0C3F\u0C2A\u0C4B\u0C02\u0C21\u0C3F (\u0C38\u0C3F\u0C2B\u0C3E\u0C30\u0C4D\u0C38\u0C41 \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F)",
    btn_proceed_anyway: "\u0C28\u0C3E\u0C15\u0C41 \u0C05\u0C30\u0C4D\u0C25\u0C2E\u0C48\u0C02\u0C26\u0C3F, \u0C05\u0C2F\u0C3F\u0C28\u0C3E \u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    btn_explain: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C28\u0C28\u0C4D\u0C28\u0C41 \u0C0F\u0C2E\u0C3F \u0C05\u0C21\u0C41\u0C17\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F?",
    consent_title: "\u0C38\u0C16 (Sakha) \u0C15\u0C41 \u0C38\u0C4D\u0C35\u0C3E\u0C17\u0C24\u0C02: \u0C2E\u0C40 \u0C21\u0C3F\u0C1C\u0C3F\u0C1F\u0C32\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C3E \u0C38\u0C39\u0C3E\u0C2F\u0C15\u0C41\u0C21\u0C41",
    consent_body: "\u0C38\u0C16 \u0C2E\u0C40 \u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C02\u0C32\u0C4B\u0C28\u0C47 \u0C2A\u0C28\u0C3F\u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F. \u0C2E\u0C40 \u0C06\u0C27\u0C3E\u0C30\u0C4D, \u0C2C\u0C4D\u0C2F\u0C3E\u0C02\u0C15\u0C4D \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C0F \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D\u200C\u0C15\u0C41 \u0C2A\u0C02\u0C2A\u0C2C\u0C21\u0C35\u0C41.",
    consent_agree: "\u0C28\u0C47\u0C28\u0C41 \u0C05\u0C02\u0C17\u0C40\u0C15\u0C30\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C28\u0C41 - \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    loading_explanation: "\u0C2A\u0C47\u0C1C\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C28\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C2A\u0C30\u0C3F\u0C36\u0C40\u0C32\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C2E\u0C41...",
    explain_error: "\u0C2A\u0C4D\u0C30\u0C38\u0C4D\u0C24\u0C41\u0C24\u0C02 \u0C08 \u0C2A\u0C47\u0C1C\u0C40\u0C28\u0C3F \u0C35\u0C3F\u0C35\u0C30\u0C3F\u0C02\u0C1A\u0C21\u0C02 \u0C38\u0C3E\u0C27\u0C4D\u0C2F\u0C02 \u0C15\u0C3E\u0C32\u0C47\u0C26\u0C41.",
    explain_offline: "\u0C35\u0C3F\u0C35\u0C30\u0C23 \u0C06\u0C2B\u0C4D\u200C\u0C32\u0C48\u0C28\u0C4D\u200C\u0C32\u0C4B \u0C09\u0C02\u0C26\u0C3F. \u0C08 \u0C38\u0C47\u0C35 \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C3F\u0C15 Sakha \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D\u200C\u0C2A\u0C48 \u0C06\u0C27\u0C3E\u0C30\u0C2A\u0C21\u0C41\u0C24\u0C41\u0C02\u0C26\u0C3F (README \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F). \u0C0E\u0C1F\u0C41\u0C35\u0C02\u0C1F\u0C3F \u0C38\u0C2E\u0C3E\u0C27\u0C3E\u0C28\u0C02 \u0C30\u0C42\u0C2A\u0C4A\u0C02\u0C26\u0C3F\u0C02\u0C1A\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41.",
    explain_safe_summary: "\u0C2A\u0C47\u0C1C\u0C40 \u0C38\u0C3E\u0C30\u0C3E\u0C02\u0C36\u0C02:"
  },
  hi: {
    app_name: "\u0938\u0916\u093E (Sakha)",
    app_subtitle: "\u0906\u092A\u0915\u093E \u0921\u093F\u091C\u093F\u091F\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0938\u093E\u0925\u0940",
    warning_danger_title: "\u0916\u0924\u0930\u093E: \u092F\u0939 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u0927\u094B\u0916\u093E\u0927\u0921\u093C\u0940 \u0939\u094B \u0938\u0915\u0924\u0940 \u0939\u0948",
    warning_caution_title: "\u0938\u093E\u0935\u0927\u093E\u0928\u0940: \u0938\u0902\u0926\u093F\u0917\u094D\u0927 \u0917\u0924\u093F\u0935\u093F\u0927\u093F",
    warning_safe_title: "\u092F\u0939 \u092A\u0947\u091C \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u092A\u094D\u0930\u0924\u0940\u0924 \u0939\u094B\u0924\u093E \u0939\u0948",
    rule_fake_domain: "\u092F\u0939 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u0915\u093F\u0938\u0940 \u092C\u0948\u0902\u0915 \u092F\u093E \u0938\u0930\u0915\u093E\u0930\u0940 \u092A\u094B\u0930\u094D\u091F\u0932 \u0915\u093E \u0928\u0915\u0932\u0940 \u0930\u0942\u092A \u0932\u0917\u0924\u0940 \u0939\u0948\u0964",
    rule_pin_to_receive: "\u091A\u0947\u0924\u093E\u0935\u0928\u0940: \u092A\u0948\u0938\u0947 \u092A\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u092D\u0940 \u092D\u0940 \u092F\u0942\u092A\u0940\u0906\u0908 \u092A\u093F\u0928 (PIN) \u0926\u0930\u094D\u091C \u0915\u0930\u0928\u0947 \u0915\u0940 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u0940\u0964",
    rule_sensitive_combo: "\u0916\u0924\u0930\u093E: \u092F\u0939 \u0905\u0928\u0927\u093F\u0915\u0943\u0924 \u0938\u093E\u0907\u091F \u0906\u092A\u0915\u0947 \u0915\u093E\u0930\u094D\u0921 \u0928\u0902\u092C\u0930, \u0938\u0940\u0935\u0940\u0935\u0940 \u0914\u0930 \u0913\u091F\u0940\u092A\u0940 \u0915\u094B \u090F\u0915 \u0938\u093E\u0925 \u092E\u093E\u0902\u0917 \u0930\u0939\u0940 \u0939\u0948\u0964",
    rule_urgency_threat: "\u092F\u0939 \u092A\u0947\u091C \u0906\u092A\u0915\u094B \u0921\u0930\u093E\u0928\u0947 \u092F\u093E \u091C\u0932\u094D\u0926\u092C\u093E\u091C\u0940 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0915\u094B\u0936\u093F\u0936 \u0915\u0930 \u0930\u0939\u093E \u0939\u0948 (\u0916\u093E\u0924\u093E \u092C\u0902\u0926 \u0939\u094B\u0928\u0947 \u0915\u0940 \u0927\u092E\u0915\u0940)\u0964",
    rule_apk_download: "\u091A\u0947\u0924\u093E\u0935\u0928\u0940: \u092F\u0939 \u092A\u0947\u091C \u0905\u091C\u094D\u091E\u093E\u0924 \u0910\u092A \u092F\u093E \u0930\u093F\u092E\u094B\u091F \u0910\u092A \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u0939 \u0930\u0939\u093E \u0939\u0948\u0964",
    masked_badge: "\u0906\u092A\u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0947 \u0932\u093F\u090F \u091B\u093F\u092A\u093E\u092F\u093E \u0917\u092F\u093E",
    tap_to_reveal: "\u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902",
    tap_to_hide: "\u091B\u093F\u092A\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902",
    btn_understand_leave: "\u0907\u0938 \u092A\u0947\u091C \u0938\u0947 \u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0947\u0902 (\u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924)",
    btn_proceed_anyway: "\u092E\u0941\u091D\u0947 \u0938\u092E\u091D \u0906\u092F\u093E, \u092B\u093F\u0930 \u092D\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
    btn_explain: "\u092F\u0939 \u092A\u0947\u091C \u092E\u0941\u091D\u0938\u0947 \u0915\u094D\u092F\u093E \u092E\u093E\u0902\u0917 \u0930\u0939\u093E \u0939\u0948?",
    consent_title: "\u0938\u0916\u093E \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948: \u0906\u092A\u0915\u093E \u0921\u093F\u091C\u093F\u091F\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0938\u093E\u0925\u0940",
    consent_body: "\u0938\u0916\u093E \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0906\u092A\u0915\u0947 \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930 \u0939\u0940 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948\u0964 \u0906\u092A\u0915\u093E \u0906\u0927\u093E\u0930, \u0915\u093E\u0930\u094D\u0921 \u0935\u093F\u0935\u0930\u0923 \u0915\u092D\u0940 \u0915\u093F\u0938\u0940 \u0938\u0930\u094D\u0935\u0930 \u092A\u0930 \u0928\u0939\u0940\u0902 \u092D\u0947\u091C\u0947 \u091C\u093E\u0924\u0947\u0964",
    consent_agree: "\u092E\u0948\u0902 \u0938\u0939\u092E\u0924 \u0939\u0942\u0901 - \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902",
    loading_explanation: "\u092A\u0947\u091C \u0915\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u093F\u092F\u093E \u091C\u093E \u0930\u0939\u093E \u0939\u0948...",
    explain_error: "\u0907\u0938 \u0938\u092E\u092F \u092A\u0947\u091C \u0915\u0940 \u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u0928\u0939\u0940\u0902 \u0915\u0940 \u091C\u093E \u0938\u0915\u0940\u0964",
    explain_offline: "\u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u0938\u0947\u0935\u093E \u0911\u092B\u0932\u093E\u0907\u0928 \u0939\u0948\u0964 \u092F\u0939 \u0938\u0941\u0935\u093F\u0927\u093E \u0938\u094D\u0925\u093E\u0928\u0940\u092F Sakha \u0938\u0930\u094D\u0935\u0930 \u092A\u0930 \u0928\u093F\u0930\u094D\u092D\u0930 \u0915\u0930\u0924\u0940 \u0939\u0948 (README \u0926\u0947\u0916\u0947\u0902)\u0964 \u0915\u094B\u0908 \u0909\u0924\u094D\u0924\u0930 \u0928\u0939\u0940\u0902 \u092C\u0928\u093E\u092F\u093E \u0917\u092F\u093E\u0964",
    explain_safe_summary: "\u092A\u0947\u091C \u0938\u093E\u0930\u093E\u0902\u0936:"
  }
};
function t(key, lang = "en") {
  const dict = STRINGS[lang] || STRINGS.en;
  return dict[key] || STRINGS.en[key] || key;
}

// src/scamDetector.js
var OFFICIAL_ALLOWLIST = [
  "sbi.co.in",
  "onlinesbi.sbi",
  "hdfcbank.com",
  "icicibank.com",
  "axisbank.com",
  "punjabnationalbank.in",
  "bankofbaroda.in",
  "canarabank.com",
  "kotak.com",
  "indusind.com",
  "unionbankofindia.co.in",
  "npci.org.in",
  "bhimupi.org.in",
  "paytm.com",
  "phonepe.com",
  "google.com",
  "uidai.gov.in",
  "incometax.gov.in",
  "epfindia.gov.in",
  "passportindia.gov.in",
  "parivahan.gov.in",
  "digilocker.gov.in",
  "india.gov.in",
  "ceir.gov.in",
  "cybercrime.gov.in",
  "sancharsaathi.gov.in",
  "pmkisan.gov.in"
];
var HOMOGLYPH_MAP = {
  "\u0430": "a",
  "\u0441": "c",
  "\u0435": "e",
  "\u043E": "o",
  "\u0440": "p",
  "\u0455": "s",
  "\u0445": "x",
  "\u0443": "y",
  "\u0456": "i",
  "\u0458": "j",
  "\u0501": "d",
  "\u051B": "q",
  "\u051D": "w",
  "0": "o",
  "1": "l"
};
var SUSPICIOUS_TLDS = [
  ".tk",
  ".ml",
  ".ga",
  ".cf",
  ".gq",
  ".top",
  ".xyz",
  ".club",
  ".work",
  ".buzz",
  ".cam",
  ".rest",
  ".fit"
];
var REMOTE_ACCESS_APPS = [
  "anydesk",
  "quicksupport",
  "teamviewer",
  "rustdesk",
  "airdroid",
  "zoho assist"
];
function levenshteinDistance(a, b) {
  if (a.length === 0)
    return b.length;
  if (b.length === 0)
    return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++)
    matrix[i] = [i];
  for (let j = 0; j <= a.length; j++)
    matrix[0][j] = j;
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          // substitution
          matrix[i][j - 1] + 1,
          // insertion
          matrix[i - 1][j] + 1
          // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}
function normalizeHomoglyphs(domain) {
  let normalized = "";
  for (const char of domain.toLowerCase()) {
    normalized += HOMOGLYPH_MAP[char] || char;
  }
  return normalized;
}
function extractHostname(urlOrDomain) {
  if (!urlOrDomain)
    return "";
  let str = urlOrDomain.trim().toLowerCase();
  str = str.replace(/^[a-z]+:\/\//, "");
  str = str.split("/")[0].split("?")[0].split("#")[0];
  str = str.split(":")[0];
  return str;
}
function isAllowlistedDomain(hostname, allowlist = OFFICIAL_ALLOWLIST) {
  const clean = extractHostname(hostname);
  return allowlist.some((official) => {
    return clean === official || clean.endsWith("." + official);
  });
}
function checkLookalikeDomain(hostname, allowlist = OFFICIAL_ALLOWLIST) {
  const clean = extractHostname(hostname);
  if (!clean || isAllowlistedDomain(clean, allowlist)) {
    return { isLookalike: false };
  }
  if (clean.includes("xn--")) {
    return {
      isLookalike: true,
      reason: `Punycode domain detected (${clean}) mimicking internationalized script.`
    };
  }
  const normalized = normalizeHomoglyphs(clean);
  for (const official of allowlist) {
    const officialBase = official.replace(/\.(co\.in|gov\.in|org\.in|com|in|sbi)$/, "");
    if (clean.includes(official) && !clean.endsWith("." + official)) {
      return {
        isLookalike: true,
        target: official,
        reason: `Deceptive domain: contains '${official}' but registered under untrusted parent domain.`
      };
    }
    const cleanBase = clean.split(".")[0];
    const targetBase = official.split(".")[0];
    if (cleanBase.length >= 3 && targetBase.length >= 3) {
      const dist = levenshteinDistance(cleanBase, targetBase);
      if (dist > 0 && dist <= 2 && Math.abs(cleanBase.length - targetBase.length) <= 2) {
        return {
          isLookalike: true,
          target: official,
          reason: `Typosquatting detected: '${clean}' is strikingly close to official '${official}' (edit distance ${dist}).`
        };
      }
    }
    if (normalized.includes(targetBase) && !clean.includes(targetBase)) {
      return {
        isLookalike: true,
        target: official,
        reason: `Homoglyph character substitution detected mimicking '${official}'.`
      };
    }
  }
  const isSuspiciousTLD = SUSPICIOUS_TLDS.some((tld) => clean.endsWith(tld));
  const hasFinanceKeyword = /(bank|sbi|hdfc|icici|aadhaar|pan|kyc|tax|upi|payout|lottery|reward)/i.test(clean);
  if (isSuspiciousTLD && hasFinanceKeyword) {
    return {
      isLookalike: true,
      target: "financial/identity portal",
      reason: `Financial keyword on high-risk TLD (${clean}).`
    };
  }
  return { isLookalike: false };
}
function checkUrgencyAndThreats(text) {
  if (!text)
    return { detected: false, matches: [] };
  const lower = text.toLowerCase();
  const URGENCY_PATTERNS = [
    // English
    /\b(account (will be |is )?blocked|suspended within|deactivated within|electricity (power )?cut|sim (card )?deactivation|kyc pending|kyc expires?|immediate action required|last 24 hours|legal action|police complaint|arrest warrant)\b/i,
    // Romanized Hindi
    /\b(khata band ho jayega|bijli kat jayegi|sim band ho jayegi|turant karein|police case|aadhaar link nahi kiya to)\b/i,
    // Romanized Telugu
    /\b(account block avuthundi|current cut avuthundi|sim card block|ventane cheyandi|lekapothe raddhu)\b/i
  ];
  const matches = [];
  for (const pattern of URGENCY_PATTERNS) {
    const match = lower.match(pattern);
    if (match)
      matches.push(match[0]);
  }
  return {
    detected: matches.length > 0,
    matches
  };
}
function checkUPITraps(text) {
  if (!text)
    return { detected: false };
  const lower = text.toLowerCase();
  const UPI_PATTERNS = [
    // English
    /(enter|type|submit)\s+(your\s+)?(upi\s+)?pin\s+to\s+(receive|claim|get|win|accept)\s+(\S+\s+)?(money|cash|cashback|refund|reward|prize)/i,
    /(receive|claim|accept)\s+(\S+\s+)?(money|cashback|reward|refund).*(enter|type)\s+(upi\s+)?pin/i,
    /enter\s+pin\s+for\s+credit/i,
    // Romanized Hindi
    /paise?\s+(pane|lene)\s+ke\s+liye\s+(upi\s+)?pin\s+(dale|daale|enter)/i,
    // Romanized Telugu
    /dabbu(lu)?\s+(ravadaniki|pondadaniki)\s+(upi\s+)?pin\s+enter\s+cheyandi/i
  ];
  for (const pattern of UPI_PATTERNS) {
    if (pattern.test(lower)) {
      return { detected: true };
    }
  }
  return { detected: false };
}
function checkSensitiveFieldCombo(inputs = [], isAllowlisted = false) {
  if (isAllowlisted)
    return { detected: false };
  let hasCard = false;
  let hasCVV = false;
  let hasPINorOTP = false;
  for (const input of inputs) {
    const combined = `${input.name || ""} ${input.id || ""} ${input.placeholder || ""} ${input.label || ""} ${input.type || ""}`.toLowerCase();
    if (/(card.*num|pan_number|debit.*card|credit.*card|16.*digit)/i.test(combined)) {
      hasCard = true;
    }
    if (/(cvv|cvc|security.*code|card.*verif)/i.test(combined)) {
      hasCVV = true;
    }
    if (/(otp|one.*time.*password|atm.*pin|card.*pin|mpin)/i.test(combined)) {
      hasPINorOTP = true;
    }
  }
  if (hasCard && hasCVV && hasPINorOTP) {
    return { detected: true };
  }
  return { detected: false };
}
function checkMaliciousAppDownloads(text, linkHrefs = []) {
  const lower = (text || "").toLowerCase();
  for (const app of REMOTE_ACCESS_APPS) {
    if (lower.includes(app)) {
      return {
        detected: true,
        reason: `Page advises installing remote access tool (${app}).`
      };
    }
  }
  for (const href of linkHrefs) {
    const h = (href || "").toLowerCase();
    if (h.endsWith(".apk") || h.includes(".apk?")) {
      return {
        detected: true,
        reason: "Page contains direct download link for an Android application (.apk)."
      };
    }
  }
  return { detected: false };
}
function evaluatePageSafety(pageContext) {
  const { url = "", pageText = "", inputs = [], links = [] } = pageContext;
  const hostname = extractHostname(url);
  const isAllowlisted = isAllowlistedDomain(hostname);
  const rulesTriggered = [];
  let highestLevel = "safe";
  let primaryKey = "warning_safe_title";
  const lookalike = checkLookalikeDomain(hostname);
  if (lookalike.isLookalike) {
    highestLevel = "danger";
    rulesTriggered.push("LOOKALIKE_DOMAIN");
    primaryKey = "rule_fake_domain";
  }
  const upiTrap = checkUPITraps(pageText);
  if (upiTrap.detected) {
    highestLevel = "danger";
    rulesTriggered.push("UPI_PIN_RECEIVE_TRAP");
    primaryKey = "rule_pin_to_receive";
  }
  const sensitiveCombo = checkSensitiveFieldCombo(inputs, isAllowlisted);
  if (sensitiveCombo.detected) {
    highestLevel = "danger";
    rulesTriggered.push("SENSITIVE_CREDENTIAL_COMBO");
    primaryKey = "rule_sensitive_combo";
  }
  const appDownload = checkMaliciousAppDownloads(pageText, links);
  if (appDownload.detected) {
    if (highestLevel !== "danger")
      highestLevel = "caution";
    rulesTriggered.push("MALICIOUS_APP_DOWNLOAD");
    if (primaryKey === "warning_safe_title")
      primaryKey = "rule_apk_download";
  }
  const urgency = checkUrgencyAndThreats(pageText);
  if (urgency.detected) {
    if (highestLevel !== "danger")
      highestLevel = "caution";
    rulesTriggered.push("URGENCY_THREAT_LANGUAGE");
    if (primaryKey === "warning_safe_title")
      primaryKey = "rule_urgency_threat";
  }
  return {
    level: highestLevel,
    rulesTriggered,
    reasonEn: t(primaryKey, "en"),
    reasonTe: t(primaryKey, "te"),
    reasonHi: t(primaryKey, "hi"),
    hostname,
    isAllowlisted
  };
}

// src/pii.js
var PII_TYPE = Object.freeze({
  PASSWORD: "PASSWORD",
  EMAIL: "EMAIL",
  PHONE: "PHONE",
  CARD: "CARD",
  FACE: "FACE",
  NAME: "NAME",
  AADHAAR: "AADHAAR",
  PAN: "PAN",
  GSTIN: "GSTIN",
  IFSC: "IFSC",
  INDIAN_MOBILE: "INDIAN_MOBILE",
  OTHER_PII: "OTHER_PII"
});
var VERHOEFF_D = [
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
var VERHOEFF_P = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
  [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
  [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
  [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
  [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
  [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
  [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
];
function verhoeffCheck(raw) {
  if (typeof raw !== "string")
    return false;
  const digits = raw.replace(/\D/g, "");
  if (!digits)
    return false;
  let c = 0;
  const reversed = digits.split("").reverse().map(Number);
  for (let i = 0; i < reversed.length; i++) {
    c = VERHOEFF_D[c][VERHOEFF_P[i % 8][reversed[i]]];
  }
  return c === 0;
}
function validatePAN(raw) {
  if (typeof raw !== "string")
    return false;
  const cleaned = raw.trim().toUpperCase();
  if (cleaned.length !== 10)
    return false;
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(cleaned);
}
function validateIFSC(raw) {
  if (typeof raw !== "string")
    return false;
  const cleaned = raw.trim().toUpperCase();
  if (cleaned.length !== 11)
    return false;
  return /^[A-Z]{4}0[A-Z0-9]{6}$/.test(cleaned);
}

// src/maskEngine.js
function luhnCheck(raw) {
  const digits = raw.replace(/\D/g, "").split("").reverse().map(Number);
  if (digits.length < 13 || digits.length > 19)
    return false;
  const sum = digits.reduce((acc, d, i) => {
    if (i % 2 === 1) {
      d *= 2;
      if (d > 9)
        d -= 9;
    }
    return acc + d;
  }, 0);
  return sum % 10 === 0;
}
function identifySensitiveSpans(text) {
  if (!text || typeof text !== "string")
    return [];
  const spans = [];
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
  const cardRegex = /\b(\d{4}[\s\-]?\d{4}[\s\-]?\d{4}[\s\-]?\d{1,7})\b/g;
  while ((m = cardRegex.exec(text)) !== null) {
    const raw = m[1];
    const clean = raw.replace(/[\s\-]/g, "");
    if (luhnCheck(clean)) {
      const overlaps = spans.some((s) => s.start <= m.index && s.end >= m.index + raw.length);
      if (!overlaps) {
        spans.push({
          type: "CARD",
          raw,
          masked: "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 " + clean.slice(-4),
          start: m.index,
          end: m.index + raw.length
        });
      }
    }
  }
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
  const ifscRegex = /\b([A-Z]{4}0[A-Z0-9]{6})\b/gi;
  while ((m = ifscRegex.exec(text)) !== null) {
    const raw = m[1];
    if (validateIFSC(raw)) {
      spans.push({
        type: "IFSC",
        raw,
        masked: raw.slice(0, 4) + "0\u2022\u2022\u2022\u2022\u2022\u2022",
        start: m.index,
        end: m.index + raw.length
      });
    }
  }
  const upiRegex = /\b([a-zA-Z0-9.\-_]{2,64}@[a-zA-Z]{2,32})\b/g;
  while ((m = upiRegex.exec(text)) !== null) {
    const raw = m[1];
    if (!raw.endsWith("@gmail.com") && !raw.endsWith("@yahoo.com") && !raw.endsWith("@outlook.com") && !raw.endsWith("@hotmail.com")) {
      const parts = raw.split("@");
      const maskedUser = parts[0].length > 2 ? parts[0].slice(0, 2) + "\u2022\u2022\u2022" : "\u2022\u2022";
      spans.push({
        type: "UPI_ID",
        raw,
        masked: `${maskedUser}@${parts[1]}`,
        start: m.index,
        end: m.index + raw.length
      });
    }
  }
  return spans.sort((a, b) => a.start - b.start);
}
function maskSensitiveText(text) {
  if (!text)
    return "";
  const spans = identifySensitiveSpans(text);
  if (spans.length === 0)
    return text;
  let result = "";
  let lastIdx = 0;
  for (const span of spans) {
    result += text.slice(lastIdx, span.start) + span.masked;
    lastIdx = span.end;
  }
  result += text.slice(lastIdx);
  return result;
}
function applyPageMasking(documentRoot = document, lang = "en") {
  if (!documentRoot || !documentRoot.body)
    return { maskedInputs: 0, maskedTextNodes: 0 };
  let maskedInputs = 0;
  let maskedTextNodes = 0;
  const inputs = documentRoot.querySelectorAll("input:not([type='hidden']):not([type='submit']):not([type='button'])");
  inputs.forEach((input) => {
    if (input.getAttribute("data-sakha-monitored"))
      return;
    input.setAttribute("data-sakha-monitored", "true");
    const checkAndMaskInput = () => {
      const val = input.value;
      if (!val)
        return;
      const spans = identifySensitiveSpans(val);
      if (spans.length > 0) {
        const activeEl = documentRoot.activeElement || (typeof document !== "undefined" ? document.activeElement : null);
        if (activeEl !== input) {
          input.classList.add("sakha-masked-input");
          input.title = t("masked_badge", lang);
        }
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
      if (activeEl !== input)
        checkAndMaskInput();
    });
    checkAndMaskInput();
  });
  const SHOW_TEXT = typeof NodeFilter !== "undefined" && NodeFilter.SHOW_TEXT ? NodeFilter.SHOW_TEXT : 4;
  const FILTER_ACCEPT = typeof NodeFilter !== "undefined" && NodeFilter.FILTER_ACCEPT ? NodeFilter.FILTER_ACCEPT : 1;
  const FILTER_REJECT = typeof NodeFilter !== "undefined" && NodeFilter.FILTER_REJECT ? NodeFilter.FILTER_REJECT : 2;
  const walker = documentRoot.createTreeWalker(
    documentRoot.body,
    SHOW_TEXT,
    {
      acceptNode(node) {
        if (!node.nodeValue || !node.nodeValue.trim())
          return FILTER_REJECT;
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
    if (!parent)
      continue;
    const fullText = node.nodeValue;
    const frag = documentRoot.createDocumentFragment();
    let cur = 0;
    for (const span of spans) {
      if (span.start > cur) {
        frag.appendChild(documentRoot.createTextNode(fullText.slice(cur, span.start)));
      }
      const maskSpan = documentRoot.createElement("span");
      maskSpan.className = "sakha-tap-mask sakha-blurred";
      maskSpan.tabIndex = 0;
      maskSpan.textContent = span.raw;
      maskSpan.setAttribute("data-raw-value", span.raw);
      maskSpan.setAttribute("data-masked-value", span.masked);
      maskSpan.setAttribute("role", "button");
      maskSpan.setAttribute("aria-label", `${t("masked_badge", lang)} \u2014 ${t("tap_to_reveal", lang)}`);
      maskSpan.setAttribute("title", `${t("masked_badge", lang)} \u2014 ${t("tap_to_reveal", lang)}`);
      const toggleReveal = (e) => {
        e.stopPropagation();
        e.preventDefault();
        maskSpan.classList.toggle("sakha-blurred");
        maskSpan.classList.toggle("sakha-revealed");
      };
      maskSpan.addEventListener("click", toggleReveal);
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

// src/eventLogger.js
var STORAGE_KEY = "sakha_pilot_logs";
async function logPilotEvent(eventType, payload = {}) {
  const event = {
    id: "evt_" + Math.random().toString(36).slice(2, 9),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    eventType,
    domain: payload.domain || window.location?.hostname || "unknown",
    ...payload
  };
  try {
    if (typeof chrome !== "undefined" && chrome.storage?.local) {
      const data = await chrome.storage.local.get([STORAGE_KEY]);
      const logs = data[STORAGE_KEY] || [];
      logs.push(event);
      await chrome.storage.local.set({ [STORAGE_KEY]: logs });
    } else if (typeof localStorage !== "undefined") {
      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      existing.push(event);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    }
  } catch (err) {
    console.warn("[Sakha Logger] Could not record local event:", err);
  }
  return event;
}

// src/content_sakha.js
console.log("[Sakha] On-device safety companion active on:", window.location.href);
var currentLanguage = "en";
var pageEvaluation = null;
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
function renderConsentModal() {
  if (document.getElementById("sakha-consent-root"))
    return;
  const root = document.createElement("div");
  root.id = "sakha-consent-root";
  const titleEn = t("consent_title", "en");
  const titleLang = t("consent_title", currentLanguage);
  const bodyEn = t("consent_body", "en");
  const bodyLang = t("consent_body", currentLanguage);
  const agreeEn = t("consent_agree", "en");
  const agreeLang = t("consent_agree", currentLanguage);
  root.innerHTML = `
    <div class="sakha-modal-card caution" style="max-width:480px;">
      <div class="sakha-modal-header">
        <span class="sakha-icon">\u{1F6E1}\uFE0F</span>
        <div>
          <h2>${titleEn}</h2>
          <div style="font-size:15px;opacity:0.9;margin-top:4px;">${titleLang}</div>
        </div>
      </div>
      <div class="sakha-modal-body">
        <div class="sakha-modal-reason-en">${bodyEn}</div>
        <div class="sakha-modal-reason-te">${bodyLang}</div>
        <div class="sakha-modal-actions">
          <button id="sakha-consent-agree" class="sakha-btn sakha-btn-primary">
            \u2705 ${agreeEn} / ${agreeLang}
          </button>
        </div>
      </div>
    </div>
  `;
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
  const observer = new MutationObserver(() => {
    applyPageMasking(document, currentLanguage);
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
  runPageSafetyCheck();
}
function runPageSafetyCheck() {
  const pageText = document.body ? document.body.innerText || "" : "";
  const inputElements = Array.from(document.querySelectorAll("input, select, textarea")).map((el) => ({
    name: el.getAttribute("name") || "",
    id: el.getAttribute("id") || "",
    placeholder: el.getAttribute("placeholder") || "",
    type: el.getAttribute("type") || "",
    label: el.getAttribute("aria-label") || ""
  }));
  const linkElements = Array.from(document.querySelectorAll("a[href]")).map((a) => a.href);
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
function renderSeniorWarningModal(evaluation) {
  if (document.getElementById("sakha-alert-modal-root"))
    return;
  const root = document.createElement("div");
  root.id = "sakha-alert-modal-root";
  const isDanger = evaluation.level === "danger";
  const icon = isDanger ? "\u{1F6A8}" : "\u26A0\uFE0F";
  const titleKey = isDanger ? "warning_danger_title" : "warning_caution_title";
  const titleEn = t(titleKey, "en");
  const titleTe = t(titleKey, "te");
  root.innerHTML = `
    <div class="sakha-modal-card ${isDanger ? "danger" : "caution"}">
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
            \u{1F6E1}\uFE0F ${t("btn_understand_leave", "en")} / ${t("btn_understand_leave", "te")}
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
if (typeof chrome !== "undefined" && chrome.runtime?.onMessage) {
  chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "GET_PAGE_SAFETY") {
      sendResponse({ evaluation: pageEvaluation });
      return true;
    }
    if (msg.type === "GET_MASKED_PAGE_TEXT") {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4uanMiLCAic3JjL3NjYW1EZXRlY3Rvci5qcyIsICJzcmMvcGlpLmpzIiwgInNyYy9tYXNrRW5naW5lLmpzIiwgInNyYy9ldmVudExvZ2dlci5qcyIsICJzcmMvY29udGVudF9zYWtoYS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBpMThuLmpzIFx1MjAxNCBTYWtoYSBCaWxpbmd1YWwgJiBUcmlsaW5ndWFsIFN0cmluZyBSZXNvdXJjZSBGaWxlXG4gKlxuICogU3VwcG9ydGVkIGxvY2FsZXM6ICdlbicgKEVuZ2xpc2gpLCAndGUnIChUZWx1Z3UgLSBcdTBDMjRcdTBDNDZcdTBDMzJcdTBDNDFcdTBDMTdcdTBDNDEpLCAnaGknIChIaW5kaSAtIFx1MDkzOVx1MDkzRlx1MDkyOFx1MDk0RFx1MDkyNlx1MDk0MClcbiAqIEFsbCBub24tRW5nbGlzaCBzdHJpbmdzIGFyZSBkb2N1bWVudGVkIGluIFNUUklOR1NfVE9fUkVWSUVXLm1kIGZvciBuYXRpdmUtc3BlYWtlciBhdWRpdC5cbiAqL1xuXG5leHBvcnQgY29uc3QgU1RSSU5HUyA9IHtcbiAgZW46IHtcbiAgICBhcHBfbmFtZTogXCJTYWtoYVwiLFxuICAgIGFwcF9zdWJ0aXRsZTogXCJZb3VyIERpZ2l0YWwgU2FmZXR5IENvbXBhbmlvblwiLFxuICAgIHdhcm5pbmdfZGFuZ2VyX3RpdGxlOiBcIkRBTkdFUjogUG90ZW50aWFsIFNjYW0gRGV0ZWN0ZWRcIixcbiAgICB3YXJuaW5nX2NhdXRpb25fdGl0bGU6IFwiQ0FVVElPTjogU3VzcGljaW91cyBQYWdlIEFjdGl2aXR5XCIsXG4gICAgd2FybmluZ19zYWZlX3RpdGxlOiBcIlBhZ2UgQXBwZWFycyBTYWZlXCIsXG4gICAgXG4gICAgcnVsZV9mYWtlX2RvbWFpbjogXCJUaGlzIHdlYnNpdGUgbmFtZSBsb29rcyBsaWtlIGEgZmFrZSB2ZXJzaW9uIG9mIGFuIG9mZmljaWFsIGJhbmsgb3IgZ292ZXJubWVudCBzaXRlLlwiLFxuICAgIHJ1bGVfcGluX3RvX3JlY2VpdmU6IFwiV2FybmluZzogWW91IE5FVkVSIG5lZWQgdG8gZW50ZXIgeW91ciBVUEkgUElOIHRvIHJlY2VpdmUgbW9uZXkuXCIsXG4gICAgcnVsZV9zZW5zaXRpdmVfY29tYm86IFwiRGFuZ2VyOiBUaGlzIHVub2ZmaWNpYWwgc2l0ZSBpcyBhc2tpbmcgZm9yIHlvdXIgY2FyZCBudW1iZXIsIENWViwgYW5kIE9UUC9QSU4gdG9nZXRoZXIuXCIsXG4gICAgcnVsZV91cmdlbmN5X3RocmVhdDogXCJUaGlzIHBhZ2UgaXMgdXNpbmcgdXJnZW50IG9yIHRocmVhdGVuaW5nIHdvcmRzIChsaWtlIGFjY291bnQgYmxvY2tlZCwgU0lNIGRlYWN0aXZhdGVkKSB0byBydXNoIHlvdS5cIixcbiAgICBydWxlX2Fwa19kb3dubG9hZDogXCJXYXJuaW5nOiBUaGlzIHBhZ2UgaXMgYXNraW5nIHRvIGRvd25sb2FkIGFuIHVua25vd24gYXBwICguYXBrIG9yIHJlbW90ZSBhY2Nlc3MgYXBwKS5cIixcbiAgICBcbiAgICBtYXNrZWRfYmFkZ2U6IFwiSGlkZGVuIGZvciB5b3VyIHByb3RlY3Rpb25cIixcbiAgICB0YXBfdG9fcmV2ZWFsOiBcIlRhcCBvbmNlIHRvIHNlZVwiLFxuICAgIHRhcF90b19oaWRlOiBcIlRhcCB0byBoaWRlXCIsXG4gICAgYnRuX3VuZGVyc3RhbmRfbGVhdmU6IFwiTGVhdmUgdGhpcyBwYWdlIChSZWNvbW1lbmRlZClcIixcbiAgICBidG5fcHJvY2VlZF9hbnl3YXk6IFwiSSB1bmRlcnN0YW5kLCBjb250aW51ZSBhbnl3YXlcIixcbiAgICBidG5fZXhwbGFpbjogXCJXaGF0IGlzIHRoaXMgcGFnZSBhc2tpbmcgbWU/XCIsXG4gICAgXG4gICAgY29uc2VudF90aXRsZTogXCJXZWxjb21lIHRvIFNha2hhOiBZb3VyIERpZ2l0YWwgU2FmZXR5IENvbXBhbmlvblwiLFxuICAgIGNvbnNlbnRfYm9keTogXCJTYWtoYSBzdGF5cyBjb21wbGV0ZWx5IG9uIHlvdXIgZGV2aWNlLiBZb3VyIEFhZGhhYXIsIGNhcmRzLCBhbmQgcGVyc29uYWwgZGV0YWlscyBhcmUgbmV2ZXIgc2VudCB0byBhbnkgc2VydmVyLlwiLFxuICAgIGNvbnNlbnRfYWdyZWU6IFwiSSBBZ3JlZSAmIFN0YXJ0IFByb3RlY3Rpb25cIixcbiAgICBcbiAgICBsb2FkaW5nX2V4cGxhbmF0aW9uOiBcIkFuYWx5emluZyB3aGF0IHRoaXMgcGFnZSBpcyBhc2tpbmcgc2FmZWx5Li4uXCIsXG4gICAgZXhwbGFpbl9lcnJvcjogXCJDb3VsZCBub3QgZXhwbGFpbiB0aGlzIHBhZ2UgYXQgdGhpcyB0aW1lLlwiLFxuICAgIGV4cGxhaW5fb2ZmbGluZTogXCJFeHBsYWluIGlzIG9mZmxpbmUuIFRoZSBvcHRpb25hbCBleHBsYWluIGZlYXR1cmUgbmVlZHMgdGhlIGxvY2FsIFNha2hhIHNlcnZlciBydW5uaW5nIChzZWUgUkVBRE1FKS4gTm8gY29udGVudCB3YXMgZ2VuZXJhdGVkLlwiLFxuICAgIGV4cGxhaW5fc2FmZV9zdW1tYXJ5OiBcIlBhZ2UgU3VtbWFyeTpcIlxuICB9LFxuICBcbiAgdGU6IHtcbiAgICBhcHBfbmFtZTogXCJcdTBDMzhcdTBDMTYgKFNha2hhKVwiLFxuICAgIGFwcF9zdWJ0aXRsZTogXCJcdTBDMkVcdTBDNDAgXHUwQzIxXHUwQzNGXHUwQzFDXHUwQzNGXHUwQzFGXHUwQzMyXHUwQzREIFx1MEMyRFx1MEMyNlx1MEM0RFx1MEMzMFx1MEMyNFx1MEMzRSBcdTBDMzhcdTBDMzlcdTBDM0VcdTBDMkZcdTBDMTVcdTBDNDFcdTBDMjFcdTBDNDFcIixcbiAgICB3YXJuaW5nX2Rhbmdlcl90aXRsZTogXCJcdTBDMkFcdTBDNERcdTBDMzBcdTBDMkVcdTBDM0VcdTBDMjZcdTBDMDI6IFx1MEMyRVx1MEM0Qlx1MEMzOFx1MEMyQVx1MEM0Mlx1MEMzMFx1MEMzRlx1MEMyNCBcdTBDMzhcdTBDNDhcdTBDMUZcdTBDNEQgXHUwQzE1XHUwQzNFXHUwQzM1XHUwQzFBXHUwQzREXHUwQzFBXHUwQzQxXCIsXG4gICAgd2FybmluZ19jYXV0aW9uX3RpdGxlOiBcIlx1MEMxQ1x1MEMzRVx1MEMxN1x1MEM0RFx1MEMzMFx1MEMyNFx1MEM0RFx1MEMyNDogXHUwQzA1XHUwQzI4XHUwQzQxXHUwQzJFXHUwQzNFXHUwQzI4XHUwQzNFXHUwQzM4XHUwQzREXHUwQzJBXHUwQzI2IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MFwiLFxuICAgIHdhcm5pbmdfc2FmZV90aXRsZTogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMzOFx1MEM0MVx1MEMzMFx1MEMxNVx1MEM0RFx1MEMzN1x1MEMzRlx1MEMyNFx1MEMwMlx1MEMxN1x1MEMzRSBcdTBDMDlcdTBDMDJcdTBDMjZcdTBDM0ZcIixcbiAgICBcbiAgICBydWxlX2Zha2VfZG9tYWluOiBcIlx1MEMwOCBcdTBDMzVcdTBDNDZcdTBDMkNcdTBDNERcdTIwMENcdTBDMzhcdTBDNDhcdTBDMUZcdTBDNEQgXHUwQzJBXHUwQzQ3XHUwQzMwXHUwQzQxIFx1MEMwNVx1MEMzOFx1MEMzMlx1MEM0OFx1MEMyOCBcdTBDMkNcdTBDNERcdTBDMkZcdTBDM0VcdTBDMDJcdTBDMTVcdTBDNEQgXHUwQzMyXHUwQzQ3XHUwQzI2XHUwQzNFIFx1MEMyQVx1MEM0RFx1MEMzMFx1MEMyRFx1MEM0MVx1MEMyNFx1MEM0RFx1MEMzNSBcdTBDMzhcdTBDNDhcdTBDMUZcdTBDNERcdTIwMENcdTBDMzJcdTBDM0UgXHUwQzE1XHUwQzI4XHUwQzNGXHUwQzJBXHUwQzNGXHUwQzM4XHUwQzREXHUwQzI0XHUwQzQxXHUwQzI4XHUwQzREXHUwQzI4IFx1MEMyOFx1MEMxNVx1MEMzRlx1MEMzMlx1MEM0MCBcdTBDMzhcdTBDNDhcdTBDMUZcdTBDNEQgXHUwQzE1XHUwQzNFXHUwQzM1XHUwQzFBXHUwQzREXHUwQzFBXHUwQzQxLlwiLFxuICAgIHJ1bGVfcGluX3RvX3JlY2VpdmU6IFwiXHUwQzM5XHUwQzQ2XHUwQzFBXHUwQzREXHUwQzFBXHUwQzMwXHUwQzNGXHUwQzE1OiBcdTBDMjFcdTBDMkNcdTBDNERcdTBDMkNcdTBDNDFcdTBDMzJcdTBDNDEgXHUwQzA1XHUwQzAyXHUwQzI2XHUwQzQxXHUwQzE1XHUwQzRCXHUwQzM1XHUwQzIxXHUwQzNFXHUwQzI4XHUwQzNGXHUwQzE1XHUwQzNGIFx1MEMyRVx1MEM0MFx1MEMzMFx1MEM0MSBcdTBDMEVcdTBDMkFcdTBDNERcdTBDMkFcdTBDNDFcdTBDMjFcdTBDNDIgVVBJIFx1MEMyQVx1MEMzRlx1MEMyOFx1MEM0RCAoUElOKSBcdTBDMjhcdTBDMkVcdTBDNEJcdTBDMjZcdTBDNDEgXHUwQzFBXHUwQzQ3XHUwQzJGXHUwQzM1XHUwQzMyXHUwQzM4XHUwQzNGXHUwQzI4IFx1MEMwNVx1MEMzNVx1MEMzOFx1MEMzMFx1MEMwMiBcdTBDMzJcdTBDNDdcdTBDMjZcdTBDNDEuXCIsXG4gICAgcnVsZV9zZW5zaXRpdmVfY29tYm86IFwiXHUwQzJBXHUwQzREXHUwQzMwXHUwQzJFXHUwQzNFXHUwQzI2XHUwQzAyOiBcdTBDMDggXHUwQzA1XHUwQzI4XHUwQzI3XHUwQzNGXHUwQzE1XHUwQzNFXHUwQzMwXHUwQzNGXHUwQzE1IFx1MEMzOFx1MEM0OFx1MEMxRlx1MEM0RCBcdTBDMkVcdTBDNDAgXHUwQzE1XHUwQzNFXHUwQzMwXHUwQzREXHUwQzIxXHUwQzREIFx1MEMyOFx1MEMwMlx1MEMyQ1x1MEMzMFx1MEM0RCwgQ1ZWIFx1MEMyRVx1MEMzMFx1MEMzRlx1MEMyRlx1MEM0MSBPVFAgXHUwQzEyXHUwQzE1XHUwQzQ3XHUwQzM4XHUwQzNFXHUwQzMwXHUwQzNGIFx1MEMwNVx1MEMyMVx1MEM0MVx1MEMxN1x1MEM0MVx1MEMyNFx1MEM0Qlx1MEMwMlx1MEMyNlx1MEMzRi5cIixcbiAgICBydWxlX3VyZ2VuY3lfdGhyZWF0OiBcIlx1MEMyRVx1MEM0MCBcdTBDMTZcdTBDM0VcdTBDMjRcdTBDM0UgXHUwQzI4XHUwQzNGXHUwQzMyXHUwQzNGXHUwQzJBXHUwQzNGXHUwQzM1XHUwQzQ3XHUwQzJGXHUwQzJDXHUwQzIxXHUwQzQxXHUwQzI0XHUwQzQxXHUwQzAyXHUwQzI2XHUwQzI4XHUwQzNGIFx1MEMzMlx1MEM0N1x1MEMyNlx1MEMzRSBcdTBDMzhcdTBDM0ZcdTBDMkVcdTBDNEQgXHUwQzMwXHUwQzI2XHUwQzREXHUwQzI2XHUwQzM1XHUwQzQxXHUwQzI0XHUwQzQxXHUwQzAyXHUwQzI2XHUwQzI4XHUwQzNGIFx1MEMyQ1x1MEM0Nlx1MEMyNlx1MEMzRlx1MEMzMFx1MEMzRlx1MEMwMlx1MEMxQVx1MEMzRiBcdTBDMkVcdTBDM0ZcdTBDMkVcdTBDNERcdTBDMkVcdTBDMzJcdTBDNERcdTBDMjhcdTBDM0YgXHUwQzI0XHUwQzRBXHUwQzAyXHUwQzI2XHUwQzMwXHUwQzJBXHUwQzQ2XHUwQzIxXHUwQzQxXHUwQzI0XHUwQzQxXHUwQzI4XHUwQzREXHUwQzI4XHUwQzNFXHUwQzMwXHUwQzQxLlwiLFxuICAgIHJ1bGVfYXBrX2Rvd25sb2FkOiBcIlx1MEMzOVx1MEM0Nlx1MEMxQVx1MEM0RFx1MEMxQVx1MEMzMFx1MEMzRlx1MEMxNTogXHUwQzA4IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MCBcdTBDMkFcdTBDNERcdTBDMzBcdTBDMkVcdTBDM0VcdTBDMjZcdTBDMTVcdTBDMzBcdTBDMkVcdTBDNDhcdTBDMjggXHUwQzJFXHUwQzRBXHUwQzJDXHUwQzQ4XHUwQzMyXHUwQzREIFx1MEMyRlx1MEMzRVx1MEMyQVx1MEM0RFx1MjAwQ1x1MEMyOFx1MEM0MSAoQVBLKSBcdTBDMjFcdTBDNENcdTBDMjhcdTBDNERcdTIwMENcdTBDMzJcdTBDNEJcdTBDMjFcdTBDNEQgXHUwQzFBXHUwQzQ3XHUwQzM4XHUwQzQxXHUwQzE1XHUwQzRCXHUwQzJFXHUwQzI4XHUwQzNGIFx1MEMxQVx1MEM0Nlx1MEMyQ1x1MEM0MVx1MEMyNFx1MEM0Qlx1MEMwMlx1MEMyNlx1MEMzRi5cIixcbiAgICBcbiAgICBtYXNrZWRfYmFkZ2U6IFwiXHUwQzJFXHUwQzQwIFx1MEMzMFx1MEMxNVx1MEM0RFx1MEMzN1x1MEMyMyBcdTBDMTVcdTBDNEJcdTBDMzhcdTBDMDIgXHUwQzI2XHUwQzNFXHUwQzFBXHUwQzJDXHUwQzIxXHUwQzNGXHUwQzAyXHUwQzI2XHUwQzNGXCIsXG4gICAgdGFwX3RvX3JldmVhbDogXCJcdTBDMUFcdTBDNDJcdTBDMjFcdTBDMUZcdTBDM0VcdTBDMjhcdTBDM0ZcdTBDMTVcdTBDM0YgXHUwQzI0XHUwQzNFXHUwQzE1XHUwQzAyXHUwQzIxXHUwQzNGXCIsXG4gICAgdGFwX3RvX2hpZGU6IFwiXHUwQzJFXHUwQzMzXHUwQzREXHUwQzMzXHUwQzQwIFx1MEMyNlx1MEMzRVx1MEMxQVx1MEMyMVx1MEMzRVx1MEMyOFx1MEMzRlx1MEMxNVx1MEMzRiBcdTBDMjRcdTBDM0VcdTBDMTVcdTBDMDJcdTBDMjFcdTBDM0ZcIixcbiAgICBidG5fdW5kZXJzdGFuZF9sZWF2ZTogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMyOFx1MEM0MVx1MEMwMlx1MEMyMVx1MEMzRiBcdTBDMzVcdTBDNDZcdTBDMzNcdTBDNERcdTBDMzNcdTBDM0ZcdTBDMkFcdTBDNEJcdTBDMDJcdTBDMjFcdTBDM0YgKFx1MEMzOFx1MEMzRlx1MEMyQlx1MEMzRVx1MEMzMFx1MEM0RFx1MEMzOFx1MEM0MSBcdTBDMUFcdTBDNDdcdTBDMkZcdTBDMkNcdTBDMjFcdTBDM0ZcdTBDMDJcdTBDMjZcdTBDM0YpXCIsXG4gICAgYnRuX3Byb2NlZWRfYW55d2F5OiBcIlx1MEMyOFx1MEMzRVx1MEMxNVx1MEM0MSBcdTBDMDVcdTBDMzBcdTBDNERcdTBDMjVcdTBDMkVcdTBDNDhcdTBDMDJcdTBDMjZcdTBDM0YsIFx1MEMwNVx1MEMyRlx1MEMzRlx1MEMyOFx1MEMzRSBcdTBDMTVcdTBDNEFcdTBDMjhcdTBDMzhcdTBDM0VcdTBDMTdcdTBDM0ZcdTBDMDJcdTBDMUFcdTBDMDJcdTBDMjFcdTBDM0ZcIixcbiAgICBidG5fZXhwbGFpbjogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMyOFx1MEMyOFx1MEM0RFx1MEMyOFx1MEM0MSBcdTBDMEZcdTBDMkVcdTBDM0YgXHUwQzA1XHUwQzIxXHUwQzQxXHUwQzE3XHUwQzQxXHUwQzI0XHUwQzRCXHUwQzAyXHUwQzI2XHUwQzNGP1wiLFxuICAgIFxuICAgIGNvbnNlbnRfdGl0bGU6IFwiXHUwQzM4XHUwQzE2IChTYWtoYSkgXHUwQzE1XHUwQzQxIFx1MEMzOFx1MEM0RFx1MEMzNVx1MEMzRVx1MEMxN1x1MEMyNFx1MEMwMjogXHUwQzJFXHUwQzQwIFx1MEMyMVx1MEMzRlx1MEMxQ1x1MEMzRlx1MEMxRlx1MEMzMlx1MEM0RCBcdTBDMkRcdTBDMjZcdTBDNERcdTBDMzBcdTBDMjRcdTBDM0UgXHUwQzM4XHUwQzM5XHUwQzNFXHUwQzJGXHUwQzE1XHUwQzQxXHUwQzIxXHUwQzQxXCIsXG4gICAgY29uc2VudF9ib2R5OiBcIlx1MEMzOFx1MEMxNiBcdTBDMkVcdTBDNDAgXHUwQzJBXHUwQzMwXHUwQzNGXHUwQzE1XHUwQzMwXHUwQzAyXHUwQzMyXHUwQzRCXHUwQzI4XHUwQzQ3IFx1MEMyQVx1MEMyOFx1MEMzRlx1MEMxQVx1MEM0N1x1MEMzOFx1MEM0RFx1MEMyNFx1MEM0MVx1MEMwMlx1MEMyNlx1MEMzRi4gXHUwQzJFXHUwQzQwIFx1MEMwNlx1MEMyN1x1MEMzRVx1MEMzMFx1MEM0RCwgXHUwQzJDXHUwQzREXHUwQzJGXHUwQzNFXHUwQzAyXHUwQzE1XHUwQzREIFx1MEMxNVx1MEMzRVx1MEMzMFx1MEM0RFx1MEMyMVx1MEM0RCBcdTBDMzVcdTBDM0ZcdTBDMzVcdTBDMzBcdTBDM0VcdTBDMzJcdTBDNDEgXHUwQzBGIFx1MEMzOFx1MEMzMFx1MEM0RFx1MEMzNVx1MEMzMFx1MEM0RFx1MjAwQ1x1MEMxNVx1MEM0MSBcdTBDMkFcdTBDMDJcdTBDMkFcdTBDMkNcdTBDMjFcdTBDMzVcdTBDNDEuXCIsXG4gICAgY29uc2VudF9hZ3JlZTogXCJcdTBDMjhcdTBDNDdcdTBDMjhcdTBDNDEgXHUwQzA1XHUwQzAyXHUwQzE3XHUwQzQwXHUwQzE1XHUwQzMwXHUwQzNGXHUwQzM4XHUwQzREXHUwQzI0XHUwQzQxXHUwQzI4XHUwQzREXHUwQzI4XHUwQzNFXHUwQzI4XHUwQzQxIC0gXHUwQzMwXHUwQzE1XHUwQzREXHUwQzM3XHUwQzIzIFx1MEMyQVx1MEM0RFx1MEMzMFx1MEMzRVx1MEMzMFx1MEMwMlx1MEMyRFx1MEMzRlx1MEMwMlx1MEMxQVx1MEMwMlx1MEMyMVx1MEMzRlwiLFxuICAgIFxuICAgIGxvYWRpbmdfZXhwbGFuYXRpb246IFwiXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMzNVx1MEMzRlx1MEMzNVx1MEMzMFx1MEMzRVx1MEMzMlx1MEMyOFx1MEM0MSBcdTBDMzhcdTBDNDFcdTBDMzBcdTBDMTVcdTBDNERcdTBDMzdcdTBDM0ZcdTBDMjRcdTBDMDJcdTBDMTdcdTBDM0UgXHUwQzJBXHUwQzMwXHUwQzNGXHUwQzM2XHUwQzQwXHUwQzMyXHUwQzNGXHUwQzM4XHUwQzREXHUwQzI0XHUwQzQxXHUwQzI4XHUwQzREXHUwQzI4XHUwQzNFXHUwQzJFXHUwQzQxLi4uXCIsXG4gICAgZXhwbGFpbl9lcnJvcjogXCJcdTBDMkFcdTBDNERcdTBDMzBcdTBDMzhcdTBDNERcdTBDMjRcdTBDNDFcdTBDMjRcdTBDMDIgXHUwQzA4IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MFx1MEMyOFx1MEMzRiBcdTBDMzVcdTBDM0ZcdTBDMzVcdTBDMzBcdTBDM0ZcdTBDMDJcdTBDMUFcdTBDMjFcdTBDMDIgXHUwQzM4XHUwQzNFXHUwQzI3XHUwQzREXHUwQzJGXHUwQzAyIFx1MEMxNVx1MEMzRVx1MEMzMlx1MEM0N1x1MEMyNlx1MEM0MS5cIixcbiAgICBleHBsYWluX29mZmxpbmU6IFwiXHUwQzM1XHUwQzNGXHUwQzM1XHUwQzMwXHUwQzIzIFx1MEMwNlx1MEMyQlx1MEM0RFx1MjAwQ1x1MEMzMlx1MEM0OFx1MEMyOFx1MEM0RFx1MjAwQ1x1MEMzMlx1MEM0QiBcdTBDMDlcdTBDMDJcdTBDMjZcdTBDM0YuIFx1MEMwOCBcdTBDMzhcdTBDNDdcdTBDMzUgXHUwQzM4XHUwQzREXHUwQzI1XHUwQzNFXHUwQzI4XHUwQzNGXHUwQzE1IFNha2hhIFx1MEMzOFx1MEMzMFx1MEM0RFx1MEMzNVx1MEMzMFx1MEM0RFx1MjAwQ1x1MEMyQVx1MEM0OCBcdTBDMDZcdTBDMjdcdTBDM0VcdTBDMzBcdTBDMkFcdTBDMjFcdTBDNDFcdTBDMjRcdTBDNDFcdTBDMDJcdTBDMjZcdTBDM0YgKFJFQURNRSBcdTBDMUFcdTBDNDJcdTBDMjFcdTBDMDJcdTBDMjFcdTBDM0YpLiBcdTBDMEVcdTBDMUZcdTBDNDFcdTBDMzVcdTBDMDJcdTBDMUZcdTBDM0YgXHUwQzM4XHUwQzJFXHUwQzNFXHUwQzI3XHUwQzNFXHUwQzI4XHUwQzAyIFx1MEMzMFx1MEM0Mlx1MEMyQVx1MEM0QVx1MEMwMlx1MEMyNlx1MEMzRlx1MEMwMlx1MEMxQVx1MEMyQ1x1MEMyMVx1MEMzMlx1MEM0N1x1MEMyNlx1MEM0MS5cIixcbiAgICBleHBsYWluX3NhZmVfc3VtbWFyeTogXCJcdTBDMkFcdTBDNDdcdTBDMUNcdTBDNDAgXHUwQzM4XHUwQzNFXHUwQzMwXHUwQzNFXHUwQzAyXHUwQzM2XHUwQzAyOlwiXG4gIH0sXG5cbiAgaGk6IHtcbiAgICBhcHBfbmFtZTogXCJcdTA5MzhcdTA5MTZcdTA5M0UgKFNha2hhKVwiLFxuICAgIGFwcF9zdWJ0aXRsZTogXCJcdTA5MDZcdTA5MkFcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTFDXHUwOTNGXHUwOTFGXHUwOTMyIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MzhcdTA5M0VcdTA5MjVcdTA5NDBcIixcbiAgICB3YXJuaW5nX2Rhbmdlcl90aXRsZTogXCJcdTA5MTZcdTA5MjRcdTA5MzBcdTA5M0U6IFx1MDkyRlx1MDkzOSBcdTA5MzVcdTA5NDdcdTA5MkNcdTA5MzhcdTA5M0VcdTA5MDdcdTA5MUYgXHUwOTI3XHUwOTRCXHUwOTE2XHUwOTNFXHUwOTI3XHUwOTIxXHUwOTNDXHUwOTQwIFx1MDkzOVx1MDk0QiBcdTA5MzhcdTA5MTVcdTA5MjRcdTA5NDAgXHUwOTM5XHUwOTQ4XCIsXG4gICAgd2FybmluZ19jYXV0aW9uX3RpdGxlOiBcIlx1MDkzOFx1MDkzRVx1MDkzNVx1MDkyN1x1MDkzRVx1MDkyOFx1MDk0MDogXHUwOTM4XHUwOTAyXHUwOTI2XHUwOTNGXHUwOTE3XHUwOTREXHUwOTI3IFx1MDkxN1x1MDkyNFx1MDkzRlx1MDkzNVx1MDkzRlx1MDkyN1x1MDkzRlwiLFxuICAgIHdhcm5pbmdfc2FmZV90aXRsZTogXCJcdTA5MkZcdTA5MzkgXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRlx1MDkyNCBcdTA5MkFcdTA5NERcdTA5MzBcdTA5MjRcdTA5NDBcdTA5MjQgXHUwOTM5XHUwOTRCXHUwOTI0XHUwOTNFIFx1MDkzOVx1MDk0OFwiLFxuICAgIFxuICAgIHJ1bGVfZmFrZV9kb21haW46IFwiXHUwOTJGXHUwOTM5IFx1MDkzNVx1MDk0N1x1MDkyQ1x1MDkzOFx1MDkzRVx1MDkwN1x1MDkxRiBcdTA5MTVcdTA5M0ZcdTA5MzhcdTA5NDAgXHUwOTJDXHUwOTQ4XHUwOTAyXHUwOTE1IFx1MDkyRlx1MDkzRSBcdTA5MzhcdTA5MzBcdTA5MTVcdTA5M0VcdTA5MzBcdTA5NDAgXHUwOTJBXHUwOTRCXHUwOTMwXHUwOTREXHUwOTFGXHUwOTMyIFx1MDkxNVx1MDkzRSBcdTA5MjhcdTA5MTVcdTA5MzJcdTA5NDAgXHUwOTMwXHUwOTQyXHUwOTJBIFx1MDkzMlx1MDkxN1x1MDkyNFx1MDk0MCBcdTA5MzlcdTA5NDhcdTA5NjRcIixcbiAgICBydWxlX3Bpbl90b19yZWNlaXZlOiBcIlx1MDkxQVx1MDk0N1x1MDkyNFx1MDkzRVx1MDkzNVx1MDkyOFx1MDk0MDogXHUwOTJBXHUwOTQ4XHUwOTM4XHUwOTQ3IFx1MDkyQVx1MDkzRVx1MDkyOFx1MDk0NyBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkxNVx1MDkyRFx1MDk0MCBcdTA5MkRcdTA5NDAgXHUwOTJGXHUwOTQyXHUwOTJBXHUwOTQwXHUwOTA2XHUwOTA4IFx1MDkyQVx1MDkzRlx1MDkyOCAoUElOKSBcdTA5MjZcdTA5MzBcdTA5NERcdTA5MUMgXHUwOTE1XHUwOTMwXHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0MCBcdTA5MDZcdTA5MzVcdTA5MzZcdTA5NERcdTA5MkZcdTA5MTVcdTA5MjRcdTA5M0UgXHUwOTI4XHUwOTM5XHUwOTQwXHUwOTAyIFx1MDkzOVx1MDk0Qlx1MDkyNFx1MDk0MFx1MDk2NFwiLFxuICAgIHJ1bGVfc2Vuc2l0aXZlX2NvbWJvOiBcIlx1MDkxNlx1MDkyNFx1MDkzMFx1MDkzRTogXHUwOTJGXHUwOTM5IFx1MDkwNVx1MDkyOFx1MDkyN1x1MDkzRlx1MDkxNVx1MDk0M1x1MDkyNCBcdTA5MzhcdTA5M0VcdTA5MDdcdTA5MUYgXHUwOTA2XHUwOTJBXHUwOTE1XHUwOTQ3IFx1MDkxNVx1MDkzRVx1MDkzMFx1MDk0RFx1MDkyMSBcdTA5MjhcdTA5MDJcdTA5MkNcdTA5MzAsIFx1MDkzOFx1MDk0MFx1MDkzNVx1MDk0MFx1MDkzNVx1MDk0MCBcdTA5MTRcdTA5MzAgXHUwOTEzXHUwOTFGXHUwOTQwXHUwOTJBXHUwOTQwIFx1MDkxNVx1MDk0QiBcdTA5MEZcdTA5MTUgXHUwOTM4XHUwOTNFXHUwOTI1IFx1MDkyRVx1MDkzRVx1MDkwMlx1MDkxNyBcdTA5MzBcdTA5MzlcdTA5NDAgXHUwOTM5XHUwOTQ4XHUwOTY0XCIsXG4gICAgcnVsZV91cmdlbmN5X3RocmVhdDogXCJcdTA5MkZcdTA5MzkgXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkwNlx1MDkyQVx1MDkxNVx1MDk0QiBcdTA5MjFcdTA5MzBcdTA5M0VcdTA5MjhcdTA5NDcgXHUwOTJGXHUwOTNFIFx1MDkxQ1x1MDkzMlx1MDk0RFx1MDkyNlx1MDkyQ1x1MDkzRVx1MDkxQ1x1MDk0MCBcdTA5MTVcdTA5MzBcdTA5MjhcdTA5NDcgXHUwOTE1XHUwOTQwIFx1MDkxNVx1MDk0Qlx1MDkzNlx1MDkzRlx1MDkzNiBcdTA5MTVcdTA5MzAgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OCAoXHUwOTE2XHUwOTNFXHUwOTI0XHUwOTNFIFx1MDkyQ1x1MDkwMlx1MDkyNiBcdTA5MzlcdTA5NEJcdTA5MjhcdTA5NDcgXHUwOTE1XHUwOTQwIFx1MDkyN1x1MDkyRVx1MDkxNVx1MDk0MClcdTA5NjRcIixcbiAgICBydWxlX2Fwa19kb3dubG9hZDogXCJcdTA5MUFcdTA5NDdcdTA5MjRcdTA5M0VcdTA5MzVcdTA5MjhcdTA5NDA6IFx1MDkyRlx1MDkzOSBcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTA1XHUwOTFDXHUwOTREXHUwOTFFXHUwOTNFXHUwOTI0IFx1MDkxMFx1MDkyQSBcdTA5MkZcdTA5M0UgXHUwOTMwXHUwOTNGXHUwOTJFXHUwOTRCXHUwOTFGIFx1MDkxMFx1MDkyQSBcdTA5MjFcdTA5M0VcdTA5MDlcdTA5MjhcdTA5MzJcdTA5NEJcdTA5MjEgXHUwOTE1XHUwOTMwXHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTE1XHUwOTM5IFx1MDkzMFx1MDkzOVx1MDkzRSBcdTA5MzlcdTA5NDhcdTA5NjRcIixcbiAgICBcbiAgICBtYXNrZWRfYmFkZ2U6IFwiXHUwOTA2XHUwOTJBXHUwOTE1XHUwOTQwIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkxQlx1MDkzRlx1MDkyQVx1MDkzRVx1MDkyRlx1MDkzRSBcdTA5MTdcdTA5MkZcdTA5M0VcIixcbiAgICB0YXBfdG9fcmV2ZWFsOiBcIlx1MDkyNlx1MDk0N1x1MDkxNlx1MDkyOFx1MDk0NyBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkxRlx1MDk0OFx1MDkyQSBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcbiAgICB0YXBfdG9faGlkZTogXCJcdTA5MUJcdTA5M0ZcdTA5MkFcdTA5M0VcdTA5MjhcdTA5NDcgXHUwOTE1XHUwOTQ3IFx1MDkzMlx1MDkzRlx1MDkwRiBcdTA5MUZcdTA5NDhcdTA5MkEgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXCIsXG4gICAgYnRuX3VuZGVyc3RhbmRfbGVhdmU6IFwiXHUwOTA3XHUwOTM4IFx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MzhcdTA5NDcgXHUwOTJDXHUwOTNFXHUwOTM5XHUwOTMwIFx1MDkyOFx1MDkzRlx1MDkxNVx1MDkzMlx1MDk0N1x1MDkwMiAoXHUwOTA1XHUwOTI4XHUwOTQxXHUwOTM2XHUwOTAyXHUwOTM4XHUwOTNGXHUwOTI0KVwiLFxuICAgIGJ0bl9wcm9jZWVkX2FueXdheTogXCJcdTA5MkVcdTA5NDFcdTA5MURcdTA5NDcgXHUwOTM4XHUwOTJFXHUwOTFEIFx1MDkwNlx1MDkyRlx1MDkzRSwgXHUwOTJCXHUwOTNGXHUwOTMwIFx1MDkyRFx1MDk0MCBcdTA5MUNcdTA5M0VcdTA5MzBcdTA5NDAgXHUwOTMwXHUwOTE2XHUwOTQ3XHUwOTAyXCIsXG4gICAgYnRuX2V4cGxhaW46IFwiXHUwOTJGXHUwOTM5IFx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MkVcdTA5NDFcdTA5MURcdTA5MzhcdTA5NDcgXHUwOTE1XHUwOTREXHUwOTJGXHUwOTNFIFx1MDkyRVx1MDkzRVx1MDkwMlx1MDkxNyBcdTA5MzBcdTA5MzlcdTA5M0UgXHUwOTM5XHUwOTQ4P1wiLFxuICAgIFxuICAgIGNvbnNlbnRfdGl0bGU6IFwiXHUwOTM4XHUwOTE2XHUwOTNFIFx1MDkyRVx1MDk0N1x1MDkwMiBcdTA5MDZcdTA5MkFcdTA5MTVcdTA5M0UgXHUwOTM4XHUwOTREXHUwOTM1XHUwOTNFXHUwOTE3XHUwOTI0IFx1MDkzOVx1MDk0ODogXHUwOTA2XHUwOTJBXHUwOTE1XHUwOTNFIFx1MDkyMVx1MDkzRlx1MDkxQ1x1MDkzRlx1MDkxRlx1MDkzMiBcdTA5MzhcdTA5NDFcdTA5MzBcdTA5MTVcdTA5NERcdTA5MzdcdTA5M0UgXHUwOTM4XHUwOTNFXHUwOTI1XHUwOTQwXCIsXG4gICAgY29uc2VudF9ib2R5OiBcIlx1MDkzOFx1MDkxNlx1MDkzRSBcdTA5MkFcdTA5NDJcdTA5MzBcdTA5NDAgXHUwOTI0XHUwOTMwXHUwOTM5IFx1MDkzOFx1MDk0NyBcdTA5MDZcdTA5MkFcdTA5MTVcdTA5NDcgXHUwOTIxXHUwOTNGXHUwOTM1XHUwOTNFXHUwOTA3XHUwOTM4IFx1MDkyQVx1MDkzMCBcdTA5MzlcdTA5NDAgXHUwOTE1XHUwOTNFXHUwOTJFIFx1MDkxNVx1MDkzMFx1MDkyNFx1MDkzRSBcdTA5MzlcdTA5NDhcdTA5NjQgXHUwOTA2XHUwOTJBXHUwOTE1XHUwOTNFIFx1MDkwNlx1MDkyN1x1MDkzRVx1MDkzMCwgXHUwOTE1XHUwOTNFXHUwOTMwXHUwOTREXHUwOTIxIFx1MDkzNVx1MDkzRlx1MDkzNVx1MDkzMFx1MDkyMyBcdTA5MTVcdTA5MkRcdTA5NDAgXHUwOTE1XHUwOTNGXHUwOTM4XHUwOTQwIFx1MDkzOFx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzMCBcdTA5MkFcdTA5MzAgXHUwOTI4XHUwOTM5XHUwOTQwXHUwOTAyIFx1MDkyRFx1MDk0N1x1MDkxQ1x1MDk0NyBcdTA5MUNcdTA5M0VcdTA5MjRcdTA5NDdcdTA5NjRcIixcbiAgICBjb25zZW50X2FncmVlOiBcIlx1MDkyRVx1MDk0OFx1MDkwMiBcdTA5MzhcdTA5MzlcdTA5MkVcdTA5MjQgXHUwOTM5XHUwOTQyXHUwOTAxIC0gXHUwOTM4XHUwOTQxXHUwOTMwXHUwOTE1XHUwOTREXHUwOTM3XHUwOTNFIFx1MDkzNlx1MDk0MVx1MDkzMFx1MDk0MiBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcbiAgICBcbiAgICBsb2FkaW5nX2V4cGxhbmF0aW9uOiBcIlx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MTVcdTA5M0UgXHUwOTM4XHUwOTQxXHUwOTMwXHUwOTE1XHUwOTREXHUwOTM3XHUwOTNGXHUwOTI0IFx1MDkzMFx1MDk0Mlx1MDkyQSBcdTA5MzhcdTA5NDcgXHUwOTM1XHUwOTNGXHUwOTM2XHUwOTREXHUwOTMyXHUwOTQ3XHUwOTM3XHUwOTIzIFx1MDkxNVx1MDkzRlx1MDkyRlx1MDkzRSBcdTA5MUNcdTA5M0UgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OC4uLlwiLFxuICAgIGV4cGxhaW5fZXJyb3I6IFwiXHUwOTA3XHUwOTM4IFx1MDkzOFx1MDkyRVx1MDkyRiBcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTE1XHUwOTQwIFx1MDkzNVx1MDk0RFx1MDkyRlx1MDkzRVx1MDkxNlx1MDk0RFx1MDkyRlx1MDkzRSBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTE1XHUwOTQwIFx1MDkxQ1x1MDkzRSBcdTA5MzhcdTA5MTVcdTA5NDBcdTA5NjRcIixcbiAgICBleHBsYWluX29mZmxpbmU6IFwiXHUwOTM1XHUwOTREXHUwOTJGXHUwOTNFXHUwOTE2XHUwOTREXHUwOTJGXHUwOTNFIFx1MDkzOFx1MDk0N1x1MDkzNVx1MDkzRSBcdTA5MTFcdTA5MkJcdTA5MzJcdTA5M0VcdTA5MDdcdTA5MjggXHUwOTM5XHUwOTQ4XHUwOTY0IFx1MDkyRlx1MDkzOSBcdTA5MzhcdTA5NDFcdTA5MzVcdTA5M0ZcdTA5MjdcdTA5M0UgXHUwOTM4XHUwOTREXHUwOTI1XHUwOTNFXHUwOTI4XHUwOTQwXHUwOTJGIFNha2hhIFx1MDkzOFx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzMCBcdTA5MkFcdTA5MzAgXHUwOTI4XHUwOTNGXHUwOTMwXHUwOTREXHUwOTJEXHUwOTMwIFx1MDkxNVx1MDkzMFx1MDkyNFx1MDk0MCBcdTA5MzlcdTA5NDggKFJFQURNRSBcdTA5MjZcdTA5NDdcdTA5MTZcdTA5NDdcdTA5MDIpXHUwOTY0IFx1MDkxNVx1MDk0Qlx1MDkwOCBcdTA5MDlcdTA5MjRcdTA5NERcdTA5MjRcdTA5MzAgXHUwOTI4XHUwOTM5XHUwOTQwXHUwOTAyIFx1MDkyQ1x1MDkyOFx1MDkzRVx1MDkyRlx1MDkzRSBcdTA5MTdcdTA5MkZcdTA5M0VcdTA5NjRcIixcbiAgICBleHBsYWluX3NhZmVfc3VtbWFyeTogXCJcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTM4XHUwOTNFXHUwOTMwXHUwOTNFXHUwOTAyXHUwOTM2OlwiXG4gIH1cbn07XG5cbi8qKlxuICogSGVscGVyIHRvIGZldGNoIGxvY2FsaXplZCBzdHJpbmcgd2l0aCBmYWxsYmFjayB0byBFbmdsaXNoXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0KGtleSwgbGFuZyA9IFwiZW5cIikge1xuICBjb25zdCBkaWN0ID0gU1RSSU5HU1tsYW5nXSB8fCBTVFJJTkdTLmVuO1xuICByZXR1cm4gZGljdFtrZXldIHx8IFNUUklOR1MuZW5ba2V5XSB8fCBrZXk7XG59XG4iLCAiLyoqXG4gKiBzY2FtRGV0ZWN0b3IuanMgXHUyMDE0IERldGVybWluaXN0aWMgT24tRGV2aWNlIFNjYW0gV2FybmluZyBFbmdpbmUgZm9yIFNha2hhXG4gKlxuICogQ2hlY2tzOlxuICogMS4gTG9va2FsaWtlIGRvbWFpbiBhbmFseXNpcyB2cyBBbGxvd2xpc3QgKExldmVuc2h0ZWluIGRpc3RhbmNlLCBDeXJpbGxpYy9ob21vZ2x5cGhzLCBQdW55Y29kZSwgc3VzcGljaW91cyBzdWJkb21haW5zLCBzaGFkeSBUTERzKVxuICogMi4gSGlnaC1yaXNrIGNyZWRlbnRpYWwgaGFydmVzdCBjb21iaW5hdGlvbiAoQ2FyZCBOdW1iZXIgKyBDVlYgKyBQSU4vT1RQIG9uIG5vbi1hbGxvd2xpc3RlZCBzaXRlKVxuICogMy4gXCJFbnRlciBQSU4gdG8gcmVjZWl2ZSBtb25leVwiIC8gVVBJIGNvbGxlY3QgdHJhcHNcbiAqIDQuIFVyZ2VuY3kgJiB0aHJlYXQgaW50aW1pZGF0aW9uIGxhbmd1YWdlIChFbmdsaXNoLCByb21hbml6ZWQgSGluZGksIHJvbWFuaXplZCBUZWx1Z3UpXG4gKiA1LiBNYWxpY2lvdXMgQVBLIG9yIHJlbW90ZS1kZXNrdG9wIGFwcCBkb3dubG9hZCBwcm9tcHRzIChBbnlEZXNrLCBRdWlja1N1cHBvcnQsIFRlYW1WaWV3ZXIpXG4gKlxuICogT3V0cHV0OiB7IGxldmVsOiAnc2FmZSd8J2NhdXRpb24nfCdkYW5nZXInLCBydWxlc1RyaWdnZXJlZDogc3RyaW5nW10sIHJlYXNvbkVuOiBzdHJpbmcsIHJlYXNvblRlOiBzdHJpbmcgfVxuICovXG5cbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuLmpzXCI7XG5cbi8vIENhbm9uaWNhbCB2ZXJpZmllZCBkb21haW5zIChtYXRjaGVzIEFMTE9XTElTVF9UT19WRVJJRlkpXG5leHBvcnQgY29uc3QgT0ZGSUNJQUxfQUxMT1dMSVNUID0gW1xuICBcInNiaS5jby5pblwiLFxuICBcIm9ubGluZXNiaS5zYmlcIixcbiAgXCJoZGZjYmFuay5jb21cIixcbiAgXCJpY2ljaWJhbmsuY29tXCIsXG4gIFwiYXhpc2JhbmsuY29tXCIsXG4gIFwicHVuamFibmF0aW9uYWxiYW5rLmluXCIsXG4gIFwiYmFua29mYmFyb2RhLmluXCIsXG4gIFwiY2FuYXJhYmFuay5jb21cIixcbiAgXCJrb3Rhay5jb21cIixcbiAgXCJpbmR1c2luZC5jb21cIixcbiAgXCJ1bmlvbmJhbmtvZmluZGlhLmNvLmluXCIsXG4gIFwibnBjaS5vcmcuaW5cIixcbiAgXCJiaGltdXBpLm9yZy5pblwiLFxuICBcInBheXRtLmNvbVwiLFxuICBcInBob25lcGUuY29tXCIsXG4gIFwiZ29vZ2xlLmNvbVwiLFxuICBcInVpZGFpLmdvdi5pblwiLFxuICBcImluY29tZXRheC5nb3YuaW5cIixcbiAgXCJlcGZpbmRpYS5nb3YuaW5cIixcbiAgXCJwYXNzcG9ydGluZGlhLmdvdi5pblwiLFxuICBcInBhcml2YWhhbi5nb3YuaW5cIixcbiAgXCJkaWdpbG9ja2VyLmdvdi5pblwiLFxuICBcImluZGlhLmdvdi5pblwiLFxuICBcImNlaXIuZ292LmluXCIsXG4gIFwiY3liZXJjcmltZS5nb3YuaW5cIixcbiAgXCJzYW5jaGFyc2FhdGhpLmdvdi5pblwiLFxuICBcInBta2lzYW4uZ292LmluXCIsXG5dO1xuXG4vLyBDb21tb24gQ3lyaWxsaWMgJiBMYXRpbiBjb25mdXNhYmxlIGhvbW9nbHlwaHNcbmNvbnN0IEhPTU9HTFlQSF9NQVAgPSB7XG4gIFwiXHUwNDMwXCI6IFwiYVwiLCBcIlx1MDQ0MVwiOiBcImNcIiwgXCJcdTA0MzVcIjogXCJlXCIsIFwiXHUwNDNFXCI6IFwib1wiLCBcIlx1MDQ0MFwiOiBcInBcIiwgXCJcdTA0NTVcIjogXCJzXCIsIFwiXHUwNDQ1XCI6IFwieFwiLCBcIlx1MDQ0M1wiOiBcInlcIixcbiAgXCJcdTA0NTZcIjogXCJpXCIsIFwiXHUwNDU4XCI6IFwialwiLCBcIlx1MDUwMVwiOiBcImRcIiwgXCJcdTA1MUJcIjogXCJxXCIsIFwiXHUwNTFEXCI6IFwid1wiLFxuICBcIjBcIjogXCJvXCIsIFwiMVwiOiBcImxcIlxufTtcblxuLy8gU2hhZHkgVExEcyBjb21tb25seSBhYnVzZWQgaW4gSW5kaWFuIFNNUyBwaGlzaGluZyBjYW1wYWlnbnNcbmNvbnN0IFNVU1BJQ0lPVVNfVExEUyA9IFtcbiAgXCIudGtcIiwgXCIubWxcIiwgXCIuZ2FcIiwgXCIuY2ZcIiwgXCIuZ3FcIiwgXCIudG9wXCIsIFwiLnh5elwiLCBcIi5jbHViXCIsIFwiLndvcmtcIiwgXCIuYnV6elwiLCBcIi5jYW1cIiwgXCIucmVzdFwiLCBcIi5maXRcIlxuXTtcblxuLy8gUmVtb3RlIGFjY2VzcyB0b29sIGtleXdvcmRzXG5jb25zdCBSRU1PVEVfQUNDRVNTX0FQUFMgPSBbXG4gIFwiYW55ZGVza1wiLCBcInF1aWNrc3VwcG9ydFwiLCBcInRlYW12aWV3ZXJcIiwgXCJydXN0ZGVza1wiLCBcImFpcmRyb2lkXCIsIFwiem9obyBhc3Npc3RcIlxuXTtcblxuLyoqXG4gKiBTdGFuZGFyZCBMZXZlbnNodGVpbiBEaXN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGV2ZW5zaHRlaW5EaXN0YW5jZShhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGIubGVuZ3RoO1xuICBpZiAoYi5sZW5ndGggPT09IDApIHJldHVybiBhLmxlbmd0aDtcbiAgY29uc3QgbWF0cml4ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGIubGVuZ3RoOyBpKyspIG1hdHJpeFtpXSA9IFtpXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKykgbWF0cml4WzBdW2pdID0gajtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDEpKSB7XG4gICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4oXG4gICAgICAgICAgbWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLCAvLyBzdWJzdGl0dXRpb25cbiAgICAgICAgICBtYXRyaXhbaV1baiAtIDFdICsgMSwgICAgIC8vIGluc2VydGlvblxuICAgICAgICAgIG1hdHJpeFtpIC0gMV1bal0gKyAxICAgICAgLy8gZGVsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdHJpeFtiLmxlbmd0aF1bYS5sZW5ndGhdO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBkb21haW4gc3RyaW5nIGJ5IHJlcGxhY2luZyBob21vZ2x5cGhzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVIb21vZ2x5cGhzKGRvbWFpbikge1xuICBsZXQgbm9ybWFsaXplZCA9IFwiXCI7XG4gIGZvciAoY29uc3QgY2hhciBvZiBkb21haW4udG9Mb3dlckNhc2UoKSkge1xuICAgIG5vcm1hbGl6ZWQgKz0gSE9NT0dMWVBIX01BUFtjaGFyXSB8fCBjaGFyO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgY2xlYW4gaG9zdG5hbWUgZnJvbSBhcmJpdHJhcnkgVVJMIG9yIGRvbWFpbiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIb3N0bmFtZSh1cmxPckRvbWFpbikge1xuICBpZiAoIXVybE9yRG9tYWluKSByZXR1cm4gXCJcIjtcbiAgbGV0IHN0ciA9IHVybE9yRG9tYWluLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAvLyBTdHJpcCBwcm90b2NvbCBpZiBwcmVzZW50XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eW2Etel0rOlxcL1xcLy8sIFwiXCIpO1xuICAvLyBTdHJpcCBwYXRoIGFuZCBxdWVyeVxuICBzdHIgPSBzdHIuc3BsaXQoXCIvXCIpWzBdLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIiNcIilbMF07XG4gIC8vIFN0cmlwIHBvcnRcbiAgc3RyID0gc3RyLnNwbGl0KFwiOlwiKVswXTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGhvc3RuYW1lIHN0cmljdGx5IGJlbG9uZ3MgdG8gYW4gYWxsb3dsaXN0ZWQgZW50aXR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93bGlzdGVkRG9tYWluKGhvc3RuYW1lLCBhbGxvd2xpc3QgPSBPRkZJQ0lBTF9BTExPV0xJU1QpIHtcbiAgY29uc3QgY2xlYW4gPSBleHRyYWN0SG9zdG5hbWUoaG9zdG5hbWUpO1xuICByZXR1cm4gYWxsb3dsaXN0LnNvbWUoKG9mZmljaWFsKSA9PiB7XG4gICAgcmV0dXJuIGNsZWFuID09PSBvZmZpY2lhbCB8fCBjbGVhbi5lbmRzV2l0aChcIi5cIiArIG9mZmljaWFsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUnVsZSAxOiBDaGVjayBmb3IgbG9va2FsaWtlIC8gc3Bvb2ZlZCBkb21haW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTG9va2FsaWtlRG9tYWluKGhvc3RuYW1lLCBhbGxvd2xpc3QgPSBPRkZJQ0lBTF9BTExPV0xJU1QpIHtcbiAgY29uc3QgY2xlYW4gPSBleHRyYWN0SG9zdG5hbWUoaG9zdG5hbWUpO1xuICBpZiAoIWNsZWFuIHx8IGlzQWxsb3dsaXN0ZWREb21haW4oY2xlYW4sIGFsbG93bGlzdCkpIHtcbiAgICByZXR1cm4geyBpc0xvb2thbGlrZTogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIFB1bnljb2RlIGNoZWNrIChzdGFydHMgd2l0aCB4bi0tKVxuICBpZiAoY2xlYW4uaW5jbHVkZXMoXCJ4bi0tXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9va2FsaWtlOiB0cnVlLFxuICAgICAgcmVhc29uOiBgUHVueWNvZGUgZG9tYWluIGRldGVjdGVkICgke2NsZWFufSkgbWltaWNraW5nIGludGVybmF0aW9uYWxpemVkIHNjcmlwdC5gXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIb21vZ2x5cGhzKGNsZWFuKTtcblxuICBmb3IgKGNvbnN0IG9mZmljaWFsIG9mIGFsbG93bGlzdCkge1xuICAgIC8vIFN1YmRvbWFpbiBkZWNlcHRpb246IGUuZy4gXCJzYmkuY28uaW4uc2NhbS1wb3J0YWwuY29tXCIgb3IgXCJzYmktdmVyaWZpY2F0aW9uLmluXCJcbiAgICBjb25zdCBvZmZpY2lhbEJhc2UgPSBvZmZpY2lhbC5yZXBsYWNlKC9cXC4oY29cXC5pbnxnb3ZcXC5pbnxvcmdcXC5pbnxjb218aW58c2JpKSQvLCBcIlwiKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBvZmZpY2lhbCBicmFuZCBpcyBlbWJlZGRlZCBhcyBzdWJkb21haW4gb3Igc2x1ZyBvbiBhbiB1bnRydXN0ZWQgcm9vdFxuICAgIGlmIChjbGVhbi5pbmNsdWRlcyhvZmZpY2lhbCkgJiYgIWNsZWFuLmVuZHNXaXRoKFwiLlwiICsgb2ZmaWNpYWwpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgcmVhc29uOiBgRGVjZXB0aXZlIGRvbWFpbjogY29udGFpbnMgJyR7b2ZmaWNpYWx9JyBidXQgcmVnaXN0ZXJlZCB1bmRlciB1bnRydXN0ZWQgcGFyZW50IGRvbWFpbi5gXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIERpcmVjdCBMZXZlbnNodGVpbiBjaGVjayBvbiByb290IGRvbWFpbiBwYXJ0c1xuICAgIGNvbnN0IGNsZWFuQmFzZSA9IGNsZWFuLnNwbGl0KFwiLlwiKVswXTtcbiAgICBjb25zdCB0YXJnZXRCYXNlID0gb2ZmaWNpYWwuc3BsaXQoXCIuXCIpWzBdO1xuXG4gICAgaWYgKGNsZWFuQmFzZS5sZW5ndGggPj0gMyAmJiB0YXJnZXRCYXNlLmxlbmd0aCA+PSAzKSB7XG4gICAgICBjb25zdCBkaXN0ID0gbGV2ZW5zaHRlaW5EaXN0YW5jZShjbGVhbkJhc2UsIHRhcmdldEJhc2UpO1xuICAgICAgLy8gU21hbGwgZWRpdCBkaXN0YW5jZSAoMSBvciAyIGVkaXRzKSBpbmRpY2F0aW5nIHR5cG9zcXVhdHRpbmcgKGUuZy4gc2JpLWJhbmssIGhkZmMtbG9naW4sIG9ubGluZXNiMSlcbiAgICAgIGlmIChkaXN0ID4gMCAmJiBkaXN0IDw9IDIgJiYgTWF0aC5hYnMoY2xlYW5CYXNlLmxlbmd0aCAtIHRhcmdldEJhc2UubGVuZ3RoKSA8PSAyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNMb29rYWxpa2U6IHRydWUsXG4gICAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgICByZWFzb246IGBUeXBvc3F1YXR0aW5nIGRldGVjdGVkOiAnJHtjbGVhbn0nIGlzIHN0cmlraW5nbHkgY2xvc2UgdG8gb2ZmaWNpYWwgJyR7b2ZmaWNpYWx9JyAoZWRpdCBkaXN0YW5jZSAke2Rpc3R9KS5gXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgbm9ybWFsaXplZCBob21vZ2x5cGggc3Vic3RpdHV0aW9uXG4gICAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXModGFyZ2V0QmFzZSkgJiYgIWNsZWFuLmluY2x1ZGVzKHRhcmdldEJhc2UpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgcmVhc29uOiBgSG9tb2dseXBoIGNoYXJhY3RlciBzdWJzdGl0dXRpb24gZGV0ZWN0ZWQgbWltaWNraW5nICcke29mZmljaWFsfScuYFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBTdXNwaWNpb3VzIFRMRCBjaGVjayBvbiBiYW5raW5nL2dvdiBrZXl3b3Jkc1xuICBjb25zdCBpc1N1c3BpY2lvdXNUTEQgPSBTVVNQSUNJT1VTX1RMRFMuc29tZSh0bGQgPT4gY2xlYW4uZW5kc1dpdGgodGxkKSk7XG4gIGNvbnN0IGhhc0ZpbmFuY2VLZXl3b3JkID0gLyhiYW5rfHNiaXxoZGZjfGljaWNpfGFhZGhhYXJ8cGFufGt5Y3x0YXh8dXBpfHBheW91dHxsb3R0ZXJ5fHJld2FyZCkvaS50ZXN0KGNsZWFuKTtcbiAgaWYgKGlzU3VzcGljaW91c1RMRCAmJiBoYXNGaW5hbmNlS2V5d29yZCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgIHRhcmdldDogXCJmaW5hbmNpYWwvaWRlbnRpdHkgcG9ydGFsXCIsXG4gICAgICByZWFzb246IGBGaW5hbmNpYWwga2V5d29yZCBvbiBoaWdoLXJpc2sgVExEICgke2NsZWFufSkuYFxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpc0xvb2thbGlrZTogZmFsc2UgfTtcbn1cblxuLyoqXG4gKiBSdWxlIDI6IFVyZ2VuY3kgJiBUaHJlYXQgbGFuZ3VhZ2UgZGV0ZWN0b3IgKEVuZ2xpc2gsIHJvbWFuaXplZCBIaW5kaSwgcm9tYW5pemVkIFRlbHVndSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXJnZW5jeUFuZFRocmVhdHModGV4dCkge1xuICBpZiAoIXRleHQpIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgbWF0Y2hlczogW10gfTtcbiAgY29uc3QgbG93ZXIgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gIFxuICBjb25zdCBVUkdFTkNZX1BBVFRFUk5TID0gW1xuICAgIC8vIEVuZ2xpc2hcbiAgICAvXFxiKGFjY291bnQgKHdpbGwgYmUgfGlzICk/YmxvY2tlZHxzdXNwZW5kZWQgd2l0aGlufGRlYWN0aXZhdGVkIHdpdGhpbnxlbGVjdHJpY2l0eSAocG93ZXIgKT9jdXR8c2ltIChjYXJkICk/ZGVhY3RpdmF0aW9ufGt5YyBwZW5kaW5nfGt5YyBleHBpcmVzP3xpbW1lZGlhdGUgYWN0aW9uIHJlcXVpcmVkfGxhc3QgMjQgaG91cnN8bGVnYWwgYWN0aW9ufHBvbGljZSBjb21wbGFpbnR8YXJyZXN0IHdhcnJhbnQpXFxiL2ksXG4gICAgLy8gUm9tYW5pemVkIEhpbmRpXG4gICAgL1xcYihraGF0YSBiYW5kIGhvIGpheWVnYXxiaWpsaSBrYXQgamF5ZWdpfHNpbSBiYW5kIGhvIGpheWVnaXx0dXJhbnQga2FyZWlufHBvbGljZSBjYXNlfGFhZGhhYXIgbGluayBuYWhpIGtpeWEgdG8pXFxiL2ksXG4gICAgLy8gUm9tYW5pemVkIFRlbHVndVxuICAgIC9cXGIoYWNjb3VudCBibG9jayBhdnV0aHVuZGl8Y3VycmVudCBjdXQgYXZ1dGh1bmRpfHNpbSBjYXJkIGJsb2NrfHZlbnRhbmUgY2hleWFuZGl8bGVrYXBvdGhlIHJhZGRodSlcXGIvaVxuICBdO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFVSR0VOQ1lfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBtYXRjaCA9IGxvd2VyLm1hdGNoKHBhdHRlcm4pO1xuICAgIGlmIChtYXRjaCkgbWF0Y2hlcy5wdXNoKG1hdGNoWzBdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGV0ZWN0ZWQ6IG1hdGNoZXMubGVuZ3RoID4gMCxcbiAgICBtYXRjaGVzXG4gIH07XG59XG5cbi8qKlxuICogUnVsZSAzOiBVUEkgXCJFbnRlciBQSU4gdG8gcmVjZWl2ZSBtb25leVwiIGFuZCBDb2xsZWN0IFJlcXVlc3QgVHJhcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVVBJVHJhcHModGV4dCkge1xuICBpZiAoIXRleHQpIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSB9O1xuICBjb25zdCBsb3dlciA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICBjb25zdCBVUElfUEFUVEVSTlMgPSBbXG4gICAgLy8gRW5nbGlzaFxuICAgIC8oZW50ZXJ8dHlwZXxzdWJtaXQpXFxzKyh5b3VyXFxzKyk/KHVwaVxccyspP3Bpblxccyt0b1xccysocmVjZWl2ZXxjbGFpbXxnZXR8d2lufGFjY2VwdClcXHMrKFxcUytcXHMrKT8obW9uZXl8Y2FzaHxjYXNoYmFja3xyZWZ1bmR8cmV3YXJkfHByaXplKS9pLFxuICAgIC8ocmVjZWl2ZXxjbGFpbXxhY2NlcHQpXFxzKyhcXFMrXFxzKyk/KG1vbmV5fGNhc2hiYWNrfHJld2FyZHxyZWZ1bmQpLiooZW50ZXJ8dHlwZSlcXHMrKHVwaVxccyspP3Bpbi9pLFxuICAgIC9lbnRlclxccytwaW5cXHMrZm9yXFxzK2NyZWRpdC9pLFxuICAgIC8vIFJvbWFuaXplZCBIaW5kaVxuICAgIC9wYWlzZT9cXHMrKHBhbmV8bGVuZSlcXHMra2VcXHMrbGl5ZVxccysodXBpXFxzKyk/cGluXFxzKyhkYWxlfGRhYWxlfGVudGVyKS9pLFxuICAgIC8vIFJvbWFuaXplZCBUZWx1Z3VcbiAgICAvZGFiYnUobHUpP1xccysocmF2YWRhbmlraXxwb25kYWRhbmlraSlcXHMrKHVwaVxccyspP3BpblxccytlbnRlclxccytjaGV5YW5kaS9pXG4gIF07XG5cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFVQSV9QQVRURVJOUykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QobG93ZXIpKSB7XG4gICAgICByZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBkZXRlY3RlZDogZmFsc2UgfTtcbn1cblxuLyoqXG4gKiBSdWxlIDQ6IENyaXRpY2FsIENyZWRlbnRpYWwgSGFydmVzdGluZyBDb21ibyBvbiBub24tYWxsb3dsaXN0ZWQgZG9tYWluXG4gKiAoQ2FyZCBudW1iZXIgKyBDVlYgKyBQSU4gb3IgT1RQIHNpbXVsdGFuZW91c2x5IHJlcXVlc3RlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2Vuc2l0aXZlRmllbGRDb21ibyhpbnB1dHMgPSBbXSwgaXNBbGxvd2xpc3RlZCA9IGZhbHNlKSB7XG4gIGlmIChpc0FsbG93bGlzdGVkKSByZXR1cm4geyBkZXRlY3RlZDogZmFsc2UgfTtcblxuICBsZXQgaGFzQ2FyZCA9IGZhbHNlO1xuICBsZXQgaGFzQ1ZWID0gZmFsc2U7XG4gIGxldCBoYXNQSU5vck9UUCA9IGZhbHNlO1xuXG4gIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSBgJHtpbnB1dC5uYW1lIHx8IFwiXCJ9ICR7aW5wdXQuaWQgfHwgXCJcIn0gJHtpbnB1dC5wbGFjZWhvbGRlciB8fCBcIlwifSAke2lucHV0LmxhYmVsIHx8IFwiXCJ9ICR7aW5wdXQudHlwZSB8fCBcIlwifWAudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgICBpZiAoLyhjYXJkLipudW18cGFuX251bWJlcnxkZWJpdC4qY2FyZHxjcmVkaXQuKmNhcmR8MTYuKmRpZ2l0KS9pLnRlc3QoY29tYmluZWQpKSB7XG4gICAgICBoYXNDYXJkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKC8oY3Z2fGN2Y3xzZWN1cml0eS4qY29kZXxjYXJkLip2ZXJpZikvaS50ZXN0KGNvbWJpbmVkKSkge1xuICAgICAgaGFzQ1ZWID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKC8ob3RwfG9uZS4qdGltZS4qcGFzc3dvcmR8YXRtLipwaW58Y2FyZC4qcGlufG1waW4pL2kudGVzdChjb21iaW5lZCkpIHtcbiAgICAgIGhhc1BJTm9yT1RQID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaGFzQ2FyZCAmJiBoYXNDVlYgJiYgaGFzUElOb3JPVFApIHtcbiAgICByZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSB9O1xuICB9XG4gIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSB9O1xufVxuXG4vKipcbiAqIFJ1bGUgNTogQVBLIGFuZCBSZW1vdGUgQWNjZXNzIERvd25sb2FkIFByb21wdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWFsaWNpb3VzQXBwRG93bmxvYWRzKHRleHQsIGxpbmtIcmVmcyA9IFtdKSB7XG4gIGNvbnN0IGxvd2VyID0gKHRleHQgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgXG4gIC8vIFJlbW90ZSBkZXNrdG9wIHRvb2wgbWVudGlvbnNcbiAgZm9yIChjb25zdCBhcHAgb2YgUkVNT1RFX0FDQ0VTU19BUFBTKSB7XG4gICAgaWYgKGxvd2VyLmluY2x1ZGVzKGFwcCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGVjdGVkOiB0cnVlLFxuICAgICAgICByZWFzb246IGBQYWdlIGFkdmlzZXMgaW5zdGFsbGluZyByZW1vdGUgYWNjZXNzIHRvb2wgKCR7YXBwfSkuYFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBBUEsgZmlsZSBkb3dubG9hZHNcbiAgZm9yIChjb25zdCBocmVmIG9mIGxpbmtIcmVmcykge1xuICAgIGNvbnN0IGggPSAoaHJlZiB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChoLmVuZHNXaXRoKFwiLmFwa1wiKSB8fCBoLmluY2x1ZGVzKFwiLmFwaz9cIikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGVjdGVkOiB0cnVlLFxuICAgICAgICByZWFzb246IFwiUGFnZSBjb250YWlucyBkaXJlY3QgZG93bmxvYWQgbGluayBmb3IgYW4gQW5kcm9pZCBhcHBsaWNhdGlvbiAoLmFwaykuXCJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlIH07XG59XG5cbi8qKlxuICogRXZhbHVhdGUgQ29tcGxldGUgUGFnZSBmb3IgU2NhbSBTaWduYWxzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZUNvbnRleHQudXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZUNvbnRleHQucGFnZVRleHRcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYWdlQ29udGV4dC5pbnB1dHNcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYWdlQ29udGV4dC5saW5rc1xuICogQHJldHVybnMge09iamVjdH0geyBsZXZlbDogJ3NhZmUnfCdjYXV0aW9uJ3wnZGFuZ2VyJywgcnVsZXNUcmlnZ2VyZWQ6IHN0cmluZ1tdLCByZWFzb25Fbjogc3RyaW5nLCByZWFzb25UZTogc3RyaW5nIH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUGFnZVNhZmV0eShwYWdlQ29udGV4dCkge1xuICBjb25zdCB7IHVybCA9IFwiXCIsIHBhZ2VUZXh0ID0gXCJcIiwgaW5wdXRzID0gW10sIGxpbmtzID0gW10gfSA9IHBhZ2VDb250ZXh0O1xuICBjb25zdCBob3N0bmFtZSA9IGV4dHJhY3RIb3N0bmFtZSh1cmwpO1xuICBjb25zdCBpc0FsbG93bGlzdGVkID0gaXNBbGxvd2xpc3RlZERvbWFpbihob3N0bmFtZSk7XG5cbiAgY29uc3QgcnVsZXNUcmlnZ2VyZWQgPSBbXTtcbiAgbGV0IGhpZ2hlc3RMZXZlbCA9IFwic2FmZVwiO1xuICBsZXQgcHJpbWFyeUtleSA9IFwid2FybmluZ19zYWZlX3RpdGxlXCI7XG5cbiAgLy8gQ2hlY2sgMTogTG9va2FsaWtlIGRvbWFpblxuICBjb25zdCBsb29rYWxpa2UgPSBjaGVja0xvb2thbGlrZURvbWFpbihob3N0bmFtZSk7XG4gIGlmIChsb29rYWxpa2UuaXNMb29rYWxpa2UpIHtcbiAgICBoaWdoZXN0TGV2ZWwgPSBcImRhbmdlclwiO1xuICAgIHJ1bGVzVHJpZ2dlcmVkLnB1c2goXCJMT09LQUxJS0VfRE9NQUlOXCIpO1xuICAgIHByaW1hcnlLZXkgPSBcInJ1bGVfZmFrZV9kb21haW5cIjtcbiAgfVxuXG4gIC8vIENoZWNrIDI6IFVQSSBUcmFwXG4gIGNvbnN0IHVwaVRyYXAgPSBjaGVja1VQSVRyYXBzKHBhZ2VUZXh0KTtcbiAgaWYgKHVwaVRyYXAuZGV0ZWN0ZWQpIHtcbiAgICBoaWdoZXN0TGV2ZWwgPSBcImRhbmdlclwiO1xuICAgIHJ1bGVzVHJpZ2dlcmVkLnB1c2goXCJVUElfUElOX1JFQ0VJVkVfVFJBUFwiKTtcbiAgICBwcmltYXJ5S2V5ID0gXCJydWxlX3Bpbl90b19yZWNlaXZlXCI7XG4gIH1cblxuICAvLyBDaGVjayAzOiBTZW5zaXRpdmUgRmllbGQgQ29tYm9cbiAgY29uc3Qgc2Vuc2l0aXZlQ29tYm8gPSBjaGVja1NlbnNpdGl2ZUZpZWxkQ29tYm8oaW5wdXRzLCBpc0FsbG93bGlzdGVkKTtcbiAgaWYgKHNlbnNpdGl2ZUNvbWJvLmRldGVjdGVkKSB7XG4gICAgaGlnaGVzdExldmVsID0gXCJkYW5nZXJcIjtcbiAgICBydWxlc1RyaWdnZXJlZC5wdXNoKFwiU0VOU0lUSVZFX0NSRURFTlRJQUxfQ09NQk9cIik7XG4gICAgcHJpbWFyeUtleSA9IFwicnVsZV9zZW5zaXRpdmVfY29tYm9cIjtcbiAgfVxuXG4gIC8vIENoZWNrIDQ6IFJlbW90ZSBBcHAgLyBBUEsgZG93bmxvYWRcbiAgY29uc3QgYXBwRG93bmxvYWQgPSBjaGVja01hbGljaW91c0FwcERvd25sb2FkcyhwYWdlVGV4dCwgbGlua3MpO1xuICBpZiAoYXBwRG93bmxvYWQuZGV0ZWN0ZWQpIHtcbiAgICBpZiAoaGlnaGVzdExldmVsICE9PSBcImRhbmdlclwiKSBoaWdoZXN0TGV2ZWwgPSBcImNhdXRpb25cIjtcbiAgICBydWxlc1RyaWdnZXJlZC5wdXNoKFwiTUFMSUNJT1VTX0FQUF9ET1dOTE9BRFwiKTtcbiAgICBpZiAocHJpbWFyeUtleSA9PT0gXCJ3YXJuaW5nX3NhZmVfdGl0bGVcIikgcHJpbWFyeUtleSA9IFwicnVsZV9hcGtfZG93bmxvYWRcIjtcbiAgfVxuXG4gIC8vIENoZWNrIDU6IFVyZ2VuY3kgJiBUaHJlYXQgbGFuZ3VhZ2VcbiAgY29uc3QgdXJnZW5jeSA9IGNoZWNrVXJnZW5jeUFuZFRocmVhdHMocGFnZVRleHQpO1xuICBpZiAodXJnZW5jeS5kZXRlY3RlZCkge1xuICAgIGlmIChoaWdoZXN0TGV2ZWwgIT09IFwiZGFuZ2VyXCIpIGhpZ2hlc3RMZXZlbCA9IFwiY2F1dGlvblwiO1xuICAgIHJ1bGVzVHJpZ2dlcmVkLnB1c2goXCJVUkdFTkNZX1RIUkVBVF9MQU5HVUFHRVwiKTtcbiAgICBpZiAocHJpbWFyeUtleSA9PT0gXCJ3YXJuaW5nX3NhZmVfdGl0bGVcIikgcHJpbWFyeUtleSA9IFwicnVsZV91cmdlbmN5X3RocmVhdFwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZXZlbDogaGlnaGVzdExldmVsLFxuICAgIHJ1bGVzVHJpZ2dlcmVkLFxuICAgIHJlYXNvbkVuOiB0KHByaW1hcnlLZXksIFwiZW5cIiksXG4gICAgcmVhc29uVGU6IHQocHJpbWFyeUtleSwgXCJ0ZVwiKSxcbiAgICByZWFzb25IaTogdChwcmltYXJ5S2V5LCBcImhpXCIpLFxuICAgIGhvc3RuYW1lLFxuICAgIGlzQWxsb3dsaXN0ZWRcbiAgfTtcbn1cbiIsICIvKipcbiAqIHBpaS5qcyBcdTIwMTQgUElJIChQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbikgRGV0ZWN0aW9uIE1vZHVsZVxuICpcbiAqIGRldGVjdFNlbnNpdGl2ZVJlZ2lvbnMoeyBkb21SZWdpb25zLCBvY3JEZXRlY3Rpb25zLCBmYWNlRGV0ZWN0aW9ucyB9KVxuICogICBcdTIxOTIgU2Vuc2l0aXZlUmVnaW9uW11cbiAqXG4gKiBTZW5zaXRpdmVSZWdpb24gc2NoZW1hOlxuICogICB7XG4gKiAgICAgYmJveDogICAgICAgW3gsIHksIHcsIGhdLCAgICAgICAgICAvLyBwaXhlbCBjb29yZHMgbWF0Y2hpbmcgdGhlIHNjcmVlbnNob3RcbiAqICAgICB0eXBlOiAgICAgICBQSUlfVFlQRS4qLFxuICogICAgIGNvbmZpZGVuY2U6IG51bWJlciwgICAgICAgICAgICAgICAgICAvLyAwXHUyMDEzMVxuICogICAgIHNvdXJjZTogICAgIFwiZG9tXCJ8XCJvY3JfcmVnZXhcInxcInZpc2lvblwifFwiZG9tK29jcl9yZWdleFwiLFxuICogICAgIG1hdGNoZWQ/OiAgIHN0cmluZywgICAgICAgICAgICAgICAgICAvLyB0aGUgbWF0Y2hlZCB0ZXh0IHNuaXBwZXQgKGRlYnVnKVxuICogICAgIGx1aG5WYWxpZD86IGJvb2xlYW4sICAgICAgICAgICAgICAgICAvLyBmb3IgQ0FSRCB0eXBlXG4gKiAgIH1cbiAqL1xuXG4vLyBcdTI1MDBcdTI1MDAgUElJIHR5cGUgY29uc3RhbnRzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZXhwb3J0IGNvbnN0IFBJSV9UWVBFID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBBU1NXT1JEOiAgICAgIFwiUEFTU1dPUkRcIixcbiAgRU1BSUw6ICAgICAgICAgXCJFTUFJTFwiLFxuICBQSE9ORTogICAgICAgICBcIlBIT05FXCIsXG4gIENBUkQ6ICAgICAgICAgIFwiQ0FSRFwiLFxuICBGQUNFOiAgICAgICAgICBcIkZBQ0VcIixcbiAgTkFNRTogICAgICAgICAgXCJOQU1FXCIsXG4gIEFBREhBQVI6ICAgICAgIFwiQUFESEFBUlwiLFxuICBQQU46ICAgICAgICAgICBcIlBBTlwiLFxuICBHU1RJTjogICAgICAgICBcIkdTVElOXCIsXG4gIElGU0M6ICAgICAgICAgIFwiSUZTQ1wiLFxuICBJTkRJQU5fTU9CSUxFOiBcIklORElBTl9NT0JJTEVcIixcbiAgT1RIRVJfUElJOiAgICAgXCJPVEhFUl9QSUlcIixcbn0pO1xuXG4vLyBSZW5kZXJpbmcgY29sb3VycyB1c2VkIGJ5IHBvcHVwIGFuZCB0ZXN0IGhhcm5lc3MgKGV4cG9ydGVkIGZvciByZXVzZSlcbmV4cG9ydCBjb25zdCBQSUlfQ09MT1JTID0ge1xuICBQQVNTV09SRDogICAgICB7IGZpbGw6IFwicmdiYSgyMjAsMzgsMzgsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VmNDQ0NFwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBFTUFJTDogICAgICAgICB7IGZpbGw6IFwicmdiYSgyMzQsODgsMTIsMC4zNSlcIiwgICBzdHJva2U6IFwiI2Y5NzMxNlwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBQSE9ORTogICAgICAgICB7IGZpbGw6IFwicmdiYSgyMDIsMTM4LDQsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VhYjMwOFwiLCB0ZXh0OiBcIiMwMDBcIiB9LFxuICBDQVJEOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSgyMTksMzksMTE5LDAuMzUpXCIsICBzdHJva2U6IFwiI2VjNDg5OVwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBGQUNFOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSg4LDE0NSwxNzgsMC4zNSlcIiwgICBzdHJva2U6IFwiIzA2YjZkNFwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBOQU1FOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSgxNDcsNTEsMjM0LDAuMzUpXCIsICBzdHJva2U6IFwiI2E4NTVmN1wiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBBQURIQUFSOiAgICAgICB7IGZpbGw6IFwicmdiYSgyMzQsODgsMTIsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VhNTgwY1wiLCB0ZXh0OiBcIiNmZmZcIiB9LCAvLyBTYWZmcm9uIC8gRGVlcCBPcmFuZ2VcbiAgUEFOOiAgICAgICAgICAgeyBmaWxsOiBcInJnYmEoMTYsMTg1LDEyOSwwLjM1KVwiLCAgc3Ryb2tlOiBcIiMxMGI5ODFcIiwgdGV4dDogXCIjZmZmXCIgfSwgLy8gRW1lcmFsZFxuICBHU1RJTjogICAgICAgICB7IGZpbGw6IFwicmdiYSg5OSwxMDIsMjQxLDAuMzUpXCIsICBzdHJva2U6IFwiIzYzNjZmMVwiLCB0ZXh0OiBcIiNmZmZcIiB9LCAvLyBJbmRpZ29cbiAgSUZTQzogICAgICAgICAgeyBmaWxsOiBcInJnYmEoMTQsMTY1LDIzMywwLjM1KVwiLCAgc3Ryb2tlOiBcIiMwZWE1ZTlcIiwgdGV4dDogXCIjZmZmXCIgfSwgLy8gQ3lhbiAvIFNreVxuICBJTkRJQU5fTU9CSUxFOiB7IGZpbGw6IFwicmdiYSgyMzQsMTc5LDgsMC4zNSlcIiwgIHN0cm9rZTogXCIjY2E4YTA0XCIsIHRleHQ6IFwiIzAwMFwiIH0sIC8vIEFtYmVyIEdvbGRcbiAgT1RIRVJfUElJOiAgICAgeyBmaWxsOiBcInJnYmEoMTAwLDExNiwxMzksMC4zNSlcIiwgc3Ryb2tlOiBcIiM2NDc0OGJcIiwgdGV4dDogXCIjZmZmXCIgfSxcbn07XG5cbi8vIFx1MjUwMFx1MjUwMCBWZXJob2VmZiBBbGdvcml0aG0gVGFibGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuY29uc3QgVkVSSE9FRkZfRCA9IFtcbiAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxuICBbMSwgMiwgMywgNCwgMCwgNiwgNywgOCwgOSwgNV0sXG4gIFsyLCAzLCA0LCAwLCAxLCA3LCA4LCA5LCA1LCA2XSxcbiAgWzMsIDQsIDAsIDEsIDIsIDgsIDksIDUsIDYsIDddLFxuICBbNCwgMCwgMSwgMiwgMywgOSwgNSwgNiwgNywgOF0sXG4gIFs1LCA5LCA4LCA3LCA2LCAwLCA0LCAzLCAyLCAxXSxcbiAgWzYsIDUsIDksIDgsIDcsIDEsIDAsIDQsIDMsIDJdLFxuICBbNywgNiwgNSwgOSwgOCwgMiwgMSwgMCwgNCwgM10sXG4gIFs4LCA3LCA2LCA1LCA5LCAzLCAyLCAxLCAwLCA0XSxcbiAgWzksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsIDBdXG5dO1xuXG5jb25zdCBWRVJIT0VGRl9QID0gW1xuICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0sXG4gIFsxLCA1LCA3LCA2LCAyLCA4LCAzLCAwLCA5LCA0XSxcbiAgWzUsIDgsIDAsIDMsIDcsIDksIDYsIDEsIDQsIDJdLFxuICBbOCwgOSwgMSwgNiwgMCwgNCwgMywgNSwgMiwgN10sXG4gIFs5LCA0LCA1LCAzLCAxLCAyLCA2LCA4LCA3LCAwXSxcbiAgWzQsIDIsIDgsIDYsIDUsIDcsIDMsIDksIDAsIDFdLFxuICBbMiwgNywgOSwgMywgOCwgMCwgNiwgNCwgMSwgNV0sXG4gIFs3LCAwLCA0LCA2LCA5LCAxLCAzLCAyLCA1LCA4XVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmhvZWZmQ2hlY2socmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGRpZ2l0cyA9IHJhdy5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gIGlmICghZGlnaXRzKSByZXR1cm4gZmFsc2U7XG4gIGxldCBjID0gMDtcbiAgY29uc3QgcmV2ZXJzZWQgPSBkaWdpdHMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLm1hcChOdW1iZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmVyc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IFZFUkhPRUZGX0RbY11bVkVSSE9FRkZfUFtpICUgOF1bcmV2ZXJzZWRbaV1dXTtcbiAgfVxuICByZXR1cm4gYyA9PT0gMDtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFN0cnVjdHVyYWwgVmFsaWRhdG9ycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBBQURIQUFSOiBleGFjdGx5IDEyIGRpZ2l0cywgZmlyc3QgZGlnaXQgMS05IGV4Y2x1ZGluZyBsZWFkaW5nIDAvMSAoaS5lLiBzdGFydHMgd2l0aCAyLTkpLFxuICogY29tbW9ubHkgZ3JvdXBlZCBpbiA0cyAoZS5nLiBcIlhYWFggWFhYWCBYWFhYXCIgb3IgXCJYWFhYWFhYWFhYWFhcIikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFhZGhhYXIocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcucmVwbGFjZSgvW1xcc1xcLV0vZywgXCJcIik7XG4gIGlmICghL15cXGR7MTJ9JC8udGVzdChjbGVhbmVkKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBmaXJzdCA9IGNsZWFuZWQuY2hhckF0KDApO1xuICBpZiAoZmlyc3QgPT09IFwiMFwiIHx8IGZpcnN0ID09PSBcIjFcIikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBQQU46IGV4YWN0bHkgMTAgY2hhcmFjdGVycyBtYXRjaGluZyBwYXR0ZXJuIFtBLVpdezV9WzAtOV17NH1bQS1aXXsxfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQQU4ocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChjbGVhbmVkLmxlbmd0aCAhPT0gMTApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIC9eW0EtWl17NX1bMC05XXs0fVtBLVpdJC8udGVzdChjbGVhbmVkKTtcbn1cblxuLyoqXG4gKiBHU1RJTjogMTUgY2hhcmFjdGVycywgZmlyc3QgMiBkaWdpdHMgYXJlIGEgdmFsaWQgc3RhdGUgY29kZSAoMDEtMzgpLFxuICogY2hhcmFjdGVycyAzLTEyIHN0cnVjdHVyYWxseSBtYXRjaCBhIFBBTi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlR1NUSU4ocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChjbGVhbmVkLmxlbmd0aCAhPT0gMTUpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3RhdGVDb2RlU3RyID0gY2xlYW5lZC5zbGljZSgwLCAyKTtcbiAgaWYgKCEvXlxcZHsyfSQvLnRlc3Qoc3RhdGVDb2RlU3RyKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzdGF0ZUNvZGUgPSBwYXJzZUludChzdGF0ZUNvZGVTdHIsIDEwKTtcbiAgaWYgKHN0YXRlQ29kZSA8IDEgfHwgc3RhdGVDb2RlID4gMzgpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcGFuUGFydCA9IGNsZWFuZWQuc2xpY2UoMiwgMTIpO1xuICBpZiAoIXZhbGlkYXRlUEFOKHBhblBhcnQpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHRhaWwgPSBjbGVhbmVkLnNsaWNlKDEyLCAxNSk7XG4gIHJldHVybiAvXlswLTlBLVpdWlswLTlBLVpdJC8udGVzdCh0YWlsKSB8fCAvXlswLTlBLVpdezN9JC8udGVzdCh0YWlsKTtcbn1cblxuLyoqXG4gKiBJRlNDOiAxMSBjaGFyYWN0ZXJzLCBwYXR0ZXJuIFtBLVpdezR9MFtBLVowLTldezZ9ICg1dGggY2hhcmFjdGVyIHN0cmljdGx5ICcwJylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSUZTQyhyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgY2xlYW5lZCA9IHJhdy50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgaWYgKGNsZWFuZWQubGVuZ3RoICE9PSAxMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gL15bQS1aXXs0fTBbQS1aMC05XXs2fSQvLnRlc3QoY2xlYW5lZCk7XG59XG5cbi8qKlxuICogSU5ESUFOX01PQklMRTogMTAgZGlnaXRzIHN0YXJ0aW5nIHdpdGggNiwgNywgOCwgb3IgOSwgb3B0aW9uYWxseSBwcmVmaXhlZCArOTEsIDkxLCBvciAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUluZGlhbk1vYmlsZShyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgY2xlYW5lZCA9IHJhdy50cmltKCkucmVwbGFjZSgvW1xcc1xcLVxcKFxcKV0vZywgXCJcIik7XG4gIHJldHVybiAvXig/OlxcKzkxfDkxfDApP1s2LTldXFxkezl9JC8udGVzdChjbGVhbmVkKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEx1aG4gYWxnb3JpdGhtIGZvciBjYXJkcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIGx1aG5DaGVjayhyYXcpIHtcbiAgY29uc3QgZGlnaXRzID0gcmF3LnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkubWFwKE51bWJlcik7XG4gIGlmIChkaWdpdHMubGVuZ3RoIDwgMTUpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3VtID0gZGlnaXRzLnJlZHVjZSgoYWNjLCBkLCBpKSA9PiB7XG4gICAgaWYgKGkgJSAyID09PSAxKSB7IGQgKj0gMjsgaWYgKGQgPiA5KSBkIC09IDk7IH1cbiAgICByZXR1cm4gYWNjICsgZDtcbiAgfSwgMCk7XG4gIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIElvVSBoZWxwZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBpb3UoYSwgYikge1xuICBjb25zdCBbYXgsIGF5LCBhdywgYWhdID0gYS5iYm94O1xuICBjb25zdCBbYngsIGJ5LCBidywgYmhdID0gYi5iYm94O1xuICBjb25zdCBpeCA9IE1hdGgubWF4KGF4LCBieCk7XG4gIGNvbnN0IGl5ID0gTWF0aC5tYXgoYXksIGJ5KTtcbiAgY29uc3QgaXcgPSBNYXRoLm1pbihheCArIGF3LCBieCArIGJ3KSAtIGl4O1xuICBjb25zdCBpaCA9IE1hdGgubWluKGF5ICsgYWgsIGJ5ICsgYmgpIC0gaXk7XG4gIGlmIChpdyA8PSAwIHx8IGloIDw9IDApIHJldHVybiAwO1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpdyAqIGloO1xuICBjb25zdCB1bmlvbiA9IGF3ICogYWggKyBidyAqIGJoIC0gaW50ZXJzZWN0aW9uO1xuICByZXR1cm4gdW5pb24gPiAwID8gaW50ZXJzZWN0aW9uIC8gdW5pb24gOiAwO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTWVyZ2Ugb3ZlcmxhcHBpbmcgZGV0ZWN0aW9ucyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmNvbnN0IElPVV9USFJFU0hPTEQgPSAwLjI1O1xuXG5mdW5jdGlvbiBtZXJnZVJlZ2lvbnMocmVnaW9ucykge1xuICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgY29uc3QgdXNlZCAgID0gbmV3IFNldCgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVnaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh1c2VkLmhhcyhpKSkgY29udGludWU7XG4gICAgY29uc3QgY2x1c3RlciA9IFtyZWdpb25zW2ldXTtcbiAgICB1c2VkLmFkZChpKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHJlZ2lvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh1c2VkLmhhcyhqKSkgY29udGludWU7XG4gICAgICBpZiAoaW91KHJlZ2lvbnNbaV0sIHJlZ2lvbnNbal0pID49IElPVV9USFJFU0hPTEQpIHtcbiAgICAgICAgY2x1c3Rlci5wdXNoKHJlZ2lvbnNbal0pO1xuICAgICAgICB1c2VkLmFkZChqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2x1c3Rlci5sZW5ndGggPT09IDEpIHtcbiAgICAgIG1lcmdlZC5wdXNoKGNsdXN0ZXJbMF0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gVW5pb24gYm91bmRpbmcgYm94IGFjcm9zcyBhbGwgY2x1c3RlciBtZW1iZXJzXG4gICAgY29uc3QgeHMgICAgPSBjbHVzdGVyLmZsYXRNYXAoKHIpID0+IFtyLmJib3hbMF0sIHIuYmJveFswXSArIHIuYmJveFsyXV0pO1xuICAgIGNvbnN0IHlzICAgID0gY2x1c3Rlci5mbGF0TWFwKChyKSA9PiBbci5iYm94WzFdLCByLmJib3hbMV0gKyByLmJib3hbM11dKTtcbiAgICBjb25zdCBtaW5YICA9IE1hdGgubWluKC4uLnhzKSwgbWluWSA9IE1hdGgubWluKC4uLnlzKTtcbiAgICBjb25zdCBtYXhYICA9IE1hdGgubWF4KC4uLnhzKSwgbWF4WSA9IE1hdGgubWF4KC4uLnlzKTtcblxuICAgIGNvbnN0IHNvdXJjZXMgPSBbLi4ubmV3IFNldChjbHVzdGVyLm1hcCgocikgPT4gci5zb3VyY2UpKV07XG4gICAgLy8gSGlnaGVzdC1wcmlvcml0eSBzb3VyY2UgKERPTSA+IE9DUiA+IHZpc2lvbilcbiAgICBjb25zdCBwcmlvcml0eSA9IFtcImRvbVwiLCBcIm9jcl9yZWdleFwiLCBcInZpc2lvblwiXTtcbiAgICAvLyBTcGVjaWZpYyBJbmRpYW4gdHlwZXMgcHJpb3JpdGl6ZWQgb3ZlciBnZW5lcmljIGZhbGxiYWNrIHR5cGVzXG4gICAgY29uc3QgdHlwZVByaW9yaXR5ID0gW1xuICAgICAgUElJX1RZUEUuUEFTU1dPUkQsXG4gICAgICBQSUlfVFlQRS5DQVJELFxuICAgICAgUElJX1RZUEUuQUFESEFBUixcbiAgICAgIFBJSV9UWVBFLkdTVElOLFxuICAgICAgUElJX1RZUEUuUEFOLFxuICAgICAgUElJX1RZUEUuSUZTQyxcbiAgICAgIFBJSV9UWVBFLklORElBTl9NT0JJTEUsXG4gICAgICBQSUlfVFlQRS5FTUFJTCxcbiAgICAgIFBJSV9UWVBFLlBIT05FLFxuICAgICAgUElJX1RZUEUuRkFDRSxcbiAgICAgIFBJSV9UWVBFLk5BTUUsXG4gICAgICBQSUlfVFlQRS5PVEhFUl9QSUksXG4gICAgXTtcblxuICAgIGNsdXN0ZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3JjRGlmZiA9IHByaW9yaXR5LmluZGV4T2YoYS5zb3VyY2UpIC0gcHJpb3JpdHkuaW5kZXhPZihiLnNvdXJjZSk7XG4gICAgICBpZiAoc3JjRGlmZiAhPT0gMCkgcmV0dXJuIHNyY0RpZmY7XG4gICAgICByZXR1cm4gdHlwZVByaW9yaXR5LmluZGV4T2YoYS50eXBlKSAtIHR5cGVQcmlvcml0eS5pbmRleE9mKGIudHlwZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXhDb25mID0gTWF0aC5tYXgoLi4uY2x1c3Rlci5tYXAoKHIpID0+IHIuY29uZmlkZW5jZSkpO1xuICAgIGNvbnN0IGJvb3N0ZWQgPSBNYXRoLm1pbigxLCBtYXhDb25mICsgKHNvdXJjZXMubGVuZ3RoIC0gMSkgKiAwLjA4KTtcblxuICAgIG1lcmdlZC5wdXNoKHtcbiAgICAgIGJib3g6ICAgICAgIFttaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblldLFxuICAgICAgdHlwZTogICAgICAgY2x1c3RlclswXS50eXBlLFxuICAgICAgY29uZmlkZW5jZTogK2Jvb3N0ZWQudG9GaXhlZCgzKSxcbiAgICAgIHNvdXJjZTogICAgIHNvdXJjZXMubGVuZ3RoID09PSAxID8gc291cmNlc1swXSA6IHNvdXJjZXMuam9pbihcIitcIiksXG4gICAgICBfY2x1c3RlcjogICBjbHVzdGVyLm1hcCgoeyB0eXBlLCBzb3VyY2UsIGNvbmZpZGVuY2UgfSkgPT4gKHsgdHlwZSwgc291cmNlLCBjb25maWRlbmNlIH0pKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBQYXNzIDEgXHUyMDE0IERPTSBzY2FuIHJlc3VsdHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBwYXNzRE9NKGRvbVJlZ2lvbnMpIHtcbiAgcmV0dXJuIChkb21SZWdpb25zID8/IFtdKS5tYXAoKHIpID0+ICh7XG4gICAgYmJveDogICAgICAgci5iYm94LFxuICAgIHR5cGU6ICAgICAgIHIudHlwZSxcbiAgICBjb25maWRlbmNlOiByLmNvbmZpZGVuY2UgPz8gMS4wLFxuICAgIHNvdXJjZTogICAgIFwiZG9tXCIsXG4gIH0pKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFBhc3MgMiBcdTIwMTQgT0NSLXJlZ2V4IHdpdGggU3RydWN0dXJhbCBWYWxpZGF0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gcGFzc09DUihvY3JEZXRlY3Rpb25zKSB7XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGRldCBvZiBvY3JEZXRlY3Rpb25zID8/IFtdKSB7XG4gICAgaWYgKGRldC50eXBlICE9PSBcInRleHRcIikgY29udGludWU7XG4gICAgY29uc3QgdGV4dCA9IGRldC5sYWJlbF9vcl90ZXh0ID8/IFwiXCI7XG4gICAgY29uc3QgYmJveCA9IGRldC5iYm94O1xuXG4gICAgLy8gMS4gR1NUSU4gKDE1IGNoYXJzKSBcdTIwMTQgdGVzdGVkIGJlZm9yZSBQQU4gc28gUEFOIGlzIG5vdCBpc29sYXRlZCBmcm9tIGEgR1NUSU5cbiAgICBjb25zdCBnc3Rpbk1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGIoMFsxLTldfFsxMl1bMC05XXwzWzAtOF0pW0EtWl17NX1bMC05XXs0fVtBLVpdWzAtOUEtWl17M31cXGIvZ2kpO1xuICAgIGZvciAoY29uc3QgbSBvZiBnc3Rpbk1hdGNoZXMpIHtcbiAgICAgIGlmICh2YWxpZGF0ZUdTVElOKG1bMF0pKSB7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuR1NUSU4sXG4gICAgICAgICAgY29uZmlkZW5jZTogMC45NixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gUEFOICgxMCBjaGFycylcbiAgICBjb25zdCBwYW5NYXRjaGVzID0gdGV4dC5tYXRjaEFsbCgvXFxiW0EtWl17NX1bMC05XXs0fVtBLVpdXFxiL2dpKTtcbiAgICBmb3IgKGNvbnN0IG0gb2YgcGFuTWF0Y2hlcykge1xuICAgICAgY29uc3QgaXNQYXJ0T2ZHc3RpbiA9IGhpdHMuc29tZShoID0+IGgudHlwZSA9PT0gUElJX1RZUEUuR1NUSU4gJiYgaC5tYXRjaGVkPy5pbmNsdWRlcyhtWzBdLnRvVXBwZXJDYXNlKCkpKTtcbiAgICAgIGlmICghaXNQYXJ0T2ZHc3RpbiAmJiB2YWxpZGF0ZVBBTihtWzBdKSkge1xuICAgICAgICBoaXRzLnB1c2goe1xuICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLlBBTixcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjk0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBBQURIQUFSICgxMiBkaWdpdHMsIGdyb3VwZWQgb3IgcmF3LCBmaXJzdCBkaWdpdCAyLTkpXG4gICAgY29uc3QgYWFkaGFhck1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGJbMi05XVxcZHszfVtcXHNcXC1dP1swLTldezR9W1xcc1xcLV0/WzAtOV17NH1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIGFhZGhhYXJNYXRjaGVzKSB7XG4gICAgICBpZiAodmFsaWRhdGVBYWRoYWFyKG1bMF0pKSB7XG4gICAgICAgIGNvbnN0IHZWYWxpZCA9IHZlcmhvZWZmQ2hlY2sobVswXSk7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRyaW0oKSxcbiAgICAgICAgICB2ZXJob2VmZlZhbGlkOiB2VmFsaWQsXG4gICAgICAgICAgdHlwZTogICAgICAgICAgUElJX1RZUEUuQUFESEFBUixcbiAgICAgICAgICBjb25maWRlbmNlOiAgICB2VmFsaWQgPyAwLjk2IDogMC45MSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gSUZTQyAoMTEgY2hhcnMsIDV0aCBkaWdpdCAnMCcpXG4gICAgY29uc3QgaWZzY01hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGJbQS1aXXs0fTBbQS1aMC05XXs2fVxcYi9naSk7XG4gICAgZm9yIChjb25zdCBtIG9mIGlmc2NNYXRjaGVzKSB7XG4gICAgICBpZiAodmFsaWRhdGVJRlNDKG1bMF0pKSB7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuSUZTQyxcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjk0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBJTkRJQU5fTU9CSUxFXG4gICAgY29uc3QgbW9iaWxlTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoLyg/Oig/OlxcKzkxfDApW1xcc1xcLV0/KT9bNi05XVxcZHs0fVtcXHNcXC1dP1xcZHs1fVxcYnwoPzpcXCs5MVtcXHNcXC1dPyk/WzYtOV1cXGR7OX1cXGJ8XFxiWzYtOV1cXGR7OX1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIG1vYmlsZU1hdGNoZXMpIHtcbiAgICAgIGlmICh2YWxpZGF0ZUluZGlhbk1vYmlsZShtWzBdKSkge1xuICAgICAgICBoaXRzLnB1c2goe1xuICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50cmltKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuSU5ESUFOX01PQklMRSxcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjkyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA2LiBFTUFJTFxuICAgIGNvbnN0IGVtYWlsTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoL1thLXpBLVowLTkuXyUrXFwtXStAW2EtekEtWjAtOS5cXC1dK1xcLlthLXpBLVpdezIsfS9nKTtcbiAgICBmb3IgKGNvbnN0IG0gb2YgZW1haWxNYXRjaGVzKSB7XG4gICAgICBoaXRzLnB1c2goe1xuICAgICAgICBiYm94LCBzb3VyY2U6IFwib2NyX3JlZ2V4XCIsIG1hdGNoZWQ6IG1bMF0sXG4gICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkVNQUlMLFxuICAgICAgICBjb25maWRlbmNlOiAwLjk1LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gNy4gR2VuZXJpYyBQSE9ORSAoaWYgbm90IGFscmVhZHkgbWF0Y2hlZCBhcyBJTkRJQU5fTU9CSUxFKVxuICAgIGNvbnN0IHBob25lTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoLyg/Oig/OlxcKzkxfDAwOTF8MClbXFxzXFwtXT8pP1s2LTldXFxkezl9fCg/OlxcK1xcZHsxLDN9W1xcc1xcLV0/KT9cXCg/XFxkezIsNH1cXCk/W1xcc1xcLV0/XFxkezMsNH1bXFxzXFwtXT9cXGR7NH0vZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIHBob25lTWF0Y2hlcykge1xuICAgICAgY29uc3QgZGlnaXRzID0gbVswXS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICBpZiAoZGlnaXRzLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICBjb25zdCBhbHJlYWR5TW9iaWxlID0gaGl0cy5zb21lKGggPT4gaC50eXBlID09PSBQSUlfVFlQRS5JTkRJQU5fTU9CSUxFICYmIGgubWF0Y2hlZD8uaW5jbHVkZXMoZGlnaXRzLnNsaWNlKC0xMCkpKTtcbiAgICAgICAgaWYgKCFhbHJlYWR5TW9iaWxlKSB7XG4gICAgICAgICAgaGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50cmltKCksXG4gICAgICAgICAgICB0eXBlOiAgICAgICBQSUlfVFlQRS5QSE9ORSxcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuODIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA4LiBDQVJEIG51bWJlciB3aXRoIEx1aG4gdmVyaWZpY2F0aW9uXG4gICAgY29uc3QgY2FyZE1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGIoPzpcXGR7NH1bXFxzXFwtXT8pezN9XFxkezR9XFxifFxcYlxcZHsxNSwxNn1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIGNhcmRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBkaWdpdHMgPSBtWzBdLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgIGlmIChkaWdpdHMubGVuZ3RoID49IDE1KSB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gbHVobkNoZWNrKGRpZ2l0cyk7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLCBsdWhuVmFsaWQ6IHZhbGlkLFxuICAgICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkNBUkQsXG4gICAgICAgICAgY29uZmlkZW5jZTogdmFsaWQgPyAwLjkzIDogMC43MixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhpdHM7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBQYXNzIDMgXHUyMDE0IEZhY2UgZGV0ZWN0aW9ucyAoZnJvbSBCbGF6ZUZhY2UpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gcGFzc0ZhY2UoZmFjZURldGVjdGlvbnMpIHtcbiAgcmV0dXJuIChmYWNlRGV0ZWN0aW9ucyA/PyBbXSlcbiAgICAuZmlsdGVyKChmKSA9PiB7XG4gICAgICBjb25zdCBbeCwgeSwgdywgaF0gPSBmLmJib3ggfHwgW107XG4gICAgICBpZiAoIXcgfHwgIWggfHwgdyA8IDI0IHx8IGggPCAyNCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgYXNwZWN0ID0gdyAvIGg7XG4gICAgICBpZiAoYXNwZWN0IDwgMC41NSB8fCBhc3BlY3QgPiAxLjQwKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKGYuY29uZmlkZW5jZSA/PyAwKSA+PSAwLjg1O1xuICAgIH0pXG4gICAgLm1hcCgoZikgPT4gKHtcbiAgICAgIGJib3g6ICAgICAgIGYuYmJveCxcbiAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkZBQ0UsXG4gICAgICBjb25maWRlbmNlOiArTnVtYmVyKGYuY29uZmlkZW5jZSkudG9GaXhlZCg0KSxcbiAgICAgIHNvdXJjZTogICAgIFwidmlzaW9uXCIsXG4gICAgfSkpO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgUHVibGljIEFQSSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbi8qKlxuICogZGV0ZWN0U2Vuc2l0aXZlUmVnaW9uc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYXJhbXMuZG9tUmVnaW9ucyAgICAgXHUyMDE0IGZyb20gY29udGVudC5qcyBTQ0FOX0RPTSAocHJlLURQUi1zY2FsZWQpXG4gKiBAcGFyYW0ge0FycmF5fSAgcGFyYW1zLm9jckRldGVjdGlvbnMgIFx1MjAxNCBmcm9tIEZsb3JlbmNlLTIgYW5hbHl6ZUltYWdlKClcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYXJhbXMuZmFjZURldGVjdGlvbnMgXHUyMDE0IGZyb20gZmFjZS5qcyBkZXRlY3RGYWNlcygpXG4gKiBAcmV0dXJucyB7U2Vuc2l0aXZlUmVnaW9uW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTZW5zaXRpdmVSZWdpb25zKHsgZG9tUmVnaW9ucywgb2NyRGV0ZWN0aW9ucywgZmFjZURldGVjdGlvbnMgfSkge1xuICBjb25zb2xlLmxvZyhcIltQSUldID09PSBkZXRlY3RTZW5zaXRpdmVSZWdpb25zIElOVk9LRUQgPT09XCIpO1xuICBjb25zb2xlLmxvZyhgW1BJSV0gUmF3IElucHV0cyAtPiBkb21SZWdpb25zOiAkeyhkb21SZWdpb25zID8/IFtdKS5sZW5ndGh9LCBvY3JEZXRlY3Rpb25zOiAkeyhvY3JEZXRlY3Rpb25zID8/IFtdKS5sZW5ndGh9LCBmYWNlRGV0ZWN0aW9uczogJHsoZmFjZURldGVjdGlvbnMgPz8gW10pLmxlbmd0aH1gKTtcblxuICBjb25zdCBkb21IaXRzICA9IHBhc3NET00oZG9tUmVnaW9ucyk7XG4gIGNvbnN0IG9jckhpdHMgID0gcGFzc09DUihvY3JEZXRlY3Rpb25zKTtcbiAgY29uc3QgZmFjZUhpdHMgPSBwYXNzRmFjZShmYWNlRGV0ZWN0aW9ucyk7XG5cbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMTogRE9NIFBhc3NdIFJhdyBvdXRwdXQgKCR7ZG9tSGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBkb21IaXRzKTtcbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMjogT0NSIFBhc3NdIFJhdyBvdXRwdXQgKCR7b2NySGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBvY3JIaXRzKTtcbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMzogVmlzaW9uL0ZhY2UgUGFzc10gUmF3IG91dHB1dCAoJHtmYWNlSGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBmYWNlSGl0cyk7XG5cbiAgY29uc3QgYWxsID0gWy4uLmRvbUhpdHMsIC4uLm9jckhpdHMsIC4uLmZhY2VIaXRzXTtcbiAgY29uc29sZS5sb2coYFtQSUldIENvbWJpbmVkIHVubWVyZ2VkIGNhbmRpZGF0ZXMgKCR7YWxsLmxlbmd0aH0gdG90YWwgZnJvbSBET00gKyBPQ1IgKyBWaXNpb24pOmAsIGFsbCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gbWVyZ2VSZWdpb25zKGFsbCk7XG5cbiAgY29uc29sZS5sb2coXG4gICAgYFtQSUldIEZpbmFsIG1lcmdlZCBzZW5zaXRpdmUgcmVnaW9uKHMpOiAke3Jlc3VsdC5sZW5ndGh9YCArXG4gICAgYCAoZG9tOiR7ZG9tSGl0cy5sZW5ndGh9LCBvY3I6JHtvY3JIaXRzLmxlbmd0aH0sIGZhY2U6JHtmYWNlSGl0cy5sZW5ndGh9KVxcbmAgK1xuICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4iLCAiLyoqXG4gKiBtYXNrRW5naW5lLmpzIFx1MjAxNCBPbi1QYWdlIFJlYWwtVGltZSBTZW5zaXRpdmUgRGF0YSBNYXNraW5nIEVuZ2luZSBmb3IgU2FraGFcbiAqXG4gKiBSdW5zIGxvY2FsbHkgb24gYW55IHdlYnBhZ2UgKHplcm8gc2VydmVyIHRyYW5zbWlzc2lvbikuXG4gKiBTY2FucyB0ZXh0IG5vZGVzLCBpbnB1dCBmaWVsZHMsIGFuZCB0YWJsZXMgdG8gbWFzazpcbiAqIC0gQWFkaGFhciAoVmVyaG9lZmYtdmFsaWRhdGVkIDEyLWRpZ2l0IG51bWJlcnMpXG4gKiAtIFBBTiAoMTAtY2hhciB1cHBlcmNhc2Ugc3RydWN0dXJhbCBtYXRjaCBbQS1aXXs1fVswLTldezR9W0EtWl0pXG4gKiAtIENyZWRpdC9EZWJpdCBDYXJkIE51bWJlcnMgKDEzLTE5IGRpZ2l0cywgTHVobiB2YWxpZGF0ZWQpXG4gKiAtIElGU0MgQ29kZXMgKFtBLVpdezR9MFtBLVowLTldezZ9KVxuICogLSBQaG9uZSBudW1iZXJzIChJbmRpYW4gbW9iaWxlIG51bWJlcnMgNi05eHh4eHh4eHgpXG4gKiAtIFVQSSBJRHMgKHVzZXJAYmFuayBmb3JtYXQpXG4gKlxuICogVGFwLXRvLXJldmVhbCBvdmVybGF5OiBDU1MgYmx1ciBvdmVybGF5IHRoYXQgcmV2ZWFscyBvbiBjbGljay5cbiAqIFN0cmljdGx5IHByZXNlcnZlcyBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uIHZhbHVlIChuZXZlciBjbGVhcnMgb3IgYWx0ZXJzIGlucHV0LnZhbHVlKS5cbiAqL1xuXG5pbXBvcnQgeyB2ZXJob2VmZkNoZWNrLCB2YWxpZGF0ZVBBTiwgdmFsaWRhdGVJRlNDLCB2YWxpZGF0ZUluZGlhbk1vYmlsZSB9IGZyb20gXCIuL3BpaS5qc1wiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG4uanNcIjtcblxuLy8gQWNjdXJhdGUgTHVobiBjaGVjayBtYXRjaGluZyBwaWkuanNcbmZ1bmN0aW9uIGx1aG5DaGVjayhyYXcpIHtcbiAgY29uc3QgZGlnaXRzID0gcmF3LnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkubWFwKE51bWJlcik7XG4gIGlmIChkaWdpdHMubGVuZ3RoIDwgMTMgfHwgZGlnaXRzLmxlbmd0aCA+IDE5KSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN1bSA9IGRpZ2l0cy5yZWR1Y2UoKGFjYywgZCwgaSkgPT4ge1xuICAgIGlmIChpICUgMiA9PT0gMSkgeyBkICo9IDI7IGlmIChkID4gOSkgZCAtPSA5OyB9XG4gICAgcmV0dXJuIGFjYyArIGQ7XG4gIH0sIDApO1xuICByZXR1cm4gc3VtICUgMTAgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVQSShyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIC9eW2EtekEtWjAtOS5cXC1fXXsyLDI1Nn1AW2EtekEtWl17Miw2NH0kLy50ZXN0KHJhdy50cmltKCkpO1xufVxuXG4vKipcbiAqIFNjYW4gcmF3IHN0cmluZyBhbmQgaWRlbnRpZnkgYWxsIHNlbnNpdGl2ZSBzcGFucyB3aXRoIHRoZWlyIHJlcGxhY2VtZW50IG1hc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZ5U2Vuc2l0aXZlU3BhbnModGV4dCkge1xuICBpZiAoIXRleHQgfHwgdHlwZW9mIHRleHQgIT09IFwic3RyaW5nXCIpIHJldHVybiBbXTtcbiAgY29uc3Qgc3BhbnMgPSBbXTtcblxuICAvLyAxLiBBYWRoYWFyICgxMiBkaWdpdHMsIG9wdGlvbmFsIHNwYWNlcy9oeXBoZW5zKVxuICBjb25zdCBhYWRoYWFyUmVnZXggPSAvXFxiKFsyLTldXFxkezN9W1xcc1xcLV0/XFxkezR9W1xcc1xcLV0/XFxkezR9KVxcYi9nO1xuICBsZXQgbTtcbiAgd2hpbGUgKChtID0gYWFkaGFhclJlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBjb25zdCBjbGVhbiA9IHJhdy5yZXBsYWNlKC9bXFxzXFwtXS9nLCBcIlwiKTtcbiAgICBpZiAoY2xlYW4ubGVuZ3RoID09PSAxMiAmJiB2ZXJob2VmZkNoZWNrKGNsZWFuKSkge1xuICAgICAgc3BhbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IFwiQUFESEFBUlwiLFxuICAgICAgICByYXcsXG4gICAgICAgIG1hc2tlZDogXCJYWFhYIFhYWFggXCIgKyBjbGVhbi5zbGljZSg4KSxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIDIuIENhcmQgbnVtYmVycyAoMTMtMTkgZGlnaXRzLCBMdWhuIHZhbGlkYXRlZClcbiAgY29uc3QgY2FyZFJlZ2V4ID0gL1xcYihcXGR7NH1bXFxzXFwtXT9cXGR7NH1bXFxzXFwtXT9cXGR7NH1bXFxzXFwtXT9cXGR7MSw3fSlcXGIvZztcbiAgd2hpbGUgKChtID0gY2FyZFJlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBjb25zdCBjbGVhbiA9IHJhdy5yZXBsYWNlKC9bXFxzXFwtXS9nLCBcIlwiKTtcbiAgICBpZiAobHVobkNoZWNrKGNsZWFuKSkge1xuICAgICAgLy8gYXZvaWQgcmUtbWFza2luZyBhbiBhbHJlYWR5IG1hdGNoZWQgQWFkaGFhclxuICAgICAgY29uc3Qgb3ZlcmxhcHMgPSBzcGFucy5zb21lKHMgPT4gcy5zdGFydCA8PSBtLmluZGV4ICYmIHMuZW5kID49IG0uaW5kZXggKyByYXcubGVuZ3RoKTtcbiAgICAgIGlmICghb3ZlcmxhcHMpIHtcbiAgICAgICAgc3BhbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogXCJDQVJEXCIsXG4gICAgICAgICAgcmF3LFxuICAgICAgICAgIG1hc2tlZDogXCJcdTIwMjJcdTIwMjJcdTIwMjJcdTIwMjIgXHUyMDIyXHUyMDIyXHUyMDIyXHUyMDIyIFx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMiBcIiArIGNsZWFuLnNsaWNlKC00KSxcbiAgICAgICAgICBzdGFydDogbS5pbmRleCxcbiAgICAgICAgICBlbmQ6IG0uaW5kZXggKyByYXcubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDMuIFBBTiAoNSBsZXR0ZXJzLCA0IGRpZ2l0cywgMSBsZXR0ZXIpXG4gIGNvbnN0IHBhblJlZ2V4ID0gL1xcYihbQS1aXXs1fVswLTldezR9W0EtWl0pXFxiL2dpO1xuICB3aGlsZSAoKG0gPSBwYW5SZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJhdyA9IG1bMV07XG4gICAgaWYgKHZhbGlkYXRlUEFOKHJhdykpIHtcbiAgICAgIHNwYW5zLnB1c2goe1xuICAgICAgICB0eXBlOiBcIlBBTlwiLFxuICAgICAgICByYXcsXG4gICAgICAgIG1hc2tlZDogcmF3LnNsaWNlKDAsIDIpICsgXCJYWFhYWFwiICsgcmF3LnNsaWNlKC0xKSxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIElGU0MgKFtBLVpdezR9MFtBLVowLTldezZ9KVxuICBjb25zdCBpZnNjUmVnZXggPSAvXFxiKFtBLVpdezR9MFtBLVowLTldezZ9KVxcYi9naTtcbiAgd2hpbGUgKChtID0gaWZzY1JlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBpZiAodmFsaWRhdGVJRlNDKHJhdykpIHtcbiAgICAgIHNwYW5zLnB1c2goe1xuICAgICAgICB0eXBlOiBcIklGU0NcIixcbiAgICAgICAgcmF3LFxuICAgICAgICBtYXNrZWQ6IHJhdy5zbGljZSgwLCA0KSArIFwiMFx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlwiLFxuICAgICAgICBzdGFydDogbS5pbmRleCxcbiAgICAgICAgZW5kOiBtLmluZGV4ICsgcmF3Lmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gNS4gVVBJIElEXG4gIGNvbnN0IHVwaVJlZ2V4ID0gL1xcYihbYS16QS1aMC05LlxcLV9dezIsNjR9QFthLXpBLVpdezIsMzJ9KVxcYi9nO1xuICB3aGlsZSAoKG0gPSB1cGlSZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJhdyA9IG1bMV07XG4gICAgLy8gSWdub3JlIHN0YW5kYXJkIGVtYWlsIGRvbWFpbnNcbiAgICBpZiAoIXJhdy5lbmRzV2l0aChcIkBnbWFpbC5jb21cIikgJiYgIXJhdy5lbmRzV2l0aChcIkB5YWhvby5jb21cIikgJiYgIXJhdy5lbmRzV2l0aChcIkBvdXRsb29rLmNvbVwiKSAmJiAhcmF3LmVuZHNXaXRoKFwiQGhvdG1haWwuY29tXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHJhdy5zcGxpdChcIkBcIik7XG4gICAgICBjb25zdCBtYXNrZWRVc2VyID0gcGFydHNbMF0ubGVuZ3RoID4gMiA/IHBhcnRzWzBdLnNsaWNlKDAsIDIpICsgXCJcdTIwMjJcdTIwMjJcdTIwMjJcIiA6IFwiXHUyMDIyXHUyMDIyXCI7XG4gICAgICBzcGFucy5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJVUElfSURcIixcbiAgICAgICAgcmF3LFxuICAgICAgICBtYXNrZWQ6IGAke21hc2tlZFVzZXJ9QCR7cGFydHNbMV19YCxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNvcnQgYnkgc3RhcnRpbmcgaW5kZXhcbiAgcmV0dXJuIHNwYW5zLnNvcnQoKGEsIGIpID0+IGEuc3RhcnQgLSBiLnN0YXJ0KTtcbn1cblxuLyoqXG4gKiBNYXNrIHRleHQgY29udGVudCwgcmV0dXJuaW5nIHNhbml0aXplZCBtYXNrZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXNrU2Vuc2l0aXZlVGV4dCh0ZXh0KSB7XG4gIGlmICghdGV4dCkgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IHNwYW5zID0gaWRlbnRpZnlTZW5zaXRpdmVTcGFucyh0ZXh0KTtcbiAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRleHQ7XG5cbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGxldCBsYXN0SWR4ID0gMDtcbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgcmVzdWx0ICs9IHRleHQuc2xpY2UobGFzdElkeCwgc3Bhbi5zdGFydCkgKyBzcGFuLm1hc2tlZDtcbiAgICBsYXN0SWR4ID0gc3Bhbi5lbmQ7XG4gIH1cbiAgcmVzdWx0ICs9IHRleHQuc2xpY2UobGFzdElkeCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXBwbHkgbGl2ZSBET00gTWFza2luZyBPdmVybGF5IG9uIGFueSB3ZWJwYWdlIChDb250ZW50IHNjcmlwdCBjb250ZXh0KVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYWdlTWFza2luZyhkb2N1bWVudFJvb3QgPSBkb2N1bWVudCwgbGFuZyA9IFwiZW5cIikge1xuICBpZiAoIWRvY3VtZW50Um9vdCB8fCAhZG9jdW1lbnRSb290LmJvZHkpIHJldHVybiB7IG1hc2tlZElucHV0czogMCwgbWFza2VkVGV4dE5vZGVzOiAwIH07XG5cbiAgbGV0IG1hc2tlZElucHV0cyA9IDA7XG4gIGxldCBtYXNrZWRUZXh0Tm9kZXMgPSAwO1xuXG4gIC8vIDEuIE1hc2sgSW5wdXQgRmllbGRzIChWaXN1YWwgb3ZlcmxheSBvbmx5IC0gRE9FUyBOT1QgTVVUQVRFIGlucHV0LnZhbHVlKVxuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudFJvb3QucXVlcnlTZWxlY3RvckFsbChcImlucHV0Om5vdChbdHlwZT0naGlkZGVuJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nYnV0dG9uJ10pXCIpO1xuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zYWtoYS1tb25pdG9yZWRcIikpIHJldHVybjtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNha2hhLW1vbml0b3JlZFwiLCBcInRydWVcIik7XG5cbiAgICBjb25zdCBjaGVja0FuZE1hc2tJbnB1dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgaWYgKCF2YWwpIHJldHVybjtcbiAgICAgIGNvbnN0IHNwYW5zID0gaWRlbnRpZnlTZW5zaXRpdmVTcGFucyh2YWwpO1xuICAgICAgaWYgKHNwYW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gQXBwbHkgYmx1ciBzdHlsZSBkaXJlY3RseSB0byBpbnB1dCB3aGVuIG5vdCBmb2N1c2VkXG4gICAgICAgIGNvbnN0IGFjdGl2ZUVsID0gZG9jdW1lbnRSb290LmFjdGl2ZUVsZW1lbnQgfHwgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgOiBudWxsKTtcbiAgICAgICAgaWYgKGFjdGl2ZUVsICE9PSBpbnB1dCkge1xuICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJzYWtoYS1tYXNrZWQtaW5wdXRcIik7XG4gICAgICAgICAgaW5wdXQudGl0bGUgPSB0KFwibWFza2VkX2JhZGdlXCIsIGxhbmcpO1xuICAgICAgICB9XG4gICAgICAgIG1hc2tlZElucHV0cysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNha2hhLW1hc2tlZC1pbnB1dFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJzYWtoYS1tYXNrZWQtaW5wdXRcIik7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgY2hlY2tBbmRNYXNrSW5wdXQoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRWwgPSBkb2N1bWVudFJvb3QuYWN0aXZlRWxlbWVudCB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6IG51bGwpO1xuICAgICAgaWYgKGFjdGl2ZUVsICE9PSBpbnB1dCkgY2hlY2tBbmRNYXNrSW5wdXQoKTtcbiAgICB9KTtcblxuICAgIGNoZWNrQW5kTWFza0lucHV0KCk7XG4gIH0pO1xuXG4gIC8vIDIuIE1hc2sgU3RhdGljIFRleHQgaW4gRE9NIEVsZW1lbnRzICh0YWJsZXMsIHBhcmFncmFwaHMsIHNwYW5zKVxuICBjb25zdCBTSE9XX1RFWFQgPSAodHlwZW9mIE5vZGVGaWx0ZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgTm9kZUZpbHRlci5TSE9XX1RFWFQpID8gTm9kZUZpbHRlci5TSE9XX1RFWFQgOiA0O1xuICBjb25zdCBGSUxURVJfQUNDRVBUID0gKHR5cGVvZiBOb2RlRmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmIE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiAxO1xuICBjb25zdCBGSUxURVJfUkVKRUNUID0gKHR5cGVvZiBOb2RlRmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmIE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVCkgPyBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1QgOiAyO1xuXG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50Um9vdC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIGRvY3VtZW50Um9vdC5ib2R5LFxuICAgIFNIT1dfVEVYVCxcbiAgICB7XG4gICAgICBhY2NlcHROb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLm5vZGVWYWx1ZSB8fCAhbm9kZS5ub2RlVmFsdWUudHJpbSgpKSByZXR1cm4gRklMVEVSX1JFSkVDVDtcbiAgICAgICAgY29uc3QgcGFyZW50VGFnID0gbm9kZS5wYXJlbnRFbGVtZW50Py50YWdOYW1lPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoW1wic2NyaXB0XCIsIFwic3R5bGVcIiwgXCJub3NjcmlwdFwiLCBcInRleHRhcmVhXCIsIFwiaW5wdXRcIl0uaW5jbHVkZXMocGFyZW50VGFnKSkge1xuICAgICAgICAgIHJldHVybiBGSUxURVJfUkVKRUNUO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJzYWtoYS10YXAtbWFza1wiKSkge1xuICAgICAgICAgIHJldHVybiBGSUxURVJfUkVKRUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGSUxURVJfQUNDRVBUO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICBjb25zdCB0ZXh0Tm9kZXNUb01hc2sgPSBbXTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICBjb25zdCBzcGFucyA9IGlkZW50aWZ5U2Vuc2l0aXZlU3BhbnMobm9kZS5ub2RlVmFsdWUpO1xuICAgIGlmIChzcGFucy5sZW5ndGggPiAwKSB7XG4gICAgICB0ZXh0Tm9kZXNUb01hc2sucHVzaCh7IG5vZGUsIHNwYW5zIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgaXRlbSBvZiB0ZXh0Tm9kZXNUb01hc2spIHtcbiAgICBjb25zdCB7IG5vZGUsIHNwYW5zIH0gPSBpdGVtO1xuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCkgY29udGludWU7XG5cbiAgICBjb25zdCBmdWxsVGV4dCA9IG5vZGUubm9kZVZhbHVlO1xuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudFJvb3QuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGxldCBjdXIgPSAwO1xuXG4gICAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgICBpZiAoc3Bhbi5zdGFydCA+IGN1cikge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGRvY3VtZW50Um9vdC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dC5zbGljZShjdXIsIHNwYW4uc3RhcnQpKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBUYXAtdG8tUmV2ZWFsIGlubGluZSBiYWRnZSAoS2V5Ym9hcmQgYWNjZXNzaWJsZSlcbiAgICAgIGNvbnN0IG1hc2tTcGFuID0gZG9jdW1lbnRSb290LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbWFza1NwYW4uY2xhc3NOYW1lID0gXCJzYWtoYS10YXAtbWFzayBzYWtoYS1ibHVycmVkXCI7XG4gICAgICBtYXNrU3Bhbi50YWJJbmRleCA9IDA7IC8vIEFjY2Vzc2libGUgdmlhIGtleWJvYXJkIFRhYlxuICAgICAgbWFza1NwYW4udGV4dENvbnRlbnQgPSBzcGFuLnJhdztcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtcmF3LXZhbHVlXCIsIHNwYW4ucmF3KTtcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtbWFza2VkLXZhbHVlXCIsIHNwYW4ubWFza2VkKTtcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICBtYXNrU3Bhbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGAke3QoXCJtYXNrZWRfYmFkZ2VcIiwgbGFuZyl9IFx1MjAxNCAke3QoXCJ0YXBfdG9fcmV2ZWFsXCIsIGxhbmcpfWApO1xuICAgICAgbWFza1NwYW4uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYCR7dChcIm1hc2tlZF9iYWRnZVwiLCBsYW5nKX0gXHUyMDE0ICR7dChcInRhcF90b19yZXZlYWxcIiwgbGFuZyl9YCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZVJldmVhbCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbWFza1NwYW4uY2xhc3NMaXN0LnRvZ2dsZShcInNha2hhLWJsdXJyZWRcIik7XG4gICAgICAgIG1hc2tTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJzYWtoYS1yZXZlYWxlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIE1vdXNlIHRhcFxuICAgICAgbWFza1NwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVJldmVhbCk7XG5cbiAgICAgIC8vIEtleWJvYXJkIHRvZ2dsZSAoRW50ZXIgb3IgU3BhY2UpXG4gICAgICBtYXNrU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICB0b2dnbGVSZXZlYWwoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKG1hc2tTcGFuKTtcbiAgICAgIGN1ciA9IHNwYW4uZW5kO1xuICAgICAgbWFza2VkVGV4dE5vZGVzKys7XG4gICAgfVxuXG4gICAgaWYgKGN1ciA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgZnJhZy5hcHBlbmRDaGlsZChkb2N1bWVudFJvb3QuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQuc2xpY2UoY3VyKSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZnJhZywgbm9kZSk7XG4gIH1cblxuICByZXR1cm4geyBtYXNrZWRJbnB1dHMsIG1hc2tlZFRleHROb2RlcyB9O1xufVxuIiwgIi8qKlxuICogZXZlbnRMb2dnZXIuanMgXHUyMDE0IExvY2FsLU9ubHkgUGlsb3QgRXZlbnQgTG9nZ2VyIGZvciBTYWtoYVxuICpcbiAqIFByaXZhY3kgR3VhcmFudGVlczpcbiAqIC0gU3RyaWN0bHkgemVybyBwZXJzb25hbCBkYXRhIChOTyBBYWRoYWFyLCBQQU4sIENhcmQsIE5hbWVzLCBvciByYXcgRE9NIGNvbnRlbnQpLlxuICogLSBTdG9yZXMgZXZlbnRzIHN0cmljdGx5IGluIGNocm9tZS5zdG9yYWdlLmxvY2FsIChvciBsb2NhbFN0b3JhZ2UgaW4gbW9jay90ZXN0aW5nKS5cbiAqIC0gRXhwb3J0cyBmb3JtYXR0ZWQgSlNPTiBhbmQgQ1NWIGZpbGVzIGZvciBodW1hbiBwaWxvdCBjb25kdWN0b3JzLlxuICpcbiAqIExvZ2dlZCBFdmVudHM6XG4gKiAtIFdBUk5JTkdfU0hPV046IHsgdGltZXN0YW1wLCBsZXZlbCwgcnVsZXNUcmlnZ2VyZWQsIGRvbWFpbiB9XG4gKiAtIFVTRVJfREVDSVNJT046IHsgdGltZXN0YW1wLCBkZWNpc2lvbjogJ0xFRlRfUEFHRSd8J1BST0NFRURFRCcsIGRvbWFpbiB9XG4gKiAtIE1BU0tJTkdfQVBQTElFRDogeyB0aW1lc3RhbXAsIG1hc2tlZElucHV0c0NvdW50LCBtYXNrZWRUZXh0Tm9kZXNDb3VudCwgZG9tYWluIH1cbiAqIC0gRVhQTEFJTl9SRVFVRVNURUQ6IHsgdGltZXN0YW1wLCBkdXJhdGlvbk1zLCBzdWNjZXNzLCBkb21haW4gfVxuICovXG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gXCJzYWtoYV9waWxvdF9sb2dzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dQaWxvdEV2ZW50KGV2ZW50VHlwZSwgcGF5bG9hZCA9IHt9KSB7XG4gIGNvbnN0IGV2ZW50ID0ge1xuICAgIGlkOiBcImV2dF9cIiArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDkpLFxuICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgIGV2ZW50VHlwZSxcbiAgICBkb21haW46IHBheWxvYWQuZG9tYWluIHx8IHdpbmRvdy5sb2NhdGlvbj8uaG9zdG5hbWUgfHwgXCJ1bmtub3duXCIsXG4gICAgLi4ucGF5bG9hZFxuICB9O1xuXG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY2hyb21lLnN0b3JhZ2U/LmxvY2FsKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtTVE9SQUdFX0tFWV0pO1xuICAgICAgY29uc3QgbG9ncyA9IGRhdGFbU1RPUkFHRV9LRVldIHx8IFtdO1xuICAgICAgbG9ncy5wdXNoKGV2ZW50KTtcbiAgICAgIGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IFtTVE9SQUdFX0tFWV06IGxvZ3MgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBjb25zdCBleGlzdGluZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oU1RPUkFHRV9LRVkpIHx8IFwiW11cIik7XG4gICAgICBleGlzdGluZy5wdXNoKGV2ZW50KTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFNUT1JBR0VfS0VZLCBKU09OLnN0cmluZ2lmeShleGlzdGluZykpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKFwiW1Nha2hhIExvZ2dlcl0gQ291bGQgbm90IHJlY29yZCBsb2NhbCBldmVudDpcIiwgZXJyKTtcbiAgfVxuXG4gIHJldHVybiBldmVudDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBpbG90TG9ncygpIHtcbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUuc3RvcmFnZT8ubG9jYWwpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1NUT1JBR0VfS0VZXSk7XG4gICAgICByZXR1cm4gZGF0YVtTVE9SQUdFX0tFWV0gfHwgW107XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgXCJbXVwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gW107XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjbGVhclBpbG90TG9ncygpIHtcbiAgaWYgKHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY2hyb21lLnN0b3JhZ2U/LmxvY2FsKSB7XG4gICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwucmVtb3ZlKFtTVE9SQUdFX0tFWV0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShTVE9SQUdFX0tFWSk7XG4gIH1cbn1cblxuLyoqXG4gKiBDb252ZXJ0IGxvZ3MgYXJyYXkgaW50byBzdGFuZGFyZCBDU1Ygc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2dzVG9DU1YobG9ncykge1xuICBpZiAoIWxvZ3MgfHwgbG9ncy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJpZCx0aW1lc3RhbXAsZXZlbnRUeXBlLGRvbWFpbixkZXRhaWxzXFxuXCI7XG4gIH1cbiAgY29uc3QgaGVhZGVycyA9IFtcImlkXCIsIFwidGltZXN0YW1wXCIsIFwiZXZlbnRUeXBlXCIsIFwiZG9tYWluXCIsIFwiZGV0YWlsc1wiXTtcbiAgY29uc3Qgcm93cyA9IGxvZ3MubWFwKGwgPT4ge1xuICAgIGNvbnN0IGRldGFpbHMgPSBKU09OLnN0cmluZ2lmeShsKS5yZXBsYWNlKC9cIi9nLCAnXCJcIicpO1xuICAgIHJldHVybiBgXCIke2wuaWR9XCIsXCIke2wudGltZXN0YW1wfVwiLFwiJHtsLmV2ZW50VHlwZX1cIixcIiR7bC5kb21haW59XCIsXCIke2RldGFpbHN9XCJgO1xuICB9KTtcbiAgcmV0dXJuIFtoZWFkZXJzLmpvaW4oXCIsXCIpLCAuLi5yb3dzXS5qb2luKFwiXFxuXCIpO1xufVxuIiwgIi8qKlxuICogY29udGVudF9zYWtoYS5qcyBcdTIwMTQgU2FraGEgQ29udGVudCBTY3JpcHQgQnVuZGxlIEVudHJ5IFBvaW50XG4gKlxuICogUnVucyBvbiBldmVyeSBsb2FkZWQgcGFnZTpcbiAqIDEuIEV4ZWN1dGVzIHJlYWwtdGltZSBvbi1wYWdlIG1hc2tpbmcgKEFhZGhhYXIsIFBBTiwgQ2FyZCwgSUZTQywgUGhvbmUsIFVQSSlcbiAqIDIuIEV2YWx1YXRlcyBwYWdlIGZvciBzY2FtIHNpZ25hbHMgKGxvb2thbGlrZSBkb21haW4sIFVQSSBQSU4gdHJhcCwgY3JlZGVudGlhbCBjb21ib3MsIEFQS3MpXG4gKiAzLiBTaG93cyBoaWdoLWNvbnRyYXN0IG1vZGFsIHdhcm5pbmcgaW4gcGxhaW4gRW5nbGlzaCAmIFRlbHVndSBpZiBkYW5nZXIvY2F1dGlvbiBkZXRlY3RlZFxuICogNC4gTG9ncyBub24tUElJIHBpbG90IHRlbGVtZXRyeVxuICovXG5cbmltcG9ydCB7IGV2YWx1YXRlUGFnZVNhZmV0eSB9IGZyb20gXCIuL3NjYW1EZXRlY3Rvci5qc1wiO1xuaW1wb3J0IHsgYXBwbHlQYWdlTWFza2luZywgbWFza1NlbnNpdGl2ZVRleHQgfSBmcm9tIFwiLi9tYXNrRW5naW5lLmpzXCI7XG5pbXBvcnQgeyBsb2dQaWxvdEV2ZW50IH0gZnJvbSBcIi4vZXZlbnRMb2dnZXIuanNcIjtcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuLmpzXCI7XG5cbmNvbnNvbGUubG9nKFwiW1Nha2hhXSBPbi1kZXZpY2Ugc2FmZXR5IGNvbXBhbmlvbiBhY3RpdmUgb246XCIsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxubGV0IGN1cnJlbnRMYW5ndWFnZSA9IFwiZW5cIjtcbmxldCBwYWdlRXZhbHVhdGlvbiA9IG51bGw7XG5cbi8vIExvYWQgcHJlZmVycmVkIGxhbmd1YWdlIGZyb20gc3RvcmFnZSBpZiBhdmFpbGFibGVcbmlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlPy5sb2NhbCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wic2FraGFfY29uc2VudF9hY2NlcHRlZFwiLCBcInNha2hhX2xhbmdcIl0sIChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGE/LnNha2hhX2xhbmcpIHtcbiAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IGRhdGEuc2FraGFfbGFuZztcbiAgICB9XG4gICAgaWYgKCFkYXRhPy5zYWtoYV9jb25zZW50X2FjY2VwdGVkKSB7XG4gICAgICByZW5kZXJDb25zZW50TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbGl6ZVNha2hhKCk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIGluaXRpYWxpemVTYWtoYSgpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZpcnN0LVJ1biBDb25zZW50IE1vZGFsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHJlbmRlckNvbnNlbnRNb2RhbCgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FraGEtY29uc2VudC1yb290XCIpKSByZXR1cm47XG5cbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuaWQgPSBcInNha2hhLWNvbnNlbnQtcm9vdFwiO1xuXG4gIGNvbnN0IHRpdGxlRW4gPSB0KFwiY29uc2VudF90aXRsZVwiLCBcImVuXCIpO1xuICBjb25zdCB0aXRsZUxhbmcgPSB0KFwiY29uc2VudF90aXRsZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zdCBib2R5RW4gPSB0KFwiY29uc2VudF9ib2R5XCIsIFwiZW5cIik7XG4gIGNvbnN0IGJvZHlMYW5nID0gdChcImNvbnNlbnRfYm9keVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zdCBhZ3JlZUVuID0gdChcImNvbnNlbnRfYWdyZWVcIiwgXCJlblwiKTtcbiAgY29uc3QgYWdyZWVMYW5nID0gdChcImNvbnNlbnRfYWdyZWVcIiwgY3VycmVudExhbmd1YWdlKTtcblxuICByb290LmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic2FraGEtbW9kYWwtY2FyZCBjYXV0aW9uXCIgc3R5bGU9XCJtYXgtd2lkdGg6NDgwcHg7XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwic2FraGEtbW9kYWwtaGVhZGVyXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2FraGEtaWNvblwiPlx1RDgzRFx1REVFMVx1RkUwRjwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+JHt0aXRsZUVufTwvaDI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZToxNXB4O29wYWNpdHk6MC45O21hcmdpbi10b3A6NHB4O1wiPiR7dGl0bGVMYW5nfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNha2hhLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNha2hhLW1vZGFsLXJlYXNvbi1lblwiPiR7Ym9keUVufTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2FraGEtbW9kYWwtcmVhc29uLXRlXCI+JHtib2R5TGFuZ308L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNha2hhLW1vZGFsLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2FraGEtY29uc2VudC1hZ3JlZVwiIGNsYXNzPVwic2FraGEtYnRuIHNha2hhLWJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICBcdTI3MDUgJHthZ3JlZUVufSAvICR7YWdyZWVMYW5nfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWtoYS1jb25zZW50LWFncmVlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlPy5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2FraGFfY29uc2VudF9hY2NlcHRlZDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgIGxvZ1BpbG90RXZlbnQoXCJDT05TRU5UX0dJVkVOXCIsIHsgbGFuZzogY3VycmVudExhbmd1YWdlIH0pO1xuICAgICAgICByb290LnJlbW92ZSgpO1xuICAgICAgICBpbml0aWFsaXplU2FraGEoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LnJlbW92ZSgpO1xuICAgICAgaW5pdGlhbGl6ZVNha2hhKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNha2hhKCkge1xuICAvLyAxLiBJbml0aWFsIG9uLXBhZ2Ugc2Vuc2l0aXZlIGRhdGEgbWFza2luZ1xuICB0cnkge1xuICAgIGNvbnN0IG1hc2tTdGF0cyA9IGFwcGx5UGFnZU1hc2tpbmcoZG9jdW1lbnQsIGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgaWYgKG1hc2tTdGF0cy5tYXNrZWRJbnB1dHMgPiAwIHx8IG1hc2tTdGF0cy5tYXNrZWRUZXh0Tm9kZXMgPiAwKSB7XG4gICAgICBsb2dQaWxvdEV2ZW50KFwiTUFTS0lOR19BUFBMSUVEXCIsIHtcbiAgICAgICAgZG9tYWluOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICAgIGlucHV0c01hc2tlZDogbWFza1N0YXRzLm1hc2tlZElucHV0cyxcbiAgICAgICAgdGV4dE5vZGVzTWFza2VkOiBtYXNrU3RhdHMubWFza2VkVGV4dE5vZGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihcIltTYWtoYV0gTWFza2luZyBlcnJvcjpcIiwgZXJyKTtcbiAgfVxuXG4gIC8vIDIuIENvbnRpbnVvdXMgbWFza2luZyBvbiBkeW5hbWljIERPTSB1cGRhdGVzIChlLmcuIFNQQXMsIGxpdmUgZmVlZHMpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGFwcGx5UGFnZU1hc2tpbmcoZG9jdW1lbnQsIGN1cnJlbnRMYW5ndWFnZSk7XG4gIH0pO1xuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQuYm9keSwgeyBjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUgfSk7XG4gIH1cblxuICAvLyAzLiBTY2FuIHBhZ2UgZm9yIHNjYW1zXG4gIHJ1blBhZ2VTYWZldHlDaGVjaygpO1xufVxuXG5mdW5jdGlvbiBydW5QYWdlU2FmZXR5Q2hlY2soKSB7XG4gIGNvbnN0IHBhZ2VUZXh0ID0gZG9jdW1lbnQuYm9keSA/IGRvY3VtZW50LmJvZHkuaW5uZXJUZXh0IHx8IFwiXCIgOiBcIlwiO1xuICBjb25zdCBpbnB1dEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikpLm1hcChlbCA9PiAoe1xuICAgIG5hbWU6IGVsLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJcIixcbiAgICBpZDogZWwuZ2V0QXR0cmlidXRlKFwiaWRcIikgfHwgXCJcIixcbiAgICBwbGFjZWhvbGRlcjogZWwuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikgfHwgXCJcIixcbiAgICB0eXBlOiBlbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpIHx8IFwiXCIsXG4gICAgbGFiZWw6IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgXCJcIlxuICB9KSk7XG4gIGNvbnN0IGxpbmtFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl1cIikpLm1hcChhID0+IGEuaHJlZik7XG5cbiAgcGFnZUV2YWx1YXRpb24gPSBldmFsdWF0ZVBhZ2VTYWZldHkoe1xuICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcGFnZVRleHQsXG4gICAgaW5wdXRzOiBpbnB1dEVsZW1lbnRzLFxuICAgIGxpbmtzOiBsaW5rRWxlbWVudHNcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coXCJbU2FraGFdIFBhZ2Ugc2FmZXR5IGV2YWx1YXRpb246XCIsIHBhZ2VFdmFsdWF0aW9uKTtcblxuICBpZiAocGFnZUV2YWx1YXRpb24ubGV2ZWwgPT09IFwiZGFuZ2VyXCIgfHwgcGFnZUV2YWx1YXRpb24ubGV2ZWwgPT09IFwiY2F1dGlvblwiKSB7XG4gICAgbG9nUGlsb3RFdmVudChcIldBUk5JTkdfU0hPV05cIiwge1xuICAgICAgZG9tYWluOiBwYWdlRXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGxldmVsOiBwYWdlRXZhbHVhdGlvbi5sZXZlbCxcbiAgICAgIHJ1bGVzVHJpZ2dlcmVkOiBwYWdlRXZhbHVhdGlvbi5ydWxlc1RyaWdnZXJlZFxuICAgIH0pO1xuICAgIHJlbmRlclNlbmlvcldhcm5pbmdNb2RhbChwYWdlRXZhbHVhdGlvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5IEhpZ2gtQ29udHJhc3QgQWNrbm93bGVkZ21lbnQgV2FybmluZyBNb2RhbFxuICovXG5mdW5jdGlvbiByZW5kZXJTZW5pb3JXYXJuaW5nTW9kYWwoZXZhbHVhdGlvbikge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWtoYS1hbGVydC1tb2RhbC1yb290XCIpKSByZXR1cm47XG5cbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuaWQgPSBcInNha2hhLWFsZXJ0LW1vZGFsLXJvb3RcIjtcblxuICBjb25zdCBpc0RhbmdlciA9IGV2YWx1YXRpb24ubGV2ZWwgPT09IFwiZGFuZ2VyXCI7XG4gIGNvbnN0IGljb24gPSBpc0RhbmdlciA/IFwiXHVEODNEXHVERUE4XCIgOiBcIlx1MjZBMFx1RkUwRlwiO1xuICBjb25zdCB0aXRsZUtleSA9IGlzRGFuZ2VyID8gXCJ3YXJuaW5nX2Rhbmdlcl90aXRsZVwiIDogXCJ3YXJuaW5nX2NhdXRpb25fdGl0bGVcIjtcbiAgY29uc3QgdGl0bGVFbiA9IHQodGl0bGVLZXksIFwiZW5cIik7XG4gIGNvbnN0IHRpdGxlVGUgPSB0KHRpdGxlS2V5LCBcInRlXCIpO1xuXG4gIHJvb3QuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzYWtoYS1tb2RhbC1jYXJkICR7aXNEYW5nZXIgPyAnZGFuZ2VyJyA6ICdjYXV0aW9uJ31cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzYWtoYS1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzYWtoYS1pY29uXCI+JHtpY29ufTwvc3Bhbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+JHt0aXRsZUVufTwvaDI+XG4gICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTZweDsgb3BhY2l0eTogMC45OyBtYXJnaW4tdG9wOiA0cHg7XCI+JHt0aXRsZVRlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNha2hhLW1vZGFsLWJvZHlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNha2hhLW1vZGFsLXJlYXNvbi1lblwiPlxuICAgICAgICAgICR7ZXZhbHVhdGlvbi5yZWFzb25Fbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzYWtoYS1tb2RhbC1yZWFzb24tdGVcIj5cbiAgICAgICAgICAke2V2YWx1YXRpb24ucmVhc29uVGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2FraGEtbW9kYWwtYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b24gaWQ9XCJzYWtoYS1idG4tbGVhdmVcIiBjbGFzcz1cInNha2hhLWJ0biBzYWtoYS1idG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgXHVEODNEXHVERUUxXHVGRTBGICR7dChcImJ0bl91bmRlcnN0YW5kX2xlYXZlXCIsIFwiZW5cIil9IC8gJHt0KFwiYnRuX3VuZGVyc3RhbmRfbGVhdmVcIiwgXCJ0ZVwiKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGlkPVwic2FraGEtYnRuLXByb2NlZWRcIiBjbGFzcz1cInNha2hhLWJ0biBzYWtoYS1idG4tc2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAke3QoXCJidG5fcHJvY2VlZF9hbnl3YXlcIiwgXCJlblwiKX0gLyAke3QoXCJidG5fcHJvY2VlZF9hbnl3YXlcIiwgXCJ0ZVwiKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FraGEtYnRuLWxlYXZlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ1BpbG90RXZlbnQoXCJVU0VSX0RFQ0lTSU9OXCIsIHtcbiAgICAgIGRvbWFpbjogZXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGRlY2lzaW9uOiBcIkxFRlRfUEFHRVwiXG4gICAgfSk7XG4gICAgLy8gTmF2aWdhdGUgYXdheSB0byBzYWZlIGJyb3dzZXIgZGVmYXVsdFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJhYm91dDpibGFua1wiO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNha2hhLWJ0bi1wcm9jZWVkXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ1BpbG90RXZlbnQoXCJVU0VSX0RFQ0lTSU9OXCIsIHtcbiAgICAgIGRvbWFpbjogZXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGRlY2lzaW9uOiBcIlBST0NFRURFRF9BTllXQVlcIlxuICAgIH0pO1xuICAgIHJvb3QucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4dGVuc2lvbiBNZXNzYWdlIExpc3RlbmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAodHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUucnVudGltZT8ub25NZXNzYWdlKSB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gXCJHRVRfUEFHRV9TQUZFVFlcIikge1xuICAgICAgc2VuZFJlc3BvbnNlKHsgZXZhbHVhdGlvbjogcGFnZUV2YWx1YXRpb24gfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiR0VUX01BU0tFRF9QQUdFX1RFWFRcIikge1xuICAgICAgLy8gUmV0dXJuIHN0cmljdGx5IG1hc2tlZCB0ZXh0IGZvciB0aGUgRXhwbGFpbiBmZWF0dXJlIChOTyByYXcgUElJIGxlYXZlcylcbiAgICAgIGNvbnN0IHJhd1RleHQgPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5pbm5lclRleHQgfHwgXCJcIiA6IFwiXCI7XG4gICAgICBjb25zdCBzYWZlTWFza2VkVGV4dCA9IG1hc2tTZW5zaXRpdmVUZXh0KHJhd1RleHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgbWFza2VkVGV4dDogc2FmZU1hc2tlZFRleHQgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiU0VUX0xBTkdVQUdFXCIpIHtcbiAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IG1zZy5sYW5nIHx8IFwiZW5cIjtcbiAgICAgIGFwcGx5UGFnZU1hc2tpbmcoZG9jdW1lbnQsIGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBvazogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBT08sSUFBTSxVQUFVO0FBQUEsRUFDckIsSUFBSTtBQUFBLElBQ0YsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2Qsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsb0JBQW9CO0FBQUEsSUFFcEIsa0JBQWtCO0FBQUEsSUFDbEIscUJBQXFCO0FBQUEsSUFDckIsc0JBQXNCO0FBQUEsSUFDdEIscUJBQXFCO0FBQUEsSUFDckIsbUJBQW1CO0FBQUEsSUFFbkIsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLElBQ2YsYUFBYTtBQUFBLElBQ2Isc0JBQXNCO0FBQUEsSUFDdEIsb0JBQW9CO0FBQUEsSUFDcEIsYUFBYTtBQUFBLElBRWIsZUFBZTtBQUFBLElBQ2YsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLElBRWYscUJBQXFCO0FBQUEsSUFDckIsZUFBZTtBQUFBLElBQ2YsaUJBQWlCO0FBQUEsSUFDakIsc0JBQXNCO0FBQUEsRUFDeEI7QUFBQSxFQUVBLElBQUk7QUFBQSxJQUNGLFVBQVU7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLHNCQUFzQjtBQUFBLElBQ3RCLHVCQUF1QjtBQUFBLElBQ3ZCLG9CQUFvQjtBQUFBLElBRXBCLGtCQUFrQjtBQUFBLElBQ2xCLHFCQUFxQjtBQUFBLElBQ3JCLHNCQUFzQjtBQUFBLElBQ3RCLHFCQUFxQjtBQUFBLElBQ3JCLG1CQUFtQjtBQUFBLElBRW5CLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxJQUNmLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLElBQ3RCLG9CQUFvQjtBQUFBLElBQ3BCLGFBQWE7QUFBQSxJQUViLGVBQWU7QUFBQSxJQUNmLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxJQUVmLHFCQUFxQjtBQUFBLElBQ3JCLGVBQWU7QUFBQSxJQUNmLGlCQUFpQjtBQUFBLElBQ2pCLHNCQUFzQjtBQUFBLEVBQ3hCO0FBQUEsRUFFQSxJQUFJO0FBQUEsSUFDRixVQUFVO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxzQkFBc0I7QUFBQSxJQUN0Qix1QkFBdUI7QUFBQSxJQUN2QixvQkFBb0I7QUFBQSxJQUVwQixrQkFBa0I7QUFBQSxJQUNsQixxQkFBcUI7QUFBQSxJQUNyQixzQkFBc0I7QUFBQSxJQUN0QixxQkFBcUI7QUFBQSxJQUNyQixtQkFBbUI7QUFBQSxJQUVuQixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsSUFDYixzQkFBc0I7QUFBQSxJQUN0QixvQkFBb0I7QUFBQSxJQUNwQixhQUFhO0FBQUEsSUFFYixlQUFlO0FBQUEsSUFDZixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsSUFFZixxQkFBcUI7QUFBQSxJQUNyQixlQUFlO0FBQUEsSUFDZixpQkFBaUI7QUFBQSxJQUNqQixzQkFBc0I7QUFBQSxFQUN4QjtBQUNGO0FBS08sU0FBUyxFQUFFLEtBQUssT0FBTyxNQUFNO0FBQ2xDLFFBQU0sT0FBTyxRQUFRLElBQUksS0FBSyxRQUFRO0FBQ3RDLFNBQU8sS0FBSyxHQUFHLEtBQUssUUFBUSxHQUFHLEdBQUcsS0FBSztBQUN6Qzs7O0FDekZPLElBQU0scUJBQXFCO0FBQUEsRUFDaEM7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUNGO0FBR0EsSUFBTSxnQkFBZ0I7QUFBQSxFQUNwQixVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFBSyxVQUFLO0FBQUEsRUFDM0UsVUFBSztBQUFBLEVBQUssVUFBSztBQUFBLEVBQUssVUFBSztBQUFBLEVBQUssVUFBSztBQUFBLEVBQUssVUFBSztBQUFBLEVBQzdDLEtBQUs7QUFBQSxFQUFLLEtBQUs7QUFDakI7QUFHQSxJQUFNLGtCQUFrQjtBQUFBLEVBQ3RCO0FBQUEsRUFBTztBQUFBLEVBQU87QUFBQSxFQUFPO0FBQUEsRUFBTztBQUFBLEVBQU87QUFBQSxFQUFRO0FBQUEsRUFBUTtBQUFBLEVBQVM7QUFBQSxFQUFTO0FBQUEsRUFBUztBQUFBLEVBQVE7QUFBQSxFQUFTO0FBQ2pHO0FBR0EsSUFBTSxxQkFBcUI7QUFBQSxFQUN6QjtBQUFBLEVBQVc7QUFBQSxFQUFnQjtBQUFBLEVBQWM7QUFBQSxFQUFZO0FBQUEsRUFBWTtBQUNuRTtBQUtPLFNBQVMsb0JBQW9CLEdBQUcsR0FBRztBQUN4QyxNQUFJLEVBQUUsV0FBVztBQUFHLFdBQU8sRUFBRTtBQUM3QixNQUFJLEVBQUUsV0FBVztBQUFHLFdBQU8sRUFBRTtBQUM3QixRQUFNLFNBQVMsQ0FBQztBQUNoQixXQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUTtBQUFLLFdBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxXQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUTtBQUFLLFdBQU8sQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUVuRCxXQUFTLElBQUksR0FBRyxLQUFLLEVBQUUsUUFBUSxLQUFLO0FBQ2xDLGFBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxRQUFRLEtBQUs7QUFDbEMsVUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHO0FBQ3ZDLGVBQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQztBQUFBLE1BQ3BDLE9BQU87QUFDTCxlQUFPLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSztBQUFBLFVBQ2xCLE9BQU8sSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUk7QUFBQTtBQUFBLFVBQ3ZCLE9BQU8sQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQUE7QUFBQSxVQUNuQixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUFBO0FBQUEsUUFDckI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNO0FBQ2xDO0FBS08sU0FBUyxvQkFBb0IsUUFBUTtBQUMxQyxNQUFJLGFBQWE7QUFDakIsYUFBVyxRQUFRLE9BQU8sWUFBWSxHQUFHO0FBQ3ZDLGtCQUFjLGNBQWMsSUFBSSxLQUFLO0FBQUEsRUFDdkM7QUFDQSxTQUFPO0FBQ1Q7QUFLTyxTQUFTLGdCQUFnQixhQUFhO0FBQzNDLE1BQUksQ0FBQztBQUFhLFdBQU87QUFDekIsTUFBSSxNQUFNLFlBQVksS0FBSyxFQUFFLFlBQVk7QUFFekMsUUFBTSxJQUFJLFFBQVEsZ0JBQWdCLEVBQUU7QUFFcEMsUUFBTSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUVsRCxRQUFNLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUN0QixTQUFPO0FBQ1Q7QUFLTyxTQUFTLG9CQUFvQixVQUFVLFlBQVksb0JBQW9CO0FBQzVFLFFBQU0sUUFBUSxnQkFBZ0IsUUFBUTtBQUN0QyxTQUFPLFVBQVUsS0FBSyxDQUFDLGFBQWE7QUFDbEMsV0FBTyxVQUFVLFlBQVksTUFBTSxTQUFTLE1BQU0sUUFBUTtBQUFBLEVBQzVELENBQUM7QUFDSDtBQUtPLFNBQVMscUJBQXFCLFVBQVUsWUFBWSxvQkFBb0I7QUFDN0UsUUFBTSxRQUFRLGdCQUFnQixRQUFRO0FBQ3RDLE1BQUksQ0FBQyxTQUFTLG9CQUFvQixPQUFPLFNBQVMsR0FBRztBQUNuRCxXQUFPLEVBQUUsYUFBYSxNQUFNO0FBQUEsRUFDOUI7QUFHQSxNQUFJLE1BQU0sU0FBUyxNQUFNLEdBQUc7QUFDMUIsV0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsUUFBUSw2QkFBNkIsS0FBSztBQUFBLElBQzVDO0FBQUEsRUFDRjtBQUVBLFFBQU0sYUFBYSxvQkFBb0IsS0FBSztBQUU1QyxhQUFXLFlBQVksV0FBVztBQUVoQyxVQUFNLGVBQWUsU0FBUyxRQUFRLDBDQUEwQyxFQUFFO0FBR2xGLFFBQUksTUFBTSxTQUFTLFFBQVEsS0FBSyxDQUFDLE1BQU0sU0FBUyxNQUFNLFFBQVEsR0FBRztBQUMvRCxhQUFPO0FBQUEsUUFDTCxhQUFhO0FBQUEsUUFDYixRQUFRO0FBQUEsUUFDUixRQUFRLCtCQUErQixRQUFRO0FBQUEsTUFDakQ7QUFBQSxJQUNGO0FBR0EsVUFBTSxZQUFZLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNwQyxVQUFNLGFBQWEsU0FBUyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRXhDLFFBQUksVUFBVSxVQUFVLEtBQUssV0FBVyxVQUFVLEdBQUc7QUFDbkQsWUFBTSxPQUFPLG9CQUFvQixXQUFXLFVBQVU7QUFFdEQsVUFBSSxPQUFPLEtBQUssUUFBUSxLQUFLLEtBQUssSUFBSSxVQUFVLFNBQVMsV0FBVyxNQUFNLEtBQUssR0FBRztBQUNoRixlQUFPO0FBQUEsVUFDTCxhQUFhO0FBQUEsVUFDYixRQUFRO0FBQUEsVUFDUixRQUFRLDRCQUE0QixLQUFLLHNDQUFzQyxRQUFRLG9CQUFvQixJQUFJO0FBQUEsUUFDakg7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLFFBQUksV0FBVyxTQUFTLFVBQVUsS0FBSyxDQUFDLE1BQU0sU0FBUyxVQUFVLEdBQUc7QUFDbEUsYUFBTztBQUFBLFFBQ0wsYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFFBQ1IsUUFBUSx3REFBd0QsUUFBUTtBQUFBLE1BQzFFO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFHQSxRQUFNLGtCQUFrQixnQkFBZ0IsS0FBSyxTQUFPLE1BQU0sU0FBUyxHQUFHLENBQUM7QUFDdkUsUUFBTSxvQkFBb0IsdUVBQXVFLEtBQUssS0FBSztBQUMzRyxNQUFJLG1CQUFtQixtQkFBbUI7QUFDeEMsV0FBTztBQUFBLE1BQ0wsYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsUUFBUSx1Q0FBdUMsS0FBSztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUVBLFNBQU8sRUFBRSxhQUFhLE1BQU07QUFDOUI7QUFLTyxTQUFTLHVCQUF1QixNQUFNO0FBQzNDLE1BQUksQ0FBQztBQUFNLFdBQU8sRUFBRSxVQUFVLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDakQsUUFBTSxRQUFRLEtBQUssWUFBWTtBQUUvQixRQUFNLG1CQUFtQjtBQUFBO0FBQUEsSUFFdkI7QUFBQTtBQUFBLElBRUE7QUFBQTtBQUFBLElBRUE7QUFBQSxFQUNGO0FBRUEsUUFBTSxVQUFVLENBQUM7QUFDakIsYUFBVyxXQUFXLGtCQUFrQjtBQUN0QyxVQUFNLFFBQVEsTUFBTSxNQUFNLE9BQU87QUFDakMsUUFBSTtBQUFPLGNBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQztBQUFBLEVBQ2xDO0FBRUEsU0FBTztBQUFBLElBQ0wsVUFBVSxRQUFRLFNBQVM7QUFBQSxJQUMzQjtBQUFBLEVBQ0Y7QUFDRjtBQUtPLFNBQVMsY0FBYyxNQUFNO0FBQ2xDLE1BQUksQ0FBQztBQUFNLFdBQU8sRUFBRSxVQUFVLE1BQU07QUFDcEMsUUFBTSxRQUFRLEtBQUssWUFBWTtBQUUvQixRQUFNLGVBQWU7QUFBQTtBQUFBLElBRW5CO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBRUE7QUFBQTtBQUFBLElBRUE7QUFBQSxFQUNGO0FBRUEsYUFBVyxXQUFXLGNBQWM7QUFDbEMsUUFBSSxRQUFRLEtBQUssS0FBSyxHQUFHO0FBQ3ZCLGFBQU8sRUFBRSxVQUFVLEtBQUs7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDQSxTQUFPLEVBQUUsVUFBVSxNQUFNO0FBQzNCO0FBTU8sU0FBUyx5QkFBeUIsU0FBUyxDQUFDLEdBQUcsZ0JBQWdCLE9BQU87QUFDM0UsTUFBSTtBQUFlLFdBQU8sRUFBRSxVQUFVLE1BQU07QUFFNUMsTUFBSSxVQUFVO0FBQ2QsTUFBSSxTQUFTO0FBQ2IsTUFBSSxjQUFjO0FBRWxCLGFBQVcsU0FBUyxRQUFRO0FBQzFCLFVBQU0sV0FBVyxHQUFHLE1BQU0sUUFBUSxFQUFFLElBQUksTUFBTSxNQUFNLEVBQUUsSUFBSSxNQUFNLGVBQWUsRUFBRSxJQUFJLE1BQU0sU0FBUyxFQUFFLElBQUksTUFBTSxRQUFRLEVBQUUsR0FBRyxZQUFZO0FBRXpJLFFBQUksNkRBQTZELEtBQUssUUFBUSxHQUFHO0FBQy9FLGdCQUFVO0FBQUEsSUFDWjtBQUNBLFFBQUksd0NBQXdDLEtBQUssUUFBUSxHQUFHO0FBQzFELGVBQVM7QUFBQSxJQUNYO0FBQ0EsUUFBSSxxREFBcUQsS0FBSyxRQUFRLEdBQUc7QUFDdkUsb0JBQWM7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFFQSxNQUFJLFdBQVcsVUFBVSxhQUFhO0FBQ3BDLFdBQU8sRUFBRSxVQUFVLEtBQUs7QUFBQSxFQUMxQjtBQUNBLFNBQU8sRUFBRSxVQUFVLE1BQU07QUFDM0I7QUFLTyxTQUFTLDJCQUEyQixNQUFNLFlBQVksQ0FBQyxHQUFHO0FBQy9ELFFBQU0sU0FBUyxRQUFRLElBQUksWUFBWTtBQUd2QyxhQUFXLE9BQU8sb0JBQW9CO0FBQ3BDLFFBQUksTUFBTSxTQUFTLEdBQUcsR0FBRztBQUN2QixhQUFPO0FBQUEsUUFDTCxVQUFVO0FBQUEsUUFDVixRQUFRLCtDQUErQyxHQUFHO0FBQUEsTUFDNUQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUdBLGFBQVcsUUFBUSxXQUFXO0FBQzVCLFVBQU0sS0FBSyxRQUFRLElBQUksWUFBWTtBQUNuQyxRQUFJLEVBQUUsU0FBUyxNQUFNLEtBQUssRUFBRSxTQUFTLE9BQU8sR0FBRztBQUM3QyxhQUFPO0FBQUEsUUFDTCxVQUFVO0FBQUEsUUFDVixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBRUEsU0FBTyxFQUFFLFVBQVUsTUFBTTtBQUMzQjtBQVlPLFNBQVMsbUJBQW1CLGFBQWE7QUFDOUMsUUFBTSxFQUFFLE1BQU0sSUFBSSxXQUFXLElBQUksU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLEVBQUUsSUFBSTtBQUM3RCxRQUFNLFdBQVcsZ0JBQWdCLEdBQUc7QUFDcEMsUUFBTSxnQkFBZ0Isb0JBQW9CLFFBQVE7QUFFbEQsUUFBTSxpQkFBaUIsQ0FBQztBQUN4QixNQUFJLGVBQWU7QUFDbkIsTUFBSSxhQUFhO0FBR2pCLFFBQU0sWUFBWSxxQkFBcUIsUUFBUTtBQUMvQyxNQUFJLFVBQVUsYUFBYTtBQUN6QixtQkFBZTtBQUNmLG1CQUFlLEtBQUssa0JBQWtCO0FBQ3RDLGlCQUFhO0FBQUEsRUFDZjtBQUdBLFFBQU0sVUFBVSxjQUFjLFFBQVE7QUFDdEMsTUFBSSxRQUFRLFVBQVU7QUFDcEIsbUJBQWU7QUFDZixtQkFBZSxLQUFLLHNCQUFzQjtBQUMxQyxpQkFBYTtBQUFBLEVBQ2Y7QUFHQSxRQUFNLGlCQUFpQix5QkFBeUIsUUFBUSxhQUFhO0FBQ3JFLE1BQUksZUFBZSxVQUFVO0FBQzNCLG1CQUFlO0FBQ2YsbUJBQWUsS0FBSyw0QkFBNEI7QUFDaEQsaUJBQWE7QUFBQSxFQUNmO0FBR0EsUUFBTSxjQUFjLDJCQUEyQixVQUFVLEtBQUs7QUFDOUQsTUFBSSxZQUFZLFVBQVU7QUFDeEIsUUFBSSxpQkFBaUI7QUFBVSxxQkFBZTtBQUM5QyxtQkFBZSxLQUFLLHdCQUF3QjtBQUM1QyxRQUFJLGVBQWU7QUFBc0IsbUJBQWE7QUFBQSxFQUN4RDtBQUdBLFFBQU0sVUFBVSx1QkFBdUIsUUFBUTtBQUMvQyxNQUFJLFFBQVEsVUFBVTtBQUNwQixRQUFJLGlCQUFpQjtBQUFVLHFCQUFlO0FBQzlDLG1CQUFlLEtBQUsseUJBQXlCO0FBQzdDLFFBQUksZUFBZTtBQUFzQixtQkFBYTtBQUFBLEVBQ3hEO0FBRUEsU0FBTztBQUFBLElBQ0wsT0FBTztBQUFBLElBQ1A7QUFBQSxJQUNBLFVBQVUsRUFBRSxZQUFZLElBQUk7QUFBQSxJQUM1QixVQUFVLEVBQUUsWUFBWSxJQUFJO0FBQUEsSUFDNUIsVUFBVSxFQUFFLFlBQVksSUFBSTtBQUFBLElBQzVCO0FBQUEsSUFDQTtBQUFBLEVBQ0Y7QUFDRjs7O0FDMVdPLElBQU0sV0FBVyxPQUFPLE9BQU87QUFBQSxFQUNwQyxVQUFlO0FBQUEsRUFDZixPQUFlO0FBQUEsRUFDZixPQUFlO0FBQUEsRUFDZixNQUFlO0FBQUEsRUFDZixNQUFlO0FBQUEsRUFDZixNQUFlO0FBQUEsRUFDZixTQUFlO0FBQUEsRUFDZixLQUFlO0FBQUEsRUFDZixPQUFlO0FBQUEsRUFDZixNQUFlO0FBQUEsRUFDZixlQUFlO0FBQUEsRUFDZixXQUFlO0FBQ2pCLENBQUM7QUFtQkQsSUFBTSxhQUFhO0FBQUEsRUFDakIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CO0FBRUEsSUFBTSxhQUFhO0FBQUEsRUFDakIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CO0FBRU8sU0FBUyxjQUFjLEtBQUs7QUFDakMsTUFBSSxPQUFPLFFBQVE7QUFBVSxXQUFPO0FBQ3BDLFFBQU0sU0FBUyxJQUFJLFFBQVEsT0FBTyxFQUFFO0FBQ3BDLE1BQUksQ0FBQztBQUFRLFdBQU87QUFDcEIsTUFBSSxJQUFJO0FBQ1IsUUFBTSxXQUFXLE9BQU8sTUFBTSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksTUFBTTtBQUN0RCxXQUFTLElBQUksR0FBRyxJQUFJLFNBQVMsUUFBUSxLQUFLO0FBQ3hDLFFBQUksV0FBVyxDQUFDLEVBQUUsV0FBVyxJQUFJLENBQUMsRUFBRSxTQUFTLENB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
