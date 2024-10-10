import { HeaderContentBlock, HeaderTextBlock, HeaderWrap } from '../styled'
import {
    SkeletonHeaderSubtitle,
    SkeletonHeaderTitle,
    SkeletonIcon,
} from './styles'

import { ToggleButton } from '@components/ToggleThemeButton'

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
            <ToggleButton />
        </HeaderWrap>
    )
}
