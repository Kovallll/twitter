import { css } from 'styled-components'

import { ColorTheme } from '@types'

export const mixins = {
    flexRowSE: () => css`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    `,
    flexRowEnd: () => css`
        display: flex;
        justify-content: end;
        align-items: center;
    `,
    flexRowStart: () => css`
        display: flex;
        justify-content: start;
        align-items: center;
    `,
    flexRowSB: () => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
    `,
    flexRowCenter: () => css`
        display: flex;
        justify-content: center;
        align-items: center;
    `,
    flexColumnCenter: () => css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    `,
    flexColumnSB: () => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    `,
    flexColumnStart: () => css`
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
    `,
    flexColumnEnd: () => css`
        display: flex;
        justify-content: end;
        align-items: center;
        flex-direction: column;
    `,
    linkStyles: (theme: ColorTheme) => css`
        cursor: pointer;
        color: ${theme.palette.primary};
        text-decoration: none;
    `,

    loadingAnimation: () => css`
        animation: skeleton-loading 1.2s linear infinite alternate;

        @keyframes skeleton-loading {
            0% {
                background-color: hsl(200, 20%, 80%);
            }
            100% {
                background-color: hsl(200, 20%, 95%);
            }
        }
    `,
}
