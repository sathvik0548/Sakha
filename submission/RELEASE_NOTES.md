# RELEASE_NOTES.md — Sakha v1.0-sfic

**Release Tag:** `v1.0-sfic`  
**Date:** October 2026  
**Type:** Controlled Pilot Release — Seva First Innovation Challenge, Theme: Secure Bharat  
**Commit:** `ca55fbe`

> **Freeze:** This release is feature-frozen. Only bug fixes, documentation corrections, and the two P2 items below are permitted without a new audit cycle.

---

## Features Included (Complete)

| Feature | Status | Notes |
|---|---|---|
| Scam & typosquatting detection (lookalike domain, UPI PIN trap, urgency lang, APK/RAT) | ✅ Complete | 100% recall on 60 synthetic pages |
| On-device sensitive data masking (Aadhaar/Verhoeff, PAN, Card/Luhn, IFSC, UPI, Mobile) | ✅ Complete | <20ms on 1,000-node DOM |
| High-contrast bilingual warning modal (EN + TE) | ✅ Complete | WCAG AA colors, acknowledgment-required |
| First-run consent modal (EN + TE + HI; gates protection) | ✅ Complete | Persisted via chrome.storage.local |
| Zero-PII pilot telemetry & CSV export | ✅ Complete | Verified: 0 network calls during masking/detection |
| Demo mode: 4 offline synthetic pages, fictional names, DEMO banner | ✅ Complete | 6/6 Playwright tests pass |
| i18n: English, Telugu, Hindi | ✅ Complete | Native speaker review pending (P2) |
| Empirical evaluation harness (60 synthetic pages, tuning/hold-out split) | ✅ Complete | Reproducible from clone |
| Pilot toolkit (consent form, questionnaire, run sheet, analysis script) | ✅ Complete | No field study conducted yet |

## Features as Prototype (Partial — Clearly Labelled)

| Feature | Status | Limitation |
|---|---|---|
| Plain-language Explain Assistant | ⚠️ Prototype | Requires optional local Node.js server. When offline, shows honest "Explain is offline" message. No canned text. |

---

## Known Issues & Open Items

| ID | Issue | Priority | Effort |
|---|---|---|---|
| P2-F6 | Telugu/Hindi strings not yet reviewed by native speakers | P2 | M — human review needed |
| P2-F2 | `offscreen` permission retained from legacy code; could be pruned | P2 | S — 1-line manifest edit |
| R2 | `npm run test:privacy` requires `cd extension && npm install` before running; README now documents this | Low | Fixed in README |

---

## How to Run

### Prerequisites
- Google Chrome (any recent version)
- Node.js ≥ 18

### 1. Load the Extension
```bash
# Option A: From ZIP
unzip submission/sakha_extension.zip -d sakha_unpacked
# Load sakha_unpacked/ in Chrome > Extensions > Load unpacked

# Option B: From source
# Load extension/ folder directly in Chrome > Extensions > Load unpacked
```

### 2. Run Tests & Evaluation
```bash
npm install                          # root deps (Playwright)
cd extension && npm install && cd .. # extension deps (jsdom)
npm test                             # all suites: unit + privacy + Playwright
node evaluation/evaluate_scam_detection.js  # fresh detection benchmark
```

**Expected results:**
- `npm test`: all 6 Playwright + 3 unit suites pass
- Evaluation: 100% recall, 0% FAR on 60 synthetic pages

### 3. Demo Mode
1. Load extension in Chrome
2. Click extension icon → Settings ⚙
3. Enable Demo Mode → Run Demo Scenario
4. Four tabs open; Sakha alerts on the two scam pages

---

## Audit Reference
- Full feature verification: `submission/FINAL_AUDIT.md`
- Fix history: `submission/CHANGES.md`
- Prior feature audit: `submission/FEATURE_AUDIT.md`
