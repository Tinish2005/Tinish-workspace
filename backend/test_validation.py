from validator import execute_tool

tests = [

    {
        "tool": "open_project",
        "project": "ai-github-agent"
    },

    {
        "tool": "open_project",
        "project": "fake-project"
    },

    {
        "tool": "open_resume"
    },

    {
        "tool": "hack_system"
    }

]

for test in tests:

    print("\n" + "=" * 60)
    print("INPUT:")
    print(test)

    result = execute_tool(test)

    print("\nOUTPUT:")
    print(result)