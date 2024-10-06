import { memo } from 'react'

import { NotifyModule } from './styled'
import { NotifyProps } from './types'

const Notify = ({ text }: NotifyProps) => {
    return <NotifyModule>{text}</NotifyModule>
}

export default memo(Notify)
