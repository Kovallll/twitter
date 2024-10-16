import { initializeApp } from 'firebase/app'
import {
    Auth,
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
} from 'firebase/auth'
import {
    addDoc,
    collection,
    connectFirestoreEmulator,
    getFirestore,
} from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'

import {
    getEditButton,
    getEditInModalButton,
    getEmailInput,
    getLoginButton,
    getModalDescription,
    getModalName,
    getModalSocial,
    getPasswordInput,
} from '../e2e/helpers'
import { userData } from '../fixtures'

declare global {
    namespace Cypress {
        interface Chainable {
            signIn(redirectPath: string): void
            deleteUser(): void
            setupFirebase(): void
            emailAndPasswordAuth(data: {
                email: string
                name: string
                phone: string
                password: string
            }): void
            login(): void
            clearModal(): void
            hexToRgb(hex: string): string
        }
    }
}

// Cypress.Commands.add('signIn', (redirectPath) => {
//     signInWithEmailAndPassword(auth, 'test12@email.com', 'Bb111122').then(
//         () => {
//             cy.visit(redirectPath)
//             cy.url().should('equal', 'http://localhost:5173/#/profile')
//         }
//     )
// })
let auth: Auth
let firestore: ReturnType<typeof getFirestore>
let storage: ReturnType<typeof getStorage>

Cypress.Commands.add('setupFirebase', () => {
    const firebase = initializeApp({
        apiKey: 'AIzaSyAGirT2KwYFIXh69X2NSxQrFoBWXDXAUD4',
        authDomain: 'test-25a1a.firebaseapp.com',
        projectId: 'test-25a1a',
        storageBucket: 'test-25a1a.appspot.com',
        messagingSenderId: '935175610545',
        appId: '1:935175610545:web:00ac1a30a743b153b20290',
    })

    if (!auth) {
        auth = getAuth(firebase)

        connectAuthEmulator(auth, 'http://localhost:9099')
    }

    if (!firestore) {
        firestore = getFirestore()

        connectFirestoreEmulator(firestore, 'localhost', 8090)
    }

    if (!storage) {
        storage = getStorage(firebase)

        connectStorageEmulator(storage, 'localhost', 9199)
    }
})

Cypress.on('uncaught:exception', () => {
    return false
})

Cypress.Commands.add('deleteUser', () => {
    auth.currentUser?.delete()
})

Cypress.Commands.add(
    'emailAndPasswordAuth',
    (data: {
        email: string
        name: string
        phone: string
        password: string
    }) => {
        const { email, name, phone, password } = data
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                user.getIdToken().then((token) => {
                    localStorage.setItem(
                        'token',
                        JSON.stringify({ access: token })
                    )
                })
                const userId = user.uid

                const userInfo = {
                    docId: '',
                    userId,
                    name,
                    email,
                    phone,
                    avatar: { id: userId, url: '' },
                    followers: [],
                    following: [],
                    description: null,
                    social: null,
                    tweets: null,
                }
                const docsRef = collection(firestore, 'users')
                addDoc(docsRef, userInfo)
                console.log(userInfo, 'userInfo')
            })
            .catch((error) => {
                console.error(error.code + error.message)
            })
    }
)

Cypress.Commands.add('login', () => {
    cy.session('loginSession', () => {
        cy.visit('/#/login')
        getEmailInput().type(userData.email)
        getPasswordInput().type(userData.password)
        getLoginButton().click()
        cy.url().should('equal', 'http://localhost:5173/#/profile')
    })
    cy.visit('/#/profile')
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

Cypress.Commands.add('hexToRgb', (hex: string) => {
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
})
