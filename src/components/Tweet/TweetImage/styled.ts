import styled, { css } from 'styled-components'

import { CloseImageProps } from './types'

export const CloseIcon = styled.img<CloseImageProps>`
    ${({ theme, $isHover }) => {
        return css`
            display: ${$isHover ? 'block' : 'none'};
            width: ${theme.tweetImagePrewiewStyles.lg.closeIconSize + 'px'};
            height: ${theme.tweetImagePrewiewStyles.lg.closeIconSize + 'px'};
            padding: ${theme.spaces.sm + 'px'};
            margin: ${theme.spaces.sm + 'px'};
            position: absolute;
            background: ${theme.palette.common.white};
            cursor: pointer;
            border-radius: ${theme.circleRadius + '%'};

            @media (${theme.media.sm}) {
                width: ${theme.tweetImagePrewiewStyles.md.closeIconSize + 'px'};
                height: ${theme.tweetImagePrewiewStyles.md.closeIconSize +
                'px'};
                padding: ${theme.spaces.xs + 'px'};
                margin: ${theme.spaces.xs + 'px'};
            }

            @media (${theme.media.xs}) {
                width: ${theme.tweetImagePrewiewStyles.sm.closeIconSize + 'px'};
                height: ${theme.tweetImagePrewiewStyles.sm.closeIconSize +
                'px'};
                padding: ${theme.spaces.xxs + 'px'};
                margin: ${theme.spaces.xxs + 'px'};
            }
        `
    }}
`

export const TweetImageBlock = styled.div`
    position: relative;
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            object-fit: cover;

            width: ${Number(theme.tweetImagePrewiewStyles.xl.width) / 2 + 'px'};
            height: ${Number(theme.tweetImagePrewiewStyles.xl.width) / 3.5 +
            'px'};

            @media (${theme.media.lg}) {
                width: ${Number(theme.tweetImagePrewiewStyles.lg.width) / 2 +
                'px'};
                height: ${Number(theme.tweetImagePrewiewStyles.lg.width) / 3.5 +
                'px'};
            }

            @media (${theme.media.md}) {
                width: ${Number(theme.tweetImagePrewiewStyles.md.width) / 2 +
                'px'};
                height: ${Number(theme.tweetImagePrewiewStyles.md.width) / 3.5 +
                'px'};
            }

            @media (${theme.media.sm}) {
                width: ${Number(theme.tweetImagePrewiewStyles.sm.width) / 2 +
                'px'};
                height: ${Number(theme.tweetImagePrewiewStyles.sm.width) / 3.5 +
                'px'};
            }

            @media (${theme.media.xs}) {
                width: ${Number(theme.tweetImagePrewiewStyles.xs.width) / 2 +
                'px'};
                height: ${Number(theme.tweetImagePrewiewStyles.xs.width) / 3.5 +
                'px'};
            }

            @media (${theme.media.xxs}) {
                width: ${Number(theme.tweetImagePrewiewStyles.xxs.width) / 2 +
                'px'};
                height: ${Number(theme.tweetImagePrewiewStyles.xxs.width) /
                    3.5 +
                'px'};
            }
        `
    }}
`
