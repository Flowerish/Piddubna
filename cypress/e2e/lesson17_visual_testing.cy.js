describe('First visual testing',() => {

    it.skip('test 1',() => {
    cy.visit('https://www.beaxy.com/');
    cy.viewport(1920, 1630);
    cy.wait(8000);
    cy.get('.home-table').invoke('remove');
    cy.get('.custom-widget').invoke('remove');
    cy.matchImageSnapshot();
    });
});

describe('Checking mono page',() => {

    it('Checking monobank page',() => {
    cy.viewport(1920, 1630);
    cy.visit('https://www.monobank.ua/');
    cy.wait(5000);
    cy.matchImageSnapshot();
    });

    it('checking mobile block',() => {
    cy.viewport(1920, 1630);
    cy.visit('https://www.monobank.ua/');
    cy.get 
    });
});