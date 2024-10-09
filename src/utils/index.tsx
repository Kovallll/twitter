import {
    countDays,
    countYears,
    days,
    hours,
    milliSeconds,
    minutes,
    Month,
    months,
    seconds,
    tweetPath,
} from '@constants'
import { SearchTweetText } from '@pages/Profile/styled'
import { SignUpDate, UserData } from '@types'

export const getSelectYears = () => {
    const currentYear = new Date().getFullYear()
    const yearsArray = []
    for (let i = currentYear - 1; i > currentYear - countYears; i--) {
        yearsArray.push(i.toString())
    }

    return yearsArray
}

export const getSelectDays = () => {
    const daysArray = []
    for (let i = 1; i <= countDays; i++) {
        daysArray.push(i.toString())
    }

    return daysArray
}

export const getNotifyError = (error: string) => {
    let text = 'Error'
    switch (error) {
        case 'auth/email-already-in-use': {
            text = 'Email already exist'
            break
        }
        case 'auth/invalid-verification-code': {
            text = 'Incorrect code'
            break
        }
        case 'auth/network-request-failed': {
            text = 'Network error'
            break
        }
        case 'auth/user-not-found': {
            text = "Profile don't exist"
            break
        }
        case 'Incorrect date': {
            text = 'Incorrect date'
            break
        }
        case 'auth/wrong-password': {
            text = 'Wrong password'
            break
        }
        case 'auth/invalid-credential': {
            text = 'Invalid credential'
            break
        }
    }

    return text
}

export const getIsValidDate = (date: SignUpDate) => {
    const { month, year, day } = date
    if (month === '' || year === '' || day === '') {
        return true
    }
    const monthIndex = months.indexOf(month as Month)

    const dateObj = new Date(Number(year), monthIndex, Number(day))
    const dateYear = dateObj.getFullYear()

    const isValidDate =
        dateYear === Number(year) &&
        dateObj.getMonth() === monthIndex &&
        dateObj.getDate() === Number(day)

    return isValidDate
}

export class LocalStorage {
    getItem = (
        key: string,
        undefinedItem: object | null | [] = null
    ): string => {
        return window.localStorage.getItem(key) ?? JSON.stringify(undefinedItem)
    }

    setItem = (key: string, value: any) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
}

export function getTimePostTweet(createdTimeMs: number) {
    const createdTime = new Date(createdTimeMs)
    const now = Date.now()
    const timeDifference = now - createdTimeMs

    if (timeDifference === 0) {
        return 'Now'
    }
    if (timeDifference < seconds) {
        const seconds = Math.floor(timeDifference / milliSeconds)
        return `${seconds}s`
    } else if (timeDifference < minutes) {
        const minutes = Math.floor(timeDifference / seconds)
        return `${minutes}m`
    } else if (timeDifference < hours) {
        const hours = Math.floor(timeDifference / minutes)
        return `${hours}h`
    } else if (timeDifference < days) {
        const days = Math.floor(timeDifference / hours)
        return `${days}d`
    } else {
        return createdTime.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
        })
    }
}

export const getTweetsTexts = (accounts: UserData[], searchValue: string) => {
    return accounts
        .map((account) => {
            if (account.tweets) {
                return account.tweets
                    ?.map((tweet) => {
                        if (tweet.text.includes(searchValue)) {
                            return (
                                <SearchTweetText
                                    to={`${tweetPath}/${tweet.tweetId}`}
                                >
                                    {tweet.text}
                                </SearchTweetText>
                            )
                        }
                    })
                    .filter((tweetText) => tweetText !== undefined)
            }
        })
        .filter((tweetText) => !!tweetText)
        .flat()
}