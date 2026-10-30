class userRegisterPage {

  get emailField() {
    return cy.get('[id="fbclc_userName"]');
  }

  get retypeEmailField() {
    return cy.get('[id="fbclc_emailConf"]');
  }

  get passwordField() {
    return cy.get('[id="fbclc_pwd"]');
  }

  get retypePasswordField() {

    return cy.get('[id="fbclc_pwdConf"]');

  }

  get firstNameField() {
    return cy.get('[id="fbclc_fName"]');
  }

  get lastNameField() {
    return cy.get('[id="fbclc_lName"]');
  }
  
get createAccountBtn() {
    return cy.get('[id="fbclc_createAccountButton"]');
  } 
  get prefferedNameField() {
    
    return cy.get('[id="tor__fcust_prefname"]');
  }
  
  get phoneNumberField() {
    return cy.get('[id="tor__fcellPhone"]');
  }

  get countrySelection() {
    return cy.get('[id="fbclc_country"]');
  }

  get countrySelectionOption() {
    return cy.get('[id="fbclc_country"]');
  }

 get termAndConditionLink() {

    return cy.get('[id="dataPrivacyId"]');
 }

 get termAndConditionAcceptBtn(){
    return cy.get('[class="globalRoundedCornersXSmall globalPrimaryButton fd-button fd-button--emphasized"]');
 }
}
export default new userRegisterPage();