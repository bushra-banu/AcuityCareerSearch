class Home_page {
  get Join_Our_Team_Button() {
    return cy.get('[class="last-on-desktop"]');
  }
}

export default new Home_page();
