# STRINGS_TO_REVIEW.md — Sakha String Resource Review Log

**Status:** Under Native Speaker Review (Draft v1.2)  
**Notice:** Translations provided below are initial plain-language drafts designed for senior citizens. They are **not yet certified by certified native linguistic reviewers**. Human field validation is required during regional pilot deployment.

---

## 1. Design & Plain Language Guidelines
1. **Calm & Action-First:** Tell the user what step to take first, rather than inducing panic with red-flag fear words.
2. **Short, Clear Sentences:** Avoid compound bureaucratic phrasing.
3. **Zero Jargon:** No technical terms (avoid terms like "Punycode", "typosquatting", "DOM injection", "phishing kit", "APK payload").
4. **Consistent Action Tone:** Buttons and warnings always prioritize leaving or pausing safely.

---

## 2. Strings Catalog & Rewrite Diff

### Core Warnings & Actions

| String Key | Previous English (Alarmist / Jargon) | Rewritten Plain English (Action-First, Calm) | Telugu Draft (తెలుగు) | Hindi Draft (हिन्दी) |
|---|---|---|---|---|
| `warning_danger_title` | DANGER: Potential Scam Detected | Please Stop: This site may be unsafe | దయచేసి ఆగండి: ఈ సైట్ సురక్షితం కాకపోవచ్చు | कृपया रुकें: यह साइट असुरक्षित हो सकती है |
| `warning_caution_title` | CAUTION: Suspicious Page Activity | Check Carefully: Something looks unusual | జాగ్రత్తగా చూడండి: ఇక్కడ ఏదో తేడాగా ఉంది | ध्यान से देखें: कुछ असामान्य लग रहा है |
| `warning_safe_title` | Page Appears Safe | This page looks safe to use | ఈ పేజీ ఉపయోగించడానికి సురక్షితంగా ఉంది | यह पेज उपयोग के लिए सुरक्षित लगता है |
| `rule_fake_domain` | This website name looks like a fake version of an official bank or government site. | This web address looks like a fake copy of a real website. Close this page. | ఈ వెబ్‌సైట్ చిరునామా అసలైన సైట్ నకిలీ కాపీలా ఉంది. ఈ పేజీని మూసివేయండి. | यह वेब पता किसी असली वेबसाइट की नकली कॉपी लगता है। इस पेज को बंद करें। |
| `rule_pin_to_receive` | Warning: You NEVER need to enter your UPI PIN to receive money. | Do not enter your UPI PIN. You only type your PIN to send money, never to receive it. | మీ UPI పిన్ నమోదు చేయవద్దు. డబ్బు పంపడానికి మాత్రమే పిన్ కావాలి, తీసుకోవడానికి కాదు. | अपना यूपीआई पिन न डालें। पिन केवल पैसे भेजने के लिए होता है, पाने के लिए कभी नहीं। |
| `rule_sensitive_combo` | Danger: This unofficial site is asking for your card number, CVV, and OTP/PIN together. | Do not share card details here. This unofficial page is asking for your card number, CVV, and PIN. | ఇక్కడ మీ కార్డ్ వివరాలు ఇవ్వవద్దు. ఈ అనధికారిక పేజీ కార్డ్ నంబర్, CVV మరియు పిన్ అడుగుతోంది. | यहाँ कार्ड विवरण न दें। यह अनधिकृत पेज आपके कार्ड का नंबर, सीवीवी और पिन मांग रहा है। |
| `rule_urgency_threat` | This page is using urgent or threatening words (like account blocked, SIM deactivated) to rush you. | Take your time. Real banks do not threaten to block your account immediately. | కంగారు పడవద్దు. అసలైన బ్యాంకులు ఖాతా వెంటనే ఆగిపోతుందని బెదిరించవు. | जल्दबाजी न करें। असली बैंक खाता तुरंत बंद करने की धमकी नहीं देते। |
| `rule_apk_download` | Warning: This page is asking to download an unknown app (.apk or remote access app). | Do not install this download. This page is asking you to install an unknown mobile file. | ఈ ఫైల్ ఇన్‌స్టాల్ చేయవద్దు. ఈ పేజీ తెలియని మొబైల్ ఫైల్ డౌన్‌లోడ్ చేసుకోమని చెబుతోంది. | इस फ़ाइल को इंस्टॉल न करें। यह पेज अनजान मोबाइल फ़ाइल डाउनलोड करने को कह रहा है। |

---

### Edge State & Operational Strings

| String Key | Rewritten Plain English | Telugu Draft (తెలుగు) | Hindi Draft (हिन्दी) |
|---|---|---|---|
| `state_unsupported_page` | Sakha stays idle on internal browser pages (`chrome://`). You are safe here. | బ్రౌజర్ అంతర్గత పేజీలలో సఖ విశ్రాంతిగా ఉంటుంది (`chrome://`). ఇక్కడ మీరు సురక్షితంగా ఉన్నారు. | ब्राउज़र के आंतरिक पेजों पर सखा निष्क्रिय रहता है (`chrome://`)। आप यहाँ सुरक्षित हैं। |
| `state_page_loading` | Checking this page for safety... | ఈ పేజీ భద్రతను పరిశీలిస్తున్నాము... | इस पेज की सुरक्षा जाँची जा रही है... |
| `state_offline` | You are offline. Sakha's on-device protection continues protecting your screen. | మీరు ఆఫ్‌లైన్‌లో ఉన్నారు. సఖ మీ పరికరంలోనే రక్షణ కొనసాగిస్తోంది. | आप ऑफलाइन हैं। सखा आपके डिवाइस पर सुरक्षा जारी रख रहा है। |
| `explain_offline` | Helper is resting. The optional explanation helper needs the local assistant server running. Your on-device safety remains active. | సహాయకుడు విశ్రాంతిలో ఉన్నారు. ఈ అదనపు వివరణకు స్థానిక సహాయక సర్వర్ అవసరం. మీ పరికర భద్రత ఎల్లప్పుడూ పనిచేస్తుంది. | सहायक अभी उपलब्ध नहीं है। इस अतिरिक्त व्याख्या के लिए स्थानीय सर्वर चाहिए। आपकी डिवाइस सुरक्षा हमेशा सक्रिय है। |

---

## 3. Human Review Checklist (For Pilot Evaluators)
- [ ] Review all Telugu strings with a native Telugu speaker over age 60.
- [ ] Review all Hindi strings with a native Hindi speaker over age 60.
- [ ] Validate that complex compound ligatures (e.g., `క్ష`, `ణ్య`, `ర్థ`) render without splitting across all operating system fonts.
