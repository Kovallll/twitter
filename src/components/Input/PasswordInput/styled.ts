import styled, { css } from 'styled-components'

export const EyeIconWrap = styled.div`
    ${({ theme }) => {
        return css`
            svg {
                width: ${theme.passwordInputStyles.lg.iconSize + 'px'};
                height: ${theme.passwordInputStyles.lg.iconSize + 'px'};

                @media (${theme.media.sm}) {
                    width: ${theme.passwordInputStyles.md.iconSize + 'px'};
                    height: ${theme.passwordInputStyles.md.iconSize + 'px'};
                }

                @media (${theme.media.xs}) {
                    width: ${theme.passwordInputStyles.sm.iconSize + 'px'};
                    height: ${theme.passwordInputStyles.sm.iconSize + 'px'};
                }
            }
        `
    }}
`

export const EyeBlock = styled.div`
    ${({ theme }) => {
        return css`
            position: absolute;
            cursor: pointer;
            right: ${theme.passwordInputStyles.right + 'px'};

            top: ${theme.passwordInputStyles.lg.top + '%'};

            @media (${theme.media.sm}) {
                top: ${theme.passwordInputStyles.md.top + '%'};
            }

            @media (${theme.media.xs}) {
                top: ${theme.passwordInputStyles.sm.top + '%'};
            }
        `
    }}
`

export const Container = styled.div`
    position: relative;
`
