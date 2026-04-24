import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-text-container">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h2 className="about-heading">Get to know me</h2>
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <p className="about-paragraph">
            I'm a self-taught front-end web developer. I started learning web
            development in 2022 and as time passed I only fell in love with it
            more. I have great communication skills and I'm dedicated to
            designing beautiful websites and bringing them to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
