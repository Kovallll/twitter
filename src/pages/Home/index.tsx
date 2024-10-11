import { AllTweetsAccount } from './AllTweetsAccount'
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

    return (
        <Container>
            <Sidebar />
            <HomeSection>
                <Header title={title} user={user} />
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
