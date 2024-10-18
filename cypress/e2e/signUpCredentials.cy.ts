import { errors, secondUserData, userData } from '../fixtures'
import { getProfileName } from './helpers'

describe('Test Sing Up Credentials Page', () => {
    beforeEach(() => {
        cy.visit('/#/signup-credential')
    })

    it('test empty form has errors', () => {
        cy.contains('Next').click()
        for (const error in errors) {
            cy.contains(errors[error as keyof typeof errors]).should(
                'be.visible'
            )
        }
    })

    it('test sign up', () => {
        cy.signUp(userData)
        getProfileName().should('have.text', userData.name)
        cy.wait(200)
    })

    it('test sign up another user', () => {
        cy.signUp(secondUserData)
        getProfileName().should('have.text', secondUserData.name)
    })
})
