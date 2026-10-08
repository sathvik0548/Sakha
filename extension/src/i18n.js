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
    warning_danger_title: "Please Stop: This Site May Be Unsafe",
    warning_caution_title: "Check Carefully: Something Looks Unusual",
    warning_safe_title: "This page looks safe to use",
    
    rule_fake_domain: "This web address looks like a fake copy of a real website. Close this page.",
    rule_pin_to_receive: "Do not enter your UPI PIN. You only type your PIN to send money, never to receive it.",
    rule_sensitive_combo: "Do not share card details here. This unofficial page is asking for your card number, CVV, and PIN.",
    rule_urgency_threat: "Take your time. Real banks do not threaten to block your account immediately.",
    rule_apk_download: "Do not install this download. This page is asking you to install an unknown mobile file.",
    
    masked_badge: "Hidden for your protection",
    tap_to_reveal: "Tap once to see",
    tap_to_hide: "Tap to hide",
    btn_understand_leave: "Leave this page (Recommended)",
    btn_proceed_anyway: "I understand, continue anyway",
    btn_explain: "What is this page asking me?",
    
    consent_title: "Welcome to Sakha: Your Digital Safety Companion",
    consent_body: "Sakha stays completely on your device. Your Aadhaar, cards, and personal details are never sent to any server.",
    consent_agree: "I Agree & Start Protection",
    
    loading_explanation: "Checking what this page is asking safely...",
    explain_error: "Could not explain this page right now.",
    explain_offline: "Helper is resting. The optional explanation helper needs the local assistant server running. Your on-device safety remains active.",
    explain_safe_summary: "Page Summary:",

    state_unsupported_page: "Sakha stays idle on internal browser pages. You are safe here.",
    state_page_loading: "Checking this page for safety...",
    state_active_protecting: "Sakha is active and protecting your screen."
  },
  
  te: {
    app_name: "సఖ (Sakha)",
    app_subtitle: "మీ డిజిటల్ భద్రతా సహాయకుడు",
    warning_danger_title: "దయచేసి ఆగండి: ఈ సైట్ సురక్షితం కాకపోవచ్చు",
    warning_caution_title: "జాగ్రత్తగా చూడండి: ఇక్కడ ఏదో తేడాగా ఉంది",
    warning_safe_title: "ఈ పేజీ ఉపయోగించడానికి సురక్షితంగా ఉంది",
    
    rule_fake_domain: "ఈ వెబ్‌సైట్ చిరునామా అసలైన సైట్ నకిలీ కాపీలా ఉంది. ఈ పేజీని మూసివేయండి.",
    rule_pin_to_receive: "మీ UPI పిన్ నమోదు చేయవద్దు. డబ్బు పంపడానికి మాత్రమే పిన్ కావాలి, తీసుకోవడానికి కాదు.",
    rule_sensitive_combo: "ఇక్కడ మీ కార్డ్ వివరాలు ఇవ్వవద్దు. ఈ అనధికారిక పేజీ కార్డ్ నంబర్, CVV మరియు పిన్ అడుగుతోంది.",
    rule_urgency_threat: "కంగారు పడవద్దు. అసలైన బ్యాంకులు ఖాతా వెంటనే ఆగిపోతుందని బెదిరించవు.",
    rule_apk_download: "ఈ ఫైల్ ఇన్‌స్టాల్ చేయవద్దు. ఈ పేజీ తెలియని మొబైల్ ఫైల్ డౌన్‌లోడ్ చేసుకోమని చెబుతోంది.",
    
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
    explain_offline: "సహాయకుడు విశ్రాంతిలో ఉన్నారు. ఈ అదనపు వివరణకు స్థానిక సహాయక సర్వర్ అవసరం. మీ పరికర భద్రత ఎల్లప్పుడూ పనిచేస్తుంది.",
    explain_safe_summary: "పేజీ సారాంశం:",

    state_unsupported_page: "బ్రౌజర్ అంతర్గత పేజీలలో సఖ విశ్రాంతిగా ఉంటుంది. ఇక్కడ మీరు సురక్షితంగా ఉన్నారు.",
    state_page_loading: "ఈ పేజీ భద్రతను పరిశీలిస్తున్నాము...",
    state_active_protecting: "సఖ మీ స్క్రీన్‌పై రక్షణ కల్పిస్తోంది."
  },

  hi: {
    app_name: "सखा (Sakha)",
    app_subtitle: "आपका डिजिटल सुरक्षा साथी",
    warning_danger_title: "कृपया रुकें: यह साइट असुरक्षित हो सकती है",
    warning_caution_title: "ध्यान से देखें: कुछ असामान्य लग रहा है",
    warning_safe_title: "यह पेज उपयोग के लिए सुरक्षित लगता है",
    
    rule_fake_domain: "यह वेब पता किसी असली वेबसाइट की नकली कॉपी लगता है। इस पेज को बंद करें।",
    rule_pin_to_receive: "अपना यूपीआई पिन न डालें। पिन केवल पैसे भेजने के लिए होता है, पाने के लिए कभी नहीं।",
    rule_sensitive_combo: "यहाँ कार्ड विवरण न दें। यह अनधिकृत पेज आपके कार्ड का नंबर, सीवीवी और पिन मांग रहा है।",
    rule_urgency_threat: "जल्दबाजी न करें। असली बैंक खाता तुरंत बंद करने की धमकी नहीं देते।",
    rule_apk_download: "इस फ़ाइल को इंस्टॉल न करें। यह पेज अनजान मोबाइल फ़ाइल डाउनलोड करने को कह रहा है।",
    
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
    explain_offline: "सहायक अभी उपलब्ध नहीं है। इस अतिरिक्त व्याख्या के लिए स्थानीय सर्वर चाहिए। आपकी डिवाइस सुरक्षा हमेशा सक्रिय है।",
    explain_safe_summary: "पेज सारांश:",

    state_unsupported_page: "ब्राउज़र के आंतरिक पेजों पर सखा निष्क्रिय रहता है। आप यहाँ सुरक्षित हैं।",
    state_page_loading: "इस पेज की सुरक्षा जाँची जा रही है...",
    state_active_protecting: "सखा सक्रिय है और आपकी स्क्रीन की सुरक्षा कर रहा है।"
  }
};

/**
 * Helper to fetch localized string with fallback to English
 */
export function t(key, lang = "en") {
  const dict = STRINGS[lang] || STRINGS.en;
  return dict[key] || STRINGS.en[key] || key;
}
