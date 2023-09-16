import { apiClient } from './ApiClient'

export const retriveAllTodosForUser =
    (username) => apiClient.get(`/users/${username}/todos`)

export const deleteTodoAPI = (username, id) => apiClient.delete(`/users/${username}/todos/${id}`)

export const retriveTodoAPI = (username, id) => apiClient.get(`/users/${username}/todos/${id}`)

export const updateTodoAPI = (username, id, todo) => apiClient.put(`/users/${username}/todos/${id}`, todo)

export const createTodoAPI = (username, todo) => apiClient.post(`/users/${username}/todos`, todo)