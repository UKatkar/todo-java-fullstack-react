

1. Creating React UI Application

    Pre-requisites:
   	Latest version of Node JS 
        NPM - package manager: Install, delete, and update JS package (npm --version)
	NPX - package executor: Executes js packages without installing (npx --version)

    Using Create React App:
        Got to YOUR_FOLDER, where you want to create react project
            cd <your_folder>
        Create React App with create-react-app
            npx create-react-app todo-app

            OUTPUT:
                Success! Created todo-app at D:\Learning\Spring and Spring boot Framework with JAVA - Udemy\todo-java-fullstack-react\todo-app
                Inside that directory, you can run several commands:

                npm start
                    Starts the development server.

                npm run build
                    Bundles the app into static files for production.

                npm test
                    Starts the test runner.

                npm run eject
                    Removes this tool and copies build dependencies, configuration files
                    and scripts into the app directory. If you do this, you can’t go back!

                We suggest that you begin by typing:

                cd todo-app
                npm start

                Happy hacking!

2. Getting started with Todo App - Components

    Starting with TodoApp

        1. LoginComponent
            Make Login Component Controlled
                Link from field with state
            Implement hard-coded authentication
            Implement Conditional Rendering

        2. WelcomeComponent
            Implement routing
        
        3. ErrorComponent

        4. ListTodoComponent

        5. Add bootstrap & style our pages

        6. HeaderComponent

        7. FooterComponent

        8. LogoutComponent

3. Routing LoginComponent to WelcomeComponent

    We require react-router-dom for routing to the component.

    Stop npm [ctrl + c]
    install react-router-dom with command:
        npm install react-router-dom

    In App use:
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>

    Note: BrowserRouter, Routes, Route are in react-router-dom. Import them from 'react-router-dom'

4. Navigate to WelcomeComponent from LoginComponent

    Use 'useNavigate' from react-router-dom to navigate to the page.

    define const like :
        const navigate = useNavigate()

     if(username === 'Umesh' && password === 'dummy'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate('/welcome')
    }

5. Pass parameters from one component to other using 'useParams'

    Need to update routing uri as: 
        <Route path='/welcome/:username' element={ <WelcomeComponent/>}/>

    To pass parameter we need to use javascripts format ${} in ticks, like: 
         if(username === 'Umesh' && password === 'dummy'){
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
            navigate(`/welcome/${username}`)
        }

    After this username will be available in component having path `/welcome/${username}`. In our case WelcomeComponent

    URL paramenters can be accessed using userParams() funtion
    like- 
        const {username} =  useParams();

6. Creating ErrorComponent

    For other than defined <Route> if any request coming we can route them to ErrorComponent

    As,
        <Route path='*' element={<ErrorComponent/>}/>
    
    On Error Component we can show our error page.

7. Creating ListTodosComponent 

    In ListTodosComponent we can create list as,
          const todos = [
                    {id: 1, description: 'Learn Aws', done: false, targetDate: targetDate},
          ]
    
    For table to create multiple row, we can map our todos list, as,
        {
            todos.map(
                todo => (
                    todo.id...
                )
            )
        }

        Check ListTodosComponent

    You can check more funtion on list, map, ...

    Can explore functions in JavaScripts,
    like,
        const today = new Date()
        const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

8. Link WelcomeComponent to ListTodosComponent

    We can add link in one component to other component using
    Link of 'react-router-dom'

    Example,
        Manage your todos: <Link to='/todos'>Go here</Link>

9. Creating HeaderComponent, FooterComponent

    In our AppComponent if we add HeaderComponent at first and FooterComponent at last it will be applicable to all components in-between.

    Example, 

         <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Compnent1>
                .....
            </BrowserRouter>
            <FooterComponent/>
        </div>

10. Creating LogoutComponent 

    This component will be see after someone logout from the application. 

    We will add 'Logout' link to HeaderComponent to Logout

11. Adding Bootstrap to OUR React App

    Go to command prompt and install bootstrap to add bootstrap framework to our application

    `npm install bootstrap`

    you can Confirm bootstrap installation from package.json

    Now, to link bootstrap css go to > node_modules > bootstrap > dist > css > bootstrap.min.css 
                                        --> Right click and Copy Path

    To Add bootstrap.min.css throughout application go to index.js
    and import bootstrap add path after node_module directory
        [import 'bootstrap/dist/css/bootstrap.min.css']

    Go Style your application with bootstrap....

12. Sharing React state with Multiple Components with Auth Context 

    // create a context 
    // Put some state in the context
    // Share the created context with other components

    For this we create file /security/AuthContext.js

    // 1. Create Context 
        export const AuthContext = createContext()

    // 2. Provide Context to all the component through AuthProvide (refer AuthContext.js)
        function AuthProvider ({ children }) {
            return (
                <AuthContext.Provider>
                    { children }
                </AuthContext.Provider>
            )
        }

    To access AuthContext in other component we create a useAuth use. This is a standard, we use auth in a React Project
        export const useAuth = () => useContext(AuthContext)
    


    
