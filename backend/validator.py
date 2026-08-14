VALID_TOOLS = [
    "search_portfolio",
    "open_project",
    "open_resume",
    "list_skills",
    "open_experience"
]

VALID_PROJECTS = [
    "ai-engineering-reviewer",
    "ai-github-agent",
    "deephire",
    "rag-pdf-chatbot",
    "heart-disease"
]


def validate_tool(tool_call):

    tool_name = tool_call.get("tool")

    if tool_name not in VALID_TOOLS:

        return {
            "success": False,
            "error": f"Invalid tool: {tool_name}"
        }

    return {
        "success": True
    }


def validate_arguments(tool_call):

    tool_name = tool_call.get("tool")

    if tool_name == "open_project":

        project = tool_call.get("project")

        if project not in VALID_PROJECTS:

            return {
                "success": False,
                "error": f"Invalid project: {project}"
            }

    return {
        "success": True
    }


def execute_tool(tool_call):

    tool_check = validate_tool(tool_call)

    if not tool_check["success"]:
        return tool_check

    arg_check = validate_arguments(tool_call)

    if not arg_check["success"]:
        return arg_check

    return {
        "success": True,
        "action": tool_call
    }