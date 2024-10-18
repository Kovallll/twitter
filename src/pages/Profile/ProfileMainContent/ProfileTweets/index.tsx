import { TweetSpinner } from './styled'

import { Tweet } from '@components/Tweet'
import { deleteTweetFromStorage } from '@firebase'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, userSelector } from '@store'

export const ProfileTweets = () => {
    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { user: activeUser, currentUser } = useAppSelector(userSelector)

    const handleDeleteTweet = (tweetId: string) => {
        deleteTweetFromStorage(
            currentUser.tweets!,
            tweetId,
            currentUser,
            dispatch
        )
    }

    const isUserTweet = activeUser.userId === currentUser.userId

    if (isLoadingInitialData) {
        return <TweetSpinner />
    }

    return (
        <>
            {currentUser.tweets?.map((data) => (
                <Tweet
                    data={{ tweetData: data, account: currentUser }}
                    handleDeleteTweet={handleDeleteTweet}
                    isUserTweet={isUserTweet}
                    key={currentUser.userId}
                />
            ))}
        </>
    )
}
