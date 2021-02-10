import React from 'react'
import './SidebarItem.css'

const SidebarItem = ({Icon, title, selected}) => {
    return (
        <div className={`sidebarItem ${selected && 'selected'}`}>
            <Icon className={'sidebarItem__icon'}/>
            <span className={'sidebarItem__title'}>{title}</span>
        </div>
    )
}

export default SidebarItem