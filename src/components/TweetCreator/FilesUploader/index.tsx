import { v4 as uuidv4 } from 'uuid'

import {
    acceptImages,
    placeholder,
    slashText,
    uploadIconAtlText,
} from './config'
import {
    Container,
    Image,
    Input,
    Label,
    LettersCount,
    TweetImages,
    TweetText,
    UploaderBlock,
} from './styled'
import { FileUploaderProps } from './types'

import { TweetImage } from '@components/Tweet/TweetImage'
import {
    images,
    magicNumbers,
    maxLengthTweetText,
    maxUploadSizeImage,
    tweetTextRows,
} from '@constants'

const FileUploader = (props: FileUploaderProps) => {
    const {
        tweetText,
        tweetImages,
        handleChangeTweetText,
        handleDeleteTweetImage,
        handleUpdateImage,
        isTweet,
        isModal = false,
        children,
    } = props
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target

        if (files) {
            for (let i = 0; i < files?.length; i++) {
                const id = uuidv4()
                const file = files[i]

                const lastBit = 4
                const filereader = new FileReader()
                const blob = file.slice(0, lastBit)
                filereader.readAsArrayBuffer(blob)
                filereader.onloadend = function (event) {
                    const str = event.target?.result as ArrayBuffer
                    const uint = new Uint8Array(str)
                    const bytes: string[] = []

                    uint.forEach((byte) => {
                        bytes.push(byte.toString(16))
                    })
                    const hex = bytes.join('').toUpperCase()
                    if (
                        magicNumbers.includes(hex) &&
                        file.size <= maxUploadSizeImage
                    ) {
                        const reader = new FileReader()
                        reader.readAsDataURL(file)
                        reader.onload = function (event) {
                            handleUpdateImage(event, file, id)
                        }
                    }
                }
            }
        }
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (handleChangeTweetText) {
            const { value } = e.target
            handleChangeTweetText(value)!
        }
    }
    const letterCountText = tweetText?.length + slashText + maxLengthTweetText
    return (
        <Container $isModal={isModal}>
            {isTweet && (
                <>
                    <TweetText
                        rows={tweetTextRows}
                        placeholder={placeholder}
                        value={tweetText}
                        maxLength={maxLengthTweetText}
                        onChange={handleChangeText}
                    />
                    <LettersCount $isModal={isModal}>
                        {letterCountText}
                    </LettersCount>
                    <TweetImages $isModal={isModal}>
                        {tweetImages?.map(({ id, url }) => (
                            <TweetImage
                                id={id}
                                url={url}
                                handleDeleteImage={handleDeleteTweetImage!}
                                key={id}
                            />
                        ))}
                    </TweetImages>
                </>
            )}
            {children ? (
                <Label>
                    {children}
                    <Input
                        type="file"
                        accept={acceptImages}
                        multiple
                        onChange={handleFileChange}
                    />
                </Label>
            ) : (
                <UploaderBlock>
                    <Label>
                        <Image
                            src={images.uploadImage}
                            alt={uploadIconAtlText}
                        />
                        <Input
                            type="file"
                            accept={acceptImages}
                            multiple
                            onChange={handleFileChange}
                        />
                    </Label>
                </UploaderBlock>
            )}
        </Container>
    )
}

export default FileUploader
