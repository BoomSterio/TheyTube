import React, {useEffect, useState} from 'react'
import './VideoPage.css'
import {useHistory, useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {getRelatedVideos} from '../../redux/search-reducer'
import VideoRow from '../common/VideoRow/VideoRow'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import {videosAPI} from '../../api/videos-api'
import VideoInfo from './VideoInfo/VideoInfo'

const VideoPage = () => {
    const related = useSelector(state => state.searchPage.videos)
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        let isCancelled = false
        if(!params.videoId)
            return

        function fetchData() {
            dispatch(getRelatedVideos(params.videoId, 14))
        }
        fetchData()

        return () => {
            isCancelled = true
        }
    }, [params.videoId])

    const videoItems = related.map(v => (v && v.snippet) ? <VideoRow
        key={v.id.videoId}
        variant={'compact'}
        image={v.snippet.thumbnails.high.url}
        title={v.snippet.title}
        description={v.snippet.description}
        channelTitle={v.snippet.channelTitle}
        channelId={v.snippet.channelId}
        videoId={v.id.videoId}
        timestamp={v.snippet.publishedAt}
        verifiedChannel
    /> : '')

    if(!params.videoId)
        history.replace('/')

    return (
        <div className={'videoPage'}>
            <div className={'videoPage__videoSection'}>
                <VideoPlayer videoId={params.videoId}/>
                <VideoInfo videoId={params.videoId}/>
            </div>
            <div className={'videoPage__relatedVideos'}>
                {videoItems}
            </div>
        </div>
    )
}

export default VideoPage
