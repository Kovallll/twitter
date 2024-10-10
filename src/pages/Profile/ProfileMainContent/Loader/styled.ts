import styled, { css } from 'styled-components'

import {
    Follow,
    ProfileDescription,
    ProfileImage,
    ProfileName,
    ProfileSocial,
} from '../styled'

import { mixins } from '@styles'

export const SkeletonIcon = styled(ProfileImage)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            margin-left: ${theme.spaces.sm + 'px'};
        `
    }}
`

export const SkeletonName = styled(ProfileName)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.textWidth + 'px'};
            height: ${theme.skeletonStyles.textHeight + 'px'};
            margin-bottom: ${theme.spaces.xs + 'px'};
        `
    }}
`

export const SkeletonSocial = styled(ProfileSocial)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.subtitleWidth + 'px'};
            height: ${theme.skeletonStyles.subtitleHeight + 'px'};
        `
    }}
`

export const SkeletonDescription = styled(ProfileDescription)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.titleWidth + 'px'};
            height: ${theme.skeletonStyles.titleHeight + 'px'};
            margin-bottom: ${theme.spaces.xs + 'px'};
        `
    }}
`

export const SkeletonFollow = styled(Follow)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.subtitleWidth + 'px'};
            height: ${theme.skeletonStyles.subtitleHeight + 'px'};
        `
    }}
`
