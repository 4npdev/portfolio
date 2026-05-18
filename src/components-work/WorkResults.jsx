import Project from "./ProjectCard";

import "./WorkResults.css";
import projects from "../data/projects";

function WorkResults() {
    const reversedProjects = [...projects].reverse();

    return (
        <div className="work-results">
            {reversedProjects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </div>
    );
}

export default WorkResults;