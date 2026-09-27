import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <footer className="container site-footer">
        <a className="wordmark" href="#home">
          Rk
        </a>
        <p>© {new Date().getFullYear()} Rohith Kumar Chelluboina</p>
        <a href="#home">Back to top </a>
      </footer>
      <Chatbot />
    </>
  );
}
