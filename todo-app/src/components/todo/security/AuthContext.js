import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

// 1 create a context 
export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

// 2 Share the created context with other components
export default function AuthProvider ({ children }) {

    // 3 Put some state in the context
    const [isAuthenticated, setAuthenticated] = useState(false)

    // 4 Put username in the context
    const [username, setUsername] = useState(false)

    // 5 Setting token in th context
    const [token, setToken] = useState(null)

    // function login(username, password) {
    //     if(username === 'Umesh' && password === 'dummy'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     } else {
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }


    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa(username + ':' + password)

        try{
            const response = await executeBasicAuthenticationService(baToken)
        
            if(response.status == 200){
                setAuthenticated(true)
                setToken(baToken)
                setUsername(username)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('Intercepting and adding a token')
                        config.headers.Authorization=baToken
                        return config
                    }
                )

                return true
            } else {
                logout()
                return false
            }
        } catch(error) {
           logout()
            return false
        }
        
    }

    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout, username, token} }>
            { children }
        </AuthContext.Provider>
    )
}

