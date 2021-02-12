import axios from 'axios'
import {geocode} from './apiConfig'

export const geoAPI = {
    getDecodedLocation(latitude, longitude) {
        return axios
            .get(`${geocode.baseURL}json?q=${latitude}+${longitude}&key=${geocode.key}`)
            .then(response => response.data.results[0])
    }
}