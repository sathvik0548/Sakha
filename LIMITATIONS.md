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
