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
