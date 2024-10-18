import { ActionTypes, Themes } from '@constants'
import { ActionInterface, SignUpDate, SortedTweet, UserData } from '@types'

export type UpdateUserDate = ActionInterface<
    typeof ActionTypes.UserDate,
    SignUpDate
>

export type UpdateCurrentUser = ActionInterface<
    typeof ActionTypes.UserCurrent,
    UserData
>

export type UpdateTotalUser = ActionInterface<
    typeof ActionTypes.UserTotal,
    UserData
>

export type UpdateUserFollowing = ActionInterface<
    typeof ActionTypes.UserFollowing,
    string[]
>

export type UpdateUserLiked = ActionInterface<
    typeof ActionTypes.UserLiked,
    string[]
>

export type UpdateNotifyText = ActionInterface<
    typeof ActionTypes.NotifyText,
    string
>

export type SetTotalAccounts = ActionInterface<
    typeof ActionTypes.TotalAccounts,
    UserData | never[]
>

export type UpdateSearchValue = ActionInterface<
    typeof ActionTypes.SeacrhValue,
    string
>

export type UpdateSearchData = ActionInterface<
    typeof ActionTypes.SearchData,
    JSX.Element[]
>

export type UpdateLoadingTweet = ActionInterface<
    typeof ActionTypes.LoadingTweet,
    boolean
>

export type UpdateLoadingInititalData = ActionInterface<
    typeof ActionTypes.LoadingInititalData,
    boolean
>

export type UpdateIsSidebarOpen = ActionInterface<
    typeof ActionTypes.isSidebarOpen,
    boolean
>

export type UpdateIsTweetModalOpen = ActionInterface<
    typeof ActionTypes.isTweetModalOpen,
    boolean
>

export type UpdateUserTheme = ActionInterface<
    typeof ActionTypes.UserTheme,
    Themes
>

export type UpdateHomeTweets = ActionInterface<
    typeof ActionTypes.HomeTweets,
    SortedTweet[] | SortedTweet
>

export type UpdateHomePageCount = ActionInterface<
    typeof ActionTypes.HomePageCount,
    number
>
