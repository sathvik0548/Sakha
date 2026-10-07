# STRINGS_TO_REVIEW.md
# Non-English Strings for Native-Speaker Review (Telugu & Hindi)
# Status: Initial Machine/Synthetic Translations — PENDING NATIVE SPEAKER VERIFICATION

The following bilingual strings are used in Sakha (సఖ - డిజిటల్ రక్షకుడు).
Every non-English string must be reviewed by a native speaker before production pilot deployment.

---

## 1. Safety Alerts & Warnings

| Key | English Original | Telugu Translation (`te`) | Hindi Translation (`hi`) | Notes |
|---|---|---|---|---|
| `warning_danger_title` | DANGER: Potential Scam Detected | ప్రమాదం: మోసపూరిత సైట్ కావచ్చు | खतरा: यह वेबसाइट धोखाधड़ी हो सकती है | High-contrast red alert banner |
| `warning_caution_title` | CAUTION: Suspicious Page Activity | జాగ్రత్త: అనుమానాస్పద పేజీ | सावधानी: संदिग्ध गतिविधि | Yellow caution banner |
| `warning_safe_title` | Page Appears Safe | ఈ పేజీ సురక్షితంగా ఉంది | यह पेज सुरक्षित प्रतीत होता है | Informational green state |
| `rule_fake_domain` | This website name looks like a fake version of an official bank or government site. | ఈ వెబ్‌సైట్ పేరు అసలైన బ్యాంక్ లేదా ప్రభుత్వ సైట్‌లా కనిపిస్తున్న నకిలీ సైట్ కావచ్చు. | यह वेबसाइट किसी बैंक या सरकारी पोर्टल का नकली रूप लगती है। | Domain typosquatting / homoglyph detected |
| `rule_pin_to_receive` | Warning: You NEVER need to enter your UPI PIN to receive money. | హెచ్చరిక: డబ్బులు అందుకోవడానికి మీరు ఎప్పుడూ UPI పిన్ (PIN) నమోదు చేయవలసిన అవసరం లేదు. | चेतावनी: पैसे पाने के लिए कभी भी यूपीआई पिन (PIN) दर्ज करने की आवश्यकता नहीं होती। | Enter PIN to receive money trap |
| `rule_sensitive_combo` | Danger: This unofficial site is asking for your card number, CVV, and OTP/PIN together. | ప్రమాదం: ఈ అనధికారిక సైట్ మీ కార్డ్ నంబర్, CVV మరియు OTP ఒకేసారి అడుగుతోంది. | खतरा: यह अनधिकृत साइट आपके कार्ड नंबर, सीवीवी और ओटीपी को एक साथ मांग रही है। | Harvest attempt |
| `rule_urgency_threat` | This page is using urgent or threatening words (like account blocked, SIM deactivated) to rush you. | మీ ఖాతా నిలిపివేయబడుతుందని లేదా సిమ్ రద్దవుతుందని బెదిరించి మిమ్మల్ని తొందరపెడుతున్నారు. | यह पेज आपको डराने या जल्दबाजी करने की कोशिश कर रहा है (खाता बंद होने की धमकी)। | Coercive pressure |
| `rule_apk_download` | Warning: This page is asking to download an unknown app (.apk or remote access app). | హెచ్చరిక: ఈ పేజీ ప్రమాదకరమైన మొబైల్ యాప్‌ను (APK) డౌన్‌లోడ్ చేసుకోమని చెబుతోంది. | चेतावनी: यह पेज अज्ञात ऐप या रिमोट ऐप डाउनलोड करने के लिए कह रहा है। | Malicious APK / AnyDesk / QuickSupport prompt |

---

## 2. Masking & User Actions

| Key | English Original | Telugu Translation (`te`) | Hindi Translation (`hi`) | Notes |
|---|---|---|---|---|
| `masked_badge` | Hidden for your protection | మీ రక్షణ కోసం దాచబడింది | आपकी सुरक्षा के लिए छिपाया गया | Tooltip / label on blurred element |
| `tap_to_reveal` | Tap once to see | చూడటానికి తాకండి | देखने के लिए टैप करें | Button to reveal blurred value |
| `tap_to_hide` | Tap to hide | మళ్ళీ దాచడానికి తాకండి | छिपाने के लिए टैप करें | Button to re-blur value |
| `btn_understand_leave` | Leave this page (Recommended) | ఈ పేజీ నుండి వెళ్ళిపోండి (సిఫార్సు చేయబడింది) | इस पेज से बाहर निकलें (अनुशंसित) | Safe escape action |
| `btn_proceed_anyway` | I understand, continue anyway | నాకు అర్థమైంది, అయినా కొనసాగించండి | मुझे समझ आया, फिर भी जारी रखें | Explicit user override |
| `btn_explain` | What is this page asking me? | ఈ పేజీ నన్ను ఏమి అడుగుతోంది? | यह पेज मुझसे क्या मांग रहा है? | Explain button |

---

## 3. Pilot Consent & Privacy Notice

| Key | English Original | Telugu Translation (`te`) | Hindi Translation (`hi`) | Notes |
|---|---|---|---|---|
| `consent_title` | Welcome to Sakha: Your Digital Safety Companion | సఖ (Sakha) కు స్వాగతం: మీ డిజిటల్ భద్రతా సహాయకుడు | सखा में आपका स्वागत है: आपका डिजिटल सुरक्षा साथी | First-run onboarding modal |
| `consent_body` | Sakha stays completely on your device. Your Aadhaar, cards, and personal details are never sent to any server. | సఖ మీ పరికరంలోనే పనిచేస్తుంది. మీ ఆధార్, బ్యాంక్ కార్డ్ వివరాలు ఏ సర్వర్‌కు పంపబడవు. | सखा पूरी तरह से आपके डिवाइस पर ही काम करता है। आपका आधार, कार्ड विवरण कभी किसी सर्वर पर नहीं भेजे जाते। | Strict local-only privacy pledge |
| `consent_agree` | I Agree & Start Protection | నేను అంగీకరిస్తున్నాను - రక్షణ ప్రారంభించండి | मैं सहमत हूँ - सुरक्षा शुरू करें | Onboarding acceptance button |
