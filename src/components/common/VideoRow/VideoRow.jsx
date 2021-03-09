import React, {useEffect, useState} from 'react'
import './VideoRow.css'
import {Avatar} from '@material-ui/core'
import {MoreVert} from '@material-ui/icons'
import ChannelTitle from '../ChannelTitle/ChannelTitle'
import {videosAPI} from '../../../api/videos-api'
import {numberHelpers} from '../../../utils/number-helpers'
import channelsAPI from '../../../api/channels-api'
import {useHistory} from 'react-router'

const VideoRow = ({variant = 'default',image, title, description, channelTitle, channelId, videoId, timestamp, verifiedChannel}) => {
    const [views, setViews] = useState(0)
    const history = useHistory()
    const [channelImage, setChannelImage] = useState(null)
    const viewsShortened = numberHelpers.abbreviateInteger(views)
    const timeAgo = numberHelpers.dateToTimeAgo(timestamp)

    useEffect( () => {
        let isCancelled = false

        if(!videoId || isCancelled)
            return

        async function fetchInfo () {
            let data = await videosAPI.getVideoStatistics(videoId)
            setViews(data.statistics.viewCount)
            setChannelImage(await channelsAPI.getChannelImage(channelId))
        }
        fetchInfo()

        return () => {
            isCancelled = true
        }
    }, [videoId, channelId])

    return (
        <div className={variant === 'default' ? 'videoRow' : variant ==='compact' && 'videoRow-compact'} onClick={() => history.push(`/video/${videoId}`)}>
            <img className={variant === 'default' ? 'videoRow__thumbnail' : variant ==='compact' && 'videoRow__thumbnail-compact'}
                 src={image} alt={title}/>
            <div className={variant === 'default' ? 'videoRow__info' : variant ==='compact' && 'videoRow__info-compact'}>
                <h3>{title}</h3>
                <p>{viewsShortened} views ∙ {timeAgo}</p>
                <div className={'videoRow__channel'}>
                    {variant !== 'compact' &&
                    <Avatar className={'videoRow__avatar'} src={channelImage}/>}
                    <ChannelTitle title={channelTitle} verified={verifiedChannel}/>
                </div>
                {variant !== 'compact' &&
                <p className={'videoRow__description'}>{description}</p>}
            </div>
            <MoreVert className={'videoRow__more'}/>
        </div>
    )
}

export default VideoRow