import bookmarksDarkIcon from '@assets/icons/bookmarksDark.svg'
import bookmarksLightIcon from '@assets/icons/bookmarksLight.svg'
import closeIcon from '@assets/icons/close.svg'
import dotsDarkIcon from '@assets/icons/dotsDark.svg'
import dotsLightIcon from '@assets/icons/dotsLight.svg'
import exploreDarkIcon from '@assets/icons/exploreDark.svg'
import exploreLightIcon from '@assets/icons/exploreLight.svg'
import eyeOpenDarkIcon from '@assets/icons/eyeSeeDark.svg'
import eyeOpenLightIcon from '@assets/icons/eyeSeeLight.svg'
import eyeSlashDarkIcon from '@assets/icons/eyeSlashDark.svg'
import eyeSlashLightIcon from '@assets/icons/eyeSlashLight.svg'
import googleIcon from '@assets/icons/googleIcon.svg'
import homeActiveIcon from '@assets/icons/homeActive.svg'
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
import profileActiveIcon from '@assets/icons/profileActive.svg'
import profileDarkIcon from '@assets/icons/profileOutlineDark.svg'
import profileLightIcon from '@assets/icons/profileOutlineLight.svg'
import searchIcon from '@assets/icons/search.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import profileBackground from '@assets/images/profileBackground.png'
import profileImage from '@assets/images/profileImage.svg'
import twitterImage from '@assets/images/signupTwitter.png'
import { UserData } from '@types'

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

export const images = {
    closeIcon,
    profileBackground,
    profileImage,
    googleIcon,
    logoIcon,
    twitterImage,
    uploadImage,
    searchIcon,
    dotsLightIcon,
    dotsDarkIcon,
    eyeOpenDarkIcon,
    eyeOpenLightIcon,
    eyeSlashDarkIcon,
    eyeSlashLightIcon,
    likeFillIcon,
    likeOutlineIcon,
    postIcon,
    logoutIcon,
}

export enum Themes {
    Dark = 'dark',
    Light = 'light',
}

export enum ActionTypes {
    UserDate = 'user/date',
    UserTotal = 'user/total',
    UserFollowing = 'user/following',
    UserLiked = 'user/liked',
    NotifyText = 'notify/text',
    TotalAccounts = 'total/accounts',
    SeacrhValue = 'search/value',
    SearchData = 'search/data',
    UserTheme = 'user/theme',
    LoadingTweet = 'boolean/tweet',
    LoadingInititalData = 'boolean/initialData',
    isSidebarOpen = 'boolean/sidebar',
    isTweetModalOpen = 'boolean/tweetModal',
}

export const defaultDate = { year: '', month: '', day: '' }

export const basePhoneCode = '+375'

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
    social: null,
    description: null,
} as UserData

export const userDefaultData = {
    editData: {
        description: null,
        social: null,
        name: '',
        avatarUrl: images.profileImage,
    },
    date: defaultDate,
    user: defaultUser,
    following: [],
    liked: [],
    theme: (localStorage.getItem('theme') as Themes) || Themes.Light,
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

export const loaderStatesDefaultData = {
    isLoadingTweet: false,
    isLoadingInitialData: false,
}

export const openedStatesDefaultData = {
    isSidebarOpen: false,
    isTweetModalOpen: false,
}

export const sidebarLinks = [
    {
        icon: {
            dark: homeOutlineDarkIcon,
            light: homeOutlineLightIcon,
            active: homeActiveIcon,
        },
        title: 'Home',
        link: Paths.Home,
    },
    {
        icon: {
            dark: exploreDarkIcon,
            light: exploreLightIcon,
            active: exploreLightIcon,
        },
        title: 'Explore',
        link: '/',
    },
    {
        icon: {
            dark: notificationDarkIcon,
            light: notificationLightIcon,
            active: notificationLightIcon,
        },
        title: 'Notification',
        link: '/',
    },
    {
        icon: {
            dark: messagesDarkIcon,
            light: messagesLightIcon,
            active: messagesLightIcon,
        },
        title: 'Messages',
        link: '/',
    },
    {
        icon: {
            dark: bookmarksDarkIcon,
            light: bookmarksLightIcon,
            active: bookmarksLightIcon,
        },
        title: 'Bookmarks',
        link: '/',
    },
    {
        icon: {
            dark: listsDarkIcon,
            light: listsLightIcon,
            active: listsLightIcon,
        },
        title: 'Lists',
        link: '/',
    },
    {
        icon: {
            dark: profileDarkIcon,
            light: profileLightIcon,
            active: profileActiveIcon,
        },
        title: 'Profile',
        link: Paths.Profile,
    },
    {
        icon: {
            dark: moreDarkIcon,
            light: moreLightIcon,
            active: moreLightIcon,
        },
        title: 'More',
        link: '/',
    },
]
