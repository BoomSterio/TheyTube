import React from 'react'
import './VideoRow.css'
import {Avatar} from '@material-ui/core'
import {MoreVert} from '@material-ui/icons'
import ChannelTitle from '../ChannelTitle/ChannelTitle'

const VideoRow = ({image, title, description, channelTitle, views, timestamp, channelImage, verifiedChannel}) => {
    return (
        <div className={'videoRow'}>
            <img className={'videoRow__thumbnail'} src={image} alt={title}/>
            <div className={'videoRow__info'}>
                <h3>{title}</h3>
                <p>{views} views ∙ {timestamp}</p>
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