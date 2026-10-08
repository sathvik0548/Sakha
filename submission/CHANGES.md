# CHANGES.md — Post-Audit Fix Log

All fixes applied after the independent feature audit (`FEATURE_AUDIT.md`). Each entry: what changed, why, how to verify, commit hash.

---

## P0 Fixes (Critical)

### Fix 1 — Bundle Drift: Rebuild popup.js (F5, F16)
- **What:** Ran `cd extension && node build.js` to rebundle `extension/popup.js` with the honest offline notice (`t("explain_offline", lang)`) instead of the stale canned fallback. Repackaged `submission/sakha_extension.zip`.
- **Why:** The bundled `popup.js` served to Chrome was outdated; the Explain feature showed hard-coded canned text instead of the localized offline notice.
- **Verify:** `grep -c "explain_offline" extension/popup.js` → should be ≥ 1. Load unpacked extension, click Explain while offline → "This explanation works fully offline" (or Telugu/Hindi equivalent) appears.
- **Commit:** `1e6ae57`

### Fix 2 — Demo Page Hardening: Fictional Banks + DEMO Banner (F10)
- **What:** Replaced real bank names with fictional ones (`State Bank of India` → `Apex State Bank`; `HDFC Bank` → `Horizon Trust Bank`). Added sticky `⚠️ DEMO — NOT A REAL SITE` warning banner to all 4 demo HTML pages. Updated `demo_walkthrough.test.js` assertions to match.
- **Why:** Real bank names violate trademark and mislead seniors during demos; missing banner made pages indistinguishable from real sites.
- **Verify:** `npx playwright test demo_walkthrough.test.js` → 6/6 pass. Open any demo HTML in browser → sticky banner visible at top.
- **Commit:** `d4f73e3`

---

## P1 Fixes (Important)

### Fix 3 — Standard npm test Alias (F13)
- **What:** Added `"test": "npm run test:all"` to root `package.json`.
- **Why:** Evaluators typing `npm test` received an npm error; only `npm run test:all` worked.
- **Verify:** `npm test` at repo root runs unit tests, privacy test, and Playwright suite. All pass.
- **Commit:** `c0b611b`

### Fix 4 — First-Run Consent Modal Wired (F8)
- **What:** Added `renderConsentModal()` function to `extension/src/content_sakha.js`. On every page load, content script reads `sakha_consent_accepted` from `chrome.storage.local`; if unset, renders the bilingual (EN + user language) consent modal using existing `i18n.js` strings (`consent_title`, `consent_body`, `consent_agree`). On user agreement, persists flag, logs `CONSENT_GIVEN` event, then calls `initializeSakha()`. Rebuilt bundle and repackaged zip.
- **Why:** Consent strings existed in `i18n.js` but no browser runtime ever displayed them. Audit rated F8 Partial with Medium risk.
- **Verify:** Load unpacked extension in Chrome → on first tab open, bilingual consent card appears. Click agree → modal disappears, protection starts. Open new tab → modal absent (flag persisted). `chrome.storage.local` shows `{sakha_consent_accepted: true}`.
- **Commit:** `a2fbaf9`

### Fix 5 — Playwright Screenshots Saved to submission/screenshots/ (F18)
- **What:** Added `page.screenshot({ path: ..., fullPage: true })` after all assertions in each of the 4 scenario tests in `demo_walkthrough.test.js`. Screenshots saved as `submission/screenshots/<scenario-id>.png`.
- **Why:** Judges who do not run code had no visual evidence; audit rated F18 as missing screenshots.
- **Verify:** `npx playwright test demo_walkthrough.test.js` → 6/6 pass → `ls submission/screenshots/` shows `fake-kyc.png`, `upi-collect-trap.png`, `genuine-service-form.png`, `genuine-banking.png`.
- **Commit:** `3d377bd`

---

## Remaining Open Items (P2 — Not Addressed)

| Item | Reason Not Fixed |
|---|---|
| F6: Native speaker Telugu/Hindi verification | Requires human native speaker engagement; cannot be completed programmatically. Marked `[PENDING NATIVE SPEAKER VERIFICATION]` in `STRINGS_TO_REVIEW.md`. |
| F2: Prune `offscreen` permission | Low risk. Functionality intact. Scheduled for v1.2 after field pilot. |
