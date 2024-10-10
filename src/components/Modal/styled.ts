import styled, { css } from 'styled-components'

import { mixins } from '@styles'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            height: ${theme.fullSize + '%'};
            position: fixed;
            top: ${theme.modalStyles.top + '%'};
            left: ${theme.modalStyles.half + '%'};
            transform: translate(
                -${theme.modalStyles.half + '%'},
                -${theme.modalStyles.half + '%'}
            );
            z-index: ${theme.modalStyles.zIndex};
        `
    }}
`

export const Window = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.modalStyles.lg.width + 'px'};
            border: ${theme.buttonStyles.border};
            position: relative;
            color: ${theme.palette.common.black};
            background: ${theme.palette.common.white};
            border-radius: ${theme.modalStyles.borderRadius + 'px'};

            @media (${theme.media.sm}) {
                width: ${theme.modalStyles.md.width + 'px'};
            }

            @media (${theme.media.xs}) {
                width: ${theme.modalStyles.sm.width + 'px'};
            }
        `
    }}
`

export const CloseButton = styled.button`
    ${({ theme }) => {
        return css`
            position: absolute;
            background: transparent;
            border: ${theme.noneBorder};
            cursor: pointer;
            z-index: 10;
            top: ${theme.modalStyles.lg.topCloseButton + 'px'};
            right: ${theme.modalStyles.lg.rightCloseButton + 'px'};

            img {
                width: ${theme.modalStyles.lg.sizeCloseButton + 'px'};
                height: ${theme.modalStyles.lg.sizeCloseButton + 'px'};
            }

            @media (${theme.media.xl}) {
                top: ${theme.modalStyles.md.topCloseButton + 'px'};
                right: ${theme.modalStyles.md.rightCloseButton + 'px'};

                img {
                    width: ${theme.modalStyles.md.sizeCloseButton + 'px'};
                    height: ${theme.modalStyles.md.sizeCloseButton + 'px'};
                }
            }

            @media (${theme.media.xs}) {
                top: ${theme.modalStyles.sm.topCloseButton + 'px'};
                right: ${theme.modalStyles.sm.rightCloseButton + 'px'};

                img {
                    width: ${theme.modalStyles.sm.sizeCloseButton + 'px'};
                    height: ${theme.modalStyles.sm.sizeCloseButton + 'px'};
                }
            }
        `
    }}
`

export const Image = styled.img``
