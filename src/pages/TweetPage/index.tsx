import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import { title } from './config'
import { Container, TweetSection } from './styled'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { Tweet } from '@components/Tweet'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'
import { totalSelector, userSelector } from '@store'

const TweetPage = () => {
    const { tweetId } = useParams()
    const { accounts } = useAppSelector(totalSelector)
    const { user } = useAppSelector(userSelector)
    const tweetData = useMemo(() => {
        return accounts
            .map((account) => {
                const tweet = account.tweets?.find(
                    (tweet) => tweet.tweetId === tweetId
                )
                if (tweet) {
                    return { tweetData: tweet, account: account }
                }
            })
            .filter((tweet) => tweet !== undefined)[0]
    }, [accounts, tweetId])

    return (
        <>
            {tweetData && (
                <Container>
                    <Sidebar />
                    <TweetSection>
                        <Header title={title} user={user} />
                        <Tweet data={tweetData} />
                    </TweetSection>
                    <TwitterUsersContent />
                </Container>
            )}
        </>
    )
}

export default TweetPage
