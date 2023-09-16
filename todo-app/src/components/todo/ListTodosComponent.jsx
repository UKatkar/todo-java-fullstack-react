import { useEffect, useState } from "react"
import { retriveAllTodosForUser, deleteTodoAPI } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"


export default function ListTodosComponent () {

    const navigate = useNavigate() 

    const today = new Date()

    const authContext = useAuth()

    const username = authContext.username

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    // const todos = [
    //                 // {id: 1, description: 'Learn Aws', done: false, targetDate: targetDate},
    //                 // {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
    //                 // {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
    //               ]

    // useEffect - tell React that your component needs to do something after render.

    useEffect ( () => refreshTodos(), [] )

    function refreshTodos() {
        retriveAllTodosForUser(username)
        .then((response) => {
            setTodos(response.data)
        })
        .catch((error) => console.log(error))
    }

    function deleteTodo (id) {
        console.log('Delete clicked ' + id)

        deleteTodoAPI(username, id)
        .then((response) => {
            console.log(`Deleted todo with id ${id} successfull!`)

            // 1. Display successs message 
            setMessage(`Deleted todo with id ${id} successfull!`)

            // 2. Refresh todos list
            refreshTodos()
        }
        )
        .catch((error => console.log(error)))

    }

    function updateTodo (id) {
        console.log('Update clicked ' + id)

        navigate(`/todo/${id}`)

    }

    function addNewTodo () {
        console.log('Add New Todo clicked ')

        navigate(`/todo/-1`)

    }

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Target Date</th>
                            <th>Is Done?</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>  
                                        <td>{todo.description}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>
                                            <button className="btn btn-success m-2" onClick={() => updateTodo(todo.id)}> Update </button>
                                            <button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}> Delete </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-5" onClick={addNewTodo}>
                        Add New Todo
            </div>
        </div>
    )
}