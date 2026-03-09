import { motion } from "framer-motion";

export default function Education() {
    const educationData = [
        {
            degree: "B.Tech - Information Technology",
            institution:
                "Gokaraju Rangaraju Institute of Engineering and Technology - Hyderabad",
            duration: "(2023-27)",
        },
        {
            degree: "Senior Secondary",
            institution: "Kendriya Vidyalaya Picket - Hyderabad",
            duration: "(2021-23)",
        },
    ];

    const certificationsData = [
        {
            title: "Fundamentals To Digital Marketing",
            issuer: "Google",
        },
        {
            title: "Introduction to Cyber Security",
            issuer: "Cisco Networking Academy",
        },
    ];

    return (
        <section
            id="education"
            className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
        >
            {/* Cinematic Hotstar Top Glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[500px] bg-gradient-to-b from-pink-900/30 via-fuchsia-900/15 to-transparent blur-[120px] rounded-full opacity-80"></div>
            </div>

            {/* Heading */}
            <div className="text-center mb-16 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl sm:text-5xl font-semibold"
                >
                    Education & Certifications
                </motion.h2>
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-4 mx-auto h-[3px] w-32 bg-gradient-to-r from-blue-400 to-cyan-500 rounded origin-left"
                />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Education Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                            Education
                        </h3>
                    </div>

                    {educationData.map((edu, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-blue-500/10"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50 group-hover:bg-blue-400 transition-colors" />
                            <div className="flex justify-between items-start flex-col sm:flex-row sm:items-center gap-2 mb-3">
                                <h4 className="text-lg font-bold text-white/90">
                                    {edu.degree}
                                </h4>
                                <span className="text-sm font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {edu.duration}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {edu.institution}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* Certifications Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col gap-6"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                        </svg>
                        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-teal-300">
                            Certifications
                        </h3>
                    </div>

                    {certificationsData.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group relative flex flex-col bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-cyan-500/10 h-full"
                        >
                            <div className="absolute top-0 right-0 w-1 h-full bg-cyan-500/50 group-hover:bg-cyan-400 transition-colors" />
                            <div className="flex flex-col h-full justify-center">
                                <h4 className="text-lg font-bold text-white/90 mb-2">
                                    {cert.title}
                                </h4>
                                <p className="text-cyan-400/80 text-sm font-medium">
                                    {cert.issuer}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
