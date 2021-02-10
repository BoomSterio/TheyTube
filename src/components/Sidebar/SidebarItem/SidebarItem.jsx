import React from 'react'
import './SidebarItem.css'
import {NavLink} from 'react-router-dom'

const SidebarItem = ({Icon, title, path}) => {
    return (
        <>
            {path
                ?
                <NavLink exact={path === '/'} to={path} activeClassName={'selected'} className={'link'}>
                    <div className={`sidebarItem`}>
                        <Icon className={'sidebarItem__icon'}/>
                        <span className={'sidebarItem__title'}>{title}</span>
                    </div>
                </NavLink>
                :
                <div className={`sidebarItem`}>
                    <Icon className={'sidebarItem__icon'}/>
                    <span className={'sidebarItem__title'}>{title}</span>
                </div>}
        </>
    )
}

export default SidebarItem