describe ('Authorization form', () => {
  
  before(() => {
  cy.visit('https://www.beaxy.com/');
  cy.viewport(1280, 720);
  });

  it('Clicks login', () => {
  cy.get('.header-btn__login').click();
  });
  
 });