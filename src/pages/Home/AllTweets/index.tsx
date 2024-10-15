import { useMemo } from 'react'

import { TweetsSpinner } from './styled'
import { AllTweetsProps } from './types'

import { Tweet } from '@components/Tweet'
import { useAppSelector } from '@hooks'
import { loaderStatesSelector } from '@store'
import { getSortedTweetsByTimePost } from '@utils'

export const AllTweets = ({ allAccounts }: AllTweetsProps) => {
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

    const sortedTweets = useMemo(
        () => getSortedTweetsByTimePost(allAccounts),
        [allAccounts]
    )

    if (isLoadingInitialData) {
        return <TweetsSpinner />
    }
    return (
        <>
            {sortedTweets.map(({ account, tweet }) => (
                <Tweet data={{ tweetData: tweet, account: account }} />
            ))}
        </>
    )
}
