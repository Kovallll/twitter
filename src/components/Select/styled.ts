import styled, { css } from 'styled-components'

import { mixins } from '@styles'

export const Wrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.selectStyles.halfWidth + '%'};
            margin-right: ${theme.selectStyles.lg.marginRight + 'px'};

            &:last-child {
                margin-right: 0;
            }

            @media (${theme.media.md}) {
                margin-right: ${theme.selectStyles.md.marginRight + 'px'};
            }

            @media (${theme.media.xs}) {
                margin-right: ${theme.selectStyles.sm.marginRight + 'px'};
            }
        `
    }}
`

export const SelectModule = styled.select`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            width: ${theme.fullSize + '%'};
            padding: ${theme.selectStyles.lg.padding + 'px'};
            font-size: ${theme.fontSizes.lg + 'px'};
            border-radius: ${theme.selectStyles.borderRadius + 'px'};
            border: ${theme.selectStyles.border + theme.palette.gray};

            @media (${theme.media.md}) {
                padding: ${theme.selectStyles.md.padding + 'px'};
                font-size: ${theme.fontSizes.md + 'px'};
            }

            @media (${theme.media.xs}) {
                padding: ${theme.selectStyles.sm.padding + 'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }
        `
    }}
`

export const Placeholder = styled.option`
    ${({ theme }) => {
        return css`
            color: ${theme.palette.gray};
        `
    }}
`

export const Option = styled.option``
