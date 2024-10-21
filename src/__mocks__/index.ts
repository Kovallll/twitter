import {
    days,
    defaultUser,
    hours,
    milliSeconds,
    minutes,
    months,
    seconds,
} from '@constants'

export const oneTweet = [
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 1,
        text: 'a',
    },
]
export const twoTweet = [
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 2,
        text: 'a',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 3,
        text: 'ab',
    },
]

export const TweetsToTen = [
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 4,
        text: 'a',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 5,
        text: 'ab',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 6,
        text: 'ab',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 7,
        text: 'ab',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 8,
        text: 'ab',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 9,
        text: 'ab',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 10,
        text: 'ab',
    },
]

export const userOneTweet = [
    {
        ...defaultUser,
        tweets: oneTweet,
    },
]

export const userTwoTweet = [
    {
        ...defaultUser,
        tweets: twoTweet,
    },
]

export const userToTenTweet = [
    {
        ...defaultUser,
        tweets: TweetsToTen,
    },
]

const tenSec = milliSeconds * 10
const tenMin = seconds * 10
const tenHours = minutes * 10
const tenDays = hours * 10
const monthTime = days

export const sec = Date.now() - tenSec
export const min = Date.now() - tenMin
export const hour = Date.now() - tenHours
export const day = Date.now() - tenDays
export const month = Date.now() - monthTime

export const currentDate = `${months[new Date().getMonth() - 1].slice(0, 3)} ${new Date().getDate()}`

export const sortedTweets = [
    {
        account: {
            ...defaultUser,
            tweets: oneTweet,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 1,
            text: 'a',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: twoTweet,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 2,
            text: 'a',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: twoTweet,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 3,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 4,
            text: 'a',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 5,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 6,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 7,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 8,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 9,
            text: 'ab',
        },
    },
    {
        account: {
            ...defaultUser,
            tweets: TweetsToTen,
        },
        tweet: {
            tweetId: '',
            imagesData: null,
            liked: [],
            timePost: 10,
            text: 'ab',
        },
    },
]
