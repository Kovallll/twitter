import styled, { css } from 'styled-components'

import { mixins, ProfileIcon } from '@styles'

export const TweetArticle = styled.article`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
            padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxl + 'px'};
            border-bottom: ${theme.tweetStyles.borderBottom +
            theme.palette.lineBoardColor};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.md + 'px ' + theme.spaces.xl + 'px'};
            }

            @media (${theme.media.md}) {
                padding: ${theme.spaces.sm + 'px ' + theme.spaces.lg + 'px'};
            }
        `
    }}
`
export const TopInfoBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            margin-bottom: ${theme.spaces.xs + 'px'};

            @media (${theme.media.sm}) {
                margin-right: ${theme.spaces.xxxl + 'px '};
            }
        `
    }}
`

export const TweetAuthor = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: ${theme.boldFont};
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-right: ${theme.spaces.xs + 'px'};
            word-wrap: break-word;

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xs + 'px'};
            }

            @media (${theme.media.xxs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
                white-space: nowrap;
                width: ${theme.tweetStyles.authorWidth + 'px'};
                overflow: hidden;
            }
        `
    }}
`

export const TweetSocial = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xxs + 'px'};
            margin-right: ${theme.spaces.xs + 'px'};
            word-wrap: break-word;

            @media (${theme.media.xxs}) {
                white-space: nowrap;
                width: ${theme.tweetStyles.socialWidth + 'px'};
                overflow: hidden;
            }
        `
    }}
`

export const TweetText = styled.p`
    ${({ theme }) => {
        return css`
            word-wrap: break-word;
            width: ${theme.fullSize + '%'};
            padding-right: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const TweetDate = styled.p`
    ${({ theme }) => {
        return css`
            white-space: nowrap;
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const InfoBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
            padding-left: ${theme.spaces.xxxxl + 'px'};

            @media (${theme.media.sm}) {
                padding-left: ${theme.spaces.xxxl + 'px'};
            }
        `
    }}
`

export const TweetIcon = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.lg + 'px'};
            position: absolute;
            top: 0;
            left: 0;

            @media (${theme.media.md}) {
                margin-right: ${theme.spaces.md + 'px'};
            }

            @media (${theme.media.sm}) {
                left: -${theme.spaces.xs + 'px'};
            }
        `
    }}
`

export const TweetInfoBlock = styled.div`
    ${({ theme }) => {
        return css`
            display: flex;
            margin-bottom: ${theme.spaces.xl + 'px'};
            width: ${theme.fullSize + '%'};
            position: relative;
        `
    }}
`

export const TweetImageBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const MoreBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            cursor: pointer;
            position: absolute;
            right: 0;
            top: 0;
            width: ${theme.tweetStyles.moreWidth + 'px'};
            height: ${theme.tweetStyles.moreHeight + 'px'};
        `
    }}
`

export const TweetImage = styled.img`
    ${({ theme }) => {
        return css`
            object-fit: contain;
            max-width: ${theme.tweetStyles.xl.width + 'px'};
            max-height: ${theme.tweetStyles.xl.height + 'px'};
            min-width: ${Number(theme.tweetStyles.xl.width) / 2 + 'px'};
            min-height: ${Number(theme.tweetStyles.xl.height) / 2 + 'px'};
            border-radius: ${theme.spaces.lg + 'px'};
            margin-bottom: ${theme.spaces.sm + 'px'};

            @media (${theme.media.lg}) {
                max-width: ${theme.tweetStyles.lg.width + 'px'};
                max-height: ${theme.tweetStyles.lg.height + 'px'};
                min-width: ${Number(theme.tweetStyles.lg.width) / 2 + 'px'};
                min-height: ${Number(theme.tweetStyles.lg.height) / 2 + 'px'};
            }

            @media (${theme.media.md}) {
                max-width: ${theme.tweetStyles.md.width + 'px'};
                max-height: ${theme.tweetStyles.md.height + 'px'};
                min-width: ${Number(theme.tweetStyles.md.width) / 2 + 'px'};
                min-height: ${Number(theme.tweetStyles.md.height) / 2 + 'px'};
            }

            @media (${theme.media.sm}) {
                max-width: ${theme.tweetStyles.sm.width + 'px'};
                max-height: ${theme.tweetStyles.sm.height + 'px'};
                min-width: ${Number(theme.tweetStyles.sm.width) / 2 + 'px'};
                min-height: ${Number(theme.tweetStyles.sm.height) / 2 + 'px'};
            }

            @media (${theme.media.xs}) {
                max-width: ${theme.tweetStyles.xs.width + 'px'};
                max-height: ${theme.tweetStyles.xs.height + 'px'};
                min-width: ${Number(theme.tweetStyles.xs.width) / 2 + 'px'};
                min-height: ${Number(theme.tweetStyles.xs.height) / 2 + 'px'};
            }

            @media (${theme.media.xxs}) {
                max-width: ${theme.tweetStyles.xxs.width + 'px'};
                max-height: ${theme.tweetStyles.xxs.height + 'px'};
                min-width: ${Number(theme.tweetStyles.xxs.width) / 2 + 'px'};
                min-height: ${Number(theme.tweetStyles.xxs.height) / 2 + 'px'};
            }
        `
    }}
`

export const TweetLike = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            cursor: pointer;
            margin-left: ${theme.spaces.xxxl + 'px'};
        `
    }}
`

export const LikeCount = styled.p`
    ${({ theme }) => {
        return css`
            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const LikeIcon = styled.img`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.sm + 'px'};
            transition: ${theme.tweetStyles.likeTransition};

            &:active {
                transform: scale(${theme.tweetStyles.likeScale});
            }

            @media (${theme.media.xs}) {
                width: ${theme.tweetStyles.likeIconSize + 'px'};
                height: ${theme.tweetStyles.likeIconSize + 'px'};
            }
        `
    }}
`
