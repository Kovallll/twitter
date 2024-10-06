import bookmarksIcon from '@assets/icons/bookmarks.svg'
import closeIcon from '@assets/icons/close.svg'
import dotsIcon from '@assets/icons/dots.svg'
import exploreIcon from '@assets/icons/explore.svg'
import eyeSee from '@assets/icons/eyeSee.svg'
import eyeSlash from '@assets/icons/eyeSlash.svg'
import googleIcon from '@assets/icons/googleIcon.svg'
import homeIcon from '@assets/icons/homeOutline.svg'
import uploadImage from '@assets/icons/image.svg'
import listsIcon from '@assets/icons/lists.svg'
import messagesIcon from '@assets/icons/messages.svg'
import moreIcon from '@assets/icons/more.svg'
import notificationIcon from '@assets/icons/notification.svg'
import profileIcon from '@assets/icons/profileOutline.svg'
import searchIcon from '@assets/icons/search.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import profileBackground from '@assets/images/profileBackground.png'
import profileImage from '@assets/images/profileImage.svg'
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
    LoginEmail = 'login/email',
    LoginPassword = 'login/password',
    UserData = 'user/data',
    UserTotal = 'user/total',
    UserDocId = 'user/docId',
    UserFollowing = 'user/following',
    NotifyText = 'notify/text',
    TotalAccounts = 'total/accounts',
}
export const basePhoneCode = '+375'

export const defaultDate = { year: '', month: '', day: '' }

export const signUpDefaultData = {
    name: '',
    phone: basePhoneCode,
    email: '',
    password: '',
    confirmPassword: '',
    date: defaultDate,
}

export const loginDefaultData = {
    email: '',
    password: '',
}

export const images = {
    closeIcon,
    profileBackground,
    profileImage,
    googleIcon,
    logoIcon,
    twitterImage,
    uploadImage,
    searchIcon,
    dotsIcon,
    eyeSee,
    eyeSlash,
}

export const defaultUser = {
    userId: null,
    name: '',
    email: '',
    avatar: { id: '0', url: images.profileImage },
    followers: [],
    following: [],
    countTweets: 0,
    tweets: null,
    social: '',
    description: '',
}

export const userDefaultData = {
    editData: {
        description: '',
        social: '',
        name: '',
        photoUrl: images.profileImage,
    },
    user: defaultUser,
    docId: '',
    following: [],
}

export const notifyDefaultData = {
    text: '',
}

export const totalDefaultData = {
    accounts: [],
}

export const maxUploadSizeImage = 41943040 //40mb

export const notifyTimeout = 4000

export const countDays = 31

export const usersCollection = 'users'

export const sidebarLinks = [
    { icon: homeIcon, title: 'Home' },
    { icon: exploreIcon, title: 'Explore' },
    { icon: notificationIcon, title: 'Notification' },
    { icon: messagesIcon, title: 'Messages' },
    { icon: bookmarksIcon, title: 'Bookmarks' },
    { icon: listsIcon, title: 'Lists' },
    { icon: profileIcon, title: 'Profile' },
    { icon: moreIcon, title: 'More' },
]
export const countYears = 120

export const magicNumbers = ['FFD8FFE0', '89504E47']