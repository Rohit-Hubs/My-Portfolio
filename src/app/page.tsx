import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Certificates from "@/components/Certificates";
import Dock from "@/components/Dock";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";



export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <Hero />
      <About />
      <Projects />

      <Skills />
      <Timeline />
      <Certificates />
      <Dock />
      <Contact />
      <Chatbot />
    </main>
  );
}
