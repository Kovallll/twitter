import { useMemo } from 'react'

import { AllTweets } from './AllTweets'
import { title } from './config'
import { Container, HomeSection } from './styled'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { TweetCreator } from '@components/TweetCreator'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'
import { totalSelector, userSelector } from '@store'

const Home = () => {
    const { accounts } = useAppSelector(totalSelector)
    const { user } = useAppSelector(userSelector)

    const allAccounts = useMemo(() => [...accounts, user], [accounts, user])

    return (
        <Container>
            <Sidebar />
            <HomeSection>
                <Header title={title} />
                <TweetCreator />
                <AllTweets allAccounts={allAccounts} />
            </HomeSection>
            <TwitterUsersContent />
        </Container>
    )
}

export default Home
