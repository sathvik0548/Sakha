// src/i18n.js
var STRINGS = {
  en: {
    app_name: "Sakha",
    app_subtitle: "Your Digital Safety Companion",
    warning_danger_title: "Please Stop: This Site May Be Unsafe",
    warning_caution_title: "Check Carefully: Something Looks Unusual",
    warning_safe_title: "This page looks safe to use",
    rule_fake_domain: "This web address looks like a fake copy of a real website. Close this page.",
    rule_pin_to_receive: "Do not enter your UPI PIN. You only type your PIN to send money, never to receive it.",
    rule_sensitive_combo: "Do not share card details here. This unofficial page is asking for your card number, CVV, and PIN.",
    rule_urgency_threat: "Take your time. Real banks do not threaten to block your account immediately.",
    rule_apk_download: "Do not install this download. This page is asking you to install an unknown mobile file.",
    masked_badge: "Hidden for your protection",
    tap_to_reveal: "Tap once to see",
    tap_to_hide: "Tap to hide",
    btn_understand_leave: "Leave this page (Recommended)",
    btn_proceed_anyway: "I understand, continue anyway",
    btn_explain: "What is this page asking me?",
    consent_title: "Welcome to Sakha: Your Digital Safety Companion",
    consent_body: "Sakha stays completely on your device. Your Aadhaar, cards, and personal details are never sent to any server.",
    consent_agree: "I Agree & Start Protection",
    rule_safe_detail: "No scam or deceptive patterns detected on this site.",
    loading_explanation: "Checking what this page is asking safely...",
    explain_error: "Could not explain this page right now.",
    explain_offline: "Explanation helper is not running. Start the local server to use this feature. Warnings and masking always run on this device \u2014 only the Explain summary sends masked text to the cloud.",
    explain_safe_summary: "Page Summary:",
    state_unsupported_page: "Sakha stays idle on internal browser pages. You are safe here.",
    state_page_loading: "Checking this page for safety...",
    state_active_protecting: "Sakha is active and protecting your screen."
  },
  te: {
    app_name: "\u0C38\u0C16 (Sakha)",
    app_subtitle: "\u0C2E\u0C40 \u0C21\u0C3F\u0C1C\u0C3F\u0C1F\u0C32\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C3E \u0C38\u0C39\u0C3E\u0C2F\u0C15\u0C41\u0C21\u0C41",
    warning_danger_title: "\u0C26\u0C2F\u0C1A\u0C47\u0C38\u0C3F \u0C06\u0C17\u0C02\u0C21\u0C3F: \u0C08 \u0C38\u0C48\u0C1F\u0C4D \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02 \u0C15\u0C3E\u0C15\u0C2A\u0C4B\u0C35\u0C1A\u0C4D\u0C1A\u0C41",
    warning_caution_title: "\u0C1C\u0C3E\u0C17\u0C4D\u0C30\u0C24\u0C4D\u0C24\u0C17\u0C3E \u0C1A\u0C42\u0C21\u0C02\u0C21\u0C3F: \u0C07\u0C15\u0C4D\u0C15\u0C21 \u0C0F\u0C26\u0C4B \u0C24\u0C47\u0C21\u0C3E\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F",
    warning_safe_title: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C09\u0C2A\u0C2F\u0C4B\u0C17\u0C3F\u0C02\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C09\u0C02\u0C26\u0C3F",
    rule_fake_domain: "\u0C08 \u0C35\u0C46\u0C2C\u0C4D\u200C\u0C38\u0C48\u0C1F\u0C4D \u0C1A\u0C3F\u0C30\u0C41\u0C28\u0C3E\u0C2E\u0C3E \u0C05\u0C38\u0C32\u0C48\u0C28 \u0C38\u0C48\u0C1F\u0C4D \u0C28\u0C15\u0C3F\u0C32\u0C40 \u0C15\u0C3E\u0C2A\u0C40\u0C32\u0C3E \u0C09\u0C02\u0C26\u0C3F. \u0C08 \u0C2A\u0C47\u0C1C\u0C40\u0C28\u0C3F \u0C2E\u0C42\u0C38\u0C3F\u0C35\u0C47\u0C2F\u0C02\u0C21\u0C3F.",
    rule_pin_to_receive: "\u0C2E\u0C40 UPI \u0C2A\u0C3F\u0C28\u0C4D \u0C28\u0C2E\u0C4B\u0C26\u0C41 \u0C1A\u0C47\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41. \u0C21\u0C2C\u0C4D\u0C2C\u0C41 \u0C2A\u0C02\u0C2A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C2E\u0C3E\u0C24\u0C4D\u0C30\u0C2E\u0C47 \u0C2A\u0C3F\u0C28\u0C4D \u0C15\u0C3E\u0C35\u0C3E\u0C32\u0C3F, \u0C24\u0C40\u0C38\u0C41\u0C15\u0C4B\u0C35\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C15\u0C3E\u0C26\u0C41.",
    rule_sensitive_combo: "\u0C07\u0C15\u0C4D\u0C15\u0C21 \u0C2E\u0C40 \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C07\u0C35\u0C4D\u0C35\u0C35\u0C26\u0C4D\u0C26\u0C41. \u0C08 \u0C05\u0C28\u0C27\u0C3F\u0C15\u0C3E\u0C30\u0C3F\u0C15 \u0C2A\u0C47\u0C1C\u0C40 \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D \u0C28\u0C02\u0C2C\u0C30\u0C4D, CVV \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2A\u0C3F\u0C28\u0C4D \u0C05\u0C21\u0C41\u0C17\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F.",
    rule_urgency_threat: "\u0C15\u0C02\u0C17\u0C3E\u0C30\u0C41 \u0C2A\u0C21\u0C35\u0C26\u0C4D\u0C26\u0C41. \u0C05\u0C38\u0C32\u0C48\u0C28 \u0C2C\u0C4D\u0C2F\u0C3E\u0C02\u0C15\u0C41\u0C32\u0C41 \u0C16\u0C3E\u0C24\u0C3E \u0C35\u0C46\u0C02\u0C1F\u0C28\u0C47 \u0C06\u0C17\u0C3F\u0C2A\u0C4B\u0C24\u0C41\u0C02\u0C26\u0C28\u0C3F \u0C2C\u0C46\u0C26\u0C3F\u0C30\u0C3F\u0C02\u0C1A\u0C35\u0C41.",
    rule_apk_download: "\u0C08 \u0C2B\u0C48\u0C32\u0C4D \u0C07\u0C28\u0C4D\u200C\u0C38\u0C4D\u0C1F\u0C3E\u0C32\u0C4D \u0C1A\u0C47\u0C2F\u0C35\u0C26\u0C4D\u0C26\u0C41. \u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C24\u0C46\u0C32\u0C3F\u0C2F\u0C28\u0C3F \u0C2E\u0C4A\u0C2C\u0C48\u0C32\u0C4D \u0C2B\u0C48\u0C32\u0C4D \u0C21\u0C4C\u0C28\u0C4D\u200C\u0C32\u0C4B\u0C21\u0C4D \u0C1A\u0C47\u0C38\u0C41\u0C15\u0C4B\u0C2E\u0C28\u0C3F \u0C1A\u0C46\u0C2C\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F.",
    masked_badge: "\u0C2E\u0C40 \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C4B\u0C38\u0C02 \u0C26\u0C3E\u0C1A\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F",
    tap_to_reveal: "\u0C1A\u0C42\u0C21\u0C1F\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C15\u0C02\u0C21\u0C3F",
    tap_to_hide: "\u0C2E\u0C33\u0C4D\u0C33\u0C40 \u0C26\u0C3E\u0C1A\u0C21\u0C3E\u0C28\u0C3F\u0C15\u0C3F \u0C24\u0C3E\u0C15\u0C02\u0C21\u0C3F",
    btn_understand_leave: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C28\u0C41\u0C02\u0C21\u0C3F \u0C35\u0C46\u0C33\u0C4D\u0C33\u0C3F\u0C2A\u0C4B\u0C02\u0C21\u0C3F (\u0C38\u0C3F\u0C2B\u0C3E\u0C30\u0C4D\u0C38\u0C41 \u0C1A\u0C47\u0C2F\u0C2C\u0C21\u0C3F\u0C02\u0C26\u0C3F)",
    btn_proceed_anyway: "\u0C28\u0C3E\u0C15\u0C41 \u0C05\u0C30\u0C4D\u0C25\u0C2E\u0C48\u0C02\u0C26\u0C3F, \u0C05\u0C2F\u0C3F\u0C28\u0C3E \u0C15\u0C4A\u0C28\u0C38\u0C3E\u0C17\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    btn_explain: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C28\u0C28\u0C4D\u0C28\u0C41 \u0C0F\u0C2E\u0C3F \u0C05\u0C21\u0C41\u0C17\u0C41\u0C24\u0C4B\u0C02\u0C26\u0C3F?",
    consent_title: "\u0C38\u0C16 (Sakha) \u0C15\u0C41 \u0C38\u0C4D\u0C35\u0C3E\u0C17\u0C24\u0C02: \u0C2E\u0C40 \u0C21\u0C3F\u0C1C\u0C3F\u0C1F\u0C32\u0C4D \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C3E \u0C38\u0C39\u0C3E\u0C2F\u0C15\u0C41\u0C21\u0C41",
    consent_body: "\u0C38\u0C16 \u0C2E\u0C40 \u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C02\u0C32\u0C4B\u0C28\u0C47 \u0C2A\u0C28\u0C3F\u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C41\u0C02\u0C26\u0C3F. \u0C2E\u0C40 \u0C06\u0C27\u0C3E\u0C30\u0C4D, \u0C2C\u0C4D\u0C2F\u0C3E\u0C02\u0C15\u0C4D \u0C15\u0C3E\u0C30\u0C4D\u0C21\u0C4D \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C41 \u0C0F \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D\u200C\u0C15\u0C41 \u0C2A\u0C02\u0C2A\u0C2C\u0C21\u0C35\u0C41.",
    consent_agree: "\u0C28\u0C47\u0C28\u0C41 \u0C05\u0C02\u0C17\u0C40\u0C15\u0C30\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C28\u0C41 - \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F",
    rule_safe_detail: "\u0C08 \u0C38\u0C48\u0C1F\u0C4D\u200C\u0C32\u0C4B \u0C2E\u0C4B\u0C38\u0C02 \u0C32\u0C47\u0C26\u0C3E \u0C2E\u0C4B\u0C38\u0C2A\u0C42\u0C30\u0C3F\u0C24 \u0C28\u0C2E\u0C42\u0C28\u0C3E\u0C32\u0C41 \u0C15\u0C28\u0C41\u0C17\u0C4A\u0C28\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41.",
    loading_explanation: "\u0C2A\u0C47\u0C1C\u0C40 \u0C35\u0C3F\u0C35\u0C30\u0C3E\u0C32\u0C28\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C2A\u0C30\u0C3F\u0C36\u0C40\u0C32\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C2E\u0C41...",
    explain_error: "\u0C2A\u0C4D\u0C30\u0C38\u0C4D\u0C24\u0C41\u0C24\u0C02 \u0C08 \u0C2A\u0C47\u0C1C\u0C40\u0C28\u0C3F \u0C35\u0C3F\u0C35\u0C30\u0C3F\u0C02\u0C1A\u0C21\u0C02 \u0C38\u0C3E\u0C27\u0C4D\u0C2F\u0C02 \u0C15\u0C3E\u0C32\u0C47\u0C26\u0C41.",
    explain_offline: "\u0C35\u0C3F\u0C35\u0C30\u0C23 \u0C38\u0C39\u0C3E\u0C2F\u0C15\u0C41\u0C21\u0C41 \u0C05\u0C02\u0C26\u0C41\u0C2C\u0C3E\u0C1F\u0C41\u0C32\u0C4B \u0C32\u0C47\u0C21\u0C41. \u0C38\u0C4D\u0C25\u0C3E\u0C28\u0C3F\u0C15 \u0C38\u0C30\u0C4D\u0C35\u0C30\u0C4D\u200C\u0C28\u0C41 \u0C2A\u0C4D\u0C30\u0C3E\u0C30\u0C02\u0C2D\u0C3F\u0C02\u0C1A\u0C02\u0C21\u0C3F. \u0C39\u0C46\u0C1A\u0C4D\u0C1A\u0C30\u0C3F\u0C15\u0C32\u0C41 \u0C2E\u0C30\u0C3F\u0C2F\u0C41 \u0C2E\u0C3E\u0C38\u0C4D\u0C15\u0C3F\u0C02\u0C17\u0C4D \u0C0E\u0C2A\u0C4D\u0C2A\u0C41\u0C21\u0C42 \u0C2E\u0C40 \u0C2A\u0C30\u0C3F\u0C15\u0C30\u0C02\u0C32\u0C4B\u0C28\u0C47 \u0C2A\u0C28\u0C3F\u0C1A\u0C47\u0C38\u0C4D\u0C24\u0C3E\u0C2F\u0C3F \u2014 \u0C35\u0C3F\u0C35\u0C30\u0C23 \u0C2E\u0C3E\u0C24\u0C4D\u0C30\u0C2E\u0C47 \u0C2E\u0C3E\u0C38\u0C4D\u0C15\u0C4D \u0C1A\u0C47\u0C38\u0C3F\u0C28 \u0C35\u0C1A\u0C28\u0C3E\u0C28\u0C4D\u0C28\u0C3F \u0C15\u0C4D\u0C32\u0C4C\u0C21\u0C4D\u200C\u0C15\u0C41 \u0C2A\u0C02\u0C2A\u0C41\u0C24\u0C41\u0C02\u0C26\u0C3F.",
    explain_safe_summary: "\u0C2A\u0C47\u0C1C\u0C40 \u0C38\u0C3E\u0C30\u0C3E\u0C02\u0C36\u0C02:",
    state_unsupported_page: "\u0C2C\u0C4D\u0C30\u0C4C\u0C1C\u0C30\u0C4D \u0C05\u0C02\u0C24\u0C30\u0C4D\u0C17\u0C24 \u0C2A\u0C47\u0C1C\u0C40\u0C32\u0C32\u0C4B \u0C38\u0C16 \u0C35\u0C3F\u0C36\u0C4D\u0C30\u0C3E\u0C02\u0C24\u0C3F\u0C17\u0C3E \u0C09\u0C02\u0C1F\u0C41\u0C02\u0C26\u0C3F. \u0C07\u0C15\u0C4D\u0C15\u0C21 \u0C2E\u0C40\u0C30\u0C41 \u0C38\u0C41\u0C30\u0C15\u0C4D\u0C37\u0C3F\u0C24\u0C02\u0C17\u0C3E \u0C09\u0C28\u0C4D\u0C28\u0C3E\u0C30\u0C41.",
    state_page_loading: "\u0C08 \u0C2A\u0C47\u0C1C\u0C40 \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C28\u0C41 \u0C2A\u0C30\u0C3F\u0C36\u0C40\u0C32\u0C3F\u0C38\u0C4D\u0C24\u0C41\u0C28\u0C4D\u0C28\u0C3E\u0C2E\u0C41...",
    state_active_protecting: "\u0C38\u0C16 \u0C2E\u0C40 \u0C38\u0C4D\u0C15\u0C4D\u0C30\u0C40\u0C28\u0C4D\u200C\u0C2A\u0C48 \u0C30\u0C15\u0C4D\u0C37\u0C23 \u0C15\u0C32\u0C4D\u0C2A\u0C3F\u0C38\u0C4D\u0C24\u0C4B\u0C02\u0C26\u0C3F."
  },
  hi: {
    app_name: "\u0938\u0916\u093E (Sakha)",
    app_subtitle: "\u0906\u092A\u0915\u093E \u0921\u093F\u091C\u093F\u091F\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0938\u093E\u0925\u0940",
    warning_danger_title: "\u0915\u0943\u092A\u092F\u093E \u0930\u0941\u0915\u0947\u0902: \u092F\u0939 \u0938\u093E\u0907\u091F \u0905\u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u094B \u0938\u0915\u0924\u0940 \u0939\u0948",
    warning_caution_title: "\u0927\u094D\u092F\u093E\u0928 \u0938\u0947 \u0926\u0947\u0916\u0947\u0902: \u0915\u0941\u091B \u0905\u0938\u093E\u092E\u093E\u0928\u094D\u092F \u0932\u0917 \u0930\u0939\u093E \u0939\u0948",
    warning_safe_title: "\u092F\u0939 \u092A\u0947\u091C \u0909\u092A\u092F\u094B\u0917 \u0915\u0947 \u0932\u093F\u090F \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0932\u0917\u0924\u093E \u0939\u0948",
    rule_fake_domain: "\u092F\u0939 \u0935\u0947\u092C \u092A\u0924\u093E \u0915\u093F\u0938\u0940 \u0905\u0938\u0932\u0940 \u0935\u0947\u092C\u0938\u093E\u0907\u091F \u0915\u0940 \u0928\u0915\u0932\u0940 \u0915\u0949\u092A\u0940 \u0932\u0917\u0924\u093E \u0939\u0948\u0964 \u0907\u0938 \u092A\u0947\u091C \u0915\u094B \u092C\u0902\u0926 \u0915\u0930\u0947\u0902\u0964",
    rule_pin_to_receive: "\u0905\u092A\u0928\u093E \u092F\u0942\u092A\u0940\u0906\u0908 \u092A\u093F\u0928 \u0928 \u0921\u093E\u0932\u0947\u0902\u0964 \u092A\u093F\u0928 \u0915\u0947\u0935\u0932 \u092A\u0948\u0938\u0947 \u092D\u0947\u091C\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0939\u094B\u0924\u093E \u0939\u0948, \u092A\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u092D\u0940 \u0928\u0939\u0940\u0902\u0964",
    rule_sensitive_combo: "\u092F\u0939\u093E\u0901 \u0915\u093E\u0930\u094D\u0921 \u0935\u093F\u0935\u0930\u0923 \u0928 \u0926\u0947\u0902\u0964 \u092F\u0939 \u0905\u0928\u0927\u093F\u0915\u0943\u0924 \u092A\u0947\u091C \u0906\u092A\u0915\u0947 \u0915\u093E\u0930\u094D\u0921 \u0915\u093E \u0928\u0902\u092C\u0930, \u0938\u0940\u0935\u0940\u0935\u0940 \u0914\u0930 \u092A\u093F\u0928 \u092E\u093E\u0902\u0917 \u0930\u0939\u093E \u0939\u0948\u0964",
    rule_urgency_threat: "\u091C\u0932\u094D\u0926\u092C\u093E\u091C\u0940 \u0928 \u0915\u0930\u0947\u0902\u0964 \u0905\u0938\u0932\u0940 \u092C\u0948\u0902\u0915 \u0916\u093E\u0924\u093E \u0924\u0941\u0930\u0902\u0924 \u092C\u0902\u0926 \u0915\u0930\u0928\u0947 \u0915\u0940 \u0927\u092E\u0915\u0940 \u0928\u0939\u0940\u0902 \u0926\u0947\u0924\u0947\u0964",
    rule_apk_download: "\u0907\u0938 \u092B\u093C\u093E\u0907\u0932 \u0915\u094B \u0907\u0902\u0938\u094D\u091F\u0949\u0932 \u0928 \u0915\u0930\u0947\u0902\u0964 \u092F\u0939 \u092A\u0947\u091C \u0905\u0928\u091C\u093E\u0928 \u092E\u094B\u092C\u093E\u0907\u0932 \u092B\u093C\u093E\u0907\u0932 \u0921\u093E\u0909\u0928\u0932\u094B\u0921 \u0915\u0930\u0928\u0947 \u0915\u094B \u0915\u0939 \u0930\u0939\u093E \u0939\u0948\u0964",
    masked_badge: "\u0906\u092A\u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0947 \u0932\u093F\u090F \u091B\u093F\u092A\u093E\u092F\u093E \u0917\u092F\u093E",
    tap_to_reveal: "\u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902",
    tap_to_hide: "\u091B\u093F\u092A\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u091F\u0948\u092A \u0915\u0930\u0947\u0902",
    btn_understand_leave: "\u0907\u0938 \u092A\u0947\u091C \u0938\u0947 \u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0947\u0902 (\u0905\u0928\u0941\u0936\u0902\u0938\u093F\u0924)",
    btn_proceed_anyway: "\u092E\u0941\u091D\u0947 \u0938\u092E\u091D \u0906\u092F\u093E, \u092B\u093F\u0930 \u092D\u0940 \u091C\u093E\u0930\u0940 \u0930\u0916\u0947\u0902",
    btn_explain: "\u092F\u0939 \u092A\u0947\u091C \u092E\u0941\u091D\u0938\u0947 \u0915\u094D\u092F\u093E \u092E\u093E\u0902\u0917 \u0930\u0939\u093E \u0939\u0948?",
    consent_title: "\u0938\u0916\u093E \u092E\u0947\u0902 \u0906\u092A\u0915\u093E \u0938\u094D\u0935\u093E\u0917\u0924 \u0939\u0948: \u0906\u092A\u0915\u093E \u0921\u093F\u091C\u093F\u091F\u0932 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0938\u093E\u0925\u0940",
    consent_body: "\u0938\u0916\u093E \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0906\u092A\u0915\u0947 \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930 \u0939\u0940 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0948\u0964 \u0906\u092A\u0915\u093E \u0906\u0927\u093E\u0930, \u0915\u093E\u0930\u094D\u0921 \u0935\u093F\u0935\u0930\u0923 \u0915\u092D\u0940 \u0915\u093F\u0938\u0940 \u0938\u0930\u094D\u0935\u0930 \u092A\u0930 \u0928\u0939\u0940\u0902 \u092D\u0947\u091C\u0947 \u091C\u093E\u0924\u0947\u0964",
    consent_agree: "\u092E\u0948\u0902 \u0938\u0939\u092E\u0924 \u0939\u0942\u0901 - \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902",
    rule_safe_detail: "\u0907\u0938 \u0938\u093E\u0907\u091F \u092A\u0930 \u0915\u094B\u0908 \u0927\u094B\u0916\u093E\u0927\u0921\u093C\u0940 \u092F\u093E \u092D\u094D\u0930\u093E\u092E\u0915 \u092A\u0948\u091F\u0930\u094D\u0928 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964",
    loading_explanation: "\u092A\u0947\u091C \u0915\u093E \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0930\u0942\u092A \u0938\u0947 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0915\u093F\u092F\u093E \u091C\u093E \u0930\u0939\u093E \u0939\u0948...",
    explain_error: "\u0907\u0938 \u0938\u092E\u092F \u092A\u0947\u091C \u0915\u0940 \u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u0928\u0939\u0940\u0902 \u0915\u0940 \u091C\u093E \u0938\u0915\u0940\u0964",
    explain_offline: "\u0935\u094D\u092F\u093E\u0916\u094D\u092F\u093E \u0938\u0939\u093E\u092F\u0915 \u0909\u092A\u0932\u092C\u094D\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964 \u0907\u0938 \u0938\u0941\u0935\u093F\u0927\u093E \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u0925\u093E\u0928\u0940\u092F \u0938\u0930\u094D\u0935\u0930 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902\u0964 \u091A\u0947\u0924\u093E\u0935\u0928\u093F\u092F\u093E\u0901 \u0914\u0930 \u092E\u093E\u0938\u094D\u0915\u093F\u0902\u0917 \u0939\u092E\u0947\u0936\u093E \u0907\u0938 \u0921\u093F\u0935\u093E\u0907\u0938 \u092A\u0930 \u091A\u0932\u0924\u0940 \u0939\u0948\u0902 \u2014 \u0915\u0947\u0935\u0932 Explain \u0938\u093E\u0930\u093E\u0902\u0936 \u0915\u094D\u0932\u093E\u0909\u0921 \u0915\u094B \u092E\u093E\u0938\u094D\u0915 \u0915\u093F\u092F\u093E \u0939\u0941\u0906 \u091F\u0947\u0915\u094D\u0938\u094D\u091F \u092D\u0947\u091C\u0924\u093E \u0939\u0948\u0964",
    explain_safe_summary: "\u092A\u0947\u091C \u0938\u093E\u0930\u093E\u0902\u0936:",
    state_unsupported_page: "\u092C\u094D\u0930\u093E\u0909\u091C\u093C\u0930 \u0915\u0947 \u0906\u0902\u0924\u0930\u093F\u0915 \u092A\u0947\u091C\u094B\u0902 \u092A\u0930 \u0938\u0916\u093E \u0928\u093F\u0937\u094D\u0915\u094D\u0930\u093F\u092F \u0930\u0939\u0924\u093E \u0939\u0948\u0964 \u0906\u092A \u092F\u0939\u093E\u0901 \u0938\u0941\u0930\u0915\u094D\u0937\u093F\u0924 \u0939\u0948\u0902\u0964",
    state_page_loading: "\u0907\u0938 \u092A\u0947\u091C \u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u091C\u093E\u0901\u091A\u0940 \u091C\u093E \u0930\u0939\u0940 \u0939\u0948...",
    state_active_protecting: "\u0938\u0916\u093E \u0938\u0915\u094D\u0930\u093F\u092F \u0939\u0948 \u0914\u0930 \u0906\u092A\u0915\u0940 \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0915\u0940 \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u0915\u0930 \u0930\u0939\u093E \u0939\u0948\u0964"
  }
};
function t(key, lang = "en") {
  const dict = STRINGS[lang] || STRINGS.en;
  if (dict && typeof dict[key] === "string" && dict[key].length > 0) {
    return dict[key];
  }
  if (STRINGS.en && typeof STRINGS.en[key] === "string" && STRINGS.en[key].length > 0) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(`[Sakha i18n] Missing key "${key}" for locale "${lang}". Falling back to English.`);
    }
    return STRINGS.en[key];
  }
  if (typeof console !== "undefined" && console.warn) {
    console.warn(`[Sakha i18n] Unknown translation key "${key}" requested for locale "${lang}".`);
  }
  return "";
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
  const startTime = typeof performance !== "undefined" ? performance.now() : Date.now();
  const {
    url = "",
    pageText = "",
    inputs = [],
    links = [],
    domStats = { fieldsCount: inputs.length, formsCount: 0, linksCount: links.length, framesCount: 0 },
    classifiedFields = []
  } = pageContext;
  const hostname = extractHostname(url);
  const isAllowlisted = isAllowlistedDomain(hostname);
  const rulesTriggered = [];
  const rulesDetailed = [];
  let highestLevel = "safe";
  let primaryKey = "warning_safe_title";
  const lookalike = checkLookalikeDomain(hostname);
  const check1Result = {
    id: "CHECK_DOMAIN",
    name: "Domain Reputation & Typosquatting",
    passed: !lookalike.isLookalike,
    detail: lookalike.isLookalike ? lookalike.reason : isAllowlisted ? "Domain is on official allowlist" : "No lookalike or typosquatting patterns detected"
  };
  if (lookalike.isLookalike) {
    highestLevel = "danger";
    rulesTriggered.push("LOOKALIKE_DOMAIN");
    rulesDetailed.push({
      ruleId: "LOOKALIKE_DOMAIN",
      name: "Lookalike / Phishing Domain",
      weight: 90,
      severity: "danger",
      reason: lookalike.reason
    });
    primaryKey = "rule_fake_domain";
  }
  const upiTrap = checkUPITraps(pageText);
  const check2Result = {
    id: "CHECK_UPI_TRAP",
    name: "UPI PIN Collect Traps",
    passed: !upiTrap.detected,
    detail: upiTrap.detected ? "Found 'Enter PIN to receive money' pattern" : "No reverse PIN collect patterns found"
  };
  if (upiTrap.detected) {
    highestLevel = "danger";
    rulesTriggered.push("UPI_PIN_RECEIVE_TRAP");
    rulesDetailed.push({
      ruleId: "UPI_PIN_RECEIVE_TRAP",
      name: "UPI PIN Collection Trap",
      weight: 85,
      severity: "danger",
      reason: "Page asks for UPI PIN under pretext of receiving money or cashback"
    });
    primaryKey = "rule_pin_to_receive";
  }
  const sensitiveCombo = checkSensitiveFieldCombo(inputs, isAllowlisted);
  const check3Result = {
    id: "CHECK_SENSITIVE_COMBO",
    name: "Credential Harvesting Combination",
    passed: !sensitiveCombo.detected,
    detail: sensitiveCombo.detected ? "Simultaneous Card + CVV + PIN/OTP requested on non-allowlisted site" : "No dangerous credential combinations detected"
  };
  if (sensitiveCombo.detected) {
    highestLevel = "danger";
    rulesTriggered.push("SENSITIVE_CREDENTIAL_COMBO");
    rulesDetailed.push({
      ruleId: "SENSITIVE_CREDENTIAL_COMBO",
      name: "Critical Credential Harvest",
      weight: 80,
      severity: "danger",
      reason: "Unofficial page requests complete card credentials (number, CVV, and PIN/OTP)"
    });
    primaryKey = "rule_sensitive_combo";
  }
  const appDownload = checkMaliciousAppDownloads(pageText, links);
  const check4Result = {
    id: "CHECK_APP_DOWNLOAD",
    name: "Malicious App & APK Prompts",
    passed: !appDownload.detected,
    detail: appDownload.detected ? appDownload.reason : "No unknown APKs or remote-desktop tool downloads detected"
  };
  if (appDownload.detected) {
    if (highestLevel !== "danger")
      highestLevel = "caution";
    rulesTriggered.push("MALICIOUS_APP_DOWNLOAD");
    rulesDetailed.push({
      ruleId: "MALICIOUS_APP_DOWNLOAD",
      name: "Suspicious App Prompt",
      weight: 65,
      severity: "caution",
      reason: appDownload.reason
    });
    if (primaryKey === "warning_safe_title")
      primaryKey = "rule_apk_download";
  }
  const urgency = checkUrgencyAndThreats(pageText);
  const check5Result = {
    id: "CHECK_URGENCY",
    name: "Intimidation & Pressure Tactics",
    passed: !urgency.detected,
    detail: urgency.detected ? `Pressure tactics found (${urgency.matches.join(", ")})` : "No urgency or intimidation phrasing detected"
  };
  if (urgency.detected) {
    if (highestLevel !== "danger")
      highestLevel = "caution";
    rulesTriggered.push("URGENCY_THREAT_LANGUAGE");
    rulesDetailed.push({
      ruleId: "URGENCY_THREAT_LANGUAGE",
      name: "Urgency / Threat Intimidation",
      weight: 50,
      severity: "caution",
      reason: `Intimidation keywords detected: ${urgency.matches.join(", ")}`
    });
    if (primaryKey === "warning_safe_title")
      primaryKey = "rule_urgency_threat";
  }
  const checks = [check1Result, check2Result, check3Result, check4Result, check5Result];
  const passedChecksCount = checks.filter((c) => c.passed).length;
  const totalChecksCount = checks.length;
  const endTime = typeof performance !== "undefined" ? performance.now() : Date.now();
  const analysisTimeMs = +(endTime - startTime).toFixed(2);
  const safeVerdictEn = `No risk signals found among ${totalChecksCount} checks.`;
  const safeVerdictTe = `${totalChecksCount} \u0C2D\u0C26\u0C4D\u0C30\u0C24\u0C3E \u0C24\u0C28\u0C3F\u0C16\u0C40\u0C32\u0C32\u0C4B \u0C0E\u0C32\u0C3E\u0C02\u0C1F\u0C3F \u0C05\u0C28\u0C41\u0C2E\u0C3E\u0C28\u0C3E\u0C38\u0C4D\u0C2A\u0C26 \u0C38\u0C02\u0C15\u0C47\u0C24\u0C3E\u0C32\u0C41 \u0C15\u0C28\u0C41\u0C17\u0C4A\u0C28\u0C2C\u0C21\u0C32\u0C47\u0C26\u0C41.`;
  const safeVerdictHi = `${totalChecksCount} \u0938\u0941\u0930\u0915\u094D\u0937\u093E \u091C\u093E\u0902\u091A\u094B\u0902 \u092E\u0947\u0902 \u0915\u094B\u0908 \u091C\u094B\u0916\u093F\u092E \u0938\u0902\u0915\u0947\u0924 \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E\u0964`;
  const reasonEn = highestLevel === "safe" ? safeVerdictEn : t(primaryKey, "en");
  const reasonTe = highestLevel === "safe" ? safeVerdictTe : t(primaryKey, "te");
  const reasonHi = highestLevel === "safe" ? safeVerdictHi : t(primaryKey, "hi");
  return {
    level: highestLevel,
    rulesTriggered,
    rulesDetailed,
    checks,
    totalChecksCount,
    passedChecksCount,
    reasonEn,
    reasonTe,
    reasonHi,
    hostname,
    isAllowlisted,
    domStats,
    fieldsTable: classifiedFields,
    analysisTimeMs
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
function validateIndianMobile(raw) {
  if (typeof raw !== "string")
    return false;
  const cleaned = raw.trim().replace(/[\s\-\(\)]/g, "");
  return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleaned);
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
function validateUPI(raw) {
  if (typeof raw !== "string")
    return false;
  return /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(raw.trim());
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
var GENERIC_FIELD_PATTERNS = {
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
var SENSITIVE_FIELD_RE = /aadhaar|aadhar|pan[_\-\s]?(number|no|card)?|bank[_\-\s]?acc|account[_\-\s]?no|account[_\-\s]?number|ifsc|card[_\-\s]?(number|no)?|credit|debit|cvv|cvc|otp|passport|voter|driving|licence|license|ssn|upi|mpin/i;
function classifyGenericField(fieldInfo) {
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
    confidence: 0.2,
    evidence: combinedEvidence ? `Standard input element: "${combinedEvidence.slice(0, 30)}"` : "Standard input element without explicit sensitive attributes"
  };
}
function isSensitiveFieldByAttr(input) {
  const attrs = [
    input.name,
    input.id,
    input.placeholder,
    input.getAttribute("autocomplete"),
    input.getAttribute("aria-label"),
    input.getAttribute("aria-labelledby")
  ];
  return attrs.some((a) => a && SENSITIVE_FIELD_RE.test(a));
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
      const activeEl = documentRoot.activeElement || (typeof document !== "undefined" ? document.activeElement : null);
      if (activeEl === input)
        return;
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
  let rawDomain = payload.domain || (typeof window !== "undefined" ? window.location?.hostname : "") || "unknown";
  try {
    if (rawDomain.includes("://") || rawDomain.includes("?")) {
      const parsed = new URL(rawDomain.startsWith("http") ? rawDomain : `https://${rawDomain}`);
      rawDomain = parsed.hostname;
    }
  } catch {
    rawDomain = rawDomain.split("?")[0].split("/")[0];
  }
  const safePayload = { ...payload };
  delete safePayload.url;
  delete safePayload.value;
  delete safePayload.inputValue;
  delete safePayload.text;
  safePayload.domain = rawDomain;
  const event = {
    id: "evt_" + Math.random().toString(36).slice(2, 9),
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    eventType,
    domain: rawDomain,
    ...safePayload
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
console.log("[Sakha] On-device safety companion active on:", window.location.hostname);
var currentLanguage = "en";
var pageEvaluation = null;
var reevaluationTimer = null;
function collectAllInputNodes(root = document) {
  const elements = [];
  function traverse(node) {
    if (!node)
      return;
    if (node.shadowRoot) {
      traverse(node.shadowRoot);
    }
    if (node.querySelectorAll) {
      const inputs = node.querySelectorAll("input, select, textarea");
      inputs.forEach((el) => elements.push(el));
      const iframes = node.querySelectorAll("iframe");
      iframes.forEach((iframe) => {
        try {
          if (iframe.contentDocument && iframe.contentDocument.body) {
            traverse(iframe.contentDocument.body);
          }
        } catch {
        }
      });
    }
    if (node.children) {
      for (const child of node.children) {
        if (child.shadowRoot)
          traverse(child.shadowRoot);
      }
    }
  }
  traverse(root);
  return elements;
}
function findAssociatedLabel(el) {
  if (!el)
    return "";
  if (el.id) {
    const labelEl = document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
    if (labelEl && labelEl.innerText)
      return labelEl.innerText.trim();
  }
  const parentLabel = el.closest("label");
  if (parentLabel && parentLabel.innerText) {
    return parentLabel.innerText.replace(el.value || "", "").trim();
  }
  const labelledBy = el.getAttribute("aria-labelledby");
  if (labelledBy) {
    const labelNode = document.getElementById(labelledBy);
    if (labelNode && labelNode.innerText)
      return labelNode.innerText.trim();
  }
  if (el.getAttribute("aria-label")) {
    return el.getAttribute("aria-label").trim();
  }
  const prev = el.previousElementSibling;
  if (prev && prev.innerText && prev.innerText.length < 50) {
    return prev.innerText.trim();
  }
  return "";
}
function extractGenericPageFields() {
  const rawNodes = collectAllInputNodes(document);
  const fields = [];
  rawNodes.forEach((el) => {
    const type = (el.getAttribute("type") || "text").toLowerCase();
    if (["submit", "button", "reset", "image"].includes(type))
      return;
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
function highlightAnalyzedFields(fields) {
  document.querySelectorAll(".sakha-analyzed-outline").forEach((el) => {
    el.classList.remove("sakha-analyzed-outline");
  });
  fields.forEach((f) => {
    if (f.element && f.element.classList) {
      f.element.classList.add("sakha-analyzed-outline");
    }
  });
}
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
  const card = document.createElement("div");
  card.className = "sakha-modal-card caution";
  card.style.maxWidth = "480px";
  const header = document.createElement("div");
  header.className = "sakha-modal-header";
  const iconEl = document.createElement("span");
  iconEl.className = "sakha-icon";
  iconEl.textContent = "\u{1F6E1}\uFE0F";
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
    if (reevaluationTimer)
      clearTimeout(reevaluationTimer);
    reevaluationTimer = setTimeout(() => {
      runPageSafetyCheck();
    }, 400);
  });
  if (document.body) {
    observer.observe(document.body, { childList: true, subtree: true });
  }
  runPageSafetyCheck();
}
function runPageSafetyCheck() {
  const pageText = document.body ? document.body.innerText || "" : "";
  const classifiedFields = extractGenericPageFields();
  highlightAnalyzedFields(classifiedFields);
  const inputElements = classifiedFields.map((f) => ({
    name: f.name || "",
    id: f.id || "",
    placeholder: "",
    type: "",
    label: f.label || ""
  }));
  const linkElements = Array.from(document.querySelectorAll("a[href]")).map((a) => a.href);
  const formsCount = document.querySelectorAll("form").length;
  const framesCount = document.querySelectorAll("iframe, frame").length;
  const serializedFields = classifiedFields.map((f) => ({
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
function renderSeniorWarningModal(evaluation) {
  if (document.getElementById("sakha-alert-modal-root"))
    return;
  const root = document.createElement("div");
  root.id = "sakha-alert-modal-root";
  root.setAttribute("role", "dialog");
  root.setAttribute("aria-modal", "true");
  root.setAttribute("aria-labelledby", "sakha-alert-title");
  root.setAttribute("aria-describedby", "sakha-alert-desc");
  const isDanger = evaluation.level === "danger";
  const icon = isDanger ? "\u{1F6A8}" : "\u26A0\uFE0F";
  const titleKey = isDanger ? "warning_danger_title" : "warning_caution_title";
  const titleEn = t(titleKey, "en");
  const titleTe = t(titleKey, "te");
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
  btnLeave.textContent = `\u{1F6E1}\uFE0F ${t("btn_understand_leave", "en")} / ${t("btn_understand_leave", "te")}`;
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
    const isExtensionSender = sender?.id === chrome.runtime.id;
    if (!isExtensionSender) {
      return false;
    }
    if (msg.type === "GET_PAGE_SAFETY") {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2kxOG4uanMiLCAic3JjL3NjYW1EZXRlY3Rvci5qcyIsICJzcmMvcGlpLmpzIiwgInNyYy9tYXNrRW5naW5lLmpzIiwgInNyYy9ldmVudExvZ2dlci5qcyIsICJzcmMvY29udGVudF9zYWtoYS5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBpMThuLmpzIFx1MjAxNCBTYWtoYSBCaWxpbmd1YWwgJiBUcmlsaW5ndWFsIFN0cmluZyBSZXNvdXJjZSBGaWxlXG4gKlxuICogU3VwcG9ydGVkIGxvY2FsZXM6ICdlbicgKEVuZ2xpc2gpLCAndGUnIChUZWx1Z3UgLSBcdTBDMjRcdTBDNDZcdTBDMzJcdTBDNDFcdTBDMTdcdTBDNDEpLCAnaGknIChIaW5kaSAtIFx1MDkzOVx1MDkzRlx1MDkyOFx1MDk0RFx1MDkyNlx1MDk0MClcbiAqIEFsbCBub24tRW5nbGlzaCBzdHJpbmdzIGFyZSBkb2N1bWVudGVkIGluIFNUUklOR1NfVE9fUkVWSUVXLm1kIGZvciBuYXRpdmUtc3BlYWtlciBhdWRpdC5cbiAqL1xuXG5leHBvcnQgY29uc3QgU1RSSU5HUyA9IHtcbiAgZW46IHtcbiAgICBhcHBfbmFtZTogXCJTYWtoYVwiLFxuICAgIGFwcF9zdWJ0aXRsZTogXCJZb3VyIERpZ2l0YWwgU2FmZXR5IENvbXBhbmlvblwiLFxuICAgIHdhcm5pbmdfZGFuZ2VyX3RpdGxlOiBcIlBsZWFzZSBTdG9wOiBUaGlzIFNpdGUgTWF5IEJlIFVuc2FmZVwiLFxuICAgIHdhcm5pbmdfY2F1dGlvbl90aXRsZTogXCJDaGVjayBDYXJlZnVsbHk6IFNvbWV0aGluZyBMb29rcyBVbnVzdWFsXCIsXG4gICAgd2FybmluZ19zYWZlX3RpdGxlOiBcIlRoaXMgcGFnZSBsb29rcyBzYWZlIHRvIHVzZVwiLFxuICAgIFxuICAgIHJ1bGVfZmFrZV9kb21haW46IFwiVGhpcyB3ZWIgYWRkcmVzcyBsb29rcyBsaWtlIGEgZmFrZSBjb3B5IG9mIGEgcmVhbCB3ZWJzaXRlLiBDbG9zZSB0aGlzIHBhZ2UuXCIsXG4gICAgcnVsZV9waW5fdG9fcmVjZWl2ZTogXCJEbyBub3QgZW50ZXIgeW91ciBVUEkgUElOLiBZb3Ugb25seSB0eXBlIHlvdXIgUElOIHRvIHNlbmQgbW9uZXksIG5ldmVyIHRvIHJlY2VpdmUgaXQuXCIsXG4gICAgcnVsZV9zZW5zaXRpdmVfY29tYm86IFwiRG8gbm90IHNoYXJlIGNhcmQgZGV0YWlscyBoZXJlLiBUaGlzIHVub2ZmaWNpYWwgcGFnZSBpcyBhc2tpbmcgZm9yIHlvdXIgY2FyZCBudW1iZXIsIENWViwgYW5kIFBJTi5cIixcbiAgICBydWxlX3VyZ2VuY3lfdGhyZWF0OiBcIlRha2UgeW91ciB0aW1lLiBSZWFsIGJhbmtzIGRvIG5vdCB0aHJlYXRlbiB0byBibG9jayB5b3VyIGFjY291bnQgaW1tZWRpYXRlbHkuXCIsXG4gICAgcnVsZV9hcGtfZG93bmxvYWQ6IFwiRG8gbm90IGluc3RhbGwgdGhpcyBkb3dubG9hZC4gVGhpcyBwYWdlIGlzIGFza2luZyB5b3UgdG8gaW5zdGFsbCBhbiB1bmtub3duIG1vYmlsZSBmaWxlLlwiLFxuICAgIFxuICAgIG1hc2tlZF9iYWRnZTogXCJIaWRkZW4gZm9yIHlvdXIgcHJvdGVjdGlvblwiLFxuICAgIHRhcF90b19yZXZlYWw6IFwiVGFwIG9uY2UgdG8gc2VlXCIsXG4gICAgdGFwX3RvX2hpZGU6IFwiVGFwIHRvIGhpZGVcIixcbiAgICBidG5fdW5kZXJzdGFuZF9sZWF2ZTogXCJMZWF2ZSB0aGlzIHBhZ2UgKFJlY29tbWVuZGVkKVwiLFxuICAgIGJ0bl9wcm9jZWVkX2FueXdheTogXCJJIHVuZGVyc3RhbmQsIGNvbnRpbnVlIGFueXdheVwiLFxuICAgIGJ0bl9leHBsYWluOiBcIldoYXQgaXMgdGhpcyBwYWdlIGFza2luZyBtZT9cIixcbiAgICBcbiAgICBjb25zZW50X3RpdGxlOiBcIldlbGNvbWUgdG8gU2FraGE6IFlvdXIgRGlnaXRhbCBTYWZldHkgQ29tcGFuaW9uXCIsXG4gICAgY29uc2VudF9ib2R5OiBcIlNha2hhIHN0YXlzIGNvbXBsZXRlbHkgb24geW91ciBkZXZpY2UuIFlvdXIgQWFkaGFhciwgY2FyZHMsIGFuZCBwZXJzb25hbCBkZXRhaWxzIGFyZSBuZXZlciBzZW50IHRvIGFueSBzZXJ2ZXIuXCIsXG4gICAgY29uc2VudF9hZ3JlZTogXCJJIEFncmVlICYgU3RhcnQgUHJvdGVjdGlvblwiLFxuICAgIFxuICAgIHJ1bGVfc2FmZV9kZXRhaWw6IFwiTm8gc2NhbSBvciBkZWNlcHRpdmUgcGF0dGVybnMgZGV0ZWN0ZWQgb24gdGhpcyBzaXRlLlwiLFxuXG4gICAgbG9hZGluZ19leHBsYW5hdGlvbjogXCJDaGVja2luZyB3aGF0IHRoaXMgcGFnZSBpcyBhc2tpbmcgc2FmZWx5Li4uXCIsXG4gICAgZXhwbGFpbl9lcnJvcjogXCJDb3VsZCBub3QgZXhwbGFpbiB0aGlzIHBhZ2UgcmlnaHQgbm93LlwiLFxuICAgIGV4cGxhaW5fb2ZmbGluZTogXCJFeHBsYW5hdGlvbiBoZWxwZXIgaXMgbm90IHJ1bm5pbmcuIFN0YXJ0IHRoZSBsb2NhbCBzZXJ2ZXIgdG8gdXNlIHRoaXMgZmVhdHVyZS4gV2FybmluZ3MgYW5kIG1hc2tpbmcgYWx3YXlzIHJ1biBvbiB0aGlzIGRldmljZSBcdTIwMTQgb25seSB0aGUgRXhwbGFpbiBzdW1tYXJ5IHNlbmRzIG1hc2tlZCB0ZXh0IHRvIHRoZSBjbG91ZC5cIixcbiAgICBleHBsYWluX3NhZmVfc3VtbWFyeTogXCJQYWdlIFN1bW1hcnk6XCIsXG5cbiAgICBzdGF0ZV91bnN1cHBvcnRlZF9wYWdlOiBcIlNha2hhIHN0YXlzIGlkbGUgb24gaW50ZXJuYWwgYnJvd3NlciBwYWdlcy4gWW91IGFyZSBzYWZlIGhlcmUuXCIsXG4gICAgc3RhdGVfcGFnZV9sb2FkaW5nOiBcIkNoZWNraW5nIHRoaXMgcGFnZSBmb3Igc2FmZXR5Li4uXCIsXG4gICAgc3RhdGVfYWN0aXZlX3Byb3RlY3Rpbmc6IFwiU2FraGEgaXMgYWN0aXZlIGFuZCBwcm90ZWN0aW5nIHlvdXIgc2NyZWVuLlwiXG4gIH0sXG4gIFxuICB0ZToge1xuICAgIGFwcF9uYW1lOiBcIlx1MEMzOFx1MEMxNiAoU2FraGEpXCIsXG4gICAgYXBwX3N1YnRpdGxlOiBcIlx1MEMyRVx1MEM0MCBcdTBDMjFcdTBDM0ZcdTBDMUNcdTBDM0ZcdTBDMUZcdTBDMzJcdTBDNEQgXHUwQzJEXHUwQzI2XHUwQzREXHUwQzMwXHUwQzI0XHUwQzNFIFx1MEMzOFx1MEMzOVx1MEMzRVx1MEMyRlx1MEMxNVx1MEM0MVx1MEMyMVx1MEM0MVwiLFxuICAgIHdhcm5pbmdfZGFuZ2VyX3RpdGxlOiBcIlx1MEMyNlx1MEMyRlx1MEMxQVx1MEM0N1x1MEMzOFx1MEMzRiBcdTBDMDZcdTBDMTdcdTBDMDJcdTBDMjFcdTBDM0Y6IFx1MEMwOCBcdTBDMzhcdTBDNDhcdTBDMUZcdTBDNEQgXHUwQzM4XHUwQzQxXHUwQzMwXHUwQzE1XHUwQzREXHUwQzM3XHUwQzNGXHUwQzI0XHUwQzAyIFx1MEMxNVx1MEMzRVx1MEMxNVx1MEMyQVx1MEM0Qlx1MEMzNVx1MEMxQVx1MEM0RFx1MEMxQVx1MEM0MVwiLFxuICAgIHdhcm5pbmdfY2F1dGlvbl90aXRsZTogXCJcdTBDMUNcdTBDM0VcdTBDMTdcdTBDNERcdTBDMzBcdTBDMjRcdTBDNERcdTBDMjRcdTBDMTdcdTBDM0UgXHUwQzFBXHUwQzQyXHUwQzIxXHUwQzAyXHUwQzIxXHUwQzNGOiBcdTBDMDdcdTBDMTVcdTBDNERcdTBDMTVcdTBDMjEgXHUwQzBGXHUwQzI2XHUwQzRCIFx1MEMyNFx1MEM0N1x1MEMyMVx1MEMzRVx1MEMxN1x1MEMzRSBcdTBDMDlcdTBDMDJcdTBDMjZcdTBDM0ZcIixcbiAgICB3YXJuaW5nX3NhZmVfdGl0bGU6IFwiXHUwQzA4IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MCBcdTBDMDlcdTBDMkFcdTBDMkZcdTBDNEJcdTBDMTdcdTBDM0ZcdTBDMDJcdTBDMUFcdTBDMjFcdTBDM0VcdTBDMjhcdTBDM0ZcdTBDMTVcdTBDM0YgXHUwQzM4XHUwQzQxXHUwQzMwXHUwQzE1XHUwQzREXHUwQzM3XHUwQzNGXHUwQzI0XHUwQzAyXHUwQzE3XHUwQzNFIFx1MEMwOVx1MEMwMlx1MEMyNlx1MEMzRlwiLFxuICAgIFxuICAgIHJ1bGVfZmFrZV9kb21haW46IFwiXHUwQzA4IFx1MEMzNVx1MEM0Nlx1MEMyQ1x1MEM0RFx1MjAwQ1x1MEMzOFx1MEM0OFx1MEMxRlx1MEM0RCBcdTBDMUFcdTBDM0ZcdTBDMzBcdTBDNDFcdTBDMjhcdTBDM0VcdTBDMkVcdTBDM0UgXHUwQzA1XHUwQzM4XHUwQzMyXHUwQzQ4XHUwQzI4IFx1MEMzOFx1MEM0OFx1MEMxRlx1MEM0RCBcdTBDMjhcdTBDMTVcdTBDM0ZcdTBDMzJcdTBDNDAgXHUwQzE1XHUwQzNFXHUwQzJBXHUwQzQwXHUwQzMyXHUwQzNFIFx1MEMwOVx1MEMwMlx1MEMyNlx1MEMzRi4gXHUwQzA4IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MFx1MEMyOFx1MEMzRiBcdTBDMkVcdTBDNDJcdTBDMzhcdTBDM0ZcdTBDMzVcdTBDNDdcdTBDMkZcdTBDMDJcdTBDMjFcdTBDM0YuXCIsXG4gICAgcnVsZV9waW5fdG9fcmVjZWl2ZTogXCJcdTBDMkVcdTBDNDAgVVBJIFx1MEMyQVx1MEMzRlx1MEMyOFx1MEM0RCBcdTBDMjhcdTBDMkVcdTBDNEJcdTBDMjZcdTBDNDEgXHUwQzFBXHUwQzQ3XHUwQzJGXHUwQzM1XHUwQzI2XHUwQzREXHUwQzI2XHUwQzQxLiBcdTBDMjFcdTBDMkNcdTBDNERcdTBDMkNcdTBDNDEgXHUwQzJBXHUwQzAyXHUwQzJBXHUwQzIxXHUwQzNFXHUwQzI4XHUwQzNGXHUwQzE1XHUwQzNGIFx1MEMyRVx1MEMzRVx1MEMyNFx1MEM0RFx1MEMzMFx1MEMyRVx1MEM0NyBcdTBDMkFcdTBDM0ZcdTBDMjhcdTBDNEQgXHUwQzE1XHUwQzNFXHUwQzM1XHUwQzNFXHUwQzMyXHUwQzNGLCBcdTBDMjRcdTBDNDBcdTBDMzhcdTBDNDFcdTBDMTVcdTBDNEJcdTBDMzVcdTBDMjFcdTBDM0VcdTBDMjhcdTBDM0ZcdTBDMTVcdTBDM0YgXHUwQzE1XHUwQzNFXHUwQzI2XHUwQzQxLlwiLFxuICAgIHJ1bGVfc2Vuc2l0aXZlX2NvbWJvOiBcIlx1MEMwN1x1MEMxNVx1MEM0RFx1MEMxNVx1MEMyMSBcdTBDMkVcdTBDNDAgXHUwQzE1XHUwQzNFXHUwQzMwXHUwQzREXHUwQzIxXHUwQzREIFx1MEMzNVx1MEMzRlx1MEMzNVx1MEMzMFx1MEMzRVx1MEMzMlx1MEM0MSBcdTBDMDdcdTBDMzVcdTBDNERcdTBDMzVcdTBDMzVcdTBDMjZcdTBDNERcdTBDMjZcdTBDNDEuIFx1MEMwOCBcdTBDMDVcdTBDMjhcdTBDMjdcdTBDM0ZcdTBDMTVcdTBDM0VcdTBDMzBcdTBDM0ZcdTBDMTUgXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMxNVx1MEMzRVx1MEMzMFx1MEM0RFx1MEMyMVx1MEM0RCBcdTBDMjhcdTBDMDJcdTBDMkNcdTBDMzBcdTBDNEQsIENWViBcdTBDMkVcdTBDMzBcdTBDM0ZcdTBDMkZcdTBDNDEgXHUwQzJBXHUwQzNGXHUwQzI4XHUwQzREIFx1MEMwNVx1MEMyMVx1MEM0MVx1MEMxN1x1MEM0MVx1MEMyNFx1MEM0Qlx1MEMwMlx1MEMyNlx1MEMzRi5cIixcbiAgICBydWxlX3VyZ2VuY3lfdGhyZWF0OiBcIlx1MEMxNVx1MEMwMlx1MEMxN1x1MEMzRVx1MEMzMFx1MEM0MSBcdTBDMkFcdTBDMjFcdTBDMzVcdTBDMjZcdTBDNERcdTBDMjZcdTBDNDEuIFx1MEMwNVx1MEMzOFx1MEMzMlx1MEM0OFx1MEMyOCBcdTBDMkNcdTBDNERcdTBDMkZcdTBDM0VcdTBDMDJcdTBDMTVcdTBDNDFcdTBDMzJcdTBDNDEgXHUwQzE2XHUwQzNFXHUwQzI0XHUwQzNFIFx1MEMzNVx1MEM0Nlx1MEMwMlx1MEMxRlx1MEMyOFx1MEM0NyBcdTBDMDZcdTBDMTdcdTBDM0ZcdTBDMkFcdTBDNEJcdTBDMjRcdTBDNDFcdTBDMDJcdTBDMjZcdTBDMjhcdTBDM0YgXHUwQzJDXHUwQzQ2XHUwQzI2XHUwQzNGXHUwQzMwXHUwQzNGXHUwQzAyXHUwQzFBXHUwQzM1XHUwQzQxLlwiLFxuICAgIHJ1bGVfYXBrX2Rvd25sb2FkOiBcIlx1MEMwOCBcdTBDMkJcdTBDNDhcdTBDMzJcdTBDNEQgXHUwQzA3XHUwQzI4XHUwQzREXHUyMDBDXHUwQzM4XHUwQzREXHUwQzFGXHUwQzNFXHUwQzMyXHUwQzREIFx1MEMxQVx1MEM0N1x1MEMyRlx1MEMzNVx1MEMyNlx1MEM0RFx1MEMyNlx1MEM0MS4gXHUwQzA4IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MCBcdTBDMjRcdTBDNDZcdTBDMzJcdTBDM0ZcdTBDMkZcdTBDMjhcdTBDM0YgXHUwQzJFXHUwQzRBXHUwQzJDXHUwQzQ4XHUwQzMyXHUwQzREIFx1MEMyQlx1MEM0OFx1MEMzMlx1MEM0RCBcdTBDMjFcdTBDNENcdTBDMjhcdTBDNERcdTIwMENcdTBDMzJcdTBDNEJcdTBDMjFcdTBDNEQgXHUwQzFBXHUwQzQ3XHUwQzM4XHUwQzQxXHUwQzE1XHUwQzRCXHUwQzJFXHUwQzI4XHUwQzNGIFx1MEMxQVx1MEM0Nlx1MEMyQ1x1MEM0MVx1MEMyNFx1MEM0Qlx1MEMwMlx1MEMyNlx1MEMzRi5cIixcbiAgICBcbiAgICBtYXNrZWRfYmFkZ2U6IFwiXHUwQzJFXHUwQzQwIFx1MEMzMFx1MEMxNVx1MEM0RFx1MEMzN1x1MEMyMyBcdTBDMTVcdTBDNEJcdTBDMzhcdTBDMDIgXHUwQzI2XHUwQzNFXHUwQzFBXHUwQzJDXHUwQzIxXHUwQzNGXHUwQzAyXHUwQzI2XHUwQzNGXCIsXG4gICAgdGFwX3RvX3JldmVhbDogXCJcdTBDMUFcdTBDNDJcdTBDMjFcdTBDMUZcdTBDM0VcdTBDMjhcdTBDM0ZcdTBDMTVcdTBDM0YgXHUwQzI0XHUwQzNFXHUwQzE1XHUwQzAyXHUwQzIxXHUwQzNGXCIsXG4gICAgdGFwX3RvX2hpZGU6IFwiXHUwQzJFXHUwQzMzXHUwQzREXHUwQzMzXHUwQzQwIFx1MEMyNlx1MEMzRVx1MEMxQVx1MEMyMVx1MEMzRVx1MEMyOFx1MEMzRlx1MEMxNVx1MEMzRiBcdTBDMjRcdTBDM0VcdTBDMTVcdTBDMDJcdTBDMjFcdTBDM0ZcIixcbiAgICBidG5fdW5kZXJzdGFuZF9sZWF2ZTogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMyOFx1MEM0MVx1MEMwMlx1MEMyMVx1MEMzRiBcdTBDMzVcdTBDNDZcdTBDMzNcdTBDNERcdTBDMzNcdTBDM0ZcdTBDMkFcdTBDNEJcdTBDMDJcdTBDMjFcdTBDM0YgKFx1MEMzOFx1MEMzRlx1MEMyQlx1MEMzRVx1MEMzMFx1MEM0RFx1MEMzOFx1MEM0MSBcdTBDMUFcdTBDNDdcdTBDMkZcdTBDMkNcdTBDMjFcdTBDM0ZcdTBDMDJcdTBDMjZcdTBDM0YpXCIsXG4gICAgYnRuX3Byb2NlZWRfYW55d2F5OiBcIlx1MEMyOFx1MEMzRVx1MEMxNVx1MEM0MSBcdTBDMDVcdTBDMzBcdTBDNERcdTBDMjVcdTBDMkVcdTBDNDhcdTBDMDJcdTBDMjZcdTBDM0YsIFx1MEMwNVx1MEMyRlx1MEMzRlx1MEMyOFx1MEMzRSBcdTBDMTVcdTBDNEFcdTBDMjhcdTBDMzhcdTBDM0VcdTBDMTdcdTBDM0ZcdTBDMDJcdTBDMUFcdTBDMDJcdTBDMjFcdTBDM0ZcIixcbiAgICBidG5fZXhwbGFpbjogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMyOFx1MEMyOFx1MEM0RFx1MEMyOFx1MEM0MSBcdTBDMEZcdTBDMkVcdTBDM0YgXHUwQzA1XHUwQzIxXHUwQzQxXHUwQzE3XHUwQzQxXHUwQzI0XHUwQzRCXHUwQzAyXHUwQzI2XHUwQzNGP1wiLFxuICAgIFxuICAgIGNvbnNlbnRfdGl0bGU6IFwiXHUwQzM4XHUwQzE2IChTYWtoYSkgXHUwQzE1XHUwQzQxIFx1MEMzOFx1MEM0RFx1MEMzNVx1MEMzRVx1MEMxN1x1MEMyNFx1MEMwMjogXHUwQzJFXHUwQzQwIFx1MEMyMVx1MEMzRlx1MEMxQ1x1MEMzRlx1MEMxRlx1MEMzMlx1MEM0RCBcdTBDMkRcdTBDMjZcdTBDNERcdTBDMzBcdTBDMjRcdTBDM0UgXHUwQzM4XHUwQzM5XHUwQzNFXHUwQzJGXHUwQzE1XHUwQzQxXHUwQzIxXHUwQzQxXCIsXG4gICAgY29uc2VudF9ib2R5OiBcIlx1MEMzOFx1MEMxNiBcdTBDMkVcdTBDNDAgXHUwQzJBXHUwQzMwXHUwQzNGXHUwQzE1XHUwQzMwXHUwQzAyXHUwQzMyXHUwQzRCXHUwQzI4XHUwQzQ3IFx1MEMyQVx1MEMyOFx1MEMzRlx1MEMxQVx1MEM0N1x1MEMzOFx1MEM0RFx1MEMyNFx1MEM0MVx1MEMwMlx1MEMyNlx1MEMzRi4gXHUwQzJFXHUwQzQwIFx1MEMwNlx1MEMyN1x1MEMzRVx1MEMzMFx1MEM0RCwgXHUwQzJDXHUwQzREXHUwQzJGXHUwQzNFXHUwQzAyXHUwQzE1XHUwQzREIFx1MEMxNVx1MEMzRVx1MEMzMFx1MEM0RFx1MEMyMVx1MEM0RCBcdTBDMzVcdTBDM0ZcdTBDMzVcdTBDMzBcdTBDM0VcdTBDMzJcdTBDNDEgXHUwQzBGIFx1MEMzOFx1MEMzMFx1MEM0RFx1MEMzNVx1MEMzMFx1MEM0RFx1MjAwQ1x1MEMxNVx1MEM0MSBcdTBDMkFcdTBDMDJcdTBDMkFcdTBDMkNcdTBDMjFcdTBDMzVcdTBDNDEuXCIsXG4gICAgY29uc2VudF9hZ3JlZTogXCJcdTBDMjhcdTBDNDdcdTBDMjhcdTBDNDEgXHUwQzA1XHUwQzAyXHUwQzE3XHUwQzQwXHUwQzE1XHUwQzMwXHUwQzNGXHUwQzM4XHUwQzREXHUwQzI0XHUwQzQxXHUwQzI4XHUwQzREXHUwQzI4XHUwQzNFXHUwQzI4XHUwQzQxIC0gXHUwQzMwXHUwQzE1XHUwQzREXHUwQzM3XHUwQzIzIFx1MEMyQVx1MEM0RFx1MEMzMFx1MEMzRVx1MEMzMFx1MEMwMlx1MEMyRFx1MEMzRlx1MEMwMlx1MEMxQVx1MEMwMlx1MEMyMVx1MEMzRlwiLFxuICAgIFxuICAgIHJ1bGVfc2FmZV9kZXRhaWw6IFwiXHUwQzA4IFx1MEMzOFx1MEM0OFx1MEMxRlx1MEM0RFx1MjAwQ1x1MEMzMlx1MEM0QiBcdTBDMkVcdTBDNEJcdTBDMzhcdTBDMDIgXHUwQzMyXHUwQzQ3XHUwQzI2XHUwQzNFIFx1MEMyRVx1MEM0Qlx1MEMzOFx1MEMyQVx1MEM0Mlx1MEMzMFx1MEMzRlx1MEMyNCBcdTBDMjhcdTBDMkVcdTBDNDJcdTBDMjhcdTBDM0VcdTBDMzJcdTBDNDEgXHUwQzE1XHUwQzI4XHUwQzQxXHUwQzE3XHUwQzRBXHUwQzI4XHUwQzJDXHUwQzIxXHUwQzMyXHUwQzQ3XHUwQzI2XHUwQzQxLlwiLFxuXG4gICAgbG9hZGluZ19leHBsYW5hdGlvbjogXCJcdTBDMkFcdTBDNDdcdTBDMUNcdTBDNDAgXHUwQzM1XHUwQzNGXHUwQzM1XHUwQzMwXHUwQzNFXHUwQzMyXHUwQzI4XHUwQzQxIFx1MEMzOFx1MEM0MVx1MEMzMFx1MEMxNVx1MEM0RFx1MEMzN1x1MEMzRlx1MEMyNFx1MEMwMlx1MEMxN1x1MEMzRSBcdTBDMkFcdTBDMzBcdTBDM0ZcdTBDMzZcdTBDNDBcdTBDMzJcdTBDM0ZcdTBDMzhcdTBDNERcdTBDMjRcdTBDNDFcdTBDMjhcdTBDNERcdTBDMjhcdTBDM0VcdTBDMkVcdTBDNDEuLi5cIixcbiAgICBleHBsYWluX2Vycm9yOiBcIlx1MEMyQVx1MEM0RFx1MEMzMFx1MEMzOFx1MEM0RFx1MEMyNFx1MEM0MVx1MEMyNFx1MEMwMiBcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwXHUwQzI4XHUwQzNGIFx1MEMzNVx1MEMzRlx1MEMzNVx1MEMzMFx1MEMzRlx1MEMwMlx1MEMxQVx1MEMyMVx1MEMwMiBcdTBDMzhcdTBDM0VcdTBDMjdcdTBDNERcdTBDMkZcdTBDMDIgXHUwQzE1XHUwQzNFXHUwQzMyXHUwQzQ3XHUwQzI2XHUwQzQxLlwiLFxuICAgIGV4cGxhaW5fb2ZmbGluZTogXCJcdTBDMzVcdTBDM0ZcdTBDMzVcdTBDMzBcdTBDMjMgXHUwQzM4XHUwQzM5XHUwQzNFXHUwQzJGXHUwQzE1XHUwQzQxXHUwQzIxXHUwQzQxIFx1MEMwNVx1MEMwMlx1MEMyNlx1MEM0MVx1MEMyQ1x1MEMzRVx1MEMxRlx1MEM0MVx1MEMzMlx1MEM0QiBcdTBDMzJcdTBDNDdcdTBDMjFcdTBDNDEuIFx1MEMzOFx1MEM0RFx1MEMyNVx1MEMzRVx1MEMyOFx1MEMzRlx1MEMxNSBcdTBDMzhcdTBDMzBcdTBDNERcdTBDMzVcdTBDMzBcdTBDNERcdTIwMENcdTBDMjhcdTBDNDEgXHUwQzJBXHUwQzREXHUwQzMwXHUwQzNFXHUwQzMwXHUwQzAyXHUwQzJEXHUwQzNGXHUwQzAyXHUwQzFBXHUwQzAyXHUwQzIxXHUwQzNGLiBcdTBDMzlcdTBDNDZcdTBDMUFcdTBDNERcdTBDMUFcdTBDMzBcdTBDM0ZcdTBDMTVcdTBDMzJcdTBDNDEgXHUwQzJFXHUwQzMwXHUwQzNGXHUwQzJGXHUwQzQxIFx1MEMyRVx1MEMzRVx1MEMzOFx1MEM0RFx1MEMxNVx1MEMzRlx1MEMwMlx1MEMxN1x1MEM0RCBcdTBDMEVcdTBDMkFcdTBDNERcdTBDMkFcdTBDNDFcdTBDMjFcdTBDNDIgXHUwQzJFXHUwQzQwIFx1MEMyQVx1MEMzMFx1MEMzRlx1MEMxNVx1MEMzMFx1MEMwMlx1MEMzMlx1MEM0Qlx1MEMyOFx1MEM0NyBcdTBDMkFcdTBDMjhcdTBDM0ZcdTBDMUFcdTBDNDdcdTBDMzhcdTBDNERcdTBDMjRcdTBDM0VcdTBDMkZcdTBDM0YgXHUyMDE0IFx1MEMzNVx1MEMzRlx1MEMzNVx1MEMzMFx1MEMyMyBcdTBDMkVcdTBDM0VcdTBDMjRcdTBDNERcdTBDMzBcdTBDMkVcdTBDNDcgXHUwQzJFXHUwQzNFXHUwQzM4XHUwQzREXHUwQzE1XHUwQzREIFx1MEMxQVx1MEM0N1x1MEMzOFx1MEMzRlx1MEMyOCBcdTBDMzVcdTBDMUFcdTBDMjhcdTBDM0VcdTBDMjhcdTBDNERcdTBDMjhcdTBDM0YgXHUwQzE1XHUwQzREXHUwQzMyXHUwQzRDXHUwQzIxXHUwQzREXHUyMDBDXHUwQzE1XHUwQzQxIFx1MEMyQVx1MEMwMlx1MEMyQVx1MEM0MVx1MEMyNFx1MEM0MVx1MEMwMlx1MEMyNlx1MEMzRi5cIixcbiAgICBleHBsYWluX3NhZmVfc3VtbWFyeTogXCJcdTBDMkFcdTBDNDdcdTBDMUNcdTBDNDAgXHUwQzM4XHUwQzNFXHUwQzMwXHUwQzNFXHUwQzAyXHUwQzM2XHUwQzAyOlwiLFxuXG4gICAgc3RhdGVfdW5zdXBwb3J0ZWRfcGFnZTogXCJcdTBDMkNcdTBDNERcdTBDMzBcdTBDNENcdTBDMUNcdTBDMzBcdTBDNEQgXHUwQzA1XHUwQzAyXHUwQzI0XHUwQzMwXHUwQzREXHUwQzE3XHUwQzI0IFx1MEMyQVx1MEM0N1x1MEMxQ1x1MEM0MFx1MEMzMlx1MEMzMlx1MEM0QiBcdTBDMzhcdTBDMTYgXHUwQzM1XHUwQzNGXHUwQzM2XHUwQzREXHUwQzMwXHUwQzNFXHUwQzAyXHUwQzI0XHUwQzNGXHUwQzE3XHUwQzNFIFx1MEMwOVx1MEMwMlx1MEMxRlx1MEM0MVx1MEMwMlx1MEMyNlx1MEMzRi4gXHUwQzA3XHUwQzE1XHUwQzREXHUwQzE1XHUwQzIxIFx1MEMyRVx1MEM0MFx1MEMzMFx1MEM0MSBcdTBDMzhcdTBDNDFcdTBDMzBcdTBDMTVcdTBDNERcdTBDMzdcdTBDM0ZcdTBDMjRcdTBDMDJcdTBDMTdcdTBDM0UgXHUwQzA5XHUwQzI4XHUwQzREXHUwQzI4XHUwQzNFXHUwQzMwXHUwQzQxLlwiLFxuICAgIHN0YXRlX3BhZ2VfbG9hZGluZzogXCJcdTBDMDggXHUwQzJBXHUwQzQ3XHUwQzFDXHUwQzQwIFx1MEMyRFx1MEMyNlx1MEM0RFx1MEMzMFx1MEMyNFx1MEMyOFx1MEM0MSBcdTBDMkFcdTBDMzBcdTBDM0ZcdTBDMzZcdTBDNDBcdTBDMzJcdTBDM0ZcdTBDMzhcdTBDNERcdTBDMjRcdTBDNDFcdTBDMjhcdTBDNERcdTBDMjhcdTBDM0VcdTBDMkVcdTBDNDEuLi5cIixcbiAgICBzdGF0ZV9hY3RpdmVfcHJvdGVjdGluZzogXCJcdTBDMzhcdTBDMTYgXHUwQzJFXHUwQzQwIFx1MEMzOFx1MEM0RFx1MEMxNVx1MEM0RFx1MEMzMFx1MEM0MFx1MEMyOFx1MEM0RFx1MjAwQ1x1MEMyQVx1MEM0OCBcdTBDMzBcdTBDMTVcdTBDNERcdTBDMzdcdTBDMjMgXHUwQzE1XHUwQzMyXHUwQzREXHUwQzJBXHUwQzNGXHUwQzM4XHUwQzREXHUwQzI0XHUwQzRCXHUwQzAyXHUwQzI2XHUwQzNGLlwiXG4gIH0sXG5cbiAgaGk6IHtcbiAgICBhcHBfbmFtZTogXCJcdTA5MzhcdTA5MTZcdTA5M0UgKFNha2hhKVwiLFxuICAgIGFwcF9zdWJ0aXRsZTogXCJcdTA5MDZcdTA5MkFcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTFDXHUwOTNGXHUwOTFGXHUwOTMyIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MzhcdTA5M0VcdTA5MjVcdTA5NDBcIixcbiAgICB3YXJuaW5nX2Rhbmdlcl90aXRsZTogXCJcdTA5MTVcdTA5NDNcdTA5MkFcdTA5MkZcdTA5M0UgXHUwOTMwXHUwOTQxXHUwOTE1XHUwOTQ3XHUwOTAyOiBcdTA5MkZcdTA5MzkgXHUwOTM4XHUwOTNFXHUwOTA3XHUwOTFGIFx1MDkwNVx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRlx1MDkyNCBcdTA5MzlcdTA5NEIgXHUwOTM4XHUwOTE1XHUwOTI0XHUwOTQwIFx1MDkzOVx1MDk0OFwiLFxuICAgIHdhcm5pbmdfY2F1dGlvbl90aXRsZTogXCJcdTA5MjdcdTA5NERcdTA5MkZcdTA5M0VcdTA5MjggXHUwOTM4XHUwOTQ3IFx1MDkyNlx1MDk0N1x1MDkxNlx1MDk0N1x1MDkwMjogXHUwOTE1XHUwOTQxXHUwOTFCIFx1MDkwNVx1MDkzOFx1MDkzRVx1MDkyRVx1MDkzRVx1MDkyOFx1MDk0RFx1MDkyRiBcdTA5MzJcdTA5MTcgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OFwiLFxuICAgIHdhcm5pbmdfc2FmZV90aXRsZTogXCJcdTA5MkZcdTA5MzkgXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkwOVx1MDkyQVx1MDkyRlx1MDk0Qlx1MDkxNyBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRlx1MDkyNCBcdTA5MzJcdTA5MTdcdTA5MjRcdTA5M0UgXHUwOTM5XHUwOTQ4XCIsXG4gICAgXG4gICAgcnVsZV9mYWtlX2RvbWFpbjogXCJcdTA5MkZcdTA5MzkgXHUwOTM1XHUwOTQ3XHUwOTJDIFx1MDkyQVx1MDkyNFx1MDkzRSBcdTA5MTVcdTA5M0ZcdTA5MzhcdTA5NDAgXHUwOTA1XHUwOTM4XHUwOTMyXHUwOTQwIFx1MDkzNVx1MDk0N1x1MDkyQ1x1MDkzOFx1MDkzRVx1MDkwN1x1MDkxRiBcdTA5MTVcdTA5NDAgXHUwOTI4XHUwOTE1XHUwOTMyXHUwOTQwIFx1MDkxNVx1MDk0OVx1MDkyQVx1MDk0MCBcdTA5MzJcdTA5MTdcdTA5MjRcdTA5M0UgXHUwOTM5XHUwOTQ4XHUwOTY0IFx1MDkwN1x1MDkzOCBcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTE1XHUwOTRCIFx1MDkyQ1x1MDkwMlx1MDkyNiBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcdTA5NjRcIixcbiAgICBydWxlX3Bpbl90b19yZWNlaXZlOiBcIlx1MDkwNVx1MDkyQVx1MDkyOFx1MDkzRSBcdTA5MkZcdTA5NDJcdTA5MkFcdTA5NDBcdTA5MDZcdTA5MDggXHUwOTJBXHUwOTNGXHUwOTI4IFx1MDkyOCBcdTA5MjFcdTA5M0VcdTA5MzJcdTA5NDdcdTA5MDJcdTA5NjQgXHUwOTJBXHUwOTNGXHUwOTI4IFx1MDkxNVx1MDk0N1x1MDkzNVx1MDkzMiBcdTA5MkFcdTA5NDhcdTA5MzhcdTA5NDcgXHUwOTJEXHUwOTQ3XHUwOTFDXHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTM5XHUwOTRCXHUwOTI0XHUwOTNFIFx1MDkzOVx1MDk0OCwgXHUwOTJBXHUwOTNFXHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTE1XHUwOTJEXHUwOTQwIFx1MDkyOFx1MDkzOVx1MDk0MFx1MDkwMlx1MDk2NFwiLFxuICAgIHJ1bGVfc2Vuc2l0aXZlX2NvbWJvOiBcIlx1MDkyRlx1MDkzOVx1MDkzRVx1MDkwMSBcdTA5MTVcdTA5M0VcdTA5MzBcdTA5NERcdTA5MjEgXHUwOTM1XHUwOTNGXHUwOTM1XHUwOTMwXHUwOTIzIFx1MDkyOCBcdTA5MjZcdTA5NDdcdTA5MDJcdTA5NjQgXHUwOTJGXHUwOTM5IFx1MDkwNVx1MDkyOFx1MDkyN1x1MDkzRlx1MDkxNVx1MDk0M1x1MDkyNCBcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTA2XHUwOTJBXHUwOTE1XHUwOTQ3IFx1MDkxNVx1MDkzRVx1MDkzMFx1MDk0RFx1MDkyMSBcdTA5MTVcdTA5M0UgXHUwOTI4XHUwOTAyXHUwOTJDXHUwOTMwLCBcdTA5MzhcdTA5NDBcdTA5MzVcdTA5NDBcdTA5MzVcdTA5NDAgXHUwOTE0XHUwOTMwIFx1MDkyQVx1MDkzRlx1MDkyOCBcdTA5MkVcdTA5M0VcdTA5MDJcdTA5MTcgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OFx1MDk2NFwiLFxuICAgIHJ1bGVfdXJnZW5jeV90aHJlYXQ6IFwiXHUwOTFDXHUwOTMyXHUwOTREXHUwOTI2XHUwOTJDXHUwOTNFXHUwOTFDXHUwOTQwIFx1MDkyOCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcdTA5NjQgXHUwOTA1XHUwOTM4XHUwOTMyXHUwOTQwIFx1MDkyQ1x1MDk0OFx1MDkwMlx1MDkxNSBcdTA5MTZcdTA5M0VcdTA5MjRcdTA5M0UgXHUwOTI0XHUwOTQxXHUwOTMwXHUwOTAyXHUwOTI0IFx1MDkyQ1x1MDkwMlx1MDkyNiBcdTA5MTVcdTA5MzBcdTA5MjhcdTA5NDcgXHUwOTE1XHUwOTQwIFx1MDkyN1x1MDkyRVx1MDkxNVx1MDk0MCBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTI2XHUwOTQ3XHUwOTI0XHUwOTQ3XHUwOTY0XCIsXG4gICAgcnVsZV9hcGtfZG93bmxvYWQ6IFwiXHUwOTA3XHUwOTM4IFx1MDkyQlx1MDkzQ1x1MDkzRVx1MDkwN1x1MDkzMiBcdTA5MTVcdTA5NEIgXHUwOTA3XHUwOTAyXHUwOTM4XHUwOTREXHUwOTFGXHUwOTQ5XHUwOTMyIFx1MDkyOCBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcdTA5NjQgXHUwOTJGXHUwOTM5IFx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MDVcdTA5MjhcdTA5MUNcdTA5M0VcdTA5MjggXHUwOTJFXHUwOTRCXHUwOTJDXHUwOTNFXHUwOTA3XHUwOTMyIFx1MDkyQlx1MDkzQ1x1MDkzRVx1MDkwN1x1MDkzMiBcdTA5MjFcdTA5M0VcdTA5MDlcdTA5MjhcdTA5MzJcdTA5NEJcdTA5MjEgXHUwOTE1XHUwOTMwXHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0QiBcdTA5MTVcdTA5MzkgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OFx1MDk2NFwiLFxuICAgIFxuICAgIG1hc2tlZF9iYWRnZTogXCJcdTA5MDZcdTA5MkFcdTA5MTVcdTA5NDAgXHUwOTM4XHUwOTQxXHUwOTMwXHUwOTE1XHUwOTREXHUwOTM3XHUwOTNFIFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTFCXHUwOTNGXHUwOTJBXHUwOTNFXHUwOTJGXHUwOTNFIFx1MDkxN1x1MDkyRlx1MDkzRVwiLFxuICAgIHRhcF90b19yZXZlYWw6IFwiXHUwOTI2XHUwOTQ3XHUwOTE2XHUwOTI4XHUwOTQ3IFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTFGXHUwOTQ4XHUwOTJBIFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxuICAgIHRhcF90b19oaWRlOiBcIlx1MDkxQlx1MDkzRlx1MDkyQVx1MDkzRVx1MDkyOFx1MDk0NyBcdTA5MTVcdTA5NDcgXHUwOTMyXHUwOTNGXHUwOTBGIFx1MDkxRlx1MDk0OFx1MDkyQSBcdTA5MTVcdTA5MzBcdTA5NDdcdTA5MDJcIixcbiAgICBidG5fdW5kZXJzdGFuZF9sZWF2ZTogXCJcdTA5MDdcdTA5MzggXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkzOFx1MDk0NyBcdTA5MkNcdTA5M0VcdTA5MzlcdTA5MzAgXHUwOTI4XHUwOTNGXHUwOTE1XHUwOTMyXHUwOTQ3XHUwOTAyIChcdTA5MDVcdTA5MjhcdTA5NDFcdTA5MzZcdTA5MDJcdTA5MzhcdTA5M0ZcdTA5MjQpXCIsXG4gICAgYnRuX3Byb2NlZWRfYW55d2F5OiBcIlx1MDkyRVx1MDk0MVx1MDkxRFx1MDk0NyBcdTA5MzhcdTA5MkVcdTA5MUQgXHUwOTA2XHUwOTJGXHUwOTNFLCBcdTA5MkJcdTA5M0ZcdTA5MzAgXHUwOTJEXHUwOTQwIFx1MDkxQ1x1MDkzRVx1MDkzMFx1MDk0MCBcdTA5MzBcdTA5MTZcdTA5NDdcdTA5MDJcIixcbiAgICBidG5fZXhwbGFpbjogXCJcdTA5MkZcdTA5MzkgXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkyRVx1MDk0MVx1MDkxRFx1MDkzOFx1MDk0NyBcdTA5MTVcdTA5NERcdTA5MkZcdTA5M0UgXHUwOTJFXHUwOTNFXHUwOTAyXHUwOTE3IFx1MDkzMFx1MDkzOVx1MDkzRSBcdTA5MzlcdTA5NDg/XCIsXG4gICAgXG4gICAgY29uc2VudF90aXRsZTogXCJcdTA5MzhcdTA5MTZcdTA5M0UgXHUwOTJFXHUwOTQ3XHUwOTAyIFx1MDkwNlx1MDkyQVx1MDkxNVx1MDkzRSBcdTA5MzhcdTA5NERcdTA5MzVcdTA5M0VcdTA5MTdcdTA5MjQgXHUwOTM5XHUwOTQ4OiBcdTA5MDZcdTA5MkFcdTA5MTVcdTA5M0UgXHUwOTIxXHUwOTNGXHUwOTFDXHUwOTNGXHUwOTFGXHUwOTMyIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MzhcdTA5M0VcdTA5MjVcdTA5NDBcIixcbiAgICBjb25zZW50X2JvZHk6IFwiXHUwOTM4XHUwOTE2XHUwOTNFIFx1MDkyQVx1MDk0Mlx1MDkzMFx1MDk0MCBcdTA5MjRcdTA5MzBcdTA5MzkgXHUwOTM4XHUwOTQ3IFx1MDkwNlx1MDkyQVx1MDkxNVx1MDk0NyBcdTA5MjFcdTA5M0ZcdTA5MzVcdTA5M0VcdTA5MDdcdTA5MzggXHUwOTJBXHUwOTMwIFx1MDkzOVx1MDk0MCBcdTA5MTVcdTA5M0VcdTA5MkUgXHUwOTE1XHUwOTMwXHUwOTI0XHUwOTNFIFx1MDkzOVx1MDk0OFx1MDk2NCBcdTA5MDZcdTA5MkFcdTA5MTVcdTA5M0UgXHUwOTA2XHUwOTI3XHUwOTNFXHUwOTMwLCBcdTA5MTVcdTA5M0VcdTA5MzBcdTA5NERcdTA5MjEgXHUwOTM1XHUwOTNGXHUwOTM1XHUwOTMwXHUwOTIzIFx1MDkxNVx1MDkyRFx1MDk0MCBcdTA5MTVcdTA5M0ZcdTA5MzhcdTA5NDAgXHUwOTM4XHUwOTMwXHUwOTREXHUwOTM1XHUwOTMwIFx1MDkyQVx1MDkzMCBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTJEXHUwOTQ3XHUwOTFDXHUwOTQ3IFx1MDkxQ1x1MDkzRVx1MDkyNFx1MDk0N1x1MDk2NFwiLFxuICAgIGNvbnNlbnRfYWdyZWU6IFwiXHUwOTJFXHUwOTQ4XHUwOTAyIFx1MDkzOFx1MDkzOVx1MDkyRVx1MDkyNCBcdTA5MzlcdTA5NDJcdTA5MDEgLSBcdTA5MzhcdTA5NDFcdTA5MzBcdTA5MTVcdTA5NERcdTA5MzdcdTA5M0UgXHUwOTM2XHUwOTQxXHUwOTMwXHUwOTQyIFx1MDkxNVx1MDkzMFx1MDk0N1x1MDkwMlwiLFxuICAgIFxuICAgIHJ1bGVfc2FmZV9kZXRhaWw6IFwiXHUwOTA3XHUwOTM4IFx1MDkzOFx1MDkzRVx1MDkwN1x1MDkxRiBcdTA5MkFcdTA5MzAgXHUwOTE1XHUwOTRCXHUwOTA4IFx1MDkyN1x1MDk0Qlx1MDkxNlx1MDkzRVx1MDkyN1x1MDkyMVx1MDkzQ1x1MDk0MCBcdTA5MkZcdTA5M0UgXHUwOTJEXHUwOTREXHUwOTMwXHUwOTNFXHUwOTJFXHUwOTE1IFx1MDkyQVx1MDk0OFx1MDkxRlx1MDkzMFx1MDk0RFx1MDkyOCBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTJFXHUwOTNGXHUwOTMyXHUwOTNFXHUwOTY0XCIsXG5cbiAgICBsb2FkaW5nX2V4cGxhbmF0aW9uOiBcIlx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MTVcdTA5M0UgXHUwOTM4XHUwOTQxXHUwOTMwXHUwOTE1XHUwOTREXHUwOTM3XHUwOTNGXHUwOTI0IFx1MDkzMFx1MDk0Mlx1MDkyQSBcdTA5MzhcdTA5NDcgXHUwOTM1XHUwOTNGXHUwOTM2XHUwOTREXHUwOTMyXHUwOTQ3XHUwOTM3XHUwOTIzIFx1MDkxNVx1MDkzRlx1MDkyRlx1MDkzRSBcdTA5MUNcdTA5M0UgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OC4uLlwiLFxuICAgIGV4cGxhaW5fZXJyb3I6IFwiXHUwOTA3XHUwOTM4IFx1MDkzOFx1MDkyRVx1MDkyRiBcdTA5MkFcdTA5NDdcdTA5MUMgXHUwOTE1XHUwOTQwIFx1MDkzNVx1MDk0RFx1MDkyRlx1MDkzRVx1MDkxNlx1MDk0RFx1MDkyRlx1MDkzRSBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTE1XHUwOTQwIFx1MDkxQ1x1MDkzRSBcdTA5MzhcdTA5MTVcdTA5NDBcdTA5NjRcIixcbiAgICBleHBsYWluX29mZmxpbmU6IFwiXHUwOTM1XHUwOTREXHUwOTJGXHUwOTNFXHUwOTE2XHUwOTREXHUwOTJGXHUwOTNFIFx1MDkzOFx1MDkzOVx1MDkzRVx1MDkyRlx1MDkxNSBcdTA5MDlcdTA5MkFcdTA5MzJcdTA5MkNcdTA5NERcdTA5MjcgXHUwOTI4XHUwOTM5XHUwOTQwXHUwOTAyIFx1MDkzOVx1MDk0OFx1MDk2NCBcdTA5MDdcdTA5MzggXHUwOTM4XHUwOTQxXHUwOTM1XHUwOTNGXHUwOTI3XHUwOTNFIFx1MDkxNVx1MDk0NyBcdTA5MzJcdTA5M0ZcdTA5MEYgXHUwOTM4XHUwOTREXHUwOTI1XHUwOTNFXHUwOTI4XHUwOTQwXHUwOTJGIFx1MDkzOFx1MDkzMFx1MDk0RFx1MDkzNVx1MDkzMCBcdTA5MzZcdTA5NDFcdTA5MzBcdTA5NDIgXHUwOTE1XHUwOTMwXHUwOTQ3XHUwOTAyXHUwOTY0IFx1MDkxQVx1MDk0N1x1MDkyNFx1MDkzRVx1MDkzNVx1MDkyOFx1MDkzRlx1MDkyRlx1MDkzRVx1MDkwMSBcdTA5MTRcdTA5MzAgXHUwOTJFXHUwOTNFXHUwOTM4XHUwOTREXHUwOTE1XHUwOTNGXHUwOTAyXHUwOTE3IFx1MDkzOVx1MDkyRVx1MDk0N1x1MDkzNlx1MDkzRSBcdTA5MDdcdTA5MzggXHUwOTIxXHUwOTNGXHUwOTM1XHUwOTNFXHUwOTA3XHUwOTM4IFx1MDkyQVx1MDkzMCBcdTA5MUFcdTA5MzJcdTA5MjRcdTA5NDAgXHUwOTM5XHUwOTQ4XHUwOTAyIFx1MjAxNCBcdTA5MTVcdTA5NDdcdTA5MzVcdTA5MzIgRXhwbGFpbiBcdTA5MzhcdTA5M0VcdTA5MzBcdTA5M0VcdTA5MDJcdTA5MzYgXHUwOTE1XHUwOTREXHUwOTMyXHUwOTNFXHUwOTA5XHUwOTIxIFx1MDkxNVx1MDk0QiBcdTA5MkVcdTA5M0VcdTA5MzhcdTA5NERcdTA5MTUgXHUwOTE1XHUwOTNGXHUwOTJGXHUwOTNFIFx1MDkzOVx1MDk0MVx1MDkwNiBcdTA5MUZcdTA5NDdcdTA5MTVcdTA5NERcdTA5MzhcdTA5NERcdTA5MUYgXHUwOTJEXHUwOTQ3XHUwOTFDXHUwOTI0XHUwOTNFIFx1MDkzOVx1MDk0OFx1MDk2NFwiLFxuICAgIGV4cGxhaW5fc2FmZV9zdW1tYXJ5OiBcIlx1MDkyQVx1MDk0N1x1MDkxQyBcdTA5MzhcdTA5M0VcdTA5MzBcdTA5M0VcdTA5MDJcdTA5MzY6XCIsXG5cbiAgICBzdGF0ZV91bnN1cHBvcnRlZF9wYWdlOiBcIlx1MDkyQ1x1MDk0RFx1MDkzMFx1MDkzRVx1MDkwOVx1MDkxQ1x1MDkzQ1x1MDkzMCBcdTA5MTVcdTA5NDcgXHUwOTA2XHUwOTAyXHUwOTI0XHUwOTMwXHUwOTNGXHUwOTE1IFx1MDkyQVx1MDk0N1x1MDkxQ1x1MDk0Qlx1MDkwMiBcdTA5MkFcdTA5MzAgXHUwOTM4XHUwOTE2XHUwOTNFIFx1MDkyOFx1MDkzRlx1MDkzN1x1MDk0RFx1MDkxNVx1MDk0RFx1MDkzMFx1MDkzRlx1MDkyRiBcdTA5MzBcdTA5MzlcdTA5MjRcdTA5M0UgXHUwOTM5XHUwOTQ4XHUwOTY0IFx1MDkwNlx1MDkyQSBcdTA5MkZcdTA5MzlcdTA5M0VcdTA5MDEgXHUwOTM4XHUwOTQxXHUwOTMwXHUwOTE1XHUwOTREXHUwOTM3XHUwOTNGXHUwOTI0IFx1MDkzOVx1MDk0OFx1MDkwMlx1MDk2NFwiLFxuICAgIHN0YXRlX3BhZ2VfbG9hZGluZzogXCJcdTA5MDdcdTA5MzggXHUwOTJBXHUwOTQ3XHUwOTFDIFx1MDkxNVx1MDk0MCBcdTA5MzhcdTA5NDFcdTA5MzBcdTA5MTVcdTA5NERcdTA5MzdcdTA5M0UgXHUwOTFDXHUwOTNFXHUwOTAxXHUwOTFBXHUwOTQwIFx1MDkxQ1x1MDkzRSBcdTA5MzBcdTA5MzlcdTA5NDAgXHUwOTM5XHUwOTQ4Li4uXCIsXG4gICAgc3RhdGVfYWN0aXZlX3Byb3RlY3Rpbmc6IFwiXHUwOTM4XHUwOTE2XHUwOTNFIFx1MDkzOFx1MDkxNVx1MDk0RFx1MDkzMFx1MDkzRlx1MDkyRiBcdTA5MzlcdTA5NDggXHUwOTE0XHUwOTMwIFx1MDkwNlx1MDkyQVx1MDkxNVx1MDk0MCBcdTA5MzhcdTA5NERcdTA5MTVcdTA5NERcdTA5MzBcdTA5NDBcdTA5MjggXHUwOTE1XHUwOTQwIFx1MDkzOFx1MDk0MVx1MDkzMFx1MDkxNVx1MDk0RFx1MDkzN1x1MDkzRSBcdTA5MTVcdTA5MzAgXHUwOTMwXHUwOTM5XHUwOTNFIFx1MDkzOVx1MDk0OFx1MDk2NFwiXG4gIH1cbn07XG5cbi8qKlxuICogSGVscGVyIHRvIGZldGNoIGxvY2FsaXplZCBzdHJpbmcgd2l0aCBzYWZlIGZhbGxiYWNrIHRvIEVuZ2xpc2hcbiAqIE5ldmVyIHJldHVybnMgYSByYXcga2V5IG5hbWUgdG8gZW5kLXVzZXJzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdChrZXksIGxhbmcgPSBcImVuXCIpIHtcbiAgY29uc3QgZGljdCA9IFNUUklOR1NbbGFuZ10gfHwgU1RSSU5HUy5lbjtcbiAgaWYgKGRpY3QgJiYgdHlwZW9mIGRpY3Rba2V5XSA9PT0gXCJzdHJpbmdcIiAmJiBkaWN0W2tleV0ubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBkaWN0W2tleV07XG4gIH1cbiAgaWYgKFNUUklOR1MuZW4gJiYgdHlwZW9mIFNUUklOR1MuZW5ba2V5XSA9PT0gXCJzdHJpbmdcIiAmJiBTVFJJTkdTLmVuW2tleV0ubGVuZ3RoID4gMCkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4pIHtcbiAgICAgIGNvbnNvbGUud2FybihgW1Nha2hhIGkxOG5dIE1pc3Npbmcga2V5IFwiJHtrZXl9XCIgZm9yIGxvY2FsZSBcIiR7bGFuZ31cIi4gRmFsbGluZyBiYWNrIHRvIEVuZ2xpc2guYCk7XG4gICAgfVxuICAgIHJldHVybiBTVFJJTkdTLmVuW2tleV07XG4gIH1cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUud2Fybikge1xuICAgIGNvbnNvbGUud2FybihgW1Nha2hhIGkxOG5dIFVua25vd24gdHJhbnNsYXRpb24ga2V5IFwiJHtrZXl9XCIgcmVxdWVzdGVkIGZvciBsb2NhbGUgXCIke2xhbmd9XCIuYCk7XG4gIH1cbiAgcmV0dXJuIFwiXCI7XG59XG4iLCAiLyoqXG4gKiBzY2FtRGV0ZWN0b3IuanMgXHUyMDE0IERldGVybWluaXN0aWMgT24tRGV2aWNlIFNjYW0gV2FybmluZyBFbmdpbmUgZm9yIFNha2hhXG4gKlxuICogQ2hlY2tzOlxuICogMS4gTG9va2FsaWtlIGRvbWFpbiBhbmFseXNpcyB2cyBBbGxvd2xpc3QgKExldmVuc2h0ZWluIGRpc3RhbmNlLCBDeXJpbGxpYy9ob21vZ2x5cGhzLCBQdW55Y29kZSwgc3VzcGljaW91cyBzdWJkb21haW5zLCBzaGFkeSBUTERzKVxuICogMi4gSGlnaC1yaXNrIGNyZWRlbnRpYWwgaGFydmVzdCBjb21iaW5hdGlvbiAoQ2FyZCBOdW1iZXIgKyBDVlYgKyBQSU4vT1RQIG9uIG5vbi1hbGxvd2xpc3RlZCBzaXRlKVxuICogMy4gXCJFbnRlciBQSU4gdG8gcmVjZWl2ZSBtb25leVwiIC8gVVBJIGNvbGxlY3QgdHJhcHNcbiAqIDQuIFVyZ2VuY3kgJiB0aHJlYXQgaW50aW1pZGF0aW9uIGxhbmd1YWdlIChFbmdsaXNoLCByb21hbml6ZWQgSGluZGksIHJvbWFuaXplZCBUZWx1Z3UpXG4gKiA1LiBNYWxpY2lvdXMgQVBLIG9yIHJlbW90ZS1kZXNrdG9wIGFwcCBkb3dubG9hZCBwcm9tcHRzIChBbnlEZXNrLCBRdWlja1N1cHBvcnQsIFRlYW1WaWV3ZXIpXG4gKlxuICogT3V0cHV0OiB7IGxldmVsOiAnc2FmZSd8J2NhdXRpb24nfCdkYW5nZXInLCBydWxlc1RyaWdnZXJlZDogc3RyaW5nW10sIHJlYXNvbkVuOiBzdHJpbmcsIHJlYXNvblRlOiBzdHJpbmcgfVxuICovXG5cbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuLmpzXCI7XG5cbi8vIENhbm9uaWNhbCB2ZXJpZmllZCBkb21haW5zIChtYXRjaGVzIEFMTE9XTElTVF9UT19WRVJJRlkpXG5leHBvcnQgY29uc3QgT0ZGSUNJQUxfQUxMT1dMSVNUID0gW1xuICBcInNiaS5jby5pblwiLFxuICBcIm9ubGluZXNiaS5zYmlcIixcbiAgXCJoZGZjYmFuay5jb21cIixcbiAgXCJpY2ljaWJhbmsuY29tXCIsXG4gIFwiYXhpc2JhbmsuY29tXCIsXG4gIFwicHVuamFibmF0aW9uYWxiYW5rLmluXCIsXG4gIFwiYmFua29mYmFyb2RhLmluXCIsXG4gIFwiY2FuYXJhYmFuay5jb21cIixcbiAgXCJrb3Rhay5jb21cIixcbiAgXCJpbmR1c2luZC5jb21cIixcbiAgXCJ1bmlvbmJhbmtvZmluZGlhLmNvLmluXCIsXG4gIFwibnBjaS5vcmcuaW5cIixcbiAgXCJiaGltdXBpLm9yZy5pblwiLFxuICBcInBheXRtLmNvbVwiLFxuICBcInBob25lcGUuY29tXCIsXG4gIFwiZ29vZ2xlLmNvbVwiLFxuICBcInVpZGFpLmdvdi5pblwiLFxuICBcImluY29tZXRheC5nb3YuaW5cIixcbiAgXCJlcGZpbmRpYS5nb3YuaW5cIixcbiAgXCJwYXNzcG9ydGluZGlhLmdvdi5pblwiLFxuICBcInBhcml2YWhhbi5nb3YuaW5cIixcbiAgXCJkaWdpbG9ja2VyLmdvdi5pblwiLFxuICBcImluZGlhLmdvdi5pblwiLFxuICBcImNlaXIuZ292LmluXCIsXG4gIFwiY3liZXJjcmltZS5nb3YuaW5cIixcbiAgXCJzYW5jaGFyc2FhdGhpLmdvdi5pblwiLFxuICBcInBta2lzYW4uZ292LmluXCIsXG5dO1xuXG4vLyBDb21tb24gQ3lyaWxsaWMgJiBMYXRpbiBjb25mdXNhYmxlIGhvbW9nbHlwaHNcbmNvbnN0IEhPTU9HTFlQSF9NQVAgPSB7XG4gIFwiXHUwNDMwXCI6IFwiYVwiLCBcIlx1MDQ0MVwiOiBcImNcIiwgXCJcdTA0MzVcIjogXCJlXCIsIFwiXHUwNDNFXCI6IFwib1wiLCBcIlx1MDQ0MFwiOiBcInBcIiwgXCJcdTA0NTVcIjogXCJzXCIsIFwiXHUwNDQ1XCI6IFwieFwiLCBcIlx1MDQ0M1wiOiBcInlcIixcbiAgXCJcdTA0NTZcIjogXCJpXCIsIFwiXHUwNDU4XCI6IFwialwiLCBcIlx1MDUwMVwiOiBcImRcIiwgXCJcdTA1MUJcIjogXCJxXCIsIFwiXHUwNTFEXCI6IFwid1wiLFxuICBcIjBcIjogXCJvXCIsIFwiMVwiOiBcImxcIlxufTtcblxuLy8gU2hhZHkgVExEcyBjb21tb25seSBhYnVzZWQgaW4gSW5kaWFuIFNNUyBwaGlzaGluZyBjYW1wYWlnbnNcbmNvbnN0IFNVU1BJQ0lPVVNfVExEUyA9IFtcbiAgXCIudGtcIiwgXCIubWxcIiwgXCIuZ2FcIiwgXCIuY2ZcIiwgXCIuZ3FcIiwgXCIudG9wXCIsIFwiLnh5elwiLCBcIi5jbHViXCIsIFwiLndvcmtcIiwgXCIuYnV6elwiLCBcIi5jYW1cIiwgXCIucmVzdFwiLCBcIi5maXRcIlxuXTtcblxuLy8gUmVtb3RlIGFjY2VzcyB0b29sIGtleXdvcmRzXG5jb25zdCBSRU1PVEVfQUNDRVNTX0FQUFMgPSBbXG4gIFwiYW55ZGVza1wiLCBcInF1aWNrc3VwcG9ydFwiLCBcInRlYW12aWV3ZXJcIiwgXCJydXN0ZGVza1wiLCBcImFpcmRyb2lkXCIsIFwiem9obyBhc3Npc3RcIlxuXTtcblxuLyoqXG4gKiBTdGFuZGFyZCBMZXZlbnNodGVpbiBEaXN0YW5jZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbGV2ZW5zaHRlaW5EaXN0YW5jZShhLCBiKSB7XG4gIGlmIChhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGIubGVuZ3RoO1xuICBpZiAoYi5sZW5ndGggPT09IDApIHJldHVybiBhLmxlbmd0aDtcbiAgY29uc3QgbWF0cml4ID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IGIubGVuZ3RoOyBpKyspIG1hdHJpeFtpXSA9IFtpXTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPD0gYS5sZW5ndGg7IGorKykgbWF0cml4WzBdW2pdID0gajtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBiLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gYS5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGIuY2hhckF0KGkgLSAxKSA9PT0gYS5jaGFyQXQoaiAtIDEpKSB7XG4gICAgICAgIG1hdHJpeFtpXVtqXSA9IG1hdHJpeFtpIC0gMV1baiAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWF0cml4W2ldW2pdID0gTWF0aC5taW4oXG4gICAgICAgICAgbWF0cml4W2kgLSAxXVtqIC0gMV0gKyAxLCAvLyBzdWJzdGl0dXRpb25cbiAgICAgICAgICBtYXRyaXhbaV1baiAtIDFdICsgMSwgICAgIC8vIGluc2VydGlvblxuICAgICAgICAgIG1hdHJpeFtpIC0gMV1bal0gKyAxICAgICAgLy8gZGVsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1hdHJpeFtiLmxlbmd0aF1bYS5sZW5ndGhdO1xufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSBkb21haW4gc3RyaW5nIGJ5IHJlcGxhY2luZyBob21vZ2x5cGhzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVIb21vZ2x5cGhzKGRvbWFpbikge1xuICBsZXQgbm9ybWFsaXplZCA9IFwiXCI7XG4gIGZvciAoY29uc3QgY2hhciBvZiBkb21haW4udG9Mb3dlckNhc2UoKSkge1xuICAgIG5vcm1hbGl6ZWQgKz0gSE9NT0dMWVBIX01BUFtjaGFyXSB8fCBjaGFyO1xuICB9XG4gIHJldHVybiBub3JtYWxpemVkO1xufVxuXG4vKipcbiAqIEV4dHJhY3QgY2xlYW4gaG9zdG5hbWUgZnJvbSBhcmJpdHJhcnkgVVJMIG9yIGRvbWFpbiBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RIb3N0bmFtZSh1cmxPckRvbWFpbikge1xuICBpZiAoIXVybE9yRG9tYWluKSByZXR1cm4gXCJcIjtcbiAgbGV0IHN0ciA9IHVybE9yRG9tYWluLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAvLyBTdHJpcCBwcm90b2NvbCBpZiBwcmVzZW50XG4gIHN0ciA9IHN0ci5yZXBsYWNlKC9eW2Etel0rOlxcL1xcLy8sIFwiXCIpO1xuICAvLyBTdHJpcCBwYXRoIGFuZCBxdWVyeVxuICBzdHIgPSBzdHIuc3BsaXQoXCIvXCIpWzBdLnNwbGl0KFwiP1wiKVswXS5zcGxpdChcIiNcIilbMF07XG4gIC8vIFN0cmlwIHBvcnRcbiAgc3RyID0gc3RyLnNwbGl0KFwiOlwiKVswXTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIGhvc3RuYW1lIHN0cmljdGx5IGJlbG9uZ3MgdG8gYW4gYWxsb3dsaXN0ZWQgZW50aXR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93bGlzdGVkRG9tYWluKGhvc3RuYW1lLCBhbGxvd2xpc3QgPSBPRkZJQ0lBTF9BTExPV0xJU1QpIHtcbiAgY29uc3QgY2xlYW4gPSBleHRyYWN0SG9zdG5hbWUoaG9zdG5hbWUpO1xuICByZXR1cm4gYWxsb3dsaXN0LnNvbWUoKG9mZmljaWFsKSA9PiB7XG4gICAgcmV0dXJuIGNsZWFuID09PSBvZmZpY2lhbCB8fCBjbGVhbi5lbmRzV2l0aChcIi5cIiArIG9mZmljaWFsKTtcbiAgfSk7XG59XG5cbi8qKlxuICogUnVsZSAxOiBDaGVjayBmb3IgbG9va2FsaWtlIC8gc3Bvb2ZlZCBkb21haW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTG9va2FsaWtlRG9tYWluKGhvc3RuYW1lLCBhbGxvd2xpc3QgPSBPRkZJQ0lBTF9BTExPV0xJU1QpIHtcbiAgY29uc3QgY2xlYW4gPSBleHRyYWN0SG9zdG5hbWUoaG9zdG5hbWUpO1xuICBpZiAoIWNsZWFuIHx8IGlzQWxsb3dsaXN0ZWREb21haW4oY2xlYW4sIGFsbG93bGlzdCkpIHtcbiAgICByZXR1cm4geyBpc0xvb2thbGlrZTogZmFsc2UgfTtcbiAgfVxuXG4gIC8vIFB1bnljb2RlIGNoZWNrIChzdGFydHMgd2l0aCB4bi0tKVxuICBpZiAoY2xlYW4uaW5jbHVkZXMoXCJ4bi0tXCIpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzTG9va2FsaWtlOiB0cnVlLFxuICAgICAgcmVhc29uOiBgUHVueWNvZGUgZG9tYWluIGRldGVjdGVkICgke2NsZWFufSkgbWltaWNraW5nIGludGVybmF0aW9uYWxpemVkIHNjcmlwdC5gXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG5vcm1hbGl6ZWQgPSBub3JtYWxpemVIb21vZ2x5cGhzKGNsZWFuKTtcblxuICBmb3IgKGNvbnN0IG9mZmljaWFsIG9mIGFsbG93bGlzdCkge1xuICAgIC8vIFN1YmRvbWFpbiBkZWNlcHRpb246IGUuZy4gXCJzYmkuY28uaW4uc2NhbS1wb3J0YWwuY29tXCIgb3IgXCJzYmktdmVyaWZpY2F0aW9uLmluXCJcbiAgICBjb25zdCBvZmZpY2lhbEJhc2UgPSBvZmZpY2lhbC5yZXBsYWNlKC9cXC4oY29cXC5pbnxnb3ZcXC5pbnxvcmdcXC5pbnxjb218aW58c2JpKSQvLCBcIlwiKTtcbiAgICBcbiAgICAvLyBDaGVjayBpZiBvZmZpY2lhbCBicmFuZCBpcyBlbWJlZGRlZCBhcyBzdWJkb21haW4gb3Igc2x1ZyBvbiBhbiB1bnRydXN0ZWQgcm9vdFxuICAgIGlmIChjbGVhbi5pbmNsdWRlcyhvZmZpY2lhbCkgJiYgIWNsZWFuLmVuZHNXaXRoKFwiLlwiICsgb2ZmaWNpYWwpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgcmVhc29uOiBgRGVjZXB0aXZlIGRvbWFpbjogY29udGFpbnMgJyR7b2ZmaWNpYWx9JyBidXQgcmVnaXN0ZXJlZCB1bmRlciB1bnRydXN0ZWQgcGFyZW50IGRvbWFpbi5gXG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIERpcmVjdCBMZXZlbnNodGVpbiBjaGVjayBvbiByb290IGRvbWFpbiBwYXJ0c1xuICAgIGNvbnN0IGNsZWFuQmFzZSA9IGNsZWFuLnNwbGl0KFwiLlwiKVswXTtcbiAgICBjb25zdCB0YXJnZXRCYXNlID0gb2ZmaWNpYWwuc3BsaXQoXCIuXCIpWzBdO1xuXG4gICAgaWYgKGNsZWFuQmFzZS5sZW5ndGggPj0gMyAmJiB0YXJnZXRCYXNlLmxlbmd0aCA+PSAzKSB7XG4gICAgICBjb25zdCBkaXN0ID0gbGV2ZW5zaHRlaW5EaXN0YW5jZShjbGVhbkJhc2UsIHRhcmdldEJhc2UpO1xuICAgICAgLy8gU21hbGwgZWRpdCBkaXN0YW5jZSAoMSBvciAyIGVkaXRzKSBpbmRpY2F0aW5nIHR5cG9zcXVhdHRpbmcgKGUuZy4gc2JpLWJhbmssIGhkZmMtbG9naW4sIG9ubGluZXNiMSlcbiAgICAgIGlmIChkaXN0ID4gMCAmJiBkaXN0IDw9IDIgJiYgTWF0aC5hYnMoY2xlYW5CYXNlLmxlbmd0aCAtIHRhcmdldEJhc2UubGVuZ3RoKSA8PSAyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNMb29rYWxpa2U6IHRydWUsXG4gICAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgICByZWFzb246IGBUeXBvc3F1YXR0aW5nIGRldGVjdGVkOiAnJHtjbGVhbn0nIGlzIHN0cmlraW5nbHkgY2xvc2UgdG8gb2ZmaWNpYWwgJyR7b2ZmaWNpYWx9JyAoZWRpdCBkaXN0YW5jZSAke2Rpc3R9KS5gXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgbm9ybWFsaXplZCBob21vZ2x5cGggc3Vic3RpdHV0aW9uXG4gICAgaWYgKG5vcm1hbGl6ZWQuaW5jbHVkZXModGFyZ2V0QmFzZSkgJiYgIWNsZWFuLmluY2x1ZGVzKHRhcmdldEJhc2UpKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgICAgdGFyZ2V0OiBvZmZpY2lhbCxcbiAgICAgICAgcmVhc29uOiBgSG9tb2dseXBoIGNoYXJhY3RlciBzdWJzdGl0dXRpb24gZGV0ZWN0ZWQgbWltaWNraW5nICcke29mZmljaWFsfScuYFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBTdXNwaWNpb3VzIFRMRCBjaGVjayBvbiBiYW5raW5nL2dvdiBrZXl3b3Jkc1xuICBjb25zdCBpc1N1c3BpY2lvdXNUTEQgPSBTVVNQSUNJT1VTX1RMRFMuc29tZSh0bGQgPT4gY2xlYW4uZW5kc1dpdGgodGxkKSk7XG4gIGNvbnN0IGhhc0ZpbmFuY2VLZXl3b3JkID0gLyhiYW5rfHNiaXxoZGZjfGljaWNpfGFhZGhhYXJ8cGFufGt5Y3x0YXh8dXBpfHBheW91dHxsb3R0ZXJ5fHJld2FyZCkvaS50ZXN0KGNsZWFuKTtcbiAgaWYgKGlzU3VzcGljaW91c1RMRCAmJiBoYXNGaW5hbmNlS2V5d29yZCkge1xuICAgIHJldHVybiB7XG4gICAgICBpc0xvb2thbGlrZTogdHJ1ZSxcbiAgICAgIHRhcmdldDogXCJmaW5hbmNpYWwvaWRlbnRpdHkgcG9ydGFsXCIsXG4gICAgICByZWFzb246IGBGaW5hbmNpYWwga2V5d29yZCBvbiBoaWdoLXJpc2sgVExEICgke2NsZWFufSkuYFxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBpc0xvb2thbGlrZTogZmFsc2UgfTtcbn1cblxuLyoqXG4gKiBSdWxlIDI6IFVyZ2VuY3kgJiBUaHJlYXQgbGFuZ3VhZ2UgZGV0ZWN0b3IgKEVuZ2xpc2gsIHJvbWFuaXplZCBIaW5kaSwgcm9tYW5pemVkIFRlbHVndSlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVXJnZW5jeUFuZFRocmVhdHModGV4dCkge1xuICBpZiAoIXRleHQpIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSwgbWF0Y2hlczogW10gfTtcbiAgY29uc3QgbG93ZXIgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG4gIFxuICBjb25zdCBVUkdFTkNZX1BBVFRFUk5TID0gW1xuICAgIC8vIEVuZ2xpc2hcbiAgICAvXFxiKGFjY291bnQgKHdpbGwgYmUgfGlzICk/YmxvY2tlZHxzdXNwZW5kZWQgd2l0aGlufGRlYWN0aXZhdGVkIHdpdGhpbnxlbGVjdHJpY2l0eSAocG93ZXIgKT9jdXR8c2ltIChjYXJkICk/ZGVhY3RpdmF0aW9ufGt5YyBwZW5kaW5nfGt5YyBleHBpcmVzP3xpbW1lZGlhdGUgYWN0aW9uIHJlcXVpcmVkfGxhc3QgMjQgaG91cnN8bGVnYWwgYWN0aW9ufHBvbGljZSBjb21wbGFpbnR8YXJyZXN0IHdhcnJhbnQpXFxiL2ksXG4gICAgLy8gUm9tYW5pemVkIEhpbmRpXG4gICAgL1xcYihraGF0YSBiYW5kIGhvIGpheWVnYXxiaWpsaSBrYXQgamF5ZWdpfHNpbSBiYW5kIGhvIGpheWVnaXx0dXJhbnQga2FyZWlufHBvbGljZSBjYXNlfGFhZGhhYXIgbGluayBuYWhpIGtpeWEgdG8pXFxiL2ksXG4gICAgLy8gUm9tYW5pemVkIFRlbHVndVxuICAgIC9cXGIoYWNjb3VudCBibG9jayBhdnV0aHVuZGl8Y3VycmVudCBjdXQgYXZ1dGh1bmRpfHNpbSBjYXJkIGJsb2NrfHZlbnRhbmUgY2hleWFuZGl8bGVrYXBvdGhlIHJhZGRodSlcXGIvaVxuICBdO1xuXG4gIGNvbnN0IG1hdGNoZXMgPSBbXTtcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFVSR0VOQ1lfUEFUVEVSTlMpIHtcbiAgICBjb25zdCBtYXRjaCA9IGxvd2VyLm1hdGNoKHBhdHRlcm4pO1xuICAgIGlmIChtYXRjaCkgbWF0Y2hlcy5wdXNoKG1hdGNoWzBdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZGV0ZWN0ZWQ6IG1hdGNoZXMubGVuZ3RoID4gMCxcbiAgICBtYXRjaGVzXG4gIH07XG59XG5cbi8qKlxuICogUnVsZSAzOiBVUEkgXCJFbnRlciBQSU4gdG8gcmVjZWl2ZSBtb25leVwiIGFuZCBDb2xsZWN0IFJlcXVlc3QgVHJhcHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVVBJVHJhcHModGV4dCkge1xuICBpZiAoIXRleHQpIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSB9O1xuICBjb25zdCBsb3dlciA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICBjb25zdCBVUElfUEFUVEVSTlMgPSBbXG4gICAgLy8gRW5nbGlzaFxuICAgIC8oZW50ZXJ8dHlwZXxzdWJtaXQpXFxzKyh5b3VyXFxzKyk/KHVwaVxccyspP3Bpblxccyt0b1xccysocmVjZWl2ZXxjbGFpbXxnZXR8d2lufGFjY2VwdClcXHMrKFxcUytcXHMrKT8obW9uZXl8Y2FzaHxjYXNoYmFja3xyZWZ1bmR8cmV3YXJkfHByaXplKS9pLFxuICAgIC8ocmVjZWl2ZXxjbGFpbXxhY2NlcHQpXFxzKyhcXFMrXFxzKyk/KG1vbmV5fGNhc2hiYWNrfHJld2FyZHxyZWZ1bmQpLiooZW50ZXJ8dHlwZSlcXHMrKHVwaVxccyspP3Bpbi9pLFxuICAgIC9lbnRlclxccytwaW5cXHMrZm9yXFxzK2NyZWRpdC9pLFxuICAgIC8vIFJvbWFuaXplZCBIaW5kaVxuICAgIC9wYWlzZT9cXHMrKHBhbmV8bGVuZSlcXHMra2VcXHMrbGl5ZVxccysodXBpXFxzKyk/cGluXFxzKyhkYWxlfGRhYWxlfGVudGVyKS9pLFxuICAgIC8vIFJvbWFuaXplZCBUZWx1Z3VcbiAgICAvZGFiYnUobHUpP1xccysocmF2YWRhbmlraXxwb25kYWRhbmlraSlcXHMrKHVwaVxccyspP3BpblxccytlbnRlclxccytjaGV5YW5kaS9pXG4gIF07XG5cbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFVQSV9QQVRURVJOUykge1xuICAgIGlmIChwYXR0ZXJuLnRlc3QobG93ZXIpKSB7XG4gICAgICByZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBkZXRlY3RlZDogZmFsc2UgfTtcbn1cblxuLyoqXG4gKiBSdWxlIDQ6IENyaXRpY2FsIENyZWRlbnRpYWwgSGFydmVzdGluZyBDb21ibyBvbiBub24tYWxsb3dsaXN0ZWQgZG9tYWluXG4gKiAoQ2FyZCBudW1iZXIgKyBDVlYgKyBQSU4gb3IgT1RQIHNpbXVsdGFuZW91c2x5IHJlcXVlc3RlZClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2Vuc2l0aXZlRmllbGRDb21ibyhpbnB1dHMgPSBbXSwgaXNBbGxvd2xpc3RlZCA9IGZhbHNlKSB7XG4gIGlmIChpc0FsbG93bGlzdGVkKSByZXR1cm4geyBkZXRlY3RlZDogZmFsc2UgfTtcblxuICBsZXQgaGFzQ2FyZCA9IGZhbHNlO1xuICBsZXQgaGFzQ1ZWID0gZmFsc2U7XG4gIGxldCBoYXNQSU5vck9UUCA9IGZhbHNlO1xuXG4gIGZvciAoY29uc3QgaW5wdXQgb2YgaW5wdXRzKSB7XG4gICAgY29uc3QgY29tYmluZWQgPSBgJHtpbnB1dC5uYW1lIHx8IFwiXCJ9ICR7aW5wdXQuaWQgfHwgXCJcIn0gJHtpbnB1dC5wbGFjZWhvbGRlciB8fCBcIlwifSAke2lucHV0LmxhYmVsIHx8IFwiXCJ9ICR7aW5wdXQudHlwZSB8fCBcIlwifWAudG9Mb3dlckNhc2UoKTtcbiAgICBcbiAgICBpZiAoLyhjYXJkLipudW18cGFuX251bWJlcnxkZWJpdC4qY2FyZHxjcmVkaXQuKmNhcmR8MTYuKmRpZ2l0KS9pLnRlc3QoY29tYmluZWQpKSB7XG4gICAgICBoYXNDYXJkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKC8oY3Z2fGN2Y3xzZWN1cml0eS4qY29kZXxjYXJkLip2ZXJpZikvaS50ZXN0KGNvbWJpbmVkKSkge1xuICAgICAgaGFzQ1ZWID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKC8ob3RwfG9uZS4qdGltZS4qcGFzc3dvcmR8YXRtLipwaW58Y2FyZC4qcGlufG1waW4pL2kudGVzdChjb21iaW5lZCkpIHtcbiAgICAgIGhhc1BJTm9yT1RQID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoaGFzQ2FyZCAmJiBoYXNDVlYgJiYgaGFzUElOb3JPVFApIHtcbiAgICByZXR1cm4geyBkZXRlY3RlZDogdHJ1ZSB9O1xuICB9XG4gIHJldHVybiB7IGRldGVjdGVkOiBmYWxzZSB9O1xufVxuXG4vKipcbiAqIFJ1bGUgNTogQVBLIGFuZCBSZW1vdGUgQWNjZXNzIERvd25sb2FkIFByb21wdHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWFsaWNpb3VzQXBwRG93bmxvYWRzKHRleHQsIGxpbmtIcmVmcyA9IFtdKSB7XG4gIGNvbnN0IGxvd2VyID0gKHRleHQgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgXG4gIC8vIFJlbW90ZSBkZXNrdG9wIHRvb2wgbWVudGlvbnNcbiAgZm9yIChjb25zdCBhcHAgb2YgUkVNT1RFX0FDQ0VTU19BUFBTKSB7XG4gICAgaWYgKGxvd2VyLmluY2x1ZGVzKGFwcCkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGVjdGVkOiB0cnVlLFxuICAgICAgICByZWFzb246IGBQYWdlIGFkdmlzZXMgaW5zdGFsbGluZyByZW1vdGUgYWNjZXNzIHRvb2wgKCR7YXBwfSkuYFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBBUEsgZmlsZSBkb3dubG9hZHNcbiAgZm9yIChjb25zdCBocmVmIG9mIGxpbmtIcmVmcykge1xuICAgIGNvbnN0IGggPSAoaHJlZiB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChoLmVuZHNXaXRoKFwiLmFwa1wiKSB8fCBoLmluY2x1ZGVzKFwiLmFwaz9cIikpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRldGVjdGVkOiB0cnVlLFxuICAgICAgICByZWFzb246IFwiUGFnZSBjb250YWlucyBkaXJlY3QgZG93bmxvYWQgbGluayBmb3IgYW4gQW5kcm9pZCBhcHBsaWNhdGlvbiAoLmFwaykuXCJcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgZGV0ZWN0ZWQ6IGZhbHNlIH07XG59XG5cbi8qKlxuICogRXZhbHVhdGUgQ29tcGxldGUgUGFnZSBmb3IgU2NhbSBTaWduYWxzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhZ2VDb250ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZUNvbnRleHQudXJsXG4gKiBAcGFyYW0ge3N0cmluZ30gcGFnZUNvbnRleHQucGFnZVRleHRcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYWdlQ29udGV4dC5pbnB1dHNcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYWdlQ29udGV4dC5saW5rc1xuICogQHBhcmFtIHtPYmplY3R9IFtwYWdlQ29udGV4dC5kb21TdGF0c11cbiAqIEBwYXJhbSB7QXJyYXl9ICBbcGFnZUNvbnRleHQuY2xhc3NpZmllZEZpZWxkc11cbiAqIEByZXR1cm5zIHtPYmplY3R9IENvbXByZWhlbnNpdmUgZXZhbHVhdGlvbiBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV2YWx1YXRlUGFnZVNhZmV0eShwYWdlQ29udGV4dCkge1xuICBjb25zdCBzdGFydFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgPyBwZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCk7XG4gIGNvbnN0IHsgXG4gICAgdXJsID0gXCJcIiwgXG4gICAgcGFnZVRleHQgPSBcIlwiLCBcbiAgICBpbnB1dHMgPSBbXSwgXG4gICAgbGlua3MgPSBbXSxcbiAgICBkb21TdGF0cyA9IHsgZmllbGRzQ291bnQ6IGlucHV0cy5sZW5ndGgsIGZvcm1zQ291bnQ6IDAsIGxpbmtzQ291bnQ6IGxpbmtzLmxlbmd0aCwgZnJhbWVzQ291bnQ6IDAgfSxcbiAgICBjbGFzc2lmaWVkRmllbGRzID0gW11cbiAgfSA9IHBhZ2VDb250ZXh0O1xuXG4gIGNvbnN0IGhvc3RuYW1lID0gZXh0cmFjdEhvc3RuYW1lKHVybCk7XG4gIGNvbnN0IGlzQWxsb3dsaXN0ZWQgPSBpc0FsbG93bGlzdGVkRG9tYWluKGhvc3RuYW1lKTtcblxuICBjb25zdCBydWxlc1RyaWdnZXJlZCA9IFtdO1xuICBjb25zdCBydWxlc0RldGFpbGVkID0gW107XG4gIGxldCBoaWdoZXN0TGV2ZWwgPSBcInNhZmVcIjtcbiAgbGV0IHByaW1hcnlLZXkgPSBcIndhcm5pbmdfc2FmZV90aXRsZVwiO1xuXG4gIC8vIENoZWNrIDE6IExvb2thbGlrZSBkb21haW4gKFdlaWdodDogOTApXG4gIGNvbnN0IGxvb2thbGlrZSA9IGNoZWNrTG9va2FsaWtlRG9tYWluKGhvc3RuYW1lKTtcbiAgY29uc3QgY2hlY2sxUmVzdWx0ID0ge1xuICAgIGlkOiBcIkNIRUNLX0RPTUFJTlwiLFxuICAgIG5hbWU6IFwiRG9tYWluIFJlcHV0YXRpb24gJiBUeXBvc3F1YXR0aW5nXCIsXG4gICAgcGFzc2VkOiAhbG9va2FsaWtlLmlzTG9va2FsaWtlLFxuICAgIGRldGFpbDogbG9va2FsaWtlLmlzTG9va2FsaWtlID8gbG9va2FsaWtlLnJlYXNvbiA6IChpc0FsbG93bGlzdGVkID8gXCJEb21haW4gaXMgb24gb2ZmaWNpYWwgYWxsb3dsaXN0XCIgOiBcIk5vIGxvb2thbGlrZSBvciB0eXBvc3F1YXR0aW5nIHBhdHRlcm5zIGRldGVjdGVkXCIpXG4gIH07XG4gIGlmIChsb29rYWxpa2UuaXNMb29rYWxpa2UpIHtcbiAgICBoaWdoZXN0TGV2ZWwgPSBcImRhbmdlclwiO1xuICAgIHJ1bGVzVHJpZ2dlcmVkLnB1c2goXCJMT09LQUxJS0VfRE9NQUlOXCIpO1xuICAgIHJ1bGVzRGV0YWlsZWQucHVzaCh7XG4gICAgICBydWxlSWQ6IFwiTE9PS0FMSUtFX0RPTUFJTlwiLFxuICAgICAgbmFtZTogXCJMb29rYWxpa2UgLyBQaGlzaGluZyBEb21haW5cIixcbiAgICAgIHdlaWdodDogOTAsXG4gICAgICBzZXZlcml0eTogXCJkYW5nZXJcIixcbiAgICAgIHJlYXNvbjogbG9va2FsaWtlLnJlYXNvblxuICAgIH0pO1xuICAgIHByaW1hcnlLZXkgPSBcInJ1bGVfZmFrZV9kb21haW5cIjtcbiAgfVxuXG4gIC8vIENoZWNrIDI6IFVQSSBUcmFwIChXZWlnaHQ6IDg1KVxuICBjb25zdCB1cGlUcmFwID0gY2hlY2tVUElUcmFwcyhwYWdlVGV4dCk7XG4gIGNvbnN0IGNoZWNrMlJlc3VsdCA9IHtcbiAgICBpZDogXCJDSEVDS19VUElfVFJBUFwiLFxuICAgIG5hbWU6IFwiVVBJIFBJTiBDb2xsZWN0IFRyYXBzXCIsXG4gICAgcGFzc2VkOiAhdXBpVHJhcC5kZXRlY3RlZCxcbiAgICBkZXRhaWw6IHVwaVRyYXAuZGV0ZWN0ZWQgPyBcIkZvdW5kICdFbnRlciBQSU4gdG8gcmVjZWl2ZSBtb25leScgcGF0dGVyblwiIDogXCJObyByZXZlcnNlIFBJTiBjb2xsZWN0IHBhdHRlcm5zIGZvdW5kXCJcbiAgfTtcbiAgaWYgKHVwaVRyYXAuZGV0ZWN0ZWQpIHtcbiAgICBoaWdoZXN0TGV2ZWwgPSBcImRhbmdlclwiO1xuICAgIHJ1bGVzVHJpZ2dlcmVkLnB1c2goXCJVUElfUElOX1JFQ0VJVkVfVFJBUFwiKTtcbiAgICBydWxlc0RldGFpbGVkLnB1c2goe1xuICAgICAgcnVsZUlkOiBcIlVQSV9QSU5fUkVDRUlWRV9UUkFQXCIsXG4gICAgICBuYW1lOiBcIlVQSSBQSU4gQ29sbGVjdGlvbiBUcmFwXCIsXG4gICAgICB3ZWlnaHQ6IDg1LFxuICAgICAgc2V2ZXJpdHk6IFwiZGFuZ2VyXCIsXG4gICAgICByZWFzb246IFwiUGFnZSBhc2tzIGZvciBVUEkgUElOIHVuZGVyIHByZXRleHQgb2YgcmVjZWl2aW5nIG1vbmV5IG9yIGNhc2hiYWNrXCJcbiAgICB9KTtcbiAgICBwcmltYXJ5S2V5ID0gXCJydWxlX3Bpbl90b19yZWNlaXZlXCI7XG4gIH1cblxuICAvLyBDaGVjayAzOiBTZW5zaXRpdmUgRmllbGQgQ29tYm8gKFdlaWdodDogODApXG4gIGNvbnN0IHNlbnNpdGl2ZUNvbWJvID0gY2hlY2tTZW5zaXRpdmVGaWVsZENvbWJvKGlucHV0cywgaXNBbGxvd2xpc3RlZCk7XG4gIGNvbnN0IGNoZWNrM1Jlc3VsdCA9IHtcbiAgICBpZDogXCJDSEVDS19TRU5TSVRJVkVfQ09NQk9cIixcbiAgICBuYW1lOiBcIkNyZWRlbnRpYWwgSGFydmVzdGluZyBDb21iaW5hdGlvblwiLFxuICAgIHBhc3NlZDogIXNlbnNpdGl2ZUNvbWJvLmRldGVjdGVkLFxuICAgIGRldGFpbDogc2Vuc2l0aXZlQ29tYm8uZGV0ZWN0ZWQgPyBcIlNpbXVsdGFuZW91cyBDYXJkICsgQ1ZWICsgUElOL09UUCByZXF1ZXN0ZWQgb24gbm9uLWFsbG93bGlzdGVkIHNpdGVcIiA6IFwiTm8gZGFuZ2Vyb3VzIGNyZWRlbnRpYWwgY29tYmluYXRpb25zIGRldGVjdGVkXCJcbiAgfTtcbiAgaWYgKHNlbnNpdGl2ZUNvbWJvLmRldGVjdGVkKSB7XG4gICAgaGlnaGVzdExldmVsID0gXCJkYW5nZXJcIjtcbiAgICBydWxlc1RyaWdnZXJlZC5wdXNoKFwiU0VOU0lUSVZFX0NSRURFTlRJQUxfQ09NQk9cIik7XG4gICAgcnVsZXNEZXRhaWxlZC5wdXNoKHtcbiAgICAgIHJ1bGVJZDogXCJTRU5TSVRJVkVfQ1JFREVOVElBTF9DT01CT1wiLFxuICAgICAgbmFtZTogXCJDcml0aWNhbCBDcmVkZW50aWFsIEhhcnZlc3RcIixcbiAgICAgIHdlaWdodDogODAsXG4gICAgICBzZXZlcml0eTogXCJkYW5nZXJcIixcbiAgICAgIHJlYXNvbjogXCJVbm9mZmljaWFsIHBhZ2UgcmVxdWVzdHMgY29tcGxldGUgY2FyZCBjcmVkZW50aWFscyAobnVtYmVyLCBDVlYsIGFuZCBQSU4vT1RQKVwiXG4gICAgfSk7XG4gICAgcHJpbWFyeUtleSA9IFwicnVsZV9zZW5zaXRpdmVfY29tYm9cIjtcbiAgfVxuXG4gIC8vIENoZWNrIDQ6IFJlbW90ZSBBcHAgLyBBUEsgZG93bmxvYWQgKFdlaWdodDogNjUpXG4gIGNvbnN0IGFwcERvd25sb2FkID0gY2hlY2tNYWxpY2lvdXNBcHBEb3dubG9hZHMocGFnZVRleHQsIGxpbmtzKTtcbiAgY29uc3QgY2hlY2s0UmVzdWx0ID0ge1xuICAgIGlkOiBcIkNIRUNLX0FQUF9ET1dOTE9BRFwiLFxuICAgIG5hbWU6IFwiTWFsaWNpb3VzIEFwcCAmIEFQSyBQcm9tcHRzXCIsXG4gICAgcGFzc2VkOiAhYXBwRG93bmxvYWQuZGV0ZWN0ZWQsXG4gICAgZGV0YWlsOiBhcHBEb3dubG9hZC5kZXRlY3RlZCA/IGFwcERvd25sb2FkLnJlYXNvbiA6IFwiTm8gdW5rbm93biBBUEtzIG9yIHJlbW90ZS1kZXNrdG9wIHRvb2wgZG93bmxvYWRzIGRldGVjdGVkXCJcbiAgfTtcbiAgaWYgKGFwcERvd25sb2FkLmRldGVjdGVkKSB7XG4gICAgaWYgKGhpZ2hlc3RMZXZlbCAhPT0gXCJkYW5nZXJcIikgaGlnaGVzdExldmVsID0gXCJjYXV0aW9uXCI7XG4gICAgcnVsZXNUcmlnZ2VyZWQucHVzaChcIk1BTElDSU9VU19BUFBfRE9XTkxPQURcIik7XG4gICAgcnVsZXNEZXRhaWxlZC5wdXNoKHtcbiAgICAgIHJ1bGVJZDogXCJNQUxJQ0lPVVNfQVBQX0RPV05MT0FEXCIsXG4gICAgICBuYW1lOiBcIlN1c3BpY2lvdXMgQXBwIFByb21wdFwiLFxuICAgICAgd2VpZ2h0OiA2NSxcbiAgICAgIHNldmVyaXR5OiBcImNhdXRpb25cIixcbiAgICAgIHJlYXNvbjogYXBwRG93bmxvYWQucmVhc29uXG4gICAgfSk7XG4gICAgaWYgKHByaW1hcnlLZXkgPT09IFwid2FybmluZ19zYWZlX3RpdGxlXCIpIHByaW1hcnlLZXkgPSBcInJ1bGVfYXBrX2Rvd25sb2FkXCI7XG4gIH1cblxuICAvLyBDaGVjayA1OiBVcmdlbmN5ICYgVGhyZWF0IGxhbmd1YWdlIChXZWlnaHQ6IDUwKVxuICBjb25zdCB1cmdlbmN5ID0gY2hlY2tVcmdlbmN5QW5kVGhyZWF0cyhwYWdlVGV4dCk7XG4gIGNvbnN0IGNoZWNrNVJlc3VsdCA9IHtcbiAgICBpZDogXCJDSEVDS19VUkdFTkNZXCIsXG4gICAgbmFtZTogXCJJbnRpbWlkYXRpb24gJiBQcmVzc3VyZSBUYWN0aWNzXCIsXG4gICAgcGFzc2VkOiAhdXJnZW5jeS5kZXRlY3RlZCxcbiAgICBkZXRhaWw6IHVyZ2VuY3kuZGV0ZWN0ZWQgPyBgUHJlc3N1cmUgdGFjdGljcyBmb3VuZCAoJHt1cmdlbmN5Lm1hdGNoZXMuam9pbihcIiwgXCIpfSlgIDogXCJObyB1cmdlbmN5IG9yIGludGltaWRhdGlvbiBwaHJhc2luZyBkZXRlY3RlZFwiXG4gIH07XG4gIGlmICh1cmdlbmN5LmRldGVjdGVkKSB7XG4gICAgaWYgKGhpZ2hlc3RMZXZlbCAhPT0gXCJkYW5nZXJcIikgaGlnaGVzdExldmVsID0gXCJjYXV0aW9uXCI7XG4gICAgcnVsZXNUcmlnZ2VyZWQucHVzaChcIlVSR0VOQ1lfVEhSRUFUX0xBTkdVQUdFXCIpO1xuICAgIHJ1bGVzRGV0YWlsZWQucHVzaCh7XG4gICAgICBydWxlSWQ6IFwiVVJHRU5DWV9USFJFQVRfTEFOR1VBR0VcIixcbiAgICAgIG5hbWU6IFwiVXJnZW5jeSAvIFRocmVhdCBJbnRpbWlkYXRpb25cIixcbiAgICAgIHdlaWdodDogNTAsXG4gICAgICBzZXZlcml0eTogXCJjYXV0aW9uXCIsXG4gICAgICByZWFzb246IGBJbnRpbWlkYXRpb24ga2V5d29yZHMgZGV0ZWN0ZWQ6ICR7dXJnZW5jeS5tYXRjaGVzLmpvaW4oXCIsIFwiKX1gXG4gICAgfSk7XG4gICAgaWYgKHByaW1hcnlLZXkgPT09IFwid2FybmluZ19zYWZlX3RpdGxlXCIpIHByaW1hcnlLZXkgPSBcInJ1bGVfdXJnZW5jeV90aHJlYXRcIjtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrcyA9IFtjaGVjazFSZXN1bHQsIGNoZWNrMlJlc3VsdCwgY2hlY2szUmVzdWx0LCBjaGVjazRSZXN1bHQsIGNoZWNrNVJlc3VsdF07XG4gIGNvbnN0IHBhc3NlZENoZWNrc0NvdW50ID0gY2hlY2tzLmZpbHRlcihjID0+IGMucGFzc2VkKS5sZW5ndGg7XG4gIGNvbnN0IHRvdGFsQ2hlY2tzQ291bnQgPSBjaGVja3MubGVuZ3RoO1xuXG4gIGNvbnN0IGVuZFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCIgPyBwZXJmb3JtYW5jZS5ub3coKSA6IERhdGUubm93KCk7XG4gIGNvbnN0IGFuYWx5c2lzVGltZU1zID0gKyhlbmRUaW1lIC0gc3RhcnRUaW1lKS50b0ZpeGVkKDIpO1xuXG4gIC8vIFNhZmUgdmVyZGljdCByZWFzb24gd2l0aCBleGFjdCBjaGVja3MgY291bnRcbiAgY29uc3Qgc2FmZVZlcmRpY3RFbiA9IGBObyByaXNrIHNpZ25hbHMgZm91bmQgYW1vbmcgJHt0b3RhbENoZWNrc0NvdW50fSBjaGVja3MuYDtcbiAgY29uc3Qgc2FmZVZlcmRpY3RUZSA9IGAke3RvdGFsQ2hlY2tzQ291bnR9IFx1MEMyRFx1MEMyNlx1MEM0RFx1MEMzMFx1MEMyNFx1MEMzRSBcdTBDMjRcdTBDMjhcdTBDM0ZcdTBDMTZcdTBDNDBcdTBDMzJcdTBDMzJcdTBDNEIgXHUwQzBFXHUwQzMyXHUwQzNFXHUwQzAyXHUwQzFGXHUwQzNGIFx1MEMwNVx1MEMyOFx1MEM0MVx1MEMyRVx1MEMzRVx1MEMyOFx1MEMzRVx1MEMzOFx1MEM0RFx1MEMyQVx1MEMyNiBcdTBDMzhcdTBDMDJcdTBDMTVcdTBDNDdcdTBDMjRcdTBDM0VcdTBDMzJcdTBDNDEgXHUwQzE1XHUwQzI4XHUwQzQxXHUwQzE3XHUwQzRBXHUwQzI4XHUwQzJDXHUwQzIxXHUwQzMyXHUwQzQ3XHUwQzI2XHUwQzQxLmA7XG4gIGNvbnN0IHNhZmVWZXJkaWN0SGkgPSBgJHt0b3RhbENoZWNrc0NvdW50fSBcdTA5MzhcdTA5NDFcdTA5MzBcdTA5MTVcdTA5NERcdTA5MzdcdTA5M0UgXHUwOTFDXHUwOTNFXHUwOTAyXHUwOTFBXHUwOTRCXHUwOTAyIFx1MDkyRVx1MDk0N1x1MDkwMiBcdTA5MTVcdTA5NEJcdTA5MDggXHUwOTFDXHUwOTRCXHUwOTE2XHUwOTNGXHUwOTJFIFx1MDkzOFx1MDkwMlx1MDkxNVx1MDk0N1x1MDkyNCBcdTA5MjhcdTA5MzlcdTA5NDBcdTA5MDIgXHUwOTJFXHUwOTNGXHUwOTMyXHUwOTNFXHUwOTY0YDtcblxuICBjb25zdCByZWFzb25FbiA9IGhpZ2hlc3RMZXZlbCA9PT0gXCJzYWZlXCIgPyBzYWZlVmVyZGljdEVuIDogdChwcmltYXJ5S2V5LCBcImVuXCIpO1xuICBjb25zdCByZWFzb25UZSA9IGhpZ2hlc3RMZXZlbCA9PT0gXCJzYWZlXCIgPyBzYWZlVmVyZGljdFRlIDogdChwcmltYXJ5S2V5LCBcInRlXCIpO1xuICBjb25zdCByZWFzb25IaSA9IGhpZ2hlc3RMZXZlbCA9PT0gXCJzYWZlXCIgPyBzYWZlVmVyZGljdEhpIDogdChwcmltYXJ5S2V5LCBcImhpXCIpO1xuXG4gIHJldHVybiB7XG4gICAgbGV2ZWw6IGhpZ2hlc3RMZXZlbCxcbiAgICBydWxlc1RyaWdnZXJlZCxcbiAgICBydWxlc0RldGFpbGVkLFxuICAgIGNoZWNrcyxcbiAgICB0b3RhbENoZWNrc0NvdW50LFxuICAgIHBhc3NlZENoZWNrc0NvdW50LFxuICAgIHJlYXNvbkVuLFxuICAgIHJlYXNvblRlLFxuICAgIHJlYXNvbkhpLFxuICAgIGhvc3RuYW1lLFxuICAgIGlzQWxsb3dsaXN0ZWQsXG4gICAgZG9tU3RhdHMsXG4gICAgZmllbGRzVGFibGU6IGNsYXNzaWZpZWRGaWVsZHMsXG4gICAgYW5hbHlzaXNUaW1lTXNcbiAgfTtcbn1cbiIsICIvKipcbiAqIHBpaS5qcyBcdTIwMTQgUElJIChQZXJzb25hbGx5IElkZW50aWZpYWJsZSBJbmZvcm1hdGlvbikgRGV0ZWN0aW9uIE1vZHVsZVxuICpcbiAqIGRldGVjdFNlbnNpdGl2ZVJlZ2lvbnMoeyBkb21SZWdpb25zLCBvY3JEZXRlY3Rpb25zLCBmYWNlRGV0ZWN0aW9ucyB9KVxuICogICBcdTIxOTIgU2Vuc2l0aXZlUmVnaW9uW11cbiAqXG4gKiBTZW5zaXRpdmVSZWdpb24gc2NoZW1hOlxuICogICB7XG4gKiAgICAgYmJveDogICAgICAgW3gsIHksIHcsIGhdLCAgICAgICAgICAvLyBwaXhlbCBjb29yZHMgbWF0Y2hpbmcgdGhlIHNjcmVlbnNob3RcbiAqICAgICB0eXBlOiAgICAgICBQSUlfVFlQRS4qLFxuICogICAgIGNvbmZpZGVuY2U6IG51bWJlciwgICAgICAgICAgICAgICAgICAvLyAwXHUyMDEzMVxuICogICAgIHNvdXJjZTogICAgIFwiZG9tXCJ8XCJvY3JfcmVnZXhcInxcInZpc2lvblwifFwiZG9tK29jcl9yZWdleFwiLFxuICogICAgIG1hdGNoZWQ/OiAgIHN0cmluZywgICAgICAgICAgICAgICAgICAvLyB0aGUgbWF0Y2hlZCB0ZXh0IHNuaXBwZXQgKGRlYnVnKVxuICogICAgIGx1aG5WYWxpZD86IGJvb2xlYW4sICAgICAgICAgICAgICAgICAvLyBmb3IgQ0FSRCB0eXBlXG4gKiAgIH1cbiAqL1xuXG4vLyBcdTI1MDBcdTI1MDAgUElJIHR5cGUgY29uc3RhbnRzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZXhwb3J0IGNvbnN0IFBJSV9UWVBFID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFBBU1NXT1JEOiAgICAgIFwiUEFTU1dPUkRcIixcbiAgRU1BSUw6ICAgICAgICAgXCJFTUFJTFwiLFxuICBQSE9ORTogICAgICAgICBcIlBIT05FXCIsXG4gIENBUkQ6ICAgICAgICAgIFwiQ0FSRFwiLFxuICBGQUNFOiAgICAgICAgICBcIkZBQ0VcIixcbiAgTkFNRTogICAgICAgICAgXCJOQU1FXCIsXG4gIEFBREhBQVI6ICAgICAgIFwiQUFESEFBUlwiLFxuICBQQU46ICAgICAgICAgICBcIlBBTlwiLFxuICBHU1RJTjogICAgICAgICBcIkdTVElOXCIsXG4gIElGU0M6ICAgICAgICAgIFwiSUZTQ1wiLFxuICBJTkRJQU5fTU9CSUxFOiBcIklORElBTl9NT0JJTEVcIixcbiAgT1RIRVJfUElJOiAgICAgXCJPVEhFUl9QSUlcIixcbn0pO1xuXG4vLyBSZW5kZXJpbmcgY29sb3VycyB1c2VkIGJ5IHBvcHVwIGFuZCB0ZXN0IGhhcm5lc3MgKGV4cG9ydGVkIGZvciByZXVzZSlcbmV4cG9ydCBjb25zdCBQSUlfQ09MT1JTID0ge1xuICBQQVNTV09SRDogICAgICB7IGZpbGw6IFwicmdiYSgyMjAsMzgsMzgsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VmNDQ0NFwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBFTUFJTDogICAgICAgICB7IGZpbGw6IFwicmdiYSgyMzQsODgsMTIsMC4zNSlcIiwgICBzdHJva2U6IFwiI2Y5NzMxNlwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBQSE9ORTogICAgICAgICB7IGZpbGw6IFwicmdiYSgyMDIsMTM4LDQsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VhYjMwOFwiLCB0ZXh0OiBcIiMwMDBcIiB9LFxuICBDQVJEOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSgyMTksMzksMTE5LDAuMzUpXCIsICBzdHJva2U6IFwiI2VjNDg5OVwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBGQUNFOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSg4LDE0NSwxNzgsMC4zNSlcIiwgICBzdHJva2U6IFwiIzA2YjZkNFwiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBOQU1FOiAgICAgICAgICB7IGZpbGw6IFwicmdiYSgxNDcsNTEsMjM0LDAuMzUpXCIsICBzdHJva2U6IFwiI2E4NTVmN1wiLCB0ZXh0OiBcIiNmZmZcIiB9LFxuICBBQURIQUFSOiAgICAgICB7IGZpbGw6IFwicmdiYSgyMzQsODgsMTIsMC4zNSlcIiwgICBzdHJva2U6IFwiI2VhNTgwY1wiLCB0ZXh0OiBcIiNmZmZcIiB9LCAvLyBTYWZmcm9uIC8gRGVlcCBPcmFuZ2VcbiAgUEFOOiAgICAgICAgICAgeyBmaWxsOiBcInJnYmEoMTYsMTg1LDEyOSwwLjM1KVwiLCAgc3Ryb2tlOiBcIiMxMGI5ODFcIiwgdGV4dDogXCIjZmZmXCIgfSwgLy8gRW1lcmFsZFxuICBHU1RJTjogICAgICAgICB7IGZpbGw6IFwicmdiYSg5OSwxMDIsMjQxLDAuMzUpXCIsICBzdHJva2U6IFwiIzYzNjZmMVwiLCB0ZXh0OiBcIiNmZmZcIiB9LCAvLyBJbmRpZ29cbiAgSUZTQzogICAgICAgICAgeyBmaWxsOiBcInJnYmEoMTQsMTY1LDIzMywwLjM1KVwiLCAgc3Ryb2tlOiBcIiMwZWE1ZTlcIiwgdGV4dDogXCIjZmZmXCIgfSwgLy8gQ3lhbiAvIFNreVxuICBJTkRJQU5fTU9CSUxFOiB7IGZpbGw6IFwicmdiYSgyMzQsMTc5LDgsMC4zNSlcIiwgIHN0cm9rZTogXCIjY2E4YTA0XCIsIHRleHQ6IFwiIzAwMFwiIH0sIC8vIEFtYmVyIEdvbGRcbiAgT1RIRVJfUElJOiAgICAgeyBmaWxsOiBcInJnYmEoMTAwLDExNiwxMzksMC4zNSlcIiwgc3Ryb2tlOiBcIiM2NDc0OGJcIiwgdGV4dDogXCIjZmZmXCIgfSxcbn07XG5cbi8vIFx1MjUwMFx1MjUwMCBWZXJob2VmZiBBbGdvcml0aG0gVGFibGVzIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuY29uc3QgVkVSSE9FRkZfRCA9IFtcbiAgWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldLFxuICBbMSwgMiwgMywgNCwgMCwgNiwgNywgOCwgOSwgNV0sXG4gIFsyLCAzLCA0LCAwLCAxLCA3LCA4LCA5LCA1LCA2XSxcbiAgWzMsIDQsIDAsIDEsIDIsIDgsIDksIDUsIDYsIDddLFxuICBbNCwgMCwgMSwgMiwgMywgOSwgNSwgNiwgNywgOF0sXG4gIFs1LCA5LCA4LCA3LCA2LCAwLCA0LCAzLCAyLCAxXSxcbiAgWzYsIDUsIDksIDgsIDcsIDEsIDAsIDQsIDMsIDJdLFxuICBbNywgNiwgNSwgOSwgOCwgMiwgMSwgMCwgNCwgM10sXG4gIFs4LCA3LCA2LCA1LCA5LCAzLCAyLCAxLCAwLCA0XSxcbiAgWzksIDgsIDcsIDYsIDUsIDQsIDMsIDIsIDEsIDBdXG5dO1xuXG5jb25zdCBWRVJIT0VGRl9QID0gW1xuICBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV0sXG4gIFsxLCA1LCA3LCA2LCAyLCA4LCAzLCAwLCA5LCA0XSxcbiAgWzUsIDgsIDAsIDMsIDcsIDksIDYsIDEsIDQsIDJdLFxuICBbOCwgOSwgMSwgNiwgMCwgNCwgMywgNSwgMiwgN10sXG4gIFs5LCA0LCA1LCAzLCAxLCAyLCA2LCA4LCA3LCAwXSxcbiAgWzQsIDIsIDgsIDYsIDUsIDcsIDMsIDksIDAsIDFdLFxuICBbMiwgNywgOSwgMywgOCwgMCwgNiwgNCwgMSwgNV0sXG4gIFs3LCAwLCA0LCA2LCA5LCAxLCAzLCAyLCA1LCA4XVxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmhvZWZmQ2hlY2socmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGRpZ2l0cyA9IHJhdy5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gIGlmICghZGlnaXRzKSByZXR1cm4gZmFsc2U7XG4gIGxldCBjID0gMDtcbiAgY29uc3QgcmV2ZXJzZWQgPSBkaWdpdHMuc3BsaXQoXCJcIikucmV2ZXJzZSgpLm1hcChOdW1iZXIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmVyc2VkLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IFZFUkhPRUZGX0RbY11bVkVSSE9FRkZfUFtpICUgOF1bcmV2ZXJzZWRbaV1dXTtcbiAgfVxuICByZXR1cm4gYyA9PT0gMDtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFN0cnVjdHVyYWwgVmFsaWRhdG9ycyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcblxuLyoqXG4gKiBBQURIQUFSOiBleGFjdGx5IDEyIGRpZ2l0cywgZmlyc3QgZGlnaXQgMS05IGV4Y2x1ZGluZyBsZWFkaW5nIDAvMSAoaS5lLiBzdGFydHMgd2l0aCAyLTkpLFxuICogY29tbW9ubHkgZ3JvdXBlZCBpbiA0cyAoZS5nLiBcIlhYWFggWFhYWCBYWFhYXCIgb3IgXCJYWFhYWFhYWFhYWFhcIikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUFhZGhhYXIocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcucmVwbGFjZSgvW1xcc1xcLV0vZywgXCJcIik7XG4gIGlmICghL15cXGR7MTJ9JC8udGVzdChjbGVhbmVkKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBmaXJzdCA9IGNsZWFuZWQuY2hhckF0KDApO1xuICBpZiAoZmlyc3QgPT09IFwiMFwiIHx8IGZpcnN0ID09PSBcIjFcIikgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBQQU46IGV4YWN0bHkgMTAgY2hhcmFjdGVycyBtYXRjaGluZyBwYXR0ZXJuIFtBLVpdezV9WzAtOV17NH1bQS1aXXsxfVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVQQU4ocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChjbGVhbmVkLmxlbmd0aCAhPT0gMTApIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIC9eW0EtWl17NX1bMC05XXs0fVtBLVpdJC8udGVzdChjbGVhbmVkKTtcbn1cblxuLyoqXG4gKiBHU1RJTjogMTUgY2hhcmFjdGVycywgZmlyc3QgMiBkaWdpdHMgYXJlIGEgdmFsaWQgc3RhdGUgY29kZSAoMDEtMzgpLFxuICogY2hhcmFjdGVycyAzLTEyIHN0cnVjdHVyYWxseSBtYXRjaCBhIFBBTi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlR1NUSU4ocmF3KSB7XG4gIGlmICh0eXBlb2YgcmF3ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IGNsZWFuZWQgPSByYXcudHJpbSgpLnRvVXBwZXJDYXNlKCk7XG4gIGlmIChjbGVhbmVkLmxlbmd0aCAhPT0gMTUpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3RhdGVDb2RlU3RyID0gY2xlYW5lZC5zbGljZSgwLCAyKTtcbiAgaWYgKCEvXlxcZHsyfSQvLnRlc3Qoc3RhdGVDb2RlU3RyKSkgcmV0dXJuIGZhbHNlO1xuICBjb25zdCBzdGF0ZUNvZGUgPSBwYXJzZUludChzdGF0ZUNvZGVTdHIsIDEwKTtcbiAgaWYgKHN0YXRlQ29kZSA8IDEgfHwgc3RhdGVDb2RlID4gMzgpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgcGFuUGFydCA9IGNsZWFuZWQuc2xpY2UoMiwgMTIpO1xuICBpZiAoIXZhbGlkYXRlUEFOKHBhblBhcnQpKSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHRhaWwgPSBjbGVhbmVkLnNsaWNlKDEyLCAxNSk7XG4gIHJldHVybiAvXlswLTlBLVpdWlswLTlBLVpdJC8udGVzdCh0YWlsKSB8fCAvXlswLTlBLVpdezN9JC8udGVzdCh0YWlsKTtcbn1cblxuLyoqXG4gKiBJRlNDOiAxMSBjaGFyYWN0ZXJzLCBwYXR0ZXJuIFtBLVpdezR9MFtBLVowLTldezZ9ICg1dGggY2hhcmFjdGVyIHN0cmljdGx5ICcwJylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlSUZTQyhyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgY2xlYW5lZCA9IHJhdy50cmltKCkudG9VcHBlckNhc2UoKTtcbiAgaWYgKGNsZWFuZWQubGVuZ3RoICE9PSAxMSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gL15bQS1aXXs0fTBbQS1aMC05XXs2fSQvLnRlc3QoY2xlYW5lZCk7XG59XG5cbi8qKlxuICogSU5ESUFOX01PQklMRTogMTAgZGlnaXRzIHN0YXJ0aW5nIHdpdGggNiwgNywgOCwgb3IgOSwgb3B0aW9uYWxseSBwcmVmaXhlZCArOTEsIDkxLCBvciAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUluZGlhbk1vYmlsZShyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgY29uc3QgY2xlYW5lZCA9IHJhdy50cmltKCkucmVwbGFjZSgvW1xcc1xcLVxcKFxcKV0vZywgXCJcIik7XG4gIHJldHVybiAvXig/OlxcKzkxfDkxfDApP1s2LTldXFxkezl9JC8udGVzdChjbGVhbmVkKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEx1aG4gYWxnb3JpdGhtIGZvciBjYXJkcyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIGx1aG5DaGVjayhyYXcpIHtcbiAgY29uc3QgZGlnaXRzID0gcmF3LnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkubWFwKE51bWJlcik7XG4gIGlmIChkaWdpdHMubGVuZ3RoIDwgMTUpIHJldHVybiBmYWxzZTtcbiAgY29uc3Qgc3VtID0gZGlnaXRzLnJlZHVjZSgoYWNjLCBkLCBpKSA9PiB7XG4gICAgaWYgKGkgJSAyID09PSAxKSB7IGQgKj0gMjsgaWYgKGQgPiA5KSBkIC09IDk7IH1cbiAgICByZXR1cm4gYWNjICsgZDtcbiAgfSwgMCk7XG4gIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIElvVSBoZWxwZXIgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBpb3UoYSwgYikge1xuICBjb25zdCBbYXgsIGF5LCBhdywgYWhdID0gYS5iYm94O1xuICBjb25zdCBbYngsIGJ5LCBidywgYmhdID0gYi5iYm94O1xuICBjb25zdCBpeCA9IE1hdGgubWF4KGF4LCBieCk7XG4gIGNvbnN0IGl5ID0gTWF0aC5tYXgoYXksIGJ5KTtcbiAgY29uc3QgaXcgPSBNYXRoLm1pbihheCArIGF3LCBieCArIGJ3KSAtIGl4O1xuICBjb25zdCBpaCA9IE1hdGgubWluKGF5ICsgYWgsIGJ5ICsgYmgpIC0gaXk7XG4gIGlmIChpdyA8PSAwIHx8IGloIDw9IDApIHJldHVybiAwO1xuICBjb25zdCBpbnRlcnNlY3Rpb24gPSBpdyAqIGloO1xuICBjb25zdCB1bmlvbiA9IGF3ICogYWggKyBidyAqIGJoIC0gaW50ZXJzZWN0aW9uO1xuICByZXR1cm4gdW5pb24gPiAwID8gaW50ZXJzZWN0aW9uIC8gdW5pb24gOiAwO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTWVyZ2Ugb3ZlcmxhcHBpbmcgZGV0ZWN0aW9ucyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbmNvbnN0IElPVV9USFJFU0hPTEQgPSAwLjI1O1xuXG5mdW5jdGlvbiBtZXJnZVJlZ2lvbnMocmVnaW9ucykge1xuICBjb25zdCBtZXJnZWQgPSBbXTtcbiAgY29uc3QgdXNlZCAgID0gbmV3IFNldCgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVnaW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh1c2VkLmhhcyhpKSkgY29udGludWU7XG4gICAgY29uc3QgY2x1c3RlciA9IFtyZWdpb25zW2ldXTtcbiAgICB1c2VkLmFkZChpKTtcblxuICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHJlZ2lvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGlmICh1c2VkLmhhcyhqKSkgY29udGludWU7XG4gICAgICBpZiAoaW91KHJlZ2lvbnNbaV0sIHJlZ2lvbnNbal0pID49IElPVV9USFJFU0hPTEQpIHtcbiAgICAgICAgY2x1c3Rlci5wdXNoKHJlZ2lvbnNbal0pO1xuICAgICAgICB1c2VkLmFkZChqKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2x1c3Rlci5sZW5ndGggPT09IDEpIHtcbiAgICAgIG1lcmdlZC5wdXNoKGNsdXN0ZXJbMF0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gVW5pb24gYm91bmRpbmcgYm94IGFjcm9zcyBhbGwgY2x1c3RlciBtZW1iZXJzXG4gICAgY29uc3QgeHMgICAgPSBjbHVzdGVyLmZsYXRNYXAoKHIpID0+IFtyLmJib3hbMF0sIHIuYmJveFswXSArIHIuYmJveFsyXV0pO1xuICAgIGNvbnN0IHlzICAgID0gY2x1c3Rlci5mbGF0TWFwKChyKSA9PiBbci5iYm94WzFdLCByLmJib3hbMV0gKyByLmJib3hbM11dKTtcbiAgICBjb25zdCBtaW5YICA9IE1hdGgubWluKC4uLnhzKSwgbWluWSA9IE1hdGgubWluKC4uLnlzKTtcbiAgICBjb25zdCBtYXhYICA9IE1hdGgubWF4KC4uLnhzKSwgbWF4WSA9IE1hdGgubWF4KC4uLnlzKTtcblxuICAgIGNvbnN0IHNvdXJjZXMgPSBbLi4ubmV3IFNldChjbHVzdGVyLm1hcCgocikgPT4gci5zb3VyY2UpKV07XG4gICAgLy8gSGlnaGVzdC1wcmlvcml0eSBzb3VyY2UgKERPTSA+IE9DUiA+IHZpc2lvbilcbiAgICBjb25zdCBwcmlvcml0eSA9IFtcImRvbVwiLCBcIm9jcl9yZWdleFwiLCBcInZpc2lvblwiXTtcbiAgICAvLyBTcGVjaWZpYyBJbmRpYW4gdHlwZXMgcHJpb3JpdGl6ZWQgb3ZlciBnZW5lcmljIGZhbGxiYWNrIHR5cGVzXG4gICAgY29uc3QgdHlwZVByaW9yaXR5ID0gW1xuICAgICAgUElJX1RZUEUuUEFTU1dPUkQsXG4gICAgICBQSUlfVFlQRS5DQVJELFxuICAgICAgUElJX1RZUEUuQUFESEFBUixcbiAgICAgIFBJSV9UWVBFLkdTVElOLFxuICAgICAgUElJX1RZUEUuUEFOLFxuICAgICAgUElJX1RZUEUuSUZTQyxcbiAgICAgIFBJSV9UWVBFLklORElBTl9NT0JJTEUsXG4gICAgICBQSUlfVFlQRS5FTUFJTCxcbiAgICAgIFBJSV9UWVBFLlBIT05FLFxuICAgICAgUElJX1RZUEUuRkFDRSxcbiAgICAgIFBJSV9UWVBFLk5BTUUsXG4gICAgICBQSUlfVFlQRS5PVEhFUl9QSUksXG4gICAgXTtcblxuICAgIGNsdXN0ZXIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3Qgc3JjRGlmZiA9IHByaW9yaXR5LmluZGV4T2YoYS5zb3VyY2UpIC0gcHJpb3JpdHkuaW5kZXhPZihiLnNvdXJjZSk7XG4gICAgICBpZiAoc3JjRGlmZiAhPT0gMCkgcmV0dXJuIHNyY0RpZmY7XG4gICAgICByZXR1cm4gdHlwZVByaW9yaXR5LmluZGV4T2YoYS50eXBlKSAtIHR5cGVQcmlvcml0eS5pbmRleE9mKGIudHlwZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYXhDb25mID0gTWF0aC5tYXgoLi4uY2x1c3Rlci5tYXAoKHIpID0+IHIuY29uZmlkZW5jZSkpO1xuICAgIGNvbnN0IGJvb3N0ZWQgPSBNYXRoLm1pbigxLCBtYXhDb25mICsgKHNvdXJjZXMubGVuZ3RoIC0gMSkgKiAwLjA4KTtcblxuICAgIG1lcmdlZC5wdXNoKHtcbiAgICAgIGJib3g6ICAgICAgIFttaW5YLCBtaW5ZLCBtYXhYIC0gbWluWCwgbWF4WSAtIG1pblldLFxuICAgICAgdHlwZTogICAgICAgY2x1c3RlclswXS50eXBlLFxuICAgICAgY29uZmlkZW5jZTogK2Jvb3N0ZWQudG9GaXhlZCgzKSxcbiAgICAgIHNvdXJjZTogICAgIHNvdXJjZXMubGVuZ3RoID09PSAxID8gc291cmNlc1swXSA6IHNvdXJjZXMuam9pbihcIitcIiksXG4gICAgICBfY2x1c3RlcjogICBjbHVzdGVyLm1hcCgoeyB0eXBlLCBzb3VyY2UsIGNvbmZpZGVuY2UgfSkgPT4gKHsgdHlwZSwgc291cmNlLCBjb25maWRlbmNlIH0pKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtZXJnZWQ7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBQYXNzIDEgXHUyMDE0IERPTSBzY2FuIHJlc3VsdHMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBwYXNzRE9NKGRvbVJlZ2lvbnMpIHtcbiAgcmV0dXJuIChkb21SZWdpb25zID8/IFtdKS5tYXAoKHIpID0+ICh7XG4gICAgYmJveDogICAgICAgci5iYm94LFxuICAgIHR5cGU6ICAgICAgIHIudHlwZSxcbiAgICBjb25maWRlbmNlOiByLmNvbmZpZGVuY2UgPz8gMS4wLFxuICAgIHNvdXJjZTogICAgIFwiZG9tXCIsXG4gIH0pKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFBhc3MgMiBcdTIwMTQgT0NSLXJlZ2V4IHdpdGggU3RydWN0dXJhbCBWYWxpZGF0aW9uIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gcGFzc09DUihvY3JEZXRlY3Rpb25zKSB7XG4gIGNvbnN0IGhpdHMgPSBbXTtcblxuICBmb3IgKGNvbnN0IGRldCBvZiBvY3JEZXRlY3Rpb25zID8/IFtdKSB7XG4gICAgaWYgKGRldC50eXBlICE9PSBcInRleHRcIikgY29udGludWU7XG4gICAgY29uc3QgdGV4dCA9IGRldC5sYWJlbF9vcl90ZXh0ID8/IFwiXCI7XG4gICAgY29uc3QgYmJveCA9IGRldC5iYm94O1xuXG4gICAgLy8gMS4gR1NUSU4gKDE1IGNoYXJzKSBcdTIwMTQgdGVzdGVkIGJlZm9yZSBQQU4gc28gUEFOIGlzIG5vdCBpc29sYXRlZCBmcm9tIGEgR1NUSU5cbiAgICBjb25zdCBnc3Rpbk1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGIoMFsxLTldfFsxMl1bMC05XXwzWzAtOF0pW0EtWl17NX1bMC05XXs0fVtBLVpdWzAtOUEtWl17M31cXGIvZ2kpO1xuICAgIGZvciAoY29uc3QgbSBvZiBnc3Rpbk1hdGNoZXMpIHtcbiAgICAgIGlmICh2YWxpZGF0ZUdTVElOKG1bMF0pKSB7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuR1NUSU4sXG4gICAgICAgICAgY29uZmlkZW5jZTogMC45NixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gUEFOICgxMCBjaGFycylcbiAgICBjb25zdCBwYW5NYXRjaGVzID0gdGV4dC5tYXRjaEFsbCgvXFxiW0EtWl17NX1bMC05XXs0fVtBLVpdXFxiL2dpKTtcbiAgICBmb3IgKGNvbnN0IG0gb2YgcGFuTWF0Y2hlcykge1xuICAgICAgY29uc3QgaXNQYXJ0T2ZHc3RpbiA9IGhpdHMuc29tZShoID0+IGgudHlwZSA9PT0gUElJX1RZUEUuR1NUSU4gJiYgaC5tYXRjaGVkPy5pbmNsdWRlcyhtWzBdLnRvVXBwZXJDYXNlKCkpKTtcbiAgICAgIGlmICghaXNQYXJ0T2ZHc3RpbiAmJiB2YWxpZGF0ZVBBTihtWzBdKSkge1xuICAgICAgICBoaXRzLnB1c2goe1xuICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLlBBTixcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjk0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBBQURIQUFSICgxMiBkaWdpdHMsIGdyb3VwZWQgb3IgcmF3LCBmaXJzdCBkaWdpdCAyLTkpXG4gICAgY29uc3QgYWFkaGFhck1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGJbMi05XVxcZHszfVtcXHNcXC1dP1swLTldezR9W1xcc1xcLV0/WzAtOV17NH1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIGFhZGhhYXJNYXRjaGVzKSB7XG4gICAgICBpZiAodmFsaWRhdGVBYWRoYWFyKG1bMF0pKSB7XG4gICAgICAgIGNvbnN0IHZWYWxpZCA9IHZlcmhvZWZmQ2hlY2sobVswXSk7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRyaW0oKSxcbiAgICAgICAgICB2ZXJob2VmZlZhbGlkOiB2VmFsaWQsXG4gICAgICAgICAgdHlwZTogICAgICAgICAgUElJX1RZUEUuQUFESEFBUixcbiAgICAgICAgICBjb25maWRlbmNlOiAgICB2VmFsaWQgPyAwLjk2IDogMC45MSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gSUZTQyAoMTEgY2hhcnMsIDV0aCBkaWdpdCAnMCcpXG4gICAgY29uc3QgaWZzY01hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGJbQS1aXXs0fTBbQS1aMC05XXs2fVxcYi9naSk7XG4gICAgZm9yIChjb25zdCBtIG9mIGlmc2NNYXRjaGVzKSB7XG4gICAgICBpZiAodmFsaWRhdGVJRlNDKG1bMF0pKSB7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuSUZTQyxcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjk0LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBJTkRJQU5fTU9CSUxFXG4gICAgY29uc3QgbW9iaWxlTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoLyg/Oig/OlxcKzkxfDApW1xcc1xcLV0/KT9bNi05XVxcZHs0fVtcXHNcXC1dP1xcZHs1fVxcYnwoPzpcXCs5MVtcXHNcXC1dPyk/WzYtOV1cXGR7OX1cXGJ8XFxiWzYtOV1cXGR7OX1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIG1vYmlsZU1hdGNoZXMpIHtcbiAgICAgIGlmICh2YWxpZGF0ZUluZGlhbk1vYmlsZShtWzBdKSkge1xuICAgICAgICBoaXRzLnB1c2goe1xuICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50cmltKCksXG4gICAgICAgICAgdHlwZTogICAgICAgUElJX1RZUEUuSU5ESUFOX01PQklMRSxcbiAgICAgICAgICBjb25maWRlbmNlOiAwLjkyLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA2LiBFTUFJTFxuICAgIGNvbnN0IGVtYWlsTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoL1thLXpBLVowLTkuXyUrXFwtXStAW2EtekEtWjAtOS5cXC1dK1xcLlthLXpBLVpdezIsfS9nKTtcbiAgICBmb3IgKGNvbnN0IG0gb2YgZW1haWxNYXRjaGVzKSB7XG4gICAgICBoaXRzLnB1c2goe1xuICAgICAgICBiYm94LCBzb3VyY2U6IFwib2NyX3JlZ2V4XCIsIG1hdGNoZWQ6IG1bMF0sXG4gICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkVNQUlMLFxuICAgICAgICBjb25maWRlbmNlOiAwLjk1LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gNy4gR2VuZXJpYyBQSE9ORSAoaWYgbm90IGFscmVhZHkgbWF0Y2hlZCBhcyBJTkRJQU5fTU9CSUxFKVxuICAgIGNvbnN0IHBob25lTWF0Y2hlcyA9IHRleHQubWF0Y2hBbGwoLyg/Oig/OlxcKzkxfDAwOTF8MClbXFxzXFwtXT8pP1s2LTldXFxkezl9fCg/OlxcK1xcZHsxLDN9W1xcc1xcLV0/KT9cXCg/XFxkezIsNH1cXCk/W1xcc1xcLV0/XFxkezMsNH1bXFxzXFwtXT9cXGR7NH0vZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIHBob25lTWF0Y2hlcykge1xuICAgICAgY29uc3QgZGlnaXRzID0gbVswXS5yZXBsYWNlKC9cXEQvZywgXCJcIik7XG4gICAgICBpZiAoZGlnaXRzLmxlbmd0aCA+PSAxMCkge1xuICAgICAgICBjb25zdCBhbHJlYWR5TW9iaWxlID0gaGl0cy5zb21lKGggPT4gaC50eXBlID09PSBQSUlfVFlQRS5JTkRJQU5fTU9CSUxFICYmIGgubWF0Y2hlZD8uaW5jbHVkZXMoZGlnaXRzLnNsaWNlKC0xMCkpKTtcbiAgICAgICAgaWYgKCFhbHJlYWR5TW9iaWxlKSB7XG4gICAgICAgICAgaGl0cy5wdXNoKHtcbiAgICAgICAgICAgIGJib3gsIHNvdXJjZTogXCJvY3JfcmVnZXhcIiwgbWF0Y2hlZDogbVswXS50cmltKCksXG4gICAgICAgICAgICB0eXBlOiAgICAgICBQSUlfVFlQRS5QSE9ORSxcbiAgICAgICAgICAgIGNvbmZpZGVuY2U6IDAuODIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA4LiBDQVJEIG51bWJlciB3aXRoIEx1aG4gdmVyaWZpY2F0aW9uXG4gICAgY29uc3QgY2FyZE1hdGNoZXMgPSB0ZXh0Lm1hdGNoQWxsKC9cXGIoPzpcXGR7NH1bXFxzXFwtXT8pezN9XFxkezR9XFxifFxcYlxcZHsxNSwxNn1cXGIvZyk7XG4gICAgZm9yIChjb25zdCBtIG9mIGNhcmRNYXRjaGVzKSB7XG4gICAgICBjb25zdCBkaWdpdHMgPSBtWzBdLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgIGlmIChkaWdpdHMubGVuZ3RoID49IDE1KSB7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gbHVobkNoZWNrKGRpZ2l0cyk7XG4gICAgICAgIGhpdHMucHVzaCh7XG4gICAgICAgICAgYmJveCwgc291cmNlOiBcIm9jcl9yZWdleFwiLCBtYXRjaGVkOiBtWzBdLCBsdWhuVmFsaWQ6IHZhbGlkLFxuICAgICAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkNBUkQsXG4gICAgICAgICAgY29uZmlkZW5jZTogdmFsaWQgPyAwLjkzIDogMC43MixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGhpdHM7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBQYXNzIDMgXHUyMDE0IEZhY2UgZGV0ZWN0aW9ucyAoZnJvbSBCbGF6ZUZhY2UpIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gcGFzc0ZhY2UoZmFjZURldGVjdGlvbnMpIHtcbiAgcmV0dXJuIChmYWNlRGV0ZWN0aW9ucyA/PyBbXSlcbiAgICAuZmlsdGVyKChmKSA9PiB7XG4gICAgICBjb25zdCBbeCwgeSwgdywgaF0gPSBmLmJib3ggfHwgW107XG4gICAgICBpZiAoIXcgfHwgIWggfHwgdyA8IDI0IHx8IGggPCAyNCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgYXNwZWN0ID0gdyAvIGg7XG4gICAgICBpZiAoYXNwZWN0IDwgMC41NSB8fCBhc3BlY3QgPiAxLjQwKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gKGYuY29uZmlkZW5jZSA/PyAwKSA+PSAwLjg1O1xuICAgIH0pXG4gICAgLm1hcCgoZikgPT4gKHtcbiAgICAgIGJib3g6ICAgICAgIGYuYmJveCxcbiAgICAgIHR5cGU6ICAgICAgIFBJSV9UWVBFLkZBQ0UsXG4gICAgICBjb25maWRlbmNlOiArTnVtYmVyKGYuY29uZmlkZW5jZSkudG9GaXhlZCg0KSxcbiAgICAgIHNvdXJjZTogICAgIFwidmlzaW9uXCIsXG4gICAgfSkpO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgUHVibGljIEFQSSBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbi8qKlxuICogZGV0ZWN0U2Vuc2l0aXZlUmVnaW9uc1xuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYXJhbXMuZG9tUmVnaW9ucyAgICAgXHUyMDE0IGZyb20gY29udGVudC5qcyBTQ0FOX0RPTSAocHJlLURQUi1zY2FsZWQpXG4gKiBAcGFyYW0ge0FycmF5fSAgcGFyYW1zLm9jckRldGVjdGlvbnMgIFx1MjAxNCBmcm9tIEZsb3JlbmNlLTIgYW5hbHl6ZUltYWdlKClcbiAqIEBwYXJhbSB7QXJyYXl9ICBwYXJhbXMuZmFjZURldGVjdGlvbnMgXHUyMDE0IGZyb20gZmFjZS5qcyBkZXRlY3RGYWNlcygpXG4gKiBAcmV0dXJucyB7U2Vuc2l0aXZlUmVnaW9uW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlY3RTZW5zaXRpdmVSZWdpb25zKHsgZG9tUmVnaW9ucywgb2NyRGV0ZWN0aW9ucywgZmFjZURldGVjdGlvbnMgfSkge1xuICBjb25zb2xlLmxvZyhcIltQSUldID09PSBkZXRlY3RTZW5zaXRpdmVSZWdpb25zIElOVk9LRUQgPT09XCIpO1xuICBjb25zb2xlLmxvZyhgW1BJSV0gUmF3IElucHV0cyAtPiBkb21SZWdpb25zOiAkeyhkb21SZWdpb25zID8/IFtdKS5sZW5ndGh9LCBvY3JEZXRlY3Rpb25zOiAkeyhvY3JEZXRlY3Rpb25zID8/IFtdKS5sZW5ndGh9LCBmYWNlRGV0ZWN0aW9uczogJHsoZmFjZURldGVjdGlvbnMgPz8gW10pLmxlbmd0aH1gKTtcblxuICBjb25zdCBkb21IaXRzICA9IHBhc3NET00oZG9tUmVnaW9ucyk7XG4gIGNvbnN0IG9jckhpdHMgID0gcGFzc09DUihvY3JEZXRlY3Rpb25zKTtcbiAgY29uc3QgZmFjZUhpdHMgPSBwYXNzRmFjZShmYWNlRGV0ZWN0aW9ucyk7XG5cbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMTogRE9NIFBhc3NdIFJhdyBvdXRwdXQgKCR7ZG9tSGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBkb21IaXRzKTtcbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMjogT0NSIFBhc3NdIFJhdyBvdXRwdXQgKCR7b2NySGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBvY3JIaXRzKTtcbiAgY29uc29sZS5sb2coYFtQSUldIFtTb3VyY2UgMzogVmlzaW9uL0ZhY2UgUGFzc10gUmF3IG91dHB1dCAoJHtmYWNlSGl0cy5sZW5ndGh9IGl0ZW1zKTpgLCBmYWNlSGl0cyk7XG5cbiAgY29uc3QgYWxsID0gWy4uLmRvbUhpdHMsIC4uLm9jckhpdHMsIC4uLmZhY2VIaXRzXTtcbiAgY29uc29sZS5sb2coYFtQSUldIENvbWJpbmVkIHVubWVyZ2VkIGNhbmRpZGF0ZXMgKCR7YWxsLmxlbmd0aH0gdG90YWwgZnJvbSBET00gKyBPQ1IgKyBWaXNpb24pOmAsIGFsbCk7XG5cbiAgY29uc3QgcmVzdWx0ID0gbWVyZ2VSZWdpb25zKGFsbCk7XG5cbiAgY29uc29sZS5sb2coXG4gICAgYFtQSUldIEZpbmFsIG1lcmdlZCBzZW5zaXRpdmUgcmVnaW9uKHMpOiAke3Jlc3VsdC5sZW5ndGh9YCArXG4gICAgYCAoZG9tOiR7ZG9tSGl0cy5sZW5ndGh9LCBvY3I6JHtvY3JIaXRzLmxlbmd0aH0sIGZhY2U6JHtmYWNlSGl0cy5sZW5ndGh9KVxcbmAgK1xuICAgIEpTT04uc3RyaW5naWZ5KHJlc3VsdCwgbnVsbCwgMilcbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4iLCAiLyoqXG4gKiBtYXNrRW5naW5lLmpzIFx1MjAxNCBPbi1QYWdlIFJlYWwtVGltZSBTZW5zaXRpdmUgRGF0YSBNYXNraW5nIEVuZ2luZSBmb3IgU2FraGFcbiAqXG4gKiBSdW5zIGxvY2FsbHkgb24gYW55IHdlYnBhZ2UgKHplcm8gc2VydmVyIHRyYW5zbWlzc2lvbikuXG4gKiBTY2FucyB0ZXh0IG5vZGVzLCBpbnB1dCBmaWVsZHMsIGFuZCB0YWJsZXMgdG8gbWFzazpcbiAqIC0gQWFkaGFhciAoVmVyaG9lZmYtdmFsaWRhdGVkIDEyLWRpZ2l0IG51bWJlcnMpXG4gKiAtIFBBTiAoMTAtY2hhciB1cHBlcmNhc2Ugc3RydWN0dXJhbCBtYXRjaCBbQS1aXXs1fVswLTldezR9W0EtWl0pXG4gKiAtIENyZWRpdC9EZWJpdCBDYXJkIE51bWJlcnMgKDEzLTE5IGRpZ2l0cywgTHVobiB2YWxpZGF0ZWQpXG4gKiAtIElGU0MgQ29kZXMgKFtBLVpdezR9MFtBLVowLTldezZ9KVxuICogLSBQaG9uZSBudW1iZXJzIChJbmRpYW4gbW9iaWxlIG51bWJlcnMgNi05eHh4eHh4eHgpXG4gKiAtIFVQSSBJRHMgKHVzZXJAYmFuayBmb3JtYXQpXG4gKlxuICogVGFwLXRvLXJldmVhbCBvdmVybGF5OiBDU1MgYmx1ciBvdmVybGF5IHRoYXQgcmV2ZWFscyBvbiBjbGljay5cbiAqIFN0cmljdGx5IHByZXNlcnZlcyBuYXRpdmUgZm9ybSBzdWJtaXNzaW9uIHZhbHVlIChuZXZlciBjbGVhcnMgb3IgYWx0ZXJzIGlucHV0LnZhbHVlKS5cbiAqL1xuXG5pbXBvcnQgeyB2ZXJob2VmZkNoZWNrLCB2YWxpZGF0ZVBBTiwgdmFsaWRhdGVJRlNDLCB2YWxpZGF0ZUluZGlhbk1vYmlsZSB9IGZyb20gXCIuL3BpaS5qc1wiO1xuaW1wb3J0IHsgdCB9IGZyb20gXCIuL2kxOG4uanNcIjtcblxuLy8gQWNjdXJhdGUgTHVobiBjaGVjayBtYXRjaGluZyBwaWkuanNcbmZ1bmN0aW9uIGx1aG5DaGVjayhyYXcpIHtcbiAgY29uc3QgZGlnaXRzID0gcmF3LnJlcGxhY2UoL1xcRC9nLCBcIlwiKS5zcGxpdChcIlwiKS5yZXZlcnNlKCkubWFwKE51bWJlcik7XG4gIGlmIChkaWdpdHMubGVuZ3RoIDwgMTMgfHwgZGlnaXRzLmxlbmd0aCA+IDE5KSByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN1bSA9IGRpZ2l0cy5yZWR1Y2UoKGFjYywgZCwgaSkgPT4ge1xuICAgIGlmIChpICUgMiA9PT0gMSkgeyBkICo9IDI7IGlmIChkID4gOSkgZCAtPSA5OyB9XG4gICAgcmV0dXJuIGFjYyArIGQ7XG4gIH0sIDApO1xuICByZXR1cm4gc3VtICUgMTAgPT09IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZVVQSShyYXcpIHtcbiAgaWYgKHR5cGVvZiByYXcgIT09IFwic3RyaW5nXCIpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIC9eW2EtekEtWjAtOS5cXC1fXXsyLDI1Nn1AW2EtekEtWl17Miw2NH0kLy50ZXN0KHJhdy50cmltKCkpO1xufVxuXG4vKipcbiAqIFNjYW4gcmF3IHN0cmluZyBhbmQgaWRlbnRpZnkgYWxsIHNlbnNpdGl2ZSBzcGFucyB3aXRoIHRoZWlyIHJlcGxhY2VtZW50IG1hc2tcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aWZ5U2Vuc2l0aXZlU3BhbnModGV4dCkge1xuICBpZiAoIXRleHQgfHwgdHlwZW9mIHRleHQgIT09IFwic3RyaW5nXCIpIHJldHVybiBbXTtcbiAgY29uc3Qgc3BhbnMgPSBbXTtcblxuICAvLyAxLiBBYWRoYWFyICgxMiBkaWdpdHMsIG9wdGlvbmFsIHNwYWNlcy9oeXBoZW5zKVxuICBjb25zdCBhYWRoYWFyUmVnZXggPSAvXFxiKFsyLTldXFxkezN9W1xcc1xcLV0/XFxkezR9W1xcc1xcLV0/XFxkezR9KVxcYi9nO1xuICBsZXQgbTtcbiAgd2hpbGUgKChtID0gYWFkaGFhclJlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBjb25zdCBjbGVhbiA9IHJhdy5yZXBsYWNlKC9bXFxzXFwtXS9nLCBcIlwiKTtcbiAgICBpZiAoY2xlYW4ubGVuZ3RoID09PSAxMiAmJiB2ZXJob2VmZkNoZWNrKGNsZWFuKSkge1xuICAgICAgc3BhbnMucHVzaCh7XG4gICAgICAgIHR5cGU6IFwiQUFESEFBUlwiLFxuICAgICAgICByYXcsXG4gICAgICAgIG1hc2tlZDogXCJYWFhYIFhYWFggXCIgKyBjbGVhbi5zbGljZSg4KSxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIDIuIENhcmQgbnVtYmVycyAoMTMtMTkgZGlnaXRzLCBMdWhuIHZhbGlkYXRlZClcbiAgY29uc3QgY2FyZFJlZ2V4ID0gL1xcYihcXGR7NH1bXFxzXFwtXT9cXGR7NH1bXFxzXFwtXT9cXGR7NH1bXFxzXFwtXT9cXGR7MSw3fSlcXGIvZztcbiAgd2hpbGUgKChtID0gY2FyZFJlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBjb25zdCBjbGVhbiA9IHJhdy5yZXBsYWNlKC9bXFxzXFwtXS9nLCBcIlwiKTtcbiAgICBpZiAobHVobkNoZWNrKGNsZWFuKSkge1xuICAgICAgLy8gYXZvaWQgcmUtbWFza2luZyBhbiBhbHJlYWR5IG1hdGNoZWQgQWFkaGFhclxuICAgICAgY29uc3Qgb3ZlcmxhcHMgPSBzcGFucy5zb21lKHMgPT4gcy5zdGFydCA8PSBtLmluZGV4ICYmIHMuZW5kID49IG0uaW5kZXggKyByYXcubGVuZ3RoKTtcbiAgICAgIGlmICghb3ZlcmxhcHMpIHtcbiAgICAgICAgc3BhbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogXCJDQVJEXCIsXG4gICAgICAgICAgcmF3LFxuICAgICAgICAgIG1hc2tlZDogXCJcdTIwMjJcdTIwMjJcdTIwMjJcdTIwMjIgXHUyMDIyXHUyMDIyXHUyMDIyXHUyMDIyIFx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMiBcIiArIGNsZWFuLnNsaWNlKC00KSxcbiAgICAgICAgICBzdGFydDogbS5pbmRleCxcbiAgICAgICAgICBlbmQ6IG0uaW5kZXggKyByYXcubGVuZ3RoXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIDMuIFBBTiAoNSBsZXR0ZXJzLCA0IGRpZ2l0cywgMSBsZXR0ZXIpXG4gIGNvbnN0IHBhblJlZ2V4ID0gL1xcYihbQS1aXXs1fVswLTldezR9W0EtWl0pXFxiL2dpO1xuICB3aGlsZSAoKG0gPSBwYW5SZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJhdyA9IG1bMV07XG4gICAgaWYgKHZhbGlkYXRlUEFOKHJhdykpIHtcbiAgICAgIHNwYW5zLnB1c2goe1xuICAgICAgICB0eXBlOiBcIlBBTlwiLFxuICAgICAgICByYXcsXG4gICAgICAgIG1hc2tlZDogcmF3LnNsaWNlKDAsIDIpICsgXCJYWFhYWFwiICsgcmF3LnNsaWNlKC0xKSxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIDQuIElGU0MgKFtBLVpdezR9MFtBLVowLTldezZ9KVxuICBjb25zdCBpZnNjUmVnZXggPSAvXFxiKFtBLVpdezR9MFtBLVowLTldezZ9KVxcYi9naTtcbiAgd2hpbGUgKChtID0gaWZzY1JlZ2V4LmV4ZWModGV4dCkpICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmF3ID0gbVsxXTtcbiAgICBpZiAodmFsaWRhdGVJRlNDKHJhdykpIHtcbiAgICAgIHNwYW5zLnB1c2goe1xuICAgICAgICB0eXBlOiBcIklGU0NcIixcbiAgICAgICAgcmF3LFxuICAgICAgICBtYXNrZWQ6IHJhdy5zbGljZSgwLCA0KSArIFwiMFx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlx1MjAyMlwiLFxuICAgICAgICBzdGFydDogbS5pbmRleCxcbiAgICAgICAgZW5kOiBtLmluZGV4ICsgcmF3Lmxlbmd0aFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gNS4gVVBJIElEXG4gIGNvbnN0IHVwaVJlZ2V4ID0gL1xcYihbYS16QS1aMC05LlxcLV9dezIsNjR9QFthLXpBLVpdezIsMzJ9KVxcYi9nO1xuICB3aGlsZSAoKG0gPSB1cGlSZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJhdyA9IG1bMV07XG4gICAgLy8gSWdub3JlIHN0YW5kYXJkIGVtYWlsIGRvbWFpbnNcbiAgICBpZiAoIXJhdy5lbmRzV2l0aChcIkBnbWFpbC5jb21cIikgJiYgIXJhdy5lbmRzV2l0aChcIkB5YWhvby5jb21cIikgJiYgIXJhdy5lbmRzV2l0aChcIkBvdXRsb29rLmNvbVwiKSAmJiAhcmF3LmVuZHNXaXRoKFwiQGhvdG1haWwuY29tXCIpKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IHJhdy5zcGxpdChcIkBcIik7XG4gICAgICBjb25zdCBtYXNrZWRVc2VyID0gcGFydHNbMF0ubGVuZ3RoID4gMiA/IHBhcnRzWzBdLnNsaWNlKDAsIDIpICsgXCJcdTIwMjJcdTIwMjJcdTIwMjJcIiA6IFwiXHUyMDIyXHUyMDIyXCI7XG4gICAgICBzcGFucy5wdXNoKHtcbiAgICAgICAgdHlwZTogXCJVUElfSURcIixcbiAgICAgICAgcmF3LFxuICAgICAgICBtYXNrZWQ6IGAke21hc2tlZFVzZXJ9QCR7cGFydHNbMV19YCxcbiAgICAgICAgc3RhcnQ6IG0uaW5kZXgsXG4gICAgICAgIGVuZDogbS5pbmRleCArIHJhdy5sZW5ndGhcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNvcnQgYnkgc3RhcnRpbmcgaW5kZXhcbiAgcmV0dXJuIHNwYW5zLnNvcnQoKGEsIGIpID0+IGEuc3RhcnQgLSBiLnN0YXJ0KTtcbn1cblxuLyoqXG4gKiBNYXNrIHRleHQgY29udGVudCwgcmV0dXJuaW5nIHNhbml0aXplZCBtYXNrZWQgc3RyaW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXNrU2Vuc2l0aXZlVGV4dCh0ZXh0KSB7XG4gIGlmICghdGV4dCkgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IHNwYW5zID0gaWRlbnRpZnlTZW5zaXRpdmVTcGFucyh0ZXh0KTtcbiAgaWYgKHNwYW5zLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRleHQ7XG5cbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGxldCBsYXN0SWR4ID0gMDtcbiAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgcmVzdWx0ICs9IHRleHQuc2xpY2UobGFzdElkeCwgc3Bhbi5zdGFydCkgKyBzcGFuLm1hc2tlZDtcbiAgICBsYXN0SWR4ID0gc3Bhbi5lbmQ7XG4gIH1cbiAgcmVzdWx0ICs9IHRleHQuc2xpY2UobGFzdElkeCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEdlbmVyaWMgU2Vuc2l0aXZlIEF0dHJpYnV0ZSBIZXVyaXN0aWNzXG5leHBvcnQgY29uc3QgR0VORVJJQ19GSUVMRF9QQVRURVJOUyA9IHtcbiAgQUFESEFBUjogL2FhZGhhYXJ8YWFkaGFyfHVpZGFpL2ksXG4gIFBBTjogL3BhbltfXFwtXFxzXT8obnVtYmVyfG5vfGNhcmQpPy9pLFxuICBDQVJEOiAvY2FyZFtfXFwtXFxzXT8obnVtYmVyfG5vKT98Y3JlZGl0fGRlYml0fGN2dnxjdmN8ZXhwaXJ5fGV4cC9pLFxuICBCQU5LX0FDQ09VTlQ6IC9iYW5rW19cXC1cXHNdP2FjY3xhY2NvdW50W19cXC1cXHNdP25vfGFjY291bnRbX1xcLVxcc10/bnVtYmVyL2ksXG4gIElGU0M6IC9pZnNjL2ksXG4gIE9UUF9QSU46IC9vdHB8b25lW19cXC1cXHNdP3RpbWVbX1xcLVxcc10/cGFzc3dvcmR8dXBpW19cXC1cXHNdP3BpbnxhdG1bX1xcLVxcc10/cGlufG1waW4vaSxcbiAgUEhPTkU6IC9waG9uZXxtb2JpbGV8dGVsfGNlbGwvaSxcbiAgVVBJOiAvdXBpW19cXC1cXHNdPyhpZHx2cGEpPy9pLFxuICBQQVNTV09SRDogL3Bhc3N3b3JkfHBhc3Njb2RlL2lcbn07XG5cbmV4cG9ydCBjb25zdCBTRU5TSVRJVkVfRklFTERfUkUgPSAvYWFkaGFhcnxhYWRoYXJ8cGFuW19cXC1cXHNdPyhudW1iZXJ8bm98Y2FyZCk/fGJhbmtbX1xcLVxcc10/YWNjfGFjY291bnRbX1xcLVxcc10/bm98YWNjb3VudFtfXFwtXFxzXT9udW1iZXJ8aWZzY3xjYXJkW19cXC1cXHNdPyhudW1iZXJ8bm8pP3xjcmVkaXR8ZGViaXR8Y3Z2fGN2Y3xvdHB8cGFzc3BvcnR8dm90ZXJ8ZHJpdmluZ3xsaWNlbmNlfGxpY2Vuc2V8c3NufHVwaXxtcGluL2k7XG5cbi8qKlxuICogR2VuZXJpYyBGaWVsZCBDbGFzc2lmaWVyXG4gKiBDaGVja3MgbGFiZWwsIG5hbWUsIGlkLCBwbGFjZWhvbGRlciwgYXV0b2NvbXBsZXRlLCBhcmlhIGF0dHJpYnV0ZXMsIG5lYXJieSB0ZXh0LCBhbmQgdmFsdWVzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2lmeUdlbmVyaWNGaWVsZChmaWVsZEluZm8pIHtcbiAgY29uc3Qge1xuICAgIG5hbWUgPSBcIlwiLFxuICAgIGlkID0gXCJcIixcbiAgICBwbGFjZWhvbGRlciA9IFwiXCIsXG4gICAgYXV0b2NvbXBsZXRlID0gXCJcIixcbiAgICBhcmlhTGFiZWwgPSBcIlwiLFxuICAgIHR5cGUgPSBcIlwiLFxuICAgIGxhYmVsID0gXCJcIixcbiAgICBuZWFyYnlUZXh0ID0gXCJcIixcbiAgICB2YWx1ZSA9IFwiXCJcbiAgfSA9IGZpZWxkSW5mbztcblxuICBjb25zdCBjb21iaW5lZEV2aWRlbmNlID0gYCR7bGFiZWx9ICR7YXJpYUxhYmVsfSAke25hbWV9ICR7aWR9ICR7cGxhY2Vob2xkZXJ9ICR7YXV0b2NvbXBsZXRlfSAke25lYXJieVRleHR9YC50cmltKCk7XG4gIGNvbnN0IGNsZWFuVmFsID0gKHZhbHVlIHx8IFwiXCIpLnRyaW0oKTtcblxuICAvLyAxLiBDaGVjayBWYWx1ZSBWYWxpZGF0b3JzIEZpcnN0IChoaWdoZXN0IGNvbmZpZGVuY2UgaWYgdmFsdWUgcHJlc2VudClcbiAgaWYgKGNsZWFuVmFsKSB7XG4gICAgY29uc3QgcmF3VmFsID0gY2xlYW5WYWwucmVwbGFjZSgvW1xcc1xcLV0vZywgXCJcIik7XG4gICAgaWYgKHJhd1ZhbC5sZW5ndGggPT09IDEyICYmIC9eWzItOV1cXGR7MTF9JC8udGVzdChyYXdWYWwpICYmIHZlcmhvZWZmQ2hlY2socmF3VmFsKSkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJBQURIQUFSXCIsIGNvbmZpZGVuY2U6IDAuOTksIGV2aWRlbmNlOiBcIlZhbHVlIHZlcmlmaWVkIGJ5IFZlcmhvZWZmIGNoZWNrc3VtIGFsZ29yaXRobVwiIH07XG4gICAgfVxuICAgIGlmICh2YWxpZGF0ZVBBTihjbGVhblZhbCkpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiUEFOXCIsIGNvbmZpZGVuY2U6IDAuOTgsIGV2aWRlbmNlOiBcIlZhbHVlIG1hdGNoZXMgc3RhbmRhcmQgSW5jb21lIFRheCBQQU4gZm9ybWF0XCIgfTtcbiAgICB9XG4gICAgaWYgKGx1aG5DaGVjayhyYXdWYWwpKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIkNBUkRcIiwgY29uZmlkZW5jZTogMC45OCwgZXZpZGVuY2U6IFwiVmFsdWUgdmVyaWZpZWQgYnkgTHVobiBjaGVja3N1bSBhbGdvcml0aG1cIiB9O1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGVJRlNDKGNsZWFuVmFsKSkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJJRlNDXCIsIGNvbmZpZGVuY2U6IDAuOTYsIGV2aWRlbmNlOiBcIlZhbHVlIG1hdGNoZXMgUkJJIElGU0MgY29kZSBzdHJ1Y3R1cmVcIiB9O1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGVVUEkoY2xlYW5WYWwpKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIlVQSVwiLCBjb25maWRlbmNlOiAwLjk1LCBldmlkZW5jZTogXCJWYWx1ZSBtYXRjaGVzIFVQSSBWUEEgcGF0dGVyblwiIH07XG4gICAgfVxuICAgIGlmICh2YWxpZGF0ZUluZGlhbk1vYmlsZShjbGVhblZhbCkpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiUEhPTkVcIiwgY29uZmlkZW5jZTogMC45MiwgZXZpZGVuY2U6IFwiVmFsdWUgbWF0Y2hlcyBJbmRpYW4gbW9iaWxlIHBob25lIGZvcm1hdFwiIH07XG4gICAgfVxuICB9XG5cbiAgLy8gMi4gQXR0cmlidXRlIGFuZCBDb250ZXh0dWFsIEV2aWRlbmNlXG4gIGlmICh0eXBlID09PSBcInBhc3N3b3JkXCIpIHtcbiAgICBpZiAoR0VORVJJQ19GSUVMRF9QQVRURVJOUy5PVFBfUElOLnRlc3QoY29tYmluZWRFdmlkZW5jZSkpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwiT1RQX1BJTlwiLCBjb25maWRlbmNlOiAwLjk1LCBldmlkZW5jZTogYFBJTi9PVFAgcmVxdWVzdGVkIGluIHBhc3N3b3JkIGlucHV0OiBcIiR7Y29tYmluZWRFdmlkZW5jZS5zbGljZSgwLCA0MCl9XCJgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHR5cGU6IFwiUEFTU1dPUkRcIiwgY29uZmlkZW5jZTogMC45MiwgZXZpZGVuY2U6IGBQYXNzd29yZCB0eXBlIGZpZWxkOiBcIiR7Y29tYmluZWRFdmlkZW5jZS5zbGljZSgwLCA0MCl9XCJgIH07XG4gIH1cblxuICBmb3IgKGNvbnN0IFtmaWVsZFR5cGUsIHBhdHRlcm5dIG9mIE9iamVjdC5lbnRyaWVzKEdFTkVSSUNfRklFTERfUEFUVEVSTlMpKSB7XG4gICAgaWYgKHBhdHRlcm4udGVzdChjb21iaW5lZEV2aWRlbmNlKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogZmllbGRUeXBlLFxuICAgICAgICBjb25maWRlbmNlOiAwLjg4LFxuICAgICAgICBldmlkZW5jZTogYE1hdGNoZWQga2V5d29yZCBwYXR0ZXJuIGluIGF0dHJpYnV0ZXM6IFwiJHtjb21iaW5lZEV2aWRlbmNlLnNsaWNlKDAsIDQwKX1cImBcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIlVOQ0xBU1NJRklFRFwiLFxuICAgIGNvbmZpZGVuY2U6IDAuMjAsXG4gICAgZXZpZGVuY2U6IGNvbWJpbmVkRXZpZGVuY2UgPyBgU3RhbmRhcmQgaW5wdXQgZWxlbWVudDogXCIke2NvbWJpbmVkRXZpZGVuY2Uuc2xpY2UoMCwgMzApfVwiYCA6IFwiU3RhbmRhcmQgaW5wdXQgZWxlbWVudCB3aXRob3V0IGV4cGxpY2l0IHNlbnNpdGl2ZSBhdHRyaWJ1dGVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vuc2l0aXZlRmllbGRCeUF0dHIoaW5wdXQpIHtcbiAgY29uc3QgYXR0cnMgPSBbXG4gICAgaW5wdXQubmFtZSwgXG4gICAgaW5wdXQuaWQsIFxuICAgIGlucHV0LnBsYWNlaG9sZGVyLCBcbiAgICBpbnB1dC5nZXRBdHRyaWJ1dGUoXCJhdXRvY29tcGxldGVcIiksIFxuICAgIGlucHV0LmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiksXG4gICAgaW5wdXQuZ2V0QXR0cmlidXRlKFwiYXJpYS1sYWJlbGxlZGJ5XCIpXG4gIF07XG4gIHJldHVybiBhdHRycy5zb21lKGEgPT4gYSAmJiBTRU5TSVRJVkVfRklFTERfUkUudGVzdChhKSk7XG59XG5cbi8qKlxuICogQXBwbHkgbGl2ZSBET00gTWFza2luZyBPdmVybGF5IG9uIGFueSB3ZWJwYWdlIChDb250ZW50IHNjcmlwdCBjb250ZXh0KVxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYWdlTWFza2luZyhkb2N1bWVudFJvb3QgPSBkb2N1bWVudCwgbGFuZyA9IFwiZW5cIikge1xuICBpZiAoIWRvY3VtZW50Um9vdCB8fCAhZG9jdW1lbnRSb290LmJvZHkpIHJldHVybiB7IG1hc2tlZElucHV0czogMCwgbWFza2VkVGV4dE5vZGVzOiAwIH07XG5cbiAgbGV0IG1hc2tlZElucHV0cyA9IDA7XG4gIGxldCBtYXNrZWRUZXh0Tm9kZXMgPSAwO1xuXG4gIC8vIDEuIE1hc2sgSW5wdXQgRmllbGRzIChWaXN1YWwgb3ZlcmxheSBvbmx5IC0gRE9FUyBOT1QgTVVUQVRFIGlucHV0LnZhbHVlKVxuICBjb25zdCBpbnB1dHMgPSBkb2N1bWVudFJvb3QucXVlcnlTZWxlY3RvckFsbChcImlucHV0Om5vdChbdHlwZT0naGlkZGVuJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nYnV0dG9uJ10pXCIpO1xuICBpbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBpZiAoaW5wdXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1zYWtoYS1tb25pdG9yZWRcIikpIHJldHVybjtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNha2hhLW1vbml0b3JlZFwiLCBcInRydWVcIik7XG5cbiAgICBjb25zdCBjaGVja0FuZE1hc2tJbnB1dCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlO1xuICAgICAgY29uc3QgYWN0aXZlRWwgPSBkb2N1bWVudFJvb3QuYWN0aXZlRWxlbWVudCB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6IG51bGwpO1xuICAgICAgaWYgKGFjdGl2ZUVsID09PSBpbnB1dCkgcmV0dXJuOyAvLyBuZXZlciBibHVyIGEgZm9jdXNlZCBmaWVsZFxuXG4gICAgICBjb25zdCBzZW5zaXRpdmVCeVZhbHVlID0gdmFsICYmIGlkZW50aWZ5U2Vuc2l0aXZlU3BhbnModmFsKS5sZW5ndGggPiAwO1xuICAgICAgY29uc3Qgc2Vuc2l0aXZlQnlBdHRyID0gaXNTZW5zaXRpdmVGaWVsZEJ5QXR0cihpbnB1dCk7XG5cbiAgICAgIGlmIChzZW5zaXRpdmVCeVZhbHVlIHx8IHNlbnNpdGl2ZUJ5QXR0cikge1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwic2FraGEtbWFza2VkLWlucHV0XCIpO1xuICAgICAgICBpbnB1dC50aXRsZSA9IHQoXCJtYXNrZWRfYmFkZ2VcIiwgbGFuZyk7XG4gICAgICAgIG1hc2tlZElucHV0cysrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcInNha2hhLW1hc2tlZC1pbnB1dFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJzYWtoYS1tYXNrZWQtaW5wdXRcIik7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICAgICAgY2hlY2tBbmRNYXNrSW5wdXQoKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aXZlRWwgPSBkb2N1bWVudFJvb3QuYWN0aXZlRWxlbWVudCB8fCAodHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA6IG51bGwpO1xuICAgICAgaWYgKGFjdGl2ZUVsICE9PSBpbnB1dCkgY2hlY2tBbmRNYXNrSW5wdXQoKTtcbiAgICB9KTtcblxuICAgIGNoZWNrQW5kTWFza0lucHV0KCk7XG4gIH0pO1xuXG4gIC8vIDIuIE1hc2sgU3RhdGljIFRleHQgaW4gRE9NIEVsZW1lbnRzICh0YWJsZXMsIHBhcmFncmFwaHMsIHNwYW5zKVxuICBjb25zdCBTSE9XX1RFWFQgPSAodHlwZW9mIE5vZGVGaWx0ZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgTm9kZUZpbHRlci5TSE9XX1RFWFQpID8gTm9kZUZpbHRlci5TSE9XX1RFWFQgOiA0O1xuICBjb25zdCBGSUxURVJfQUNDRVBUID0gKHR5cGVvZiBOb2RlRmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmIE5vZGVGaWx0ZXIuRklMVEVSX0FDQ0VQVCkgPyBOb2RlRmlsdGVyLkZJTFRFUl9BQ0NFUFQgOiAxO1xuICBjb25zdCBGSUxURVJfUkVKRUNUID0gKHR5cGVvZiBOb2RlRmlsdGVyICE9PSBcInVuZGVmaW5lZFwiICYmIE5vZGVGaWx0ZXIuRklMVEVSX1JFSkVDVCkgPyBOb2RlRmlsdGVyLkZJTFRFUl9SRUpFQ1QgOiAyO1xuXG4gIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50Um9vdC5jcmVhdGVUcmVlV2Fsa2VyKFxuICAgIGRvY3VtZW50Um9vdC5ib2R5LFxuICAgIFNIT1dfVEVYVCxcbiAgICB7XG4gICAgICBhY2NlcHROb2RlKG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlLm5vZGVWYWx1ZSB8fCAhbm9kZS5ub2RlVmFsdWUudHJpbSgpKSByZXR1cm4gRklMVEVSX1JFSkVDVDtcbiAgICAgICAgY29uc3QgcGFyZW50VGFnID0gbm9kZS5wYXJlbnRFbGVtZW50Py50YWdOYW1lPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoW1wic2NyaXB0XCIsIFwic3R5bGVcIiwgXCJub3NjcmlwdFwiLCBcInRleHRhcmVhXCIsIFwiaW5wdXRcIl0uaW5jbHVkZXMocGFyZW50VGFnKSkge1xuICAgICAgICAgIHJldHVybiBGSUxURVJfUkVKRUNUO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdD8uY29udGFpbnMoXCJzYWtoYS10YXAtbWFza1wiKSkge1xuICAgICAgICAgIHJldHVybiBGSUxURVJfUkVKRUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGSUxURVJfQUNDRVBUO1xuICAgICAgfVxuICAgIH1cbiAgKTtcblxuICBjb25zdCB0ZXh0Tm9kZXNUb01hc2sgPSBbXTtcbiAgd2hpbGUgKHdhbGtlci5uZXh0Tm9kZSgpKSB7XG4gICAgY29uc3Qgbm9kZSA9IHdhbGtlci5jdXJyZW50Tm9kZTtcbiAgICBjb25zdCBzcGFucyA9IGlkZW50aWZ5U2Vuc2l0aXZlU3BhbnMobm9kZS5ub2RlVmFsdWUpO1xuICAgIGlmIChzcGFucy5sZW5ndGggPiAwKSB7XG4gICAgICB0ZXh0Tm9kZXNUb01hc2sucHVzaCh7IG5vZGUsIHNwYW5zIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoY29uc3QgaXRlbSBvZiB0ZXh0Tm9kZXNUb01hc2spIHtcbiAgICBjb25zdCB7IG5vZGUsIHNwYW5zIH0gPSBpdGVtO1xuICAgIGNvbnN0IHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAoIXBhcmVudCkgY29udGludWU7XG5cbiAgICBjb25zdCBmdWxsVGV4dCA9IG5vZGUubm9kZVZhbHVlO1xuICAgIGNvbnN0IGZyYWcgPSBkb2N1bWVudFJvb3QuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGxldCBjdXIgPSAwO1xuXG4gICAgZm9yIChjb25zdCBzcGFuIG9mIHNwYW5zKSB7XG4gICAgICBpZiAoc3Bhbi5zdGFydCA+IGN1cikge1xuICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGRvY3VtZW50Um9vdC5jcmVhdGVUZXh0Tm9kZShmdWxsVGV4dC5zbGljZShjdXIsIHNwYW4uc3RhcnQpKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBUYXAtdG8tUmV2ZWFsIGlubGluZSBiYWRnZSAoS2V5Ym9hcmQgYWNjZXNzaWJsZSlcbiAgICAgIGNvbnN0IG1hc2tTcGFuID0gZG9jdW1lbnRSb290LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbWFza1NwYW4uY2xhc3NOYW1lID0gXCJzYWtoYS10YXAtbWFzayBzYWtoYS1ibHVycmVkXCI7XG4gICAgICBtYXNrU3Bhbi50YWJJbmRleCA9IDA7IC8vIEFjY2Vzc2libGUgdmlhIGtleWJvYXJkIFRhYlxuICAgICAgbWFza1NwYW4udGV4dENvbnRlbnQgPSBzcGFuLnJhdztcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtcmF3LXZhbHVlXCIsIHNwYW4ucmF3KTtcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcImRhdGEtbWFza2VkLXZhbHVlXCIsIHNwYW4ubWFza2VkKTtcbiAgICAgIG1hc2tTcGFuLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJidXR0b25cIik7XG4gICAgICBtYXNrU3Bhbi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIGAke3QoXCJtYXNrZWRfYmFkZ2VcIiwgbGFuZyl9IFx1MjAxNCAke3QoXCJ0YXBfdG9fcmV2ZWFsXCIsIGxhbmcpfWApO1xuICAgICAgbWFza1NwYW4uc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgYCR7dChcIm1hc2tlZF9iYWRnZVwiLCBsYW5nKX0gXHUyMDE0ICR7dChcInRhcF90b19yZXZlYWxcIiwgbGFuZyl9YCk7XG5cbiAgICAgIGNvbnN0IHRvZ2dsZVJldmVhbCA9IChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbWFza1NwYW4uY2xhc3NMaXN0LnRvZ2dsZShcInNha2hhLWJsdXJyZWRcIik7XG4gICAgICAgIG1hc2tTcGFuLmNsYXNzTGlzdC50b2dnbGUoXCJzYWtoYS1yZXZlYWxlZFwiKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIE1vdXNlIHRhcFxuICAgICAgbWFza1NwYW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZVJldmVhbCk7XG5cbiAgICAgIC8vIEtleWJvYXJkIHRvZ2dsZSAoRW50ZXIgb3IgU3BhY2UpXG4gICAgICBtYXNrU3Bhbi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiB8fCBlLmtleSA9PT0gXCIgXCIpIHtcbiAgICAgICAgICB0b2dnbGVSZXZlYWwoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmcmFnLmFwcGVuZENoaWxkKG1hc2tTcGFuKTtcbiAgICAgIGN1ciA9IHNwYW4uZW5kO1xuICAgICAgbWFza2VkVGV4dE5vZGVzKys7XG4gICAgfVxuXG4gICAgaWYgKGN1ciA8IGZ1bGxUZXh0Lmxlbmd0aCkge1xuICAgICAgZnJhZy5hcHBlbmRDaGlsZChkb2N1bWVudFJvb3QuY3JlYXRlVGV4dE5vZGUoZnVsbFRleHQuc2xpY2UoY3VyKSkpO1xuICAgIH1cblxuICAgIHBhcmVudC5yZXBsYWNlQ2hpbGQoZnJhZywgbm9kZSk7XG4gIH1cblxuICByZXR1cm4geyBtYXNrZWRJbnB1dHMsIG1hc2tlZFRleHROb2RlcyB9O1xufVxuIiwgIi8qKlxuICogZXZlbnRMb2dnZXIuanMgXHUyMDE0IExvY2FsLU9ubHkgUGlsb3QgRXZlbnQgTG9nZ2VyIGZvciBTYWtoYVxuICpcbiAqIFByaXZhY3kgR3VhcmFudGVlczpcbiAqIC0gU3RyaWN0bHkgemVybyBwZXJzb25hbCBkYXRhIChOTyBBYWRoYWFyLCBQQU4sIENhcmQsIE5hbWVzLCBvciByYXcgRE9NIGNvbnRlbnQpLlxuICogLSBTdG9yZXMgZXZlbnRzIHN0cmljdGx5IGluIGNocm9tZS5zdG9yYWdlLmxvY2FsIChvciBsb2NhbFN0b3JhZ2UgaW4gbW9jay90ZXN0aW5nKS5cbiAqIC0gRXhwb3J0cyBmb3JtYXR0ZWQgSlNPTiBhbmQgQ1NWIGZpbGVzIGZvciBodW1hbiBwaWxvdCBjb25kdWN0b3JzLlxuICpcbiAqIExvZ2dlZCBFdmVudHM6XG4gKiAtIFdBUk5JTkdfU0hPV046IHsgdGltZXN0YW1wLCBsZXZlbCwgcnVsZXNUcmlnZ2VyZWQsIGRvbWFpbiB9XG4gKiAtIFVTRVJfREVDSVNJT046IHsgdGltZXN0YW1wLCBkZWNpc2lvbjogJ0xFRlRfUEFHRSd8J1BST0NFRURFRCcsIGRvbWFpbiB9XG4gKiAtIE1BU0tJTkdfQVBQTElFRDogeyB0aW1lc3RhbXAsIG1hc2tlZElucHV0c0NvdW50LCBtYXNrZWRUZXh0Tm9kZXNDb3VudCwgZG9tYWluIH1cbiAqIC0gRVhQTEFJTl9SRVFVRVNURUQ6IHsgdGltZXN0YW1wLCBkdXJhdGlvbk1zLCBzdWNjZXNzLCBkb21haW4gfVxuICovXG5cbmNvbnN0IFNUT1JBR0VfS0VZID0gXCJzYWtoYV9waWxvdF9sb2dzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dQaWxvdEV2ZW50KGV2ZW50VHlwZSwgcGF5bG9hZCA9IHt9KSB7XG4gIC8vIFNhbml0aXplIGRvbWFpbiB0byBzdHJpY3RseSBob3N0bmFtZSAoc3RyaXAgYW55IHBhdGhzIG9yIHF1ZXJ5IHBhcmFtcylcbiAgbGV0IHJhd0RvbWFpbiA9IHBheWxvYWQuZG9tYWluIHx8ICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2F0aW9uPy5ob3N0bmFtZSA6IFwiXCIpIHx8IFwidW5rbm93blwiO1xuICB0cnkge1xuICAgIGlmIChyYXdEb21haW4uaW5jbHVkZXMoXCI6Ly9cIikgfHwgcmF3RG9tYWluLmluY2x1ZGVzKFwiP1wiKSkge1xuICAgICAgY29uc3QgcGFyc2VkID0gbmV3IFVSTChyYXdEb21haW4uc3RhcnRzV2l0aChcImh0dHBcIikgPyByYXdEb21haW4gOiBgaHR0cHM6Ly8ke3Jhd0RvbWFpbn1gKTtcbiAgICAgIHJhd0RvbWFpbiA9IHBhcnNlZC5ob3N0bmFtZTtcbiAgICB9XG4gIH0gY2F0Y2gge1xuICAgIHJhd0RvbWFpbiA9IHJhd0RvbWFpbi5zcGxpdChcIj9cIilbMF0uc3BsaXQoXCIvXCIpWzBdO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGFueSByYXcgdmFsdWVzIG9yIHF1ZXJ5IHBhcmFtZXRlcnMgZnJvbSBwYXlsb2FkXG4gIGNvbnN0IHNhZmVQYXlsb2FkID0geyAuLi5wYXlsb2FkIH07XG4gIGRlbGV0ZSBzYWZlUGF5bG9hZC51cmw7XG4gIGRlbGV0ZSBzYWZlUGF5bG9hZC52YWx1ZTtcbiAgZGVsZXRlIHNhZmVQYXlsb2FkLmlucHV0VmFsdWU7XG4gIGRlbGV0ZSBzYWZlUGF5bG9hZC50ZXh0O1xuICBzYWZlUGF5bG9hZC5kb21haW4gPSByYXdEb21haW47XG5cbiAgY29uc3QgZXZlbnQgPSB7XG4gICAgaWQ6IFwiZXZ0X1wiICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgOSksXG4gICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgZXZlbnRUeXBlLFxuICAgIGRvbWFpbjogcmF3RG9tYWluLFxuICAgIC4uLnNhZmVQYXlsb2FkXG4gIH07XG5cbiAgdHJ5IHtcbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUuc3RvcmFnZT8ubG9jYWwpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1NUT1JBR0VfS0VZXSk7XG4gICAgICBjb25zdCBsb2dzID0gZGF0YVtTVE9SQUdFX0tFWV0gfHwgW107XG4gICAgICBsb2dzLnB1c2goZXZlbnQpO1xuICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgW1NUT1JBR0VfS0VZXTogbG9ncyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShTVE9SQUdFX0tFWSkgfHwgXCJbXVwiKTtcbiAgICAgIGV4aXN0aW5nLnB1c2goZXZlbnQpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oU1RPUkFHRV9LRVksIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nKSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oXCJbU2FraGEgTG9nZ2VyXSBDb3VsZCBub3QgcmVjb3JkIGxvY2FsIGV2ZW50OlwiLCBlcnIpO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UGlsb3RMb2dzKCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlPy5sb2NhbCkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbU1RPUkFHRV9LRVldKTtcbiAgICAgIHJldHVybiBkYXRhW1NUT1JBR0VfS0VZXSB8fCBbXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFNUT1JBR0VfS0VZKSB8fCBcIltdXCIpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHJldHVybiBbXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNsZWFyUGlsb3RMb2dzKCkge1xuICBpZiAodHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUuc3RvcmFnZT8ubG9jYWwpIHtcbiAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5yZW1vdmUoW1NUT1JBR0VfS0VZXSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFNUT1JBR0VfS0VZKTtcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgbG9ncyBhcnJheSBpbnRvIHN0YW5kYXJkIENTViBzdHJpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvZ3NUb0NTVihsb2dzKSB7XG4gIGlmICghbG9ncyB8fCBsb2dzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBcImlkLHRpbWVzdGFtcCxldmVudFR5cGUsZG9tYWluLGRldGFpbHNcXG5cIjtcbiAgfVxuICBjb25zdCBoZWFkZXJzID0gW1wiaWRcIiwgXCJ0aW1lc3RhbXBcIiwgXCJldmVudFR5cGVcIiwgXCJkb21haW5cIiwgXCJkZXRhaWxzXCJdO1xuICBjb25zdCByb3dzID0gbG9ncy5tYXAobCA9PiB7XG4gICAgY29uc3QgZGV0YWlscyA9IEpTT04uc3RyaW5naWZ5KGwpLnJlcGxhY2UoL1wiL2csICdcIlwiJyk7XG4gICAgcmV0dXJuIGBcIiR7bC5pZH1cIixcIiR7bC50aW1lc3RhbXB9XCIsXCIke2wuZXZlbnRUeXBlfVwiLFwiJHtsLmRvbWFpbn1cIixcIiR7ZGV0YWlsc31cImA7XG4gIH0pO1xuICByZXR1cm4gW2hlYWRlcnMuam9pbihcIixcIiksIC4uLnJvd3NdLmpvaW4oXCJcXG5cIik7XG59XG4iLCAiLyoqXG4gKiBjb250ZW50X3Nha2hhLmpzIFx1MjAxNCBTYWtoYSBDb250ZW50IFNjcmlwdCBCdW5kbGUgRW50cnkgUG9pbnRcbiAqXG4gKiBSdW5zIG9uIGV2ZXJ5IGxvYWRlZCBwYWdlOlxuICogMS4gRXhlY3V0ZXMgcmVhbC10aW1lIG9uLXBhZ2UgbWFza2luZyAoQWFkaGFhciwgUEFOLCBDYXJkLCBJRlNDLCBQaG9uZSwgVVBJKVxuICogMi4gRXZhbHVhdGVzIHBhZ2UgZm9yIHNjYW0gc2lnbmFscyAobG9va2FsaWtlIGRvbWFpbiwgVVBJIFBJTiB0cmFwLCBjcmVkZW50aWFsIGNvbWJvcywgQVBLcylcbiAqIDMuIFNob3dzIGhpZ2gtY29udHJhc3QgbW9kYWwgd2FybmluZyBpbiBwbGFpbiBFbmdsaXNoICYgVGVsdWd1IGlmIGRhbmdlci9jYXV0aW9uIGRldGVjdGVkXG4gKiA0LiBMb2dzIG5vbi1QSUkgcGlsb3QgdGVsZW1ldHJ5XG4gKi9cblxuaW1wb3J0IHsgZXZhbHVhdGVQYWdlU2FmZXR5IH0gZnJvbSBcIi4vc2NhbURldGVjdG9yLmpzXCI7XG5pbXBvcnQgeyBhcHBseVBhZ2VNYXNraW5nLCBtYXNrU2Vuc2l0aXZlVGV4dCwgY2xhc3NpZnlHZW5lcmljRmllbGQgfSBmcm9tIFwiLi9tYXNrRW5naW5lLmpzXCI7XG5pbXBvcnQgeyBsb2dQaWxvdEV2ZW50IH0gZnJvbSBcIi4vZXZlbnRMb2dnZXIuanNcIjtcbmltcG9ydCB7IHQgfSBmcm9tIFwiLi9pMThuLmpzXCI7XG5cbi8vIFNFQy0wMDE6IExvZyBvbmx5IGhvc3RuYW1lIFx1MjAxNCBuZXZlciBmdWxsIFVSTCAocXVlcnkgc3RyaW5ncyBtYXkgY29udGFpbiBQSUkpXG5jb25zb2xlLmxvZyhcIltTYWtoYV0gT24tZGV2aWNlIHNhZmV0eSBjb21wYW5pb24gYWN0aXZlIG9uOlwiLCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpO1xuXG5sZXQgY3VycmVudExhbmd1YWdlID0gXCJlblwiO1xubGV0IHBhZ2VFdmFsdWF0aW9uID0gbnVsbDtcbmxldCByZWV2YWx1YXRpb25UaW1lciA9IG51bGw7XG5cbi8vIENvbGxlY3QgZWxlbWVudHMgYWNyb3NzIHN0YW5kYXJkIERPTSwgc2FtZS1vcmlnaW4gaWZyYW1lcywgYW5kIG9wZW4gc2hhZG93IHJvb3RzXG5mdW5jdGlvbiBjb2xsZWN0QWxsSW5wdXROb2Rlcyhyb290ID0gZG9jdW1lbnQpIHtcbiAgY29uc3QgZWxlbWVudHMgPSBbXTtcblxuICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XG4gICAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgICAvLyBPcGVuIFNoYWRvdyBET00gdHJhdmVyc2FsXG4gICAgaWYgKG5vZGUuc2hhZG93Um9vdCkge1xuICAgICAgdHJhdmVyc2Uobm9kZS5zaGFkb3dSb290KTtcbiAgICB9XG5cbiAgICBpZiAobm9kZS5xdWVyeVNlbGVjdG9yQWxsKSB7XG4gICAgICBjb25zdCBpbnB1dHMgPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYVwiKTtcbiAgICAgIGlucHV0cy5mb3JFYWNoKGVsID0+IGVsZW1lbnRzLnB1c2goZWwpKTtcblxuICAgICAgLy8gU2FtZS1vcmlnaW4gaWZyYW1lc1xuICAgICAgY29uc3QgaWZyYW1lcyA9IG5vZGUucXVlcnlTZWxlY3RvckFsbChcImlmcmFtZVwiKTtcbiAgICAgIGlmcmFtZXMuZm9yRWFjaChpZnJhbWUgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50ICYmIGlmcmFtZS5jb250ZW50RG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgdHJhdmVyc2UoaWZyYW1lLmNvbnRlbnREb2N1bWVudC5ib2R5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgIC8vIENyb3NzLW9yaWdpbiBpZnJhbWU6IHNlY3VyaXR5IGJvdW5kYXJ5LCBzYWZlbHkgc2tpcFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDaGlsZHJlbiB0cmF2ZXJzYWwgZm9yIGN1c3RvbSBlbGVtZW50IHNoYWRvdyByb290c1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKGNoaWxkLnNoYWRvd1Jvb3QpIHRyYXZlcnNlKGNoaWxkLnNoYWRvd1Jvb3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRyYXZlcnNlKHJvb3QpO1xuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbi8vIEZpbmQgY2xvc2VzdCBhc3NvY2lhdGVkIGxhYmVsIHRleHQgZm9yIGFuIGlucHV0XG5mdW5jdGlvbiBmaW5kQXNzb2NpYXRlZExhYmVsKGVsKSB7XG4gIGlmICghZWwpIHJldHVybiBcIlwiO1xuXG4gIC8vIDEuIEV4cGxpY2l0IDxsYWJlbCBmb3I9XCJpZFwiPlxuICBpZiAoZWwuaWQpIHtcbiAgICBjb25zdCBsYWJlbEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGFiZWxbZm9yPVwiJHtDU1MuZXNjYXBlKGVsLmlkKX1cIl1gKTtcbiAgICBpZiAobGFiZWxFbCAmJiBsYWJlbEVsLmlubmVyVGV4dCkgcmV0dXJuIGxhYmVsRWwuaW5uZXJUZXh0LnRyaW0oKTtcbiAgfVxuXG4gIC8vIDIuIFdyYXBwaW5nIDxsYWJlbD5cbiAgY29uc3QgcGFyZW50TGFiZWwgPSBlbC5jbG9zZXN0KFwibGFiZWxcIik7XG4gIGlmIChwYXJlbnRMYWJlbCAmJiBwYXJlbnRMYWJlbC5pbm5lclRleHQpIHtcbiAgICByZXR1cm4gcGFyZW50TGFiZWwuaW5uZXJUZXh0LnJlcGxhY2UoZWwudmFsdWUgfHwgXCJcIiwgXCJcIikudHJpbSgpO1xuICB9XG5cbiAgLy8gMy4gYXJpYS1sYWJlbGxlZGJ5XG4gIGNvbnN0IGxhYmVsbGVkQnkgPSBlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIik7XG4gIGlmIChsYWJlbGxlZEJ5KSB7XG4gICAgY29uc3QgbGFiZWxOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGFiZWxsZWRCeSk7XG4gICAgaWYgKGxhYmVsTm9kZSAmJiBsYWJlbE5vZGUuaW5uZXJUZXh0KSByZXR1cm4gbGFiZWxOb2RlLmlubmVyVGV4dC50cmltKCk7XG4gIH1cblxuICAvLyA0LiBhcmlhLWxhYmVsXG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIpKSB7XG4gICAgcmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikudHJpbSgpO1xuICB9XG5cbiAgLy8gNS4gTmVhcmJ5IHByZWNlZGluZyBzaWJsaW5nIHRleHRcbiAgY29uc3QgcHJldiA9IGVsLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIGlmIChwcmV2ICYmIHByZXYuaW5uZXJUZXh0ICYmIHByZXYuaW5uZXJUZXh0Lmxlbmd0aCA8IDUwKSB7XG4gICAgcmV0dXJuIHByZXYuaW5uZXJUZXh0LnRyaW0oKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiO1xufVxuXG5mdW5jdGlvbiBleHRyYWN0R2VuZXJpY1BhZ2VGaWVsZHMoKSB7XG4gIGNvbnN0IHJhd05vZGVzID0gY29sbGVjdEFsbElucHV0Tm9kZXMoZG9jdW1lbnQpO1xuICBjb25zdCBmaWVsZHMgPSBbXTtcblxuICByYXdOb2Rlcy5mb3JFYWNoKGVsID0+IHtcbiAgICAvLyBTa2lwIHN1Ym1pdCBhbmQgYnV0dG9uIGlucHV0c1xuICAgIGNvbnN0IHR5cGUgPSAoZWwuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSB8fCBcInRleHRcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoW1wic3VibWl0XCIsIFwiYnV0dG9uXCIsIFwicmVzZXRcIiwgXCJpbWFnZVwiXS5pbmNsdWRlcyh0eXBlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZmluZEFzc29jaWF0ZWRMYWJlbChlbCk7XG4gICAgY29uc3QgbmVhcmJ5ID0gZWwucGFyZW50RWxlbWVudCA/IChlbC5wYXJlbnRFbGVtZW50LmlubmVyVGV4dCB8fCBcIlwiKS5zbGljZSgwLCA2MCkgOiBcIlwiO1xuXG4gICAgY29uc3QgZmllbGRNZXRhID0ge1xuICAgICAgbmFtZTogZWwuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSB8fCBcIlwiLFxuICAgICAgaWQ6IGVsLmdldEF0dHJpYnV0ZShcImlkXCIpIHx8IFwiXCIsXG4gICAgICBwbGFjZWhvbGRlcjogZWwuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIikgfHwgXCJcIixcbiAgICAgIGF1dG9jb21wbGV0ZTogZWwuZ2V0QXR0cmlidXRlKFwiYXV0b2NvbXBsZXRlXCIpIHx8IFwiXCIsXG4gICAgICBhcmlhTGFiZWw6IGVsLmdldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIikgfHwgXCJcIixcbiAgICAgIHR5cGUsXG4gICAgICBsYWJlbDogbGFiZWxUZXh0LFxuICAgICAgbmVhcmJ5VGV4dDogbmVhcmJ5LFxuICAgICAgdmFsdWU6IGVsLnZhbHVlIHx8IFwiXCJcbiAgICB9O1xuXG4gICAgY29uc3QgY2xhc3NpZmljYXRpb24gPSBjbGFzc2lmeUdlbmVyaWNGaWVsZChmaWVsZE1ldGEpO1xuXG4gICAgLy8gTWFzayB2YWx1ZSBwcmV2aWV3IHN0cmljdGx5IChuZXZlciBleHBvc2UgcmF3IHNlbnNpdGl2ZSB2YWx1ZSlcbiAgICBsZXQgbWFza2VkVmFsID0gXCJcIjtcbiAgICBpZiAoZmllbGRNZXRhLnZhbHVlKSB7XG4gICAgICBtYXNrZWRWYWwgPSBtYXNrU2Vuc2l0aXZlVGV4dChmaWVsZE1ldGEudmFsdWUpO1xuICAgIH1cblxuICAgIGZpZWxkcy5wdXNoKHtcbiAgICAgIGlkOiBmaWVsZE1ldGEuaWQgfHwgZmllbGRNZXRhLm5hbWUgfHwgYGZpZWxkXyR7ZmllbGRzLmxlbmd0aCArIDF9YCxcbiAgICAgIG5hbWU6IGZpZWxkTWV0YS5uYW1lLFxuICAgICAgbGFiZWw6IGZpZWxkTWV0YS5sYWJlbCB8fCBmaWVsZE1ldGEubmFtZSB8fCBmaWVsZE1ldGEuaWQgfHwgXCJGaWVsZFwiLFxuICAgICAgZGV0ZWN0ZWRUeXBlOiBjbGFzc2lmaWNhdGlvbi50eXBlLFxuICAgICAgY29uZmlkZW5jZTogY2xhc3NpZmljYXRpb24uY29uZmlkZW5jZSxcbiAgICAgIGV2aWRlbmNlOiBjbGFzc2lmaWNhdGlvbi5ldmlkZW5jZSxcbiAgICAgIG1hc2tlZFZhbHVlOiBtYXNrZWRWYWwsXG4gICAgICBlbGVtZW50OiBlbFxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gZmllbGRzO1xufVxuXG4vLyBSZW1vdmFibGUgaGlnaGxpZ2h0cyBvbiBhbmFseXplZCBmaWVsZHNcbmZ1bmN0aW9uIGhpZ2hsaWdodEFuYWx5emVkRmllbGRzKGZpZWxkcykge1xuICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgaGlnaGxpZ2h0c1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNha2hhLWFuYWx5emVkLW91dGxpbmVcIikuZm9yRWFjaChlbCA9PiB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShcInNha2hhLWFuYWx5emVkLW91dGxpbmVcIik7XG4gIH0pO1xuXG4gIGZpZWxkcy5mb3JFYWNoKGYgPT4ge1xuICAgIGlmIChmLmVsZW1lbnQgJiYgZi5lbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZi5lbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzYWtoYS1hbmFseXplZC1vdXRsaW5lXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIExvYWQgcHJlZmVycmVkIGxhbmd1YWdlIGZyb20gc3RvcmFnZSBpZiBhdmFpbGFibGVcbmlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlPy5sb2NhbCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoW1wic2FraGFfY29uc2VudF9hY2NlcHRlZFwiLCBcInNha2hhX2xhbmdcIl0sIChkYXRhKSA9PiB7XG4gICAgaWYgKGRhdGE/LnNha2hhX2xhbmcpIHtcbiAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IGRhdGEuc2FraGFfbGFuZztcbiAgICB9XG4gICAgaWYgKCFkYXRhPy5zYWtoYV9jb25zZW50X2FjY2VwdGVkKSB7XG4gICAgICByZW5kZXJDb25zZW50TW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5pdGlhbGl6ZVNha2hhKCk7XG4gICAgfVxuICB9KTtcbn0gZWxzZSB7XG4gIGluaXRpYWxpemVTYWtoYSgpO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEZpcnN0LVJ1biBDb25zZW50IE1vZGFsXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIHJlbmRlckNvbnNlbnRNb2RhbCgpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FraGEtY29uc2VudC1yb290XCIpKSByZXR1cm47XG5cbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuaWQgPSBcInNha2hhLWNvbnNlbnQtcm9vdFwiO1xuXG4gIGNvbnN0IHRpdGxlRW4gPSB0KFwiY29uc2VudF90aXRsZVwiLCBcImVuXCIpO1xuICBjb25zdCB0aXRsZUxhbmcgPSB0KFwiY29uc2VudF90aXRsZVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zdCBib2R5RW4gPSB0KFwiY29uc2VudF9ib2R5XCIsIFwiZW5cIik7XG4gIGNvbnN0IGJvZHlMYW5nID0gdChcImNvbnNlbnRfYm9keVwiLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zdCBhZ3JlZUVuID0gdChcImNvbnNlbnRfYWdyZWVcIiwgXCJlblwiKTtcbiAgY29uc3QgYWdyZWVMYW5nID0gdChcImNvbnNlbnRfYWdyZWVcIiwgY3VycmVudExhbmd1YWdlKTtcblxuICAvLyBTRUMtMDAzOiBET00gY29uc3RydWN0aW9uIFx1MjAxNCBubyBpbm5lckhUTUwgd2l0aCBpMThuIHN0cmluZyBpbnRlcnBvbGF0aW9uXG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTmFtZSA9IFwic2FraGEtbW9kYWwtY2FyZCBjYXV0aW9uXCI7XG4gIGNhcmQuc3R5bGUubWF4V2lkdGggPSBcIjQ4MHB4XCI7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwic2FraGEtbW9kYWwtaGVhZGVyXCI7XG4gIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpY29uRWwuY2xhc3NOYW1lID0gXCJzYWtoYS1pY29uXCI7XG4gIGljb25FbC50ZXh0Q29udGVudCA9IFwiXHVEODNEXHVERUUxXHVGRTBGXCI7XG4gIGNvbnN0IHRpdGxlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoMi50ZXh0Q29udGVudCA9IHRpdGxlRW47XG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViVGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjE1cHg7b3BhY2l0eTowLjk7bWFyZ2luLXRvcDo0cHhcIjtcbiAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZUxhbmc7XG4gIHRpdGxlV3JhcC5hcHBlbmRDaGlsZChoMik7XG4gIHRpdGxlV3JhcC5hcHBlbmRDaGlsZChzdWJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChpY29uRWwpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGVXcmFwKTtcblxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYm9keS5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLWJvZHlcIjtcbiAgY29uc3QgYm9keUVuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBib2R5RW5FbC5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLXJlYXNvbi1lblwiO1xuICBib2R5RW5FbC50ZXh0Q29udGVudCA9IGJvZHlFbjtcbiAgY29uc3QgYm9keUxhbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvZHlMYW5nRWwuY2xhc3NOYW1lID0gXCJzYWtoYS1tb2RhbC1yZWFzb24tdGVcIjtcbiAgYm9keUxhbmdFbC50ZXh0Q29udGVudCA9IGJvZHlMYW5nO1xuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWN0aW9ucy5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLWFjdGlvbnNcIjtcbiAgY29uc3QgYWdyZWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZ3JlZUJ0bi5pZCA9IFwic2FraGEtY29uc2VudC1hZ3JlZVwiO1xuICBhZ3JlZUJ0bi5jbGFzc05hbWUgPSBcInNha2hhLWJ0biBzYWtoYS1idG4tcHJpbWFyeVwiO1xuICBhZ3JlZUJ0bi50ZXh0Q29udGVudCA9IGBcXHUyNzA1ICR7YWdyZWVFbn0gLyAke2FncmVlTGFuZ31gO1xuICBhY3Rpb25zLmFwcGVuZENoaWxkKGFncmVlQnRuKTtcbiAgYm9keS5hcHBlbmRDaGlsZChib2R5RW5FbCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYm9keUxhbmdFbCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgY2FyZC5hcHBlbmRDaGlsZChib2R5KTtcbiAgcm9vdC5hcHBlbmRDaGlsZChjYXJkKTtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocm9vdCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWtoYS1jb25zZW50LWFncmVlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgY2hyb21lICE9PSBcInVuZGVmaW5lZFwiICYmIGNocm9tZS5zdG9yYWdlPy5sb2NhbCkge1xuICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgc2FraGFfY29uc2VudF9hY2NlcHRlZDogdHJ1ZSB9LCAoKSA9PiB7XG4gICAgICAgIGxvZ1BpbG90RXZlbnQoXCJDT05TRU5UX0dJVkVOXCIsIHsgbGFuZzogY3VycmVudExhbmd1YWdlIH0pO1xuICAgICAgICByb290LnJlbW92ZSgpO1xuICAgICAgICBpbml0aWFsaXplU2FraGEoKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByb290LnJlbW92ZSgpO1xuICAgICAgaW5pdGlhbGl6ZVNha2hhKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNha2hhKCkge1xuICAvLyAxLiBJbml0aWFsIG9uLXBhZ2Ugc2Vuc2l0aXZlIGRhdGEgbWFza2luZ1xuICB0cnkge1xuICAgIGNvbnN0IG1hc2tTdGF0cyA9IGFwcGx5UGFnZU1hc2tpbmcoZG9jdW1lbnQsIGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgaWYgKG1hc2tTdGF0cy5tYXNrZWRJbnB1dHMgPiAwIHx8IG1hc2tTdGF0cy5tYXNrZWRUZXh0Tm9kZXMgPiAwKSB7XG4gICAgICBsb2dQaWxvdEV2ZW50KFwiTUFTS0lOR19BUFBMSUVEXCIsIHtcbiAgICAgICAgZG9tYWluOiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsXG4gICAgICAgIGlucHV0c01hc2tlZDogbWFza1N0YXRzLm1hc2tlZElucHV0cyxcbiAgICAgICAgdGV4dE5vZGVzTWFza2VkOiBtYXNrU3RhdHMubWFza2VkVGV4dE5vZGVzXG4gICAgICB9KTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUud2FybihcIltTYWtoYV0gTWFza2luZyBlcnJvcjpcIiwgZXJyKTtcbiAgfVxuXG4gIC8vIDIuIENvbnRpbnVvdXMgbWFza2luZyBhbmQgZGVib3VuY2VkIHNhZmV0eSBjaGVjayBvbiBkeW5hbWljIERPTSB1cGRhdGVzIChTUEFzKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcbiAgICBhcHBseVBhZ2VNYXNraW5nKGRvY3VtZW50LCBjdXJyZW50TGFuZ3VhZ2UpO1xuICAgIGlmIChyZWV2YWx1YXRpb25UaW1lcikgY2xlYXJUaW1lb3V0KHJlZXZhbHVhdGlvblRpbWVyKTtcbiAgICByZWV2YWx1YXRpb25UaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcnVuUGFnZVNhZmV0eUNoZWNrKCk7XG4gICAgfSwgNDAwKTsgLy8gNDAwbXMgZGVib3VuY2VcbiAgfSk7XG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5ib2R5LCB7IGNoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIC8vIDMuIFNjYW4gcGFnZSBmb3Igc2NhbXNcbiAgcnVuUGFnZVNhZmV0eUNoZWNrKCk7XG59XG5cbmZ1bmN0aW9uIHJ1blBhZ2VTYWZldHlDaGVjaygpIHtcbiAgY29uc3QgcGFnZVRleHQgPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5pbm5lclRleHQgfHwgXCJcIiA6IFwiXCI7XG4gIGNvbnN0IGNsYXNzaWZpZWRGaWVsZHMgPSBleHRyYWN0R2VuZXJpY1BhZ2VGaWVsZHMoKTtcbiAgXG4gIC8vIEhpZ2hsaWdodCBhbmFseXplZCBmaWVsZHMgb24gdGhlIHBhZ2Ugd2l0aCByZW1vdmFibGUgb3V0bGluZVxuICBoaWdobGlnaHRBbmFseXplZEZpZWxkcyhjbGFzc2lmaWVkRmllbGRzKTtcblxuICBjb25zdCBpbnB1dEVsZW1lbnRzID0gY2xhc3NpZmllZEZpZWxkcy5tYXAoZiA9PiAoe1xuICAgIG5hbWU6IGYubmFtZSB8fCBcIlwiLFxuICAgIGlkOiBmLmlkIHx8IFwiXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiXCIsXG4gICAgdHlwZTogXCJcIixcbiAgICBsYWJlbDogZi5sYWJlbCB8fCBcIlwiXG4gIH0pKTtcblxuICBjb25zdCBsaW5rRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhW2hyZWZdXCIpKS5tYXAoYSA9PiBhLmhyZWYpO1xuICBjb25zdCBmb3Jtc0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImZvcm1cIikubGVuZ3RoO1xuICBjb25zdCBmcmFtZXNDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpZnJhbWUsIGZyYW1lXCIpLmxlbmd0aDtcblxuICBjb25zdCBzZXJpYWxpemVkRmllbGRzID0gY2xhc3NpZmllZEZpZWxkcy5tYXAoZiA9PiAoe1xuICAgIGlkOiBmLmlkLFxuICAgIG5hbWU6IGYubmFtZSxcbiAgICBsYWJlbDogZi5sYWJlbCxcbiAgICBkZXRlY3RlZFR5cGU6IGYuZGV0ZWN0ZWRUeXBlLFxuICAgIGNvbmZpZGVuY2U6IGYuY29uZmlkZW5jZSxcbiAgICBldmlkZW5jZTogZi5ldmlkZW5jZSxcbiAgICBtYXNrZWRWYWx1ZTogZi5tYXNrZWRWYWx1ZVxuICB9KSk7XG5cbiAgcGFnZUV2YWx1YXRpb24gPSBldmFsdWF0ZVBhZ2VTYWZldHkoe1xuICAgIHVybDogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgcGFnZVRleHQsXG4gICAgaW5wdXRzOiBpbnB1dEVsZW1lbnRzLFxuICAgIGxpbmtzOiBsaW5rRWxlbWVudHMsXG4gICAgZG9tU3RhdHM6IHtcbiAgICAgIGZpZWxkc0NvdW50OiBjbGFzc2lmaWVkRmllbGRzLmxlbmd0aCxcbiAgICAgIGZvcm1zQ291bnQsXG4gICAgICBsaW5rc0NvdW50OiBsaW5rRWxlbWVudHMubGVuZ3RoLFxuICAgICAgZnJhbWVzQ291bnRcbiAgICB9LFxuICAgIGNsYXNzaWZpZWRGaWVsZHM6IHNlcmlhbGl6ZWRGaWVsZHNcbiAgfSk7XG5cbiAgLy8gU0VDLTAwMTogTG9nIG9ubHkgbGV2ZWwsIG5vdCBmdWxsIGV2YWx1YXRpb24gb2JqZWN0XG4gIGNvbnNvbGUubG9nKFwiW1Nha2hhXSBQYWdlIGV2YWx1YXRpb246XCIsIHBhZ2VFdmFsdWF0aW9uLmxldmVsLCBcIm9uXCIsIHBhZ2VFdmFsdWF0aW9uLmhvc3RuYW1lKTtcblxuICBpZiAocGFnZUV2YWx1YXRpb24ubGV2ZWwgPT09IFwiZGFuZ2VyXCIgfHwgcGFnZUV2YWx1YXRpb24ubGV2ZWwgPT09IFwiY2F1dGlvblwiKSB7XG4gICAgbG9nUGlsb3RFdmVudChcIldBUk5JTkdfU0hPV05cIiwge1xuICAgICAgZG9tYWluOiBwYWdlRXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGxldmVsOiBwYWdlRXZhbHVhdGlvbi5sZXZlbCxcbiAgICAgIHJ1bGVzVHJpZ2dlcmVkOiBwYWdlRXZhbHVhdGlvbi5ydWxlc1RyaWdnZXJlZFxuICAgIH0pO1xuICAgIHJlbmRlclNlbmlvcldhcm5pbmdNb2RhbChwYWdlRXZhbHVhdGlvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5IEhpZ2gtQ29udHJhc3QgQWNrbm93bGVkZ21lbnQgV2FybmluZyBNb2RhbFxuICovXG5mdW5jdGlvbiByZW5kZXJTZW5pb3JXYXJuaW5nTW9kYWwoZXZhbHVhdGlvbikge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYWtoYS1hbGVydC1tb2RhbC1yb290XCIpKSByZXR1cm47XG5cbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuaWQgPSBcInNha2hhLWFsZXJ0LW1vZGFsLXJvb3RcIjtcbiAgcm9vdC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwiZGlhbG9nXCIpO1xuICByb290LnNldEF0dHJpYnV0ZShcImFyaWEtbW9kYWxcIiwgXCJ0cnVlXCIpO1xuICByb290LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxsZWRieVwiLCBcInNha2hhLWFsZXJ0LXRpdGxlXCIpO1xuICByb290LnNldEF0dHJpYnV0ZShcImFyaWEtZGVzY3JpYmVkYnlcIiwgXCJzYWtoYS1hbGVydC1kZXNjXCIpO1xuXG4gIGNvbnN0IGlzRGFuZ2VyID0gZXZhbHVhdGlvbi5sZXZlbCA9PT0gXCJkYW5nZXJcIjtcbiAgY29uc3QgaWNvbiA9IGlzRGFuZ2VyID8gXCJcdUQ4M0RcdURFQThcIiA6IFwiXHUyNkEwXHVGRTBGXCI7XG4gIGNvbnN0IHRpdGxlS2V5ID0gaXNEYW5nZXIgPyBcIndhcm5pbmdfZGFuZ2VyX3RpdGxlXCIgOiBcIndhcm5pbmdfY2F1dGlvbl90aXRsZVwiO1xuICBjb25zdCB0aXRsZUVuID0gdCh0aXRsZUtleSwgXCJlblwiKTtcbiAgY29uc3QgdGl0bGVUZSA9IHQodGl0bGVLZXksIFwidGVcIik7XG5cbiAgLy8gU0VDLTAwMzogQnVpbGQgbW9kYWwgdmlhIERPTSBBUEkgXHUyMDE0IG5ldmVyIGlubmVySFRNTCB3aXRoIGRhdGEgdGhhdCBjb3VsZCBiZVxuICAvLyBleHRlcm5hbGx5IGluZmx1ZW5jZWQuIERlZmVuc2UgaW4gZGVwdGg6IGV2ZW4gaWYgaTE4biBzdHJpbmdzIHdlcmUgbXV0YXRlZCxcbiAgLy8gdGV4dENvbnRlbnQgYXNzaWdubWVudCBwcmV2ZW50cyBIVE1MIGluamVjdGlvbi5cbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NOYW1lID0gYHNha2hhLW1vZGFsLWNhcmQgJHtpc0RhbmdlciA/IFwiZGFuZ2VyXCIgOiBcImNhdXRpb25cIn1gO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLWhlYWRlclwiO1xuXG4gIGNvbnN0IGljb25FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBpY29uRWwuY2xhc3NOYW1lID0gXCJzYWtoYS1pY29uXCI7XG4gIGljb25FbC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XG4gIGljb25FbC50ZXh0Q29udGVudCA9IGljb247XG5cbiAgY29uc3QgdGl0bGVXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGgyLmlkID0gXCJzYWtoYS1hbGVydC10aXRsZVwiO1xuICBoMi50ZXh0Q29udGVudCA9IHRpdGxlRW47XG4gIGNvbnN0IHN1YlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViVGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjE2cHg7b3BhY2l0eTowLjk7bWFyZ2luLXRvcDo0cHhcIjtcbiAgc3ViVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZVRlO1xuICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQoaDIpO1xuICB0aXRsZVdyYXAuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaWNvbkVsKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlV3JhcCk7XG5cbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJvZHkuaWQgPSBcInNha2hhLWFsZXJ0LWRlc2NcIjtcbiAgYm9keS5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLWJvZHlcIjtcblxuICBjb25zdCByZWFzb25FbkVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVhc29uRW5FbC5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLXJlYXNvbi1lblwiO1xuICByZWFzb25FbkVsLnRleHRDb250ZW50ID0gZXZhbHVhdGlvbi5yZWFzb25FbjtcblxuICBjb25zdCByZWFzb25UZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVhc29uVGVFbC5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLXJlYXNvbi10ZVwiO1xuICByZWFzb25UZUVsLnRleHRDb250ZW50ID0gZXZhbHVhdGlvbi5yZWFzb25UZTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYWN0aW9ucy5jbGFzc05hbWUgPSBcInNha2hhLW1vZGFsLWFjdGlvbnNcIjtcblxuICBjb25zdCBidG5MZWF2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ0bkxlYXZlLmlkID0gXCJzYWtoYS1idG4tbGVhdmVcIjtcbiAgYnRuTGVhdmUuY2xhc3NOYW1lID0gXCJzYWtoYS1idG4gc2FraGEtYnRuLXByaW1hcnlcIjtcbiAgYnRuTGVhdmUudGV4dENvbnRlbnQgPSBgXFx1RDgzRFxcdURFRTFcXHVGRTBGICR7dChcImJ0bl91bmRlcnN0YW5kX2xlYXZlXCIsIFwiZW5cIil9IC8gJHt0KFwiYnRuX3VuZGVyc3RhbmRfbGVhdmVcIiwgXCJ0ZVwiKX1gO1xuXG4gIGNvbnN0IGJ0blByb2NlZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBidG5Qcm9jZWVkLmlkID0gXCJzYWtoYS1idG4tcHJvY2VlZFwiO1xuICBidG5Qcm9jZWVkLmNsYXNzTmFtZSA9IFwic2FraGEtYnRuIHNha2hhLWJ0bi1zZWNvbmRhcnlcIjtcbiAgYnRuUHJvY2VlZC50ZXh0Q29udGVudCA9IGAke3QoXCJidG5fcHJvY2VlZF9hbnl3YXlcIiwgXCJlblwiKX0gLyAke3QoXCJidG5fcHJvY2VlZF9hbnl3YXlcIiwgXCJ0ZVwiKX1gO1xuXG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoYnRuTGVhdmUpO1xuICBhY3Rpb25zLmFwcGVuZENoaWxkKGJ0blByb2NlZWQpO1xuICBib2R5LmFwcGVuZENoaWxkKHJlYXNvbkVuRWwpO1xuICBib2R5LmFwcGVuZENoaWxkKHJlYXNvblRlRWwpO1xuICBib2R5LmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuICBjYXJkLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2FraGEtYnRuLWxlYXZlXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ1BpbG90RXZlbnQoXCJVU0VSX0RFQ0lTSU9OXCIsIHtcbiAgICAgIGRvbWFpbjogZXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGRlY2lzaW9uOiBcIkxFRlRfUEFHRVwiXG4gICAgfSk7XG4gICAgLy8gTmF2aWdhdGUgYXdheSB0byBzYWZlIGJyb3dzZXIgZGVmYXVsdFxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJhYm91dDpibGFua1wiO1xuICB9KTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNha2hhLWJ0bi1wcm9jZWVkXCIpPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGxvZ1BpbG90RXZlbnQoXCJVU0VSX0RFQ0lTSU9OXCIsIHtcbiAgICAgIGRvbWFpbjogZXZhbHVhdGlvbi5ob3N0bmFtZSxcbiAgICAgIGRlY2lzaW9uOiBcIlBST0NFRURFRF9BTllXQVlcIlxuICAgIH0pO1xuICAgIHJvb3QucmVtb3ZlKCk7XG4gIH0pO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4dGVuc2lvbiBNZXNzYWdlIExpc3RlbmVyc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAodHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUucnVudGltZT8ub25NZXNzYWdlKSB7XG4gIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIC8vIFNFQy0wMDI6IE9ubHkgcmVzcG9uZCB0byBtZXNzYWdlcyBmcm9tIG91ciBvd24gZXh0ZW5zaW9uIHBhZ2VzIChwb3B1cCwgYmFja2dyb3VuZCkuXG4gICAgLy8gSG9zdGlsZSB3ZWIgcGFnZXMgQ0FOTk9UIHNwb29mIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlIGJ1dCBhIGNvbXByb21pc2VkXG4gICAgLy8gZXh0ZW5zaW9uIHBhZ2UgY291bGQ7IHJlamVjdGluZyBub24tZXh0ZW5zaW9uIHNlbmRlcnMgaXMgZGVmZW5zZSBpbiBkZXB0aC5cbiAgICBjb25zdCBpc0V4dGVuc2lvblNlbmRlciA9IHNlbmRlcj8uaWQgPT09IGNocm9tZS5ydW50aW1lLmlkO1xuICAgIGlmICghaXNFeHRlbnNpb25TZW5kZXIpIHtcbiAgICAgIC8vIFNpbGVudGx5IGlnbm9yZSBcdTIwMTQgZG8gbm90IGV4cG9zZSBpbnRlcm5hbCBzdGF0ZSB0byB3ZWIgcGFnZXNcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiR0VUX1BBR0VfU0FGRVRZXCIpIHtcbiAgICAgIC8vIFJlLXF1ZXJ5IGN1cnJlbnQgbWFza2VkIGNvdW50IG9uIHBhZ2VcbiAgICAgIGNvbnN0IGN1cnJlbnRNYXNrZWRJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNha2hhLW1hc2tlZC1pbnB1dFwiKS5sZW5ndGg7XG4gICAgICBjb25zdCBjdXJyZW50TWFza2VkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2FraGEtYmx1cnJlZFwiKS5sZW5ndGg7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBcbiAgICAgICAgZXZhbHVhdGlvbjogcGFnZUV2YWx1YXRpb24sXG4gICAgICAgIG1hc2tTdGF0czoge1xuICAgICAgICAgIG1hc2tlZElucHV0czogY3VycmVudE1hc2tlZElucHV0cyxcbiAgICAgICAgICBtYXNrZWRUZXh0Tm9kZXM6IGN1cnJlbnRNYXNrZWRUZXh0LFxuICAgICAgICAgIHRvdGFsTWFza2VkOiBjdXJyZW50TWFza2VkSW5wdXRzICsgY3VycmVudE1hc2tlZFRleHRcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiR0VUX01BU0tFRF9QQUdFX1RFWFRcIikge1xuICAgICAgLy8gUmV0dXJuIHN0cmljdGx5IG1hc2tlZCB0ZXh0IGZvciB0aGUgRXhwbGFpbiBmZWF0dXJlIChOTyByYXcgUElJIGxlYXZlcylcbiAgICAgIGNvbnN0IHJhd1RleHQgPSBkb2N1bWVudC5ib2R5ID8gZG9jdW1lbnQuYm9keS5pbm5lclRleHQgfHwgXCJcIiA6IFwiXCI7XG4gICAgICBjb25zdCBzYWZlTWFza2VkVGV4dCA9IG1hc2tTZW5zaXRpdmVUZXh0KHJhd1RleHQpO1xuICAgICAgc2VuZFJlc3BvbnNlKHsgbWFza2VkVGV4dDogc2FmZU1hc2tlZFRleHQgfSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobXNnLnR5cGUgPT09IFwiU0VUX0xBTkdVQUdFXCIpIHtcbiAgICAgIGN1cnJlbnRMYW5ndWFnZSA9IG1zZy5sYW5nIHx8IFwiZW5cIjtcbiAgICAgIGFwcGx5UGFnZU1hc2tpbmcoZG9jdW1lbnQsIGN1cnJlbnRMYW5ndWFnZSk7XG4gICAgICBzZW5kUmVzcG9uc2UoeyBvazogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBT08sSUFBTSxVQUFVO0FBQUEsRUFDckIsSUFBSTtBQUFBLElBQ0YsVUFBVTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2Qsc0JBQXNCO0FBQUEsSUFDdEIsdUJBQXVCO0FBQUEsSUFDdkIsb0JBQW9CO0FBQUEsSUFFcEIsa0JBQWtCO0FBQUEsSUFDbEIscUJBQXFCO0FBQUEsSUFDckIs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QUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQy9CO0FBRUEsSUFBTSxhQUFhO0FBQUEsRUFDakIsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQUEsRUFDN0IsQ0FBQyxHQUFHLEdB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
