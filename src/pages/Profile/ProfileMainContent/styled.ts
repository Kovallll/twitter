import styled, { css } from 'styled-components'

import { Button, MainPageContent, mixins, ProfileIcon, Spinner } from '@styles'

export const ProfileContent = styled(MainPageContent)``

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const InfoBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
            position: relative;
            padding-bottom: ${theme.spaces.xxxl + 'px'};
            padding-left: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const ProfileTopInfo = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const ProfileBottomInfo = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            width: ${theme.fullSize + '%'};
            padding-right: ${theme.spaces.sm + 'px'};
        `
    }}
`

export const ImageWrap = styled.div``

export const ProfileImage = styled(ProfileIcon)`
    ${({ theme }) => {
        return css`
            position: absolute;
            top: -${theme.profileMainContentStyles.lg.imageTop + 'px'};
            height: ${theme.profileMainContentStyles.lg.imageSize + 'px'};
            width: ${theme.profileMainContentStyles.lg.imageSize + 'px'};

            @media (${theme.media.xs}) {
                top: -${theme.profileMainContentStyles.md.imageTop + 'px'};
                height: ${theme.profileMainContentStyles.md.imageSize + 'px'};
                width: ${theme.profileMainContentStyles.md.imageSize + 'px'};
            }
        `
    }}
`

export const ProfileName = styled.p`
    ${({ theme }) => {
        return css`
            margin-bottom: ${theme.spaces.xs + 'px'};
            font-size: ${theme.fontSizes.lg + 'px'};
            font-weight: ${theme.boldFont};

            @media (${theme.media.xs}) {
                margin-bottom: ${theme.spaces.xxs + 'px'};
                font-size: ${theme.fontSizes.md + 'px'};
            }
        `
    }}
`

export const ProfileSocial = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};
            margin-bottom: ${theme.spaces.lg + 'px'};

            @media (${theme.media.xs}) {
                margin-bottom: ${theme.spaces.md + 'px'};
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const ProfileDescription = styled.p`
    ${({ theme }) => {
        return css`
            word-wrap: break-word;
            width: ${theme.fullSize + '%'};
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-bottom: ${theme.spaces.xxxl + 'px'};

            @media (${theme.media.xs}) {
                margin-bottom: ${theme.spaces.lg + 'px'};
                font-size: ${theme.fontSizes.xs + 'px'};
            }
        `
    }}
`

export const ProfileFollowBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.profileMainContentStyles.lg.followWidth + 'px'};

            @media (${theme.media.xs}) {
                width: ${theme.profileMainContentStyles.md.followWidth + 'px'};
            }
        `
    }}
`

export const Follow = styled.p`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            font-size: ${theme.fontSizes.xs + 'px'};

            @media (${theme.media.xs}) {
                font-size: ${theme.fontSizes.xxs + 'px'};
            }
        `
    }}
`

export const FollowCount = styled.p`
    ${({ theme }) => {
        return css`
            font-weight: ${theme.boldFont};
            margin-right: ${theme.spaces.xs + 'px'};
        `
    }}
`

export const EditBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}

            align-items: start;
            width: ${theme.profileMainContentStyles.editWidth + 'px'};
            margin-right: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const EditButton = styled(Button)`
    ${({ theme }) => {
        return css`
            margin-bottom: 0;
            margin-top: ${theme.spaces.md + 'px'};
            padding: ${theme.spaces.md + 'px' + ' 0px'};
            background-color: ${theme.palette.bgColor};
            color: ${theme.palette.text};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
            }
        `
    }}
`

export const Tweets = styled.section`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const TweetsHeader = styled.h3`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.xl +
            'px ' +
            Number(theme.spaces.xxxl) * 2 +
            'px'};
            border-bottom: ${theme.profileMainContentStyles.border +
            theme.palette.lineBoardColor};
            width: ${theme.profileMainContentStyles.lg.twitterHeaderWidth +
            'px'};

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxxxl + 'px'};
            }

            @media (${theme.media.xs}) {
                padding: ${theme.spaces.lg + 'px ' + theme.spaces.xxxl + 'px'};
                width: ${theme.profileMainContentStyles.md.twitterHeaderWidth +
                'px'};
            }
        `
    }}
`

export const TweetSpinner = styled(Spinner)`
    align-items: start;
`
