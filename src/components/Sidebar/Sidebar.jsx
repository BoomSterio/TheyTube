import React from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'
import {
    ExpandMoreOutlined,
    History,
    Home,
    OndemandVideo,
    Subscriptions,
    ThumbUpAlt,
    VideoLibrary,
    WatchLater,
    Whatshot
} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <SidebarItem Icon={Home} title={'Home'} path={'/'}/>
            <SidebarItem Icon={Whatshot} title={'Trending'} path={'/trending'}/>
            <SidebarItem Icon={Subscriptions} title={'Subscriptions'} path={'/subscriptions'}/>
            <hr/>
            <SidebarItem Icon={VideoLibrary} title={'Library'} path={'/library'}/>
            <SidebarItem Icon={History} title={'History'} path={'/history'}/>
            <SidebarItem Icon={OndemandVideo} title={'Your videos'} path={'/yourVideos'}/>
            <SidebarItem Icon={WatchLater} title={'Watch later'} path={'/watchLater'}/>
            <SidebarItem Icon={ThumbUpAlt} title={'Liked videos'} path={'/liked'}/>
            <SidebarItem Icon={ExpandMoreOutlined} title={'View more'}/>
            <hr/>
        </div>
    )
}

export default Sidebar