"use client";

import { motion } from "framer-motion";

// Add your certificates here!
const CERTIFICATES = [
  {
    id: "internship",
    title: "AI Developer Internship",
    issuer: "CYPWNG Software Technologies",
    date: "Sep 2025",
    link: "/Intern_Certificate_R.pdf",
    iconType: "code"
  },
  {
    id: "deloitte-da",
    title: "Data Analytics Certificate",
    issuer: "Deloitte",
    date: "Oct 2025",
    link: "/certificates/Deloitte_DA_certif.pdf",
    iconType: "data"
  },
  {
    id: "ey",
    title: "AI Skill Certification",
    issuer: "EY & Microsoft",
    date: "Oct 2025",
    link: "/certificates/EY_certificate.pdf",
    iconType: "ai"
  },
  {
    id: "gen-ai",
    title: "Generative AI Internship",
    issuer: "AICTE & EduSkills",
    date: "Jul-Sep 2025",
    link: "/certificates/Gen_AI.pdf",
    iconType: "ai"
  },
  {
    id: "ai-getting-started",
    title: "Getting Started with AI",
    issuer: "IBM SkillBuild",
    date: "Nov 2024",
    link: "/certificates/GettingStartedwithArtificialIntelligence.pdf",
    iconType: "ai"
  },
  {
    id: "intro-ml",
    title: "Introduction to Machine Learning",
    issuer: "Infosys",
    date: "Dec 2023",
    link: "/certificates/Intro_to_Ml_certifi.pdf",
    iconType: "ai"
  },
  {
    id: "intro-ds",
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "Aug 2025",
    link: "/certificates/Introduction_to_Data_Science.pdf",
    iconType: "data"
  },
  {
    id: "ml-algo",
    title: "Machine Learning Algorithms",
    issuer: "SimpliLearn",
    date: "Sep 2024",
    link: "/certificates/ML_algo_certifi.pdf",
    iconType: "ai"
  },
  {
    id: "python-coder",
    title: "Python Coder",
    issuer: "Kaggle",
    date: "Sep 2024",
    link: "/certificates/Python_Coder.png",
    iconType: "code"
  },
  {
    id: "python-cert",
    title: "Python Certificate",
    issuer: "Infosys",
    date: "Jun 2024",
    link: "/certificates/python_certificate.pdf",
    iconType: "code"
  },
  {
    id: "python-basic",
    title: "Python Basic Certificate",
    issuer: "HackerRank",
    date: "Dec 2023",
    link: "/certificates/python_basic_certificate.pdf",
    iconType: "code"
  },
  {
    id: "walmart",
    title: "Advanced	Software	Engineering	Job Simulation",
    issuer: "Walmart",
    date: "Nov 2025",
    link: "/certificates/Walmart.pdf",
    iconType: "generic"
  },
  {
    id: "mindluster",
    title: "Python for Machine Learning Projects",
    issuer: "Mindluster",
    date: "Apr 2025",
    link: "/certificates/Mindluster_Certificate.pdf",
    iconType: "generic"
  },
  {
    id: "workshop",
    title: "Workshop on Full Stack Development",
    issuer: "Innomatics Research Labs",
    date: "Apr-May 2025",
    link: "/certificates/workshop_certif.pdf",
    iconType: "generic"
  }
];

const ICONS: Record<string, JSX.Element> = {
  ai: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>,
  cloud: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
  data: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>,
  code: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  generic: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
};

export default function Certificates() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden border-t border-white/5" id="certificates">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.8 }}
           className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            <span className="text-blue-500">Certificates.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-6 backdrop-blur-sm"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
               <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 text-blue-400">
                 {ICONS[cert.iconType as keyof typeof ICONS] || ICONS.generic}
               </div>
               <div className="relative z-10">
                 <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                 <p className="text-sm font-medium text-purple-400 mb-1">{cert.issuer}</p>
                 <p className="text-sm text-gray-400">{cert.date}</p>
               </div>
               
               <div className="relative z-10 mt-auto pt-4 flex items-center gap-2 text-blue-400 text-sm font-bold group-hover:text-white transition-colors">
                 View Certificate 
                 <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
               </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
