import {CheckCircle as VerifiedIcon} from '@material-ui/icons'
import React from 'react'
import './ChannelTitle.css'

const ChannelTitle = ({title, verified}) => {
    return (
        <div className={'channelTitle'}>
            <p className={'channelTitle__title'}>{title}</p>
            <div>{verified && <VerifiedIcon className={'channelTitle__verified'}/>}</div>
        </div>
    )
}

export default ChannelTitle