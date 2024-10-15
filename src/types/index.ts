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
    onChangeDate: (value: string) => void
    value: string
}

export interface ActionInterface<T, P> {
    readonly type: T
    readonly payload: P
}

export type TweetImageType = { id: string; file: File; url: string }

export type AvatarImage = { id: string; file: File | null }

export type CreatedTweetImageType = { id: string; url: string }

export type StorageTweetImageType = { id: string }

export interface TweetStorageType {
    tweetId: string
    imagesData: TweetImageType[] | null
    text: string
    timePost: number
    liked: string[]
}

export interface ReadyToTweetStorageType {
    tweetId: string
    imagesData: StorageTweetImageType[] | null
    text: string
    timePost: number
    liked: string[]
}

export interface UserData {
    docId: string
    userId: string
    email: string
    name: string
    social: string | null
    description: string | null
    avatar: CreatedTweetImageType
    followers: string[]
    following: string[]
    tweets: ReadyToTweetStorageType[] | null
}

export interface EditModalData {
    description: string | null
    social: string | null
    name: string
    avatarUrl?: string
}

export interface UserCredential {
    password: string
    email: string
}
