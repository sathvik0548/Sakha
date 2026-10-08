# THREAT_MODEL.md — Threat Model for Sakha (సఖ)

**System:** Sakha On-Device Senior Safety Companion  
**Architecture:** Chrome Manifest V3 Browser Extension + Optional Local/Cloud Node.js Backend  
**Review Date:** October 2026  
**Auditor:** Adversarial Security Reviewer  
**Classification:** Reviewed, with known operational and architectural boundaries.

---

## 1. System Overview & Trust Boundaries

Sakha is designed to safeguard senior citizens in India against online fraud, coercion, and accidental exposure of sensitive credentials (Aadhaar, PAN, UPI PIN, payment cards).

### Architectural Boundaries:
1. **Untrusted Web Context:** Remote websites navigated to by the user (legitimate, compromised, or phishing pages).
2. **Content Script Context:** Isolated world in which `content.js` runs DOM scanning and overlay injection. Shares DOM with the untrusted web page, but not JavaScript scope.
3. **Extension Core Context:** Extension Service Worker (`background.js`), Offscreen Document (`offscreen.js`), Options (`settings.js`), and Extension Popup (`popup.js`). High privilege; communicates with content script via `chrome.tabs.sendMessage` and `chrome.runtime.onMessage`.
4. **Local Analysis Server:** Node.js Express server running on `http://localhost:3000` (optional VLM reasoning / explain endpoint).

---

## 2. Assets & Sensitivity Classification

| Asset | Description | Sensitivity | Location | Protection Mechanism |
|---|---|---|---|---|
| **Identity Data (PII)** | Aadhaar (12 digits), PAN (10 alphanumeric), Voter ID, Passwords, PINs | **Critical** | DOM text / inputs | Filtered & masked on-device (`maskEngine.js`). Never transmitted off-device. |
| **Payment Credentials** | Full Card numbers, CVV, UPI PIN | **Critical** | Input elements | Luhn validated, blurred via DOM overlays, flagged when requested in suspicious combinations. |
| **Page Content & Form Data** | Rendered DOM text, headings, input labels | **Medium** | Content script memory | Processed in-memory. Only sanitized / masked excerpts sent to `/api/explain`. |
| **Browsing History & URLs** | Specific URLs visited by senior user | **High** | Browser navigation | Content script logs **hostname only** (SEC-001). Full URLs with query parameters are never logged or exported. |
| **Pilot Telemetry Logs** | Action counts, scam trigger events, latencies | **Low** | `chrome.storage.local` | Anonymized event codes only. CSV export has zero PII fields (`eventLogger.js`). |
| **Backend API Keys** | Groq / Gemini / Anthropic API keys | **Critical** | Server `.env` | Stored server-side only; never shipped in client bundle or exposed via endpoints. |

---

## 3. Threat Actors & Capabilities

### Actor 1: Hostile Web Page / Phishing Kit (External Remote)
* **Goal:** Trick senior into entering credentials, harvesting PII, evading detection, or disabling Sakha.
* **Capabilities:**
  * Arbitrary HTML/CSS/JS execution in the page context.
  * Can manipulate DOM, CSS styling, inline scripts, web components (Shadow DOM), iframes, and canvas elements.
  * Cannot access `chrome.*` extension APIs directly due to isolated world architecture.
  * Cannot inspect content script variables or closures.

### Actor 2: Hostile / Malicious Input Data (Adversarial Text)
* **Goal:** Evade regex and pattern classifiers via encoding tricks (homoglyphs, zero-width characters, leet-speak, split DOM nodes).
* **Capabilities:** Crafting deceptive domain names, obfuscated phishing copy, or split payment traps.

### Actor 3: Tampering / Curious User
* **Goal:** Inspect extension state, alter consent settings, export pilot logs.
* **Capabilities:** Access to DevTools console, extension settings page, and downloaded CSV logs.
* **Trust Posture:** The user is the device owner. Protection focuses on accidental misconfiguration and preventing unmasked PII in logs or console.

### Actor 4: Compromised Backend / Network Attacker
* **Goal:** Intercept or inject telemetry / analysis requests.
* **Capabilities:** Eavesdropping on local network or exploiting server endpoints (`/analyze`, `/api/explain`).
* **Mitigation:** Extension host permissions strictly pinned to `localhost:3000`. Content script has zero network access. Backend enforces schema validation and payload size limits.

### Actor 5: Supply Chain / Third-Party Dependencies
* **Goal:** Compromise runtime via vulnerable npm packages.
* **Capabilities:** Malicious code injection in dependencies (`esbuild`, `transformers`, `onnxruntime-node`, `sharp`).
* **Mitigation:** Minimal production runtime dependencies. CSP prevents remote dynamic script injection.

---

## 4. Threat Matrix & Countermeasure Analysis

| Threat ID | Threat Vector | Target Asset | Likelihood | Impact | Current Mitigations & Residual Risk |
|---|---|---|---|---|---|
| **T-01** | Content script logs full URL with PII query params | Browsing Privacy / PII | High | High | **Mitigated (SEC-001):** Content script logs strictly `window.location.hostname`. Full URLs never emitted to console. |
| **T-02** | Rogue message sent to `content.js` `onMessage` | Page Safety State | Medium | Medium | **Mitigated (SEC-002):** Validates `sender?.id === chrome.runtime.id`. Unauthorized contexts rejected. |
| **T-03** | DOM XSS via `innerHTML` in warning/consent modal | Content Script DOM | Low | High | **Mitigated (SEC-003):** Replaced `innerHTML` template literals with explicit DOM construction (`document.createElement`, `textContent`). |
| **T-04** | Detection evasion via Cyrillic homoglyphs / ZWJ | Scam Warning System | High | High | **Mitigated:** `normalizeHomoglyphs()` maps Cyrillic homoglyphs to Latin and strips zero-width joiners/spaces. |
| **T-05** | Detection evasion via sentence breaks / leet-speak | Scam Warning System | Medium | Medium | **Residual Risk (Documented):** Regex requires contiguous phrases; leet-speak (`4cc0unt`) not normalized. Documented in `LIMITATIONS.md`. |
| **T-06** | Hiding phishing copy in Shadow DOM / iframes | Scam Warning System | Medium | Medium | **Architectural Limitation:** Cross-origin iframes inaccessible by design; Shadow DOM not traversed. Documented in `LIMITATIONS.md`. |
| **T-07** | Rendering Aadhaar / card numbers to `<canvas>` | Masking Engine | Low | Medium | **Architectural Limitation:** DOM text masking operates on text nodes and input values. Canvas pixel OCR not active in DOM pass. Documented in `LIMITATIONS.md`. |
| **T-08** | Unauthorized outbound network leak from content script | User Data / PII | High | Critical | **Mitigated:** `content_sakha.js` contains zero `fetch()` or `XMLHttpRequest` calls. Manifest permissions grant zero external hosts. |
| **T-09** | Large payload DoS on backend server | Server Availability | Medium | Medium | **Mitigated:** `express.json({ limit: "20mb" })` and `validateAgentRequestV1` reject oversized or malformed payloads. |
| **T-10** | Backend logging sensitive request bodies / images | PII / Credentials | Medium | High | **Mitigated:** Server logs string length and element counts; does not persist or print raw image buffers or unmasked tokens. |

---

## 5. Security Boundary Summary

1. **On-Device Isolation:** All credential masking (Aadhaar, PAN, Card, UPI) and heuristic scam detection execute entirely on the local device inside the browser content script.
2. **Zero Remote Exfiltration:** Content script has no host permissions and zero network calls.
3. **Verified Posture:** All P0 and high-severity security vectors have been verified with automated unit and evasion tests (`test_security_evasion.js`). Known edge-case evasions are cataloged in `LIMITATIONS.md`.
