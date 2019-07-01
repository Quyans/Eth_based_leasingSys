// http相关模块
import axios from 'axios'

export const BASE_URL = '/api'

export let server = axios.create({
    baseURL: BASE_URL
})

server.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.params = config.params || {}
    config.params.t = Date.now()
    return config
})

// 请求返回时的Error
export class RequestError extends Error {
    constructor(message, status) {
        super()
        this.message = message
        this.status = status
    }
}

export const handleResponse = resp => {
    if (resp.status === 200) {
        return resp.data
    } else {
        throw new RequestError(resp.message, resp.status)
    }
}