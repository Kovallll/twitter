import { useState } from 'react'

import { showMore, title } from './config'
import { Loader } from './Loader'
import { Accounts, AccountsSection, ShowMoreLink, Title } from './styled'

import UserCard from '@components/UserCard'
import { useAppSelector } from '@hooks'
import { loaderStatesSelector, totalSelector } from '@store'

export const TwitterAccountsBoard = () => {
    const [isShow, setIsShow] = useState(false)

    const { accounts } = useAppSelector(totalSelector)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

    const handleClickShowMore = () => {
        setIsShow((prev) => !prev)
    }

    if (isLoadingInitialData) {
        return <Loader />
    }
    return (
        <>
            <AccountsSection data-cy="accout-board">
                <Title>{title}</Title>
                <Accounts $isShow={isShow}>
                    {accounts.map((user) => (
                        <UserCard user={user} key={user.userId} />
                    ))}
                </Accounts>
                <ShowMoreLink onClick={handleClickShowMore}>
                    {showMore}
                </ShowMoreLink>
            </AccountsSection>
        </>
    )
}
