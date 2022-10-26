class registrationForm {

    createAccountForm = {
        firstName: () => cy.get('#fname'),
        lastName: () => cy.get('#lname'),
        userEmail: () => cy.get('#email')
    }

} module.exports = new registrationForm();