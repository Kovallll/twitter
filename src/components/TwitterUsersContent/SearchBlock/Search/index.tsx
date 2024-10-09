import { searchIconAltText } from './config'
import { Container, SearchIcon, SearchInput } from './styled'
import { SearchProps } from './types'

import { images } from '@constants'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateSearchValue } from '@store'

export const Search = ({
    placeholder = 'search',
    ...otherProps
}: SearchProps) => {
    const dispatch = useAppDispatch()
    const { value } = useAppSelector((state) => state.search)

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        dispatch(updateSearchValue(value))
    }

    return (
        <Container {...otherProps}>
            <SearchIcon src={images.searchIcon} alt={searchIconAltText} />
            <SearchInput
                placeholder={placeholder}
                value={value}
                onChange={handleChangeValue}
            />
        </Container>
    )
}
