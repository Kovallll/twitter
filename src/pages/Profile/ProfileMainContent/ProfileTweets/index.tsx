import { TweetSpinner } from './styled'
import { ProfileTweetsProps } from './types'

import { Tweet } from '@components/Tweet'
import { deleteTweetFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, userSelector } from '@store'

export const ProfileTweets = ({ user }: ProfileTweetsProps) => {
    const { tweets } = user

    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { user: activeUser } = useAppSelector(userSelector)

    const handleDeleteTweet = (tweetId: string) => {
        deleteTweetFromStorage(tweets!, tweetId, user, dispatch)
    }

    const isUserTweet = activeUser.userId === user.userId

    if (isLoadingInitialData) {
        return <TweetSpinner />
    }

    return (
        <>
            {tweets?.map((data) => (
                <Tweet
                    data={{ tweetData: data, account: user }}
                    handleDeleteTweet={handleDeleteTweet}
                    isUserTweet={isUserTweet}
                    key={user.userId}
                />
            ))}
        </>
    )
}
