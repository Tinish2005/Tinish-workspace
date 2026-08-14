VALID_PROJECTS = [
    "ai-engineering-reviewer",
    "ai-github-agent",
    "deephire",
    "rag-pdf-chatbot",
    "heart-disease"
]


def search_portfolio():
    return {
        "tool": "search_portfolio"
    }


def open_project(project_name):
    return {
        "tool": "open_project",
        "project": project_name
    }


def open_resume():
    return {
        "tool": "open_resume"
    }


def list_skills():
    return {
        "tool": "list_skills"
    }


def open_experience():
    return {
        "tool": "open_experience"
    }