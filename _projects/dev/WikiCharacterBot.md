---
layout: page
title: WikiCharacterBot
description: <strong>Intelligent Wikipedia-Powered RAG Chatbot</strong><br>
  <em>Jan 2026</em> <br>
  An intelligent chatbot that fetches Wikipedia content and uses RAG (Retrieval-Augmented Generation) to answer questions about people, characters, and topics. Built with OpenAI's function calling, ChromaDB vector database, and Gradio web interface.
img: assets/img/WikiCharacterBot/screenshot.png
importance: 1
category: dev
redirect: https://github.com/tienbui1508/WikiCharacterBot
toc:
  sidebar: left
featured: true
short_description: RAG-powered chatbot that answers questions using Wikipedia content and semantic search.
website: https://huggingface.co/spaces/tienbui1508/WikiCharacterBot
---

`Python`
`OpenAI API`
`GPT-4o-mini`
`RAG`
`ChromaDB`
`Vector Database`
`Gradio`
`Wikipedia API`
`Embeddings`
`Function Calling`
`LLM`
`Hugging Face Spaces`
`VS Code`
`GitHub`

---

## Overview

WikiCharacterBot demonstrates **Retrieval-Augmented Generation (RAG)** combined with **OpenAI's function calling** capabilities. The chatbot intelligently fetches Wikipedia content, indexes it in a vector database, and uses semantic search to provide accurate, sourced answers.

## Key Features

- **Wikipedia Integration**: Automatically fetches and embeds Wikipedia articles
- **RAG Architecture**: ChromaDB vector database for intelligent context retrieval
- **Function Calling**: Leverages OpenAI's function calling for automated tool use
- **Web Interface**: Beautiful Gradio UI for seamless interaction
- **Persistent Storage**: ChromaDB maintains indexed content locally
- **Multi-turn Conversations**: Maintains chat history for coherent dialogues

## Technical Stack

- **LLM**: OpenAI GPT-4o-mini with function calling
- **Vector DB**: ChromaDB with persistent local storage
- **Embeddings**: ChromaDB's DefaultEmbeddingFunction
- **Web Framework**: Gradio for interactive UI
- **Data Source**: Wikipedia API for content retrieval

## How It Works

1. User submits a question via the web interface
2. OpenAI GPT-4o-mini uses function calling to decide which tools to use
3. `fetch_wiki_content()` retrieves relevant Wikipedia articles
4. Content is embedded and stored in ChromaDB collection
5. `query_rag()` performs semantic search for relevant context
6. GPT-4o-mini generates an answer grounded in retrieved context
7. Response appears in chat interface with full conversation history

## Usage

Run the web application:

```bash
python app.py
```

Launch the CLI version:

```bash
python WikiCharacterBot.py
```

## Setup

1. Install dependencies:

```bash
pip install -r requirements.txt
```

2. Create `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

3. Run the application and start asking questions about your favorite people and characters!

## Learning Value

This project is ideal for understanding:

- **OpenAI Function Calling**: Real-world tool integration with LLMs
- **RAG Patterns**: Building reliable systems with external knowledge
- **Vector Databases**: Semantic search and embedding management
- **Multi-turn Conversations**: Managing stateful LLM interactions
- **API Integration**: Combining multiple APIs for cohesive solutions

---
