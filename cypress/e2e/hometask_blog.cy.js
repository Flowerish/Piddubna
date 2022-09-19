describe ('Verifying the blog post',() => {
before(() => {
cy.visit('https://www.beaxy.com/blog/');
cy.viewport(1280, 720);
cy.get('.modal-cookie-continue>a').click();
});

it('Checking image and title',() => {
cy.get('div.entry-contents h2:first-child').should("be.visible");
});

});