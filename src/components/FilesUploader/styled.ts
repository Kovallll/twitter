import styled, { css } from 'styled-components'

import mixins from '@styles/mixins'

export const Container = styled.div`
    ${({}) => {
        return css`
            ${mixins.flexColumnCenter}
            width: 90%;
        `
    }}
`

export const TweetText = styled.textarea`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.md + 'px'};
            width: 90%;
            border: 0;
            resize: none;

            &::placeholder {
                font-weight: 700;
            }

            &:focus {
                outline: none;
            }
        `
    }}
`

export const TweetImages = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const UploaderBlock = styled.div`
    ${mixins.flexColumnStart}
    width: 90%;
`

export const Label = styled.label`
    cursor: pointer;
`

export const Input = styled.input`
    display: none;
`

export const Image = styled.img``
