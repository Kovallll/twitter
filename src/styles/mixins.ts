import { css } from 'styled-components'

export default {
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
}
