import {videosAPI} from '../api/videos-api'

let initialState = {
    videos: []
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'homePage/SET_VIDEOS': {
            return {
                ...state, videos: action.videos
            }
        }

        default:
            return state
    }
}

export const actions = {
    setVideos: (videos) => ({type: 'homePage/SET_VIDEOS', videos})
}

export const getRandomVideos = (countryCode = 'US', pageSize = 10) => async (dispatch) => {
    let data = await videosAPI.getTrendingVideos(countryCode, pageSize)
    dispatch(actions.setVideos(data))
}

export default homeReducer