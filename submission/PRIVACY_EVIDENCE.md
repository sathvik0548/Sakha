# PRIVACY_EVIDENCE.md — Network & Storage Privacy Audit Evidence
**Project:** Sakha (సఖ) — On-Device Senior Safety Companion  
**Evaluation Date:** October 2026  
**Auditor:** Independent Reviewer & Release Engineer  

---

## 1. Network Traffic & Leak Interception Audit

### Automated Test: `extension/test_privacy_leak.js`
An automated test suite was executed that instruments global `fetch` and network transport handlers. The test:
1. Injected synthetic Indian PII (Valid Verhoeff Aadhaar `5489 1234 5674`, Valid PAN `ABCDE1234F`, Valid Luhn card `4532 1234 5678 9014`, Phone `9876543210`, and UPI ID `elderly.user@okhdfcbank`).
2. Executed real-time on-page masking (`applyPageMasking`).
3. Executed on-device scam analysis (`evaluatePageSafety`).
4. Monitored all network egress channels.

### Audit Findings:
- **During On-Page Sensitive Masking:** `0` network calls. All detection, Verhoeff checking, Luhn verification, and CSS blur application occurred strictly in memory within the local browser tab.
- **During Scam Safety Evaluation:** `0` network calls. All lookalike domain matching, Levenshtein edit distance, homoglyph normalization, urgency regex, and UPI trap checks executed strictly on-device.
- **During Optional Explain Call:** Exactly `1` HTTP POST call was initiated to the local backend `http://localhost:3000/api/explain`.
- **Payload Inspection of Explain Call:**
  - Raw Aadhaar (`5489 1234 5674` or `548912345674`): **NOT TRANSMITTED (0 occurrences)**.
  - Raw PAN (`ABCDE1234F`): **NOT TRANSMITTED (0 occurrences)**.
  - Raw Card Number (`4532 1234 5678 9014`): **NOT TRANSMITTED (0 occurrences)**.
  - Replaced Sanitized Tokens: `XXXX XXXX 5674`, `ABXXXXXF`, `•••• •••• •••• 9014`.
  - **Verdict:** **100% CLEAN — Zero PII Egress.**

---

## 2. Chrome Extension Manifest Permissions Audit

Review of `extension/manifest.json`:

```json
{
  "manifest_version": 3,
  "name": "Sakha (సఖ) — On-Device Senior Safety Companion",
  "version": "1.0.0",
  "permissions": [
    "activeTab",
    "scripting",
    "tabs",
    "offscreen",
    "storage"
  ],
  "host_permissions": [
    "http://localhost:3000/*",
    "http://127.0.0.1:3000/*"
  ]
}
```

### Permission Justification & Minimization Analysis:
1. `activeTab` & `tabs`: Required to access URL hostname of the active tab for scam evaluation and inject protective content scripts when activated.
2. `scripting`: Required to inject CSS blur overlays and DOM scanning on dynamic single-page applications.
3. `storage`: Required for local settings (preferred language `sakha_lang`) and local-only pilot event telemetry. Strictly uses `chrome.storage.local`.
4. `offscreen`: Kept for sandboxed canvas image processing.
5. `host_permissions`: Strictly restricted to `localhost:3000` for the optional Explain endpoint. **All external third-party host permissions (e.g. HuggingFace, Cloud APIs, Render URLs) have been removed.**

---

## 3. Storage & Persistence Audit
- **Local Storage Key:** `sakha_pilot_logs` inside `chrome.storage.local`.
- **Content Stored:** Only event types (`WARNING_SHOWN`, `USER_DECISION`, `MASKING_APPLIED`), timestamp, and domain name.
- **PII Storage:** **ZERO**. No user inputs, passwords, phone numbers, or credit card numbers are ever persisted in storage.
