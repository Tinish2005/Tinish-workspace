from agent import PortfolioAgent

agent = PortfolioAgent()

questions = [
    "What is DeepHire?",
    "What is MCP?",
    "What are Tinish's skills?",
    "What are Tinish's career goals?",
    "What is Tinish's favorite movie?"
]

for question in questions:

    print("\n" + "=" * 70)
    print("QUESTION:", question)
    print("=" * 70)

    answer = agent.answer_question(question)

    print(answer)