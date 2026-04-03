import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiX, FiAward } from "react-icons/fi";
import cert1 from "../assets/certificate1.jpeg";
import cert2 from "../assets/certificate2.jpeg";
import cert3 from "../assets/certificate 3.pdf";

const achievements = [
    {
        icon: "🥇",
        title: "1st Place – ORBITEX Competition",
        project: "NOVA 2026 | ACM – GRIET",
        subtitle: "Technical Quiz · Debugging · Coding Contest",
        description:
            "Secured 1st place at ORBITEX, NOVA 2026 organised by the ACM student chapter of Gokaraju Rangaraju Institute of Engineering & Technology, excelling across three rigorous rounds testing problem-solving and teamwork.",
        link: null,
        certificate: cert1,
        certType: "image",
        tags: ["ACM", "Competitive Programming", "Teamwork"],
    },
    {
        icon: "🥉",
        title: "3rd Position – HackSavvy-26",
        project: "TranspoCarbon | MGIT Hyderabad",
        subtitle: "24-Hour National Level Hackathon · Feb 2026",
        description:
            "Built TranspoCarbon, a decentralized carbon-credit marketplace integrating real-time NDVI & rainfall data for carbon sequestration modeling.",
        link: "https://github.com/adarshkumarsingh23724",
        certificate: cert2,
        certType: "image",
        tags: ["GeoSpatial", "Carbon Credits", "Decentralized"],
    },
    {
        icon: "🎖️",
        title: 'NCC Certificate "A" & "B"',
        project: "National Cadet Corps",
        subtitle: "Completed during college",
        description:
            "Involved training in leadership, physical fitness, and social service activities.",
        link: null,
        certificate: cert3,
        certType: "pdf",
        tags: ["Leadership", "Discipline", "Service"],
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Achievements() {
    const [lightbox, setLightbox] = useState(null);

    const handleViewCert = (ach) => {
        if (ach.certType === "pdf") {
            window.open(ach.certificate, "_blank");
        } else {
            setLightbox(ach.certificate);
        }
    };

    return (
        <>
            <section
                id="achievements"
                className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
            >
                {/* Glow orbs */}
                <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-700/10 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-pink-700/10 blur-3xl" />

                {/* Heading */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-semibold"
                    >
                        Achievements
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 mx-auto h-[3px] w-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded origin-left"
                    />
                </div>

                {/* Cards */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {achievements.map((ach, i) => (
                        <motion.article
                            key={i}
                            custom={i}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -6, transition: { duration: 0.25 } }}
                            className="group relative flex flex-col bg-gray-900/70 backdrop-blur border border-gray-700/60 rounded-2xl p-7 shadow-lg overflow-hidden cursor-default"
                        >
                            {/* Hover glow ring */}
                            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-1 group-hover:ring-purple-500/50 transition-all duration-300" />
                            {/* Top accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Icon row + optional GitHub link */}
                            <div className="flex items-start justify-between mb-4">
                                <span className="text-4xl">{ach.icon}</span>
                                {ach.link && (
                                    <a
                                        href={ach.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white border border-gray-600 hover:border-gray-400 rounded-full px-3 py-1 transition-all duration-200"
                                    >
                                        <FiGithub size={12} />
                                        GitHub
                                    </a>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold leading-snug mb-1">{ach.title}</h3>

                            {/* Project name */}
                            <p className="text-sm text-purple-400 font-medium mb-1">{ach.project}</p>

                            {/* Subtitle */}
                            {ach.subtitle && (
                                <p className="text-xs text-gray-500 italic mb-3">{ach.subtitle}</p>
                            )}

                            {/* Description */}
                            <p className="text-sm text-gray-300 leading-relaxed flex-1">{ach.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {ach.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-gray-600/50 text-gray-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* View Certificate button */}
                            {ach.certificate && (
                                <button
                                    onClick={() => handleViewCert(ach)}
                                    className="mt-5 flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-medium text-purple-300 border border-purple-500/40 bg-purple-500/5 hover:bg-purple-500/15 hover:border-purple-400/70 hover:text-white transition-all duration-250"
                                >
                                    <FiAward size={14} />
                                    View Certificate
                                </button>
                            )}
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Lightbox modal for image certificates */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        key="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox}
                                alt="Certificate"
                                className="w-full object-contain"
                            />
                            <button
                                onClick={() => setLightbox(null)}
                                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all duration-200"
                                aria-label="Close certificate"
                            >
                                <FiX size={18} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
