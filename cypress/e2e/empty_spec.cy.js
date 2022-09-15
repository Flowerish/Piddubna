describe('windows signIn', () => {

  it('passes', () => {
    cy.visit('https://facebook.com/');
    cy.get('h2').invoke('val').should('equals',"Facebook допомагає тримати зв'язок з рідними та близькими");
    cy.get('[name="email"]').type('tpiddubna@gmail.com');
    cy.get('[name="pass"]').type('1234qwer');
    
  });

});