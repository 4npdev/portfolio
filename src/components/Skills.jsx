import { motion } from "framer-motion";

//Assets
import "./Skills.css"

function Skills() {
    return (
        <section className="skills">
            <motion.div
                initial={{ transform: "translateY(50px)", opacity: 0 }}
                whileInView={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut"}}>
                
                <h2 className="skills-heading">My skills</h2>
            </motion.div>

            <div className="skill-container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut"}}>
                    
                    <span>HTML</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut"}}>
                    
                    <span>CSS</span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut"}}>
                    
                    <span>Javascript</span>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut"}}>
                    
                    <span>Git</span>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut"}}>
                    
                    <span>React</span>
                </motion.div>
                
            </div>
        </section>
    )
}

export default Skills;