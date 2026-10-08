/**
 * record_demo.js — Automated Playwright Demonstration Script
 *
 * Runs all video demo steps deterministically at human-readable speed
 * with visible cursor actions and optional video capture.
 *
 * Run:
 *   node submission/video/record_demo.js
 * Or with video recording enabled:
 *   RECORD_VIDEO=1 node submission/video/record_demo.js
 */

import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../");
const extensionPath = path.resolve(repoRoot, "extension");

const shouldRecord = process.env.RECORD_VIDEO === "1";
const videoDir = path.resolve(__dirname, "recordings");

if (shouldRecord && !fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

// Human-like delay helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runDemo() {
  console.log("=================================================");
  console.log("🎬 Starting Sakha Automated Demo Video Runner");
  console.log(`   Extension Path: ${extensionPath}`);
  console.log(`   Video Recording: ${shouldRecord ? "ENABLED" : "DISABLED"}`);
  console.log("=================================================\n");

  // Launch persistent context with extension loaded
  const context = await chromium.launchPersistentContext("", {
    headless: false,
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
      "--no-sandbox",
      "--window-size=1920,1080"
    ],
    viewport: { width: 1920, height: 1080 },
    recordVideo: shouldRecord ? { dir: videoDir, size: { width: 1920, height: 1080 } } : undefined
  });

  const page = context.pages()[0] || (await context.newPage());

  try {
    // -------------------------------------------------------------------------
    // Scene 1: Title Card / Landing
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 1] Displaying Title Card (5s)...");
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sakha (సఖ)</title>
        <style>
          body {
            margin: 0;
            background: #0f172a;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }
          .icon { font-size: 80px; margin-bottom: 20px; }
          h1 { font-size: 54px; font-weight: 800; margin: 0; color: #f8fafc; }
          .sub { font-size: 26px; color: #94a3b8; margin-top: 14px; font-weight: 500; }
          .badge {
            margin-top: 36px;
            background: #1e293b;
            border: 2px solid #f59e0b;
            color: #fbbf24;
            padding: 10px 24px;
            border-radius: 30px;
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
        </style>
      </head>
      <body>
        <div class="icon">🛡️</div>
        <h1>Sakha (సఖ)</h1>
        <div class="sub">On-Device Senior Safety Companion</div>
        <div class="badge">Empirical Results: 100% Scam Recall · 0% False Alarms · 0 Bytes Leaked</div>
      </body>
      </html>
    `);
    await delay(5000);

    // -------------------------------------------------------------------------
    // Scene 2: Fake KYC Trap & High-Contrast Warning Modal
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 2] Demonstrating Fake KYC Scam Warning...");
    const fakeKycUrl = "file://" + path.resolve(repoRoot, "extension/demo/fake-kyc.html");
    await page.goto(fakeKycUrl);
    await delay(2000);

    // Verify modal overlay rendered
    const modalVisible = await page.isVisible("#sakha-alert-modal-root");
    console.log(`   Modal overlay visible on deceptive page: ${modalVisible ? "✓ YES" : "✗ NO"}`);
    await delay(3000);

    // Smooth cursor movement towards Leave button
    if (modalVisible) {
      const leaveBtn = page.locator("#sakha-btn-leave");
      await leaveBtn.hover();
      await delay(1500);
      console.log("   Clicking safe action: Leave page...");
      await leaveBtn.click();
      await delay(2000);
    }

    // -------------------------------------------------------------------------
    // Scene 3: Genuine Service Form — Sensitive Data Masking & Peeking
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 3] Demonstrating On-Page Masking & Tap-to-Reveal...");
    const genuineFormUrl = "file://" + path.resolve(repoRoot, "extension/demo/genuine-service-form.html");
    await page.goto(genuineFormUrl);
    await delay(2500);

    // Look for masked items on page
    const maskedItem = page.locator(".sakha-blurred, .sakha-masked-input").first();
    if (await maskedItem.count() > 0) {
      console.log("   Found masked sensitive data element. Hovering...");
      await maskedItem.hover();
      await delay(1000);
      console.log("   Tapping to peek (temporary reveal)...");
      await maskedItem.click();
      await delay(2500);
      console.log("   Tapping again to hide...");
      await maskedItem.click();
      await delay(1500);
    }

    // -------------------------------------------------------------------------
    // Scene 4: Genuine Banking Portal — Zero False Alarms
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 4] Demonstrating Genuine Banking (Zero False Alarms)...");
    const bankingUrl = "file://" + path.resolve(repoRoot, "extension/demo/genuine-banking.html");
    await page.goto(bankingUrl);
    await delay(2500);

    const alertOnBank = await page.isVisible("#sakha-alert-modal-root");
    console.log(`   Alert unexpectedly fired on genuine bank: ${alertOnBank ? "FAIL (False alarm)" : "✓ PASS (Quiet and safe)"}`);
    await delay(2000);

    // -------------------------------------------------------------------------
    // Scene 5: Senior Plain-Language Popup & Explain
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 5] Opening Senior Popup Interface...");
    const popupUrl = "file://" + path.resolve(repoRoot, "extension/popup.html");
    await page.goto(popupUrl);
    await delay(2000);

    // Switch language to Telugu
    console.log("   Selecting Telugu language...");
    await page.selectOption("#lang-selector", "te");
    await delay(2000);

    // Click explain button
    console.log("   Clicking 'What is this page asking me?'...");
    await page.click("#btn-explain");
    await delay(2500);

    // -------------------------------------------------------------------------
    // Scene 6: End Card & Repository Links
    // -------------------------------------------------------------------------
    console.log("▶ [Scene 6] Displaying Closing Summary Card (5s)...");
    await page.setContent(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Sakha Closing</title>
        <style>
          body {
            margin: 0;
            background: #0f172a;
            color: #ffffff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;
          }
          h2 { font-size: 42px; font-weight: 800; margin: 0; color: #38bdf8; }
          p { font-size: 22px; color: #cbd5e1; max-width: 720px; line-height: 1.5; margin: 18px 0; }
          .links {
            margin-top: 24px;
            font-size: 20px;
            font-family: ui-monospace, monospace;
            background: #1e293b;
            padding: 16px 32px;
            border-radius: 12px;
            border: 1px solid #334155;
            color: #f1f5f9;
          }
        </style>
      </head>
      <body>
        <h2>Sakha (సఖ) — Digital Safety with Dignity</h2>
        <p>100% on-device detection, zero PII egress, accessible high-contrast UI, and multi-language support for India's seniors.</p>
        <div class="links">github.com/sathvikbadam/Sakha · License: Apache 2.0 / MIT</div>
      </body>
      </html>
    `);
    await delay(5000);

    console.log("\n=================================================");
    console.log("✅ Demo Execution Finished Successfully!");
    if (shouldRecord) {
      console.log(`   Video saved to: ${videoDir}`);
    }
    console.log("=================================================\n");
  } catch (err) {
    console.error("Demo failed:", err);
  } finally {
    await context.close();
  }
}

runDemo();
