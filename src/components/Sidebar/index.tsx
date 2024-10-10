import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    logoAltText,
    logOutIconAltText,
    logOutText,
    navIconAltText,
    postIconAltText,
    profileImageAltText,
    tweetText,
} from './config'
import { SidebarProfileLoader } from './SidebarProfileLoader'
import {
    Container,
    DesktopText,
    Icon,
    IconWrap,
    LogOutIconWrap,
    LogoWrap,
    NameText,
    PostIconWrap,
    Profile,
    SidebarButton,
    SidebarImage,
    SidebarLink,
    SocialText,
    TabletIcon,
    TextBlock,
    Title,
    Wrap,
} from './styled'

import logo from '@assets/icons/twitterLogo.svg'
import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { hiddenSidebarWidth, images, sidebarLinks } from '@constants'
import { signOutFirebaseAccount } from '@firebase'
import { useAppDispatch, useAppSelector, useClickOutside } from '@hooks'
import { updateIsSidebarOpen, updateIsTweetModalOpen } from '@store'
import { Logo } from '@styles/global'
import { theme } from '@styles/theme'

export const Sidebar = () => {
    const sidebarRef = useRef(null)
    const [isLogOut, setIsLogOut] = useState(false)

    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { user } = useAppSelector((state) => state.user)
    const { isLoadingInitialData, isSidebarOpen } = useAppSelector(
        (state) => state.boolean
    )

    const { name, avatar, social } = user

    if (window.innerWidth >= hiddenSidebarWidth && !isSidebarOpen) {
        dispatch(updateIsSidebarOpen(true))
    }

    useClickOutside(sidebarRef, () => {
        if (window.innerWidth <= hiddenSidebarWidth) {
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
                        {sidebarLinks.map((link, index) => (
                            <SidebarLink to={link.link} key={index}>
                                <Icon src={link.icon} alt={navIconAltText} />
                                <Title>{link.title}</Title>
                            </SidebarLink>
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
