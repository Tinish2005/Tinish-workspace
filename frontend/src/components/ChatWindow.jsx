import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const portfolioContext = `
You are Ask Tinish.

You are NOT ChatGPT.

You are Tinish's interactive portfolio guide.

ABOUT TINISH

Tinish is a Computer Science student at
Maharaja Agrasen Institute of Technology (MAIT).

He is currently a GenAI Intern at NIIT Limited.

He enjoys building practical AI systems,
agent architectures, RAG applications,
and developer tools.

SKILLS

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

EXPERIENCE

GenAI Intern
NIIT Limited

Executive Head
Event Management
CSI Society

PROJECTS

AI Engineering Review Platform

An MCP-powered platform that performs:
- code review
- maintainability analysis
- security checks
- engineering scoring
- company rule validation

AI GitHub Agent

Repository-aware AI agent using:
Planner → Executor → Validator

DeepHire

AI-powered interview assessment platform.

Uses:
- Resume Analysis
- NLP
- Speech Assessment
- Coding Evaluation
- Computer Vision

RAG PDF Chatbot

Chat with PDF documents using:
- LangChain
- ChromaDB
- Gemini

Heart Disease Prediction

Machine Learning application
for heart disease risk prediction.

PERSONALITY

Speak naturally.

Keep answers short.

Keep answers interesting.

Do not sound like LinkedIn.

Do not sound like a resume.

Do not say:
"Based on the provided information"

Do not say:
"According to the portfolio"

Answer like a human introducing Tinish's work.

Use 2-5 sentences normally.

When answering:
"What is DeepHire?"

Explain:
- What it is
- Why it was built

When answering:
"Who is Tinish?"

Give a short introduction.

Only use information provided above.

Do not invent unknown facts.
`;

function ChatWindow({
  onClose,
  openResume,
  openExperience,
  openAIProjects,
  openMLProjects
}) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey 👋 I'm Ask Tinish. Ask me about projects, skills, experience, or anything from my portfolio."
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userQuestion = input;
    const query = userQuestion.toLowerCase();

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

      /* CUSTOM RESPONSES */

      if (query.includes("who is tinish")) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Tinish is an AI-focused Computer Science student at MAIT and currently a GenAI Intern at NIIT. He enjoys building practical AI systems such as DeepHire, AI GitHub Agent, and the AI Engineering Review Platform."
          }
        ]);
        return;
      }

      if (query.includes("what is deephire")) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "DeepHire is an AI-powered interview assessment platform built by Tinish. It combines resume analysis, NLP, speech assessment, coding evaluation, and computer vision to create a smarter hiring workflow."
          }
        ]);
        return;
      }

      /* WORKSPACE COMMANDS */

      if (
        query.includes("open resume") ||
        query === "resume"
      ) {
        openResume();
        onClose();
        return;
      }

      if (
        query.includes("open experience") ||
        query === "experience"
      ) {
        openExperience();
        onClose();
        return;
      }

      if (
        query.includes("show ai projects") ||
        query.includes("open ai projects") ||
        query.includes("ai projects") ||
        query.includes("show ai")
      ) {
        openAIProjects();
        onClose();
        return;
      }

      if (
        query.includes("show ml projects") ||
        query.includes("open ml projects") ||
        query.includes("ml projects") ||
        query.includes("show ml")
      ) {
        openMLProjects();
        onClose();
        return;
      }

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
    } catch (error) {
      console.error("Gemini Error:", error);

      let errorMessage =
        "Sorry, I'm temporarily unavailable right now.";

      if (
        error?.message?.includes("429") ||
        error?.message?.includes("quota")
      ) {
        errorMessage =
          "I've reached my Gemini usage limit for now. Please try again later.";
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: errorMessage
        }
      ]);
    } finally {
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

    {/* SUGGESTED QUESTIONS */}

    <div className="suggested-questions">

      <button
        onClick={() =>
          setInput("Who is Tinish?")
        }
      >
        Who is Tinish?
      </button>

      <button
        onClick={() =>
          setInput("What is DeepHire?")
        }
      >
        What is DeepHire?
      </button>

      <button
        onClick={() =>
          setInput("Tell me about AI GitHub Agent")
        }
      >
        AI GitHub Agent
      </button>

      <button
        onClick={() =>
          setInput("What skills does Tinish have?")
        }
      >
        Skills
      </button>

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

      <button onClick={handleSend}>
        Send
      </button>

    </div>

  </div>
);
}

export default ChatWindow;