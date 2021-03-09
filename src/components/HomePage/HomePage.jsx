import React, {useEffect} from 'react'
import './HomePage.css'
import VideoCard from '../common/VideoCard/VideoCard'
import {useDispatch, useSelector} from 'react-redux'
import {getRandomVideos} from '../../redux/home-reducer'
import {geoAPI} from '../../api/geo-api'
import {getUserLocation} from '../../redux/geo-reducer'

const HomePage = () => {
    const videos = useSelector(store => store.homePage.videos)
    let countryCode = useSelector(store => store.geo.location.countryCode)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRandomVideos(countryCode))
        dispatch(getUserLocation())
    }, [dispatch, countryCode])

    const videoItems = videos.reverse().map(v => <VideoCard
        key={v.id}
        image={v.snippet.thumbnails.high.url}
        title={v.snippet.title}
        channelTitle={v.snippet.channelTitle}
        channelId={v.snippet.channelId}
        videoId={v.id.videoId}
        views={v.statistics.viewCount}
        timestamp={v.snippet.publishedAt}
        verifiedChannel
    />)

    return (
        <div className={'homePage'}>
            <h2>Recommended</h2>
            <div className="homePage__videos">
                {videoItems}
                <VideoCard
                    image={'https://i.ytimg.com/vi/FStL8R_ENVE/maxresdefault.jpg'}
                    title={'TEST ITEM: Game of Thrones || Don\'t Panic'}
                    channelTitle={'XTestChannelX'}
                    views={'340512'}
                    timestamp={'2021-02-12T06:44:22Z'}
                    videoId={'nRjWDV7ppAg'}
                    verifiedChannel
                />
            </div>
            <hr/>
            <h2>Popular song videos</h2>
        </div>
    )
}

export default HomePage