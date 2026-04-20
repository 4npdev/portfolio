import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Assets
import herobg from "../assets/hero_bg.png"
import "./Hero.css";

function Hero() {
    return (    
        <section className="hero" id="hero">
            
            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}>
                
                <h1 className="hero-heading">Hello, <br /><span className="hero-heading-cyan">I am 4NP.</span> </h1>
            </motion.div>

            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut"}}>
                
                <p className="hero-paragraph">A front end web developer dedicated to making you stand out.</p>
            </motion.div>

            <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut"}}>
                
                <Link className="hero-btn-main" to="/work">See my work</Link>
            </motion.div>
        </section>
    )
}

export default Hero