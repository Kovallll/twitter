import { memo } from 'react'

import { NotifyModule } from './styled'
import { NotifyProps } from './types'

const Notify = ({ text, isSuccess = false }: NotifyProps) => {
    return <NotifyModule $isSuccess={isSuccess}>{text}</NotifyModule>
}

export default memo(Notify)
