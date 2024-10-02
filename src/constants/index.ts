import closeIcon from '@assets/icons/close.svg'
import googleIcon from '@assets/icons/googleIcon.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import twitterImage from '@assets/images/signupTwitter.png'

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
export const phoneRegex = /^\+375 \(\d{2}\) \d{2}-\d{2}-\d{3,}$/
export const codeRegex = /\d/g
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

export enum ActionTypes {
    SignUpEmail = 'singUp/email',
    SignUpPhone = 'singUp/phone',
    SignUpName = 'singUp/name',
    SignUpPassword = 'singUp/password',
    SignUpConfrimPassword = 'singUp/confrimPassword',
    SignUpUserId = 'singUp/userId',
    SignUpDate = 'singUp/date',
    SignUpError = 'singUp/error',
    LoginEmail = 'login/email',
    LoginPassword = 'login/password',
    LoginError = 'login/error',
}
export const basePhoneCode = '+375'

export const signUpDefaultData = {
    name: '',
    phone: basePhoneCode,
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    date: { day: '', month: '', year: '' },
}

export const loginDefaultData = {
    email: '',
    password: '',
    error: '',
}

export const images = {
    closeIcon,
    googleIcon,
    logoIcon,
    twitterImage,
}

export const notifyTimeout = 4000

export const countDays = 31

export const usersCollection = 'users'

export const countYears = 120
