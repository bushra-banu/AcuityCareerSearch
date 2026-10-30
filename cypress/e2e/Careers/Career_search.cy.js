import searchPage from "../../Page_Objects/search.page";
import applyJobPage from "../../Page_Objects/apply_Jobs";

describe("Career Search Functionality", () => {
  beforeEach(() => {
    cy.intercept("POST", "**/li/track", (req) => {
      req.destroy();
    });
  });

  it("Verify Career Search And Apply For Job Functionality", () => {
    cy.visit("/search");

    searchPage.searchByKeyword.filter(":visible").first().clear().type("QA Engineer", { delay: 50 });
    searchPage.searchByLocation.filter(":visible").first().clear().type("Ireland", { delay: 50 });
    searchPage.searchOpenJobs_Btn.click();

    searchPage.searchResultFirstTitle.should("be.visible");
    cy.get("#searchresults tbody tr").should("have.length.at.least", 1);

    searchPage.selectJobLink.first().should("be.visible").click();

    cy.url().should("include", "/job/");
    applyJobPage.applyButton.should("be.visible");
    applyJobPage.applyButton.should("have.attr", "href").and("include", "/talentcommunity/apply/");
  });
});
