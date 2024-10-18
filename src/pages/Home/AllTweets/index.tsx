import { useInfiniteScroll } from 'src/hooks/useInfiniteScroll'
import { homeDataSelector } from 'src/store/selectors'
import { ObserveElement, TweetsSpinner } from './styled'
import { AllTweetsProps } from './types'

import { Tweet } from '@components/Tweet'
import { useAppSelector } from '@hooks'
import { loaderStatesSelector } from '@store'

export const AllTweets = ({ allAccounts }: AllTweetsProps) => {
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { tweets } = useAppSelector(homeDataSelector)

    const { ref } = useInfiniteScroll(allAccounts)

    if (isLoadingInitialData) {
        return <TweetsSpinner />
    }
    return (
        <>
            {tweets?.map(({ account, tweet }) => (
                <Tweet
                    data={{ tweetData: tweet, account: account }}
                    key={account.userId}
                />
            ))}
            <ObserveElement ref={ref} />
        </>
    )
}
