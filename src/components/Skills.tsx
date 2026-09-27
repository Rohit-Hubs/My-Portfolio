const groups = [
  {
    name: "AI & intelligence",
    icon: "✳",
    description: "Models, agents, and retrieval workflows.",
    skills: [
      "LangChain",
      "LangGraph",
      "RAG",
      "LLMs",
      "Prompt engineering",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NLP",
    ],
  },
  {
    name: "Applications & APIs",
    icon: "</>",
    description: "From a responsive interface to its backend.",
    skills: [
      "Python",
      "JavaScript",
      "React",
      "Django",
      "FastAPI",
      "Flask",
      "HTML & CSS",
      "REST APIs",
    ],
  },
  {
    name: "Data & infrastructure",
    icon: "⊞",
    description: "The foundations that keep things running.",
    skills: [
      "PostgreSQL",
      "SQLite",
      "FAISS",
      "BM25",
      "Pandas",
      "NumPy",
      "Docker",
      "Kubernetes",
      "Google Cloud",
      "Git",
    ],
  },
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
