import axios from 'axios'
import {youtube} from './apiConfig'

export const channelsAPI = {
    getChannelImage(channelId) {
        return axios
            .get(`${youtube.baseURL}channels?part=snippet&id=${channelId}&key=${youtube.key}`)
            .then(response => response.data.items[0].snippet.thumbnails.default.url)
    }
}

export default channelsAPI