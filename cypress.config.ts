import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:5173',
        specPattern: [
            'signUp.cy.ts',
            'signUpCredentials.cy.ts',
            'login.cy.ts',
            'profile.cy.ts',
            'home.cy.ts',
        ],
    },
    viewportWidth: 1440,
    viewportHeight: 800,
})
