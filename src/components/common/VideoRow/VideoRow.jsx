import React, {useEffect, useState} from 'react'
import './VideoRow.css'
import {Avatar} from '@material-ui/core'
import {MoreVert} from '@material-ui/icons'
import ChannelTitle from '../ChannelTitle/ChannelTitle'
import {videosAPI} from '../../../api/videos-api'
import {numberHelpers} from '../../../utils/number-helpers'

const VideoRow = ({image, title, description, channelTitle, channelId, videoId, timestamp, channelImage, verifiedChannel}) => {
    const [views, setViews] = useState(0)
    const viewsShortened = numberHelpers.abbreviateInteger(views)
    const timeAgo = numberHelpers.dateToTimeAgo(timestamp)

    useEffect( () => {
        if(!videoId)
            return

        async function fetchViews () {
            let data = await videosAPI.getVideoStatistics(videoId)
            setViews(data.statistics.viewCount)
        }
        fetchViews()
    }, [])

    return (
        <div className={'videoRow'}>
            <img className={'videoRow__thumbnail'} src={image} alt={title}/>
            <div className={'videoRow__info'}>
                <h3>{title}</h3>
                <p>{viewsShortened} views ∙ {timeAgo}</p>
                <div className={'videoRow__channel'}>
                    <Avatar className={'videoRow__avatar'} src={channelImage}/>
                    <ChannelTitle title={channelTitle} verified={verifiedChannel}/>
                </div>
                <p className={'videoRow__description'}>{description}</p>
            </div>
            <MoreVert className={'videoRow__more'}/>
        </div>
    )
}

export default VideoRow