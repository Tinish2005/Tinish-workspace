from agent import PortfolioAgent

agent = PortfolioAgent()

tests = [

    "Open my resume",

    "Show my skills",

    "Show my experience",

    "Show me the MCP project",

    "Open DeepHire",

    "Open AI GitHub Agent"

]

for test in tests:

    print("\n" + "=" * 60)
    print("QUESTION:", test)
    print("=" * 60)

    result = agent.answer_question(test)

    print(result)
