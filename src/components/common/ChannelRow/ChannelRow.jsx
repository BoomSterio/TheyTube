import React, {useEffect, useState} from 'react'
import './ChannelRow.css'
import {Avatar} from '@material-ui/core'
import {CheckCircle as VerifiedIcon} from '@material-ui/icons'
import SubscribeButton from '../SubscribeButton/SubscribeButton'
import channelsAPI from '../../../api/channels-api'
import {numberHelpers} from '../../../utils/number-helpers'

const ChannelRow = ({image, channel, channelId, description, verified}) => {
    const [subs, setSubs] = useState(0)
    const [totalVideos, setTotalVideos] = useState(0)
    const subsShortened = numberHelpers.abbreviateInteger(subs)

    useEffect(() => {
        let isCancelled = false

        async function fetchViews () {
            if(!channelId || isCancelled)
                return

            let data = await channelsAPI.getChannelStatistics(channelId)

            setTotalVideos(data.statistics.videoCount)
            if(!data.statistics.hideSubscriberCount) {
                setSubs(data.statistics.subscriberCount)
            } else {
                setSubs(null)
            }
        }
        fetchViews()

        return () => {
            isCancelled = true
        }
    }, [])

    return (
        <div className={'channelRow'}>
            <Avatar className={'channelRow__avatar'} src={image} alt={channel}/>
            <div className={'channelRow__text'}>
                <h4>
                    {channel} {verified && <VerifiedIcon className={'channelRow__verified'}/>}
                </h4>
                <p>
                    {subsShortened} subscribers ∙ {totalVideos} videos
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