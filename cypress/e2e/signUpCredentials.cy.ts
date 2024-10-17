import { errors, secondUserData, userData } from '../fixtures'

describe('Test Sing Up Credentials Page', () => {
    beforeEach(() => {
        cy.visit('/#/signup-credential')
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

    it('test sign up another user', () => {
        cy.signUp(secondUserData)
    })
})
