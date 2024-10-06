import { v4 as uuidv4 } from 'uuid'

import {
    Container,
    Image,
    Input,
    Label,
    TweetImages,
    TweetText,
    UploaderBlock,
} from './styled'
import { FileUploaderProps } from './types'

import { TweetImage } from '@components/TweetImage'
import { images, magicNumbers, maxUploadSizeImage } from '@constants'

const FileUploader = ({
    tweetText,
    tweetImages,
    handleChangeTweetText,
    handleDeleteTweetImage,
    handleUpdateImage,
    isTweet,
    children,
}: FileUploaderProps) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target

        if (files) {
            for (let i = 0; i < files?.length; i++) {
                const id = uuidv4()
                const file = files[i]

                const filereader = new FileReader()
                const blob = file.slice(0, 4)
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

    return (
        <Container>
            {isTweet && (
                <>
                    <TweetText
                        rows={4}
                        placeholder="What’s happening"
                        value={tweetText}
                        onChange={handleChangeText}
                    />
                    <TweetImages>
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
                        accept="image/png, image/jpeg"
                        multiple
                        onChange={handleFileChange}
                    />
                </Label>
            ) : (
                <UploaderBlock>
                    <Label>
                        <Image src={images.uploadImage} />

                        <Input
                            type="file"
                            accept="image/png, image/jpeg"
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
