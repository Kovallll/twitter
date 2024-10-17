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
        timePost: 1,
        text: 'a',
    },
    {
        tweetId: '',
        imagesData: null,
        liked: [],
        timePost: 1,
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
