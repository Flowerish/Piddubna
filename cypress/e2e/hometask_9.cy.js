describe ('Authorization form', () => {
  
  before(() => {
  cy.visit('https://www.beaxy.com/');
  cy.viewport(1280, 720);
  cy.get('.modal-cookie-continue>a').click();
  });

  it('Verifies incorrect login', () => {
    cy.get('.header-btn__login',{ timeout: 1000 }).click();
    cy.get('#popUp-login-email').type('tpiddubna@gmail.com');
    cy.get('#popUp-login-password').type('1234qwer');
    cy.get('.popUp-form-input-wrap.popUp-form-login-btn',{ timeout: 1000 }).click();
  });

  it('Verifies correct login', () => {
    cy.get('#popUp-login-email').clear('tpiddubna@gmail.com');
    cy.get('#popUp-login-password').clear('1234qwer');
    cy.get('#popUp-login-email').type('alphaitschool@gmail.com');
    cy.get('#popUp-login-password').type('Qwerty123!');
    cy.get('#login-checkbox').click();
    cy.get('.popUp-form-input-wrap.popUp-form-login-btn',{ timeout: 1000 }).click();
  });
  
 });