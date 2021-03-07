import axios from 'axios'
import {youtube} from './apiConfig'

export const channelsAPI = {
    getChannelsByTerm(term, maxResults) {
        return axios
            .get(`${youtube.baseURL}search?part=snippet&maxResults=1&q=${term.query}&key=${youtube.key}`)
            .then(response => response.data.items)
    },
    getChannelStatistics(channelId) {
        debugger
        return axios
            .get(`${youtube.baseURL}channels?part=statistics&id=${channelId}&key=${youtube.key}`)
            .then(response => response.data.items[0])
    },
    getChannelImage(channelId) {
        return axios
            .get(`${youtube.baseURL}channels?part=snippet&id=${channelId}&key=${youtube.key}`)
            .then(response => response.data.items[0].snippet.thumbnails.default.url)
    }
}

export default channelsAPI