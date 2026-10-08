import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import { STRINGS } from "./extension/src/i18n.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("=== 1. Checking Telugu String Glyphs and Tofu Replacement ===");
  // Check all Telugu strings in i18n
  const teStrings = STRINGS.te;
  const badCharRegex = /\uFFFD|&#xFFFD;/; // Unicode replacement character (tofu)
  let tofuCount = 0;
  for (const [key, val] of Object.entries(teStrings)) {
    if (badCharRegex.test(val)) {
      console.error(`Broken glyph found in te.${key}: ${val}`);
      tofuCount++;
    }
  }
  console.log(`Telugu string scan complete: ${tofuCount} broken glyphs found.`);

  console.log("\n=== 2. Testing Popup Rendering in Telugu ===");
  await page.goto("file://" + path.resolve(__dirname, "extension/popup.html"));
  
  // Set language to Telugu in selector
  await page.selectOption("#lang-selector", "te");
  // Trigger update manually in page context if needed or evaluate
  await page.evaluate((strings) => {
    document.getElementById("app-title").textContent = strings.app_name;
    document.getElementById("app-subtitle").textContent = strings.app_subtitle;
    document.getElementById("explain-btn-text").textContent = strings.btn_explain;
    document.getElementById("status-title").textContent = strings.warning_danger_title;
    document.getElementById("status-detail").textContent = strings.rule_fake_domain;
  }, teStrings);

  // Check for horizontal overflow
  const popupOverflow = await page.evaluate(() => {
    const el = document.body;
    return {
      scrollWidth: el.scrollWidth,
      clientWidth: el.clientWidth,
      overflow: el.scrollWidth > el.clientWidth + 2
    };
  });
  console.log("Telugu popup overflow check:", popupOverflow);

  // Check button text wrapping and target height
  const btnExplainMetrics = await page.evaluate(() => {
    const b = document.getElementById("btn-explain");
    const r = b.getBoundingClientRect();
    return { height: r.height, width: r.width, text: b.innerText };
  });
  console.log("Telugu explain button metrics:", btnExplainMetrics);

  await browser.close();
}

run().catch(console.error);
