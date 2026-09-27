export default function About() {
  return (
    <section className="section container about-section" id="about">
      <div>
        <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
        <h2>
          Curiosity leads.
          <br />
          <span className="muted">Code follows.</span>
        </h2>
      </div>
      <div className="about-copy">
        <p className="lead">
          I’m a Computer Science graduate specialising in Artificial
          Intelligence &amp; Machine Learning, with a hands-on approach to
          turning ideas into working software.
        </p>
        <p>
          My work connects AI models with the things people actually use: clear
          interfaces, useful APIs, and reliable backends. I enjoy building with
          Python, exploring agent workflows, and making complex systems easier
          to understand.
        </p>
        <p>
          From retrieval-augmented generation to full-stack web applications, I
          learn best by building, testing, and improving.
        </p>
        <a className="text-link" href="#contact">
          Have something in mind? Let’s connect ↗
        </a>
      </div>
    </section>
  );
}
