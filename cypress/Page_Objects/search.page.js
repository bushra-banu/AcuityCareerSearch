class search {
  get searchByLocation() {
    return cy.get('[class="locationsearch-icon"]');
  }

  get searchOpenJobs_Btn() {
    return cy.get('[class="btn keywordsearch-button"]');
  }
  get searchByKeyword() {
    return cy.get('[class="keywordsearch-q columnized-search"]');
  }

  get searchByLocation() {
    return cy.get('[class="keywordsearch-locationsearch columnized-search"]');
  }

  get searchResultFirstTitle() {
    return cy.get('[id="searchresults"]');
  }

  get searchByTitle() {
    return cy.get('[id="title"]');
  }

  get filterBtn() {
    return cy.get('[class="btn btn-default"]');
  }

  get selectJobLink() {
    return cy.get('[class="colTitle"]');
  }
}
export default new search();
