import searchPage from "../../page_Objects/search.page";
import applyJobPage from "../../page_Objects/apply_Jobs";

describe("Career Search Functionality", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/li/track", (req) => {
      req.destroy();
    });
  });

  it("Verify Career Search And Apply For Job Functionality", () => {
    cy.visit("/search");
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
    applyJobPage.applyButton.first().click();

    cy.window().then((win) => {
      cy.log("Window object:", win);
      cy.stub(win, "open").as("windowOpen").returns(null);
      cy.stub(win.location, "href").as("locationHref").returns(null);
      //cy.stub(win.location, "assign").as("locationAssign").returns(null);
    });

    cy.intercept("POST", "**/careers?company=AcuityBrands", (req) => {
      cy.log("Form data:", req.body);
      req.destroy();
    });

    applyJobPage.applyNow.click();
  });
});
