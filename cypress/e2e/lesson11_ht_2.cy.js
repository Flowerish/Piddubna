
/*Comments:
1)  поменяй ссылку и тест начнет работать и проходить - https://yevheniiahlovatska.editorx.io/web-practice/post/manage-your-blog-from-your-live-site

вот пример, толкьо пожалуйста, потестируй попробуй!

describe ('Добавление комментария' , () => {
   it('Авторизация сразу+удаление', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
    cy.wait(9000);
    cy.get('[data-testid="section-container"] button').eq(0).click();
    Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.get('[id*="Email"] button').click();
    cy.get('[type="email"]').type('fortestonly@mail.com', {delay : 20});
    cy.get('[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.wait(5000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
    cy.get('[aria-describedby="placeholder-editor"]').type('comment1');
    cy.get('[data-hook="submit-button"]').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'comment1');
    cy.wait(5000);
    cy.get('[data-hook="actions-menu-btn"] svg').eq(0).scrollIntoView().click();
    cy.get('[data-content="Delete"]').click();
    cy.contains('[data-hook="submit-button"]', 'Delete').click();
  });
});
*/

describe('Adding comment and checking it', () => { 

it('Checks comments section', () => {
cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event');
// cy.get('#viewer-cscaj').scrollIntoView();
cy.scrollTo('bottom');
cy.wait(5000);
cy.get('[data-hook="recent-posts-desktop__link"]', {timeout: 10000}).scrollIntoView();
cy.get('[data-hook=comment-box-placeholder]').click();
cy.get('#root-comment-box-start').type('my comment', {delay: 20});
});

});
