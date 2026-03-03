import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const achievements = [
    {
        icon: "🥉",
        title: "2nd Runner-Up – 24-Hour Hackathon",
        project: "TranspoCarbon",
        subtitle: "Decentralized Carbon Marketplace | Digital MRV | Carbon Credit Estimation",
        description:
            "Built TranspoCarbon, a decentralized carbon-credit marketplace integrating real-time NDVI & rainfall data for carbon sequestration modeling.",

        link: "https://github.com/adarshkumarsingh23724",
        tags: ["GeoSpatial", "Carbon Credits", "Decentralized"],
    },
    {
        icon: "🏆",
        title: "Top 10 Finalist – Hackathon",
        project: "Passionet",
        subtitle: "MERN-Based Talent Platform",
        description:
            "Developed Passionet, a MERN-based talent platform with AI chatbot integration, realtime messaging, and secure authentication.",

        link: null,
        tags: ["MERN Stack", "AI Chatbot", "Real-time"],
    },
    {
        icon: "🎖️",
        title: 'NCC Certificate "A" & "B"',
        project: "National Cadet Corps",
        subtitle: "Completed during college",
        description:
            "Involved training in leadership, physical fitness, and social service activities.",

        link: null,
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
    return (
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
                        <p className="text-sm text-gray-300 leading-relaxed">{ach.description}</p>



                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-5">
                            {ach.tags.map((tag) => (
                                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-gray-600/50 text-gray-400">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
