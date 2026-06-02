"use client";

import { motion } from "framer-motion";

const ICONS = {
  // Icons8 Image CDN for exact size and brand logos
  code: <img src="https://img.icons8.com/color/48/source-code.png" alt="code" className="w-full h-full object-contain drop-shadow-sm" />,
  python: <img src="https://img.icons8.com/color/48/python.png" alt="python" className="w-full h-full object-contain drop-shadow-sm" />,
  django: <img src="https://img.icons8.com/color/48/django.png" alt="django" className="w-full h-full object-contain drop-shadow-sm" />,
  react: <img src="https://img.icons8.com/color/48/react-native.png" alt="react" className="w-full h-full object-contain drop-shadow-sm" />,
  html: <img src="https://img.icons8.com/color/48/html-5--v1.png" alt="html" className="w-full h-full object-contain drop-shadow-sm" />,
  css: <img src="https://img.icons8.com/color/48/css3.png" alt="css" className="w-full h-full object-contain drop-shadow-sm" />,
  js: <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="js" className="w-full h-full object-contain drop-shadow-sm" />,
  fastapi: <img src="https://img.icons8.com/color/48/api.png" alt="fastapi" className="w-full h-full object-contain drop-shadow-sm" />,
  db: <img src="https://img.icons8.com/color/48/database.png" alt="db" className="w-full h-full object-contain drop-shadow-sm" />,
  ai: <img src="https://img.icons8.com/color/48/artificial-intelligence.png" alt="ai" className="w-full h-full object-contain drop-shadow-sm" />,
  tools: <img src="https://img.icons8.com/color/48/maintenance.png" alt="tools" className="w-full h-full object-contain drop-shadow-sm" />,
  cloud_outline: <img src="https://img.icons8.com/color/48/cloud.png" alt="cloud" className="w-full h-full object-contain drop-shadow-sm" />,
  brain: <img src="https://img.icons8.com/color/48/brain.png" alt="brain" className="w-full h-full object-contain drop-shadow-sm" />,
  docker: <img src="https://img.icons8.com/color/48/docker.png" alt="docker" className="w-full h-full object-contain drop-shadow-sm" />,
  gcp: <img src="https://img.icons8.com/color/48/google-cloud.png" alt="gcp" className="w-full h-full object-contain drop-shadow-sm" />,
  flask: <img src="https://img.icons8.com/color/48/flask.png" alt="flask" className="w-full h-full object-contain drop-shadow-sm" />,
  postgresql: <img src="https://img.icons8.com/color/48/postgreesql.png" alt="postgresql" className="w-full h-full object-contain drop-shadow-sm" />,
  git: <img src="https://img.icons8.com/color/48/git.png" alt="git" className="w-full h-full object-contain drop-shadow-sm" />,
  vscode: <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="vscode" className="w-full h-full object-contain drop-shadow-sm" />,
  colab: <img src="https://img.icons8.com/color/48/google-colab.png" alt="colab" className="w-full h-full object-contain drop-shadow-sm" />,
  kubernetes: <img src="https://img.icons8.com/color/48/kubernetes.png" alt="kubernetes" className="w-full h-full object-contain drop-shadow-sm" />,
  numpy: <img src="https://img.icons8.com/color/48/numpy.png" alt="numpy" className="w-full h-full object-contain drop-shadow-sm" />,
  tensorflow: <img src="https://img.icons8.com/color/48/tensorflow.png" alt="tensorflow" className="w-full h-full object-contain drop-shadow-sm" />,
  bug: <img src="https://img.icons8.com/color/48/bug.png" alt="bug" className="w-full h-full object-contain drop-shadow-sm" />,
  mindmap: <img src="https://img.icons8.com/color/48/mind-map.png" alt="mindmap" className="w-full h-full object-contain drop-shadow-sm" />,
  pytorch: <img src="https://img.icons8.com/color/48/fire-element.png" alt="pytorch" className="w-full h-full object-contain drop-shadow-sm" />,
  notebook: <img src="https://img.icons8.com/color/48/notebook.png" alt="notebook" className="w-full h-full object-contain drop-shadow-sm" />,
  custom_brain: <img src="/custom-icons/brain.png" alt="Brain" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  custom_openai: <img src="/custom-icons/openai.png" alt="OpenAI" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  custom_ollama: <img src="/custom-icons/ollama.jpg" alt="Ollama" className="w-full h-full object-contain mix-blend-screen opacity-90" />,
  custom_jupyter: <img src="/custom-icons/jupyter.png" alt="Jupyter" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  custom_pandas: <img src="/custom-icons/pandas.png" alt="Pandas" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new_icon1: <img src="/custom-icons/new_icon1.jpg" alt="Icon 1" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new_icon2: <img src="/custom-icons/new_icon2.jpg" alt="Icon 2" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new_icon3: <img src="/custom-icons/new_icon3.jpg" alt="Icon 3" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new_icon4: <img src="/custom-icons/new_icon4.jpg" alt="Icon 4" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new2_icon1: <img src="/custom-icons/new2_icon1.png" alt="AI Agent" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new2_icon2: <img src="/custom-icons/new2_icon2.png" alt="NLP" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new2_icon3: <img src="/custom-icons/new2_icon3.png" alt="Prompt Engineering" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />,
  new2_icon4: <img src="/custom-icons/new2_icon4.jpg" alt="Data Analysis" className="w-full h-full object-contain mix-blend-screen invert opacity-90" />
};

const skillGroups = [
  {
    category: "Programming & Web Development",
    icon: ICONS.code,
    accent: "from-blue-500/10 to-cyan-500/10",
    border: "border-blue-500/20",
    items: [
      { name: "Python", icon: ICONS.python, color: "text-white" },
      { name: "Django", icon: ICONS.django, color: "text-white" },
      { name: "HTML", icon: ICONS.html, color: "text-white" },
      { name: "React", icon: ICONS.react, color: "text-white" },
      { name: "CSS", icon: ICONS.css, color: "text-white" },
      { name: "JavaScript", icon: ICONS.js, color: "text-white" },
      { name: "FastAPI", icon: ICONS.fastapi, color: "text-white" },
      { name: "Flask", icon: ICONS.flask, color: "text-white" }, 
      { name: "RESTful APIs", icon: ICONS.cloud_outline, color: "text-white" }
    ]
  },
  {
    category: "Databases & Cloud",
    icon: ICONS.cloud_outline,
    accent: "from-indigo-500/10 to-blue-500/10",
    border: "border-indigo-500/20",
    items: [
      { name: "SQLite", icon: ICONS.db, color: "text-white" },
      { name: "PostgreSQL", icon: ICONS.postgresql, color: "text-white" },
      { name: "Google Cloud platform", icon: ICONS.gcp, color: "text-white" },
      { name: "FAISS", icon: ICONS.brain, color: "text-white" },
      { name: "BM25 Hybrid Search", icon: ICONS.code, color: "text-white" }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: ICONS.ai,
    accent: "from-cyan-500/10 to-teal-500/10",
    border: "border-cyan-500/20",
    items: [
      { name: "Machine Learning", icon: ICONS.new_icon2, color: "text-white" },
      { name: "Algorithms", icon: ICONS.new_icon3, color: "text-white" },
      { name: "Neural Networks", icon: ICONS.new_icon4, color: "text-white" },
      { name: "NLP", icon: ICONS.new2_icon2, color: "text-white" },
      { name: "LLMs", icon: ICONS.custom_openai, color: "text-white" },
      { name: "RAG", icon: ICONS.custom_brain, color: "text-white" },
      { name: "RNNs", icon: ICONS.new_icon4, color: "text-white" },
      { name: "Pandas", icon: ICONS.custom_pandas, color: "text-white" },
      { name: "NumPy", icon: ICONS.numpy, color: "text-white" },
      { name: "Scikit-learn", icon: ICONS.ai, color: "text-white" },
      { name: "PyTorch", icon: ICONS.pytorch, color: "text-white" },
      { name: "TensorFlow", icon: ICONS.tensorflow, color: "text-white" },
      { name: "LangChain", icon: ICONS.new_icon1, color: "text-white" },
      { name: "LangGraph", icon: ICONS.new_icon1, color: "text-white" },
      { name: "Fine Tuning", icon: ICONS.custom_openai, color: "text-white" },
      { name: "Ollama", icon: ICONS.custom_ollama, color: "text-white" },
      { name: "AI Agent", icon: ICONS.new2_icon1, color: "text-white" },
      { name: "Prompt Engineering", icon: ICONS.new2_icon3, color: "text-white" },
      { name: "Data Analysis", icon: ICONS.new2_icon4, color: "text-white" }
    ]
  },
  {
    category: "Tools & MLOps",
    icon: ICONS.tools,
    accent: "from-purple-500/10 to-pink-500/10",
    border: "border-purple-500/20",
    items: [
      { name: "Git", icon: ICONS.git, color: "text-white" },
      { name: "VS Code", icon: ICONS.vscode, color: "text-white" },
      { name: "Google Colab", icon: ICONS.colab, color: "text-white" },
      { name: "Jupyter Notebook", icon: ICONS.custom_jupyter, color: "text-white" },
      { name: "Docker", icon: ICONS.docker, color: "text-white" },
      { name: "Kubernetes", icon: ICONS.kubernetes, color: "text-white" },
      { name: "CI/CD Pipelines", icon: ICONS.tools, color: "text-white" },
      { name: "Debugging", icon: ICONS.bug, color: "text-white" },
      { name: "Model Deployment", icon: ICONS.cloud_outline, color: "text-white" },
      { name: "Monitoring", icon: ICONS.db, color: "text-white" }
    ]
  }
];

export default function Skills() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] min-h-screen py-32 px-4 md:px-12 overflow-hidden" id="skills">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="w-full relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive stack enabling end-to-end development of scalable applications and AI models.
          </p>
        </motion.div>

        <div className="space-y-16 mt-20">
          {skillGroups.map((group, idx) => {
            const isLeft = idx % 2 === 0;
            return (
            <motion.div 
              key={idx} 
              className="relative flex flex-col group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-blue-400 border border-white/10 shadow-inner backdrop-blur-md">
                    <div className="w-6 h-6">
                        {group.icon}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{group.category}<span className="text-blue-500">.</span></h3>
              </div>
              
              <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <motion.div
                  className="flex flex-row gap-6 w-max py-4"
                  animate={{ x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"] }}
                  transition={{ duration: 100, ease: "linear", repeat: Infinity }}
                >
                  {[...group.items, ...group.items, ...group.items].map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-[#121212]/90 border border-white/10 hover:border-white/30 hover:bg-white/10 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-default"
                    >
                      <div className={`w-8 h-8 ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <span className="text-lg md:text-xl text-gray-300 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
