import styled, { css } from 'styled-components'

import { UserAvatar, UserName, UserSocial } from '@components/UserCard/styled'
import { mixins } from '@styles'

export const SkeletonAvatar = styled(UserAvatar)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation};

            min-width: ${theme.profileIconStyles.lg.size + 'px'};

            @media (${theme.media.lg}) {
                min-width: ${theme.profileIconStyles.md.size + 'px'};
            }
        `
    }}
`

export const SkeletonName = styled(UserName)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.titleWidth + 'px'};
            height: ${theme.skeletonStyles.titleHeight + 'px'};
            margin-bottom: ${theme.spaces.xs + 'px'};
        `
    }}
`

export const SkeletonSocial = styled(UserSocial)`
    ${({ theme }) => {
        return css`
            ${mixins.loadingAnimation}

            width: ${theme.skeletonStyles.subtitleWidth + 'px'};
            height: ${theme.skeletonStyles.subtitleHeight + 'px'};
        `
    }}
`
