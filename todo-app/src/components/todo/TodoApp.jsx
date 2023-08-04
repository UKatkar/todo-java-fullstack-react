import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useParams, Link} from 'react-router-dom'
import './TodoApp.css'

export default function TodoApp () {
    return (
        <div className="TodoApp">
            {/* Todo Management Application */}
            <BrowserRouter>
                <HeaderComponent/>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={ <WelcomeComponent/>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    <Route path='/logout' element={<LogoutComponent/>} />
                    <Route path='/todos' element={ <ListTodosComponent/>}/>
                </Routes>
                <FooterComponent/>
            </BrowserRouter>
        </div>
    )
}

function LoginComponent () {

    const[username, setUsername] = useState('Umesh')

    const[password, setPassword] = useState('dummy')

    const[showSuccessMessage, setShowSuccessMessage] = useState(false)

    const[showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate()

    function handleUsernameChange (event) { 
        setUsername(event.target.value)
    }

    function handlePasswordChange (event) {
        setPassword(event.target.value)
    }

    function handleSubmit (){
        if(username === 'Umesh' && password === 'dummy'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        } else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to login</h1>
            <div>
                {showSuccessMessage && <div className="successMessage">Authenticated Successfully</div>}
                {showErrorMessage && <div className="errorMessage">Authenticated Failed. 
                                                                    Please check your credentials.</div>}
                <div className="LoginForm">
                    <div>
                        <label>User Name</label>
                        <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div>
                        <button type="button" name="login" onClick={handleSubmit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WelcomeComponent () {

    const {username} =  useParams();

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos: <Link to='/todos'>Go here</Link>
            </div>
        </div>
    )
}

function ErrorComponent () {
    return (
        <div className="ErrorComponent">
            <h1>We are working realy hard!</h1>
            <div>
                Apologies for 404. Reach out our team at ABC-DEF-GHIj
            </div>
        </div>
    )
}

function ListTodosComponent () {

    const today = new Date()

    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

    const todos = [
                    {id: 1, description: 'Learn Aws', done: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate: targetDate},
                    {id: 3, description: 'Learn DevOps', done: false, targetDate: targetDate}
                  ]

    return (
        <div className="container">
            <h1>Things you want to do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Target Date</td>
                            <td>Is Done?</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>    
                                        <td>{todo.description}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                        <td>{todo.done.toString()}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}



function HeaderComponent () {
    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="http://localhost:3000/">Todo Management</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item fs-5" key={1}><Link className="nav-link" to="/welcome/Umesh">Home</Link></li>
                                <li className="nav-item fs-5"><Link className="nav-link" to="/todos">Todos</Link></li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item fs-5"><Link className="nav-link" to="/logout">Logout</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

function FooterComponent () {
    return (
        <footer className="footer">
            <div className='container'>
                Your Footer
            </div>
        </footer>
    )
}

function LogoutComponent () {
    return (
        <div className="LogoutComponent">
            <h1>You are logged out!</h1>
            <div>
                Thank you for using our App. Come back soon!
            </div>
        </div>
    )
}