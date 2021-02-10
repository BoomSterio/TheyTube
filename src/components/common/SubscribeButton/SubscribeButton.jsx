import React from 'react'
import './SubscribeButton.css'
import {NotificationsNone} from '@material-ui/icons'

const SubscribeButton = () => {
    return (
        <div className={'subscribeButton'}>
            <div className={'subscribeButton__button'}>
                <h5>Subscribed</h5>
            </div>
            <NotificationsNone className={'subscribeButton__notifications'}/>
        </div>
    )
}

export default SubscribeButton