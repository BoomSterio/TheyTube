import React, {useEffect, useState} from 'react'
import './App.css'
import store from './redux/redux-store'
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import HomePage from './components/HomePage/HomePage'
import SearchPage from './components/SearchPage/SearchPage'
import {Provider, useDispatch, useSelector} from 'react-redux'
import LogInPage from './components/LogInPage/LogInPage'
import {initializeApp} from './redux/app-reducer'
import VideoPage from './components/VideoPage/VideoPage'
import Slide from '@material-ui/core/Slide'
import Collapse from '@material-ui/core/Collapse'

function App() {
    const initialized = useSelector(store => store.app.initialized)
    let location = useSelector(store => store.geo.location)
    const [showSidebar, setShowSidebar] = useState(false)

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if (!initialized || !location)
        return <h2>Loading...</h2>

    return (
        <div className='app'>
            <Header toggleSidebar={toggleSidebar}/>
            <div className='app__page'>
                <Collapse in={showSidebar} timeout={200} mountOnEnter unmountOnExit>
                        <Sidebar/>
                </Collapse>
                <div className='app__content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <HomePage/>}/>
                        <Route exact path={'/login'} render={() => <LogInPage/>}/>
                        <Route path={'/search/:searchTerm?'} render={() => <SearchPage/>}/>
                        <Route path={'/video/:videoId?'} render={() => <VideoPage/>}/>
                        <Route path={'*'} render={() => <div>404<br/>PAGE NOT FOUND. Try '/login' or '/'</div>}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
