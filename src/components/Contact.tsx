"use client";
import { useState, type FormEvent } from "react";
export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">06 / WHAT’S NEXT?</p>
          <h2>
            Good things start
            <br />
            with a <em>hello.</em>
          </h2>
          <p className="contact-description">
            Looking for an AI engineer, have a project in mind, or just want to
            talk tech? I’d love to hear from you.
          </p>
          <a className="email-link" href="mailto:chelluboinarohit1@gmail.com">
            chelluboinarohit1@gmail.com ↗
          </a>
          <div className="social-links">
            <a
              href="https://github.com/Rohit-Hubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/rohith-kumar-chelluboina/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://leetcode.com/u/R0hith_kumar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode ↗
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <div className="form-row">
            <label>
              Your name
              <input
                name="name"
                placeholder="How should I call you?"
                autoComplete="name"
                required
                maxLength={120}
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={254}
              />
            </label>
          </div>
          <label>
            What are you thinking?
            <textarea
              name="message"
              placeholder="Tell me about the opportunity or your idea…"
              rows={5}
              required
              maxLength={5000}
            />
          </label>
          <button className="button primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"}
            <span aria-hidden="true">↗</span>
          </button>
          <p
            className={`form-status ${status}`}
            role="status"
            aria-live="polite"
          >
            {status === "success"
              ? "Message sent successfully. Thank you for reaching out — I’ll reply by email."
              : status === "error"
                ? "Your message couldn’t be sent. Please try again or use the email link."
                : "I’ll get back to you by email."}
          </p>
        </form>
      </div>
    </section>
  );
}
