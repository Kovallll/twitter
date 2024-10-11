describe('Sing Up Credentials Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/#/signup-credential')
    })

    it('fill form', () => {
        cy.get('input[placeholder=Name]').type('asd')
        cy.get('input[value="+375"]').type('{moveToEnd}11111')
        cy.get('input[placeholder=Email]')
        cy.get('input[placeholder=Password]')
        cy.get('input[placeholder="Confirm Password"]')
        cy.get('select[data-cy="month"]').select('February')
        cy.get('select[data-cy="day"]').select('2')
        cy.get('select[data-cy="year"]').select('2000')
    })
})
