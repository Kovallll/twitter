import {
    Container,
    Icon,
    Image,
    LogoWrap,
    NameText,
    Profile,
    SidebarLink,
    SocialText,
    TextBlock,
    Title,
} from './styled'

import logo from '@assets/icons/twitterLogo.svg'
import profileImage from '@assets/images/signupTwitter.png'
import { sidebarLinks } from '@constants'
import { Button, Logo } from '@styles/global'
import { theme } from '@styles/theme'



export const Sidebar = () => {
    return (
        <Container>
            <LogoWrap>
                <Logo src={logo} alt="logo" />
            </LogoWrap>
            {sidebarLinks.map((link) => (
                <SidebarLink href="">
                    <Icon src={link.icon} alt="icon" />
                    <Title>{link.title}</Title>
                </SidebarLink>
            ))}
            <Button
                $backgroundColor={theme.palette.blue}
                $color={theme.palette.common.white}
            >
                Tweet
            </Button>
            <Profile>
                <Image src={profileImage} alt="profileImage" />
                <TextBlock>
                    <NameText>Name</NameText>
                    <SocialText>@my-name</SocialText>
                </TextBlock>
            </Profile>
            <Button
                $backgroundColor={theme.palette.gray}
                $color={theme.palette.common.white}
            >
                Log out
            </Button>
        </Container>
    )
}
