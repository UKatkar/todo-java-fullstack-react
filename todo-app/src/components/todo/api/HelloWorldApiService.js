import { apiClient } from './ApiClient'


export function retriveHelloWorld () {
    return apiClient.get('/hello-world')
}

// export function retriveHelloWorldBean () {
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

export const retriveHelloWorldBean =
    () => apiClient.get('/hello-world-bean')

export const retriveHelloWorldPathVariable =
    (username) => apiClient.get(`/hello-world/path-variable/${username}`)

export const executeBasicAuthenticationService =
    (token) => apiClient.get(`/basicauth`, {
        headers: {
            Authorization: token
        }
    })
