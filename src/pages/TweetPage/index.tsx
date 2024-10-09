import { useParams } from 'react-router-dom'

import { title } from './config'
import { Container, TweetSection } from './styled'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { Tweet } from '@components/Tweet'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'

const TweetPage = () => {
    const { tweetId } = useParams()
    const { accounts } = useAppSelector((state) => state.total)

    const tweetData = accounts
        .map((account) => {
            const tweet = account.tweets?.find(
                (tweet) => tweet.tweetId === tweetId
            )
            if (tweet) {
                return { tweetData: tweet, user: account }
            }
        })
        .filter((tweet) => tweet !== undefined)[0]

    return (
        <>
            {tweetData && (
                <Container>
                    <Sidebar />
                    <TweetSection>
                        <Header title={title} />
                        <Tweet data={tweetData} />
                    </TweetSection>
                    <TwitterUsersContent />
                </Container>
            )}
        </>
    )
}

export default TweetPage
