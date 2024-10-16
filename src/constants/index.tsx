export {
    ActionTypes,
    Paths,
    basePhoneCode,
    loaderStatesDefaultData,
    openedStatesDefaultData,
    defaultDate,
    defaultUser,
    images,
    notifyDefaultData,
    themeStoragekey,
    searchDefaultData,
    sidebarLinks,
    totalDefaultData,
    tweetPath,
    userDefaultData,
    Themes,
} from './defaultValues'

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

export const currentDate = new Date()
export const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
export const phoneRegex = /^\+375 \(\d{2}\) \d{2}-\d{2}-\d{3,}$/
export const codeRegex = /\d/g
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const maxUploadSizeImage = 15728640 //15mb

export const notifyTimeout = 4000

export const countDays = 31

export const usersCollection = 'users'

export const countYears = 120

export const magicNumbers = ['FFD8FFE0', '89504E47']

export const maxLengthTweetText = 500

export const maxLengthPassword = 30

export const maxLengthName = 35

export const maxLengthDescription = 120

export const maxLengthSocial = 20

export const hiddenSidebarWidth = 560

export const milliSeconds = 1000

export const seconds = 60000

export const minutes = 3600000

export const hours = 86400000

export const days = 2592000000

export const countTweetsImages = 6

export const tokenLocalStorage = 'token'

export const loginType = 'signInWithPassword'

export const signUpType = 'signUp'

export const tweetTextRows = 4
