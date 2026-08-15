import projects from "../projectData";

function ProjectExplorer({
  projectType,
  onClose,
  onSelectProject
}) {
  const filteredProjects = projects.filter(
    (project) => project.category === projectType
  );

  return (
    <div className="explorer-window">

      <div className="explorer-header">

        <h2>
          {projectType === "AI"
            ? "AI Projects"
            : "ML Projects"}
        </h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

      </div>

      <div className="explorer-content">

        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-item"
            onClick={() =>
              onSelectProject(project)
            }
          >
            <h3>{project.title}</h3>

            <p>
                Open Project Showcase
                </p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default ProjectExplorer;