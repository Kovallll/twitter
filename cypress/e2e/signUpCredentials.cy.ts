import { errors, userData } from '../fixtures'
import {
    getConfirmPasswordInput,
    getEmailInput,
    getNameInput,
    getPasswordInput,
    getPhoneInput,
} from './helpers'

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
            cy.contains(errors[error]).should('be.visible')
        }
    })

    it('test sign up', () => {
        getNameInput().type(userData.name)
        getPhoneInput().type(userData.phone)
        getEmailInput().type(userData.email)
        getPasswordInput().type(userData.password)
        getConfirmPasswordInput().type(userData.password)
        cy.get('select[data-cy="month"]').select(userData.month)
        cy.get('select[data-cy="day"]').select(userData.day)
        cy.get('select[data-cy="year"]').select(userData.year)
        cy.contains('Next').click()
        cy.url().should('include', '/profile')
        cy.contains(userData.name).should('be.visible')
    })
})
