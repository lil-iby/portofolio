"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { skills } from "@/_helpers/const";
import type { Skill } from "@/interfaces/formation";

const categories = ["Frontend", "Backend", "DevOps & Outils"];

const softSkills = [
  "Travail en équipe",
  "Méthode Agile (SCRUM)",
  "Autonomie",
  "Curiosité & apprentissage",
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="group flex items-center gap-3 border border-black px-4 py-3.5 hover:bg-black transition-colors duration-200"
    >
      <div
        className="w-9 h-9 flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${skill.color}15` }}
      >
        <skill.icon size={17} style={{ color: skill.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-black group-hover:text-white truncate transition-colors">{skill.name}</div>
        {skill.note && (
          <div className="text-[11px] text-[#777] group-hover:text-[#ccc] truncate transition-colors">{skill.note}</div>
        )}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative bg-white">
      <div className="bg-black py-8 md:py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-black uppercase text-white leading-[0.85] text-[clamp(2.2rem,7vw,4.5rem)]">
            COMPÉTENCES <span className="block sm:inline text-[clamp(1.4rem,4vw,2.6rem)]">TECHNIQUES</span>
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
            Les outils et langages que j&apos;ai pratiqués en stage, en formation, ou sur mes projets.
          </p>
        </motion.div>

        {categories.map((category) => (
          <div key={category} className="mb-10">
            <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-widest">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {skills
                .filter((s) => s.category === category)
                .map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
            </div>
          </div>
        ))}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-widest">
              Savoir-être
            </h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm font-medium px-4 py-2 border border-black text-black"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-widest">
              Langues
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm border border-black px-4 py-3">
                <span className="text-black font-medium">🇫🇷 Français</span>
                <span className="text-[#777]">Langue maternelle</span>
              </div>
              <div className="flex items-center justify-between text-sm border border-black px-4 py-3">
                <span className="text-black font-medium">🇬🇧 Anglais</span>
                <span className="text-[#777]">Niveau B1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
