describe ('Authorisation form', () => {

it('Checks authorisation form', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
    cy.wait(10000);
    cy.get('header section div button').click();
    cy.get('[data-testid="buttonElement"]').click();
    cy.get('[type="email"]').type('{backspace}');
    cy.get('[type="password"]').type('{backspace}');
    cy.get('[data-testid="buttonElement"]').click();
});

});