import { editText } from '../config'
import {
    EditBlock,
    EditButton,
    ImageWrap,
    InfoBlock,
    ProfileBottomInfo,
    ProfileFollowBlock,
    ProfileTopInfo,
} from '../styled'
import {
    SkeletonDescription,
    SkeletonFollow,
    SkeletonIcon,
    SkeletonName,
    SkeletonSocial,
} from './styled'

export const ProfileLoader = () => {
    return (
        <InfoBlock>
            <ProfileTopInfo>
                <ImageWrap>
                    <SkeletonIcon />
                </ImageWrap>
                <EditBlock>
                    <EditButton>{editText}</EditButton>
                </EditBlock>
            </ProfileTopInfo>
            <ProfileBottomInfo>
                <SkeletonName />
                <SkeletonSocial />
                <SkeletonDescription />
                <ProfileFollowBlock>
                    <SkeletonFollow />
                    <SkeletonFollow />
                </ProfileFollowBlock>
            </ProfileBottomInfo>
        </InfoBlock>
    )
}
