import { Dispatch } from 'react'
import { NavigateFunction } from 'react-router-dom'
import {
    getFirebaseAuth,
    getFirebaseStore,
    setupFirebase,
} from 'firebase.config'
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import {
    defaultUser,
    images,
    Paths,
    tokensLocalStorage,
    usersCollection,
} from '@constants'
import { AllActionsType, updateNotifyText, updateTotalUser } from '@store'
import { SignUpDate, SignUpFormInput } from '@types'
import { LocalStorage } from '@utils'

setupFirebase()
const database = getFirebaseStore()
const auth = getFirebaseAuth()
const provider = new GoogleAuthProvider()

export const goggleAuth = (
    dispatch: Dispatch<AllActionsType>,
    navigate: NavigateFunction
) => {
    signInWithPopup(auth, provider)
        .then(({ user }) => {
            const localStorage = new LocalStorage()
            user.getIdToken().then((token) => {
                localStorage.setItem(tokensLocalStorage, { access: token })
            })
            const userId = user.uid
            const userInfo = {
                docId: '',
                userId,
                name: user.displayName ?? 'Anonim',
                email: user.email,
                dateBirthday: '',
                loginTime: Date.now(),
                avatar: { id: userId, url: images.profileImage },
                followers: [],
                following: [],
                description: '',
                social: '',
                tweets: null,
            }
            const docsRef = collection(database, usersCollection)
            addDoc(docsRef, userInfo)
            navigate(Paths.Profile)
        })
        .catch((error) => {
            const errorCode = error.code
            dispatch(updateNotifyText(errorCode))
            console.error(error.code + error.message)
        })
}

export const emailAndPasswordAuth = (
    dispatch: Dispatch<AllActionsType>,
    navigate: NavigateFunction,
    data: SignUpFormInput,
    date: SignUpDate,
    handleChangeIsLoading: (isLoading: boolean) => void,
    handleResetForm: () => void
) => {
    const { email, name, phone } = data
    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(({ user }) => {
            const localStorage = new LocalStorage()
            user.getIdToken().then((token) => {
                localStorage.setItem(tokensLocalStorage, { access: token })
            })
            const userId = user.uid

            const userInfo = {
                docId: '',
                userId,
                name,
                email,
                phone,
                dateBirthday: `${date.day} ${date.month} ${date.year}`,
                loginTime: Date.now(),
                avatar: { id: userId, url: images.profileImage },
                followers: [],
                following: [],
                description: '',
                social: '',
                tweets: null,
            }
            handleResetForm()
            const docsRef = collection(database, usersCollection)
            addDoc(docsRef, userInfo)
            navigate(Paths.Profile)
        })
        .catch((error) => {
            const errorCode = error.code
            handleChangeIsLoading(false)
            dispatch(updateNotifyText(errorCode))
            console.error(error.code + error.message)
        })
}

export const loginWithEmailAndPassword = (
    email: string,
    password: string,
    dispatch: Dispatch<AllActionsType>,
    navigate: NavigateFunction,
    handleResetForm: () => void
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
            user.getIdToken().then((token) => {
                const localStorage = new LocalStorage()
                localStorage.setItem(tokensLocalStorage, { access: token })
            })
            navigate(Paths.Profile)
            handleResetForm()
        })
        .catch((error) => {
            const errorCode = error.code
            dispatch(updateNotifyText(errorCode))
            console.error(error.code + error.message)
        })
}

export const signOutFirebaseAccount = (
    navigate: NavigateFunction,
    dispatch: Dispatch<AllActionsType>
) => {
    auth.signOut()
    navigate(Paths.SignUp)
    const localStorage = new LocalStorage()
    localStorage.setItem(tokensLocalStorage, null)
    dispatch(updateTotalUser(defaultUser))
}

export const resetPassword = (email: string) => {
    sendPasswordResetEmail(auth, email).catch((error) => {
        console.error(error)
    })
}
