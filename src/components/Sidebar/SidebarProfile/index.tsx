import { profileImageAltText } from '../config'
import { SidebarProfileLoader } from './Loader'
import {
    NameText,
    Profile,
    SidebarImage,
    SocialText,
    TextBlock,
} from './styled'
import { SidebarProfileProps } from './types'

import { useAppSelector } from '@hooks'
import { loaderStatesSelector } from '@store'

export const SidebarProfile = (props: SidebarProfileProps) => {
    const { isLoadingInitialData } = useAppSelector(loaderStatesSelector)

    const { avatarUrl, name, social } = props

    if (isLoadingInitialData) {
        return <SidebarProfileLoader />
    }
    return (
        <Profile>
            <SidebarImage src={avatarUrl} alt={profileImageAltText} />
            <TextBlock>
                <NameText>{name}</NameText>
                <SocialText>{social}</SocialText>
            </TextBlock>
        </Profile>
    )
}
