import { TweetImageType } from '@types'

export interface FileUploaderProps {
    tweetText?: string
    tweetImages?: TweetImageType[] | null
    handleChangeTweetText?: (text: string) => void
    handleDeleteTweetImage?: (id: string) => void
    handleUpdateImage: (
        e: ProgressEvent<FileReader>,
        file: File,
        id?: string
    ) => void
    isTweet: boolean
    children?: React.ReactNode
}