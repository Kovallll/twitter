import { HeaderContent } from './HeaderContent'
import { HeaderLoader } from './Loader'
import { HeaderContentBlock, HeaderWrap } from './styled'
import { HeaderProps } from './types'

import { ToggleThemeButton } from '@components/ToggleThemeButton'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, updateIsSidebarOpen } from '@store'

export const Header = ({ title, user }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

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
            <ToggleThemeButton />
        </HeaderWrap>
    )
}
