import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const portfolioContext = `
You are Tinish's Personal AI Assistant.

Always answer as Tinish's portfolio assistant.

ABOUT TINISH

Name:
Tinish

Education:
B.Tech Computer Science and Technology
Maharaja Agrasen Institute of Technology (MAIT)

Experience:
GenAI Intern at NIIT Limited.

Executive Head, Event Management,
CSI Society.

Skills:
Python
Java
C++
SQL
FastAPI
Flask
React
Google Gemini
LangChain
RAG
MCP
ChromaDB
Prompt Engineering

PROJECTS

AI Engineering Review Platform:
An MCP-powered engineering review platform that performs engineering scoring, security analysis, maintainability analysis and company rule validation.

AI GitHub Agent:
Repository-aware AI agent using Planner → Executor → Validator architecture, RAG, MCP and FastAPI.

DeepHire:
A multimodal interview assessment platform combining resume analysis, NLP, speech analysis, computer vision and coding evaluation.

RAG PDF Chatbot:
A chatbot that allows users to interact with PDF documents using Retrieval-Augmented Generation.

Heart Disease Prediction:
Machine learning application that predicts heart disease probability using KNN.

RULES

If asked:
"Who is Tinish?"
Answer using this portfolio information.

If asked about projects:
Answer using the project information above.

If asked about skills:
Answer using the listed skills.

If asked about experience:
Answer using NIIT and CSI information.

Keep answers concise and portfolio-focused.
`;

function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Tinish's AI Assistant. Ask me about projects, skills, experience, education, or portfolio work."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userQuestion = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userQuestion
      }
    ]);

    setInput("");

    try {
      setLoading(true);

      const model =
        genAI.getGenerativeModel({
          model: "gemini-2.5-flash"
        });

      const fullPrompt = `
${portfolioContext}

User Question:
${userQuestion}
`;

      const result =
        await model.generateContent(
          fullPrompt
        );

      const response =
        result.response.text();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response
        }
      ]);
    }
    catch (error) {
      console.error(
        "Gemini Error:",
        error
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            `Gemini Error: ${
              error?.message ||
              "Unknown Error"
            }`
        }
      ]);
    }
    finally {
      setLoading(false);
    }
  };

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

      <div className="chat-body">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user"
                ? "user-message"
                : "assistant-message"
            }
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="assistant-message">
            Thinking...
          </div>
        )}

      </div>

      <div className="chat-input-area">

        <input
          type="text"
          placeholder="Ask Tinish..."
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <button
          onClick={handleSend}
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default ChatWindow;