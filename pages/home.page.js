/**
 * Page object for the careers site home page.
 */
export class HomePage {
  /**
   * @param {import("@playwright/test").Page} page - Page to find the elements on.
   */
  constructor(page) {
    this.page = page;
    this.Join_Our_Team_Button = page.locator('[class="last-on-desktop"]');
  }
}
