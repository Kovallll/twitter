import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    logoAltText,
    logOutIconAltText,
    logOutText,
    postIconAltText,
    tweetText,
} from './config'
import { SidebarLink } from './SidebarLink'
import { SidebarProfile } from './SidebarProfile'
import {
    Container,
    DesktopText,
    IconWrap,
    LogOutIconWrap,
    LogoWrap,
    PostIconWrap,
    SidebarButton,
    TabletIcon,
    Wrap,
} from './styled'

import logo from '@assets/icons/twitterLogo.svg'
import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { hiddenSidebarWidth, images, sidebarLinks } from '@constants'
import { signOutFirebaseAccount } from '@firebase'
import {
    useAppDispatch,
    useAppSelector,
    useClickOutside,
    useWindowSize,
} from '@hooks'
import {
    openedStatesSelector,
    updateIsSidebarOpen,
    updateIsTweetModalOpen,
    userSelector,
} from '@store'
import { Logo, theme } from '@styles'

export const Sidebar = () => {
    const sidebarRef = useRef(null)
    const [isLogOut, setIsLogOut] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector(userSelector)
    const { isSidebarOpen } = useAppSelector(openedStatesSelector)

    const { width } = useWindowSize()

    if (width >= hiddenSidebarWidth && !isSidebarOpen) {
        dispatch(updateIsSidebarOpen(true))
    }

    useClickOutside(sidebarRef, () => {
        if (width <= hiddenSidebarWidth) {
            dispatch(updateIsSidebarOpen(false))
        }
    })

    const handleChangeIsLogOut = () => {
        setIsLogOut((prev) => !prev)
    }

    const handleSignOutClick = () => {
        signOutFirebaseAccount(navigate, dispatch)
    }

    const handleOpenModalTweet = () => {
        dispatch(updateIsTweetModalOpen(true))
        dispatch(updateIsSidebarOpen(false))
    }

    return (
        <>
            {isSidebarOpen && (
                <Wrap ref={sidebarRef}>
                    <Container>
                        <LogoWrap>
                            <Logo src={logo} alt={logoAltText} />
                        </LogoWrap>
                        {sidebarLinks.map((linkData) => (
                            <SidebarLink
                                key={linkData.title}
                                linkData={linkData}
                            />
                        ))}
                        <SidebarButton
                            $backgroundColor={theme.palette.blue}
                            $color={theme.palette.common.white}
                            onClick={handleOpenModalTweet}
                        >
                            {tweetText}
                        </SidebarButton>
                        <IconWrap onClick={handleOpenModalTweet}>
                            <PostIconWrap>
                                <TabletIcon
                                    src={images.postIcon}
                                    alt={postIconAltText}
                                />
                            </PostIconWrap>
                        </IconWrap>
                        <SidebarProfile
                            avatarUrl={user.avatar.url}
                            name={user.name}
                            social={user.social}
                        />
                        <SidebarButton
                            $backgroundColor={theme.palette.gray}
                            $color={theme.palette.common.white}
                            onClick={handleChangeIsLogOut}
                        >
                            <DesktopText>{logOutText}</DesktopText>
                        </SidebarButton>
                        <IconWrap onClick={handleChangeIsLogOut}>
                            <LogOutIconWrap>
                                <TabletIcon
                                    src={images.logoutIcon}
                                    alt={logOutIconAltText}
                                />
                            </LogOutIconWrap>
                        </IconWrap>
                        {isLogOut && (
                            <ConfirmModal
                                onClose={handleChangeIsLogOut}
                                onConfirm={handleSignOutClick}
                                confirmText={logOutText}
                            />
                        )}
                    </Container>
                </Wrap>
            )}
        </>
    )
}
