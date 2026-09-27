const CERTIFICATES = [
  {
    id: "internship",
    title: "AI Internship",
    issuer: "CYPWNG Software Technologies",
    date: "Sep 2025",
    link: "/Intern_Certificate_R.pdf",
    iconType: "code",
  },
  {
    id: "deloitte-da",
    title: "Data Analytics Certificate",
    issuer: "Deloitte",
    date: "Oct 2025",
    link: "/certificates/Deloitte_DA_certif.pdf",
    iconType: "data",
  },
  {
    id: "ey",
    title: "AI Skill Certification",
    issuer: "EY & Microsoft",
    date: "Oct 2025",
    link: "/certificates/EY_certificate.pdf",
    iconType: "ai",
  },
  {
    id: "gen-ai",
    title: "Generative AI Internship",
    issuer: "AICTE & EduSkills",
    date: "Jul-Sep 2025",
    link: "/certificates/Gen_AI.pdf",
    iconType: "ai",
  },
  {
    id: "ai-getting-started",
    title: "Getting Started with AI",
    issuer: "IBM SkillBuild",
    date: "Nov 2024",
    link: "/certificates/GettingStartedwithArtificialIntelligence.pdf",
    iconType: "ai",
  },
  {
    id: "intro-ml",
    title: "Introduction to Machine Learning",
    issuer: "Infosys",
    date: "Dec 2023",
    link: "/certificates/Intro_to_Ml_certifi.pdf",
    iconType: "ai",
  },
  {
    id: "intro-ds",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Aug 2025",
    link: "/certificates/Introduction_to_Data_Science.pdf",
    iconType: "data",
  },
  {
    id: "ml-algo",
    title: "Machine Learning Algorithms",
    issuer: "SimpliLearn",
    date: "Sep 2024",
    link: "/certificates/ML_algo_certifi.pdf",
    iconType: "ai",
  },
  {
    id: "python-coder",
    title: "Python Coder",
    issuer: "Kaggle",
    date: "Sep 2024",
    link: "/certificates/Python_Coder.png",
    iconType: "code",
  },
  {
    id: "python-cert",
    title: "Python Certificate",
    issuer: "Infosys",
    date: "Jun 2024",
    link: "/certificates/python_certificate.pdf",
    iconType: "code",
  },
  {
    id: "python-basic",
    title: "Python Basic Certificate",
    issuer: "HackerRank",
    date: "Dec 2023",
    link: "/certificates/python_basic_certificate.pdf",
    iconType: "code",
  },
  {
    id: "walmart",
    title: "Advanced	Software	Engineering	Job Simulation",
    issuer: "Walmart",
    date: "Nov 2025",
    link: "/certificates/Walmart.pdf",
    iconType: "generic",
  },
  {
    id: "mindluster",
    title: "Python for Machine Learning Projects",
    issuer: "Mindluster",
    date: "Apr 2025",
    link: "/certificates/Mindluster_Certificate.pdf",
    iconType: "generic",
  },
  {
    id: "workshop",
    title: "Workshop on Full Stack Development",
    issuer: "Innomatics Research Labs",
    date: "Apr-May 2025",
    link: "/certificates/workshop_certif.pdf",
    iconType: "generic",
  },
];

export default function Certificates() {
  return (
    <section className="section container" id="certificates">
      <div className="section-heading">
        <div>
          <p className="eyebrow">05 / ALWAYS LEARNING</p>
          <h2>Learning, with receipts.</h2>
        </div>
        <p>Courses, internships, and practical training.</p>
      </div>
      <div className="certificate-list">
        {CERTIFICATES.slice(0, 4).map((cert) => (
          <a
            key={cert.id}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="certificate-issuer">{cert.issuer}</span>
            <span>{cert.title}</span>
            <span className="certificate-date">{cert.date}</span>
          </a>
        ))}
      </div>
      <details className="more-certificates">
        <summary>
          View all {CERTIFICATES.length} certificates{" "}
          <span aria-hidden="true">+</span>
        </summary>
        <div className="certificate-list">
          {CERTIFICATES.slice(4).map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="certificate-issuer">{cert.issuer}</span>
              <span>{cert.title}</span>
              <span className="certificate-date">{cert.date}</span>
            </a>
          ))}
        </div>
      </details>
    </section>
  );
}
