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
import { images } from '@constants'
import { Button } from '@styles/global'
import { theme } from '@styles/theme'

const Profile = () => {
    return (
        <Container>
            <SidebarWrap>
                <Sidebar />
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
