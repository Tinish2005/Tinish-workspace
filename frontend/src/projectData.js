const projects = [
  {
    id: "ai-engineering-reviewer",

    title: "AI Engineering Review Platform",

    category: "AI",

    overview:
      "An MCP-powered AI Engineering Review Platform that performs deterministic engineering analysis combined with AI reasoning. The platform evaluates code quality across security, complexity, maintainability, company rules, and engineering best practices before generating actionable recommendations and engineering scores.",

    architecture:
      "React Frontend → Flask Backend → MCP Client → MCP Server → Engineering Analysis Tools → Gemini Reasoning Engine",

    techStack: [
      "React",
      "Vite",
      "Flask",
      "Python",
      "Google Gemini",
      "MCP",
      "LangFuse",
      "AST Analysis",
      "Monaco Editor",
      "Recharts"
    ],

    github:
      "https://github.com/Tinish2005/Ai-engineering-reviewer",

    demo:
      "https://ai-engineering-reviewer.vercel.app/"
  },

  {
    id: "ai-github-agent",

    title: "AI GitHub Agent",

    category: "AI",

    overview:
      "A repository-aware AI agent that indexes GitHub repositories and answers questions with repository-grounded responses. Built using Planner → Executor → Validator architecture, Retrieval-Augmented Generation (RAG), and MCP.",

    architecture:
      "GitHub API → Repository Indexing → AST Parsing → Embeddings → Vector Store → Planner → Executor → Validator → Gemini Reasoning → Response",

    techStack: [
      "Python",
      "FastAPI",
      "React",
      "Google Gemini",
      "RAG",
      "MCP",
      "GitHub API",
      "Pydantic",
      "AST",
      "NumPy"
    ],

    github:
      "https://github.com/Tinish2005/AI-GitHub-Agent",

    demo:
      "https://ai-git-hub-agent.vercel.app/"
  },

  {
    id: "rag-pdf-chatbot",

    title: "RAG PDF Chatbot",

    category: "AI",

    overview:
      "A conversational AI application that allows users to chat with uploaded PDF documents using Retrieval-Augmented Generation. The system retrieves relevant information and generates context-aware answers grounded in document content.",

    architecture:
      "PDF Upload → Document Processing → Embeddings → ChromaDB Vector Store → Retrieval → Mistral LLM → Response",

    techStack: [
      "Streamlit",
      "LangChain",
      "ChromaDB",
      "Google Gemini Embeddings",
      "Mistral AI",
      "Python"
    ],

    github:
      "https://github.com/Tinish2005/rag-chatbot",

    demo: ""
  },

  {
    id: "deephire",

    title: "DeepHire",

    category: "ML",

    overview:
      "A multimodal interview assessment platform designed to evaluate interview performance using text, speech, coding performance, and computer vision signals. The platform combines multiple AI models into a unified assessment pipeline.",

    architecture:
      "Resume Analysis → NLP Evaluation → Speech Assessment → Coding Assessment → Vision Features → Fusion Network → Final Assessment",

    techStack: [
      "Python",
      "DistilBERT",
      "Whisper",
      "OpenCV",
      "MediaPipe",
      "CNN",
      "Deep Learning",
      "Explainable AI"
    ],

    github:
      "https://github.com/Tinish2005/Deephire",

    demo: ""
  },

  {
    id: "heart-disease",

    title: "Heart Disease Prediction System",

    category: "ML",

    overview:
      "A machine learning web application that predicts the likelihood of heart disease based on patient health parameters using a K-Nearest Neighbors model.",

    architecture:
      "Patient Inputs → Data Preprocessing → Feature Scaling → KNN Model → Prediction Output",

    techStack: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "KNN",
      "Joblib"
    ],

    github:
      "https://github.com/Tinish2005/heart-disease-prediction",

    demo: ""
  }
];

export default projects;