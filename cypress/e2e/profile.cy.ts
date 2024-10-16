import { userData } from '../fixtures'
import {
    getEditButton,
    getEditInModalButton,
    getModal,
    getModalDescription,
    getModalName,
    getModalSocial,
    getProfileDescription,
    getProfileName,
    getProfileSocial,
    getToggleThemeButton,
    getTweetButton,
} from './helpers'

describe('Test Profile Page', () => {
    beforeEach(() => {
        cy.login()
    })

    it('test create tweet', () => {
        getProfileName().should('have.text', userData.name)

        getTweetButton().should('have.text', 'Add text')
        cy.get('textarea[data-cy="tweet-text"]').type('12345abcde')
        cy.get('p[data-cy="tweet-text-letters"]').should(
            'have.text',
            '10 / 500'
        )
        getTweetButton().should('have.text', 'Tweet').click()
        cy.get('article[data-cy="tweet"]').should('be.visible')
    })

    it('Check visible profile info', () => {
        getProfileName().should('have.text', userData.name)
        getProfileDescription().should('have.text', 'Description...')
        getProfileSocial().should('have.text', '@Telegram...')
    })

    it('test edit modal', () => {
        cy.clearModal()

        getEditButton().click()
        getModal().should('be.visible')

        getModalSocial().should('have.value', '')
        getModalDescription().should('have.value', '')
        getModalName().should('have.value', userData.name)

        getModalSocial().type('@telega').should('have.value', '@telega')
        getModalDescription()
            .type('hello word')
            .should('have.value', 'hello word')
        getModalName()
            .type('2')
            .should('have.value', userData.name + '2')

        getEditInModalButton().click()
        getProfileName().should('have.text', userData.name + '2')
        getProfileDescription().should('have.text', 'hello word')
        getProfileSocial().should('have.text', '@telega')

        cy.clearModal()
    })

    it.only('test change theme', () => {
        getToggleThemeButton().click()
        // getProfileName().should('have.css', 'color', cy.hexToRgb('#000'))
    })
})
