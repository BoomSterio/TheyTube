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
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import {Fade} from '@material-ui/core'
import ToolIcon from '../common/ToolIcon/ToolIcon'
import {useDispatch, useSelector} from 'react-redux'
import {actions} from '../../redux/search-reducer'

const Header = ({toggleSidebar}) => {
    const query = useSelector(store => store.searchPage.term.query)
    const [searchQuery, setSearchQuery] = useState(query)

    const dispatch = useDispatch()

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearchClick = () => {
        dispatch(actions.setTerm({query: searchQuery}))
    }

    const isAuth = JSON.parse(sessionStorage.getItem('authUser')).isAuth
    const avatar = JSON.parse(sessionStorage.getItem('authUser')).avatar

    return (
        <div className='header'>
            <div className="header__left">
                <MenuRoundedIcon onClick={toggleSidebar} style={{color: '#606060'}}/>
                <Link to={'/'} style={{height: '19px'}}>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png'}
                        alt={'logo'} className='header__logo'/>
                </Link>
            </div>
            <div className="header__input">
                <div className="header__i">
                    <input value={searchQuery} onChange={handleSearchChange} placeholder={'Search'} type={'text'}/>
                </div>
                <Link to={searchQuery ? `/search/${searchQuery}` : '#'} onClick={handleSearchClick}>
                    <button className={'header__inputButton'}>
                        <SearchIcon/>
                    </button>
                </Link>
                <Mic className={'header__mic'}/>
            </div>
            <div className="header__icons">
                <ToolIcon Icon={VideoCallIcon} title="Create"/>
                <ToolIcon Icon={AppsIcon} title="Apps"/>
                {isAuth ?
                    <>
                        <ToolIcon Icon={NotificationsIcon} title="Notifications"/>
                        <ProfileMenuPopover avatar={avatar}/>
                    </>
                    :
                    <>
                        <ToolIcon Icon={MoreVert} title="Show more"/>
                        <Link to={'/login'}>
                            <Button className={'header__loginButton'}>
                                <AccountCircle/>
                                <p>Log in</p>
                            </Button>
                        </Link>
                    </>
                }
            </div>
        </div>
    )
}

export default Header