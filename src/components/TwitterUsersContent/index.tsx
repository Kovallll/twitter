import { ContentSection } from './styled'

import { Search } from '@components/Search'
import { TweetImageBoard } from '@components/TweetImageBoard'
import { TwitterAccountsBoard } from '@components/TwitterAccountsBoard'

export const TwitterUsersContent = () => {
    return (
        <ContentSection>
            <Search />
            <TweetImageBoard />
            <TwitterAccountsBoard />
        </ContentSection>
    )
}
