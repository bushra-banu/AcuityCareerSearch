/**
 * @file Searches for a job, filters the results and starts an application.
 * The application POST is blocked, so this spec does not create anything on the live site.
 * Set EXPECTED_JOB_TITLE to override the job title expected in the results.
 */

import { test, expect } from "../../fixtures/pages.js";

const expectedJobTitle = process.env.EXPECTED_JOB_TITLE ?? "Data Engineer";

test.describe("Career Search Functionality", () => {
  test.beforeEach(async ({ page }) => {
    await page.route("**/li/track", (route) =>
      route.request().method() === "POST" ? route.abort() : route.fallback()
    );
  });

  test("Verify Career Search And Apply For Job Functionality", async ({ page, searchPage, applyJobPage }, testInfo) => {
    await searchPage.open();
    await searchPage.searchByKeyword.pressSequentially("QA Engineer", { delay: 50 });
    await searchPage.searchByLocation.pressSequentially("Ireland", { delay: 50 });
    await searchPage.searchOpenJobs_Btn.click();
    //Assert
    await expect(searchPage.searchResultFirstTitle.first()).toContainText(expectedJobTitle);
    await searchPage.searchByTitle.pressSequentially("Quality", { delay: 50 });
    await searchPage.filterBtn.click();
    await expect(searchPage.selectJobLink.first()).toContainText("Quality");

    await searchPage.selectJobLink.first().click();
    // Apply Now does nothing until the site's scripts have loaded, and they can take several seconds.
    await page.waitForLoadState("load");
    await applyJobPage.applyButton.first().click();

    await page.evaluate(() => {
      window.open = () => null;
    });

    // The application POST is blocked so that nothing reaches the careers backend.
    await page.route("**/careers?company=AcuityBrands", (route) =>
      route.request().method() === "POST" ? route.abort() : route.fallback()
    );

    const applyRequest = page.waitForRequest(
      (req) => req.method() === "POST" && req.url().includes("/careers?company=AcuityBrands")
    );
    await applyJobPage.applyNow.click();

    const request = await applyRequest;
    await testInfo.attach("form-data", { body: request.postData() ?? "", contentType: "text/plain" });
  });
});
