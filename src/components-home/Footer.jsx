import "./Footer.css"
import { Link } from "react-router-dom"

function Footer({ page }) {
    if (page === 'home') {

    }
    
    return (
        <footer>
            <div className="footer-left">
                <h2>4np.dev</h2>
                <ul>
                    <li><a href="https://www.instagram.com/4np.dev/" target="_blank">Instagram</a></li>
                    <li><a href="https://github.com/4npweb" target="_blank">Github</a></li>
                    <li><a href="https://www.tiktok.com/@4np.dev?is_from_webapp=1&sender_device=pc" target="_blank">TikTok</a></li>
                </ul>
            </div>

            <div className="footer-right">
                <span className="email-text">4np.dev@gmail.com</span>
            </div>

            <p className="footer-bottom">&copy; 2025 4NP Web <br /> All rights reserved</p>
        </footer>
    )
}

export default Footer