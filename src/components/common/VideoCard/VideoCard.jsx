import React, {useEffect, useState} from 'react'
import './VideoCard.css'
import {Avatar} from '@material-ui/core'
import {MoreVert} from '@material-ui/icons'
import ChannelTitle from '../ChannelTitle/ChannelTitle'
import channelsAPI from '../../../api/channels-api'
import moment from 'moment'
import {numberHelpers} from '../../../utils/number-helpers'

const VideoCard = ({image, title, channelTitle, views, timestamp, channelId, verifiedChannel}) => {
    const [channelImage, setChannelImage] = useState(null)
    const viewsShortened = numberHelpers.abbreviateInteger(views)
    const timeAgo = numberHelpers.dateToTimeAgo(timestamp)

    useEffect( () => {
        if(!channelId)
            return

        async function fetchImage () {
            setChannelImage(await channelsAPI.getChannelImage(channelId))
        }
        fetchImage()
    }, [channelId])

    return (
        <div className={'video'}>
            <img className='video__thumbnail' src={image} alt="thumbnail"/>
            <div className={'video__info'}>
                <Avatar className={'video__avatar'} src={channelImage} alt={channelTitle}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <ChannelTitle title={channelTitle} verified={verifiedChannel}/>
                    <p>{viewsShortened} views ∙ {timeAgo}</p>
                </div>
                <MoreVert className={'video__more'}/>
            </div>
        </div>
    )
}

export default VideoCard