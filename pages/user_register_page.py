class UserRegisterPage:
    """Page object for the SuccessFactors sign-in and Create an Account pages."""

    def __init__(self, page):
        self.page = page
        self.create_account_link = page.get_by_role("link", name="Create an account")
        self.email_field = page.locator('[id="fbclc_userName"]')
        self.retype_email_field = page.locator('[id="fbclc_emailConf"]')
        self.password_field = page.locator('[id="fbclc_pwd"]')
        self.retype_password_field = page.locator('[id="fbclc_pwdConf"]')
        self.first_name_field = page.locator('[id="fbclc_fName"]')
        self.last_name_field = page.locator('[id="fbclc_lName"]')
        self.create_account_btn = page.locator('[id="fbclc_createAccountButton"]')
        self.sign_out_btn = page.locator('[id="_signout"]')
        self.sign_page = page.locator('[class="sfpanel_wrapper"]')
        self.preferred_name_field = page.locator('[id="tor__fcust_prefname"]')
        self.phone_number_field = page.locator('[id="fbclc_phoneNumber"]')
        self.country_code_selection = page.locator('[id="fbclc_ituCode"]')
        self.country_selection = page.locator('[id="fbclc_country"]')
        self.country_selection_option = page.locator('[id="fbclc_country"]')
        self.term_and_condition_link = page.locator('[id="dataPrivacyId"]')
        self.term_and_condition_accept_btn = page.locator(
            '[class="globalRoundedCornersXSmall globalPrimaryButton fd-button fd-button--emphasized"]'
        )
