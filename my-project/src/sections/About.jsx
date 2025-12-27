import { motion } from "framer-motion";
import profile from "../assets/p.jpg"; // make sure the path is correct

export default function About() {
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-10 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-10 blur-[100px]",
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {glows.map((c, i) => (
          <div
            key={i}
            className={`absolute rounded-full   bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500 animate-pulse ${c}`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col sm:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div
            // className="relative w-[160px] h-[160px] md:w-[400px] md:h-[400px]  
            // rounded-full overflow-hidden shadow-2xl bg-gradient-to-tr from-[#1cd8d2] to-[#302b63]/20 border border-pink-500"
            className="relative w-[160px] h-[160px] md:w-[400px] md:h-[400px]  
  rounded-full overflow-hidden shadow-2xl bg-gradient-to-tr from-[#1cd8d2] to-[#302b63]/60 
  border border-cyan-500 ring-4 ring-cyan-400/40"


            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            <img src={profile} alt="profile" className="absolute inset-0 object-cover" />
          </motion.div>

          {/* FIX: "flex-1-flex-col" is invalid.
              Use a flex container and then apply flex-1 + flex-col. */}
          <div className="flex flex-1 flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent
                bg-gradient-to-r from-blue-400 via-cyan-500 to-indigo-500"
            >
              Adarsh K' Singh
            </h2>
            <p className="mt-2 text-lg sm:text-xl text-white/90 font-semibold">MERN STACK ENTHUSIAST</p>
            <p className="mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl text-justify">
           I am an IT student passionate about technology and innovation.  
My journey blends intelligent systems with modern web development, where I enjoy solving real challenges.  
Machine learning has taught me to think analytically, while full‑stack development sharpened my creative side.  
I thrive on turning ideas into practical, user‑friendly solutions.  
Curiosity and continuous learning drive me to grow and contribute meaningfully in every project.

            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              {/* FIX: Tailwind doesn't have "justify-content".
                  Use "justify-center" and make the button an inline-flex box. */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition"
              >
                View Projects
              </a>

              {/* FIX: Same centering fix for the second button. */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border-white/20 bg-white/10 text-white px-5 py-3 hover:bg-white/20 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}