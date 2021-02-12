import React, {useState} from 'react'
import './Header.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import {Link} from 'react-router-dom'
import {AccountCircle, Mic, MoreVert} from '@material-ui/icons'
import ProfileMenuPopover from './ProfileMenuPopover/ProfileMenuPopover'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const isAuth = JSON.parse(sessionStorage.getItem('authUser')).isAuth
    const avatar = JSON.parse(sessionStorage.getItem('authUser')).avatar

    return (
        <div className='header'>
            <div className="header__left">
                <MenuRoundedIcon/>
                <Link to={'/'} style={{height: '19px'}}>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'}
                        alt={'logo'} className='header__logo'/>
                </Link>
            </div>
            <div className="header__input">
                <div className="header__i">
                    <input value={searchTerm} onChange={handleSearchChange} placeholder={'Search'} type={'text'}/>
                </div>
                <Link to={`/search/${searchTerm}`}>
                    <button className={'header__inputButton'}>
                        <SearchIcon/>
                    </button>
                </Link>
                <Mic className={'header__mic'}/>
            </div>
            <div className="header__icons">
                <VideoCallIcon className={'header__icon'}/>
                <AppsIcon className={'header__icon'}/>
                {isAuth ?
                    <>
                        <NotificationsIcon className={'header__icon'}/>
                        <ProfileMenuPopover avatar={avatar}/>
                    </>
                    :
                    <>
                        <MoreVert className={'header__icon'}/>
                        <button className={'header__loginButton'}>
                            <AccountCircle/>
                            <p>Log in</p>
                        </button>
                    </>
                }
            </div>
        </div>
    )
}

export default Header