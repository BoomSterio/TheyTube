import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import homeReducer from './home-reducer'
import geoReducer from './geo-reducer'
import appReducer from './app-reducer'

let rootReducer = combineReducers({
    app: appReducer,
    geo: geoReducer,
    homePage: homeReducer,
})

let store = createStore(rootReducer, (applyMiddleware(thunkMiddleware)))

window.store = store

export default store