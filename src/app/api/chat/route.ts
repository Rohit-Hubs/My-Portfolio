import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const SYSTEM_INSTRUCTION = `You are the personal AI assistant for Rohith Kumar Chelluboina, an AI & Machine Learning Engineer based in Hyderabad, India. 
Your goal is to answer questions about Rohith, his experience, projects, and skills in a friendly, concise, and professional tone.

About Rohith:
- Completed an AI Developer Internship at CYPWNG Software Technologies (Mar 2025 - Sep 2025).
- B.Tech in Computer Science (AI & ML) from Sphoorthy Engineering College (2023 - 2026).
- Skills: Python, Java, Django, FastAPI, LangChain, PyTorch, Generative AI, RAG, Docker, Kubernetes, etc.
- Projects: 
  1. Visa2Book (Full Stack with Django and AI components)
  2. AI Memory Agent (Built with FastAPI, LangChain, and Gemini API)
  3. IntelliAgent (Production-quality Multi-Agent RAG system built with LangGraph, Streamlit, FAISS, and Groq LLMs)
- Contact: chelluboinarohit1@gmail.com

Deep Dive on IntelliAgent (Multi-Agent RAG Assistant):
- Architecture: A scalable "chat-with-your-documents" system using a LangGraph-based state machine with three distinct agents.
- 1. Ingestion Agent: Chunks documents and embeds them into dual vector stores using a Hybrid Search approach (FAISS for semantic similarity, BM25 index for exact keyword matching).
- 2. Retrieval Agent: Queries both databases simultaneously, deduplicates context, and passes it to the graph state. Caches vector stores in Streamlit session state for performance.
- 3. Response Agent: Powered by Groq and Llama 3.1. Parses metadata to generate exact page-level citations for every answer, helping users verify responses. Uses chat history for conversational memory.
- Core Skills & Tech: Python, LangChain, LangGraph, Streamlit, RAG, LLMs (Llama 3.1, Groq), HuggingFace Embeddings, FAISS, BM25, Prompt Engineering, Docker.
- Why it's impressive: Uses an enterprise-grade multi-agent workflow rather than a simple linear script, making it reliable, scalable, and easy to debug. Achieved 100% completion rate for an AI engineering assignment.

Keep your answers short and to the point, but if specifically asked about the RAG project or IntelliAgent, use the detailed information above to explain its architecture, the STAR method background, or the exact skills used. Do not make up information that is not listed here. If asked something unrelated, politely decline and pivot back to Rohith's expertise.`;

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Groq API key is not configured" },
        { status: 500 },
      );
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY.trim(), timeout: 20000, maxRetries: 1 });
    const { messages } = await req.json();

    // Map frontend messages to Groq format (role: 'user' | 'assistant' | 'system')
    const groqMessages = [
      { role: "system", content: SYSTEM_INSTRUCTION },
      ...messages.map((m: any) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.content,
      })),
    ];

    const chatCompletion = await groq.chat.completions.create({
      messages: groqMessages,
      model: process.env.GROQ_MODEL || "openai/gpt-oss-120b",
      temperature: 0.7,
      max_completion_tokens: 2048,
    });

    return NextResponse.json({
      content:
        chatCompletion.choices[0]?.message?.content || "No response generated.",
    });
  } catch (error) {
    const status = error instanceof Groq.APIError ? error.status : undefined;
    const code = status === 401 || status === 403 ? "AI_AUTH_ERROR"
      : status === 429 ? "AI_RATE_LIMIT"
      : status === 400 || status === 404 ? "AI_MODEL_ERROR"
      : "AI_UNAVAILABLE";
    console.error("Chat API Error:", { status, code });
    const message = code === "AI_RATE_LIMIT"
      ? "The AI assistant is busy right now. Please try again in a minute."
      : "The AI assistant is temporarily unavailable. Please try again later or email chelluboinarohit1@gmail.com.";
    return NextResponse.json({ error: message, code }, { status: 503 });
  }
}

