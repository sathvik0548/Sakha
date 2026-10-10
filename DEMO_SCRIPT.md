# DEMO_SCRIPT.md — 3-Minute Live Demonstration Walkthrough

**Title:** Sakha (సఖ) — On-Device Digital Safety Companion for Senior Citizens  
**Theme:** Seva First Innovation Challenge (Secure Bharat)  
**Target Duration:** ~2 Minutes 30 Seconds  

---

### Step 1: Introduction (0:00 - 0:30)
- **Speaker:**  
  *"Namaste. Today we present Sakha (meaning 'companion') — an on-device digital safety companion engineered specifically for senior citizens in Bharat.*  
  *Seniors are disproportionately targeted by electricity bill threats, fake KYC update links, and UPI collect traps. Sakha acts as an attentive guardian right inside their browser, with zero personal data ever leaving the device."*

---

### Step 2: The Attack — Fake KYC & Urgency Scam (0:30 - 1:15)
- **Action:**  
  Open synthetic demo scam page in browser:  
  `evaluation/data/tuning/scam_01.html` or `evaluation/data/tuning/scam_02.html`
- **Visual:**  
  A prominent high-contrast modal instantly covers the screen with large bilingual red banners:
  - **English:** `DANGER: Potential Scam Detected`
  - **Telugu:** `ప్రమాదం: మోసపూరిత సైట్ కావచ్చు`
  - **Plain Reason:** *"This page is using urgent or threatening words (like account blocked, SIM deactivated) to rush you."*
- **Action:**  
  Point out the two large accessible buttons:
  - `🛡️ Leave this page (Recommended)`
  - `I understand, continue anyway`
- **Speaker:**  
  *"Notice how Sakha doesn't use cryptic security jargon like 'SSL Mismatch' or 'Phishing Heuristic'. It tells the senior citizen in plain English and Telugu exactly what is happening: 'Someone is rushing you to take urgent action.'"*

---

### Step 3: Sensitive Data Shield — On-Page Blur Masking (1:15 - 2:00)
- **Action:**  
  Click "I understand, continue anyway", or navigate to a genuine checkout page:  
  `evaluation/data/tuning/genuine_01.html`
- **Visual:**  
  Show that card numbers, Aadhaar numbers, and phone numbers are automatically blurred out on the webpage with a gentle gray privacy shield.
- **Action:**  
  Hover over the masked Aadhaar number: tooltip displays *"Hidden for your protection"*.  
  Click the blurred number: it smoothly reveals with a high-contrast yellow badge (*"Tap once to see"*). Click again: it hides.
- **Speaker:**  
  *"Whether shopping or reviewing account details, Sakha protects against shoulder surfers and screen-recording exploits. The numbers are blurred on screen, yet forms submit normally without breaking the website."*

---

### Step 4: Senior-Friendly "Explain" & Local Pilot Telemetry (2:00 - 2:30)
- **Action:**  
  Click the Sakha extension icon in Chrome toolbar.  
  Toggle language between **English** and **తెలుగు**.  
  Click **"What is this page asking me?" / "ఈ పేజీ నన్ను ఏమి అడుగుతోంది?"**
- **Visual:**  
  A clear 2-sentence summary appears explaining the form without technical complexity.  
  Click **"Download pilot log (no personal fields recorded)"** — download initiates instantly with zero personal fields or query parameters.
- **Speaker:**  
  *"Everything you just witnessed ran locally on this laptop with sub-millisecond latency. No cloud dependencies, no surveillance, pure on-device protection for a Secure Bharat."*

---

## Shot List for Video Recording (2-3 Minutes)

| Shot # | Timestamp | Visual Frame / Action | Audio / Narration |
|---|---|---|---|
| **Shot 1** | 0:00 - 0:25 | Title card: *Sakha (సఖ)*, then Chrome toolbar showing Sakha extension icon. | Introduction to the challenge: vulnerability of elderly citizens to digital fraud. |
| **Shot 2** | 0:25 - 0:55 | Browser navigates to `scam_01.html`. Fullscreen modal appears instantly with red accent and Telugu title. | Demonstrating the lookalike/threat warning modal. Emphasizing zero jargon. |
| **Shot 3** | 0:55 - 1:20 | Cursor hovers over "Leave this page" button, then clicks "I understand" to demonstrate override. | Explain senior choice: safe default escape vs. informed override. |
| **Shot 4** | 1:20 - 1:50 | Webpage inputs and text: Aadhaar (`XXXX XXXX 5674`) and Card (`•••• •••• •••• 9014`) blurred. Click to unblur, click to re-blur. | Showcase on-device blur masking and tap-to-reveal privacy shield. |
| **Shot 5** | 1:50 - 2:15 | Popup clicked. Language switched from English to Telugu. "Explain page" button clicked. | Explain feature providing gentle guidance in native language. |
| **Shot 6** | 2:15 - 2:35 | "Download Pilot Telemetry" clicked; CSV file opens showing timestamp, domain, 0 PII. | Closing pledge: 100% on-device privacy guarantee for Secure Bharat. |
