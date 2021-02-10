import React from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import {CheckCircle as VerifiedIcon} from '@material-ui/icons'
import SubscribeButton from '../SubscribeButton/SubscribeButton'

const ChannelRow = ({image, channel, subs, totalVideos, description, verified}) => {
    return (
        <div className={'channelRow'}>
            <Avatar className={'channelRow__avatar'} src={image} alt={channel}/>
            <div className={'channelRow__text'}>
                <h4>
                    {channel} {verified && <VerifiedIcon className={'channelRow__verified'}/>}
                </h4>
                <p>
                    {subs} subscribers ∙ {totalVideos} videos
                </p>
                <p className={'channelRow__description'}>
                    {description}
                </p>
            </div>
            <SubscribeButton/>
        </div>
    )
}

export default ChannelRow