class search {
  get searchOpenJobs_Btn() {
    return cy.get('input.keywordsearch-button');
  }

  get searchByKeyword() {
    return cy.get('input[name="q"]');
  }

  get searchByLocation() {
    return cy.get('input[name="locationsearch"]');
  }

  get searchResultFirstTitle() {
    return cy.get('#searchresults');
  }

  get searchByTitle() {
    return cy.get('input[name="title"]');
  }

  get filterBtn() {
    return cy.get('button[type="submit"], input[type="submit"]').filter(':visible').first();
  }

  get selectJobLink() {
    return cy.get('a.jobTitle-link');
  }
}
export default new search();
