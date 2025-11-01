import searchPage from "../../page_Objects/search.page";
import applyJobPage from "../../page_Objects/apply_Jobs";
import userRegisterPage from "../../page_Objects/userRegisterPage";

describe("Career Search Functionality", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('acuityUrl')); // Navigate to the Amazon Jobs homepage
    //careerPage.rejectAll.click();
  });

  it("Verify Career Search And Apply For Job Functionality", () => {
    searchPage.searchByKeyword.type("QA Engineer", { delay: 50 });
    searchPage.searchByLocation.type("Ireland", { delay: 50 });
    searchPage.searchOpenJobs_Btn.click();
    //cy.get(').first().should('contain.text', 'Quality Assurance Engineer');
    //Assert
    searchPage.searchResultFirstTitle
      .first()
      .should("contain.text", "Quality Assurance Engineer");
    searchPage.searchByTitle.type("Quality", { delay: 50 });
    searchPage.filterBtn.click();
    searchPage.selectJobLink.first().click();
    //Apply For Job
    applyJobPage.applyButton.first().click();
    applyJobPage.applyNow.click();

    //User registration details can be filled here and application can be submitted
   
    userRegisterPage.firstNameField.type("Bushra", { delay: 50 });
    userRegisterPage.lastNameField.type("Banu", { delay: 50 });
    userRegisterPage.prefferedNameField.type("Bushra", { delay: 50 });
    userRegisterPage.emailField.type("bushra.banu8@gmail.com", { delay: 50 });
    userRegisterPage.retypeEmailField.type("bushra.banu8@gmail.com", { delay: 50 });
    userRegisterPage.passwordField.type("Acuity@1234", { delay: 50 });
    userRegisterPage.retypePasswordField.type("Acuity@1234", { delay: 50 });
    userRegisterPage.phoneNumberField.type("0894375134", { delay: 50 });
    userRegisterPage.countrySelection.click();
    userRegisterPage.countrySelectionOption.contains("Ireland").click();
    userRegisterPage.addressField.type("42,Mews,Eden", { delay: 50 });
    userRegisterPage.cityField.type("Cork", { delay: 50 });
    userRegisterPage.zipCodeField.type("T12 YX22", { delay: 50 });
    userRegisterPage.employmentInfoOption.contains("NO").click();



  });
});
