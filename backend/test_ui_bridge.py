from validator import execute_tool
from ui_bridge import create_ui_action


tests = [

    {
        "tool": "open_project",
        "project": "deephire"
    },

    {
        "tool": "open_resume"
    },

    {
        "tool": "list_skills"
    },

    {
        "tool": "open_experience"
    }

]


for test in tests:

    print("\n" + "=" * 60)
    print("INPUT:")
    print(test)

    validated = execute_tool(test)

    result = create_ui_action(validated)

    print("\nOUTPUT:")
    print(result)