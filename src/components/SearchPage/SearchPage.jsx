import React from 'react'
import './SearchPage.css'
import {TuneOutlined} from '@material-ui/icons'
import ChannelRow from '../common/ChannelRow/ChannelRow'
import VideoRow from '../common/VideoRow/VideoRow'

const SearchPage = () => {
    return (
        <div className={'searchPage'}>
            <div className="searchPage__page">
                <div className="searchPage__filter">
                    <TuneOutlined/>
                    <h2>Filter</h2>
                </div>
                <hr/>
                <ChannelRow
                    image={'https://yt3.ggpht.com/ytc/AAUvwnhFDxAAzB__Uk69EStxwWqYw6Hcq75ChiuaAaLWzA=s176-c-k-c0x00ffffff-no-rj-mo'}
                    channel={'Eiro Nareth'}
                    description={'Hi there, my name is Eiro Nareth, I am a guitar player and composer. On this channel I publish guitar covers of different famous songs...'}
                    subs={'1.13M'}
                    totalVideos={195}
                    verified
                />
                <hr/>
                <VideoRow
                    image={'https://i.ytimg.com/vi/X9x87dguFHw/maxresdefault.jpg'}
                    title={'Gotye - Somebody that I used to know⎪Acoustic guitar fingerstyle cover'}
                    description={'If you are looking for really cool guitar lessons you should check out GuitarTricks FREE 14 day trial ...'}
                    timestamp={'1 year ago'}
                    views={'905K'}
                    channelImage={'https://yt3.ggpht.com/ytc/AAUvwnhFDxAAzB__Uk69EStxwWqYw6Hcq75ChiuaAaLWzA=s68-c-k-c0x00ffffff-no-rj'}
                    channelTitle={'Eiro Nareth'}
                    verifiedChannel
                />
                <VideoRow
                    image={'https://i.ytimg.com/vi/X9x87dguFHw/maxresdefault.jpg'}
                    title={'Gotye - Somebody that I used to know⎪Acoustic guitar fingerstyle cover'}
                    description={'If you are looking for really cool guitar lessons you should check out GuitarTricks FREE 14 day trial ...'}
                    timestamp={'1 year ago'}
                    views={'905K'}
                    channelImage={'https://yt3.ggpht.com/ytc/AAUvwnhFDxAAzB__Uk69EStxwWqYw6Hcq75ChiuaAaLWzA=s68-c-k-c0x00ffffff-no-rj'}
                    channelTitle={'Eiro Nareth'}
                    verifiedChannel
                />
                <hr/>
            </div>
        </div>
    )
}

export default SearchPage