const groups = [
  {
    "name": "AI & machine learning",
    "icon": "✳",
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
    "icon": "↗",
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
    "icon": "</>",
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
    "icon": "⊞",
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
    "icon": "⌘",
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
    "icon": "✓",
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
              {g.icon}
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
