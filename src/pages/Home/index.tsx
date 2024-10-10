import { AllTweetsAccount } from './AllTweetsAccount'
import { title } from './config'
import { Container, HomeSection } from './styled'

import { Header } from '@components/Header'
import { Sidebar } from '@components/Sidebar'
import { TweetCreator } from '@components/TweetCreator'
import { TwitterUsersContent } from '@components/TwitterUsersContent'
import { useAppSelector } from '@hooks'

const Home = () => {
    const { accounts } = useAppSelector((state) => state.total)

    return (
        <Container>
            <Sidebar />
            <HomeSection>
                <Header title={title} />
                <TweetCreator />
                {accounts.map((account) => (
                    <AllTweetsAccount account={account} />
                ))}
            </HomeSection>
            <TwitterUsersContent />
        </Container>
    )
}

export default Home
