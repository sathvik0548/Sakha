# storyboard.md — Video Storyboard & Shot List (2m 30s)

**Project:** Sakha (సఖ) — On-Device Senior Safety Companion  
**Target Duration:** 2 minutes 30 seconds (150 seconds)  
**Format:** 1080p (1920x1080), 30fps  
**Audio:** Narrator Voiceover + Gentle UI Interaction sounds  
**Resolution / Fonts:** Large high-contrast typography, system fonts, clear cursor highlighting  

---

## Shot List & Timeline Breakdown

```
[00:00 - 00:15] Scene 1: Title & Problem Hook (15s)
[00:15 - 00:45] Scene 2: Fake KYC Trap & Scam Warning (30s)
[00:45 - 01:10] Scene 3: Sensitive Data Masking & Tap-to-Reveal (25s)
[01:10 - 01:25] Scene 4: Genuine Page — Zero False Alarms (15s)
[01:25 - 01:45] Scene 5: Senior Explain Feature (20s)
[01:45 - 02:05] Scene 6: Network Privacy Proof (20s)
[01:45 - 02:25] Scene 7: Empirical Results & Verification (20s)
[02:25 - 02:35] Scene 8: Roadmap & Closing Card (10s)
```

---

### Detailed Shot Descriptions

#### Scene 1: Title & Problem Hook (00:00 - 00:15 | 15s)
* **Visual:** Title card on clean slate background (`#0f172a`). Large gold and white typography:  
  **"Sakha (సఖ) — On-Device Senior Safety Companion"**  
  Subtitle: *Protecting India's Elders Against Online Traps, Completely On-Device.*
* **Cut to:** Browser window showing elderly user browsing the web. News headline graphic: "Digital arrest and fake KYC scams target senior citizens".
* **On-Screen Text (OST):** *Over 70% of digital financial fraud targets older citizens via urgency and deceptive lookalikes.*
* **Audio / Action:** Narrator introduces the growing vulnerability seniors face online.

#### Scene 2: Fake KYC Trap & Warning Overlay (00:15 - 00:45 | 30s)
* **Visual:** Browser navigates to local mock URL: `chrome-extension://[id]/demo/fake-kyc.html`.
* **Action:** The page appears with simulated urgency ("Your account will be suspended within 24 hours"). Within **0.068 ms**, Sakha detects lookalike domain and sensitive field combo.
* **Modal Triggers:** High-contrast, bilingual modal appears over the page:  
  `🚨 Please Stop: This Site May Be Unsafe / దయచేసి ఆగండి: ఈ సైట్ సురక్షితం కాకపోవచ్చు`
* **OST:** *Multi-signal check: Lookalike domain + Urgency language + Card/PIN combo.*
* **Action:** Cursor moves to the primary action button: `Leave this page (Recommended) / ఈ పేజీ నుండి వెళ్ళిపోండి` (size: 59px).
* **Audio:** Explain how Sakha detects combinations of threats without waiting for human intervention.

#### Scene 3: Sensitive Data Masking & Tap-to-Reveal (00:45 - 01:10 | 25s)
* **Visual:** Browser navigates to `demo/genuine-service-form.html` (Pension registration).
* **Action:** A mock form containing Aadhaar (`2345 6789 0123`) and PAN numbers loads.
* **On-Screen Effect:** In **13.03 ms**, all sensitive 12-digit Aadhaar and PAN strings are automatically blurred with soft yellow highlight (`.sakha-blurred`).
* **Interactive Demo:** Cursor clicks once on blurred Aadhaar. It unblurs (`.sakha-revealed`) for 3 seconds to let senior verify, then blurs again.
* **OST:** *Deterministic On-Device Blur — Verhoeff Checksum + Luhn Algorithm.*
* **Audio:** Explain shoulder-surfing protection and safe verification.

#### Scene 4: Genuine Page — Zero False Alarms (01:10 - 01:25 | 15s)
* **Visual:** Browser opens `demo/genuine-banking.html` (Allowlisted banking domain).
* **Action:** User logs into safe banking portal. Sakha remains quiet. Extension badge shows green checkmark `✓ This page looks safe to use`.
* **OST:** *0.00% False-Alarm Rate on Hold-Out Evaluation Set.*
* **Audio:** Highlight that Sakha does not interrupt normal everyday banking or civic services.

#### Scene 5: Optional Plain-Language "Explain" (01:25 - 01:45 | 20s)
* **Visual:** User clicks Sakha extension popup (`popup.html`).
* **Action:** User selects Telugu language (`తెలుగు`). The popup updates instantly without broken characters.
* **Action:** User clicks large blue button: `💡 ఈ పేజీ నన్ను ఏమి అడుగుతోంది? (What is this page asking me?)`.
* **Response:** In 2 simple Telugu sentences, plain language summary appears:  
  *"ఈ పేజీ ప్రభుత్వ పెన్షన్ వివరాలను అడుగుతోంది. ఎవరితోనూ పాస్‌వర్డ్ లేదా పిన్ పంచుకోవద్దు."*
* **OST:** *Honest Architecture: Pre-masked text only. Honest fallback when offline.*

#### Scene 6: Privacy Proof — Network Inspector (01:45 - 02:05 | 20s)
* **Visual:** Split screen: Left half browser web page; Right half DevTools Network Panel filtered to `WS / Fetch / XHR`.
* **Action:** Page reloaded, Aadhaar typed into inputs, buttons pressed.
* **Network Tab:** Exactly **0 requests** made during masking and evaluation.
* **OST:** *Zero Bytes Egress. All regexes, Verhoeff checksums, and scam models run in-browser.*
* **Audio:** Point to network log confirming zero PII exfiltration.

#### Scene 7: Empirical Results & Verification (02:05 - 02:25 | 20s)
* **Visual:** Clean summary graphic highlighting empirical benchmark numbers from `submission/RESULTS.md`.
* **Table / Card Graphic:**
  - Scam Detection Recall: **100.00%** (Hold-out set)
  - False Positive Rate: **0.00%** (Hold-out set)
  - Evaluation Latency: **0.068 ms** per page
  - DOM Masking Latency: **13.03 ms** (1,000 DOM nodes)
  - Network Data Leaked: **0 bytes**
* **Audio:** Walk through empirical measurements with citation to `RESULTS.md`.

#### Scene 8: Roadmap & Closing Card (02:25 - 02:35 | 10s)
* **Visual:** Final End Card:
  - **Sakha (సఖ)**
  - *On-Device Digital Safety Companion for Senior Citizens*
  - Repository: `https://github.com/sathvikbadam/Sakha`
  - Pilot Protocol: `pilot/USABILITY_TEST_SCRIPT.md`
  - License: Apache 2.0 / MIT Open Source
* **Audio:** Concluding call to action.
