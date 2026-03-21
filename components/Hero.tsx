"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";

const socialLinks = [
  {
    icon: FiGithub,
    href: "https://github.com/lil-iby",
    label: "GitHub",
  },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/ibrahim-ngou-pare-a582b9251/",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:ngouibrahim3@gmail.com",
    label: "Email",
  },
];

const techBadges = [
  "Next.js", "Vue.js", "React", "Laravel", "Docker", "TypeScript", "Python"
];

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-100" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Disponible pour alternance — Septembre 2026
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white mb-4 leading-none tracking-tight"
            >
              Ibrahim{" "}
              <span className="gradient-text">NGOU PARE</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-[#94a3b8] font-medium mb-6"
            >
              Étudiant Ingénieur en Informatique
              <span className="text-[#6366f1]"> CESI Bordeaux</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#94a3b8] text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Curieux et motivé, je recherche une{" "}
              <span className="text-white font-semibold">alternance en développement fullstack</span>{" "}
              pour septembre 2026. Passionné par la création d&apos;interfaces modernes et le développement backend.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <span className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                <FiMapPin className="text-[#6366f1]" /> Caudéran, Bordeaux
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                <FiPhone className="text-[#6366f1]" /> 06 10 73 82 81
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#94a3b8]">
                <FiMail className="text-[#6366f1]" /> ngouibrahim3@gmail.com
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                Me contacter
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="flex items-center gap-2 border border-[#1e1e2e] hover:border-[#6366f1] text-[#94a3b8] hover:text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                <HiDownload className="text-[#6366f1]" />
                Voir mes projets
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-[#16161f] border border-[#1e1e2e] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#6366f1] transition-all duration-200 hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-8"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-40 scale-110" />
              <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/pp.jpeg"
                    alt="Ibrahim NGOU PARE"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 w-5 h-5 bg-green-400 rounded-full border-2 border-[#0a0a0f] shadow-lg shadow-green-400/50 animate-pulse" />
            </div>

            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="bg-[#16161f] border border-[#1e1e2e] text-[#94a3b8] text-xs font-medium px-3 py-1.5 rounded-full hover:border-[#6366f1] hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#94a3b8] tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-[#6366f1] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
