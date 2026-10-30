export class UserRegisterPage {
  constructor(page) {
    this.page = page;
    this.createAccountLink = page.getByRole("link", { name: "Create an account" });
    this.emailField = page.locator('[id="fbclc_userName"]');
    this.retypeEmailField = page.locator('[id="fbclc_emailConf"]');
    this.passwordField = page.locator('[id="fbclc_pwd"]');
    this.retypePasswordField = page.locator('[id="fbclc_pwdConf"]');
    this.firstNameField = page.locator('[id="fbclc_fName"]');
    this.lastNameField = page.locator('[id="fbclc_lName"]');
    this.createAccountBtn = page.locator('[id="fbclc_createAccountButton"]');
    this.signOutBtn = page.locator('[id="_signout"]');
    this.signPage = page.locator('[class="sfpanel_wrapper"]');
    this.prefferedNameField = page.locator('[id="tor__fcust_prefname"]');
    this.phoneNumberField = page.locator('[id="fbclc_phoneNumber"]');
    this.countryCodeSelection = page.locator('[id="fbclc_ituCode"]');
    this.countrySelection = page.locator('[id="fbclc_country"]');
    this.countrySelectionOption = page.locator('[id="fbclc_country"]');
    this.termAndConditionLink = page.locator('[id="dataPrivacyId"]');
    this.termAndConditionAcceptBtn = page.locator(
      '[class="globalRoundedCornersXSmall globalPrimaryButton fd-button fd-button--emphasized"]'
    );
  }
}
