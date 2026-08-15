import { useState } from "react";
import { motion } from "framer-motion";

import ProjectExplorer from "./components/ProjectExplorer";
import ProjectShowcase from "./components/ProjectShowcase";
import ResumeWindow from "./components/ResumeWindow";
import ExperienceWindow from "./components/ExperienceWindow";
import ChatWindow from "./components/ChatWindow";

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
    scale: 0.9
  }
};

function App() {
  const [openFolder, setOpenFolder] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [showResume, setShowResume] = useState(false);
  const [showExperience, setShowExperience] = useState(false);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="workspace">

      <div className="top-bar">
        Tinish Workspace
      </div>

      {/* RESUME */}

      <motion.div
        className="icon-resume desktop-icon"
        {...desktopAnimation}
        onClick={() => setShowResume(true)}
      >
        <div className="icon">
          <FaFileAlt />
        </div>

        <p>Resume.pdf</p>
      </motion.div>

      {/* AI PROJECTS */}

      <motion.div
        className="icon-ai desktop-icon icon-pop"
        {...desktopAnimation}
        onClick={() => setOpenFolder("AI")}
      >
        <div className="icon">
          <FaBrain />
        </div>

        <p>AI Projects</p>
      </motion.div>

      {/* ML PROJECTS */}

      <motion.div
        className="icon-ml desktop-icon icon-pop"
        {...desktopAnimation}
        onClick={() => setOpenFolder("ML")}
      >
        <div className="icon">
          <FaLaptopCode />
        </div>

        <p>ML Projects</p>
      </motion.div>

      {/* GITHUB */}

      <motion.div
        className="icon-github desktop-icon"
        {...desktopAnimation}
        onClick={() =>
          window.open(
            "https://github.com/Tinish2005",
            "_blank"
          )
        }
      >
        <div className="icon">
          <FaGithub />
        </div>

        <p>GitHub</p>
      </motion.div>

      {/* ASK TINISH */}

      <motion.div
        className="icon-chat desktop-icon"
        {...desktopAnimation}
        onClick={() => setShowChat(true)}
      >
        <div className="icon">
          <FaRobot />
        </div>

        <p>Ask Tinish</p>
      </motion.div>

      {/* EXPERIENCE */}

      <motion.div
        className="icon-exp desktop-icon icon-pop"
        {...desktopAnimation}
        onClick={() => setShowExperience(true)}
      >
        <div className="icon">
          <FaBriefcase />
        </div>

        <p>Experience</p>
      </motion.div>

      {/* HERO */}

      <div className="hero">

        <h3 className="hero-subtitle">
          Hey, I'm Tinish 👋 Welcome to my
        </h3>

        <h1 className="hero-title">
          TINISH
          <br />
          WORKSPACE
        </h1>

      </div>

      {/* PROJECT EXPLORER */}

      {openFolder && (
        <ProjectExplorer
          projectType={openFolder}
          onClose={() => setOpenFolder(null)}
          onSelectProject={(project) =>
            setSelectedProject(project)
          }
        />
      )}

      {/* PROJECT SHOWCASE */}

      {selectedProject && (
        <ProjectShowcase
          project={selectedProject}
          onClose={() =>
            setSelectedProject(null)
          }
        />
      )}

      {/* RESUME WINDOW */}

      {showResume && (
        <ResumeWindow
          onClose={() =>
            setShowResume(false)
          }
        />
      )}

      {/* EXPERIENCE WINDOW */}

      {showExperience && (
        <ExperienceWindow
          onClose={() =>
            setShowExperience(false)
          }
        />
      )}

      {/* CHAT WINDOW */}

      {showChat && (
        <ChatWindow
  onClose={() =>
    setShowChat(false)
  }
  openResume={() =>
    setShowResume(true)
  }
  openExperience={() =>
    setShowExperience(true)
  }
  openAIProjects={() =>
    setOpenFolder("AI")
  }
  openMLProjects={() =>
    setOpenFolder("ML")
  }
/>
      )}

      {/* DOCK */}

      <div className="dock">

        <div
          className="dock-item"
          onClick={() => setShowResume(true)}
        >
          📄
        </div>

        <div
          className="dock-item"
          onClick={() => setOpenFolder("AI")}
        >
          🧠
        </div>

        <div
          className="dock-item"
          onClick={() => setOpenFolder("ML")}
        >
          💻
        </div>

        <div
          className="dock-item"
          onClick={() => setShowChat(true)}
        >
          🤖
        </div>

        <div
          className="dock-item"
          onClick={() =>
            window.open(
              "https://github.com/Tinish2005",
              "_blank"
            )
          }
        >
          🐙
        </div>

      </div>

    </div>
  );
}

export default App;