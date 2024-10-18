import { secondUserData, userData } from '../fixtures'
import { hexToRgb } from '../support/commands'
import {
    getBody,
    getEditButton,
    getEditInModalButton,
    getModal,
    getModalDescription,
    getModalName,
    getModalSocial,
    getProfileDescription,
    getProfileName,
    getProfileSocial,
    getSearch,
    getSearchPopup,
    getToggleThemeButton,
    getTweetButton,
} from './helpers'

describe('Test Profile Page', () => {
    before(() => {
        cy.login(secondUserData)
        getProfileName().should('have.text', secondUserData.name)

        cy.get('textarea[data-cy="tweet-text"]').type('12345')
        getTweetButton().should('have.text', 'Tweet').click()
        cy.get('article[data-cy="tweet"]').should('be.visible')
        cy.get('button[data-cy="logout"]').click()
        cy.get('button[data-cy="confirm-button"]').click()
    })

    beforeEach(() => {
        cy.login(userData)
    })

    it('Check visible profile info', () => {
        getProfileName().should('have.text', userData.name)
        getProfileDescription().should('have.text', 'Description...')
        getProfileSocial().should('have.text', '@Telegram...')
    })

    it('test edit modal', () => {
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

    it('test change theme', () => {
        getBody().should('have.css', 'color').and('eq', hexToRgb('#000'))
        getBody()
            .should('have.css', 'background-color')
            .and('eq', hexToRgb('#fff'))
        getToggleThemeButton().click()
        getBody().should('have.css', 'color').and('eq', hexToRgb('#fff'))
        getBody()
            .should('have.css', 'background-color')
            .and('eq', hexToRgb('#000'))
    })

    it('test search tweet', () => {
        getProfileName().should('have.text', userData.name)
        getSearch().should('be.visible').type('123')

        getSearchPopup().should('be.visible')
        cy.get('a').contains('12345').first().click({ force: true })
        cy.contains(secondUserData.name).should('be.visible')
        cy.contains('Tweet').should('be.visible')
    })
})
