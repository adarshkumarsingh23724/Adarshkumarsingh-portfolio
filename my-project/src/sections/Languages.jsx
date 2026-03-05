import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect, useState, useMemo } from "react";

const languagesData = [
  {
    language: "English",
    proficiency: "Proficient",
  },
  {
    language: "Hindi",
    proficiency: "Proficient",
  },
  {
    language: "German",
    proficiency: "Beginner",
  },
];

function LanguageItem({ lang, idx, start, end, scrollYProgress, layout }) {
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
          className="z-10 w-7 h-7 rounded-full bg-cyan-400 shadow-[0_0_0_8px_rgba(34,211,238,0.15)]"
          style={{ scale, opacity }}
        />
        <motion.div
          className={`absolute ${
            idx % 2 === 0 ? "-top-8" : "-bottom-8"
          } w-[3px] bg-cyan-400/40`}
          style={{ height: 40, opacity }}
        />
        <motion.article
          className={`absolute ${
            idx % 2 === 0 ? "bottom-12" : "top-12"
          } bg-gray-900/80 backdrop-blur border border-cyan-700/50 rounded-xl p-7 w-[320px] shadow-lg`}
          style={{ opacity, y, maxWidth: "90vw" }}
          transition={{ duration: 0.4, delay: idx * 0.15 }}
        >
          <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
            {lang.language}
          </h3>
          <p className="text-md text-cyan-200 mb-1">{lang.proficiency}</p>
        </motion.article>
      </div>
    );
  }

  return (
    <div className="relative flex items-start">
      <motion.div
        className="absolute left-[14px] top-3 z-10 w-7 h-7 rounded-full bg-cyan-400 shadow-[0_0_0_8px_rgba(34,211,238,0.15)]"
        style={{ scale, opacity }}
      />
      <motion.article
        className="bg-gray-900/80 backdrop-blur border border-cyan-700/50 rounded-xl p-5 w-[90vw] max-w-sm ml-6 shadow-lg"
        style={{ opacity, x }}
        transition={{ duration: 0.4, delay: idx * 0.15 }}
      >
        <h3 className="text-lg font-semibold break-words text-cyan-300">
          {lang.language}
        </h3>
        <p className="text-sm text-cyan-200/80 mb-1 break-words">
          {lang.proficiency}
        </p>
      </motion.article>
    </div>
  );
}

export default function Languages() {
  const sceneRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const SCENE_HEIGHT_VH = isMobile
    ? 160 + languagesData.length
    : 120 * languagesData.length;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const thresholds = useMemo(
    () => languagesData.map((_, i) => (i + 1) / languagesData.length),
    [languagesData],
  );

  const lineSize = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="languages" className="relative bg-black text-white">
      <div
        ref={sceneRef}
        style={{ height: `${SCENE_HEIGHT_VH}vh`, minHeight: "120vh" }}
        className="relative"
      >
        <div className="sticky top-0 h-screen flex flex-col">
          <h2 className="text-4xl sm:text-5xl font-semibold mt-10 mb-5 text-center px-4">
            Languages
          </h2>
          <div className="flex flex-1 items-center justify-center px-6 pb-10">
            {!isMobile && (
              <div className="relative w-full max-w-5xl">
                <div className="relative h-[6px] bg-cyan-400/15 rounded">
                  <motion.div
                    className="absolute left-0 top-0 h-[6px] bg-cyan-400 rounded origin-left shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{ width: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex justify-between mt-0">
                  {languagesData.map((lang, idx) => (
                    <LanguageItem
                      key={idx}
                      lang={lang}
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
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-cyan-400/15 rounded">
                  <motion.div
                    className="absolute top-0 left-0 w-[6px] bg-cyan-400 rounded origin-top shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    style={{ height: lineSize }}
                  ></motion.div>
                </div>
                <div className="relative flex flex-col gap-10 ml-10 mt-6 pb-28">
                  {languagesData.map((lang, idx) => (
                    <LanguageItem
                      key={idx}
                      lang={lang}
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
