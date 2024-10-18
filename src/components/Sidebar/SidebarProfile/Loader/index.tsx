import { Profile, TextBlock } from '../styled'
import { SkeletonImage, SkeletonName, SkeletonSocial } from './styled'

export const SidebarProfileLoader = () => {
    return (
        <Profile>
            <SkeletonImage />
            <TextBlock>
                <SkeletonName />
                <SkeletonSocial />
            </TextBlock>
        </Profile>
    )
}
