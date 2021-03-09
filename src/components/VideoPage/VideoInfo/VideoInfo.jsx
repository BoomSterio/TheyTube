import React, {useEffect, useState} from 'react'
import './VideoInfo.css'
import {videosAPI} from '../../../api/videos-api'
import {MoreHoriz, PlaylistAddRounded, Share, ThumbDown, ThumbUp} from '@material-ui/icons'
import ToolIcon from '../../common/ToolIcon/ToolIcon'

const VideoInfo = ({videoId}) => {
    const [videoInfo, setVideoInfo] = useState({statistics: null, snippet: null})
    const timeOptions = {day: 'numeric', month: 'long', year: 'numeric'}
    const date = new Date(videoInfo.snippet?.publishedAt).toLocaleDateString('en-US', timeOptions)
    const views = Number(videoInfo.statistics?.viewCount).toLocaleString('ru-RU')
    /*const [title, setTitle] = useState(null)
    const [description, setDescription] = useState(null)
    const [views, setViews] = useState(null)
    const [timestamp, setStamp] = useState(null)
    const [likes, setLikes] = useState(null)*/

    useEffect(() => {
        async function fetchData() {
            if (!videoId)
                return

            let statistics = await videosAPI.getVideoStatistics(videoId)
            let snippet = await videosAPI.getVideoSnippet(videoId)

            if (statistics && snippet)
                setVideoInfo({
                    statistics: statistics.statistics,
                    snippet: snippet.snippet
                })
        }

        fetchData()
    }, [videoId])

    if (!videoInfo)
        return

    return (
        <div className={'videoInfo'}>
            <h2>{videoInfo.snippet?.title}</h2>
            <div className={'videoInfo__statistics'}>
                <p>{views} views ∙ {date}</p>
                <div className={'videoInfo__buttons'}>
                    <div className={'videoInfo__rating'}>
                        <div className={'videoInfo__rateButton'} style={{marginRight: '14px'}}>
                            <ThumbUp style={{fontSize: '28px'}}/><p>{videoInfo.statistics?.likeCount}</p>
                        </div>
                        <div className={'videoInfo__rateButton'}>
                            <ThumbDown style={{fontSize: '28px'}}/><p>{videoInfo.statistics?.dislikeCount}</p>
                        </div>
                    </div>
                    <div className={'videoInfo__actions'}>
                        <div className={'videoInfo__button'}>
                            <Share style={{fontSize: '24px'}}/><p>Share</p>
                        </div>
                        <div className={'videoInfo__button'}>
                            <PlaylistAddRounded style={{fontSize: '30px'}}/><p>Save</p>
                        </div>
                        <div className={'videoInfo__button'}>
                            <MoreHoriz style={{fontSize: '30px', marginRight: '12px'}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo
