export interface CloseImageProps {
    $isHover: boolean
}

export interface TweetImageProps {
    id: string
    url: string
    handleDeleteImage: (id: string) => void
}
