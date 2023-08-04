import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './TodoApp.css'

import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import LogoutComponent from './LogoutComponent'
import FooterComponent from './FooterComponent'
import ErrorComponent from './ErrorComponent'

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