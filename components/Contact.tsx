"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "ngouibrahim3@gmail.com",
    href: "mailto:ngouibrahim3@gmail.com",
    color: "#6366f1",
  },
  {
    icon: FiPhone,
    label: "Téléphone",
    value: "06 10 73 82 81",
    href: "tel:+33610738281",
    color: "#a855f7",
  },
  {
    icon: FiMapPin,
    label: "Localisation",
    value: "Caudéran, Bordeaux",
    href: "#",
    color: "#ec4899",
  },
];

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    handle: "lil-iby",
    href: "https://github.com/lil-iby",
    color: "#ffffff",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    handle: "Ibrahim NGOU PARE",
    href: "https://www.linkedin.com/in/ibrahim-ngou-pare-a582b9251/",
    color: "#0a66c2",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative bg-[#111118]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <FiSend size={14} />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Travaillons <span className="gradient-text">ensemble</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Je suis à la recherche d&apos;une alternance en développement fullstack pour{" "}
            <span className="text-white font-semibold">septembre 2026</span>. N&apos;hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div className="flex flex-col gap-6">
            {/* Contact cards */}
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group bg-[#16161f] border border-[#1e1e2e] hover:border-[#6366f1]/50 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon size={20} style={{ color: info.color }} />
                </div>
                <div>
                  <span className="text-xs text-[#94a3b8] font-medium block mb-0.5">{info.label}</span>
                  <span className="text-sm font-semibold text-white group-hover:text-[#818cf8] transition-colors">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}

            {/* Socials */}
            <div className="flex gap-4 mt-2">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex-1 bg-[#16161f] border border-[#1e1e2e] hover:border-[#6366f1]/50 rounded-2xl p-4 flex flex-col items-center gap-2 transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <s.icon size={22} style={{ color: s.color }} />
                  <span className="text-xs font-bold text-white">{s.label}</span>
                  <span className="text-xs text-[#94a3b8]">{s.handle}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-8 flex flex-col justify-between"
          >
            {/* Header */}
            <div>
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Open à une alternance
              </h3>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Étudiant ingénieur au CESI Bordeaux, je recherche une alternance en
                développement fullstack à partir de septembre 2026. Motivé, curieux et
                toujours prêt à relever de nouveaux défis.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Fullstack", "Vue.js", "Next.js", "Laravel", "Bordeaux"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:ngouibrahim3@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
              >
                <FiMail size={16} />
                Envoyer un email
              </a>
              <a
                href="tel:+33610738281"
                className="flex-1 flex items-center justify-center gap-2 border border-[#1e1e2e] hover:border-[#6366f1] text-[#94a3b8] hover:text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 hover:scale-105"
              >
                <FiPhone size={16} />
                Appeler
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-[#1e1e2e] flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[#94a3b8] text-sm">
          © 2026 Ibrahim NGOU PARE. Tous droits réservés.
        </span>
        <span className="text-[#94a3b8] text-sm">
          Construit avec{" "}
          <span className="text-[#6366f1] font-semibold">Next.js</span> &{" "}
          <span className="text-[#6366f1] font-semibold">Tailwind CSS</span>
        </span>
      </div>
    </section>
  );
}
