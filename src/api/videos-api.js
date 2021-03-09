import axios from 'axios'
import {youtube} from './apiConfig'

export const videosAPI = {
    getTrendingVideos(countryCode, pageSize) {
        return axios
            .get(`${youtube.baseURL}videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=${pageSize}&regionCode=${countryCode}&key=${youtube.key}`)
            .then(response => response.data.items)
    },
    getRelatedVideos(videoId, pageSize) {
        return axios
            .get(`${youtube.baseURL}search?part=snippet&maxResults=${pageSize}&relatedToVideoId=${videoId}&type=video&key=${youtube.key}`)
            .then(response => response.data.items)
    },
    getVideosByTerm(term, pageSize) {
        return axios
            .get(`${youtube.baseURL}search?part=snippet&order=relevance&type=video&q=${term.query}&maxResults=${pageSize}&key=${youtube.key}`)
            .then(response => response.data.items)
    },
    getVideoStatistics(videoId) {
        return axios
            .get(`${youtube.baseURL}videos?part=statistics&id=${videoId}&key=${youtube.key}`)
            .then(response => (response.data.items[0]))
    },
    getVideoSnippet(videoId) {
        return axios
            .get(`${youtube.baseURL}videos?part=snippet&id=${videoId}&key=${youtube.key}`)
            .then(response => (response.data.items[0]))
    }
}