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

import {
    countTweetsImages,
    tokenLocalStorage,
    usersCollection,
} from '@constants'
import {
    AllActionsType,
    setTotalAccounts,
    updateCurrentUser,
    updateHomeTweets,
    updateLoadingTweet,
    updateTotalUser,
    updateUserFollowing,
} from '@store'
import {
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
    const token = localStorage.getItem(tokenLocalStorage)

    const decodedToken = jwtDecode(token?.access ?? '') as { user_id: string }

    const allDocs = await getDocs(docsRef)
    allDocs.forEach((userDoc) => {
        const data = userDoc.data() as UserData
        if (userId === '' && data.userId === decodedToken.user_id) {
            const correctTweets =
                data.tweets?.map((tweet) => ({
                    ...tweet,
                    liked: [...new Set(tweet.liked)],
                })) ?? null
            const userData = {
                ...data,
                docId: userDoc.id,
                tweets: correctTweets,
            }
            const docRef = doc(database, usersCollection, userDoc.id)
            updateDoc(docRef, userData)
            dispatch(updateTotalUser(userData))
        }
    })
}

export const updateTweets = (
    updatedTweets: ReadyToTweetStorageType[],
    user: UserData,
    dispatch: Dispatch<AllActionsType>
) => {
    const docRef = doc(database, usersCollection, user.docId)
    updateDoc(docRef, {
        tweets: updatedTweets,
    })
        .then(async () => {
            const data = await getDoc(docRef)
            const accData = data.data()
            const userData = {
                ...accData,
            } as UserData
            dispatch(updateCurrentUser(userData))
            dispatch(updateTotalUser(userData))
            dispatch(updateLoadingTweet(false))
            dispatch(
                updateHomeTweets({ tweet: updatedTweets[0], account: user })
            )
        })
        .then(async () => {
            const data = await getDoc(docRef)
            const accData = data.data()
            const userData = {
                ...accData,
            } as UserData
            dispatch(updateTotalUser(userData))
            dispatch(updateLoadingTweet(false))
        })
        .catch((e) => console.error(e, 'error'))
}

export const uploadTweetsToStorage = (
    uploadTweet: TweetStorageType,
    user: UserData,
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

    updateTweets(updatedTweets, user, dispatch)
}

export const deleteTweetFromStorage = (
    tweets: ReadyToTweetStorageType[],
    tweetId: string,
    user: UserData,
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
    updateTweets(filtredTweets, user, dispatch)
}

export const uploadUserDataToStorage = (
    data: EditModalData,
    docId: string,
    image: AvatarImage,
    dispatch: Dispatch<AllActionsType>
) => {
    const docRef = doc(database, usersCollection, docId)
    updateDoc(docRef, {
        description: data.description,
        name: data.name,
        social: data.social,
    }).then(async () => {
        const data = await getDoc(docRef)
        const accData = data.data()
        const userData = {
            ...accData,
            docId: data.id,
        } as UserData
        dispatch(updateCurrentUser(userData))
        dispatch(updateTotalUser(userData))
        uploadProfileAvatar(image, userData, dispatch)
    })
}

export const uploadProfileAvatar = (
    image: AvatarImage,
    user: UserData,
    dispatch: Dispatch<AllActionsType>
) => {
    if (image.file) {
        const imagesRef = ref(storage, `images/${image.id}`)
        uploadBytes(imagesRef, image.file).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((downloadURL) => {
                const docRef = doc(database, usersCollection, user.docId)
                const newAvatar = { id: user.userId, url: downloadURL }
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
}

export const uploadTweetImagesFromStorage = async (
    userId: string,
    handleChangeTweetImages: (tweetImage: CreatedTweetImageType) => void
) => {
    const docsRef = collection(database, usersCollection)
    const allDocs = await getDocs(docsRef)
    let counter = 0
    allDocs.forEach((userDoc) => {
        const userData = userDoc.data() as UserData
        if (counter >= countTweetsImages) return
        if (userData.userId !== userId) {
            const { tweets } = userData
            tweets?.map((tweet) => {
                counter++
                dowloadImagesFromStorage(
                    tweet.imagesData,
                    handleChangeTweetImages
                )
            })
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
            dispatch(setTotalAccounts(userData))
        }
    })
}

export const followOrUnfollowAccount = (
    user: UserData,
    account: UserData,
    dispatch: Dispatch<AllActionsType>
) => {
    const userDocRef = doc(database, usersCollection, user.docId)
    const accountDocRef = doc(database, usersCollection, account.docId)
    if (!user.following.includes(account.userId)) {
        setDoc(
            userDocRef,
            {
                following: arrayUnion(account.userId),
            },
            { merge: true }
        ).then(async () => {
            const newUserFollowing = [...user.following, account.userId!]
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

export const clickLikeTweet = (
    user: UserData,
    account: UserData,
    tweetId: string,
    isLiked: boolean,
    handleChangeCountLikes: (likes: number) => void
) => {
    const docRef = doc(database, usersCollection, account.docId)

    const updatedTweets = account.tweets!.map((tweet) => {
        if (tweet.tweetId === tweetId) {
            const tweetLiked = isLiked
                ? tweet.liked.filter((id) => user.userId !== id)
                : [...tweet.liked, user.userId]

            const uniqueTweetLiked = [...new Set(tweetLiked)]
            handleChangeCountLikes(uniqueTweetLiked.length)
            return { ...tweet, liked: uniqueTweetLiked }
        } else {
            return tweet
        }
    })

    updateDoc(docRef, {
        tweets: updatedTweets,
    }).catch((err) => console.error(err))
}
