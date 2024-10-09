import styled, { css } from 'styled-components'

import { NotifyModuleProps } from './types'

import mixins from '@styles/mixins'

export const NotifyModule = styled.p<NotifyModuleProps>`
    ${({ theme, $isSuccess }) => {
        return css`
            ${mixins.flexRowCenter}

            position: fixed;
            right: ${theme.notifyStyles.lg.right + 'px'};
            top: ${theme.notifyStyles.lg.top + 'px'};
            padding: ${theme.notifyStyles.lg.paddingTB +
            'px ' +
            theme.notifyStyles.lg.paddingLR +
            'px'};
            z-index: ${theme.notifyStyles.zIndex};
            background: ${$isSuccess
                ? theme.palette.successColor
                : theme.palette.errorColor};
            font-size: ${theme.fontSizes.lg + 'px'};
            border-radius: ${theme.notifyStyles.borderRadius + 'px'};
            color: ${theme.palette.common.white};

            @media (${theme.media.md}) {
                right: ${theme.notifyStyles.md.right + 'px'};
                top: ${theme.notifyStyles.md.top + 'px'};
                padding: ${theme.notifyStyles.md.paddingTB +
                'px ' +
                theme.notifyStyles.md.paddingLR +
                'px'};
                font-size: ${theme.fontSizes.md + 'px'};
            }

            @media (${theme.media.xs}) {
                right: ${theme.notifyStyles.sm.right + 'px'};
                top: ${theme.notifyStyles.sm.top + 'px'};
                padding: ${theme.notifyStyles.sm.paddingTB +
                'px ' +
                theme.notifyStyles.sm.paddingLR +
                'px'};
                font-size: ${theme.fontSizes.sm + 'px'};
            }
        `
    }}
`
