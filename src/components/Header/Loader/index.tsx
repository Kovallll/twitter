import { HeaderContent, HeaderTextBlock } from '../styled'
import {
    SkeletonHeaderSubtitle,
    SkeletonHeaderTitle,
    SkeletonIcon,
} from './styles'

export const HeaderLoader = () => {
    return (
        <HeaderContent>
            <SkeletonIcon />
            <HeaderTextBlock>
                <SkeletonHeaderTitle />
                <SkeletonHeaderSubtitle />
            </HeaderTextBlock>
        </HeaderContent>
    )
}
