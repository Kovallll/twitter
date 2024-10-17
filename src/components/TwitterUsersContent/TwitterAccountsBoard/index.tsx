import { useState } from 'react'

import { showMore, title } from './config'
import { Loader } from './Loader'
import { Accounts, AccountsSection, ShowMoreLink, Title } from './styled'

import AccountCard from '@components/AccountCard'
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
            <AccountsSection>
                <Title>{title}</Title>
                <Accounts $isShow={isShow}>
                    {accounts.map((account) => (
                        <AccountCard account={account} key={account.userId} />
                    ))}
                </Accounts>
                <ShowMoreLink onClick={handleClickShowMore}>
                    {showMore}
                </ShowMoreLink>
            </AccountsSection>
        </>
    )
}
