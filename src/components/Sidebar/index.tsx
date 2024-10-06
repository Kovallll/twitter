import { useState } from 'react'

import {
    Container,
    Icon,
    LogoWrap,
    NameText,
    Profile,
    SidebarImage,
    SidebarLink,
    SocialText,
    TextBlock,
    Title,
} from './styled'
import { SidebarProps } from './types'

import logo from '@assets/icons/twitterLogo.svg'
import Modal from '@components/Modal'
import { ConfirmModal } from '@components/Modal/ConfirmModal'
import { TweetCreator } from '@components/TweetCreator'
import { sidebarLinks } from '@constants'
import { useAppSelector } from '@hooks'
import { Button, Logo } from '@styles/global'
import { theme } from '@styles/theme'

export const Sidebar = ({ onSignOut }: SidebarProps) => {
    const [isLogOut, setIsLogOut] = useState(false)
    const [isModalTweetOpen, setIsModalTweetOpen] = useState(false)
    const { user } = useAppSelector((state) => state.user)
    const { name, avatar, social } = user

    const handleChangeIsLogOut = () => {
        setIsLogOut((prev) => !prev)
    }

    const handleLogOut = () => {
        onSignOut()
    }

    const handleOpenModalTweet = () => {
        setIsModalTweetOpen((prev) => !prev)
    }

    return (
        <Container>
            <LogoWrap>
                <Logo src={logo} alt="logo" />
            </LogoWrap>
            {sidebarLinks.map((link, index) => (
                <SidebarLink href="" key={index}>
                    <Icon src={link.icon} alt="icon" />
                    <Title>{link.title}</Title>
                </SidebarLink>
            ))}
            <Button
                $backgroundColor={theme.palette.blue}
                $color={theme.palette.common.white}
                onClick={handleOpenModalTweet}
            >
                Tweet
            </Button>
            <Profile>
                <SidebarImage src={avatar.url} alt="profileImage" />
                <TextBlock>
                    <NameText>{name}</NameText>
                    <SocialText>{social}</SocialText>
                </TextBlock>
            </Profile>
            <Button
                $backgroundColor={theme.palette.gray}
                $color={theme.palette.common.white}
                onClick={handleChangeIsLogOut}
            >
                Log out
            </Button>
            {isLogOut && (
                <ConfirmModal
                    onClose={handleChangeIsLogOut}
                    onConfirm={handleLogOut}
                    confirmText="Log out"
                />
            )}
            {isModalTweetOpen && (
                <Modal onCloseModal={handleOpenModalTweet}>
                    <TweetCreator />
                </Modal>
            )}
        </Container>
    )
}
