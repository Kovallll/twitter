import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFirebaseAuth } from 'firebase.config'
import { onAuthStateChanged, User } from 'firebase/auth'

import {
    Container,
    EditBlock,
    Followers,
    Following,
    HeaderSubtitle,
    HeaderTextBlock,
    HeaderTitle,
    Image,
    InfoBlock,
    ProfileContent,
    ProfileDescription,
    ProfileFollowBlock,
    ProfileHeader,
    ProfileIcon,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileSocial,
    SearchBar,
    SidebarWrap,
    TweetBox,
    TweetButtonBlock,
    TweetCreatorBlock,
    TweetInput,
} from './styled'

import { Sidebar } from '@components/Sidebar'
import { images, Paths } from '@constants'
import { Button } from '@styles/global'
import { theme } from '@styles/theme'
import { LocalStorage } from '@utils'

const Profile = () => {
    const [user, setUser] = useState<User | null>(null)
    const auth = getFirebaseAuth()
    const navigate = useNavigate()
    const localStorage = new LocalStorage()
    console.log(user)
    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })

        return () => listener()
    }, [auth])

    const handleSignOutClick = () => {
        localStorage.setItem('isSignedIn', false)
        auth.signOut()
        setUser(null)
        navigate(Paths.SignUp)
    }

    return (
        <Container>
            <SidebarWrap>
                <Sidebar onSignOut={handleSignOutClick} />
            </SidebarWrap>
            <ProfileContent>
                <ProfileHeader>
                    <HeaderTextBlock>
                        <HeaderTitle>Bobur</HeaderTitle>
                        <HeaderSubtitle>1,070 Tweets</HeaderSubtitle>
                    </HeaderTextBlock>
                    <Button>Toggle theme</Button>
                </ProfileHeader>
                <Image src={images.profileBackground} />
                <ProfileInfo>
                    <InfoBlock>
                        <ProfileImage src={images.profileImage} />
                        <ProfileName>Bobur</ProfileName>
                        <ProfileSocial>@bobur_mavlonov</ProfileSocial>
                        <ProfileDescription>
                            UX&UI designer at @abutechuz
                        </ProfileDescription>
                        <ProfileFollowBlock>
                            <Following>67 Following</Following>
                            <Followers>47 Followers</Followers>
                        </ProfileFollowBlock>
                    </InfoBlock>
                    <EditBlock>
                        <Button $withBorder={true}>Edit profile</Button>
                    </EditBlock>
                </ProfileInfo>
                <TweetCreatorBlock>
                    <ProfileIcon src={images.profileImage} />
                    <TweetBox />
                    <TweetButtonBlock>
                        <Button
                            $backgroundColor={theme.palette.lightBlue}
                            $color={theme.palette.common.white}
                        >
                            Tweet
                        </Button>
                    </TweetButtonBlock>
                </TweetCreatorBlock>
                <TweetInput type="file" />
            </ProfileContent>
            <SearchBar />
        </Container>
    )
}

export default Profile
