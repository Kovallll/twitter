import { useEffect, useMemo, useRef, useState } from 'react'

import { homeDataSelector } from 'src/store/selectors'
import { ObserveElement, TweetsSpinner } from './styled'
import { AllTweetsProps } from './types'

import { Tweet } from '@components/Tweet'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, updateHomeTweets } from '@store'
import { getSortedTweetsByTimePost } from '@utils'

export const AllTweets = ({ allAccounts }: AllTweetsProps) => {
    const observeElementRef = useRef(null)
    const [pageCount, setPageCount] = useState(1)

    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { tweets } = useAppSelector(homeDataSelector)

    const currentTweets = useMemo(
        () => getSortedTweetsByTimePost(allAccounts, pageCount),
        [allAccounts, pageCount]
    )
    
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1.0,
        }

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && currentTweets.length !== 0) {
                dispatch(updateHomeTweets(currentTweets))
                setPageCount((prev) => (prev += 1))
            }
        }, options)
        const element = observeElementRef.current

        if (element) {
            observer.observe(element)
        }

        return () => {
            if (element) {
                observer.unobserve(element)
            }
        }
    }, [allAccounts, currentTweets, dispatch])

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
            <ObserveElement ref={observeElementRef} />
        </>
    )
}
