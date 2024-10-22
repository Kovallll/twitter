describe('Test Not Found Page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.wait(1)
    })

    it('check main elements exist', () => {
        cy.visit('/#/random-url')
        cy.contains('Page not found').should('be.visible')
        cy.contains('Back').should('be.visible').click()
        cy.url().should('equal', 'http://localhost:5173/')
    })
})
