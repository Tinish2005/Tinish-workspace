function ResumeWindow({ onClose }) {
  return (
    <div className="showcase-window">
      <div className="showcase-header">
        <h2>Resume</h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="showcase-content">

        <section>
          <h3>Professional Summary</h3>

          <p>
            GenAI Engineer with hands-on experience building
            Agentic AI systems, RAG pipelines, and MCP-powered
            applications.
          </p>

          <p>
            Computer Science undergraduate at MAIT and
            GenAI Intern at NIIT, focused on building
            production-ready AI applications using
            Python, FastAPI, Flask, Google Gemini,
            LangChain, MCP, and Vector Databases.
          </p>
        </section>

        <section>
          <h3>Education</h3>

          <p>
            B.Tech Computer Science and Technology
            <br />
            Maharaja Agrasen Institute of Technology
            <br />
            2023 - 2027
          </p>
        </section>

        <section>
          <h3>Skills</h3>

          <div className="tech-stack">
            <span className="tech-pill">Python</span>
            <span className="tech-pill">Java</span>
            <span className="tech-pill">C++</span>
            <span className="tech-pill">SQL</span>

            <span className="tech-pill">FastAPI</span>
            <span className="tech-pill">Flask</span>

            <span className="tech-pill">LangChain</span>
            <span className="tech-pill">RAG</span>
            <span className="tech-pill">MCP</span>

            <span className="tech-pill">Google Gemini</span>
            <span className="tech-pill">ChromaDB</span>
            <span className="tech-pill">Prompt Engineering</span>
          </div>
        </section>

        <section>
          <h3>Featured Projects</h3>

          <ul>
            <li>AI Engineering Review Platform</li>
            <li>AI GitHub Agent</li>
            <li>DeepHire</li>
            <li>RAG PDF Chatbot</li>
            <li>Heart Disease Prediction</li>
          </ul>
        </section>

        <section>
          <h3>Links</h3>

          <div className="project-links">

            <a
              href="https://github.com/Tinish2005"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/tinish-550aa32a3"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn"
            >
              LinkedIn
            </a>

            {/* Add Resume PDF button later */}

          </div>
        </section>

      </div>
    </div>
  );
}

export default ResumeWindow;