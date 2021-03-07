import React, {useEffect} from 'react'
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

function App() {
    const initialized = useSelector(store => store.app.initialized)
    let location = useSelector(store => store.geo.location)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    if(!initialized || !location)
        return <h2>Loading...</h2>

    return (
        <div className='app'>
            <Header/>
            <div className='app__page'>
                <Sidebar/>
                <div className='app__content'>
                    <Switch>
                        <Route exact path={'/'} render={() => <HomePage/>}/>
                        <Route exact path={'/login'} render={() => <LogInPage/>}/>
                        <Route path={'/search/:searchTerm?'} render={() => <SearchPage/>}/>
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
            {/*todo: implement store with Redux*/}
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default MainApp
