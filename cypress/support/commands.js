// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('findByText', ( text) => {
    cy.contains(text);
});

Cypress.Commands.add('findByText', ( selector, text) => {
    cy.contains(selector, text);
});

Cypress.Commands.add('findByText', ( selector, text) => {
    cy.contains(selector, text, {timeout: 2000});
});

Cypress.Commands.add('findByText', (elementLocator, text) => {
    cy.get(elementLocator).contains(text);
});

Cypress.Commands.add('findByText', (text) => {  
    cy.xpath(`//*[contains(text(), '${text}')]`)
});

Cypress.Commands.add('clickElement', (locator) => {  
    if(locator[0] !== '/'){
    cy.get(`${locator}`,{timeout:4000}).should('be.visible').click();
    } else {
    cy.xpath(`${locator}`,{timeout:4000}).should('be.visible').click();
    }
});

Cypress.Commands.add('textInput',(locator, text)=>{
    cy.get(`${locator}`, {timeout: 2000})
    .should('be.visible')
    .type(text);
});

                                        
Cypress.Commands.add('typeTextInInput', (inputlocator, text) => {  

        cy.get(inputlocator, {timeout:4000})
        .should('be.visible')
        .type('Hello Sveta ' + text)
    });


Cypress.Commands.add('clickOnElement', (elementLocator) => {
        cy.get(`${elementLocator}`, {timeout: 2000}).click();
    });

Cypress.Commands.add('clickLinkText', (textLink) => {  
    cy.get('a',{timeout:4000}).contains(textLink).click();
});