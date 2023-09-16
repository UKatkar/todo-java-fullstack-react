import { useParams, Link } from 'react-router-dom'
import { useState } from 'react';
import { retriveHelloWorld, retriveHelloWorldBean, retriveHelloWorldPathVariable } from './api/HelloWorldApiService';
import { useAuth } from './security/AuthContext';

export default function WelcomeComponent () {

    const {username} =  useParams();

    const[message,setMessage] = useState(null)

    const authContext = useAuth()

    function callHelloWorldRestApi () {
        retriveHelloWorld()
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data)
    }

    function errorResponse(error) {
        console.log(error)
    }

    function callHelloWorldBeanRestApi() {

        retriveHelloWorldBean()
            .then((response) => successfulResponseHellowWorldBean(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    function successfulResponseHellowWorldBean(response) {
        console.log(response)
        setMessage(response.data.message)
    }

    function callHelloWorldPathApi() {
        retriveHelloWorldPathVariable(username)
            .then((response) => successfulResponseHellowWorldBean(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('cleanup'))
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos: <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className='btn btn-success m-3' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>
                <button className='btn btn-success m-3' onClick={callHelloWorldBeanRestApi}>
                    Call Hello World Bean
                </button>
                <button className='btn btn-success m-3' onClick={callHelloWorldPathApi}>
                    Call Hello World Path Variable
                </button>
            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}