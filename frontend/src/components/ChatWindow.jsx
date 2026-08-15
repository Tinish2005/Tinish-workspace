function ChatWindow({ onClose }) {
  return (
    <div className="showcase-window">
      <div className="showcase-header">
        <h2>Ask Tinish</h2>

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>
      </div>

      <div className="showcase-content">

        <section>
          <h3>AI Assistant Coming Soon</h3>

          <p>
            The full AI assistant will be available in
            Loop 12.

            It will answer questions about:
          </p>

          <ul>
            <li>Projects</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Resume</li>
          </ul>

        </section>

      </div>
    </div>
  );
}

export default ChatWindow;