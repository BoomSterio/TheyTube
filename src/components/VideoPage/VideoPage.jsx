import React, {useEffect, useState} from 'react'
import './VideoPage.css'
import {useHistory, useParams} from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import {getRelatedVideos} from '../../redux/search-reducer'
import VideoRow from '../common/VideoRow/VideoRow'
import VideoPlayer from './VideoPlayer/VideoPlayer'
import {videosAPI} from '../../api/videos-api'

const VideoPage = () => {
    const [videoInfo, setVideoInfo] = useState({})
    const related = useSelector(state => state.searchPage.videos)
    const params = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        let isCancelled = false
        if(!params.videoId)
            return

        async function fetchData() {
            let statistics = await videosAPI.getVideoStatistics(params.videoId)
            let snippet = await videosAPI.getVideoSnippet(params.videoId)
            setVideoInfo({
                statistics: statistics.statistics,
                snippet: snippet.snippet
            })
            debugger
            dispatch(getRelatedVideos(params.videoId))
        }
        fetchData()

        return () => {
            isCancelled = true
        }
    }, [])

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
                <div>
                    dsada
                </div>
            </div>
            <div className={'videoPage__relatedVideos'}>
                {videoItems}
            </div>
        </div>
    )
}

export default VideoPage
