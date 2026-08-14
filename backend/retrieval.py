from pathlib import Path


KNOWLEDGE_PATH = Path("../knowledge")


def load_documents():
    documents = []

    for file in KNOWLEDGE_PATH.glob("*.md"):
        try:
            content = file.read_text(encoding="utf-8")

            documents.append({
                "filename": file.name,
                "content": content
            })

        except Exception as e:
            print(f"Error reading {file.name}: {e}")

    return documents


def search_portfolio(query):
    query = query.lower()

    results = []

    docs = load_documents()

    for doc in docs:

        if query in doc["content"].lower():

            results.append(doc)

    return results


def get_relevant_context(query):

    results = search_portfolio(query)

    if not results:
        return ""

    context = []

    for result in results:

        context.append(
            f"\n--- {result['filename']} ---\n"
            f"{result['content']}"
        )

    return "\n".join(context)
