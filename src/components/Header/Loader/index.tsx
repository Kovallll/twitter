import { HeaderContentBlock, HeaderTextBlock, HeaderWrap } from '../styled'
import {
    SkeletonHeaderSubtitle,
    SkeletonHeaderTitle,
    SkeletonIcon,
} from './styles'

import { ToggleThemeButton } from '@components/ToggleThemeButton'

export const HeaderLoader = () => {
    return (
        <HeaderWrap>
            <HeaderContentBlock>
                <SkeletonIcon />
                <HeaderTextBlock>
                    <SkeletonHeaderTitle />
                    <SkeletonHeaderSubtitle />
                </HeaderTextBlock>
            </HeaderContentBlock>
            <ToggleThemeButton />
        </HeaderWrap>
    )
}
