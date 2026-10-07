// playwright.config.js — Sakha demo walkthrough config
// @ts-check
const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testMatch: ["demo_walkthrough.test.js"],
  timeout: 30000,
  reporter: [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
