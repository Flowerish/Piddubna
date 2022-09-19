describe('Calculator',() => {
    before(() => {
        cy.viewport(1600,900);
        cy.visit('https://www.beaxy.com/');
        cy.get('.modal-cookie-continue>a').click();
    });
    it('Verifying output',() => {

        cy.get('[data-active-crypto="BTCUSDC"]').click();
        cy.get('[data-name="ETC"]').click();
        cy.get('[placeholder="Enter amount"]').clear().type('33');
        cy.get('span.widget__output-data').should('text', "30603.72809051");
        //cy.get('.cacl-btn-name-crypto').click();
    })
})