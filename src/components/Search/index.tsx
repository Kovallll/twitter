import { Container, SearchIcon, SearchInput } from './styled'

import { images } from '@constants'

export const Search = ({ placeholder = 'search' }) => {
    return (
        <Container>
            <SearchIcon src={images.searchIcon} />
            <SearchInput placeholder={placeholder} />
        </Container>
    )
}
