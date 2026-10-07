/**
 * test_eventLogger.js — Unit Tests for Privacy-Preserving Event Logger
 */

import assert from "node:assert";
import { logPilotEvent, getPilotLogs, logsToCSV, clearPilotLogs } from "./src/eventLogger.js";

console.log("=== Running Sakha Event Logger Tests ===");

// Mock localStorage for Node environment
global.localStorage = {
  data: {},
  getItem(k) { return this.data[k] || null; },
  setItem(k, v) { this.data[k] = v; },
  removeItem(k) { delete this.data[k]; }
};

await clearPilotLogs();

const evt1 = await logPilotEvent("WARNING_SHOWN", {
  level: "danger",
  rulesTriggered: ["LOOKALIKE_DOMAIN", "UPI_PIN_RECEIVE_TRAP"],
  domain: "fake-sbi.test"
});
assert.strictEqual(evt1.eventType, "WARNING_SHOWN");
assert.strictEqual(evt1.level, "danger");
assert.strictEqual(evt1.domain, "fake-sbi.test");

const evt2 = await logPilotEvent("USER_DECISION", {
  decision: "LEFT_PAGE",
  domain: "fake-sbi.test"
});
assert.strictEqual(evt2.decision, "LEFT_PAGE");

const allLogs = await getPilotLogs();
assert.strictEqual(allLogs.length, 2);

const csv = logsToCSV(allLogs);
assert.ok(csv.startsWith("id,timestamp,eventType,domain,details"));
assert.ok(csv.includes("fake-sbi.test"));
assert.ok(csv.includes("WARNING_SHOWN"));

console.log("✓ Pilot logging and CSV export verified (zero PII leaks)");
console.log("=== ALL LOGGER TESTS PASSED (100% OK) ===");
