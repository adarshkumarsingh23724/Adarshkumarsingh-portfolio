import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

const experiences = [
  {
    role: "IEEE GRIET CIS SBC",
    company: "Feb 2025 - Present",
    duration: "",
    description:
      "Promoted from Treasurer to Vice Chair — progressing in chapter leadership and responsibilities.",
    roles: [
      { title: "Vice Chair", period: "Feb 2026 - Present" },
      { title: "Treasurer", period: "Feb 2025 - Feb 2026" },
    ],
  },
  {
    role: "Google Developer Groups on Campus, GRIET",
    company: "Sep 2025 - Present · 2 yrs 4 mos",
    duration: "",
    description: "",
    roles: [
      { title: "Event Management Lead", period: "Sep 2025 - Present · 7 mos" },
      { title: "Event Management", period: "Oct 2024 - Sep 2025 · 1 yr" },
      { title: "Member", period: "Dec 2023 - Sep 2024 · 10 mos" },
    ],
  },
  {
    role: "Technical Team Member",
    company: "E-Cell GRIET",
    duration: "Nov 2024 - Sep 2025",
    description:
      "As a Technical Team Member, I contributed to building and maintaining innovative solutions and collaborated with peers to ensure smooth execution of projects.",
  },
];

function ExperienceItem({ exp, idx, start, end, scrollYProgress, layout }) {
  const scale = useTransform(scrollYProgress, [start, end], [0, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    [idx % 2 === 0 ? 30 : -30, 0],
  );
  const x = useTransform(scrollYProgress, [start, end], [-24, 0]);

  if (layout === "desktop") {
    return (
      <div className="relative flex flex-1 justify-center items-center min-w-0">
        <motion.div
          className="z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
          style={{ scale, opacity }}
        />
        <motion.div
          className={`absolute ${idx % 2 === 0 ? "-top-8" : "-bottom-8"
            } w-[3px] bg-white/40`}
          style={{ height: 40, opacity }}
        />
        <motion.article
          className={`absolute ${idx % 2 === 0 ? "bottom-12" : "top-12"
            } bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-4 w-[300px] shadow-lg`}
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
          <p className="text-base text-gray-400 mb-2">{exp.company}</p>
          {exp.roles ? (
            <div className="flex flex-col gap-2.5 mt-3 pl-4 border-l-2 border-gray-600">
              {exp.roles.map((r, i) => (
                <div key={i}>
                  <p className="text-base font-medium text-gray-200">
                    {r.title}
                  </p>
                  <p className="text-sm text-gray-500">{r.period}</p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className="text-base text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-base text-gray-300 break-words">
                {exp.description}
              </p>
            </>
          )}
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-white shadow-[0_0_0_8px_rgba(255,255,255,0.1)]"
        style={{ scale, opacity }}
      />
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-gray-700/70 rounded-xl p-4 w-[85vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-xl font-semibold break-words">{exp.role}</h3>
        <p className="text-base text-gray-400 mb-2 break-words">
          {exp.company}
        </p>
        {exp.roles ? (
          <div className="flex flex-col gap-2.5 mt-3 pl-4 border-l-2 border-gray-600">
            {exp.roles.map((r, i) => (
              <div key={i}>
                <p className="text-base font-medium text-gray-200">{r.title}</p>
                <p className="text-sm text-gray-500">{r.period}</p>
              </div>
            ))}
          </div>
        ) : (
          <>
            <p className="text-xs text-gray-500 mb-1">{exp.duration}</p>
            <p className="text-sm text-gray-300 break-words">
              {exp.description}
            </p>
          </>
        )}
      </motion.article>
    </div>
  );
}

export default function Experience() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile); // ✅ cleanup
  }, []);

  const SCENE_HEIGHT_VH = isMobile
    ? 160 + experiences.length
    : 120 * experiences.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => experiences.map((_, i) => (i + 1) / experiences.length), // ✅ fixed syntax
    [experiences],
  );

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="experience" className="relative bg-black text-white">
      {/* Cinematic Hotstar Top Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[500px] bg-gradient-to-b from-rose-900/30 via-purple-900/15 to-transparent blur-[120px] rounded-full opacity-80"></div>
      </div>
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-5 text-center">
            Roles &amp; Responsibility
          </h2>
          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full px-8">
                <div className="relative h-[8px] bg-white/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[8px] bg-white rounded origin-left"
                    style={{ width: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="desktop"
                    />
                  ))}
                </div>
              </div>
            )}
            {isMobile && (
              <div className="relative w-full max-w-md">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-white/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-white rounded origin-top"
                    style={{ height: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                  {experiences.map((exp, idx) => (
                    <ExperienceItem
                      key={idx}
                      exp={exp}
                      idx={idx}
                      start={idx === 0 ? 0 : thresholds[idx - 1]}
                      end={thresholds[idx]}
                      scrollYProgress={scrollYProgress}
                      layout="Mobile"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
