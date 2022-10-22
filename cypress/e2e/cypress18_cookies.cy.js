/// <reference types = 'Cypress'/>
describe('Test for cookies',() => {

    it('check cookies',() => {
    cy.viewport(1960, 1235);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
    cy.getCookie('beaxy_cookie_notificated', {timeout: 4000}).should('have.property', 'value', 'true');
    });
  
    it('Set cookies',() => {
    cy.viewport(1960, 1235);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.setCookie('alphaschool', 'true');
    });
 
    it('Clear cookies', () => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookie('_ga');
    });

    it('Update cookies', () => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
        cy.clearCookie('beaxy_cookie_notificated').then(function(){
            cy.setCookie('beazy_cookie_notificated', 'false').then(function(){
              cy.getCookie('beazy_cookie_notificated', {timeout:4000}).should('have.property','value','false')
            });
        });
    });
    
    it('check length cookies', () => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.getCookie().should('have length', 3);
    });

    it('check clear cookies', () => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.clearCookies();
        cy.getCookies().should('be.empty');
    })

    it('Set local storage', () => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('TestKey', 'TestValue');
    })
    
    it('Get local storage',() => {
        cy.viewport(1960, 1235);
        cy.visit('https://www.beaxy.com/');
        cy.wait(5000);
        cy.setLocalStorage('TestKey', 'TestValue');
        cy.getLocalStorage('TestKey').should('equal','TestValue');
        cy.clearLocalStorage();
    });
});
