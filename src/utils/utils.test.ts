import { countYears, defaultUser } from '@constants'
import { day, hour, min, month, sec, userOneTweet, userTwoTweet } from '@mocks'
import {
    getIsValidDate,
    getNotifyError,
    getSelectDays,
    getSelectYears,
    getTimePostTweet,
    getTweetsTexts,
    LocalStorage,
} from '@utils'

describe('test all utils', () => {
    test('test getSelectYears', () => {
        const currentYear = new Date().getFullYear()
        const endYear = currentYear - countYears

        expect(getSelectYears()).toContain(String(currentYear - 1))
        expect(getSelectYears()).toContain(String(endYear))
    })

    test('test getSelectDays', () => {
        expect(getSelectDays()).toContain(String(31))
        expect(getSelectDays()).toContain(String(1))

        expect(getSelectDays()).not.toContain(String(0))
        expect(getSelectDays()).not.toContain(String(32))
    })

    test('test getNotifyError', () => {
        expect(getNotifyError('auth/email-already-in-use')).toBe(
            'Email already exist'
        )
        expect(getNotifyError('auth/invalid-verification-code')).toBe(
            'Incorrect code'
        )
        expect(getNotifyError('auth/network-request-failed')).toBe(
            'Network error'
        )
        expect(getNotifyError('auth/user-not-found')).toBe(
            "Profile don't exist"
        )
        expect(getNotifyError('Incorrect date')).toBe('Incorrect date')
        expect(getNotifyError('auth/wrong-password')).toBe('Wrong password')
        expect(getNotifyError('auth/invalid-credential')).toBe(
            'Invalid credential'
        )
        expect(getNotifyError('random text')).toBe('Error')
    })

    test('test getIsValidDate', () => {
        expect(getIsValidDate({ day: '', month: '', year: '' })).toBe(true)
        expect(
            getIsValidDate({ day: '1', month: 'January', year: '2000' })
        ).toBe(true)

        expect(getIsValidDate({ day: '0', month: 'January', year: '24' })).toBe(
            false
        )
        expect(
            getIsValidDate({ day: '32', month: 'January', year: '24' })
        ).toBe(false)

        expect(
            getIsValidDate({ day: '31', month: 'October', year: '2024' })
        ).toBe(true)
        expect(
            getIsValidDate({ day: '31', month: 'November', year: '2024' })
        ).toBe(false)

        expect(
            getIsValidDate({ day: '1', month: 'random text', year: '24' })
        ).toBe(false)
    })

    const localStorage = new LocalStorage()
    const itemKey = 'item'
    afterEach(() => {
        localStorage.removeItem(itemKey)
    })

    test('test LocalStorage', () => {
        localStorage.setItem(itemKey, 1)
        const itemNumber = localStorage.getItem(itemKey)
        expect(itemNumber).toBe(1)

        localStorage.setItem(itemKey, 'str')
        const itemString = localStorage.getItem(itemKey)
        expect(itemString).toBe('str')

        localStorage.setItem(itemKey, ['a'])
        const itemArray = localStorage.getItem(itemKey)
        expect(itemArray).toEqual(['a'])

        localStorage.setItem(itemKey, { id: '' })
        const itemObject = localStorage.getItem(itemKey)
        expect(itemObject).toEqual({ id: '' })
    })

    test('test getTimePostTweet', () => {
        expect(getTimePostTweet(sec)).toBe('10s')
        expect(getTimePostTweet(min)).toBe('10m')
        expect(getTimePostTweet(hour)).toBe('10h')
        expect(getTimePostTweet(day)).toBe('10d')
        expect(getTimePostTweet(month)).toBe('Sep 11')
    })

    test('test getTweetsTexts', () => {
        expect(getTweetsTexts([defaultUser], '')).toEqual([])

        expect(getTweetsTexts(userOneTweet, 'a')).toHaveLength(1)

        expect(getTweetsTexts(userTwoTweet, 'a')).toHaveLength(2)
        expect(getTweetsTexts(userTwoTweet, 'b')).toHaveLength(1)
        expect(getTweetsTexts(userTwoTweet, 'c')).toHaveLength(0)
    })
})
