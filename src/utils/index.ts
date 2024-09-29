import { countYears } from '@constants'

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
    for (let i = 1; i <= 31; i++) {
        daysArray.push(i.toString())
    }

    return daysArray
}
