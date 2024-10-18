import { avatarIconAltText, subtitleText } from '../config'
import {
    AvatarIcon,
    HeaderSubtitle,
    HeaderTextBlock,
    HeaderTitle,
    IconWrap,
    Title,
} from '../styled'
import { HeaderContentProps } from './types'

import { useAppSelector } from '@hooks'
import { userSelector } from '@store'

export const HeaderContent = (props: HeaderContentProps) => {
    const { title, handleClickProfileIcon } = props

    const { currentUser } = useAppSelector(userSelector)
    const { avatar, name, tweets } = currentUser

    if (title) {
        return (
            <>
                <IconWrap onClick={handleClickProfileIcon}>
                    <AvatarIcon src={avatar.url} alt={avatarIconAltText} />
                </IconWrap>
                <Title data-cy='title'>{title}</Title>
            </>
        )
    }

    return (
        <>
            <IconWrap onClick={handleClickProfileIcon}>
                <AvatarIcon src={avatar.url} alt={avatarIconAltText} />
            </IconWrap>
            <HeaderTextBlock>
                <HeaderTitle>{name}</HeaderTitle>
                <HeaderSubtitle>
                    {tweets?.length ?? 0} {subtitleText}
                </HeaderSubtitle>
            </HeaderTextBlock>
        </>
    )
}
