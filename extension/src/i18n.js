/**
 * i18n.js — Sakha Bilingual & Trilingual String Resource File
 *
 * Supported locales: 'en' (English), 'te' (Telugu - తెలుగు), 'hi' (Hindi - हिन्दी)
 * All non-English strings are documented in STRINGS_TO_REVIEW.md for native-speaker audit.
 */

export const STRINGS = {
  en: {
    app_name: "Sakha",
    app_subtitle: "Your Digital Safety Companion",
    warning_danger_title: "DANGER: Potential Scam Detected",
    warning_caution_title: "CAUTION: Suspicious Page Activity",
    warning_safe_title: "Page Appears Safe",
    
    rule_fake_domain: "This website name looks like a fake version of an official bank or government site.",
    rule_pin_to_receive: "Warning: You NEVER need to enter your UPI PIN to receive money.",
    rule_sensitive_combo: "Danger: This unofficial site is asking for your card number, CVV, and OTP/PIN together.",
    rule_urgency_threat: "This page is using urgent or threatening words (like account blocked, SIM deactivated) to rush you.",
    rule_apk_download: "Warning: This page is asking to download an unknown app (.apk or remote access app).",
    
    masked_badge: "Hidden for your protection",
    tap_to_reveal: "Tap once to see",
    tap_to_hide: "Tap to hide",
    btn_understand_leave: "Leave this page (Recommended)",
    btn_proceed_anyway: "I understand, continue anyway",
    btn_explain: "What is this page asking me?",
    
    consent_title: "Welcome to Sakha: Your Digital Safety Companion",
    consent_body: "Sakha stays completely on your device. Your Aadhaar, cards, and personal details are never sent to any server.",
    consent_agree: "I Agree & Start Protection",
    
    loading_explanation: "Analyzing what this page is asking safely...",
    explain_error: "Could not explain this page at this time.",
    explain_offline: "Explain is offline. The optional explain feature needs the local Sakha server running (see README). No content was generated.",
    explain_safe_summary: "Page Summary:"
  },
  
  te: {
    app_name: "సఖ (Sakha)",
    app_subtitle: "మీ డిజిటల్ భద్రతా సహాయకుడు",
    warning_danger_title: "ప్రమాదం: మోసపూరిత సైట్ కావచ్చు",
    warning_caution_title: "జాగ్రత్త: అనుమానాస్పద పేజీ",
    warning_safe_title: "ఈ పేజీ సురక్షితంగా ఉంది",
    
    rule_fake_domain: "ఈ వెబ్‌సైట్ పేరు అసలైన బ్యాంక్ లేదా ప్రభుత్వ సైట్‌లా కనిపిస్తున్న నకిలీ సైట్ కావచ్చు.",
    rule_pin_to_receive: "హెచ్చరిక: డబ్బులు అందుకోవడానికి మీరు ఎప్పుడూ UPI పిన్ (PIN) నమోదు చేయవలసిన అవసరం లేదు.",
    rule_sensitive_combo: "ప్రమాదం: ఈ అనధికారిక సైట్ మీ కార్డ్ నంబర్, CVV మరియు OTP ఒకేసారి అడుగుతోంది.",
    rule_urgency_threat: "మీ ఖాతా నిలిపివేయబడుతుందని లేదా సిమ్ రద్దవుతుందని బెదిరించి మిమ్మల్ని తొందరపెడుతున్నారు.",
    rule_apk_download: "హెచ్చరిక: ఈ పేజీ ప్రమాదకరమైన మొబైల్ యాప్‌ను (APK) డౌన్‌లోడ్ చేసుకోమని చెబుతోంది.",
    
    masked_badge: "మీ రక్షణ కోసం దాచబడింది",
    tap_to_reveal: "చూడటానికి తాకండి",
    tap_to_hide: "మళ్ళీ దాచడానికి తాకండి",
    btn_understand_leave: "ఈ పేజీ నుండి వెళ్ళిపోండి (సిఫార్సు చేయబడింది)",
    btn_proceed_anyway: "నాకు అర్థమైంది, అయినా కొనసాగించండి",
    btn_explain: "ఈ పేజీ నన్ను ఏమి అడుగుతోంది?",
    
    consent_title: "సఖ (Sakha) కు స్వాగతం: మీ డిజిటల్ భద్రతా సహాయకుడు",
    consent_body: "సఖ మీ పరికరంలోనే పనిచేస్తుంది. మీ ఆధార్, బ్యాంక్ కార్డ్ వివరాలు ఏ సర్వర్‌కు పంపబడవు.",
    consent_agree: "నేను అంగీకరిస్తున్నాను - రక్షణ ప్రారంభించండి",
    
    loading_explanation: "పేజీ వివరాలను సురక్షితంగా పరిశీలిస్తున్నాము...",
    explain_error: "ప్రస్తుతం ఈ పేజీని వివరించడం సాధ్యం కాలేదు.",
    explain_offline: "వివరణ ఆఫ్‌లైన్‌లో ఉంది. ఈ సేవ స్థానిక Sakha సర్వర్‌పై ఆధారపడుతుంది (README చూడండి). ఎటువంటి సమాధానం రూపొందించబడలేదు.",
    explain_safe_summary: "పేజీ సారాంశం:"
  },

  hi: {
    app_name: "सखा (Sakha)",
    app_subtitle: "आपका डिजिटल सुरक्षा साथी",
    warning_danger_title: "खतरा: यह वेबसाइट धोखाधड़ी हो सकती है",
    warning_caution_title: "सावधानी: संदिग्ध गतिविधि",
    warning_safe_title: "यह पेज सुरक्षित प्रतीत होता है",
    
    rule_fake_domain: "यह वेबसाइट किसी बैंक या सरकारी पोर्टल का नकली रूप लगती है।",
    rule_pin_to_receive: "चेतावनी: पैसे पाने के लिए कभी भी यूपीआई पिन (PIN) दर्ज करने की आवश्यकता नहीं होती।",
    rule_sensitive_combo: "खतरा: यह अनधिकृत साइट आपके कार्ड नंबर, सीवीवी और ओटीपी को एक साथ मांग रही है।",
    rule_urgency_threat: "यह पेज आपको डराने या जल्दबाजी करने की कोशिश कर रहा है (खाता बंद होने की धमकी)।",
    rule_apk_download: "चेतावनी: यह पेज अज्ञात ऐप या रिमोट ऐप डाउनलोड करने के लिए कह रहा है।",
    
    masked_badge: "आपकी सुरक्षा के लिए छिपाया गया",
    tap_to_reveal: "देखने के लिए टैप करें",
    tap_to_hide: "छिपाने के लिए टैप करें",
    btn_understand_leave: "इस पेज से बाहर निकलें (अनुशंसित)",
    btn_proceed_anyway: "मुझे समझ आया, फिर भी जारी रखें",
    btn_explain: "यह पेज मुझसे क्या मांग रहा है?",
    
    consent_title: "सखा में आपका स्वागत है: आपका डिजिटल सुरक्षा साथी",
    consent_body: "सखा पूरी तरह से आपके डिवाइस पर ही काम करता है। आपका आधार, कार्ड विवरण कभी किसी सर्वर पर नहीं भेजे जाते।",
    consent_agree: "मैं सहमत हूँ - सुरक्षा शुरू करें",
    
    loading_explanation: "पेज का सुरक्षित रूप से विश्लेषण किया जा रहा है...",
    explain_error: "इस समय पेज की व्याख्या नहीं की जा सकी।",
    explain_offline: "व्याख्या सेवा ऑफलाइन है। यह सुविधा स्थानीय Sakha सर्वर पर निर्भर करती है (README देखें)। कोई उत्तर नहीं बनाया गया।",
    explain_safe_summary: "पेज सारांश:"
  }
};

/**
 * Helper to fetch localized string with fallback to English
 */
export function t(key, lang = "en") {
  const dict = STRINGS[lang] || STRINGS.en;
  return dict[key] || STRINGS.en[key] || key;
}
