import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { connectStorageEmulator, getStorage } from 'firebase/storage'

let firebaseApp: FirebaseApp
const getEmulator = () => import.meta.env.VITE_USE_FIREBASE_EMULATOR

export const setupFirebase = () => {
    try {
        firebaseApp = initializeApp({
            apiKey: 'AIzaSyAGirT2KwYFIXh69X2NSxQrFoBWXDXAUD4',
            authDomain: 'test-25a1a.firebaseapp.com',
            projectId: 'test-25a1a',
            storageBucket: 'test-25a1a.appspot.com',
            messagingSenderId: '935175610545',
            appId: '1:935175610545:web:00ac1a30a743b153b20290',
        })
    } catch (error) {
        console.error({ error })
    }
}

let auth: Auth
let firestore: ReturnType<typeof getFirestore>
let storage: ReturnType<typeof getStorage>

export const useAuth = () => {
    auth = getAuth(firebaseApp)
    if (getEmulator()) {
        connectAuthEmulator(auth, 'http://localhost:9099')
    }
    return auth
}

export const useFirestore = () => {
    if (!firestore) {
        firestore = getFirestore()
        if (getEmulator()) {
            connectFirestoreEmulator(firestore, 'localhost', 8080)
        }
    }
    return firestore
}

export const useStorage = () => {
    if (!storage) {
        storage = getStorage()
        if (getEmulator()) {
            connectStorageEmulator(storage, 'localhost', 9199)
        }
    }
    return storage
}
