const items = [
  {
    date: "MAR — SEP 2025",
    type: "EXPERIENCE",
    title: "AI Developer Intern",
    org: "CYPWNG Software Technologies",
    text: "Built Python feature-extraction microservices and GenAI RAG pipelines, working with LangChain, Docker, Kubernetes, and Google Cloud CI/CD.",
  },
  {
    date: "2023 — 2026",
    type: "EDUCATION",
    title: "B.Tech · Artificial Intelligence & Machine Learning",
    org: "Sphoorthy Engineering College, JNTUH",
    text: "Computer Science and Engineering with a focus on AI/ML fundamentals, neural networks, and AI infrastructure.",
  },
  {
    date: "2019 — 2022",
    type: "EDUCATION",
    title: "Diploma · Mechanical Engineering",
    org: "BVC Institute of Technology & Science, SBTET",
    text: "Developed a practical foundation in engineering, technical problem-solving, and continuous learning.",
  },
];
export default function Timeline() {
  return (
    <section className="section container" id="journey">
      <div className="section-heading">
        <div>
          <p className="eyebrow">04 / THE JOURNEY</p>
          <h2>Learning. Building. Evolving.</h2>
        </div>
      </div>
      <div className="timeline">
        {items.map((i) => (
          <article className="timeline-row" key={i.title}>
            <div className="timeline-date">
              {i.date}
              <span>{i.type}</span>
            </div>
            <div>
              <h3>{i.title}</h3>
              <p className="organisation">{i.org}</p>
              <p>{i.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
