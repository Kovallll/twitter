import { useLocation } from 'react-router-dom'

import { InfoLinks } from './InfoLinks'
import { SearchBlock } from './SearchBlock'
import { ContentSection } from './styled'
import { TweetImageBoard } from './TweetImageBoard'
import { TwitterAccountsBoard } from './TwitterAccountsBoard'

import { Paths } from '@constants'

export const TwitterUsersContent = () => {
    const location = useLocation()
    const isPathHome = location.pathname === Paths.Home
    const isPathProfile = location.pathname === Paths.Profile

    return (
        <ContentSection>
            <SearchBlock />
            {isPathProfile && <TweetImageBoard />}
            <TwitterAccountsBoard />
            {isPathHome && <InfoLinks />}
        </ContentSection>
    )
}
