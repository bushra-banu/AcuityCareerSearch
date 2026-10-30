/**
 * @file Registers a new user through an open job, then signs out.
 * Each run creates a real, permanent account on the live SuccessFactors site.
 */

import { test, expect } from "../../fixtures/pages.js";
import { generateUser } from "../../utils/test-data.js";

test.describe("Registration Flow Test", () => {
  let user;

  test.beforeEach(async ({ page, searchPage, applyJobPage, userRegisterPage }) => {
    user = generateUser();
    // The registration link is tied to a job and breaks when that job closes, so get a new one from an open job.
    await searchPage.open();
    await searchPage.searchOpenJobs_Btn.click();
    await searchPage.selectJobLink.first().click();
    await page.waitForLoadState("load");
    await applyJobPage.applyButton.first().click();
    await applyJobPage.applyNow.click();
    await userRegisterPage.createAccountLink.click();
  });

  test("Verify UserRegistration and JobApplication", async ({ page, userRegisterPage }, testInfo) => {
    await testInfo.attach("registered-email", { body: user.email, contentType: "text/plain" });
    //User registration details can be filled here and application can be submitted
    await userRegisterPage.firstNameField.pressSequentially(user.firstName, { delay: 50 });
    await userRegisterPage.lastNameField.pressSequentially(user.lastName, { delay: 50 });
    await userRegisterPage.emailField.pressSequentially(user.email, { delay: 50 });
    await userRegisterPage.retypeEmailField.pressSequentially(user.email, { delay: 50 });
    await userRegisterPage.passwordField.pressSequentially(user.password, { delay: 50 });
    await userRegisterPage.retypePasswordField.pressSequentially(user.password, { delay: 50 });
    await userRegisterPage.countryCodeSelection.selectOption({ label: "Ireland (+353)" });
    await userRegisterPage.phoneNumberField.pressSequentially(user.phoneNumber, { delay: 50 });
    await userRegisterPage.countrySelectionOption.selectOption({ label: "Ireland" }, { force: true });
    await userRegisterPage.termAndConditionLink.click();
    await userRegisterPage.termAndConditionAcceptBtn.click();
    await page.waitForTimeout(2000);
    await userRegisterPage.createAccountBtn.click();
    await userRegisterPage.signOutBtn.click();

    await expect(userRegisterPage.signPage).toBeVisible();
    await expect(page).toHaveURL(/login_ns=login.*showLogOutMsg=true/);
  });
});
