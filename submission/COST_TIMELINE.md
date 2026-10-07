# COST_TIMELINE.md — Deployment Economics & Roadmap

> **Note to Author:** All cost assumptions and commercial pricing figures below are marked with **`[VERIFY]`** where you must confirm and supply current quotes.

---

## 1. Operating Economics (Zero Infrastructure Cost)

Because Sakha's detection, masking, and verification engines are **100% on-device**, ongoing operational server costs are practically zero:

| Operational Component | Cost Per User / Month | Scaling Architecture |
|---|---|---|
| **Domain Lookalike & Spoof Detection** | ₹0.00 | Local in-browser client compute |
| **Aadhaar, PAN & Card Masking** | ₹0.00 | Local DOM CSS & regex parsing |
| **Pilot Telemetry & Event Logging** | ₹0.00 | Local `chrome.storage.local` |
| **Optional Explain Server** (Local Mode) | ₹0.00 | Local Ollama running locally |
| **Optional Explain Server** (Cloud Mode) | **₹0.05 - ₹0.15 [VERIFY: Cloud provider token pricing]** | Pay-as-you-go serverless API |

---

## 2. 8-Day Competition Build Timeline (Day Budget)

- **Day 1 (Completed):** Audit, repo isolation, architectural plan, environment configuration.
- **Day 2 (Completed):** Deterministic scam warning engine with lookalike domain heuristics, UPI traps, and threat patterns.
- **Day 3 (Completed):** 60-page synthetic evaluation dataset generator and automated benchmarking harness.
- **Day 4 (Completed):** Live on-page sensitive data masking engine, senior-friendly accessible UI, and Telugu i18n module.
- **Day 5 (Completed):** Low-end hardware stress benchmark and optional Explain backend endpoint.
- **Day 6–7 (Completed):** Pilot evaluation toolkit, field questionnaire, privacy leak verification suite.
- **Day 8 (Buffer & Packaging):** Final audit, clean-room packaging, and documentation bundle.

---

## 3. Post-Hackathon Roadmap

| Phase | Milestone | Estimated Duration |
|---|---|---|
| **Phase 1** | Verification of Indian banking allowlist with NPCI/CERT-In open data **[VERIFY: Official data partnership]** | 2 Weeks |
| **Phase 2** | Native speaker validation of Telugu, Hindi, Tamil, and Marathi strings | 3 Weeks |
| **Phase 3** | Chrome Web Store & Edge Add-ons Store publication **[VERIFY: Developer account registration fee ~$5]** | 1 Week |
| **Phase 4** | Field pilot study across 5 senior community living centers (50 participants) | 4 Weeks |
