describe('Projects Page', () => {
    describe('when not authenticated', () => {
        before(() => {
            // Attempt to go to /projects (requires user to be logged in)
            cy.visit('http://localhost:5173/#/profile')
        })
        it('Redirects', () => {
            cy.url().should('equal', 'http://localhost:5173/#/login')
        })
    })
})
