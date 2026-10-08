# USABILITY_TEST_SCRIPT.md — Senior Citizen Usability Protocol

**Project:** Sakha (సఖ) Digital Safety Companion  
**Target Participants:** Senior citizens (aged 55+) with varied digital literacy (Telugu / Hindi / English)  
**Session Length:** 30–45 minutes  
**Format:** In-person, one-on-one, unhurried, think-aloud format  
**Facilitator Role:** Neutral, patient listener; observe actions rather than instructing.

---

## 1. Facilitator Principles & Senior Citizen Protocol

1. **Comfortable Pace:** Never rush the participant. Allow ample time to read screen text and process layout changes.
2. **Consent & Agency:** 
   - Remind the participant that **they can pause or stop at any time**.
   - Emphasize: *"We are testing this tool to see if it helps you; we are not testing your abilities or intelligence."*
3. **No Leading Prompts:** Avoid saying "Do you see the red warning?" or "Click leave now." Instead, ask neutral questions: *"What are you noticing on the screen right now?"* and *"What would you normally choose to do here?"*
4. **Physical Comfort:** Ensure screen brightness and chair height are comfortable. Offer reading glasses if needed.
5. **Language Flexibility:** Conduct the session in the participant's preferred mother tongue (Telugu, Hindi, or English).

---

## 2. Session Setup & Introduction (5 Minutes)

### Facilitator Script (English / Telugu):
> **English:**  
> *"Hello! Thank you for spending time with us today. Many websites today can be confusing, and sometimes fake websites trick people into losing money. We have created a helper tool called 'Sakha' that sits quietly inside the computer browser to help keep you safe.  
> Today, we would love your honest feedback. You cannot do anything wrong here. If something is confusing or hard to read, that means our tool needs improvement. You may stop whenever you wish. Are you comfortable starting?"*

> **Telugu (తెలుగు):**  
> *"నమస్కారం! ఈ రోజు మాకు మీ సమయాన్ని ఇచ్చినందుకు ధన్యవాదాలు. ఈ రోజుల్లో ఇంటర్నెట్‌లో చాలా వెబ్‌సైట్లు గందరగోళంగా ఉంటున్నాయి. కొన్ని నకిలీ సైట్లు మోసం చేయడానికి ప్రయత్నిస్తుంటాయి. మీరు సురక్షితంగా ఉండటానికి సహాయపడే 'సఖ' అనే సహాయక టూల్‌ను తయారు చేశాము.  
> ఈ రోజు మేము మీ అనుభవాన్ని తెలుసుకోవాలనుకుంటున్నాము. ఇక్కడ మీరు ఎలాంటి తప్పు చేయరు. ఏదైనా అర్థం కాకపోయినా లేదా చదవడానికి కష్టంగా అనిపించినా అది మా టూల్ లోపమే. మీకు ఎప్పుడు అలసట అనిపించినా ఆపివేయవచ్చు. మనం ప్రారంభిద్దామా?"*

---

## 3. Evaluation Tasks

### Task 1: First Experience & Language Choice
* **Scenario:** The browser opens with Sakha installed.
* **Goal:** Observe whether the participant notices the language selector, changes it to their preferred language (Telugu or Hindi), and understands the first-run message.
* **Prompt:** *"Imagine you just sat down at this computer. Could you show me what language you would prefer to read this in?"*
* **Success Criteria:** 
  - Participant locates the language selector in under 60 seconds without coaching.
  - Text updates cleanly to Telugu/Hindi.
  - Participant understands the on-device consent statement.

---

### Task 2: Encountering an Unsafe Website
* **Scenario:** The facilitator opens the mock deceptive website (`demo/fake-kyc.html` or `demo/upi-collect-trap.html`).
* **Goal:** Observe participant's reaction to the warning overlay, comprehension of the calm plain-language message, and choice of button.
* **Prompt:** *"Take a look at what just appeared on your screen. In your own words, what is happening here, and what would you choose to do next?"*
* **Success Criteria:**
  - Participant reads the warning without panic.
  - Identifies that the page is suspicious or asking for improper details (e.g., UPI PIN or fake domain).
  - Chooses the recommended safe action ("Leave this page" / "ఈ పేజీ నుండి వెళ్ళిపోండి") without hesitation.

---

### Task 3: Understanding Masked Information (Aadhaar / Card)
* **Scenario:** The facilitator navigates to a mock form with blurred Aadhaar/PAN fields.
* **Goal:** Observe whether the participant understands why numbers are blurred and can reveal/hide them comfortably.
* **Prompt:** *"Looking at these boxes on the page, what do you notice about the numbers? How would you look at your number if you needed to verify it?"*
* **Success Criteria:**
  - Participant recognizes that sensitive details are hidden for privacy.
  - Taps once to reveal, and taps again to hide.
  - Expresses comfort that their private details are protected from people glancing at their screen.

---

## 4. Post-Task Think-Aloud & Debrief Questions
1. *"How easy or difficult was it to read the letters on the screen?"*
2. *"Did any message make you feel scared, or did it feel calm and helpful?"*
3. *"Were the buttons large enough to click comfortably?"*
4. *"If this tool were on your home computer, would you feel safer browsing?"*

---

## 5. Usability Observation & Metric Sheet

| Participant ID | Age | Primary Language | Task 1: Language & Consent (Pass/Need Help/Fail) | Task 2: Warning Comprehension (Understood / Unclear) | Task 2: Action Choice (Left / Stayed) | Task 3: Masking Tap (Natural / Confused) | Legibility Rating (1–5) | Calmness Rating (1–5) | Observer Notes / Quotes |
|---|---|---|---|---|---|---|---|---|---|
| P-01 | | | | | | | | | |
| P-02 | | | | | | | | | |
| P-03 | | | | | | | | | |
| P-04 | | | | | | | | | |
| P-05 | | | | | | | | | |

---

## 6. Facilitator Notes for Working with Senior Citizens
* **Patience:** Wait at least 15 seconds after asking a question before speaking. Give the senior time to think.
* **Never touch the mouse/keyboard:** Let the participant maintain physical control of the device.
* **Affirmation:** Periodically say: *"Thank you, your feedback is very helpful to us."*
