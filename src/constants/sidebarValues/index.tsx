import BookmarksIcon from '@assets/icons/bookmarks.svg?react'
import ExploreIcon from '@assets/icons/explore.svg?react'
import HomeIcon from '@assets/icons/home.svg?react'
import ListsIcon from '@assets/icons/lists.svg?react'
import MessagesIcon from '@assets/icons/messages.svg?react'
import MoreIcon from '@assets/icons/more.svg?react'
import NotificationIcon from '@assets/icons/notification.svg?react'
import ProfileIcon from '@assets/icons/profile.svg?react'

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
