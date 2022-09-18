// describe('Open window', () => {

//   before(() => {
//      cy.log('before');
//   });

//   after(() => {
//      cy.log('after');
//   });

//   beforeEach(() => {
//     cy.visit("https://facebook.com/");
//   });

//   afterEach(() => {
//    cy.log('afterEach');
//   });

//   it('passes', () => {
//     cy.get('[name="email"]').type('tpiddubna@gmail.com'); 
//   });

//   it('passes', () => {
//     cy.get('[name="pass"]').type('t1234qwer'); 
//   });
  
//   it('passes', () => {
//      cy.get('[name="login"]').click();
// });
// });

// describe('Authorization form', () => {

//   beforeEach(() =>{
//   cy.visit('https://facebook.com/');
//   });

//   it('Select form', () => {
//   cy.get('#day').select('25');
//   cy.get('#month').select('december');
//   cy.get('#year').select('1991');

//   cy.get('#day').invoke('val').should('eq','25');
//   cy.get('#month').invoke('val').should('eq','12');
//   cy.get('#year').invoke('val').should('eq','1991');
//   });
// });
// describe('Authorization form', () => {
//   beforeEach(() =>{
//       cy.visit('https://www.beaxy.com/register/');
//       });
//       it('Select form', () => {
//       // cy.contains('Fiat is now on Beaxy');
//       // cy.wait(3000);
//       cy.get('svg[class*="select"]').select('eq',"AW');
//       });       
// });