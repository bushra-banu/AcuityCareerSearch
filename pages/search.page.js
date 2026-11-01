/**
 * Page object for the job search page and its results.
 */
export class SearchPage {
  /**
   * @param {import("@playwright/test").Page} page - Page to find the elements on.
   */
  constructor(page) {
    this.page = page;
    this.searchByKeyword = page.locator('[class="keywordsearch-q columnized-search"]');
    this.searchByLocation = page.locator('[class="keywordsearch-locationsearch columnized-search"]');
    this.searchOpenJobs_Btn = page.locator('[class="btn keywordsearch-button"]');
    this.searchResultFirstTitle = page.locator('[id="searchresults"]');
    this.searchByTitle = page.locator('[id="title"]');
    this.filterBtn = page.locator('[class="btn btn-default"]');
    // Target the link: the centre of the colTitle cell is empty space past the title text.
    this.selectJobLink = page.locator('[class="colTitle"] a.jobTitle-link');
  }

  /**
   * Opens the job search page.
   * @returns {Promise<void>}
   */
  async open() {
    await this.page.goto("/search");
  }
}
