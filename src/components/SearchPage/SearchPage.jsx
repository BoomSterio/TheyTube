import React from 'react'
import './SearchPage.css'
import {TuneOutlined} from '@material-ui/icons'

const SearchPage = () => {
    return (
        <div className={'searchPage'}>
            <div className="searchPage__filter">
                <TuneOutlined/>
                <h2>Filter</h2>
            </div>
            <hr/>
        </div>
    )
}

export default SearchPage