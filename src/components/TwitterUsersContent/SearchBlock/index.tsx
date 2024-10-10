import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { tweetsPlaceholder, usersPlaceholder } from './config'
import { Container } from './styled'

import { Search } from '@components/TwitterUsersContent/SearchBlock/Search'
import { SearchPopup } from '@components/TwitterUsersContent/SearchBlock/SearchPopup'
import { Paths } from '@constants'

export const SearchBlock = () => {
    const [isSearch, setIsSeacrh] = useState(false)

    const location = useLocation()
    const placeholder =
        location.pathname === Paths.Profile
            ? tweetsPlaceholder
            : usersPlaceholder

    const handleChangeIsSearch = () => {
        setIsSeacrh((prev) => !prev)
    }

    return (
        <Container>
            <Search onClick={handleChangeIsSearch} placeholder={placeholder} />
            {isSearch && <SearchPopup onClose={handleChangeIsSearch} />}
        </Container>
    )
}
