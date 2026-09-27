"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
type Message = { role: "user" | "bot"; content: string };
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hi! I’m Rohith’s AI assistant. Ask me about his projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: "nearest" });
  }, [messages, loading, open]);
  function close() {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }
  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const next: Message[] = [
      ...messages,
      { role: "user", content: input.trim() },
    ];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-20) }),
        signal: AbortSignal.timeout(30000),
      });
      const data = await res.json();
      if (!res.ok || typeof data.content !== "string")
        throw new Error("Unavailable");
      setMessages([...next, { role: "bot", content: data.content }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "bot",
          content:
            "I’m unable to reply right now. You can explore Rohith’s projects below or email chelluboinarohit1@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }
  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          className="chat-launcher"
          onClick={() => setOpen(true)}
          aria-expanded={false}
          aria-controls="portfolio-chat"
        >
          <span aria-hidden="true">✳</span> Ask my AI
        </button>
      )}
      {open && (
        <section
          className="chat-panel"
          id="portfolio-chat"
          aria-label="Chat with Rohith’s AI assistant"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <div className="chat-header">
            <div>
              <h2>Ask Rohith’s AI</h2>
              <p>Projects, experience &amp; skills</p>
            </div>
            <button onClick={close} aria-label="Close AI chat">
              ×
            </button>
          </div>
          <div
            className="chat-messages"
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((m, i) => (
              <p className={`chat-message ${m.role}`} key={i}>
                <span className="sr-only">
                  {m.role === "user" ? "You: " : "Assistant: "}
                </span>
                {m.content}
              </p>
            ))}
            {loading && (
              <p className="chat-message" role="status">
                Thinking…
              </p>
            )}
            <div ref={endRef} />
          </div>
          <form className="chat-input" onSubmit={send}>
            <label className="sr-only" htmlFor="chat-message">
              Your question
            </label>
            <input
              id="chat-message"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my work…"
              maxLength={2000}
              required
              autoComplete="off"
            />
            <button
              disabled={loading || !input.trim()}
              type="submit"
              aria-label="Send question"
            >
              Send
            </button>
          </form>
        </section>
      )}
    </>
  );
}
