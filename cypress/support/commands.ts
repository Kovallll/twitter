// import { initializeApp } from 'firebase/app'
// import {
//     Auth,
//     connectAuthEmulator,
//     getAuth,
//     signInWithEmailAndPassword,
// } from 'firebase/auth'
// import { getFirebaseAuth } from '../../firebase.config'

// declare global {
//     namespace Cypress {
//         interface Chainable {
//             signIn(redirectPath: string): void
//             setupFirebase(
//                 redirectPath?: string,
//                 credentials?: { email: string; password: string }
//             ): void
//         }
//     }
// }
// const auth = getAuth()
// Cypress.Commands.add('signIn', (redirectPath) => {
//     signInWithEmailAndPassword(auth, 'test12@email.com', 'Bb111122').then(
//         () => {
//             cy.visit(redirectPath)
//             cy.url().should('equal', 'http://localhost:5173/#/profile')
//         }
//     )
// })

// Cypress.Commands.add('setupFirebase', () => {
//     initializeApp({
//         apiKey: 'AIzaSyAGirT2KwYFIXh69X2NSxQrFoBWXDXAUD4',
//         authDomain: 'test-25a1a.firebaseapp.com',
//         projectId: 'test-25a1a',
//         storageBucket: 'test-25a1a.appspot.com',
//         messagingSenderId: '935175610545',
//         appId: '1:935175610545:web:00ac1a30a743b153b20290',
//     })

//     async function setupAuthEmulator(auth: Auth) {
//         const authUrl = 'http://localhost:9099'
//         await fetch(authUrl)
//         connectAuthEmulator(auth, 'http://localhost:9099')
//     }

//     setupAuthEmulator(auth)
// })
