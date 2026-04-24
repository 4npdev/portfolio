import { Link } from "react-router-dom";

import "./WorkBanner.css";

function WorkBanner() {
    return (
        <section className="work-banner">
            <div className="page-heading">
                <h1>My work</h1>
            </div>

            <div className="work-banner-controls">
                <Link className="link" to="/">
                    ← Back to home
                </Link>
            </div>
        </section>
    );
}

export default WorkBanner;