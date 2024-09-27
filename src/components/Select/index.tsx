import { Option, Placeholder, SelectModule } from './styled'

import { SelectProps } from '@types'

export const Select = ({ data, type, onChangeDate, value }: SelectProps) => {
    const placeholder = type[0].toUpperCase() + type.slice(1).toLowerCase()
    let selectValue = value
    const isMonth = type === 'month'
    if (value === '') {
        selectValue = placeholder
    }
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        onChangeDate(value, type)
    }
    return (
        <SelectModule
            $isMonth={isMonth}
            value={selectValue}
            onChange={handleChange}
        >
            <Placeholder disabled selected hidden>
                {placeholder}
            </Placeholder>
            {data.map((item) => (
                <Option value={item}>{item}</Option>
            ))}
        </SelectModule>
    )
}
