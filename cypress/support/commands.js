Cypress.Commands.add('login', (email, password) => {
    cy.visit('');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('form > .btn').click();
});
