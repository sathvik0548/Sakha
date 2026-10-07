# PRIVACY.md — Privacy & Data Architecture of Sakha (సఖ)

## Core Guarantee
**Sakha runs 100% on-device by default. Your raw screen captures, DOM text, and identity documents NEVER leave your computer or browser.**

---

## 1. Zero External Transmission Policy
- **No Analytics / Telemetry Sent Online:** All interaction statistics (warnings triggered, blur interactions) are logged locally inside `chrome.storage.local`. They never leave your device.
- **No Account or Registration:** No email, phone number, or login credentials are required to use Sakha.
- **No Cloud Inference for Sensitive Data:** Aadhaar (Verhoeff), PAN, Credit/Debit cards (Luhn), and IFSC validation algorithms run entirely in local JavaScript.

---

## 2. On-Page Visual Masking
- Sensitive data is dynamically masked on-screen via CSS overlays (`filter: blur(...)`).
- **Form Submission Integrity:** Sakha does **not** alter or wipe input values submitted by users to forms; it merely provides a privacy shield over the human-visible display so shoulder surfers, screen recorders, and malicious visual observers cannot see credentials.

---

## 3. The "Explain" Feature (Strict Exemption Policy)
- The optional "What is this page asking me?" feature is the **only** feature with network communication capability.
- **Strict Masking Pre-Condition:** Before any text is forwarded to an explanation backend (local Ollama or secure API endpoint), all Aadhaar numbers, PAN cards, phone numbers, and payment details are **strictly stripped and replaced with generic masked tokens** (`XXXX XXXX 5674`, `ABXXXXXF`, `•••• •••• •••• 9014`).
- Raw HTML, full screenshots, cookies, session headers, and unmasked identifiers are **NEVER** transmitted.

---

## 4. Local Pilot Logs
- If participant logs are downloaded for user feedback studies, the resulting CSV contains only:
  - Timestamp
  - Event Type (e.g., `WARNING_SHOWN`, `USER_DECISION`)
  - Target domain name
  - Execution duration (ms)
- No user identity, browsing history, or personal input values are ever recorded.
