function ProjectShowcase({
  project,
  onClose
}) {
  if (!project) return null;

  return (
    <div className="showcase-window">

      <div className="showcase-header">

        <h2>{project.title}</h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

      </div>

      <div className="showcase-content">

        <section>
          <h3>Overview</h3>
          <p>{project.overview}</p>
        </section>

        <section>
          <h3>Architecture</h3>
          <p>{project.architecture}</p>
        </section>

        <section>
          <h3>Tech Stack</h3>

          <div className="tech-stack">

            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="tech-pill"
              >
                {tech}
              </span>
            ))}

          </div>
        </section>

      </div>

    </div>
  );
}

export default ProjectShowcase;