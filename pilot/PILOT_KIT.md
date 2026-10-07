# Sakha Pilot Study Kit
**Project:** Sakha (సఖ) — On-Device Senior Safety Companion  
**Audience:** Field Researchers, Community Coordinators & Evaluators  

This kit contains all instruments required to conduct a structured, ethical pilot with senior citizens (age 55+) across India.

---

## Index of Pilot Materials
1. **Participant Consent Form (English & Telugu)**: Plain-language assurance of zero-data collection.
2. **Evaluation Run Sheet**: 3 standardized experimental browsing tasks.
3. **Pilot Data Sheet Template**: Structured observation log.
4. **Post-Evaluation Questionnaire**: 1-5 Likert scale measuring trust and comprehension.
5. **Log Processing Script**: `analyze_pilot_logs.js` to aggregate downloaded telemetry CSV files.

---

## 1. Participant Consent Form

### English
> **Welcome to the Sakha Study**  
> We are testing a digital safety tool designed to help older adults browse and transact safely.  
> - **Privacy Guarantee:** This tool runs completely on your device. It does not record your name, passwords, bank numbers, or browsing history.  
> - **Participation is Voluntary:** You may pause or stop at any time.  
> - **Signature / Agreement:** I understand and agree to participate in this evaluation.  
>   Name: `_______________________` Signature/Mark: `_______________________` Date: `___________`

### తెలుగు (Telugu)
> **సఖ (Sakha) అధ్యయనానికి స్వాగతం**  
> పెద్దవారు సురక్షితంగా ఇంటర్నెట్ మరియు డిజిటల్ చెల్లింపులు ఉపయోగించడంలో సహాయపడే ఒక భద్రతా సాధనాన్ని మేము పరీక్షిస్తున్నాము.  
> - **గోప్యతా హామీ:** ఈ సాధనం పూర్తిగా మీ కంప్యూటర్‌లోనే పనిచేస్తుంది. ఇది మీ పేరు, పాస్‌వర్డ్‌లు, బ్యాంక్ నంబర్‌లు లేదా బ్రౌజింగ్ హిస్టరీని ఏ సర్వర్‌కు పంపదు.  
> - **స్వచ్ఛంద భాగస్వామ్యం:** మీరు ఎప్పుడైనా ఈ పరీక్షను ఆపవచ్చు.  
> - **సమ్మతి:** నేను అర్థం చేసుకున్నాను మరియు ఈ అధ్యయనంలో పాల్గొనడానికి అంగీకరిస్తున్నాను.  
>   పేరు: `_______________________` సంతకం/గుర్తు: `_______________________` తేదీ: `___________`

---

## 2. Evaluation Run Sheet (3 Standard Tasks)

| Task # | Scenario / URL | Expected Behavior | Observer Check |
|---|---|---|---|
| **Task 1** | **Fictional Fake KYC Page**<br>`evaluation/data/tuning/scam_02.html` | High-contrast danger modal appears immediately warning about credential harvesting & urgency. | [ ] Participant noticed warning<br>[ ] Read reason in English/Telugu<br>[ ] Chose to exit or acknowledged danger |
| **Task 2** | **Fictional UPI Collect Page**<br>`evaluation/data/tuning/scam_03.html` | Danger warning appears: *"Warning: You NEVER need to enter your UPI PIN to receive money."* | [ ] Participant understood PIN warning<br>[ ] Did not attempt to enter PIN |
| **Task 3** | **Genuine Community Form**<br>`evaluation/data/tuning/genuine_02.html` | No scam warning. Aadhaar and Phone numbers appear gently blurred. Participant taps to reveal. | [ ] Participant saw blurred numbers<br>[ ] Successfully tapped to reveal<br>[ ] Felt confident in form safety |

---

## 3. Pilot Data Sheet Template

| Participant ID | Age | Native Language | Task 1 Outcome (Stopped / Overrode) | Task 2 Outcome (Understood UPI Trap) | Task 3 Masking Rating (1-5) | Notes |
|---|---|---|---|---|---|---|
| `P01` | 64 | Telugu | Stopped safely | Stopped safely | 5 / 5 | Liked Telugu warning |
| `P02` | 71 | English | Stopped safely | Stopped safely | 4 / 5 | Tapped to reveal easily |
| `P03` | 68 | Telugu | Stopped safely | Stopped safely | 5 / 5 | Reassured by zero jargon |
