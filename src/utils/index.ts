import { countDays, countYears, Month, months } from '@constants'
import { SignUpDate } from '@types'

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
