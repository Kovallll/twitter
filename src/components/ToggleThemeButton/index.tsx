import { useState } from 'react'

import { Container } from './styled'

export const ToggleButton = ({ ...props }) => {
    const [isToggle, setIsToggle] = useState(false)

    const handleToggleTheme = () => {
        setIsToggle((prev) => !prev)
    }

    return (
        <Container
            {...props}
            $isToggle={isToggle}
            onClick={handleToggleTheme}
        />
    )
}
