import { HeaderContent } from './HeaderContent'
import { HeaderLoader } from './Loader'
import { HeaderContentBlock, HeaderWrap } from './styled'
import { HeaderProps } from './types'

import { ToggleButton } from '@components/ToggleThemeButton'
import { useAppDispatch, useAppSelector } from '@hooks'
import { loaderStatesSelector, updateIsSidebarOpen, userSelector } from '@store'

export const Header = ({ title }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { user } = useAppSelector(userSelector)

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
                    title={title}
                    user={user}
                    handleClickProfileIcon={handleClickProfileIcon}
                />
            </HeaderContentBlock>
            <ToggleButton />
        </HeaderWrap>
    )
}
