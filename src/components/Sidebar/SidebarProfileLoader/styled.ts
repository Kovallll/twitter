import styled, { css } from 'styled-components'

import { NameText, SidebarImage, SocialText } from '../styled'

import mixins from '@styles/mixins'

export const SkeletonImage = styled(SidebarImage)`
    ${mixins.loadingAnimation}
`

export const SkeletonName = styled(NameText)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.titleWidth + 'px'};
            height: ${theme.skeletonStyles.titleHeight + 'px'};
            margin-bottom: ${theme.spaces.xs + 'px'};
        `
    }}
`

export const SkeletonSocial = styled(SocialText)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.subtitleWidth + 'px'};
            height: ${theme.skeletonStyles.subtitleHeight + 'px'};
        `
    }}
`
