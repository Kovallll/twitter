describe('Sing Up Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173')
    })

    it('try to visit login', () => {
        cy.contains('Log in').click()
        cy.url().should('equal', 'http://localhost:5173/#/login')
    })

    it('try to visit sign up credentials', () => {
        cy.contains('Sign up with email').click()
        cy.url().should('equal', 'http://localhost:5173/#/signup-credential')
    })

    it('try to visit sign up credentials', () => {
        cy.contains('Sign up with email').click()
        cy.url().should('equal', 'http://localhost:5173/#/signup-credential')
    })
})
