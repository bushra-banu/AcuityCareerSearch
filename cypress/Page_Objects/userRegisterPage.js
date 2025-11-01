class userRegisterPage {

  get emailField() {
    return cy.get('[class="form-control invalidInput"]');
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
  
  get prefferedNameField() {
    
    return cy.get('[id="tor__fcust_prefname"]');
  }
  
  get phoneNumberField() {
    return cy.get('[id="tor__fcellPhone"]');
  }

  get countrySelection() {
    return cy.get('[id="9:_input"]');
  }

  get countrySelectionOption() {
    return cy.get('[id="9:_selectButton"]');
  }

  get addressField() {
  
    return cy.get('id="tor__faddress"');  
  }

  get cityField() {
    return cy.get('[id="tor__fcity"]');
  }

  get stateField() {
    return cy.get('[id="13:_input"]');
  }

  get stateFieldOption() {
    return cy.get('[id="13:_selectButton"]');
  }

  get zipCodeField() {
    return cy.get('[id="tor__fzip"]');
  }

  get employmentStatusDropdown() {
    return cy.get('id="17:_input"');
  }

  get employmentInfoOption() {
    return cy.get('[id="18:item1"]');
  }

  get countryRegionDropdown() {
    return cy.get('[id="fbclc_country"]');
  }

  get applyBtn() {
    return cy.get('[id="fbqa_apply"');
  }
}