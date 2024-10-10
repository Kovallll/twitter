import { ActionTypes } from '@constants'
import { ActionInterface, EditModalData, SignUpDate, UserData } from '@types'

export type UpdateUserDate = ActionInterface<
    typeof ActionTypes.UserDate,
    SignUpDate
>

export type UpdateUserData = ActionInterface<
    typeof ActionTypes.UserData,
    EditModalData
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
