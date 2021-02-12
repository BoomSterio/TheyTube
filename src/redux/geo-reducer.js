import {geoAPI} from '../api/geo-api'

let initialState = {
    location: null
}

const geoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'geo/SET_LOCATION': {
            return {
                ...state, location: action.location
            }
        }

        default:
            return state
    }
}

export const actions = {
    setPosition: (position) => ({type: 'geo/SET_POSITION', position}),
    setLocation: (location) => ({type: 'geo/SET_LOCATION', location})
}

export const getDecodedLocation = (position) => async (dispatch) => {
    const {latitude, longitude} = position
    let data = await geoAPI.getDecodedLocation(latitude, longitude)

    const location = {
        countryCode: data.components['ISO_3166-1_alpha-2'],
        countryName: data.components.country,
        city: data.components.city
    }
    dispatch(actions.setLocation(location))
}

export const getUserLocation = () => async (dispatch) => {
    const successfulLookup = (position) => {
        const { latitude, longitude } = position.coords
        dispatch(getDecodedLocation({latitude, longitude})).then(() => {
            dispatch(actions.setPosition({latitude, longitude}))
        })
    }

    if (window.navigator.geolocation) {
        await window.navigator.geolocation
            .getCurrentPosition(successfulLookup, console.log)
    }
}

export default geoReducer
