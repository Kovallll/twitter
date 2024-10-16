import BookmarksIcon from '@assets/icons/bookmarks.svg?react'
import closeIcon from '@assets/icons/close.svg'
import DotsIcon from '@assets/icons/dots.svg?react'
import ExploreIcon from '@assets/icons/explore.svg?react'
import EyeOpenIcon from '@assets/icons/eyeOpen.svg?react'
import EyeSlashIcon from '@assets/icons/eyeSlash.svg?react'
import googleIcon from '@assets/icons/googleIcon.svg'
import HomeIcon from '@assets/icons/home.svg?react'
import uploadImage from '@assets/icons/image.svg'
import likeFillIcon from '@assets/icons/likeFill.svg'
import likeOutlineIcon from '@assets/icons/likeOutline.svg'
import ListsIcon from '@assets/icons/lists.svg?react'
import logoutIcon from '@assets/icons/logout.svg'
import MessagesIcon from '@assets/icons/messages.svg?react'
import MoreIcon from '@assets/icons/more.svg?react'
import NotificationIcon from '@assets/icons/notification.svg?react'
import postIcon from '@assets/icons/post.svg'
import ProfileIcon from '@assets/icons/profile.svg?react'
import searchIcon from '@assets/icons/search.svg'
import logoIcon from '@assets/icons/twitterLogo.svg'
import profileBackground from '@assets/images/profileBackground.png'
import profileImage from '@assets/images/profileImage.svg'
import twitterImage from '@assets/images/signupTwitter.png'
import { UserData } from '@types'

export const tweetPath = '/tweet'
export const userPath = '/user'

export enum Paths {
    SignUp = '/',
    Login = '/login',
    SingUpCredential = '/signup-credential',
    Profile = '/profile',
    Home = '/home',
    Tweet = `${tweetPath}/:tweetId`,
    User = `${userPath}/:userId`,
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

export const sidebarLinks = [
    {
        Icon: HomeIcon,
        title: 'Home',
        link: Paths.Home,
    },
    {
        Icon: ExploreIcon,
        title: 'Explore',
        link: '/',
    },
    {
        Icon: NotificationIcon,
        title: 'Notification',
        link: '/',
    },
    {
        Icon: MessagesIcon,
        title: 'Messages',
        link: '/',
    },
    {
        Icon: BookmarksIcon,
        title: 'Bookmarks',
        link: '/',
    },
    {
        Icon: ListsIcon,
        title: 'Lists',
        link: '/',
    },
    {
        Icon: ProfileIcon,
        title: 'Profile',
        link: Paths.Profile,
    },
    {
        Icon: MoreIcon,
        title: 'More',
        link: '/',
    },
]
