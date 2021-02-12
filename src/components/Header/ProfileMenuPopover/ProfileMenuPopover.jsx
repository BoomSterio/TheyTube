import Popover from '@material-ui/core/Popover'
import React from 'react'
import {Avatar} from '@material-ui/core'
import './ProfileMenuPopover.css'
import {GoogleLogout} from 'react-google-login'

const ProfileMenuPopover = ({avatar}) => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleLogout = (r) => {
        const authUser = {
            name: null,
            googleId: null,
            avatar: null,
            isAuth: false
        }

        sessionStorage.setItem('authUser',JSON.stringify(authUser))
        window.location = '/login'
    }

    const show = Boolean(anchorEl)
    const id = show ? 'popover' : undefined

    return (
        <>
            <Avatar className={'avatar'} src={avatar} onClick={handleClick}/>
            <Popover
                anchorEl={anchorEl} onClose={handleClose} id={id} open={show}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <div>
                    <GoogleLogout
                        clientId={'593308672456-ni0t53ifvjhijs2hgm674uapmvsvg0el.apps.googleusercontent.com'}
                        buttonText={'Log Out'}
                        onLogoutSuccess={handleLogout}
                    />
                </div>
            </Popover>
        </>
    )
}

export default ProfileMenuPopover