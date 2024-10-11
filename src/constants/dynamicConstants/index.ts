import bookmarksIcon from '@assets/icons/bookmarks.svg'
import closeIcon from '@assets/icons/close.svg'
import dotsIcon from '@assets/icons/dots.svg'
import exploreIcon from '@assets/icons/explore.svg'
import eyeOpen from '@assets/icons/eyeSee.svg'
import eyeSlash from '@assets/icons/eyeSlash.svg'
import googleIcon from '@assets/icons/googleIcon.svg'
import homeIcon from '@assets/icons/homeOutline.svg'
import uploadImage from '@assets/icons/image.svg'
import likeFill from '@assets/icons/likeFill.svg'
import likeOutline from '@assets/icons/likeOutline.svg'
import listsIcon from '@assets/icons/lists.svg'
import logoutIcon from '@assets/icons/logout.svg'
import messagesIcon from '@assets/icons/messages.svg'
import moreIcon from '@assets/icons/more.svg'
import notificationIcon from '@assets/icons/notification.svg'
import postIcon from '@assets/icons/post.svg'
import profileIcon from '@assets/icons/profileOutline.svg'
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
    dotsIcon,
    eyeOpen,
    eyeSlash,
    likeFill,
    likeOutline,
    postIcon,
    logoutIcon,
}

export enum ActionTypes {
    UserDate = 'user/date',
    UserData = 'user/data',
    UserTotal = 'user/total',
    UserFollowing = 'user/following',
    UserLiked = 'user/liked',
    NotifyText = 'notify/text',
    TotalAccounts = 'total/accounts',
    SeacrhValue = 'search/value',
    SearchData = 'search/data',
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
        photoUrl: images.profileImage,
    },
    date: defaultDate,
    user: defaultUser,
    following: [],
    liked: [],
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

export const sidebarLinks = [
    { icon: homeIcon, title: 'Home', link: Paths.Home },
    { icon: exploreIcon, title: 'Explore', link: '/' },
    { icon: notificationIcon, title: 'Notification', link: '/' },
    { icon: messagesIcon, title: 'Messages', link: '/' },
    { icon: bookmarksIcon, title: 'Bookmarks', link: '/' },
    { icon: listsIcon, title: 'Lists', link: '/' },
    { icon: profileIcon, title: 'Profile', link: Paths.Profile },
    { icon: moreIcon, title: 'More', link: '/' },
]
