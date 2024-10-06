import { ReadyToTweetStorageType } from '@types'

export interface TweetProps {
    data: ReadyToTweetStorageType
    handleDeleteTweet: (tweetId: string) => void
}
