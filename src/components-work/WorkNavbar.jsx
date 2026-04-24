import { Link } from "react-router-dom";

import logo from "/4np.png";
import "./WorkNavbar.css";

function WorkNavbar() {
    return (
        <header className="work-navbar">
            <Link to="/">
                <img className="logo" src={logo} alt="4NP Logo" />
            </Link>
        </header>
    );
}

export default WorkNavbar;