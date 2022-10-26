/// <reference types = 'Cypress'/>
import trimDress from '../base/trimDressPage'
describe('Toolbar', () => {
 
    before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(2250, 1900);
      cy.wait(2000);
      cy.get('[aria-label="Close"]', {timeout: 5000}).click();
     });
     it('open page', () => {
    //  toolBar.openPageInSectionHome('beauty');
    cy.get('#mainnav > ul > li:nth-child(4) > ul').invoke('show');
    cy.get('#mainnav > ul > li:nth-child(4) > ul > li:nth-child(2) > a').click();
    cy.get(trimDress.addToCart, {timeout:5000}).click();
    });
  });