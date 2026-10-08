# LIMITATIONS.md — Operational Boundaries & Known Constraints

While Sakha (సఖ) provides a robust, on-device digital defense layer for senior citizens, users and evaluators should be aware of the following technical and operational constraints:

---

## 1. Scope Constraints (Browser Extension Only)
- **Web Browsing Only:** Sakha functions as a Chrome Extension (Manifest V3). It does **not** inspect WhatsApp messages, SMS notifications, telephone calls, or native Android/iOS mobile applications.
- **Chrome Internal Pages Excluded:** Chrome security policies prohibit content script injection on `chrome://*`, `chrome-extension://*`, and the official Chrome Web Store domain.

---

## 2. Allowlist Dependence & Zero-Day Domains
- **Allowlist Freshness:** The lookalike engine identifies typosquatting and homoglyphs relative to known official entities (SBI, NPCI, UIDAI, Income Tax). If a legitimate new bank domain is introduced that is not yet on the allowlist, Sakha will not use it as a reference for typosquatting checks until updated.
- **Subdomain Collisions:** The allowlist in `ALLOWLIST_TO_VERIFY` must be audited by human evaluators before final production release.

---

## 3. Masking & Obfuscated Numbers
- **Novel Text Formats:** Aadhaar detection relies on 12-digit format and Verhoeff checksum. If a scam site intentionally breaks numbers across separated images or custom Canvas elements, text-based DOM masking cannot alter the rendered pixels without running full offscreen vision OCR.
- **Single-Page Application (SPA) Virtual Scrolling:** On infinite-scroll dynamic feeds, elements that are mounted lazily rely on `MutationObserver` to receive blur overlays.

---

## 4. Linguistic Nuances
- **Romanized Dialects:** Sakha's urgency and threat rules detect primary romanized Hindi and Telugu intimidation phrasing (e.g., `account block avuthundi`, `khata band ho jayega`). Non-standard regional spellings or heavy slang may fall outside regex coverage.
- **Translation Status:** All Telugu and Hindi translations are cataloged in `STRINGS_TO_REVIEW.md` and require final validation by native speakers.

---

## 5. Adversarial Evasion — Confirmed Misses (Security Audit, October 2026)

The following evasion techniques were tested against the scam detector using synthetic data. Items below are **not caught** by the current engine. Each is documented so users and evaluators understand the actual threat boundary.

| Technique | Detector Behaviour | Notes |
|---|---|---|
| **Urgency phrase split by sentence-ending punctuation** | Missed | Regex requires contiguous phrase; `"account. Will be blocked."` breaks `\b` boundary. |
| **Urgency phrase with Unicode whitespace (em-space U+2003)** | Missed | `\s` in regex may not match non-ASCII whitespace between tokens. |
| **CSS `display:none` urgency text** | Missed (architectural) | `document.body.innerText` excludes hidden elements. An adversary can inject text invisible to the user but visible to Sakha — this is a false-negative, not a false-positive risk. |
| **Leet-speak obfuscated urgency phrase** (`4cc0unt`) | Missed | No leet-speak normalization in page-text pipeline. |
| **Zero-width space (U+200B) between `UPI` and `PIN`** | Missed | Breaks token regex match; ZWS not stripped before detection. |
| **UPI PIN trap with number-word denominator** (`"five hundred rupees"`) | Missed | Regex matches `money\|cash\|cashback\|refund\|reward\|prize` — spelled-out amounts not included. |
| **Credential fields with no semantic attributes** (no name/id/placeholder/label) | Missed | Field-combo rule relies entirely on attribute content; fully anonymous inputs evade detection. |
| **Scam content inside Shadow DOM** | Missed (architectural) | `innerText` does not pierce shadow roots. Shadow DOM is rarely used by phishing sites but the gap exists. |
| **Scam content in cross-origin iframe** | Missed (architectural) | Cross-origin iframe DOM is inaccessible to the content script; Chrome extension APIs do not grant cross-origin frame access without explicit permission. |
| **Aadhaar / card number rendered on `<canvas>`** | Missed (architectural) | Masking engine operates on text nodes and `input.value`; pixel content of canvas elements is not analyzed. |
| **Urgency text injected > 3 seconds after page load** | Partially missed | `MutationObserver` covers DOM mutations; very late injections (post-idle) may slip if the observer is detached. |

