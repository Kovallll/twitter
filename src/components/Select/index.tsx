import { memo } from 'react'

import { Option, Placeholder, SelectModule, Wrap } from './styled'

import { ErrorText } from '@styles/global'
import { DateLabel, SelectProps } from '@types'

const Select = (props: SelectProps) => {
    const { data, type, error, register, onChangeDate, value } = props

    const placeholder = type[0].toUpperCase() + type.slice(1).toLowerCase()
    let selectValue = value

    if (value === '') {
        selectValue = placeholder
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        onChangeDate(value, type)
    }
    const label = ('date.' + type) as DateLabel
    const validRegister =
        !!register && !!type ? register(label, { onChange: handleChange }) : []
    return (
        <Wrap>
            <ErrorText>{error}</ErrorText>
            <SelectModule {...validRegister} value={selectValue}>
                <Placeholder disabled selected hidden>
                    {placeholder}
                </Placeholder>
                {data.map((item, index) => (
                    <Option key={index} value={item}>
                        {item}
                    </Option>
                ))}
            </SelectModule>
        </Wrap>
    )
}

export default memo(Select)
