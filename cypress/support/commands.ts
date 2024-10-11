import { signInWithEmailAndPassword } from 'firebase/auth'

import { getFirebaseAuth } from '../../firebase.config'

declare global {
    namespace Cypress {
        interface Chainable {
            signIn(
                redirectPath?: string,
                credentials?: { email: string; password: string }
            ): void
        }
    }
}

Cypress.Commands.add('signIn', (redirectPath = '/') => {
    signInProgrammatically()

    cy.visit(redirectPath)
})

export function signInProgrammatically() {
    const auth = getFirebaseAuth()

    signInWithEmailAndPassword(auth, 'test@gmail.com', 'Aa1111').catch((e) => {
        cy.log(`User could not sign in programmatically!`)
        console.error(e)
    })
}
