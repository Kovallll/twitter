import styled, { css } from 'styled-components'

import { ContainerProps } from './types'

export const Container = styled.div<ContainerProps>`
    ${({ theme, $isToggle }) => {
        return css`
            position: relative;
            right: ${theme.spaces.md + 'px'};
            width: ${theme.toggleThemeStyles.lg.buttonWidth + 'px'};
            height: ${theme.toggleThemeStyles.lg.buttonHeight + 'px'};
            margin: 0;
            border-radius: ${theme.toggleThemeStyles.borderRadius + 'px'};
            outline: none;
            cursor: pointer;
            border: ${theme.toggleThemeStyles.border + theme.palette.gray};

            &::after {
                content: '';
                display: inline-block;
                position: absolute;
                top: ${theme.toggleThemeStyles.lg.top + 'px'};
                border-radius: ${theme.circleRadius + '%'};
                width: ${theme.toggleThemeStyles.lg.circleWidth + 'px'};
                height: ${theme.toggleThemeStyles.lg.circleHeight + 'px'};
                transition: ${theme.toggleThemeStyles.transition};
                right: ${theme.spaces.xxs + 'px'};
                border: ${theme.toggleThemeStyles.border +
                theme.palette.gray};
                transform: translateX(
                    ${$isToggle
                        ? theme.toggleThemeStyles.lg.transform + 'px'
                        : '0'}
                );
            }

            @media (${theme.media.sm}) {
                width: ${theme.toggleThemeStyles.md.buttonWidth + 'px'};
                height: ${theme.toggleThemeStyles.md.buttonHeight + 'px'};

                &::after {
                    top: ${theme.toggleThemeStyles.md.top + 'px'};
                    width: ${theme.toggleThemeStyles.md.circleWidth + 'px'};
                    height: ${theme.toggleThemeStyles.md.circleHeight + 'px'};
                    transform: translateX(
                        ${$isToggle
                            ? theme.toggleThemeStyles.md.transform + 'px'
                            : '0'}
                    );
                }
            }

            @media (${theme.media.xs}) {
                width: ${theme.toggleThemeStyles.sm.buttonWidth + 'px'};
                height: ${theme.toggleThemeStyles.sm.buttonHeight + 'px'};

                &::after {
                    top: ${theme.toggleThemeStyles.sm.top + 'px'};
                    width: ${theme.toggleThemeStyles.sm.circleWidth + 'px'};
                    height: ${theme.toggleThemeStyles.sm.circleHeight + 'px'};
                    transform: translateX(
                        ${$isToggle
                            ? theme.toggleThemeStyles.sm.transform + 'px'
                            : '0px'}
                    );
                }
            }
        `
    }}
`
