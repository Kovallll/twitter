import { searchIconAltText } from './config'
import { Container, SearchIcon, SearchInput } from './styled'
import { SearchProps } from './types'

import { images } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import { searchSelector, updateSearchValue } from '@store'

export const Search = ({ placeholder, ...props }: SearchProps) => {
    const dispatch = useAppDispatch()
    const { value } = useAppSelector(searchSelector)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        dispatch(updateSearchValue(value))
    }

    return (
        <Container {...props}>
            <SearchIcon src={images.searchIcon} alt={searchIconAltText} />
            <SearchInput
                placeholder={placeholder}
                value={value}
                onChange={handleChangeValue}
                data-cy='search'
            />
        </Container>
    )
}
