/// <reference types = 'Cypress'/>
import toolBar from '../e2e/page_object/base/toolBar'
describe ('Burger menu', () => {
    before(() => {
        cy.visit('http://autopract.com');
        cy.viewport(2250, 1900);
        cy.wait(2000);
        cy.get('[aria-label="Close"]', {timeout: 5000}).click();
       });
    it('opening burger menu - and checking functionality',() => {
    cy.get('app-left-menu .sidebar-bar', {timeout:5000}).click();
    cy.get('app-left-menu .sidebar-bar').should('be.visible');
    // cy.get('.sidebar-menu > li > a >.sub-arrow:nth-child(1)').click(); //тупо не могу подобрать нормальный селектор, нужна помощь
    // cy.get('.sidebar-menu > li > a >.sub-arrow:nth-child(1)').should('be.visible');
    cy.get('.sidenav .sidebar-back .fa-angle-left:nth-child(1)').click();
    cy.get('app-left-menu .sidebar-bar').should('be.hidden'); 

    });

});