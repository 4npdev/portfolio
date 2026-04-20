import { motion } from "framer-motion"

//Assets
import "./About.css"

function About() {
    return (
        <section className="about" id="about">
            <div className="about-text-container">
                <motion.div
                    initial={{ transform: "translateY(50px)", opacity: 0 }}
                    whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut"}}>
                
                    <h2 className="about-heading">About</h2>
                </motion.div>

                <motion.div
                initial={{ transform: "translateY(100px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut"}}>
                
                    <p className="about-paragraph">
                        I'm a self taught developer 
                        with 2+ years of experience with 
                        web development. I have great 
                        communication skills and I'm ready to make you satisfied with the finished product.
                        <br /><br />
                        I build landing and personal 
                        websites for businesses and creators, 
                        ensuring that their layout is clean 
                        and accessible.
                        <br /><br />
                        I’ll make sure your website is 
                        not only beautifully designed, 
                        but responsive and as beautiful 
                        on other devices.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default About