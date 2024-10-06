import { UseFormRegister } from 'react-hook-form'

export { type Theme } from './theme'

export interface ButtonProps {
    $withBorder?: boolean
    $backgroundColor?: string
    $color?: string
}

export interface LoginFormInput {
    email: string
    password: string
}

export interface SignUpFormInput {
    name: string
    phone: string
    email: string
    password: string
    confirmPassword: string
    date: SignUpDate
}

export type DateType = 'year' | 'month' | 'day'

export type DateLabel = 'date.year' | 'date.month' | 'date.day'

export type SignUpDate = Record<DateType, string>

export interface SelectProps {
    data: string[]
    error: string | undefined
    type: DateType
    register?: UseFormRegister<SignUpFormInput>
    onChangeDate: (value: string, type: DateType) => void
    value: string
}

export interface ActionInterface<T, P> {
    readonly type: T
    readonly payload: P
}

export type TweetImageType = { id: string; file: File; url: string }

export type AvatarImage = { id: string; file: File }

export type CreatedTweetImageType = { id: string; url: string }

export type StorageTweetImageType = { id: string }

export interface TweetStorageType {
    tweetId: string
    imagesData: TweetImageType[] | null
    text: string
    timePost: string
}

export interface ReadyToTweetStorageType {
    tweetId: string
    imagesData: StorageTweetImageType[] | null
    text: string
    timePost: string
}

export interface UserData {
    userId: string | null
    email: string
    name: string
    social?: string
    description?: string
    avatar: CreatedTweetImageType
    followers: string[]
    following: string[]
    tweets: ReadyToTweetStorageType[] | null
}

export interface ModalUserData {
    description: string
    social: string
    name: string
}

export interface EditModalData {
    description: string | undefined
    social: string | undefined
    name: string
    photoUrl?: string
}

export interface PassingUserData {
    social: string
    avatarUrl: string
    name: string
}

export type UserUploadTweetImage = CreatedTweetImageType[] | null

export interface AccountData {
    docId: string
    userId: string
    name: string
    social?: string
    avatar: CreatedTweetImageType
    followers: string[]
}
