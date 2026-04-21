import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <p>This page doesn't exist.</p>
            <br /><br />
            <Link to="/" style={{textDecoration: 'underline'}}>Return to home?</Link>
        </div>
    )
}

export default NotFound