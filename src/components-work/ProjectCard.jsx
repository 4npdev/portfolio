import { Link } from "react-router-dom";
import "./ProjectCard.css";

function Project({ project }) {
    return (
        <Link to={`/work/project/${project.id}`}>
            <article className="project-card">
                <img
                    src={project.thumbnail}
                    alt={`Thumbnail of ${project.title}`}
                />

                <div className="project-info">
                    <h3>{project.title}</h3>

                    <p>
                        <time dateTime={project.date}>
                            {project.date}
                        </time>
                    </p>
                </div>
            </article>
        </Link>
    );
}

export default Project;