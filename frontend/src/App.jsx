import { motion } from "framer-motion";
import {
  FaFileAlt,
  FaBrain,
  FaLaptopCode,
  FaBriefcase,
  FaGithub,
  FaRobot
} from "react-icons/fa";

import "./App.css";

const desktopAnimation = {
  whileTap: {
    scale: 0.90
  }
};
function App() {
  return (
    <div className="workspace">

      <div className="top-bar">
        Tinish Workspace
      </div>

      {/* LEFT */}

      <motion.div
        className="icon-resume desktop-icon"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaFileAlt />
        </div>
        <p>Resume.pdf</p>
      </motion.div>

      <motion.div
        className="icon-ai desktop-icon icon-pop"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaBrain />
        </div>
        <p>AI Projects</p>
      </motion.div>

      <motion.div
        className="icon-ml desktop-icon icon-pop"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaLaptopCode />
        </div>
        <p>ML Projects</p>
      </motion.div>

      <motion.div
        className="icon-github desktop-icon"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaGithub />
        </div>
        <p>GitHub</p>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        className="icon-chat desktop-icon"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaRobot />
        </div>
        <p>Ask Tinish</p>
      </motion.div>

      <motion.div
        className="icon-exp desktop-icon icon-pop"
        {...desktopAnimation}
      >
        <div className="icon">
          <FaBriefcase />
        </div>
        <p>Experience</p>
      </motion.div>

      {/* HERO */}

      <div className="hero">

        <motion.h3
          className="hero-subtitle"
          whileHover={{ scale: 1.05 }}
        >
          Hey, I'm Tinish 👋 Welcome to my
        </motion.h3>

        <motion.h1
          className="hero-title"
          whileHover={{ scale: 1.08 }}
        >
          TINISH
          <br />
          WORKSPACE
        </motion.h1>

      </div>

      {/* DOCK */}

      <div className="dock">

        <div className="dock-item">📄</div>
        <div className="dock-item">🧠</div>
        <div className="dock-item">💻</div>
        <div className="dock-item">🤖</div>
        <div className="dock-item">🐙</div>

      </div>

    </div>
  );
}

export default App;