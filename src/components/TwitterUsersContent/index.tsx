import { SearchBlock } from './SearchBlock'
import { ContentSection } from './styled'
import { TweetImageBoard } from './TweetImageBoard'
import { TwitterAccountsBoard } from './TwitterAccountsBoard'

export const TwitterUsersContent = () => {
    return (
        <ContentSection>
            <SearchBlock />
            <TweetImageBoard />
            <TwitterAccountsBoard />
        </ContentSection>
    )
}
