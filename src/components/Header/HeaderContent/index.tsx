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

export const HeaderContent = (props: HeaderContentProps) => {
    const { user, title, handleClickProfileIcon } = props
    const avatar = user.avatar.url

    if (title) {
        return (
            <>
                <IconWrap onClick={handleClickProfileIcon}>
                    <AvatarIcon src={avatar} alt={avatarIconAltText} />
                </IconWrap>
                <Title>{title}</Title>
            </>
        )
    }

    return (
        <>
            <IconWrap onClick={handleClickProfileIcon}>
                <AvatarIcon src={avatar} alt={avatarIconAltText} />
            </IconWrap>
            <HeaderTextBlock>
                <HeaderTitle>{user?.name}</HeaderTitle>
                <HeaderSubtitle>
                    {user?.tweets?.length ?? 0} {subtitleText}
                </HeaderSubtitle>
            </HeaderTextBlock>
        </>
    )
}
