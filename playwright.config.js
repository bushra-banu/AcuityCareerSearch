/**
 * @file Playwright settings: base URL, timeouts, reporters, recorded artifacts and browser.
 */

import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  outputDir: "./reports/artifacts",
  timeout: 120_000,
  expect: { timeout: 10_000 },
  // The registration test creates a real account, so a failure must not re-run it.
  retries: 0,
  workers: 1,
  reporter: [
    ["list"],
    ["html", { outputFolder: "reports/html", open: "never" }],
    ["junit", { outputFile: "reports/junit.xml" }],
    ["json", { outputFile: "reports/results.json" }],
    ["allure-playwright", { resultsDir: "reports/allure-results" }],
  ],
  use: {
    baseURL: "https://careers.acuityinc.com",
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
    video: "on",
    screenshot: "on",
    trace: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1400, height: 1200 } },
    },
  ],
});
