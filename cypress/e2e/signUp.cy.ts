describe('Test Sing Up Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('redirect from profile', () => {
        cy.visit('/#/profile')
        cy.url().should('include', '/login')
    })

    it('try to visit login', () => {
        cy.contains('Log in').click()
        cy.url().should('include', '/login')
    })

    it('try to visit sign up credentials', () => {
        cy.contains('Sign up with email').click()
        cy.url().should('include', '/signup-credential')
    })

    it('contain google sign up button', () => {
        cy.contains('Sign up with Google')
    })
})
