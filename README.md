# Sakha (సఖ) — On-Device Digital Safety Companion

> **Seva First Innovation Challenge (SFIC) — Theme: Secure Bharat**  
> An on-device Chrome extension engineered specifically for senior citizens in India. It masks sensitive credentials on-screen, alerts against scams and intimidation tactics with zero jargon in English and Telugu, and never transmits personal data off the device.

---

## Key Features

1. **Deterministic Scam & Typosquatting Defense (100% On-Device)**
   - **Lookalike & Homoglyph Engine:** Detects Cyrillic character substitutions, Punycode tricks (`xn--`), subdomain spoofing (e.g., `sbi.co.in.fake-portal.com`), and low Levenshtein edit distance typosquatting against the official Indian banking & government allowlist.
   - **UPI PIN Traps:** Identifies deceptive *"Enter PIN to receive money / claim cashback"* patterns.
   - **Intimidation & Urgency Language:** Scans for pressure tactics (*"Electricity disconnected tonight"*, *"Account blocked within 24 hours"*, *"SIM deactivation"*) in English, romanized Hindi, and romanized Telugu.
   - **Malicious App Prompts:** Detects forced downloads of Android `.apk` files or remote control software (AnyDesk, QuickSupport).
   - **Senior Citizen Modal Alert:** Acknowledgment-required high-contrast screen with clear options to exit safely.

2. **Universal On-Page Sensitive Data Masking**
   - Automatically detects and blurs:
     - **Aadhaar Numbers** (12-digit, validated with Verhoeff checksum algorithm)
     - **PAN Numbers** (10-character structural regex `[A-Z]{5}[0-9]{4}[A-Z]`)
     - **Debit / Credit Card Numbers** (13–19 digits, Luhn validated)
     - **Bank IFSC Codes** (`[A-Z]{4}0[A-Z0-9]{6}`)
     - **UPI IDs** (`user@bank`)
     - **Phone Numbers** (Indian mobile formats)
   - **Tap-to-Reveal:** Smooth click-to-unblur interaction. Form values remain intact for native submissions.

3. **Plain-Language "Explain" Assistant**
   - Seniors can click *"What is this page asking me?"* / *"ఈ పేజీ నన్ను ఏమి అడుగుతోంది?"* to receive a gentle 2-sentence summary.
   - **Privacy Boundary:** Text sent to the summary assistant is **strictly pre-masked**. No unredacted PII ever leaves the browser.

4. **Field Pilot Tooling & Zero-PII Telemetry**
   - First-run plain-language onboarding consent modal.
   - Local-only pilot interaction logger exportable to clean CSV/JSON for field researchers.

---

## Empirical Benchmark & Evaluation Results

Tested against 60 synthetic pages (30 scam, 30 genuine) divided into 70% Tuning and 30% Hold-out partitions:

| Metric | Tuning Set (42 pages) | Hold-Out Set (18 pages) | Target / Budget |
|---|---|---|---|
| **Scam Detection Rate (Recall)** | **100.00%** (21/21) | **100.00%** (9/9) | > 95% |
| **False-Alarm Rate** | **0.00%** (0/21) | **0.00%** (0/9) | < 5% |
| **Scam Engine Latency** | **0.150 ms** / page | **0.068 ms** / page | < 10 ms |
| **DOM Masking Traversal** | **13.03 ms** / heavy page | **13.03 ms** / heavy page | < 50 ms |

*Full results logged in `evaluation/evaluation_report.json`.*

---

## Installation & Running Locally

### 1. Load Extension in Chrome
1. Open Google Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and select the directory:  
   `/Users/sathvikbadam/Desktop/Sakha/sakha-sfic/extension`
4. The extension **Sakha (సఖ)** will appear in your toolbar.

### Extension Architecture & Build Pipeline
- **Source Files:** The source modules reside in `extension/src/` (`src/popup.js`, `src/i18n.js`, `src/scamDetector.js`, `src/maskEngine.js`, `src/eventLogger.js`, `src/content_sakha.js`).
- **Build Pipeline:** `extension/build.js` uses `esbuild` to bundle ESM entry points into root files loaded by Chrome (`popup.js`, `content.js`, `background.js`, `settings.js`, `offscreen.js`).
- **Rebuilding:**
  ```bash
  cd extension
  node build.js          # single build
  node build.js --watch  # auto-rebuild on file changes
  ```
- **Single Source of Truth:** Do not edit root `extension/popup.js` directly; edit `extension/src/popup.js` and build.

### 2. Run Test Suites & Evaluation
```bash
cd sakha-sfic

# Run Scam Engine Unit Tests
node extension/test_scamDetector.js

# Run Sensitive Masking Engine Tests
node extension/test_maskEngine.js

# Run Privacy Event Logger Tests
node extension/test_eventLogger.js

# Run Low-End Hardware Performance Check
node extension/benchmark_masking_perf.js

# Run Complete Synthetic Benchmark (Tuning & Hold-out sets)
node evaluation/evaluate_scam_detection.js
```

### 3. Optional Local Explain Backend
```bash
cd sakha-sfic/server
npm install
node server.js
```

---

## Repository Documentation Index
- [`PRIVACY.md`](./PRIVACY.md) — Rigorous on-device privacy guarantee and zero-data-leak architecture.
- [`LIMITATIONS.md`](./LIMITATIONS.md) — Operational constraints, unsupported scopes, and edge cases.
- [`DEMO_SCRIPT.md`](./DEMO_SCRIPT.md) — 2.5-minute live presentation walkthrough.
- [`PILOT_QUESTIONNAIRE.md`](./PILOT_QUESTIONNAIRE.md) — Printable 1-5 Likert survey for senior pilot participants.
- [`ALLOWLIST_TO_VERIFY`](./ALLOWLIST_TO_VERIFY) — Official Indian financial, payment, and identity domains (*Status: VERIFY BY HUMAN*).
- [`STRINGS_TO_REVIEW.md`](./STRINGS_TO_REVIEW.md) — Non-English Telugu and Hindi localization strings cataloged for native-speaker audit.
