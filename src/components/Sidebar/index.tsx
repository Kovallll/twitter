import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    logoAltText,
    logOutIconAltText,
    logOutText,
    postIconAltText,
    profileImageAltText,
    tweetText,
} from './config'
import { SidebarLink } from './SidebarLink'
import { SidebarProfileLoader } from './SidebarProfileLoader'
import {
    Container,
    DesktopText,
    IconWrap,
    LogOutButton,
    LogOutIconWrap,
    LogoWrap,
    NameText,
    PostIconWrap,
    Profile,
    SidebarButton,
    SidebarImage,
    SocialText,
    TabletIcon,
    TextBlock,
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
    loaderStatesSelector,
    openedStatesSelector,
    updateIsSidebarOpen,
    updateIsTweetModalOpen,
} from '@store'
import { Logo } from '@styles'

export const Sidebar = () => {
    const sidebarRef = useRef(null)
    const [isLogOut, setIsLogOut] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)
    const { isSidebarOpen } = useAppSelector(openedStatesSelector)

    const { width } = useWindowSize()

    const { name, avatar, social } = user

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
                            <SidebarLink linkData={linkData} />
                        ))}
                        <SidebarButton onClick={handleOpenModalTweet}>
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
                        {isLoadingInitialData ? (
                            <SidebarProfileLoader />
                        ) : (
                            <Profile>
                                <SidebarImage
                                    src={avatar.url}
                                    alt={profileImageAltText}
                                />
                                <TextBlock>
                                    <NameText>{name}</NameText>
                                    <SocialText>{social}</SocialText>
                                </TextBlock>
                            </Profile>
                        )}
                        <LogOutButton onClick={handleChangeIsLogOut}>
                            <DesktopText>{logOutText}</DesktopText>
                        </LogOutButton>
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
