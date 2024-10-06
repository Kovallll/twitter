import {
    InfoBlock,
    TopInfoBlock,
    TweetArticle,
    TweetImageBlock,
    TweetInfoBlock,
} from '../styled'
import {
    SkeletonIcon,
    SkeletonImage,
    SkeletonSubtitle,
    SkeletonText,
    SkeletonTitle,
} from './styled'

export const TweetLoader = () => {
    return (
        <TweetArticle>
            <TweetInfoBlock>
                <SkeletonIcon />
                <InfoBlock>
                    <TopInfoBlock>
                        <SkeletonTitle />
                        <SkeletonSubtitle />
                        <SkeletonSubtitle />
                    </TopInfoBlock>
                    <SkeletonText />
                </InfoBlock>
            </TweetInfoBlock>
            <TweetImageBlock>
                <SkeletonImage />
            </TweetImageBlock>
        </TweetArticle>
    )
}
