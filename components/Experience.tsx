"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiCode, FiCalendar, FiChevronDown } from "react-icons/fi";
import type { Experience } from "@/interfaces/formation";
import { experiences } from "@/_helpers/const";

function ExperienceCard({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [expanded, setExpanded] = useState(true);

  const typeLabel = exp.type === "stage" ? "Stage" : exp.type === "emploi" ? "Emploi" : "Projet";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className="absolute -left-[25px] top-6 w-3 h-3 bg-black hidden md:block" />

      <div className="border border-black hover:bg-black transition-all duration-300 ml-0 md:ml-6 p-6 group">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-1 border border-black group-hover:border-white text-black group-hover:text-white transition-colors">
                {typeLabel}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#777] group-hover:text-[#ccc] transition-colors">
                <FiCalendar size={11} />
                {exp.period}
              </div>
            </div>
            <h3 className="text-lg font-bold text-black group-hover:text-white mt-2 transition-colors">{exp.role}</h3>
            <p className="text-[#333] group-hover:text-[#ddd] font-semibold text-sm transition-colors">{exp.company}</p>
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-black group-hover:text-white transition-colors mt-1"
          >
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiChevronDown size={20} />
            </motion.div>
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <ul className="mt-4 space-y-2">
            {exp.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#333] group-hover:text-[#ddd] transition-colors">
                <span className="w-1.5 h-1.5 bg-black group-hover:bg-white mt-1.5 flex-shrink-0 transition-colors" />
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-5">
            {exp.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 border border-black group-hover:border-white text-black group-hover:text-white transition-colors"
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
    <section id="experience" className="relative bg-white border-t border-black">
      <div className="bg-black py-8 md:py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-black uppercase text-white leading-[0.85] text-[clamp(2.2rem,7vw,4.5rem)]">
            EXPÉRIENCES <span className="block sm:inline text-[clamp(1.4rem,4vw,2.6rem)]">&amp; PROJETS</span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-[#333] leading-relaxed">
            J&apos;ai grandi comme développeur chez Sygalin - du backend Laravel à la migration Vue.js,
            en passant par un stage embarqué et du traitement de données scientifiques chez SAINA
            Engineering. Aujourd&apos;hui je suis en contrat étudiant chez ALDI, à côté de mon Pré-MSc Pro.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 mb-16">
          {[
            { value: "4", label: "Stages réalisés" },
            { value: "3+", label: "Années d'expérience" },
            { value: "1", label: "CDI décroché" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="border border-black p-5 text-center"
            >
              <div className="font-display text-3xl font-black text-black mb-1">{stat.value}</div>
              <div className="text-xs text-[#777] uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-black ml-[-1px] hidden md:block" style={{ left: '1px' }} />

          <div className="flex flex-col gap-6">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 border border-black p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 border border-black flex items-center justify-center flex-shrink-0">
            <FiCode size={22} className="text-black" />
          </div>
          <div>
            <h4 className="text-black font-bold">Agile / SCRUM au quotidien</h4>
            <p className="text-[#555] text-sm">
              Sprints, daily stand-ups, rétrospectives - le rythme normal chez Sygalin depuis 2022.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
