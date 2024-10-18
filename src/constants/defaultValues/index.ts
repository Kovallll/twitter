import closeIcon from '@assets/icons/close.svg'
import DotsIcon from '@assets/icons/dots.svg?react'
import EyeOpenIcon from '@assets/icons/eyeOpen.svg?react'
import EyeSlashIcon from '@assets/icons/eyeSlash.svg?react'
import googleIcon from '@assets/icons/googleIcon.svg'
import uploadImage from '@assets/icons/image.svg'
import likeFillIcon from '@assets/icons/likeFill.svg'
import likeOutlineIcon from '@assets/icons/likeOutline.svg'
import logoutIcon from '@assets/icons/logout.svg'
import postIcon from '@assets/icons/post.svg'
import searchIcon from '@assets/icons/search.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import profileBackground from '@assets/images/profileBackground.png'
import profileImage from '@assets/images/profileImage.svg'
import twitterImage from '@assets/images/signupTwitter.png'
import { UserData } from '@types'

export const images = {
    closeIcon,
    profileBackground,
    profileImage,
    googleIcon,
    logoIcon,
    twitterImage,
    uploadImage,
    searchIcon,
    DotsIcon,
    EyeOpenIcon,
    EyeSlashIcon,
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
    UserCurrent = 'user/current',
    UserFollowing = 'user/following',
    UserLiked = 'user/liked',
    NotifyText = 'notify/text',
    TotalAccounts = 'total/accounts',
    SeacrhValue = 'search/value',
    SearchData = 'search/data',
    UserTheme = 'user/currentTheme',
    LoadingTweet = 'boolean/tweet',
    LoadingInititalData = 'boolean/initialData',
    isSidebarOpen = 'boolean/sidebar',
    isTweetModalOpen = 'boolean/tweetModal',
    HomeTweets = 'home/tweets',
    HomePageCount = 'home/pageCount',
}

export const defaultDate = { year: '', month: '', day: '' }

export const themeStoragekey = 'theme'

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
    currentUser: defaultUser,
    following: [],
    liked: [],
    currentTheme:
        (JSON.parse(
            localStorage.getItem(themeStoragekey) ?? 'null'
        ) as Themes) || Themes.Light,
}
export const basePhoneCode = '+375'

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

export const homePageDefaultData = {
    tweets: null,
    pageCount: 1,
}
