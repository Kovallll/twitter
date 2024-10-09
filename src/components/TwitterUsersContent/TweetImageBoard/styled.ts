import { css, styled } from 'styled-components'

export const ImagesSection = styled.section`
    ${({ theme }) => {
        return css`
            display: grid;
            grid-template-rows: repeat(${theme.usersStyles.rows}, 1fr);
            grid-template-columns: repeat(${theme.usersStyles.lg.cols}, 1fr);
            grid-gap: ${theme.spaces.xs + 'px'};
            border-radius: ${theme.spaces.lg + 'px'};
            height: ${theme.usersStyles.height + 'px'};
            overflow: hidden;
            width: ${theme.fullSize + '%'};

            @media (${theme.media.lg}) {
                grid-template-columns: repeat(
                    ${theme.usersStyles.md.cols},
                    1fr
                );
            }
        `
    }}
`

export const ImageWrap = styled.div`
    position: relative;
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            width: ${theme.fullSize + '%'};
            height: ${theme.fullSize + '%'};
        `
    }}
`
