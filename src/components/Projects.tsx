const projects = [
  {
    number: "01",
    name: "Rennto",
    category: "LIVE ANDROID APP",
    description: "Simplifying rental life for owners and tenants.",
    detail:
      "A property and tenant management app available on Google Play. Rennto brings property, room, and bed management together with tenant onboarding, occupancy tracking, rental records, and service requests. Dedicated owner and tenant dashboards keep everyday rental operations organized in one place.",
    tags: ["Android", "Property management", "Tenant onboarding"],
    repo: null,
    playStore: "https://play.google.com/store/apps/details?id=in.rennto.app",
    style: "mint",
    stages: ["Manage properties", "Onboard tenants", "Track rental operations"],
  },
  {
    number: "02",
    name: "IntelliAgent",
    category: "MULTI-AGENT RAG",
    description: "Make your documents a conversation.",
    detail:
      "A document assistant with LangGraph workflows, hybrid semantic and keyword retrieval, conversational memory, and page-level citations.",
    tags: ["LangGraph", "FAISS + BM25", "Streamlit", "Groq"],
    repo: "https://github.com/Rohit-Hubs/Multi_Agent_RAG_Assistant",
    style: "mint",
    stages: ["Your documents", "Hybrid retrieval", "Grounded answers"],
  },
  {
    number: "03",
    name: "AI Memory Agent",
    category: "CONVERSATIONAL AI",
    description: "An assistant that remembers the context.",
    detail:
      "A Python agent that connects Gemini, conversation memory, and external APIs through a FastAPI backend and LangChain workflows.",
    tags: ["Python", "FastAPI", "LangChain", "Gemini API"],
    repo: "https://github.com/Rohit-Hubs/AI-Agent",
    style: "blue",
    stages: ["Conversation", "Memory + tools", "Contextual response"],
  },
  {
    number: "04",
    name: "Visa2Book",
    category: "FULL-STACK DEVELOPMENT",
    description: "Connecting interfaces with intelligence.",
    detail:
      "A responsive web application with Django form handling and backend routing, plus AI components for pattern recognition and recommendations.",
    tags: ["Django", "Python", "JavaScript", "AI integration"],
    repo: null,
    style: "amber",
    stages: ["Web interface", "Django backend", "AI recommendations"],
  },
];
export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / SELECTED WORK</p>
          <h2>Built with purpose.</h2>
        </div>
        <p>
          A few projects at the intersection
          <br className="desktop-break" /> of AI and real-world applications.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article className={`project-card ${p.style}`} key={p.name}>
            <div className="project-visual">
              <div className="project-kicker">
                <span>{p.category}</span>
                <span>{p.number}</span>
              </div>
              <div className="architecture" aria-label={`${p.name} workflow`}>
                {p.stages.map((stage, i) => (
                  <div key={stage}>
                    <span className="stage-index">0{i + 1}</span>
                    <span>{stage}</span>
                  </div>
                ))}
              </div>
              <span className="visual-caption">{p.playStore ? "AVAILABLE ON GOOGLE PLAY" : "SYSTEM OVERVIEW"}</span>
            </div>
            <div className="project-body">
              <h3>{p.name}</h3>
              <p className="project-summary">{p.description}</p>
              <div className="tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {p.playStore && (
                <a
                  className="text-link"
                  href={p.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get Rennto on Google Play"
                >
                  Get it on Google Play 
                </a>
              )}
              <details>
                <summary>
                  Explore the project <span aria-hidden="true">+</span>
                </summary>
                <p>{p.detail}</p>
                {p.repo && (
                  <a
                    className="text-link"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View source on GitHub 
                  </a>
                )}
              </details>
            </div>
          </article>
        ))}
      </div>
      <a
        className="text-link all-work"
        href="https://github.com/Rohit-Hubs"
        target="_blank"
        rel="noopener noreferrer"
      >
        More on GitHub
      </a>
    </section>
  );
}
