import {CheckCircle as VerifiedIcon} from '@material-ui/icons'
import React from 'react'
import './ChannelTitle.css'

const ChannelTitle = ({title, verified}) => {
    return (
        <p className={'channelTitle'}>
            {title} {verified && <VerifiedIcon className={'channelTitle__verified'}/>}
        </p>
    )
}

export default ChannelTitle