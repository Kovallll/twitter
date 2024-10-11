import { InputModule, LettersCount, Wrap } from './styled'
import { InputProps } from './types'

import { ErrorText } from '@styles'

export const Input = (props: InputProps) => {
    const { value, error, onChangeInput, maxLength, ...otherProps } = props

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e.target.value)
    }

    const letterCountText = `${value?.length ?? 0}/${maxLength}`
    return (
        <>
            {error !== undefined && <ErrorText role="alert">{error}</ErrorText>}
            <Wrap>
                <InputModule
                    {...otherProps}
                    value={value}
                    maxLength={maxLength}
                    onChange={handleInputChange}
                />
                {maxLength && <LettersCount>{letterCountText}</LettersCount>}
            </Wrap>
        </>
    )
}
