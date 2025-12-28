import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "http://170.64.180.243:8800/api/",
    withCredentials: true,
})