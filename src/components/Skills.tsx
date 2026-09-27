const iconPaths: Record<string, string> = {
  brain: "M12 5a3 3 0 0 0-6-1 4 4 0 0 0-3 6 4 4 0 0 0 1 7 4 4 0 0 0 8 2V5Zm0 0a3 3 0 0 1 6-1 4 4 0 0 1 3 6 4 4 0 0 1-1 7 4 4 0 0 1-8 2M6 4v3m12-3v3M5 11h3m11 0h-3M8 16v3m8-3v3",
  search: "M4 3h10l4 4v4M14 3v5h4M4 3v18h7M7 8h3M7 12h4M7 16h2M21 21l-3-3M19 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0",
  code: "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM3 7h18M8 11l-3 3 3 3m8-6 3 3-3 3m-3-7-2 8",
  cloud: "M6 17H5a4 4 0 0 1-1-8 7 7 0 0 1 13-2 5 5 0 0 1 2 10h-1M8 15c0-2 8-2 8 0s-8 2-8 0Zm0 0v6c0 2 8 2 8 0v-6M8 18c0 2 8 2 8 0",
  tools: "M14 6a5 5 0 0 0-6 6L3 17a3 3 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4 3-3ZM16 3l5 5M18 5l-3 3",
  shield: "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6l-9-4ZM8 12l3 3 5-6",
};
function ToolkitIcon({ name }: { name: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={iconPaths[name]} />
    </svg>
  );
}

const groups = [
  {
    "name": "AI & machine learning",
    "icon": "brain",
    "description": "Models, language, and intelligent applications.",
    "skills": [
      "Machine learning",
      "NLP",
      "LLMs",
      "Generative AI",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "NumPy"
    ]
  },
  {
    "name": "Agents & retrieval",
    "icon": "search",
    "description": "Context, memory, and document intelligence.",
    "skills": [
      "LangChain",
      "LangGraph",
      "RAG",
      "AI agents",
      "Prompt engineering",
      "Ollama",
      "Vector databases",
      "FAISS",
      "BM25 / Hybrid search",
      "AI automation"
    ]
  },
  {
    "name": "Applications & APIs",
    "icon": "code",
    "description": "Mobile experiences and connected backends.",
    "skills": [
      "Python",
      "JavaScript",
      "React.js",
      "React Native",
      "Django",
      "FastAPI",
      "HTML",
      "CSS",
      "REST APIs",
      "API integration"
    ]
  },
  {
    "name": "Data & deployment",
    "icon": "cloud",
    "description": "Data foundations and reliable delivery.",
    "skills": [
      "SQL",
      "Google Cloud Platform",
      "Docker",
      "Git",
      "CI/CD pipelines"
    ]
  },
  {
    "name": "Development tools",
    "icon": "tools",
    "description": "Tools for building, exploring, and iterating.",
    "skills": [
      "Visual Studio Code",
      "Google Colab",
      "Jupyter Notebook",
      "Streamlit",
      "AI coding tools"
    ]
  },
  {
    "name": "Engineering practices",
    "icon": "shield",
    "description": "Structure, quality, and maintainable software.",
    "skills": [
      "Data structures & algorithms",
      "Object-oriented programming",
      "Debugging",
      "Unit testing",
      "Agile",
      "SDLC"
    ]
  }
];
export default function Skills() {
  return (
    <section className="section container" id="skills">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / MY TOOLKIT</p>
          <h2>The tools behind the work.</h2>
        </div>
      </div>
      <div className="skills-grid">
        {groups.map((g) => (
          <article className="skill-card" key={g.name}>
            <span className="skill-symbol" aria-hidden="true">
              <ToolkitIcon name={g.icon} />
            </span>
            <h3>{g.name}</h3>
            <p>{g.description}</p>
            <div className="tags">
              {g.skills.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
