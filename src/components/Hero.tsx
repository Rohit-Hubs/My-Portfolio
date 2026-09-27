import Image from "next/image";
export default function Hero() {
  return (
    <section className="hero container" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> Open to AI engineering opportunities
        </p>
        <p className="intro">Hi, I’m Rohith Kumar.</p>
        <h1>
          I turn ideas
          <br />
          into <em>intelligent</em>
          <br />
          experiences.
        </h1>
        <p className="hero-description">
          AI &amp; ML engineer building thoughtful applications, intelligent
          agents, and the backends that bring them to life.
        </p>
        <div className="actions">
          <a className="button primary" href="#projects">
            Explore my work <span aria-hidden="true">↗</span>
          </a>
          <a
            className="button secondary"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-meta">
          <span>Hyderabad, India</span>
          <span>Python · AI agents · Full stack</span>
        </div>
      </div>
      <div className="portrait-wrap">
        <div className="portrait-frame">
          <Image
            src="/Linkedin_prof.png"
            alt="Rohith Kumar smiling, wearing glasses and a black T-shirt"
            fill
            priority
            sizes="(max-width: 760px) 90vw, 40vw"
            className="portrait"
          />
          <div className="portrait-caption">
            <span>Rohith Kumar Chelluboina</span>
            <span>AI &amp; Machine Learning Engineer</span>
          </div>
        </div>
        <div className="portrait-label">
          CURIOUS BY NATURE. BUILDER BY CHOICE.
        </div>
      </div>
      <div className="hero-bottom">
        <span>FROM AN IDEA TO SOMETHING USEFUL</span>
        <a href="#projects">
          Scroll to discover <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
