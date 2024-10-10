import styled, { css } from 'styled-components'

import { AvatarIcon, HeaderSubtitle, HeaderTitle } from '../styled'

import mixins from '@styles/mixins'

export const SkeletonIcon = styled(AvatarIcon)`
    ${({ theme }) => {
        return css`
            display: none;

            @media (${theme.media.xxs}) {
                display: flex;
                ${mixins.loadingAnimation};
            }
        `
    }}
`
export const SkeletonHeaderTitle = styled(HeaderTitle)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation};

            width: ${theme.skeletonStyles.titleWidth + 'px'};
            height: ${theme.skeletonStyles.titleHeight + 'px'};
            margin-bottom: ${theme.spaces.sm + 'px'};
        `
    }}
`
export const SkeletonHeaderSubtitle = styled(HeaderSubtitle)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation};

            width: ${theme.skeletonStyles.subtitleWidth + 'px'};
            height: ${theme.skeletonStyles.subtitleHeight + 'px'};
            margin: ${theme.spaces.sm + 'px ' + '0'};

            @media (${theme.media.xxs}) {
                margin: ${theme.spaces.xxs + 'px ' + '0'};
            }
        `
    }}
`
