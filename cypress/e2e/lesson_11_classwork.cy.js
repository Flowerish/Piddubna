// describe('Checking the list',() => {
//     before(() => {
//     cy.visit('https://www.beaxy.com/exchange/');
//     cy.viewport(1280, 720);
//     cy.get('.modal-cookie-continue>a').click();
// });
//     it('Verifying the list',() => {
//     cy.get('.exchange-btn-view-more__hover-group .view-more-text ').scrollIntoView();
//     });
// });

// describe('homework-10', () => {
//     it('cy.viewport() - set the viewport size and dimension', () => {
//       cy.visit('https://www.beaxy.com');

//       cy.get('.widget-wrapp__info-text-simple.widget-wrapp__info-text-color').scrollIntoView();
//       cy.wait(5000);
//       cy.get('input.widget__input-data-value').focus().clear();
//       cy.get('input.widget__input-data-value').type(45, {delay: 15});
//       cy.get('.widget__select-block .widget__select-block-active-quote').click();
//       cy.get('.widget__select-block-active-quote .widget__select-block-drop-list').scrollTo('center');
//       cy.get('[data-currentname="ETHUSD"]').click();
//       cy.get('.select-block-active-quote__value').invoke('text').should('eq', 'ETH');
//       cy.get('.widget__output-data-wrapp .widget__output-data').should('have.text', '0.03309748');
         //have.value
//     })
//   })
describe('Checking the list',() => {

    it('Verifying the list',() => {
    cy.visit('https://www.beaxy.com/');
    cy.get('.form-send-input-wrap .form-send__email',{timeout:4000}).eq(1).type('tpiddubna@gmail.com');
    });
});