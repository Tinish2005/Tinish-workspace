from retrieval import get_relevant_context


queries = [
    "MCP",
    "RAG",
    "Python",
    "Agentic AI",
    "DeepHire"
]

for query in queries:

    print("\n" + "=" * 60)
    print(f"QUERY: {query}")
    print("=" * 60)

    result = get_relevant_context(query)

    print(result)