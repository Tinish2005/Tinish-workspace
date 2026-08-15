function ExperienceWindow({ onClose }) {
  return (
    <div className="showcase-window">

      <div className="showcase-header">

        <h2>Experience</h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

      </div>

      <div className="showcase-content">

        <section>
          <h3>GenAI Intern</h3>

          <h4>NIIT Limited</h4>

          <p>
            Working on GenAI systems using Flask,
            FastAPI, LangChain, Google Gemini,
            ChromaDB, MCP, and Retrieval-Augmented
            Generation (RAG) architectures.
          </p>

          <ul>
            <li>
              Built end-to-end GenAI applications.
            </li>

            <li>
              Worked with REST APIs, MCP, and AI
              agent architectures.
            </li>

            <li>
              Explored RAG pipelines, prompt
              engineering, and observability.
            </li>

          </ul>
        </section>

        <section>
          <h3>
            Executive Head – Event Management
          </h3>

          <h4>
            CSI Society, MAIT
          </h4>

          <p>
            Led planning and execution of technical
            events and student engagement programs.
          </p>

          <ul>
            <li>
              Organized multiple technical events
              including a Microsoft Hackathon.
            </li>

            <li>
              Coordinated volunteers across
              departments.
            </li>

            <li>
              Managed event execution and outreach
              activities.
            </li>

            <li>
              Helped increase student participation
              through engagement initiatives.
            </li>

          </ul>
        </section>

      </div>

    </div>
  );
}

export default ExperienceWindow;