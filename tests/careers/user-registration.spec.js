import { test, expect } from "../../fixtures/pages.js";
import { urls } from "../../config/urls.js";
import { generateUser } from "../../utils/test-data.js";

test.describe("Registration Flow Test", () => {
  let user;

  test.beforeEach(async ({ page }) => {
    user = generateUser();
    await page.goto(urls.RegistrationURL);
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
