//Assertion lektion
// describe('About assertions', () => {

//     it('test - 1', () => {
//     const name = 'Marfa';
//     expect(name).to.equal('Marfa');
//     });

//     it('test - 2', () => {
//     const obj = {
//         lastName: 'Loz',
//         firstName: 'Kris',
//         job: {
//             title: 'QA'
//         }
//         expect(obj).to.deep.equal({lastName:'Loz', firstName: 'Kris', job:{title: 'QA'}});
//     }
//     });
// });
// describe('Classwork task', () => {
// cy.visit('https://www.beaxy.com/buy-sell/');
// cy.get('div h1').invoke('text').then('result') => {
//     cy.log('result');
//     expect(result).to.be.equal('Buy and Sell Cryptocurrency with Ease');
// }};
describe('Practical - task - 1', () => {
    it('test - 1', () => {
        cy.viewport(1500, 900);
        cy.visit('https://www.beaxy.com/');
    
        cy.wait(9000);
        cy.get('[data-tomodal="register-v2"]').eq(1).trigger('mouseover');
        cy.get('.popUp-form-close-btn', {timeouts: 3000}).eq(1).click(); 
        cy.get('.header-btn__login.header-btn__login-desktop').trigger('mousedown');
        cy.get('.header-btn__login.header-btn__login-desktop').click();
        cy.get('[id="login-checkbox"]', {timeouts: 3000}).check();
        cy.get('#login-checkbox').should('have.checked');
    });
});