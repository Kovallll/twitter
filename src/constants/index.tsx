import bookmarksDarkIcon from '@assets/icons/bookmarksDark.svg'
import bookmarksLightIcon from '@assets/icons/bookmarksLight.svg'
import closeIcon from '@assets/icons/close.svg'
import dotsDarkIcon from '@assets/icons/dotsDark.svg'
import dotsLightIcon from '@assets/icons/dotsLight.svg'
import exploreDarkIcon from '@assets/icons/exploreDark.svg'
import exploreLightIcon from '@assets/icons/exploreLight.svg'
import eyeSeeDarkIcon from '@assets/icons/eyeSeeDark.svg'
import eyeSeeLightIcon from '@assets/icons/eyeSeeLight.svg'
import eyeSlashDarkIcon from '@assets/icons/eyeSlashDark.svg'
import eyeSlashLightIcon from '@assets/icons/eyeSlashLight.svg'
import googleIcon from '@assets/icons/googleIcon.svg'
import homeOutlineDarkIcon from '@assets/icons/homeOutlineDark.svg'
import homeOutlineLightIcon from '@assets/icons/homeOutlineLight.svg'
import uploadImage from '@assets/icons/image.svg'
import likeFillIcon from '@assets/icons/likeFill.svg'
import likeOutlineIcon from '@assets/icons/likeOutline.svg'
import listsDarkIcon from '@assets/icons/listsDark.svg'
import listsLightIcon from '@assets/icons/listsLight.svg'
import logoutIcon from '@assets/icons/logout.svg'
import messagesDarkIcon from '@assets/icons/messagesDark.svg'
import messagesLightIcon from '@assets/icons/messagesLight.svg'
import moreDarkIcon from '@assets/icons/moreDark.svg'
import moreLightIcon from '@assets/icons/moreLight.svg'
import notificationDarkIcon from '@assets/icons/notificationDark.svg'
import notificationLightIcon from '@assets/icons/notificationLight.svg'
import postIcon from '@assets/icons/post.svg'
import profileFillDarkIcon from '@assets/icons/profileFillDark.svg'
import profileFillLightIcon from '@assets/icons/profileFillLight.svg'
import profileOutlineDarkIcon from '@assets/icons/profileOutlineDark.svg'
import profileOutlineLightIcon from '@assets/icons/profileOutlineLight.svg'
import searchIcon from '@assets/icons/search.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import profileBackground from '@assets/images/profileBackground.png'
import profileImage from '@assets/images/profileImage.svg'
import twitterImage from '@assets/images/signupTwitter.png'
import { LocalStorage } from '@utils'

const localStorage = new LocalStorage()

export enum Themes {
    Dark = 'dark',
    Light = 'light',
}

export const tweetPath = '/tweet'

export enum Paths {
    SignUp = '/',
    Login = '/login',
    SingUpCredential = '/signup-credential',
    Profile = '/profile',
    Home = '/home',
    Tweet = `${tweetPath}/:tweetId`,
    NotFound = '*',
}

export const sidebarLinks = [
    {
        icon: { light: homeOutlineLightIcon, dark: homeOutlineDarkIcon },
        title: 'Home',
        link: Paths.Home,
    },
    {
        icon: { light: exploreLightIcon, dark: exploreDarkIcon },
        title: 'Explore',
        link: '/',
    },
    {
        icon: { light: notificationLightIcon, dark: notificationDarkIcon },
        title: 'Notification',
        link: '/',
    },
    {
        icon: { light: messagesLightIcon, dark: messagesDarkIcon },
        title: 'Messages',
        link: '/',
    },
    {
        icon: { light: bookmarksLightIcon, dark: bookmarksDarkIcon },
        title: 'Bookmarks',
        link: '/',
    },
    {
        icon: { light: listsLightIcon, dark: listsDarkIcon },
        title: 'Lists',
        link: '/',
    },
    {
        icon: { light: profileOutlineLightIcon, dark: profileOutlineDarkIcon },
        title: 'Profile',
        link: Paths.Profile,
    },
    {
        icon: { light: moreLightIcon, dark: moreDarkIcon },
        title: 'More',
        link: '/',
    },
]

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
    UserFollowing = 'user/following',
    UserLiked = 'user/liked',
    UserTheme = 'user/theme',
    NotifyText = 'notify/text',
    TotalAccounts = 'total/accounts',
    SeacrhValue = 'search/value',
    SearchData = 'search/data',
    LoadingTweet = 'boolean/tweet',
    LoadingInititalData = 'boolean/initialData',
    isSidebarOpen = 'boolean/sidebar',
    isTweetModalOpen = 'boolean/tweetModal',
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
    exploreDarkIcon,
    exploreLightIcon,
    messagesDarkIcon,
    notificationDarkIcon,
    profileFillLightIcon,
    profileFillDarkIcon,
    notificationLightIcon,
    profileOutlineDarkIcon,
    profileOutlineLightIcon,
    messagesLightIcon,
    moreDarkIcon,
    moreLightIcon,
    listsLightIcon,
    listsDarkIcon,
    closeIcon,
    bookmarksDarkIcon,
    bookmarksLightIcon,
    profileBackground,
    profileImage,
    googleIcon,
    logoIcon,
    twitterImage,
    uploadImage,
    searchIcon,
    dotsLightIcon,
    dotsDarkIcon,
    eyeSeeDarkIcon,
    eyeSeeLightIcon,
    eyeSlashDarkIcon,
    eyeSlashLightIcon,
    likeFillIcon,
    homeOutlineDarkIcon,
    homeOutlineLightIcon,
    likeOutlineIcon,
    postIcon,
    logoutIcon,
}

export const defaultUser = {
    docId: '',
    userId: '',
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
    following: [],
    liked: [],
    theme: localStorage.getItem('theme') || Themes.Light,
}

export const notifyDefaultData = {
    text: '',
}

export const searchDefaultData = {
    value: '',
    data: [],
}

export const totalDefaultData = {
    accounts: [],
}

export const booleanStatesDefaultData = {
    isLoadingTweet: false,
    isLoadingInitialData: false,
    isSidebarOpen: false,
    isTweetModalOpen: false,
}

export const maxUploadSizeImage = 41943040 //40mb

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

export const tokensLocalStorage = 'tokens'

export const loginType = 'signInWithPassword'

export const signUpType = 'signUp'

export const tweetTextRows = 4
