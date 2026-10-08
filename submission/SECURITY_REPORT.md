# SECURITY_REPORT.md — Adversarial Security Audit Report

**Product:** Sakha (సఖ) — On-Device Senior Safety Companion  
**Audit Scope:** Local Repository (`sakha-sfic`), Synthetic Data Only  
**Audit Date:** October 2026  
**Status:** **Reviewed, with known operational limits** (Not claiming absolute security)

---

## 1. Executive Summary

An adversarial security audit of Sakha was conducted across 7 threat domains:
1. Threat modeling and boundary verification
2. Chrome Extension Manifest V3 architecture, permissions, and DOM/messaging isolation
3. Detector evasion using synthetic adversarial samples
4. Telemetry and PII leakage inspection (network, console, storage, clipboard)
5. Dependency vulnerability and license audit
6. Backend API validation, rate limiting, and request logging
7. Verification of all critical and high findings

All critical and high severity vulnerabilities discovered during the review have been resolved in the codebase and verified with automated test suites. Architectural evasion limits are explicitly documented in `LIMITATIONS.md`.

---

## 2. Findings Table

| Finding ID | Severity | Category | Description | How to Reproduce | Fix Status |
|---|---|---|---|---|---|
| **SEC-001** | **High** | Data Leakage / Privacy | Content script logged `window.location.href` to browser console on initialization. URLs containing query strings could leak PII or session parameters to the console. | Check `content_sakha.js` startup logs. Inspect console output on navigation. | **FIXED** — Updated to log only `window.location.hostname`. Verified by `test_security_evasion.js`. |
| **SEC-002** | **High** | Message Passing / IPC | `chrome.runtime.onMessage` listener in `content_sakha.js` did not validate sender identity before returning `pageEvaluation` state. | Send cross-context message without verifying `sender?.id`. | **FIXED** — Added strict check `sender?.id === chrome.runtime.id`. Unauthorized origins silently ignored. Verified by `test_security_evasion.js`. |
| **SEC-003** | **Medium** | Injection / DOM XSS | Warning modal and consent modal set DOM content via `innerHTML` template literals interpolating i18n text. Although static strings, pattern lacked defense in depth. | Inspect modal generation code in `content_sakha.js`. | **FIXED** — Replaced `innerHTML` with explicit DOM node construction (`createElement`, `textContent`). Verified by `test_security_evasion.js`. |
| **SEC-004** | **Low** | Information Disclosure | Content script logged the full `pageEvaluation` object to console, exposing internal rule names and trigger lists. | Open DevTools console on an evaluated page. | **FIXED** — Reduced log to evaluation level and hostname (`[Sakha] Page evaluation: danger on example.com`). |
| **SEC-005** | **Medium** | Detector Evasion | Obfuscated phishing copy using non-standard punctuation breaks regex phrase boundaries (`"account. Will be blocked"`). | Run test case with sentence-split urgency phrasing. | **DOCUMENTED** — Documented in `LIMITATIONS.md` Section 5. Heuristic tradeoff to prevent broad false-positive rate. |
| **SEC-006** | **Medium** | Detector Evasion | Zero-width space (U+200B) between `UPI` and `PIN` tokens prevents token matching. | Run `checkUPITraps()` with zero-width characters inside tokens. | **DOCUMENTED** — Documented in `LIMITATIONS.md`. Normalization covers homoglyphs and domain ZWJs; token-level ZWS stripping cataloged for v1.1. |
| **SEC-007** | **Low** | Architectural Scope | Content rendered inside Shadow DOM or cross-origin iframes is inaccessible to single-frame DOM scripts. | Render phishing form inside nested closed shadow root or third-party iframe. | **DOCUMENTED** — Documented in `LIMITATIONS.md`. Browser sandbox boundary prevents cross-frame DOM inspection without invasive permissions. |
| **SEC-008** | **Low** | Supply Chain | Transitive dependencies in `@huggingface/transformers` (`sharp`, `onnxruntime-node`) report audit advisories. | Run `npm audit` in `extension/` and `server/`. | **MITIGATED & DOCUMENTED** — Transitive dev/optional tools only. Production bundle relies on bundled static wasm/scripts. Direct dependencies pinned. |

---

## 3. Detailed Verification Results

### 3.1 Extension Permissions & Isolation
* **Manifest Permissions:** `activeTab`, `scripting`, `tabs`, `offscreen`, `storage`. Minimal necessary set for screen blur overlay, VLM offscreen capture, and user preferences.
* **Host Permissions:** Strictly constrained to `http://localhost:3000/*` and `http://127.0.0.1:3000/*`. No external wildcards (`*://*/*` or remote backend URLs).
* **Content Script Network Activity:** Verified 0 outbound `fetch()` or `XMLHttpRequest` calls in `content_sakha.js`.
* **CSP:** Enforces `"script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"`. No remote script sources permitted.

### 3.2 Detector Evasion Test Results (`extension/test_security_evasion.js`)
* **Total Assertions Run:** 22
* **Passed / Caught:** 22 (100% pass on security regression suite)
* **Homoglyphs & Domains:** Cyrillic `а` normalized to ASCII `a`; zero-width joiner caught; typosquatting on allowlisted roots caught; genuine domains (`sbi.co.in`) correctly passed without false alarms.
* **UPI Traps & Field Combinations:** Detected full card + CVV + PIN combos on untrusted origins; detected UPI PIN-to-receive traps in both forward and reversed sentence orders.

### 3.3 Leakage & Privacy Interception
* **Console Logs:** Hostnames logged; query strings and URL fragments suppressed.
* **Storage:** `chrome.storage.local` pilot logs contain only timestamp, event code, and domain. Zero PII tokens stored.
* **Explain Endpoint:** `popup.js` transmits only masked text to `/api/explain`. Raw form input values are never forwarded.

### 3.4 Dependency & License Inventory
* Direct runtime dependencies use permissive open-source licenses:
  * Extension: `@huggingface/transformers` (Apache-2.0), `@tensorflow/tfjs-*` (Apache-2.0), `esbuild` (MIT), `jsdom` (MIT).
  * Server: `@anthropic-ai/sdk` (MIT), `@google/generative-ai` (Apache-2.0), `cors` (MIT), `dotenv` (BSD-2-Clause), `express` (MIT), `groq-sdk` (Apache-2.0), `sharp` (Apache-2.0).

### 3.5 Backend Security Review (`server/server.js`)
* Payload validation enforced via `validateAgentRequestV1`.
* Body parser limit capped at `20mb` to prevent memory exhaustion DoS.
* CORS headers restricted to extension origins, localhost, and deployed domains.
* Request logging logs byte lengths and counts; raw images and unmasked vault tokens are not dumped to stdout.

---

## 4. Conclusion & Audit Sign-Off

All critical and high security findings identified during the adversarial audit have been remediated. The codebase has been re-evaluated and confirmed passing all unit tests, security evasion checks, and Playwright automated end-to-end flows.

Sakha is rated as: **Reviewed, with known operational limits.**
