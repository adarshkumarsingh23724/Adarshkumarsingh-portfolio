import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
    { word: "Hello",    lang: "English"   },
    { word: "Hola",     lang: "Spanish"   },
    { word: "Bonjour",  lang: "French"    },
    { word: "नमस्ते",  lang: "Hindi"     },
    { word: "こんにちは", lang: "Japanese" },
    { word: "你好",     lang: "Chinese"   },
];

const WORD_DURATION = 1100; // ms per word — tuned for ~8s total splash

export default function SplashScreen({ onDone }) {
    const [index, setIndex]     = useState(0);
    const [leaving, setLeaving] = useState(false);

    useEffect(() => {
        if (index < greetings.length - 1) {
            const t = setTimeout(() => setIndex((i) => i + 1), WORD_DURATION);
            return () => clearTimeout(t);
        } else {
            // last word — pause then exit
            const t = setTimeout(() => setLeaving(true), WORD_DURATION + 300);
            return () => clearTimeout(t);
        }
    }, [index]);

    useEffect(() => {
        if (leaving) {
            const t = setTimeout(onDone, 600);
            return () => clearTimeout(t);
        }
    }, [leaving, onDone]);

    return (
        <AnimatePresence>
            {!leaving ? (
                <motion.div
                    key="splash"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#000",
                    }}
                >
                    {/* Soft glow */}
                    <div style={{
                        position: "absolute",
                        top: "50%", left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 500, height: 500,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(147,51,234,0.18) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Word */}
                    <div style={{ position: "relative", height: 160, display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={index}
                                initial={{ opacity: 0, scale: 1.08, filter: "blur(12px)" }}
                                animate={{ opacity: 1, scale: 1,    filter: "blur(0px)"  }}
                                exit={{    opacity: 0, scale: 0.92,  filter: "blur(12px)" }}
                                transition={{
                                    duration: 0.4,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                style={{
                                    position: "absolute",
                                    margin: 0,
                                    fontSize: "clamp(3.5rem, 10vw, 6.5rem)",
                                    fontWeight: 800,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1,
                                    background: "linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #818cf8 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    color: "transparent",
                                    userSelect: "none",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                {greetings[index].word}
                            </motion.p>
                        </AnimatePresence>
                    </div>

                    {/* Language name */}
                    <div style={{ position: "relative", height: 32, display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 4 }}>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`lang-${index}`}
                                initial={{ opacity: 0, letterSpacing: "0.35em" }}
                                animate={{ opacity: 1, letterSpacing: "0.22em" }}
                                exit={{    opacity: 0, letterSpacing: "0.10em" }}
                                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                    position: "absolute",
                                    fontSize: "0.72rem",
                                    textTransform: "uppercase",
                                    color: "#6b7280",
                                    userSelect: "none",
                                }}
                            >
                                {greetings[index].lang}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div style={{ display: "flex", gap: 7, marginTop: 52 }}>
                        {greetings.map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    width:           i === index ? 28 : 7,
                                    backgroundColor: i === index ? "#a855f7" : i < index ? "#581c87" : "#1f2937",
                                    opacity:         i <= index ? 1 : 0.4,
                                }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                style={{ height: 7, borderRadius: 99 }}
                            />
                        ))}
                    </div>
                </motion.div>
            ) : (
                /* Circle collapse — same as overlay menu closing */
                <motion.div
                    key="curtain"
                    initial={{ clipPath: "circle(150% at 50% 50%)" }}
                    animate={{ clipPath: "circle(0% at 50% 50%)"   }}
                    transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        backgroundColor: "#000",
                    }}
                />
            )}
        </AnimatePresence>
    );
}
