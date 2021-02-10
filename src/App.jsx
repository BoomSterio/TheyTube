import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {Route, Switch} from 'react-router'
import HomePage from './components/HomePage/HomePage'
import {BrowserRouter} from 'react-router-dom'
import SearchPage from './components/SearchPage/SearchPage'

function App() {
    return (
        <div className='app'>
            <Header/>
            <div className='app__page'>
                <Sidebar/>
                <Switch>
                    <Route exact path={'/'} render={() => <HomePage/>}/>
                    <Route path={'/search/:searchTerm?'} render={() => <SearchPage/>}/>
                    <Route path={'*'} render={() => <div>404<br/>PAGE NOT FOUND</div>}/>
                </Switch>
            </div>
        </div>
    )
}

const MainApp = () => {
    return (
        <BrowserRouter>
            {/*todo: implement store with Redux*/}
            {/*<Provider store={store}>*/}
                <App/>
            {/*</Provider>*/}
        </BrowserRouter>
    )
}

export default MainApp
