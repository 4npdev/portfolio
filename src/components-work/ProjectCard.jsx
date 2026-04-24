import { Link } from "react-router-dom"

//Assets
import "./ProjectCard.css"

function Project({ project }) {
    return (
        <Link key={project.id} to={`/work/project/${project.id}`}>
            <article className="project-card">
                <img src={project.thumbnail} alt="" />
                <div className="project-info">
                    <h3>{project.title}</h3>
                    <p><time datetime={project.date}>{project.date}</time></p>
                </div>
            </article>
        </Link>
    )
}

export default Project