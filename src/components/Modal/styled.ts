import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            top: ${theme.modalStyles.lg.top + 'px'};
            right: calc(50% - ${Number(theme.modalStyles.lg.width) / 2 + 'px'});
            position: absolute;
            z-index: 10;

            @media (${theme.media.sm}) {
                top: ${theme.modalStyles.md.top + 'px'};
                right: calc(
                    50% - ${Number(theme.modalStyles.md.width) / 2 + 'px'}
                );
            }

            @media (${theme.media.xs}) {
                top: ${theme.modalStyles.sm.top + 'px'};
                right: calc(
                    50% - ${Number(theme.modalStyles.sm.width) / 2 + 'px'}
                );
            }
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
