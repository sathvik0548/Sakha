/**
 * scamDetector.js — Deterministic On-Device Scam Warning Engine for Sakha
 *
 * Checks:
 * 1. Lookalike domain analysis vs Allowlist (Levenshtein distance, Cyrillic/homoglyphs, Punycode, suspicious subdomains, shady TLDs)
 * 2. High-risk credential harvest combination (Card Number + CVV + PIN/OTP on non-allowlisted site)
 * 3. "Enter PIN to receive money" / UPI collect traps
 * 4. Urgency & threat intimidation language (English, romanized Hindi, romanized Telugu)
 * 5. Malicious APK or remote-desktop app download prompts (AnyDesk, QuickSupport, TeamViewer)
 *
 * Output: { level: 'safe'|'caution'|'danger', rulesTriggered: string[], reasonEn: string, reasonTe: string }
 */

import { t } from "./i18n.js";

// Canonical verified domains (matches ALLOWLIST_TO_VERIFY)
export const OFFICIAL_ALLOWLIST = [
  "sbi.co.in",
  "onlinesbi.sbi",
  "hdfcbank.com",
  "icicibank.com",
  "axisbank.com",
  "punjabnationalbank.in",
  "bankofbaroda.in",
  "canarabank.com",
  "kotak.com",
  "indusind.com",
  "unionbankofindia.co.in",
  "npci.org.in",
  "bhimupi.org.in",
  "paytm.com",
  "phonepe.com",
  "google.com",
  "uidai.gov.in",
  "incometax.gov.in",
  "epfindia.gov.in",
  "passportindia.gov.in",
  "parivahan.gov.in",
  "digilocker.gov.in",
  "india.gov.in",
  "ceir.gov.in",
  "cybercrime.gov.in",
  "sancharsaathi.gov.in",
  "pmkisan.gov.in",
];

// Common Cyrillic & Latin confusable homoglyphs
const HOMOGLYPH_MAP = {
  "а": "a", "с": "c", "е": "e", "о": "o", "р": "p", "ѕ": "s", "х": "x", "у": "y",
  "і": "i", "ј": "j", "ԁ": "d", "ԛ": "q", "ԝ": "w",
  "0": "o", "1": "l"
};

// Shady TLDs commonly abused in Indian SMS phishing campaigns
const SUSPICIOUS_TLDS = [
  ".tk", ".ml", ".ga", ".cf", ".gq", ".top", ".xyz", ".club", ".work", ".buzz", ".cam", ".rest", ".fit"
];

// Remote access tool keywords
const REMOTE_ACCESS_APPS = [
  "anydesk", "quicksupport", "teamviewer", "rustdesk", "airdroid", "zoho assist"
];

/**
 * Standard Levenshtein Distance
 */
export function levenshteinDistance(a, b) {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

/**
 * Normalize domain string by replacing homoglyphs
 */
export function normalizeHomoglyphs(domain) {
  let normalized = "";
  for (const char of domain.toLowerCase()) {
    normalized += HOMOGLYPH_MAP[char] || char;
  }
  return normalized;
}

/**
 * Extract clean hostname from arbitrary URL or domain string
 */
export function extractHostname(urlOrDomain) {
  if (!urlOrDomain) return "";
  let str = urlOrDomain.trim().toLowerCase();
  // Strip protocol if present
  str = str.replace(/^[a-z]+:\/\//, "");
  // Strip path and query
  str = str.split("/")[0].split("?")[0].split("#")[0];
  // Strip port
  str = str.split(":")[0];
  return str;
}

/**
 * Check if a hostname strictly belongs to an allowlisted entity
 */
export function isAllowlistedDomain(hostname, allowlist = OFFICIAL_ALLOWLIST) {
  const clean = extractHostname(hostname);
  return allowlist.some((official) => {
    return clean === official || clean.endsWith("." + official);
  });
}

/**
 * Rule 1: Check for lookalike / spoofed domain
 */
export function checkLookalikeDomain(hostname, allowlist = OFFICIAL_ALLOWLIST) {
  const clean = extractHostname(hostname);
  if (!clean || isAllowlistedDomain(clean, allowlist)) {
    return { isLookalike: false };
  }

  // Punycode check (starts with xn--)
  if (clean.includes("xn--")) {
    return {
      isLookalike: true,
      reason: `Punycode domain detected (${clean}) mimicking internationalized script.`
    };
  }

  const normalized = normalizeHomoglyphs(clean);

  for (const official of allowlist) {
    // Subdomain deception: e.g. "sbi.co.in.scam-portal.com" or "sbi-verification.in"
    const officialBase = official.replace(/\.(co\.in|gov\.in|org\.in|com|in|sbi)$/, "");
    
    // Check if official brand is embedded as subdomain or slug on an untrusted root
    if (clean.includes(official) && !clean.endsWith("." + official)) {
      return {
        isLookalike: true,
        target: official,
        reason: `Deceptive domain: contains '${official}' but registered under untrusted parent domain.`
      };
    }

    // Direct Levenshtein check on root domain parts
    const cleanBase = clean.split(".")[0];
    const targetBase = official.split(".")[0];

    if (cleanBase.length >= 3 && targetBase.length >= 3) {
      const dist = levenshteinDistance(cleanBase, targetBase);
      // Small edit distance (1 or 2 edits) indicating typosquatting (e.g. sbi-bank, hdfc-login, onlinesb1)
      if (dist > 0 && dist <= 2 && Math.abs(cleanBase.length - targetBase.length) <= 2) {
        return {
          isLookalike: true,
          target: official,
          reason: `Typosquatting detected: '${clean}' is strikingly close to official '${official}' (edit distance ${dist}).`
        };
      }
    }

    // Check normalized homoglyph substitution
    if (normalized.includes(targetBase) && !clean.includes(targetBase)) {
      return {
        isLookalike: true,
        target: official,
        reason: `Homoglyph character substitution detected mimicking '${official}'.`
      };
    }
  }

  // Suspicious TLD check on banking/gov keywords
  const isSuspiciousTLD = SUSPICIOUS_TLDS.some(tld => clean.endsWith(tld));
  const hasFinanceKeyword = /(bank|sbi|hdfc|icici|aadhaar|pan|kyc|tax|upi|payout|lottery|reward)/i.test(clean);
  if (isSuspiciousTLD && hasFinanceKeyword) {
    return {
      isLookalike: true,
      target: "financial/identity portal",
      reason: `Financial keyword on high-risk TLD (${clean}).`
    };
  }

  return { isLookalike: false };
}

/**
 * Rule 2: Urgency & Threat language detector (English, romanized Hindi, romanized Telugu)
 */
export function checkUrgencyAndThreats(text) {
  if (!text) return { detected: false, matches: [] };
  const lower = text.toLowerCase();
  
  const URGENCY_PATTERNS = [
    // English
    /\b(account (will be |is )?blocked|suspended within|deactivated within|electricity (power )?cut|sim (card )?deactivation|kyc pending|kyc expires?|immediate action required|last 24 hours|legal action|police complaint|arrest warrant)\b/i,
    // Romanized Hindi
    /\b(khata band ho jayega|bijli kat jayegi|sim band ho jayegi|turant karein|police case|aadhaar link nahi kiya to)\b/i,
    // Romanized Telugu
    /\b(account block avuthundi|current cut avuthundi|sim card block|ventane cheyandi|lekapothe raddhu)\b/i
  ];

  const matches = [];
  for (const pattern of URGENCY_PATTERNS) {
    const match = lower.match(pattern);
    if (match) matches.push(match[0]);
  }

  return {
    detected: matches.length > 0,
    matches
  };
}

/**
 * Rule 3: UPI "Enter PIN to receive money" and Collect Request Traps
 */
export function checkUPITraps(text) {
  if (!text) return { detected: false };
  const lower = text.toLowerCase();

  const UPI_PATTERNS = [
    // English
    /(enter|type|submit)\s+(your\s+)?(upi\s+)?pin\s+to\s+(receive|claim|get|win|accept)\s+(\S+\s+)?(money|cash|cashback|refund|reward|prize)/i,
    /(receive|claim|accept)\s+(\S+\s+)?(money|cashback|reward|refund).*(enter|type)\s+(upi\s+)?pin/i,
    /enter\s+pin\s+for\s+credit/i,
    // Romanized Hindi
    /paise?\s+(pane|lene)\s+ke\s+liye\s+(upi\s+)?pin\s+(dale|daale|enter)/i,
    // Romanized Telugu
    /dabbu(lu)?\s+(ravadaniki|pondadaniki)\s+(upi\s+)?pin\s+enter\s+cheyandi/i
  ];

  for (const pattern of UPI_PATTERNS) {
    if (pattern.test(lower)) {
      return { detected: true };
    }
  }
  return { detected: false };
}

/**
 * Rule 4: Critical Credential Harvesting Combo on non-allowlisted domain
 * (Card number + CVV + PIN or OTP simultaneously requested)
 */
export function checkSensitiveFieldCombo(inputs = [], isAllowlisted = false) {
  if (isAllowlisted) return { detected: false };

  let hasCard = false;
  let hasCVV = false;
  let hasPINorOTP = false;

  for (const input of inputs) {
    const combined = `${input.name || ""} ${input.id || ""} ${input.placeholder || ""} ${input.label || ""} ${input.type || ""}`.toLowerCase();
    
    if (/(card.*num|pan_number|debit.*card|credit.*card|16.*digit)/i.test(combined)) {
      hasCard = true;
    }
    if (/(cvv|cvc|security.*code|card.*verif)/i.test(combined)) {
      hasCVV = true;
    }
    if (/(otp|one.*time.*password|atm.*pin|card.*pin|mpin)/i.test(combined)) {
      hasPINorOTP = true;
    }
  }

  if (hasCard && hasCVV && hasPINorOTP) {
    return { detected: true };
  }
  return { detected: false };
}

/**
 * Rule 5: APK and Remote Access Download Prompts
 */
export function checkMaliciousAppDownloads(text, linkHrefs = []) {
  const lower = (text || "").toLowerCase();
  
  // Remote desktop tool mentions
  for (const app of REMOTE_ACCESS_APPS) {
    if (lower.includes(app)) {
      return {
        detected: true,
        reason: `Page advises installing remote access tool (${app}).`
      };
    }
  }

  // APK file downloads
  for (const href of linkHrefs) {
    const h = (href || "").toLowerCase();
    if (h.endsWith(".apk") || h.includes(".apk?")) {
      return {
        detected: true,
        reason: "Page contains direct download link for an Android application (.apk)."
      };
    }
  }

  return { detected: false };
}

/**
 * Evaluate Complete Page for Scam Signals
 *
 * @param {Object} pageContext
 * @param {string} pageContext.url
 * @param {string} pageContext.pageText
 * @param {Array}  pageContext.inputs
 * @param {Array}  pageContext.links
 * @param {Object} [pageContext.domStats]
 * @param {Array}  [pageContext.classifiedFields]
 * @returns {Object} Comprehensive evaluation object
 */
export function evaluatePageSafety(pageContext) {
  const startTime = typeof performance !== "undefined" ? performance.now() : Date.now();
  const { 
    url = "", 
    pageText = "", 
    inputs = [], 
    links = [],
    domStats = { fieldsCount: inputs.length, formsCount: 0, linksCount: links.length, framesCount: 0 },
    classifiedFields = []
  } = pageContext;

  const hostname = extractHostname(url);
  const isAllowlisted = isAllowlistedDomain(hostname);

  const rulesTriggered = [];
  const rulesDetailed = [];
  let highestLevel = "safe";
  let primaryKey = "warning_safe_title";

  // Check 1: Lookalike domain (Weight: 90)
  const lookalike = checkLookalikeDomain(hostname);
  const check1Result = {
    id: "CHECK_DOMAIN",
    name: "Domain Reputation & Typosquatting",
    passed: !lookalike.isLookalike,
    detail: lookalike.isLookalike ? lookalike.reason : (isAllowlisted ? "Domain is on official allowlist" : "No lookalike or typosquatting patterns detected")
  };
  if (lookalike.isLookalike) {
    highestLevel = "danger";
    rulesTriggered.push("LOOKALIKE_DOMAIN");
    rulesDetailed.push({
      ruleId: "LOOKALIKE_DOMAIN",
      name: "Lookalike / Phishing Domain",
      weight: 90,
      severity: "danger",
      reason: lookalike.reason
    });
    primaryKey = "rule_fake_domain";
  }

  // Check 2: UPI Trap (Weight: 85)
  const upiTrap = checkUPITraps(pageText);
  const check2Result = {
    id: "CHECK_UPI_TRAP",
    name: "UPI PIN Collect Traps",
    passed: !upiTrap.detected,
    detail: upiTrap.detected ? "Found 'Enter PIN to receive money' pattern" : "No reverse PIN collect patterns found"
  };
  if (upiTrap.detected) {
    highestLevel = "danger";
    rulesTriggered.push("UPI_PIN_RECEIVE_TRAP");
    rulesDetailed.push({
      ruleId: "UPI_PIN_RECEIVE_TRAP",
      name: "UPI PIN Collection Trap",
      weight: 85,
      severity: "danger",
      reason: "Page asks for UPI PIN under pretext of receiving money or cashback"
    });
    primaryKey = "rule_pin_to_receive";
  }

  // Check 3: Sensitive Field Combo (Weight: 80)
  const sensitiveCombo = checkSensitiveFieldCombo(inputs, isAllowlisted);
  const check3Result = {
    id: "CHECK_SENSITIVE_COMBO",
    name: "Credential Harvesting Combination",
    passed: !sensitiveCombo.detected,
    detail: sensitiveCombo.detected ? "Simultaneous Card + CVV + PIN/OTP requested on non-allowlisted site" : "No dangerous credential combinations detected"
  };
  if (sensitiveCombo.detected) {
    highestLevel = "danger";
    rulesTriggered.push("SENSITIVE_CREDENTIAL_COMBO");
    rulesDetailed.push({
      ruleId: "SENSITIVE_CREDENTIAL_COMBO",
      name: "Critical Credential Harvest",
      weight: 80,
      severity: "danger",
      reason: "Unofficial page requests complete card credentials (number, CVV, and PIN/OTP)"
    });
    primaryKey = "rule_sensitive_combo";
  }

  // Check 4: Remote App / APK download (Weight: 65)
  const appDownload = checkMaliciousAppDownloads(pageText, links);
  const check4Result = {
    id: "CHECK_APP_DOWNLOAD",
    name: "Malicious App & APK Prompts",
    passed: !appDownload.detected,
    detail: appDownload.detected ? appDownload.reason : "No unknown APKs or remote-desktop tool downloads detected"
  };
  if (appDownload.detected) {
    if (highestLevel !== "danger") highestLevel = "caution";
    rulesTriggered.push("MALICIOUS_APP_DOWNLOAD");
    rulesDetailed.push({
      ruleId: "MALICIOUS_APP_DOWNLOAD",
      name: "Suspicious App Prompt",
      weight: 65,
      severity: "caution",
      reason: appDownload.reason
    });
    if (primaryKey === "warning_safe_title") primaryKey = "rule_apk_download";
  }

  // Check 5: Urgency & Threat language (Weight: 50)
  const urgency = checkUrgencyAndThreats(pageText);
  const check5Result = {
    id: "CHECK_URGENCY",
    name: "Intimidation & Pressure Tactics",
    passed: !urgency.detected,
    detail: urgency.detected ? `Pressure tactics found (${urgency.matches.join(", ")})` : "No urgency or intimidation phrasing detected"
  };
  if (urgency.detected) {
    if (highestLevel !== "danger") highestLevel = "caution";
    rulesTriggered.push("URGENCY_THREAT_LANGUAGE");
    rulesDetailed.push({
      ruleId: "URGENCY_THREAT_LANGUAGE",
      name: "Urgency / Threat Intimidation",
      weight: 50,
      severity: "caution",
      reason: `Intimidation keywords detected: ${urgency.matches.join(", ")}`
    });
    if (primaryKey === "warning_safe_title") primaryKey = "rule_urgency_threat";
  }

  const checks = [check1Result, check2Result, check3Result, check4Result, check5Result];
  const passedChecksCount = checks.filter(c => c.passed).length;
  const totalChecksCount = checks.length;

  const endTime = typeof performance !== "undefined" ? performance.now() : Date.now();
  const analysisTimeMs = +(endTime - startTime).toFixed(2);

  // Safe verdict reason with exact checks count
  const safeVerdictEn = `No risk signals found among ${totalChecksCount} checks.`;
  const safeVerdictTe = `${totalChecksCount} భద్రతా తనిఖీలలో ఎలాంటి అనుమానాస్పద సంకేతాలు కనుగొనబడలేదు.`;
  const safeVerdictHi = `${totalChecksCount} सुरक्षा जांचों में कोई जोखिम संकेत नहीं मिला।`;

  const reasonEn = highestLevel === "safe" ? safeVerdictEn : t(primaryKey, "en");
  const reasonTe = highestLevel === "safe" ? safeVerdictTe : t(primaryKey, "te");
  const reasonHi = highestLevel === "safe" ? safeVerdictHi : t(primaryKey, "hi");

  return {
    level: highestLevel,
    rulesTriggered,
    rulesDetailed,
    checks,
    totalChecksCount,
    passedChecksCount,
    reasonEn,
    reasonTe,
    reasonHi,
    hostname,
    isAllowlisted,
    domStats,
    fieldsTable: classifiedFields,
    analysisTimeMs
  };
}
