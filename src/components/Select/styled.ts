import styled, { css } from 'styled-components'

import { SelectModuleProps } from './types'

import mixins from '@styles/mixins'

export const SelectModule = styled.select<SelectModuleProps>`
    ${({ theme, $isMonth }) => {
        return css`
            ${mixins.flexRowCenter}

            width: ${$isMonth
                ? theme.fullSize + '%'
                : theme.selectStyles.halfWidth + '%'};
            padding: ${theme.selectStyles.lg.padding + 'px'};
            font-size: ${theme.fontSizes.lg + 'px'};
            margin-right: ${theme.selectStyles.lg.marginRight + 'px'};
            border-radius: ${theme.selectStyles.borderRadius + 'px'};
            border: ${theme.selectStyles.border + theme.palette.gray};

            &:last-child {
                margin-right: 0;
            }

            @media (${theme.media.md}) {
                padding: ${theme.selectStyles.md.padding + 'px'};
                margin-right: ${theme.selectStyles.md.marginRight + 'px'};
                font-size: ${theme.fontSizes.md + 'px'};
            }
            @media (${theme.media.xs}) {
                padding: ${theme.selectStyles.sm.padding + 'px'};
                margin-right: ${theme.selectStyles.sm.marginRight + 'px'};
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
