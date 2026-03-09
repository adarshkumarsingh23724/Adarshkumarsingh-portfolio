import { useMemo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.webp";
import vid4 from "../assets/vid4.mp4";
import img5 from "../assets/img5.png";

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: "TranspoCarbon",
        link: "https://github.com/Nikhil-p570/transpoCarbon.git",
        image: img1,
        scale: "Macro-scale Ecosystem",
        tag: "Web App + AI",
        description:
          "𝐓𝐫𝐚𝐧𝐬𝐩𝐨𝐂𝐚𝐫𝐛𝐨𝐧 is a decentralized web application incentivizing regenerative agriculture by connecting farmers and corporate buyers. It enables farmers to estimate, verify, and trade carbon credits using real-time satellite environmental data like NDVI and rainfall to calculate carbon sequestration.",
        metrics: [
          { value: "2nd", label: "Runner Up" },
          { value: "MRV", label: "Protocol Used" },
          { value: "NDVI", label: "Satellite Data" },
        ],
        gradient: "from-green-900 to-green-800",
      },
      {
        title: "Smart Research Assistant using RAG",
        link: "https://github.com/adarshkumarsingh23724/Smart-Research-Assistant-using-RAG.git",
        image: img5,
        scale: "Agentic RAG",
        tag: "RAG",
        description:
          "An AI study companion directly linking with Google Classroom. It securely fetches Drive materials into a local ChromaDB, enabling users to query a fully localized DeepSeek LLM. Provides zero-data-leakage answers with exact document citations using HuggingFace embeddings and LangChain.",
        metrics: [
          { value: "Local LLM", label: "DeepSeek R1" },
          { value: "RAG", label: "ChromaDB" },
          { value: "GenAI", label: "Live In-Memory" },
        ],
        gradient: "from-fuchsia-950 to-fuchsia-800",
      },
      {
        title: "Deep Research Agent",
        link: "https://github.com/adarshkumarsingh23724/AI_AGENT.git",
        image: img2,
        scale: "Microservice UI",
        tag: "AI Agent",
        description:
          "A Flask-based intelligent research assistant that autonomously synthesizes complex topics into structured, citation-backed reports. Implements a ReAct-based agentic workflow using LLaMA 3.3 70B for dynamic reasoning and tool selection with multi-source info retrieval.",
        metrics: [
          { value: "LLaMA", label: "3.3 70B" },
          { value: "ReAct", label: "Workflow" },
          { value: "JSON", label: "Strict Output" },
        ],
        gradient: "from-indigo-950 to-indigo-800",
      },
      {
        title: "Labour Connect",
        link: "https://github.com/adarshkumarsingh23724/labour.git",
        image: img3,
        scale: "Mid-scale Application",
        tag: "Full-Stack",
        description:
          "A comprehensive web-based employment platform designed to connect labour workers with employers. Built with the MERN stack, it features secure resume uploads, efficient worker search, and real-time data handling using Cloudinary, cookies, and MongoDB.",
        metrics: [
          { value: "MERN", label: "Tech Stack" },
          { value: "Real-Time", label: "Data Handling" },
          { value: "Secure", label: "Resume Uploads" },
        ],
        gradient: "from-orange-950 to-orange-800",
      },
      {
        title: "Rock vs Mine",
        link: "https://github.com/adarshkumarsingh23724/rock-vs-mine.git",
        video: vid4,
        scale: "Nano-scale Model",
        tag: "Machine Learning",
        description:
          "A machine learning project that classifies whether an object detected by sonar is a rock or a mine. Includes thorough data preprocessing, feature analysis, model training with Logistic Regression / SVM, and deployment as a Streamlit web application for interactive predictions.",
        metrics: [
          { value: "SVM/LR", label: "ML Models" },
          { value: "Sonar", label: "Classification" },
          { value: "Web App", label: "Streamlit UI" },
        ],
        gradient: "from-sky-950 to-sky-800",
      },
    ],
    [],
  );

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles only on the client
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage string
      y: Math.random() * 100,
      size: Math.random() * 4 + 1, // 1px to 5px
      duration: Math.random() * 20 + 10, // 10s to 30s
      delay: Math.random() * 5,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-black text-white"
    >
      {/* Cinematic Hotstar Top Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[500px] bg-gradient-to-b from-fuchsia-900/40 via-purple-900/20 to-transparent blur-[120px] rounded-full opacity-70"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">

        {/* Floating Particles */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400/40"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="h-[1px] w-8 sm:w-12 bg-white/30"></div>
          <h2 className="text-sm sm:text-base font-semibold tracking-widest text-white/50 uppercase">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white/[0.03] backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Media Container */}
              <div
                className={`w-full aspect-video sm:aspect-[16/10] relative overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 lg:p-12 border-b border-white/5`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-20 group-hover:scale-[1.03] transition-transform duration-700 border border-white/10"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] relative z-20 group-hover:scale-[1.03] transition-transform duration-700 border border-white/10"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col p-8 sm:p-10">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm font-medium text-white/40 tracking-wide">
                    {project.scale}
                  </span>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {project.tag}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 mb-4 group-hover:scale-[1.01] transition-transform origin-left">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base mb-8 line-clamp-3">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8 mt-auto">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white/90 font-bold text-lg sm:text-2xl tracking-tight leading-none mb-1 sm:mb-2">
                        {m.value}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-white/40 leading-tight pr-2">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors w-fit gap-2 group/link"
                >
                  View GitHub Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
