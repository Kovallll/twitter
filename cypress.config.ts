import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5173',
        specPattern: [
            'cypress/e2e/notFound.cy.ts',
            'cypress/e2e/signUp.cy.ts',
            'cypress/e2e/signUpCredentials.cy.ts',
            'cypress/e2e/login.cy.ts',
            'cypress/e2e/profile.cy.ts',
            'cypress/e2e/home.cy.ts',
        ],
    },
    viewportWidth: 1440,
    viewportHeight: 800,
})
