export class JobsApplyPage {
  constructor(page) {
    this.page = page;
    this.applyButton = page.locator('[class="btn btn-primary btn-large btn-lg dropdown-toggle"]');
    this.applyNow = page.locator('[id="applyOption-top-manual"]');
  }
}
