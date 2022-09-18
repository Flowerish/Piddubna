describe ('Career page', () => {
  
    before(() => {
    cy.visit('https://www.beaxy.com/careers/');
    cy.viewport(1280, 720);
    });
  

    it('Checks titles',()=>{
        cy.get("[class*='career-body__title']").should('be.visible');
        cy.get("[class*='career-header__title']").should('be.visible');
        cy.get("[class*='content-item__title']").should('be.visible');
        cy.get("[class*='career-footer__title']").should('be.visible');
        cy.get(".footer-nav__item-links").should('be.visible');
        
    });

   });