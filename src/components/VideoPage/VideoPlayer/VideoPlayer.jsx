import React from 'react'
import YouTube from 'react-youtube'
import './VideoPlayer.css'

const VideoPlayer = ({videoId}) => {
    const opts = {
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <YouTube
            videoId={videoId}
            className={'videoPlayer'}
            containerClassName={'videoPlayer__container'}
            opts={opts}
        />
    )
}

export default VideoPlayer
