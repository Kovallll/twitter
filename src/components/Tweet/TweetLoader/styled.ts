import styled from 'styled-components'

export const SkeletonImage = styled.div`
    width: 900px;
    height: 400px;
    animation: skeleton-loading 2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 80%);
        }
        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
`

export const SkeletonIcon = styled.div`
    width: 64px;
    height: 64px;
    margin-right: 8px;
    animation: skeleton-loading 2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 80%);
        }
        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
`

export const SkeletonTitle = styled.div`
    width: 160px;
    height: 24px;
    margin-right: 8px;
    animation: skeleton-loading 2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 80%);
        }
        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
`

export const SkeletonSubtitle = styled.div`
    width: 80px;
    height: 24px;
    margin-right: 8px;
    animation: skeleton-loading 2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 80%);
        }
        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
`

export const SkeletonText = styled.div`
    width: 500px;
    height: 24px;
    animation: skeleton-loading 2s linear infinite alternate;

    @keyframes skeleton-loading {
        0% {
            background-color: hsl(200, 20%, 80%);
        }
        100% {
            background-color: hsl(200, 20%, 95%);
        }
    }
`
