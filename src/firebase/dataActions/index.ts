import { Dispatch } from 'react'
import {
    getFirebaseStorage,
    getFirebaseStore,
    setupFirebase,
} from 'firebase.config'
import {
    arrayUnion,
    collection,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
} from 'firebase/firestore'
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytes,
} from 'firebase/storage'
import { jwtDecode } from 'jwt-decode'

import { usersCollection } from '@constants'
import {
    AllActionsType,
    setTotalAccounts,
    updateTotalUser,
    updateUserData,
    updateUserDocId,
    updateUserFollowing,
} from '@store'
import {
    AccountData,
    AvatarImage,
    CreatedTweetImageType,
    EditModalData,
    ReadyToTweetStorageType,
    StorageTweetImageType,
    TweetStorageType,
    UserData,
} from '@types'
import { LocalStorage } from '@utils'

setupFirebase()
const database = getFirebaseStore()
const storage = getFirebaseStorage()

export const initUserData = async (
    userId: string | null,
    dispatch: Dispatch<AllActionsType>
) => {
    const localStorage = new LocalStorage()
    const docsRef = collection(database, usersCollection)
    const token = localStorage.getItem('token')

    const decodedToken = jwtDecode(token) as { user_id: string }

    const allDocs = await getDocs(docsRef)
    allDocs.forEach((userDoc) => {
        const userData = userDoc.data() as UserData
        if (!userId && userData.userId === decodedToken.user_id) {
            dispatch(updateUserDocId(userDoc.id))
            dispatch(updateTotalUser(userData))
            const { name, description, social, avatar } = userData
            const editData = {
                name,
                description,
                social,
                photoUrl: avatar.url,
            }
            dispatch(updateUserData(editData))
        }
    })
}

export const updateTweets = (
    updatedTweets: ReadyToTweetStorageType[],
    docId: string,
    dispatch: Dispatch<AllActionsType>
) => {
    const docRef = doc(database, usersCollection, docId)
    updateDoc(docRef, {
        tweets: updatedTweets,
    }).then(async () => {
        const data = await getDoc(docRef)
        const userData = data.data() as UserData
        dispatch(updateTotalUser(userData))
    })
}

export const uploadTweetsToStorage = (
    uploadTweet: TweetStorageType,
    user: UserData,
    docId: string,
    dispatch: Dispatch<AllActionsType>
) => {
    uploadTweet.imagesData?.forEach((image) => {
        const imagesRef = ref(storage, `images/${image.id}`)
        uploadBytes(imagesRef, image.file)
    })
    const readyToUploadTweet: ReadyToTweetStorageType = {
        ...uploadTweet,
        imagesData:
            uploadTweet.imagesData?.map((image) => ({ id: image.id })) ?? null,
    }
    const updatedTweets = user.tweets
        ? [readyToUploadTweet, ...user.tweets]
        : [readyToUploadTweet]

    updateTweets(updatedTweets, docId, dispatch)
}

export const deleteTweetFromStorage = (
    tweets: ReadyToTweetStorageType[],
    tweetId: string,
    docId: string,
    dispatch: Dispatch<AllActionsType>
) => {
    const filtredTweets = tweets?.filter((tweet) => {
        if (tweet.tweetId === tweetId) {
            tweet.imagesData?.forEach((image) => {
                const desertRef = ref(storage, `images/${image.id}`)
                deleteObject(desertRef)
            })
            return false
        } else {
            return true
        }
    })
    updateTweets(filtredTweets, docId, dispatch)
}

export const uploadUserDataToStorage = (
    data: EditModalData,
    docId: string,
    dispatch: Dispatch<AllActionsType>
) => {
    const docRef = doc(database, usersCollection, docId)
    updateDoc(docRef, {
        description: data.description,
        name: data.name,
        social: data.social,
    }).then(async () => {
        const data = await getDoc(docRef)
        const userData = data.data() as UserData
        dispatch(updateTotalUser(userData))
    })
}

export const uploadProfileAvatar = (
    image: AvatarImage,
    docId: string,
    user: UserData,
    dispatch: Dispatch<AllActionsType>
) => {
    const imagesRef = ref(storage, `images/${image.id}`)
    uploadBytes(imagesRef, image.file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
            const docRef = doc(database, usersCollection, docId)
            const newAvatar = { id: user.userId ?? '', url: downloadURL }
            updateDoc(docRef, {
                avatar: newAvatar,
            }).then(() => {
                dispatch(
                    updateTotalUser({
                        ...user,
                        avatar: newAvatar,
                    })
                )
            })
        })
    })
}

export const uploadTweetImagesFromStorage = async (
    userId: string,
    handleChangeTweetImages: (tweetImage: CreatedTweetImageType) => void
) => {
    const docsRef = collection(database, usersCollection)
    const allDocs = await getDocs(docsRef)
    allDocs.forEach((userDoc) => {
        const userData = userDoc.data() as UserData
        if (userData.userId !== userId) {
            const { tweets } = userData
            tweets?.map((tweet) =>
                dowloadImagesFromStorage(
                    tweet.imagesData,
                    handleChangeTweetImages
                )
            )
        }
    })
}

export const dowloadImagesFromStorage = (
    imagesData: StorageTweetImageType[] | null,
    handleChangeTweetImages: (tweetImage: CreatedTweetImageType) => void
) => {
    imagesData?.forEach(async (image) => {
        getDownloadURL(ref(storage, `images/${image.id}`)).then((url) => {
            handleChangeTweetImages({ id: image.id, url })
        })
    })
}

export const setTotalAccountsFromStorage = async (
    userId: string | null,
    dispatch: Dispatch<AllActionsType>
) => {
    const docsRef = collection(database, usersCollection)
    const allDocs = await getDocs(docsRef)

    allDocs.forEach((userDoc) => {
        const userData = userDoc.data() as UserData
        if (userId && userId !== userData.userId) {
            const { name, social, avatar, userId, followers } = userData
            const accountData = {
                docId: userDoc.id,
                userId: userId!,
                name,
                social,
                avatar,
                followers,
            }
            dispatch(setTotalAccounts(accountData))
        }
    })
}

export const followOrUnfollowAccount = (
    user: UserData,
    account: AccountData,
    userDocId: string,
    dispatch: Dispatch<AllActionsType>
) => {
    const userDocRef = doc(database, usersCollection, userDocId)
    const accountDocRef = doc(database, usersCollection, account.docId)
    if (!user.following.includes(account.userId)) {
        setDoc(
            userDocRef,
            {
                following: arrayUnion(account.userId),
            },
            { merge: true }
        ).then(async () => {
            const newUserFollowing = [...user.following, account.userId]
            dispatch(updateUserFollowing(newUserFollowing))
            dispatch(
                updateTotalUser({
                    ...user,
                    following: newUserFollowing,
                })
            )
        })
        setDoc(
            accountDocRef,
            {
                followers: arrayUnion(user.userId),
            },
            { merge: true }
        )
    } else {
        const newUserFollowing = user.following.filter(
            (id) => id !== account.userId
        )
        updateDoc(userDocRef, {
            following: newUserFollowing,
        }).then(() => {
            dispatch(updateUserFollowing(newUserFollowing))
            dispatch(
                updateTotalUser({
                    ...user,
                    following: newUserFollowing,
                })
            )
        })
        const newAccountFollowers = account.followers.filter(
            (id) => id !== user.userId
        )
        updateDoc(accountDocRef, {
            followers: newAccountFollowers,
        })
    }
}
