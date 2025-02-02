/// <reference types='cypress'/>

describe('login test', () => {
    it('Login', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        cy.get('#username').type('student')
        cy.get('#password').type('Password123')
        cy.get('#submit').click()
        cy.url().should('include', 'logged-in-successfully');
    });
});