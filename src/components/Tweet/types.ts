import { ReadyToTweetStorageType, UserData } from '@types'

export interface TweetProps {
    data: TweetData
    handleDeleteTweet?: (tweetId: string) => void
    isUserTweet?: boolean
}

export interface TweetData {
    tweetData: ReadyToTweetStorageType
    user: UserData
}
