import { userData } from '../fixtures'
import {
    getEditButton,
    getSearch,
    getSearchPopup,
    getTweetCreator,
} from './helpers'

describe('Test Home Page', () => {
    beforeEach(() => {
        cy.login(userData)
        cy.visit('/#/home')
    })

    it('check main elements exist', () => {
        cy.get('h1[data-cy="title"]').should('be.visible')
        getTweetCreator().should('be.visible')
        cy.get('article[data-cy="tweet"]').should('be.visible')
    })

    it('test user search', () => {
        cy.get('h1[data-cy="title"]').should('be.visible')
        getSearch().should('be.visible').type('Second')

        getSearchPopup().should('be.visible')
        cy.get('div[data-cy="user-card"]').should('be.visible')
        cy.get('div[ data-cy="search-popup"]')
            .children('div[data-cy="user-card"]')
            .children('img[data-cy="user-avatar"]')
            .should('be.visible')
            .click()
        cy.url().should('include', '/user')
        getEditButton().should('not.exist')
        cy.get('div[data-cy="more-tweet"]').should('not.exist')
        cy.get('button[data-cy="sidebar-tweet"]').should('not.exist')
        getTweetCreator().should('not.exist')
    })
})
