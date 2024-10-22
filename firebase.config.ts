import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'

let firebaseApp: FirebaseApp

const {
    VITE_FIREBASE_APIKEY,
    VITE_FIREBASE_AUTHDOMAIN,
    VITE_FIREBASE_PROJECTID,
    VITE_FIREBASE_STORAGEBUCKET,
    VITE_FIREBASE_MESSAGINGSENDERID,
    VITE_FIREBASE_APPID,
} = import.meta.env

export const setupFirebase = () => {
    try {
        firebaseApp = initializeApp({
            apiKey: VITE_FIREBASE_APIKEY || 'mock_key',
            authDomain: VITE_FIREBASE_AUTHDOMAIN,
            projectId: VITE_FIREBASE_PROJECTID,
            storageBucket: VITE_FIREBASE_STORAGEBUCKET,
            messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
            appId: VITE_FIREBASE_APPID,
        })
    } catch (error) {
        console.error({ error })
    }
}

let auth: Auth
let firestore: ReturnType<typeof getFirestore>
let storage: ReturnType<typeof getStorage>

async function setupAuthEmulator(auth: Auth) {
    const authUrl = 'http://127.0.0.1:9099/'
    await fetch(authUrl)
    connectAuthEmulator(auth, authUrl)
}

export const getFirebaseAuth = () => {
    auth = getAuth(firebaseApp)

    if (window.location.hostname === 'localhost') {
        setupAuthEmulator(auth)
    }
    return auth
}

export const getFirebaseStore = () => {
    if (!firestore) {
        firestore = getFirestore()

        if (window.location.hostname === 'localhost') {
            connectFirestoreEmulator(firestore, '127.0.0.1', 8090)
        }
    }

    return firestore
}

export const getFirebaseStorage = () => {
    if (!storage) {
        storage = getStorage(firebaseApp)

        if (window.location.hostname === 'localhost') {
            connectStorageEmulator(storage, '127.0.0.1', 9199)
        }
    }

    return storage
}
