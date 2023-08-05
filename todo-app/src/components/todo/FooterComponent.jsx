import { useAuth } from "./security/AuthContext"

function FooterComponent () {

    // const authContest = useContext(AuthContext)

    const authContext = useAuth()

    return (
        <footer className="footer">
            <div className='container'>
                Your Footer
            </div>
        </footer>
    )
}

export default FooterComponent