import Project from "./ProjectCard";

import "./WorkResults.css";
import projects from "../data/projects";

function WorkResults() {
    return (
        <div className="work-results">
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
}

export default WorkResults;