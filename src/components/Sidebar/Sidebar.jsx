import React from 'react'
import './Sidebar.css'
import SidebarItem from './SidebarItem/SidebarItem'
import {
    Home,
    Whatshot,
    Subscriptions,
    ExpandMoreOutlined,
    History,
    OndemandVideo,
    ThumbUpAlt,
    VideoLibrary,
    WatchLater
} from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <SidebarItem selected Icon={Home} title={'Home'}/>
            <SidebarItem Icon={Whatshot} title={'Trending'}/>
            <SidebarItem Icon={Subscriptions} title={'Subscriptions'}/>
            <hr/>
            <SidebarItem Icon={VideoLibrary} title={'Library'}/>
            <SidebarItem Icon={History} title={'History'}/>
            <SidebarItem Icon={OndemandVideo} title={'Your videos'}/>
            <SidebarItem Icon={WatchLater} title={'Watch later'}/>
            <SidebarItem Icon={ThumbUpAlt} title={'Liked videos'}/>
            <SidebarItem Icon={ExpandMoreOutlined} title={'View more'}/>
            <hr/>
        </div>
    )
}

export default Sidebar