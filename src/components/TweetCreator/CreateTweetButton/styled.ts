import styled, { css } from 'styled-components'

import { Button, Spinner } from '@styles'

export const ButtonWrap = styled.div`
    ${({ theme }) => {
        return css`
            width: ${theme.tweetCreatorStyles.buttonWidth + 'px'};
            position: absolute;
            bottom: ${theme.spaces.md + 'px'};
            right: ${theme.spaces.md + 'px'};
        `
    }}
`

export const TweetButton = styled(Button)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            padding: ${theme.spaces.md + 'px' + ' 0px'};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
            }
        `
    }}
`

export const CreatorSpinner = styled(Spinner)`
    ${({ theme }) => {
        return css`
            height: ${theme.tweetCreatorStyles.spinnerHeight + 'px'};
        `
    }}
`
