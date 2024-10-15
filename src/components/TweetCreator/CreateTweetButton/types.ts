import { TweetImageType } from '@types'

export interface CreateTweetButtonProps {
    tweetText: string
    createdTweetImages: TweetImageType[] | null
    handleChangeCreatedTweetImages: (images: TweetImageType[] | null) => void
    handleChangeTweetText: (text: string) => void
}
