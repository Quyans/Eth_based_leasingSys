import {handleResponse, server} from "../utils/http";
import qs from 'qs'

const hasLoggedInKey = 'hasLoggedIn'

export function login(username, password) {
    return Promise.resolve({
        "status":200,
        "message":"success",
        })
    let res = server.post('user/login', qs.stringify({username, password})).then(handleResponse)
    res.then(() => sessionStorage.setItem(hasLoggedInKey, 'true'))
    return res
}

export function logout() {
    return server.post('user/logout')
        .then(handleResponse)
        .then(res => sessionStorage.removeItem(hasLoggedInKey))
}

export function register(form) {

    return server.post('user/register', form).then(handleResponse)
}

export function hasLoggedIn() {
    return sessionStorage.getItem(hasLoggedInKey) === 'true'
}

server.get('hasLoggedIn').then(handleResponse)
    .then(flag => sessionStorage.setItem(hasLoggedInKey, flag ? 'true' : 'false'))