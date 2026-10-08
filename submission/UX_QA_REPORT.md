# UX_QA_REPORT.md — Senior-Citizen Accessibility & Usability QA Audit

**Auditor:** QA Lead (Senior Citizen Digital Accessibility Focus)  
**Product:** Sakha (సఖ) — On-Device Senior Safety Companion (`sakha-sfic`)  
**Audit Scope:** Extension Popup (`popup.html`), Settings / Vault (`settings.html`), Warning & Consent Overlays (`content_sakha.js` / `sakha.css`), Telugu & Hindi Language Rendering, Plain-Language Review, Edge States  
**Status:** **Reviewed & Verified with Automated Test Suites** (Requires Native-Speaker and Screen-Reader Field Verification with Real Users)

---

## 1. Executive Summary

This QA audit evaluated Sakha's interface against the specific ergonomic and cognitive requirements of senior citizens in India:
1. **WCAG 2.1 AA Accessibility:** Verified via automated `axe-core` analysis across popup, settings, and modal overlay components. All 0-violation milestones met.
2. **Ergonomic Touch Targets:** All interactive elements (language selector, buttons, input fields, export links) were verified to satisfy minimum 44px x 44px touch target guidelines.
3. **Typography & Contrast:** Enhanced warning modals and settings page to satisfy WCAG AA contrast ratios (minimum 4.5:1 for body copy and 3.0:1 for large text).
4. **Bilingual / Telugu Rendering:** Verified zero broken Unicode replacement glyphs (tofu boxes). Confirmed Telugu text line-wrapping without horizontal page overflow.
5. **Plain-Language Pass:** Eliminated alarming, technical jargon in favor of calm, short, action-first phrasing across English, Telugu, and Hindi.
6. **Graceful Edge State Communication:** Added friendly status messages for unsupported internal pages (`chrome://`), offline mode, and sleeping backend servers.

---

## 2. Issues & Fix Status Table

| Issue ID | Severity | Area | Description | Fix Implemented | Verification Method |
|---|---|---|---|---|---|
| **UX-001** | **High** | Accessibility | Language `<select>` in `popup.html` had no accessible label (`aria-label`) for assistive technologies. | Added `aria-label="Choose Language / భాషను ఎంచుకోండి / भाषा चुनें"`. | `axe-core` passed (0 violations). |
| **UX-002** | **Medium** | Accessibility | `popup.html` and `settings.html` lacked `<main>` and landmark structuring. | Wrapped main interface sections in `<header>` and `<main>` landmarks; added `<section>` landmark elements. | `axe-core` passed (0 violations). |
| **UX-003** | **High** | Ergonomics | Language selector and export links had touch target heights under 44px (height ~28-31px). | Set `min-height: 44px`, `min-width: 44px`, and padded button boundaries. | Tested in `test_a11y_suite.js` (all >=44px). |
| **UX-004** | **Medium** | Accessibility | `settings.html` form inputs lacked explicit `<label for="...">` associations; Date of Birth input failed label audit. | Converted `.field-label` tags to semantic `<label for="field-ID">` attributes. | `axe-core` passed (0 violations). |
| **UX-005** | **Medium** | Contrast | Warning overlay red `#dc2626` and reason text had borderline contrast against darkened overlays during fade-in transitions. | Updated headers and primary buttons to deep crimson (`#991b1b` / `#7f1d1d`), achieving > 4.5:1 WCAG AA contrast. | Contrast check passed in Playwright. |
| **UX-006** | **Low** | Motion | Warning modal CSS animation did not respect user's system reduced motion preference. | Added `@media (prefers-reduced-motion: reduce)` rule across `sakha.css` and `popup.html`. | Verified via media query simulation. |
| **UX-007** | **High** | Plain Language | Warning copy used fear-inducing words ("DANGER: Potential Scam Detected", "You NEVER need to enter your PIN"). | Rewrote strings to calm, action-first guidance ("Please Stop: This site may be unsafe", "Do not enter your UPI PIN. You only type your PIN to send money"). | Documented in `STRINGS_TO_REVIEW.md` and `i18n.js`. |
| **UX-008** | **Medium** | Edge States | Navigating to internal pages (`chrome://`) caused ambiguous "Masking sensitive details" message. | Added explicit detection for internal browser URLs with friendly message: "Sakha stays idle on internal browser pages. You are safe here." | Tested via `popup.js` logic and string checks. |
| **UX-009** | **Low** | Screen Reader | Warning overlay modal was plain `<div>` without accessible dialog semantics. | Added `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby` in `content_sakha.js`. | Inspected DOM nodes and verified in `test_a11y_suite.js`. |

---

## 3. Automated Test Verification Results

### 3.1 `test_a11y_suite.js` (Playwright + @axe-core/playwright)
* **Popup (`popup.html`):** 0 violations.
  - Language selector: 44px height (Pass)
  - Explain button: 49px height (Pass)
  - Export telemetry link: 44px height (Pass)
* **Options (`settings.html`):** 0 violations.
  - All 15 form inputs and primary buttons satisfy accessible height and label pairing.
* **Modal Overlay (`sakha.css` + `content_sakha.js`):** 0 violations.
  - Dialog role and aria labeling present.
  - Button heights: 59px & 90px (Pass, well exceeds 44px touch target).

### 3.2 `test_telugu_rendering.js`
* **Unicode Glyphs:** 0 broken glyphs / tofu (`\uFFFD`) in `STRINGS.te`.
* **Layout Overflow:** Checked `scrollWidth === clientWidth` on popup with full Telugu copy. Zero horizontal clipping or spill.
* **Persisted Language:** Checked `chrome.storage.local.set({ sakha_lang })` round-trip.

---

## 4. Plain-Language & Tone Audit

The voice of Sakha was adjusted according to three clinical usability guidelines for senior citizens:
1. **Action First:** Begin with the immediate physical action ("Close this page", "Do not share card details", "Take your time").
2. **Calm Explanation:** Never use exclamation marks in scam warnings. Explain why without blaming or scaring the senior.
3. **No Digital Jargon:** Replaced terms like "domain spoofing", "typosquatting", and "APK" with familiar concepts ("fake copy of a real website", "unknown mobile file").

Full catalog of string revisions available in [`submission/STRINGS_TO_REVIEW.md`](file:///Users/sathvikbadam/Desktop/Sakha/sakha-sfic/submission/STRINGS_TO_REVIEW.md).

---

## 5. What Still Needs Human Verification (Pilot Limitations)

Automated testing cannot replace real human usability evaluation. The following items require in-person validation during field trials:
1. **Native-Speaker Linguistic Review:** Telugu and Hindi translations are initial drafts and must be reviewed by native-speaking seniors over age 60 to verify cultural appropriateness and regional vocabulary.
2. **Screen Reader Testing on Physical Devices:** Testing with NVDA (Windows), TalkBack (Android/ChromeOS), and VoiceOver (macOS) on physical hardware with senior citizen participants.
3. **Motor Impairment & Tremor Field Observation:** Confirm that 44px+ touch targets provide adequate comfort for seniors experiencing hand tremors or reduced fine motor coordination.
4. **Usability Protocol:** Conduct sessions using [`pilot/USABILITY_TEST_SCRIPT.md`](file:///Users/sathvikbadam/Desktop/Sakha/sakha-sfic/pilot/USABILITY_TEST_SCRIPT.md).
