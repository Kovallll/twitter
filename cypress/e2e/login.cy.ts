import { errors } from '../fixtures'
import { getLoginButton, getProfileName } from './helpers'

describe('Test Login Page', () => {
    beforeEach(() => {
        cy.visit('/#/login')
    })

    it('test empty form has errors', () => {
        getLoginButton().click()

        cy.contains(errors.passwordError).should('be.visible')
        cy.contains(errors.emailError).should('be.visible')
    })

    it('test login', () => {
        cy.login()
        getProfileName().should('be.visible')
    })
})
