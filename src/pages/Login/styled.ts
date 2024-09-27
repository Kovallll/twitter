import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            margin:  ${theme.loginStyles.margin + 'px'};
            margin-top: ${theme.loginStyles.marginTop + 'px'};
        `
    }}
`

export const Wrap = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.loginStyles.lg.width + 'px'};

            @media (${theme.media.xl}) {
                width: ${theme.loginStyles.md.width + 'px'};
            }
            @media (${theme.media.xs}) {
                width: ${theme.loginStyles.sm.width + 'px'};
            }
        `
    }}
`

export const Title = styled.h1`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xxl + 'px'};
            margin: ${theme.spaces.xxl + 'px' + ' 0px'};

            @media (${theme.media.xl}) {
                font-size: ${theme.fontSizes.xl + 'px'};
                margin: ${theme.spaces.xl + 'px' + ' 0px'};
            }
            @media (${theme.media.lg}) {
                margin: ${theme.spaces.lg + 'px' + ' 0px'};
            }
            @media (${theme.media.sm}) {
                font-size: ${theme.fontSizes.lg + 'px'};
            }
        `
    }}
`

export const SignUpLink = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowEnd}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const ModalBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.modalStyles.wrapWidth + '%'};
        `
    }}
`
