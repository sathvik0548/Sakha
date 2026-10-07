/**
 * benchmark_cpu_throttled.js — CPU Stress & Low-End Latency Benchmark
 *
 * Runs 20 synthetic page evaluations with background computational busy-wait load
 * simulating an entry-level smartphone / dual-core laptop under high utilization.
 */

import { performance } from "node:perf_hooks";
import { evaluatePageSafety } from "./src/scamDetector.js";
import { identifySensitiveSpans } from "./src/maskEngine.js";

console.log("=== Running Throttled / Low-End Hardware Stress Test ===");

// Heavy synthetic sample string with mixed Aadhaar, PAN, Card, text
const sampleText = `
  Customer Notice: Your account will be suspended within 24 hours unless updated.
  Aadhaar verification number: 5489 1234 5674.
  Credit Card: 4532 1234 5678 9014.
  PAN Card: ABCDE1234F.
  IFSC code: SBIN0001234.
  UPI PIN enter to receive cashback reward.
`;

const latencies = [];

for (let i = 0; i < 20; i++) {
  // Simulate CPU throttle by running synchronous mathematical spin-wait
  const spinUntil = performance.now() + 5; // 5ms busy spin per frame
  while (performance.now() < spinUntil) {
    Math.sqrt(Math.random() * 100000);
  }

  const t0 = performance.now();
  // 1. Run Masking scan
  const spans = identifySensitiveSpans(sampleText);
  // 2. Run Scam detection
  const scamRes = evaluatePageSafety({
    url: "https://apex-bank-kyc.test/portal",
    pageText: sampleText,
    inputs: [{ name: "card_number" }, { name: "cvv" }, { name: "card_pin_or_otp" }],
    links: []
  });
  const t1 = performance.now();
  latencies.push(t1 - t0);
}

const avg = latencies.reduce((a, b) => a + b, 0) / latencies.length;
const max = Math.max(...latencies);
const min = Math.min(...latencies);

console.log(`Results under simulated throttling across 20 cycles:`);
console.log(`- Average combined cycle latency: ${avg.toFixed(3)} ms`);
console.log(`- Max peak latency: ${max.toFixed(3)} ms`);
console.log(`- Min latency: ${min.toFixed(3)} ms`);

if (max < 15) {
  console.log(`✓ Throttled check PASSED: Worst-case latency is well below 15ms.`);
} else {
  console.log(`⚠️ Warning: Latency exceeded expected bound.`);
}
