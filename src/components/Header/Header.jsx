import React, {useState} from 'react'
import './Header.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <div className='header'>
            <div className="header__left">
                <MenuRoundedIcon/>
                <Link to={'/'}>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'}
                        alt={'logo'} className='header__logo'/>
                </Link>
            </div>
            <div className="header__input">
                <input value={searchTerm} onChange={handleSearchChange} placeholder={'Search'} type={'text'}/>
                <Link to={`/search/${searchTerm}`}>
                    <SearchIcon className={'header__inputButton'}/>
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className={'header__icon'}/>
                <AppsIcon className={'header__icon'}/>
                <NotificationsIcon className={'header__icon'}/>
                <Avatar/>
            </div>

        </div>
    )
}

export default Header