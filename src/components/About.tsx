"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden border-t border-white/5" id="about">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
             A glimpse into my background, my philosophy on technology, and the code that drives my passion.
          </p>
        </motion.div>
        
        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]"
        >
            {/* Main Intro Card */}
            <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 group relative rounded-4xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 p-8 md:p-12 backdrop-blur-md">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-500/20 transition-colors duration-700" />
                
                <div className="relative z-10 h-full flex flex-col justify-center space-y-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            Who I Am
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Data</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Intelligent Systems.</span>
                        </h3>
                    </div>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light max-w-3xl">
                        I am a Computer Science and Engineering graduate specializing in Artificial Intelligence & Machine Learning. I have hands-on experience building AI-powered web applications, intelligent automation workflows, and robust backend systems using Python and Django.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light max-w-3xl">
                        My passion lies in developing reliable, production-oriented AI solutions that not only push the boundaries of automation efficiency but also deliver an exceptional and seamless user experience.
                    </p>
                </div>
            </motion.div>

            {/* Terminal Code Card */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 group relative rounded-4xl overflow-hidden bg-[#0d0d0d] border border-white/10 p-6 backdrop-blur-md flex flex-col">
                <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-xs font-mono text-gray-500">developer@rohith: ~</span>
                </div>
                <div className="font-mono text-sm leading-relaxed overflow-hidden">
                    <p className="text-pink-400">import <span className="text-white">skills</span></p>
                    <p className="text-pink-400">import <span className="text-white">passion</span></p>
                    <br />
                    <p className="text-blue-400">def <span className="text-green-400">build_future</span>():</p>
                    <p className="pl-4 text-gray-300">stack = [<span className="text-yellow-300">'Python'</span>, <span className="text-yellow-300">'Django'</span>, <span className="text-yellow-300">'AI/ML'</span>]</p>
                    <p className="pl-4 text-gray-300">while <span className="text-purple-400">True</span>:</p>
                    <p className="pl-8 text-gray-300">learn()</p>
                    <p className="pl-8 text-gray-300">innovate(stack)</p>
                    <p className="pl-8 text-gray-300">deploy()</p>
                    <br />
                    <p className="text-gray-500"># Execute the vision</p>
                    <p className="text-white">build_future()</p>
                    <p className="mt-2 text-green-400 animate-pulse">&gt; Systems initialized...</p>
                </div>
            </motion.div>

            {/* Experience & Philosophy Card */}
            <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 group relative rounded-4xl overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 p-8 backdrop-blur-md flex flex-col justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                
                <div className="relative z-10 flex flex-col h-full justify-center">
                    <h4 className="text-xl font-bold text-white mb-2">My Mission</h4>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        As an AI Engineer and B.Tech student, I'm passionate about building production-ready Generative AI systems. 
                        My focus is on transforming complex architectures—like multi-agent RAG pipelines—into scalable, real-world solutions that drive impact.
                    </p>
                </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
