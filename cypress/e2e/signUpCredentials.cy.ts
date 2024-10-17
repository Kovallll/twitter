import { errors, userData } from '../fixtures'
import { getPhoneInput } from './helpers'

describe('Test Sing Up Credentials Page', () => {
    beforeEach(() => {
        cy.visit('/#/signup-credential')
    })

    it('test phone input', () => {
        getPhoneInput()
            .type(userData.phone)
            .should('have.value', '+375 (25) 34-56-789')
    })

    it('test empty form has errors', () => {
        cy.contains('Next').click()
        for (const error in errors) {
            cy.log(error)
            cy.contains(errors[error as keyof typeof errors]).should(
                'be.visible'
            )
        }
    })

    it('test sign up', () => {
        cy.signUp(userData)
    })
})
