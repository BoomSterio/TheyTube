import React, {useEffect} from 'react'
import './SearchPage.css'
import {TuneOutlined} from '@material-ui/icons'
import ChannelRow from '../common/ChannelRow/ChannelRow'
import VideoRow from '../common/VideoRow/VideoRow'
import {useDispatch, useSelector} from 'react-redux'
import {actions, getChannelsByTerm, getVideosByTerm} from '../../redux/search-reducer'
import {useParams} from 'react-router'

const SearchPage = () => {
    const term = useSelector(store => store.searchPage.term)
    let videos = useSelector(store => store.searchPage.videos)
    let channels = useSelector(store => store.searchPage.channels)

    const dispatch = useDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(actions.setTerm({query: params.searchTerm}))
    }, [])

    useEffect(() => {
        /*const min = Math.ceil(1)
        const max = Math.floor(3)*/

        if(term.query) {
            dispatch(getVideosByTerm(term, 20))
            dispatch(getChannelsByTerm(term, 1/*Math.floor(Math.random() * (max - min)) + min)*/))
        }
    }, [dispatch, term])

    debugger
    const videoItems = videos.reverse().map(v => <VideoRow
        key={v.id.videoId}
        image={v.snippet.thumbnails.high.url}
        title={v.snippet.title}
        description={v.snippet.description}
        channelTitle={v.snippet.channelTitle}
        channelId={v.snippet.channelId}
        videoId={v.id.videoId}
        timestamp={v.snippet.publishedAt}
        verifiedChannel
    />)

    const channelItems = channels.map(c => <ChannelRow
        key={c.snippet.channelId}
        channelId={c.id.channelId}
        image={c.snippet.thumbnails.medium.url}
        channel={c.snippet.channelTitle}
        description={c.snippet.description}
        verified
    />)

    return (
        <div className={'searchPage'}>
            <div className="searchPage__page">
                <div className="searchPage__filter">
                    <TuneOutlined/>
                    <h2>Filter</h2>
                </div>
                <hr/>
                {channelItems}
                <hr/>
                {videoItems}
                <hr/>
            </div>
        </div>
    )
}

export default SearchPage