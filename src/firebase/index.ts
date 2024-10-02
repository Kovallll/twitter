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
    signInWithEmailAndPassword,
    signInWithPopup,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

import { Paths, usersCollection } from '@constants'
import {
    LoginAction,
    SingUpAction,
    updateLoginError,
    updateSignUpError,
} from '@store'
import { SignUpDate, SignUpFormInput } from '@types'
import { LocalStorage } from '@utils'

setupFirebase()
const database = getFirebaseStore()
const auth = getFirebaseAuth()
const provider = new GoogleAuthProvider()
const localStorage = new LocalStorage()

export const goggleAuth = (
    dispatch: Dispatch<SingUpAction | LoginAction>,
    navigate: NavigateFunction
) => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            localStorage.setItem('isSignedIn', true)
            if (user.emailVerified) {
                navigate(Paths.Profile)
            }
        })
        .catch((error) => {
            const errorCode = error.code
            dispatch(updateSignUpError(errorCode))
            console.error(error.code + error.message)
        })
}

export const emailAndPasswordAuth = (
    dispatch: Dispatch<SingUpAction | LoginAction>,
    navigate: NavigateFunction,
    data: SignUpFormInput,
    date: SignUpDate,
    handleChangeIsLoading: (isLoading: boolean) => void
) => {
    const { email, name, phone } = data

    createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(async (userCredential) => {
            const uid = userCredential.user.uid
            const userInfo = {
                userId: uid,
                name,
                email,
                phone,
                dateBirthday: `${date.day} ${date.month} ${date.year}`,
                loginTime: Date.now(),
            }
            localStorage.setItem('isSignedIn', true)
            await addDoc(collection(database, usersCollection), userInfo)
            navigate(Paths.Profile)
        })
        .catch((error) => {
            const errorCode = error.code
            handleChangeIsLoading(false)
            dispatch(updateSignUpError(errorCode))
            console.error(error.code + error.message)
        })
}

export const loginWithEmailAndPassword = (
    email: string,
    password: string,
    dispatch: Dispatch<SingUpAction | LoginAction>,
    navigate: NavigateFunction
) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            localStorage.setItem('isSignedIn', true)
            navigate(Paths.Profile)
        })
        .catch((error) => {
            const errorCode = error.code
            dispatch(updateLoginError(errorCode))
            console.error(error.code + error.message)
        })
}
