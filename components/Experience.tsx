"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiBriefcase, FiCode, FiCalendar, FiChevronDown } from "react-icons/fi";

type Experience = {
  type: "stage" | "projet";
  role: string;
  company: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];
  color: string;
};

const experiences: Experience[] = [
  {
    type: "stage",
    role: "Développeur Frontend",
    company: "SYDALIN SAS (CSI)",
    period: "2024",
    description: [
      "Développement d'interfaces modernes avec Vue.js et Next.js",
      "Communication et intégration d'une API externe",
      "Collaboration en équipe en méthodologie Agile",
    ],
    tags: ["Vue.js", "Next.js", "API REST", "Agile"],
    color: "#42b883",
  },
  {
    type: "stage",
    role: "Développeur Web — Migration Auth",
    company: "SYDALIN SAS",
    period: "2023",
    description: [
      "Migration du service d'authentification de PHP vers Vue.js 3",
      "Refactoring et modernisation de l'architecture frontend",
      "Tests et validation des nouvelles fonctionnalités",
    ],
    tags: ["Vue.js 3", "PHP", "Authentication", "Migration"],
    color: "#6366f1",
  },
  {
    type: "stage",
    role: "Développeur Web — Backend",
    company: "SYDALIN SAS",
    period: "2022",
    description: [
      "Développement du backend d'un service de paiement en ligne avec Laravel",
      "Développement frontend et communication API avec Vue.js",
      "Travail en équipe et montée en compétences",
    ],
    tags: ["Laravel", "Vue.js", "Paiement en ligne", "API"],
    color: "#a855f7",
  },
  {
    type: "stage",
    role: "Développeur Logiciel",
    company: "SAINA ENGINEERING",
    period: "2021",
    description: [
      "Développement d'un outil de post-traitement de données scientifiques",
      "Mise en place d'une architecture et d'un pipeline de gestion des versions en local",
      "Installation et configuration de réseau local (gilets sur réseau local de l'entreprise)",
    ],
    tags: ["Python", "Data Processing", "Git", "Réseau"],
    color: "#f59e0b",
  },
  {
    type: "projet",
    role: "Développeur Embarqué",
    company: "POCL Balise MOBILIS",
    period: "Projet académique",
    description: [
      "Programmation d'un microcontrôleur ESP32 avec MicroPython",
      "Développement d'une IHM de tableau météo interactif",
      "Intégration de capteurs et affichage de données en temps réel",
    ],
    tags: ["ESP32", "MicroPython", "IoT", "IHM"],
    color: "#ec4899",
  },
];

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(true);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-[25px] top-6 w-4 h-4 rounded-full border-2 border-[#0a0a0f] hidden md:block"
        style={{ backgroundColor: exp.color }}
      />

      <div className="bg-[#16161f] border border-[#1e1e2e] hover:border-[#6366f1]/40 rounded-2xl p-6 transition-all duration-300 ml-0 md:ml-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
              >
                {exp.type === "stage" ? "Stage" : "Projet"}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#94a3b8]">
                <FiCalendar size={11} />
                {exp.period}
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mt-2">{exp.role}</h3>
            <p className="text-[#6366f1] font-semibold text-sm">{exp.company}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-[#94a3b8] hover:text-white transition-colors mt-1"
          >
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown size={20} />
            </motion.div>
          </button>
        </div>

        {/* Content */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ backgroundColor: exp.color }}
                />
                {item}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full bg-[#1e1e2e] text-[#94a3b8] border border-[#2a2a3e]"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative bg-[#111118]">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <FiBriefcase size={14} />
            Expériences & Projets
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mon <span className="gradient-text">parcours</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Plusieurs stages en développement fullstack et des projets qui ont forgé mon expertise technique.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { value: "4+", label: "Stages réalisés" },
            { value: "3+", label: "Années d'études" },
            { value: "5+", label: "Projets livrés" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="bg-[#16161f] border border-[#1e1e2e] rounded-2xl p-5 text-center"
            >
              <div className="text-3xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-xs text-[#94a3b8]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#6366f1] via-[#a855f7] to-transparent ml-[-1px] hidden md:block" style={{ left: '1px' }} />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* Projet spécial ESP32 highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 rounded-2xl p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#6366f1]/20 flex items-center justify-center flex-shrink-0">
            <FiCode size={22} className="text-[#6366f1]" />
          </div>
          <div>
            <h4 className="text-white font-bold">Méthodologie Agile / SCRUM</h4>
            <p className="text-[#94a3b8] text-sm">
              Appliquée dans mes stages avec sprints, daily stand-ups et rétrospectives.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
