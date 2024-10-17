import {
    getConfirmPasswordInput,
    getEditButton,
    getEditInModalButton,
    getEmailInput,
    getLoginButton,
    getModalDescription,
    getModalName,
    getModalSocial,
    getNameInput,
    getPasswordInput,
    getPhoneInput,
} from '../e2e/helpers'
import { userData } from '../fixtures'
import { UserData } from '../fixtures/types'

declare global {
    namespace Cypress {
        interface Chainable {
            signUp(credentials: UserData): void
            login(credentials: UserData): void
            clearModal(): void
        }
    }
}

Cypress.Commands.add('signUp', (credentials: UserData) => {
    cy.visit('/#/signup-credential')
    getNameInput().type(credentials.name)
    getPhoneInput().type(credentials.phone)
    getEmailInput().type(credentials.email)
    getPasswordInput().type(credentials.password)
    getConfirmPasswordInput().type(credentials.password)
    cy.get('select[data-cy="month"]').select(credentials.month)
    cy.get('select[data-cy="day"]').select(credentials.day)
    cy.get('select[data-cy="year"]').select(credentials.year)
    cy.contains('Next').click()
    cy.url().should('include', '/profile')
})

Cypress.Commands.add('login', (credentials: UserData) => {
    cy.visit('/#/login')
    getEmailInput().type(credentials.email)
    getPasswordInput().type(credentials.password)
    getLoginButton().click()
    cy.url().should('equal', 'http://localhost:5173/#/profile')
})

Cypress.Commands.add('clearModal', () => {
    getEditButton().click()
    getModalSocial().clear().should('have.value', '')
    getModalDescription().clear().should('have.value', '')
    getModalName()
        .clear()
        .type(userData.name)
        .should('have.value', userData.name)
    getEditInModalButton().click()
})

export const hexToRgb = (hex: string) => {
    let r = 0
    let g = 0
    let b = 0

    if (hex.length === 4) {
        r = parseInt(`${hex[1]}${hex[1]}`, 16)
        g = parseInt(`${hex[2]}${hex[2]}`, 16)
        b = parseInt(`${hex[3]}${hex[3]}`, 16)
    } else if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16)
        g = parseInt(hex.slice(3, 5), 16)
        b = parseInt(hex.slice(5, 7), 16)
    }

    return `rgb(${r}, ${g}, ${b})`
}
