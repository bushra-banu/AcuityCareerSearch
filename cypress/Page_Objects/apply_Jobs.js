class JobsApplyPage {
  get applyButton() {
    return cy.get('a.dialogApplyBtn, button[aria-label="Apply now"], button.dropdown-toggle').filter(':visible').first();
  }

  get applyNow() {
    return cy.get('a.dialogApplyBtn, button[aria-label="Apply now"]').filter(':visible').first();
  }
}
export default new JobsApplyPage();
