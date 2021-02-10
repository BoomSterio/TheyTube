import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'

const ChannelRow = ({image, channel, subs, totalVideos, description, verified}) => {
    return (
        <div className={'channelRow'}>
            <Avatar className={channelRow__avatar} src={image} alt={channel}/>
            <div className={channelRow__text}>
                <h4>{channel}</h4>
                <p>{}</p>
            </div>
        </div>
    )
}

export default ChannelRow