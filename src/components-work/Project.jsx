import { useParams } from "react-router-dom"
import projects from "../data/projects"
import { Link } from "react-router-dom";
import WorkNavbar from "./WorkNavbar";
import Footer from "../components-home/Footer";

//Assets
import "./Project.css"

function Project() {
    const { id } = useParams();

    const project = projects.find(project => project.id === id);

    if (!project) return <h1>Not found</h1>

    return (
        <>
            <WorkNavbar />
            <main>
                <div className="return-to-work">
                    <Link className="link" to="/work">← Back to projects</Link>
                </div>
                <article className="project-container">
                    <div className="project-container-left">
                        <span>{project.type}</span>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <div className="project-buttons">
                            <a className="project-btn-1" target="_blank" href={project.live}>Visit live link</a>
                            <a className="project-btn-2" target="_blank" href={project.github}>Github</a>
                        </div>
                    </div>
                    <div className="project-container-right">
                        <img src={project.image} alt="Screenshot of Project" />
                    </div>
                </article>
            </main>
            <Footer />
        </>
    )
}

export default Project