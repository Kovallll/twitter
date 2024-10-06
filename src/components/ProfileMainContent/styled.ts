import styled, { css } from 'styled-components'

import { Button } from '@styles/global'
import mixins from '@styles/mixins'

export const ProfileContent = styled.section`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnCenter}

            width: ${theme.fullSize + '%'};
            position: relative;
            border: 1px solid #d8d8d8;
            border-bottom: 0;
        `
    }}
`

export const ProfileHeader = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
        `
    }}
`

export const Image = styled.img`
    ${({ theme }) => {
        return css`
            width: ${theme.fullSize + '%'};
        `
    }}
`

export const ProfileInfo = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowSB}

            width: ${theme.fullSize + '%'};
            padding-bottom: ${theme.spaces.xxxl + 'px'};
        `
    }}
`

export const HeaderTextBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexColumnStart}

            padding-left: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const HeaderTitle = styled.p`
    font-weight: 700;
    white-space: nowrap;
`

export const HeaderSubtitle = styled.p`
    white-space: nowrap;
`

export const InfoText = styled.div`
    ${({ theme }) => {
        return css`
            padding-left: ${theme.spaces.xl + 'px'};
        `
    }}
`

export const InfoBlock = styled.div`
    position: relative;
`

export const ProfileImage = styled.img`
    ${({}) => {
        return css`
            position: absolute;
            top: -70px;
            object-fit: cover;
            height: 120px;
            width: 120px;
            border-radius: 50%;
        `
    }}
`

export const ProfileName = styled.p`
    ${({ theme }) => {
        return css`
            margin-top: 90px;
            margin-bottom: ${theme.spaces.xs + 'px'};
            font-size: ${theme.fontSizes.lg + 'px'};
            font-weight: 700;
        `
    }}
`

export const ProfileSocial = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.xs + 'px'};
            margin-bottom: ${theme.spaces.lg + 'px'};
        `
    }}
`

export const ProfileDescription = styled.p`
    ${({ theme }) => {
        return css`
            font-size: ${theme.fontSizes.sm + 'px'};
            margin-bottom: ${theme.spaces.xxxl + 'px'};
        `
    }}
`

export const ProfileFollowBlock = styled.div`
    ${mixins.flexRowSB}
    width: 200px;
`

export const Following = styled.p``

export const Followers = styled.p``

export const EditBlock = styled.div`
    ${({ theme }) => {
        return css`
            ${mixins.flexRowCenter}
            align-items: start;

            height: 206px;
            width: 140px;
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

            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
            }
        `
    }}
`

export const Tweets = styled.section`
    width: 100%;
`

export const TweetsHeader = styled.h3`
    ${({ theme }) => {
        return css`
            padding: ${theme.spaces.xl +
            'px ' +
            Number(theme.spaces.xxxl) * 2 +
            'px'};

            border-bottom: 1px solid #d8d8d8;
            width: 300px;
            @media (${theme.media.lg}) {
                padding: ${theme.spaces.sm + 'px' + ' 0px'};
            }
        `
    }}
`
