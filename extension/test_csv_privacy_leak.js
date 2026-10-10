import assert from "node:assert";
import { logPilotEvent, getPilotLogs, clearPilotLogs, logsToCSV } from "./src/eventLogger.js";

console.log("--- Running test_csv_privacy_leak.js ---");

// Mock localStorage for Node testing environment
global.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = v; },
  removeItem(k) { delete this.data[k]; }
};

async function runTest() {
  await clearPilotLogs();

  // Simulate logging events, some with accidental PII or URL query params in payloads
  await logPilotEvent("WARNING_SHOWN", {
    domain: "https://secure-portal.fake.xyz/login?account=123456789012&otp=998877",
    url: "https://secure-portal.fake.xyz/login?account=123456789012&otp=998877",
    level: "danger",
    value: "secret_aadhaar_548912345674"
  });

  await logPilotEvent("MASKING_APPLIED", {
    domain: "pmkisan.gov.in?farmer_id=987654321",
    inputsMasked: 3,
    textNodesMasked: 12
  });

  const logs = await getPilotLogs();
  assert.strictEqual(logs.length, 2, "Expected 2 logged events");

  const csv = logsToCSV(logs);
  console.log("[CSV Output Preview]:\n" + csv);

  // Assertions: Zero query strings, zero field values
  assert.ok(!csv.includes("?"), `[FAIL] CSV contains query parameter delimiter '?'!`);
  assert.ok(!csv.includes("123456789012"), `[FAIL] CSV leaked account query value!`);
  assert.ok(!csv.includes("998877"), `[FAIL] CSV leaked OTP query value!`);
  assert.ok(!csv.includes("548912345674"), `[FAIL] CSV leaked raw Aadhaar field value!`);
  assert.ok(!csv.includes("secret_aadhaar"), `[FAIL] CSV leaked secret property!`);
  assert.ok(!csv.includes("farmer_id"), `[FAIL] CSV leaked farmer_id query parameter!`);

  // Assert hostnames are clean
  assert.ok(csv.includes("secure-portal.fake.xyz"), "Expected clean hostname secure-portal.fake.xyz");
  assert.ok(csv.includes("pmkisan.gov.in"), "Expected clean hostname pmkisan.gov.in");

  console.log("✓ CSV export contains zero query parameters, zero URL strings, and zero personal values.");
  console.log("--- test_csv_privacy_leak.js PASSED! ---\n");
}

runTest().catch(err => {
  console.error("Test failed:", err);
  process.exit(1);
});
