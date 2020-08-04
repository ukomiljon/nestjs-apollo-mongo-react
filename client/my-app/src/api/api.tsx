
import axios from 'axios'
import { API_URL } from './api.setting'

export const fatchData = (controllerName: string) => {
    const url = API_URL + controllerName
    return axios.get(url).
        then(response => {
            return response.data
        })
}
