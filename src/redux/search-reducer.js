import {videosAPI} from '../api/videos-api'
import channelsAPI from '../api/channels-api'

let initialState = {
    term: {
        query: ''
    },
    videos: [],
    channels: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'searchPage/SET_TERM': {
            return {
                ...state, term: action.term
            }
        }
        case 'searchPage/SET_VIDEOS': {
            return {
                ...state, videos: action.videos
            }
        }
        case 'searchPage/SET_CHANNELS': {
            return {
                ...state, channels: action.channels
            }
        }


        default:
            return state
    }
}

export const actions = {
    setTerm: (term) => ({type: 'searchPage/SET_TERM', term}),
    setVideos: (videos) => ({type: 'searchPage/SET_VIDEOS', videos}),
    setChannels: (channels) => ({type: 'searchPage/SET_CHANNELS', channels})
}

export const getRelatedVideos = (videoId, pageSize = 10) => async (dispatch) => {
    let data = await videosAPI.getRelatedVideos(videoId, pageSize)
    dispatch(actions.setVideos(data))
}
export const getVideosByTerm = (term, pageSize = 10) => async (dispatch) => {
    let data = await videosAPI.getVideosByTerm(term, pageSize)
    dispatch(actions.setVideos(data))
}
export const getChannelsByTerm = (term, maxResults = 1) => async (dispatch) => {
    let data = await channelsAPI.getChannelsByTerm(term, maxResults)
    dispatch(actions.setChannels(data))
}

export default searchReducer