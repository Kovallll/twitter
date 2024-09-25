import { FirebaseApp, initializeApp } from 'firebase/app'
import { Auth, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

let firebaseApp: FirebaseApp

export const setupFirebase = () => {
    try {
        firebaseApp = initializeApp({
            apiKey: 'AIzaSyCCsCK2-2LSvDHHgoH4hXCOOI8klIYxcHE',
            authDomain: 'twitter-32fe8.firebaseapp.com',
            projectId: 'twitter-32fe8',
            storageBucket: 'twitter-32fe8.appspot.com',
            messagingSenderId: '215593552373',
            appId: '1:215593552373:web:d8685f9a16a8488fdcb8bc',
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
    return auth
}

export const useFirestore = () => {
    firestore = getFirestore()
    return firestore
}

export const useStorage = () => {
    storage = getStorage()
    return storage
}
