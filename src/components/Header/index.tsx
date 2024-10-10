import { avatarIconAltText, subtitleText } from './config'
import { HeaderLoader } from './Loader'
import {
    AvatarIcon,
    HeaderContent,
    HeaderSubtitle,
    HeaderTextBlock,
    HeaderTitle,
    HeaderWrap,
    IconWrap,
    Title,
} from './styled'
import { HeaderProps } from './types'

import { ToggleButton } from '@components/ToggleThemeButton'
import { useAppDispatch, useAppSelector } from '@hooks'
import { updateIsSidebarOpen } from '@store'

export const Header = ({ title }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const { isLoadingInitialData } = useAppSelector((state) => state.boolean)
    const { user } = useAppSelector((state) => state.user)

    const handleClickProfileIcon = () => {
        dispatch(updateIsSidebarOpen(true))
    }

    return (
        <HeaderWrap>
            {isLoadingInitialData ? (
                <HeaderLoader />
            ) : (
                <HeaderContent>
                    {title ? (
                        <>
                            <IconWrap onClick={handleClickProfileIcon}>
                                <AvatarIcon
                                    src={user.avatar.url}
                                    alt={avatarIconAltText}
                                />
                            </IconWrap>
                            <Title>{title}</Title>
                        </>
                    ) : (
                        <>
                            <IconWrap onClick={handleClickProfileIcon}>
                                <AvatarIcon
                                    src={user.avatar.url}
                                    alt={avatarIconAltText}
                                />
                            </IconWrap>
                            <HeaderTextBlock>
                                <HeaderTitle>{user?.name}</HeaderTitle>
                                <HeaderSubtitle>
                                    {user?.tweets?.length ?? 0} {subtitleText}
                                </HeaderSubtitle>
                            </HeaderTextBlock>
                        </>
                    )}
                </HeaderContent>
            )}

            <ToggleButton />
        </HeaderWrap>
    )
}
