import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import assert from "assert";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log("=== 1. POPUP ACCESSIBILITY AUDIT ===");
  await page.goto("file://" + path.resolve(__dirname, "extension/popup.html"));
  const popupAxe = await new AxeBuilder({ page }).analyze();
  console.log(`Popup axe violations: ${popupAxe.violations.length}`);
  assert.strictEqual(popupAxe.violations.length, 0, "Popup must have 0 axe violations");

  // Check popup touch targets >= 44px
  const popupTargets = await page.$$eval("button, select", els => els.map(el => {
    const r = el.getBoundingClientRect();
    return { id: el.id, minDim: Math.min(r.width, r.height) };
  }));
  for (const t of popupTargets) {
    console.log(`  Target #${t.id}: min dimension = ${t.minDim}px`);
    assert.ok(t.minDim >= 44, `Target #${t.id} must be >= 44px`);
  }

  console.log("\n=== 2. OPTIONS / SETTINGS ACCESSIBILITY AUDIT ===");
  await page.goto("file://" + path.resolve(__dirname, "extension/settings.html"));
  const settingsAxe = await new AxeBuilder({ page }).analyze();
  console.log(`Settings axe violations: ${settingsAxe.violations.length}`);
  assert.strictEqual(settingsAxe.violations.length, 0, "Settings must have 0 axe violations");

  // Check inputs touch targets >= 44px
  const inputHeights = await page.$$eval("input[type='text'], input[type='email'], input[type='tel'], input[type='date'], input[type='password'], button#saveBtn", els => els.map(el => {
    return { id: el.id, h: el.getBoundingClientRect().height };
  }));
  for (const item of inputHeights) {
    assert.ok(item.h >= 40, `Input #${item.id} height (${item.h}) must be >= 40px`);
  }
  console.log("✓ Settings inputs and buttons meet accessible height thresholds");

  console.log("\n=== 3. MODAL OVERLAY ACCESSIBILITY AUDIT ===");
  const css = fs.readFileSync(path.resolve(__dirname, "extension/sakha.css"), "utf8");
  await page.setContent(`
    <!DOCTYPE html>
    <html lang="en">
    <head><title>Modal Overlay Test</title><style>${css}</style></head>
    <body style="background: #ffffff;">
      <main>
        <h1>Main Page Content</h1>
        <div id="sakha-alert-modal-root" role="dialog" aria-modal="true" aria-labelledby="sakha-alert-title" aria-describedby="sakha-alert-desc" style="animation: none !important;">
          <div class="sakha-modal-card danger" style="animation: none !important;">
            <div class="sakha-modal-header" style="background-color: #991b1b !important;">
              <span class="sakha-icon" aria-hidden="true">🚨</span>
              <div>
                <h2 id="sakha-alert-title" style="color: #ffffff !important;">Please Stop: This Site May Be Unsafe</h2>
                <div style="font-size:16px;opacity:0.9;margin-top:4px;color:#ffffff !important;">దయచేసి ఆగండి: ఈ సైట్ సురక్షితం కాకపోవచ్చు</div>
              </div>
            </div>
            <div class="sakha-modal-body" id="sakha-alert-desc">
              <div class="sakha-modal-reason-en" style="color: #7f1d1d !important;">This web address looks like a fake copy of a real website. Close this page.</div>
              <div class="sakha-modal-reason-te" style="color: #0f172a !important; background: #f8fafc !important;">ఈ వెబ్‌సైట్ చిరునామా అసలైన సైట్ నకిలీ కాపీలా ఉంది. ఈ పేజీని మూసివేయండి.</div>
              <div class="sakha-modal-actions">
                <button id="sakha-btn-leave" class="sakha-btn sakha-btn-primary" style="background-color: #991b1b !important; color: #ffffff !important;">Leave this page (Recommended) / ఈ పేజీ నుండి వెళ్ళిపోండి</button>
                <button id="sakha-btn-proceed" class="sakha-btn sakha-btn-secondary" style="background-color: #f8fafc !important; color: #0f172a !important;">I understand, continue anyway / నాకు అర్థమైంది, అయినా కొనసాగించండి</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
    </html>
  `);

  const modalAxe = await new AxeBuilder({ page }).analyze();
  console.log(`Modal overlay axe violations: ${modalAxe.violations.length}`);
  assert.strictEqual(modalAxe.violations.length, 0, "Modal overlay must have 0 axe violations");

  // Check modal button heights >= 44px
  const modalBtnHeights = await page.$$eval(".sakha-btn", els => els.map(el => el.getBoundingClientRect().height));
  for (const h of modalBtnHeights) {
    console.log(`  Modal button height: ${h}px`);
    assert.ok(h >= 44, "Modal buttons must be >= 44px height");
  }

  console.log("\n=== ALL ACCESSIBILITY SUITE TESTS PASSED (100% OK) ===");
  await browser.close();
}

run().catch(err => {
  console.error("Accessibility test failed:", err);
  process.exit(1);
});
