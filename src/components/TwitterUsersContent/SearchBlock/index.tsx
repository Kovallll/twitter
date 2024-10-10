import { useState } from 'react'

import { Container } from './styled'

import { Search } from '@components/TwitterUsersContent/SearchBlock/Search'
import { SearchPopup } from '@components/TwitterUsersContent/SearchBlock/SearchPopup'

export const SearchBlock = () => {
    const [isSearch, setIsSeacrh] = useState(false)

    const handleChangeIsSearch = () => {
        setIsSeacrh((prev) => !prev)
    }

    return (
        <Container>
            <Search onClick={handleChangeIsSearch} />
            {isSearch && <SearchPopup onClose={handleChangeIsSearch} />}
        </Container>
    )
}
