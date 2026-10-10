import assert from "node:assert";
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { STRINGS, t } from "./src/i18n.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log("--- Running test_popup_i18n_rendering.js ---");

// 1. Gather all unique key names across all locales
const allKeys = new Set();
for (const lang of ["en", "te", "hi"]) {
  if (STRINGS[lang]) {
    for (const key of Object.keys(STRINGS[lang])) {
      allKeys.add(key);
    }
  }
}
console.log(`[Test] Total registered keys to check: ${allKeys.size}`);

// 2. Ensure t() never returns a raw key name for any key across en, te, hi
for (const lang of ["en", "te", "hi"]) {
  for (const key of allKeys) {
    const rendered = t(key, lang);
    assert.notStrictEqual(
      rendered,
      key,
      `[FAIL] t("${key}", "${lang}") returned raw key identifier "${rendered}"!`
    );
    assert.ok(
      typeof rendered === "string" && rendered.length > 0,
      `[FAIL] t("${key}", "${lang}") returned empty or invalid string!`
    );
  }
}
console.log("✓ t() returns valid non-key translations across all registered keys for en, te, hi.");

// 3. Ensure t() with an UNKNOWN key does NOT return the key itself
const unknownTestKey = "completely_nonexistent_rule_xyz_123";
const unknownResult = t(unknownTestKey, "en");
assert.notStrictEqual(
  unknownResult,
  unknownTestKey,
  `[FAIL] t() with unknown key must not return the raw key name to end-users!`
);
assert.strictEqual(unknownResult, "", "✓ t() with unknown key returned empty string fallback.");

// 4. Test simulated DOM rendering of popup strings
const mockEvaluations = [
  { level: "safe", reasonEn: "Safe site", reasonTe: "సురక్షిత సైట్", reasonHi: "सुरक्षित साइट" },
  { level: "caution", reasonEn: "Caution check", reasonTe: "జాగ్రత్తగా చూడండి", reasonHi: "सावधानी से देखें" },
  { level: "danger", reasonEn: "Danger alert", reasonTe: "ప్రమాదం", reasonHi: "खतरा" }
];

for (const lang of ["en", "te", "hi"]) {
  for (const evalData of mockEvaluations) {
    let localizedReason = evalData.reasonEn;
    if (lang === "te" && evalData.reasonTe) {
      localizedReason = evalData.reasonTe;
    } else if (lang === "hi") {
      localizedReason = evalData.reasonHi || evalData.reasonEn;
    }

    const title = evalData.level === "danger" 
      ? t("warning_danger_title", lang)
      : evalData.level === "caution"
        ? t("warning_caution_title", lang)
        : t("warning_safe_title", lang);

    const detail = evalData.level === "safe"
      ? (t("rule_safe_detail", lang) || "No scam or deceptive patterns detected on this site.")
      : localizedReason;

    // Assert rendered output is not a raw key
    assert.ok(!allKeys.has(title), `Rendered title "${title}" in ${lang} matches a translation key!`);
    assert.ok(!allKeys.has(detail), `Rendered detail "${detail}" in ${lang} matches a translation key!`);
  }
}
console.log("✓ Mock popup evaluation rendering in en, te, hi contains zero raw translation keys.");
console.log("--- All Phase 1 i18n tests PASSED! ---\n");
