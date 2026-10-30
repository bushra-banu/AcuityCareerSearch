/**
 * Page object for a job's details page on the careers site.
 */
export class JobsApplyPage {
  /**
   * @param {import("@playwright/test").Page} page - Page to find the elements on.
   */
  constructor(page) {
    this.page = page;
    this.applyButton = page.locator('[class="btn btn-primary btn-large btn-lg dropdown-toggle"]');
    this.applyNow = page.locator('[id="applyOption-top-manual"]');
  }
}
