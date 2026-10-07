/**
 * evaluate_scam_detection.js — Benchmark & Evaluation Engine for Sakha
 *
 * Runs the deterministic scam engine against synthetic test pages.
 * Reports:
 * - Scam Detection Rate (Recall)
 * - False-Alarm Rate (1 - Specificity)
 * - Time per page (latency)
 * - Comprehensive miss and false-alarm log
 */

import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";
import { evaluatePageSafety } from "../extension/src/scamDetector.js";

function parseHtmlForEvaluation(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  // Extract simulated domain
  const domainMatch = content.match(/data-simulated-domain="([^"]+)"/);
  const domain = domainMatch ? domainMatch[1] : "example.test";

  // Extract isScam ground truth
  const isScamMatch = content.match(/data-is-scam="([^"]+)"/);
  const isScam = isScamMatch ? isScamMatch[1] === "true" : false;

  // Extract text content (strip basic tags)
  const pageText = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  // Extract inputs
  const inputs = [];
  const inputRegex = /<input([^>]+)>/gi;
  let match;
  while ((match = inputRegex.exec(content)) !== null) {
    const attrs = match[1];
    const name = (attrs.match(/name="([^"]+)"/) || [])[1] || "";
    const type = (attrs.match(/type="([^"]+)"/) || [])[1] || "text";
    const placeholder = (attrs.match(/placeholder="([^"]+)"/) || [])[1] || "";
    inputs.push({ name, type, placeholder });
  }

  // Extract links
  const links = [];
  const linkRegex = /href="([^"]+)"/gi;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }

  return { domain, isScam, pageText, inputs, links, filePath };
}

function runEvaluation(dirPath, setName) {
  console.log(`\n======================================================`);
  console.log(`RUNNING EVALUATION ON: ${setName} (${dirPath})`);
  console.log(`======================================================`);

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith(".html"));
  if (files.length === 0) {
    console.warn("No test files found in", dirPath);
    return null;
  }

  let truePositives = 0;  // Scam correctly flagged as danger/caution
  let falseNegatives = 0; // Scam missed as safe
  let trueNegatives = 0;  // Genuine page correctly marked safe
  let falsePositives = 0; // Genuine page wrongly flagged as danger/caution

  const misses = [];
  const falseAlarms = [];
  const latencies = [];

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const parsed = parseHtmlForEvaluation(fullPath);

    const t0 = performance.now();
    const result = evaluatePageSafety({
      url: `https://${parsed.domain}`,
      pageText: parsed.pageText,
      inputs: parsed.inputs,
      links: parsed.links
    });
    const t1 = performance.now();
    latencies.push(t1 - t0);

    const flaggedAsScam = result.level === "danger" || result.level === "caution";

    if (parsed.isScam) {
      if (flaggedAsScam) {
        truePositives++;
      } else {
        falseNegatives++;
        misses.push({ file, domain: parsed.domain, reason: "Scam not flagged by any rule" });
      }
    } else {
      if (flaggedAsScam) {
        falsePositives++;
        falseAlarms.push({ file, domain: parsed.domain, level: result.level, rules: result.rulesTriggered });
      } else {
        trueNegatives++;
      }
    }
  }

  const totalScams = truePositives + falseNegatives;
  const totalGenuine = trueNegatives + falsePositives;
  const detectionRate = totalScams > 0 ? (truePositives / totalScams) * 100 : 0;
  const falseAlarmRate = totalGenuine > 0 ? (falsePositives / totalGenuine) * 100 : 0;
  const avgLatency = latencies.reduce((a, b) => a + b, 0) / latencies.length;

  console.log(`Pages Processed: ${files.length} (${totalScams} Scams, ${totalGenuine} Genuine)`);
  console.log(`Scam Detection Rate (Recall): ${detectionRate.toFixed(2)}% (${truePositives}/${totalScams})`);
  console.log(`False-Alarm Rate: ${falseAlarmRate.toFixed(2)}% (${falsePositives}/${totalGenuine})`);
  console.log(`Average Latency per Page: ${avgLatency.toFixed(3)} ms`);

  if (misses.length > 0) {
    console.log(`\n⚠️ MISSES (${misses.length}):`);
    console.dir(misses);
  } else {
    console.log(`✓ 0 Misses!`);
  }

  if (falseAlarms.length > 0) {
    console.log(`\n⚠️ FALSE ALARMS (${falseAlarms.length}):`);
    console.dir(falseAlarms);
  } else {
    console.log(`✓ 0 False Alarms!`);
  }

  return {
    setName,
    total: files.length,
    scams: totalScams,
    genuine: totalGenuine,
    detectionRate,
    falseAlarmRate,
    avgLatencyMs: avgLatency,
    misses,
    falseAlarms
  };
}

// 1. Run on Tuning Set
const tuningResults = runEvaluation("evaluation/data/tuning", "TUNING SET (70%)");

// 2. Run on Hold-out Set (once, reporting unvarnished numbers)
const holdoutResults = runEvaluation("evaluation/data/holdout", "HOLD-OUT SET (30%)");

// Output consolidated summary report
const summaryPath = "evaluation/evaluation_report.json";
fs.writeFileSync(summaryPath, JSON.stringify({ tuning: tuningResults, holdout: holdoutResults }, null, 2), "utf8");
console.log(`\n✓ Complete evaluation results saved to ${summaryPath}`);
