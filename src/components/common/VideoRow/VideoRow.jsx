import React from 'react'
import './VideoCard.css'
import {Avatar} from '@material-ui/core'

const VideoRow = ({image, title, channelTitle, views, timestamp, channelImage}) => {
    return (
        <div className={'video'}>
            <img className='video__thumbnail' src={image} alt="thumbnail"/>
            <div className={'video__info'}>
                <Avatar className={'video__avatar'} src={channelImage} alt={channelTitle}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channelTitle}</p>
                    <p>{views} ∙ {timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default VideoRow