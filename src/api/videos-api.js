import axios from 'axios'
import {youtube} from './apiConfig'

export const videosAPI = {
    getTrendingVideos(countryCode, pageSize) {
        return axios
            .get(`${youtube.baseURL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${pageSize}&regionCode=${countryCode}&key=${youtube.key}`)
            .then(response => response.data.items)
    }
}