import styled, { css } from 'styled-components'

import { Input } from '@components/Input'
import { Button, LinkStyle } from '@styles/global'
import mixins from '@styles/mixins'

export const Container = styled.div`
    ${mixins.flexColumnCenter}
    padding: 20px;
`

export const InfoBlock = styled.div`
    ${mixins.flexRowStart}
    width: 100%;
`
export const Title = styled.h2`
    margin-bottom: 16px;
`

export const Text = styled.p`
    margin-right: 16px;
    width: 120px;
`

export const ModalInput = styled(Input)`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.sm + 'px'} ${theme.spaces.sm + 'px'};
            font-size: ${theme.fontSizes.xs + 'px'};
            @media (${theme.media.md}) {
                padding: ${theme.spaces.xs + 'px'} ${theme.spaces.xs + 'px'};
            }
        `
    }}
`

export const ModalButton = styled(Button)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            padding: ${theme.spaces.md + 'px' + ' 0px'};
        `
    }}
`

export const Image = styled.img`
    object-fit: cover;
    height: 120px;
    width: 120px;
    border-radius: 50%;
`

export const ForgotPassword = styled.p`
    ${mixins.flexRowEnd}
    width: 100%;
    ${LinkStyle}
    margin: 12px 0;
`
