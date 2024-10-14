import styled, { css } from 'styled-components'

import { ModalButtonProps } from './types'

import { Input } from '@components/Input'
import { Button, LinkStyle, mixins, ProfileIcon } from '@styles'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            padding: ${theme.spaces.xl + 'px'};

            @media (${theme.media.xs}) {
                padding: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.xxs}) {
                padding: ${theme.spaces.md + 'px'};
            }
        `
    }}
`

export const InfoBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowStart}

            position: relative;
            width: ${theme.fontSizes + '%'};
        `
    }}
`
export const Title = styled.h2`
    ${({ theme }) => {
        return css`
            margin-bottom: ${theme.spaces.lg + 'px'};
        `
    }}
`

export const Text = styled.p`
    ${({ theme }) => {
        return css`
            margin-right: ${theme.spaces.lg + 'px'};
            width: ${theme.editModalStyles.textWidth + 'px'};
        `
    }}
`

export const ModalInput = styled(Input)`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.md + 'px'} ${theme.spaces.sm + 'px'};
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.md}) {
                padding: ${theme.spaces.sm + 'px'};
            }
        `
    }}
`

export const ModalButton = styled(Button)<ModalButtonProps>`
    ${({ theme, $isDisabled }) => {
        return css`
            margin-bottom: 0;
            padding: ${theme.spaces.md + 'px' + ' 0px'};

            background-color: ${$isDisabled && theme.palette.gray};
        `
    }}
`

export const Image = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            height: ${theme.editModalStyles.lg.iconSize + 'px'};
            width: ${theme.editModalStyles.lg.iconSize + 'px'};

            @media (${theme.media.xs}) {
                height: ${theme.editModalStyles.md.iconSize + 'px'};
                width: ${theme.editModalStyles.md.iconSize + 'px'};
            }

            @media (${theme.media.xxs}) {
                height: ${theme.editModalStyles.sm.iconSize + 'px'};
                width: ${theme.editModalStyles.sm.iconSize + 'px'};
            }
        `
    }}
`

export const ForgotPassword = styled.p`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowEnd}

            ${LinkStyle}

            width: ${theme.fullSize + '%'};
            margin: ${theme.spaces.md + 'px' + ' 0px'};
        `
    }}
`
