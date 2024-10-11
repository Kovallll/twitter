import { HeaderContent } from './HeaderContent'
import { HeaderLoader } from './Loader'
import { HeaderContentBlock, HeaderWrap } from './styled'
import { HeaderProps } from './types'

import { ToggleButton } from '@components/ToggleThemeButton'
import { useAppDispatch, useAppSelector } from '@hooks'
import {
    booleanStatesSelector,
    updateIsSidebarOpen,
} from '@store'

export const Header = ({ title, user }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(booleanStatesSelector)

    const handleClickProfileIcon = () => {
        dispatch(updateIsSidebarOpen(true))
    }

    if (isLoadingInitialData) {
        return <HeaderLoader />
    }

    return (
        <HeaderWrap>
            <HeaderContentBlock>
                <HeaderContent
                    user={user}
                    title={title}
                    handleClickProfileIcon={handleClickProfileIcon}
                />
            </HeaderContentBlock>
            <ToggleButton />
        </HeaderWrap>
    )
}
