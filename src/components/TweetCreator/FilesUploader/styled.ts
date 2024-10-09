import styled, { css } from 'styled-components'

import { ModalProps } from './types'

import mixins from '@styles/mixins'

export const Container = styled.div<ModalProps>`
    ${({ theme, $isModal }) => {
        return css`
            ${mixins.flexColumnCenter}

            width:  ${theme.tweetCreatorStyles.width + '%'};
            margin-top: ${$isModal ? theme.spaces.xl + 'px' : 0};
            margin-bottom: ${theme.spaces.xl + 'px'};
            position: relative;

            @media (${theme.media.md}) {
                margin-bottom: ${theme.spaces.lg + 'px'};
            }

            @media (${theme.media.sm}) {
                margin-bottom: ${theme.spaces.md + 'px'};
            }
        `
    }}
`

export const TweetText = styled.textarea`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.md + 'px'};
            width: ${theme.tweetCreatorStyles.width + '%'};
            border: 0;
            resize: none;

            &::placeholder {
                font-weight: ${theme.boldFont};
            }

            &:focus {
                outline: none;
            }
        `
    }}
`

export const TweetImages = styled.div<ModalProps>`
    ${({ theme, $isModal }) => {
        return css`
            display: flex;
            max-width: ${$isModal
                ? theme.tweetImagePrewiewStyles.xl.modalWidth + 'px'
                : theme.tweetImagePrewiewStyles.xl.width + 'px'};
            overflow-x: auto;

            @media (${theme.media.lg}) {
                max-width: ${$isModal
                    ? theme.tweetImagePrewiewStyles.lg.modalWidth + 'px'
                    : theme.tweetImagePrewiewStyles.lg.width + 'px'};
            }

            @media (${theme.media.md}) {
                max-width: ${$isModal
                    ? theme.tweetImagePrewiewStyles.md.modalWidth + 'px'
                    : theme.tweetImagePrewiewStyles.md.width + 'px'};
            }

            @media (${theme.media.sm}) {
                max-width: ${$isModal
                    ? theme.tweetImagePrewiewStyles.sm.modalWidth + 'px'
                    : theme.tweetImagePrewiewStyles.sm.width + 'px'};
            }

            @media (${theme.media.xs}) {
                max-width: ${$isModal
                    ? theme.tweetImagePrewiewStyles.xs.modalWidth + 'px'
                    : theme.tweetImagePrewiewStyles.xs.width + 'px'};
            }

            @media (${theme.media.xxs}) {
                max-width: ${$isModal
                    ? theme.tweetImagePrewiewStyles.xxs.modalWidth + 'px'
                    : theme.tweetImagePrewiewStyles.xxs.width + 'px'};
            }
        `
    }}
`

export const UploaderBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width:  ${theme.tweetCreatorStyles.width + '%'};
        `
    }}
`

export const Label = styled.label`
    cursor: pointer;
`

export const Input = styled.input`
    display: none;
`

export const Image = styled.img``

export const LettersCount = styled.p<ModalProps>`
    ${({ theme, $isModal }) => {
        return css`
            position: absolute;
            top: -${$isModal ? theme.spaces.xl + 'px' : theme.spaces.md + 'px'};
            right: ${$isModal ? 'none' : 0};
            left: ${$isModal ? 0 : 'none'};
            color: ${theme.palette.lightBlue};
            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                top: -${$isModal ? theme.spaces.lg + 'px' : theme.spaces.sm + 'px'};
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`
