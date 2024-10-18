import { memo } from 'react'

import { Option, Placeholder, SelectModule, Wrap } from './styled'

import { useAppDispatch, useAppSelector } from '@hooks'
import { dateDayError, defaultValueDay } from '@pages/SingUpCredential/config'
import { updateNotifyText, updateUserDate, userSelector } from '@store'
import { ErrorText } from '@styles'
import { DateType, SelectProps } from '@types'
import { getIsValidDate } from '@utils'

const Select = (props: SelectProps) => {
    const { data, type, error, onChangeDate, value } = props

    const dispatch = useAppDispatch()
    const { date } = useAppSelector(userSelector)

    const handleUpdateDate = (value: string, type: DateType) => {
        let resultDate = date
        if (type === 'day') {
            resultDate = { ...date, day: value }
        }
        if (type === 'month') {
            resultDate = { ...date, month: value }
        }
        if (type === 'year') {
            resultDate = { ...date, year: value }
        }

        const isValidDate = getIsValidDate(resultDate)
        if (isValidDate) {
            dispatch(updateUserDate(resultDate))
            dispatch(updateNotifyText(''))
        } else {
            dispatch(updateNotifyText(dateDayError))
            dispatch(updateUserDate({ ...resultDate, day: defaultValueDay }))
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        handleUpdateDate(value, type)
        onChangeDate(value)
    }

    const placeholder = type[0].toUpperCase() + type.slice(1).toLowerCase()
    return (
        <Wrap>
            <ErrorText>{error}</ErrorText>
            <SelectModule value={value} onChange={handleChange} data-cy={type}>
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
