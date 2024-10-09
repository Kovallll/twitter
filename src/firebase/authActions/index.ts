import { Dispatch } from 'react'
import { NavigateFunction } from 'react-router-dom'
import axios from 'axios'
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
import { jwtDecode } from 'jwt-decode'

import {
    defaultUser,
    images,
    loginType,
    Paths,
    signUpType,
    tokensLocalStorage,
    usersCollection,
} from '@constants'
import { AllActionsType, updateNotifyText, updateTotalUser } from '@store'
import { SignUpDate, SignUpFormInput, UserCredential } from '@types'
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
        .then(() => {
            setAuthTokens(data, signUpType)
                .then((res) => {
                    const decodedToken = jwtDecode(res) as { user_id: string }
                    const userId = decodedToken.user_id
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
                .catch((err) => dispatch(updateNotifyText(err)))
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
        .then(() => {
            const data = { password, email }
            setAuthTokens(data, loginType)
                .then(() => {
                    navigate(Paths.Profile)
                    handleResetForm()
                })
                .catch((err) => dispatch(updateNotifyText(err)))
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

export const setAuthTokens = async (data: UserCredential, type: string) => {
    const localStorage = new LocalStorage()
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${type}?key=${import.meta.env.VITE_FIREBASE_APIKEY}`,
        {
            password: data.password,
            email: data.email,
            returnSecureToken: true,
        }
    )
    localStorage.setItem(tokensLocalStorage, {
        access: response.data.idToken,
        refresh: response.data.refreshToken,
    })

    return response.data.idToken
}
