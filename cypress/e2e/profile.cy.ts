import {
    getProfileDescription,
    getProfileName,
    getProfileSocial,
} from './helpers'

describe('Test Profile Page', () => {
    beforeEach(() => {
        cy.login()
    })

    it('Check visible profile info', () => {
        getProfileName().should('be.visible')
        getProfileDescription().should('be.visible')
        getProfileSocial().should('be.visible')
    })

    it('test edit modal', () => {
        cy.get('button[data-cy="edit-button"]').click()
        cy.get('div[data-cy="modal"]').should('be.visible')
    })
})
