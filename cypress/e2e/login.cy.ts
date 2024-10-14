import * as data from '../fixtures'
import { getEmailInput, getLoginButton, getPasswordInput } from './helpers'

describe('Test Login Page', () => {

    beforeEach(() => {
        cy.visit('/#/login')
    })

    it('test empty form has errors', () => {
        getLoginButton().click()

        cy.contains(data.errors.passwordError).should('be.visible')
        cy.contains(data.errors.emailError).should('be.visible')
    })

    it('test sign up', () => {
        getEmailInput().type(data.userData.email)
        getPasswordInput().type(data.userData.password)
        getLoginButton().click()
        cy.url().should('equal', 'http://localhost:5173/#/profile')
        cy.contains(data.userData.name)
    })
})
