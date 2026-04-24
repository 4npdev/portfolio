import Project from "../components-work/ProjectCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./FeaturedWork.css";
import projects from "../data/projects";

function FeaturedWork() {
    const featured = projects.filter((project) => project.featured);

    return (
        <section className="recent-work">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true }}
            >
                <h2 className="recent-work-heading">Featured Work</h2>
            </motion.div>

            <div className="recent-work-card-container">
                {featured.map((project, i) => (
                    <Project key={project.id} project={project} index={i} />
                ))}
            </div>

            <Link to="/work" className="recent-work-btn">
                See more
            </Link>
        </section>
    );
}

export default FeaturedWork;