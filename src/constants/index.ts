import closeIcon from '@assets/icons/close.svg'
import { getSelectDays, getSelectYears } from '@utils'

export enum Paths {
    SignUp = '/',
    Login = '/login',
    SingUpCredential = '/signup-credential',
    Profile = '/profile',
    Home = '/home',
    NotFound = '*',
}

export const currentDate = new Date()
export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
export const phoneRegex = /^\+375 \(\d{2}\) \d{2}-\d{2}-\d{3}$/
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export enum Month {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December',
}

export const months = [
    Month.January,
    Month.February,
    Month.March,
    Month.April,
    Month.May,
    Month.June,
    Month.July,
    Month.August,
    Month.September,
    Month.October,
    Month.November,
    Month.December,
]

export const countYears = 120

export const years = getSelectYears()

export const days = getSelectDays()

export enum ActionTypes {
    SignUpEmail = 'singUp/email',
    SignUpPhone = 'singUp/phone',
    SignUpName = 'singUp/name',
    SignUpPassword = 'singUp/password',
    SignUpConfrimPassword = 'singUp/confrimPassword',
    SignUpDate = 'singUp/date',
    SignUpError = 'singUp/error',
    LoginPhone = 'login/phone',
    LoginError = 'login/error',
    LoginOpenModal = 'login/modal',
    LoginCode = 'login/code',
}

export const signUpDefaultData = {
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    date: { day: '', month: '', year: '' },
}

export const basePhoneCode = '+375'

export const loginDefaultData = {
    phone: basePhoneCode,
    error: '',
    code: '',
}

export const icons = {
    closeIcon,
}

export const notifyTimeout = 4000

export const usersCollection = 'users'
