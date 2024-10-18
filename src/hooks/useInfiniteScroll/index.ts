import { useEffect, useMemo, useRef } from 'react'

import { useAppDispatch, useAppSelector } from '@hooks'
import { homeDataSelector, updateHomePageCount, updateHomeTweets } from '@store'
import { UserData } from '@types'
import { getSortedTweetsByTimePost } from '@utils'

export const useInfiniteScroll = (allAccounts: UserData[]) => {
    const observeElementRef = useRef(null)

    const dispatch = useAppDispatch()
    const { pageCount } = useAppSelector(homeDataSelector)

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
                dispatch(updateHomePageCount(pageCount + 1))
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
    }, [currentTweets, dispatch, pageCount])

    return { ref: observeElementRef }
}
