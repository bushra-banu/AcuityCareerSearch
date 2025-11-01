class JobsApplyPage {
  get applyButton() {
    return cy.get('[class="btn btn-primary btn-large btn-lg dropdown-toggle"]');
  }

  get applyNow(){
    return cy.get('[id="applyOption-top-manual"]');
  }
}
export default new JobsApplyPage();
