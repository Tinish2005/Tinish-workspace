from retrieval import get_relevant_context

from tools import (
    open_project,
    open_resume,
    list_skills,
    open_experience
)


class PortfolioAgent:

    def answer_question(self, question):

        query = question.lower()

        if "resume" in query:
            return open_resume()

        if "skills" in query:
            return list_skills()

        if "experience" in query:
            return open_experience()

        if "mcp" in query:
            return open_project(
                "ai-engineering-reviewer"
            )

        if "github agent" in query:
            return open_project(
                "ai-github-agent"
            )

        if "deephire" in query:
            return open_project(
                "deephire"
            )

        context = get_relevant_context(query)

        if not context.strip():
            return (
                "I don't have information about that in "
                "Tinish's portfolio knowledge base."
            )

        return {
            "tool": "search_portfolio",
            "context": context
        }