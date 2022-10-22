/// <reference types = "Cypress"/>

describe('Burger menu', () => {
    before(() => {
        cy.visit('http://autopract.com/');
        cy.viewport(2250, 1900);
        cy.wait(2000);
        cy.clickOnElement('[aria-label="Close"]');
    });

    it.skip('check show', () => {
        cy.get('#mainnav > ul > li:nth-child(2)').click();
        cy.get('#mainnav > ul > li:nth-child(2) > ul').invoke('show');
        cy.get(".nav-submenu > li > [ng-reflect-router-link='/home/watch']").click()            
    });

    it.skip('check shop',() => {
        cy.get('#mainnav > ul > li:nth-child(3)').click();
        cy.get('#mainnav > ul > li:nth-child(3) > ul').invoke('show');
        cy.get(".nav-submenu > li > [ng-reflect-router-link='/shop/collection/left/sidebar']").click();
        });
});

describe('Page objects',() => {
    before(() => {
        cy.visit('http://autopract.com/');
        cy.viewport(2250, 1900);
        cy.wait(2000);
        cy.clickOnElement('[aria-label="Close"]');
    });

});