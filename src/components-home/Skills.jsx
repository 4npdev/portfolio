import { motion } from "framer-motion";
import "./Skills.css";

const skills = ["HTML", "CSS", "JavaScript", "Git", "React"];

function Skills() {
    return (
        <section className="skills">
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <h2 className="skills-heading">My skills</h2>
            </motion.div>

            <div className="skill-container">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.1,
                            ease: "easeInOut",
                        }}
                        viewport={{ once: true }}
                    >
                        <span>{skill}</span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Skills;