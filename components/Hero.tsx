"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiDownload } from "react-icons/fi";
import Rosette from "./Rosette";

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
      className="relative overflow-hidden bg-white pt-28"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-start justify-between mb-6 md:mb-10">
          <div className="font-display text-sm font-bold uppercase tracking-wide text-black leading-tight">
            Ibrahim NGOU PARE
            <br />
            <span className="text-[#8a8a8a] font-medium normal-case tracking-normal">06 10 73 82 81</span>
          </div>
          <Rosette size={72} className="text-black -mt-2" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h1 className="font-display font-black uppercase leading-[0.82] tracking-tight text-black text-[clamp(3rem,13vw,8.5rem)]">
            IBRAHIM
          </h1>

          <div className="relative bg-black -mt-[2vw] pt-[3vw] pb-[4vw] md:pt-6 md:pb-8">
            <span className="absolute top-3 right-0 font-display text-[11px] md:text-sm font-bold uppercase tracking-widest text-white text-right leading-tight">
              Développeur
              <br />
              Fullstack
            </span>
            <h1 className="font-display font-black uppercase leading-[0.82] tracking-tight text-white text-[clamp(2.6rem,11.5vw,7.5rem)]">
              NGOU PARE
            </h1>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mt-10 md:mt-14 pb-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="inline-flex items-center gap-2 border border-black text-black text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 bg-black rounded-full animate-pulse" />
              En contrat étudiant chez ALDI — alternance recherchée pour septembre 2026
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#333] text-base md:text-lg leading-relaxed mb-8 max-w-xl"
            >
              Trois ans chez Sygalin m&apos;ont fait passer de la migration d&apos;un service
              d&apos;authentification à la construction d&apos;interfaces complètes en Vue.js et Next.js.
              Aujourd&apos;hui je poursuis mon Pré-MSc Pro à Epitech, en contrat étudiant chez ALDI, et je cherche{" "}
              <span className="text-black font-semibold">mon alternance</span>, à partir de septembre 2026.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
            >
              <span className="flex items-center gap-1.5 text-sm text-[#555]">
                <FiMapPin className="text-black" /> Caudéran, Bordeaux
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#555]">
                <FiPhone className="text-black" /> 06 10 73 82 81
              </span>
              <span className="flex items-center gap-1.5 text-sm text-[#555]">
                <FiMail className="text-black" /> ngouibrahim3@gmail.com
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-black hover:bg-[#222] text-white font-bold uppercase tracking-wide text-sm px-7 py-3.5 transition-all duration-200"
              >
                Me contacter
              </button>
              <a
                href="/CV-Ibrahim-NGOU-PARE.pdf"
                download
                className="flex items-center gap-2 border border-black hover:bg-black hover:text-white text-black font-bold uppercase tracking-wide text-sm px-7 py-3.5 transition-all duration-200"
              >
                <FiDownload />
                Télécharger mon CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-black flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-200"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="flex-shrink-0 flex flex-col items-center gap-6"
          >
            <div className="w-56 h-72 md:w-64 md:h-80 border border-black overflow-hidden">
              <Image
                src="/pp.jpeg"
                alt="Ibrahim NGOU PARE"
                width={256}
                height={320}
                className="w-full h-full object-cover photo-mono"
                priority
              />
            </div>

            <div className="flex flex-wrap gap-2 justify-center max-w-xs">
              {techBadges.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="border border-black text-black text-xs font-bold uppercase tracking-wide px-3 py-1.5 hover:bg-black hover:text-white transition-all duration-200 cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
