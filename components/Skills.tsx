"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiNextdotjs, SiVuedotjs, SiReact, SiLaravel, SiDocker,
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss,
  SiMysql, SiGit, SiGithub, SiPhp, SiFirebase, SiAndroidstudio,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";

type Skill = {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
  category: string;
};

const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, level: 80, color: "#ffffff", category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, level: 85, color: "#42b883", category: "Frontend" },
  { name: "React.js", icon: SiReact, level: 75, color: "#61dafb", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, level: 70, color: "#3178c6", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, level: 90, color: "#e34f26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, level: 85, color: "#1572b6", category: "Frontend" },

  { name: "Laravel", icon: SiLaravel, level: 75, color: "#ff2d20", category: "Backend" },
  { name: "PHP", icon: SiPhp, level: 80, color: "#777bb4", category: "Backend" },
  { name: "JavaScript", icon: SiJavascript, level: 85, color: "#f7df1e", category: "Backend" },
  { name: "Python", icon: SiPython, level: 70, color: "#3776ab", category: "Backend" },
  { name: "MySQL / SQL", icon: SiMysql, level: 60, color: "#4479a1", category: "Backend" },

  { name: "Docker", icon: SiDocker, level: 50, color: "#2496ed", category: "DevOps & Outils" },
  { name: "Git", icon: SiGit, level: 75, color: "#f05032", category: "DevOps & Outils" },
  { name: "GitHub", icon: SiGithub, level: 75, color: "#ffffff", category: "DevOps & Outils" },
  { name: "Firebase", icon: SiFirebase, level: 25, color: "#ffca28", category: "DevOps & Outils" },
  { name: "Android Studio", icon: SiAndroidstudio, level: 20, color: "#3ddc84", category: "DevOps & Outils" },
];

const categories = ["Frontend", "Backend", "DevOps & Outils"];

const softSkills = [
  { label: "Travail en équipe", value: 90 },
  { label: "Méthode Agile (SCRUM)", value: 80 },
  { label: "Autonomie", value: 85 },
  { label: "Curiosité & Apprentissage", value: 95 },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative bg-[#16161f] border border-[#1e1e2e] hover:border-[#6366f1]/50 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <skill.icon size={20} style={{ color: skill.color }} />
        </div>
        <div className="flex-1">
          <span className="text-sm font-semibold text-white">{skill.name}</span>
        </div>
        <span className="text-xs text-[#6366f1] font-bold">{skill.level}%</span>
      </div>

      <div className="h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.06 + 0.3, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <FiCode size={14} />
            Compétences
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mon <span className="gradient-text">stack technique</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            Des technologies frontend aux outils DevOps, voici les technologies que j&apos;utilise au quotidien.
          </p>
        </motion.div>

        {categories.map((category) => (
          <div key={category} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-lg font-bold text-[#94a3b8] mb-6 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-[#6366f1]" />
              {category}
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills
                .filter((s) => s.category === category)
                .map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
            </div>
          </div>
        ))}

        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold text-[#94a3b8] mb-8 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-[#6366f1]" />
            Savoir-être
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {softSkills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#16161f] border border-[#1e1e2e] rounded-2xl p-5"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-semibold text-white">{skill.label}</span>
                  <span className="text-xs text-[#6366f1] font-bold">{skill.value}%</span>
                </div>
                <div className="h-2 bg-[#1e1e2e] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { lang: "Français", level: "Langue maternelle", value: 100, flag: "🇫🇷" },
            { lang: "Anglais", level: "Niveau B1", value: 55, flag: "🇬🇧" },
          ].map((l, i) => (
            <motion.div
              key={l.lang}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#16161f] border border-[#1e1e2e] rounded-2xl p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{l.flag}</span>
                <div>
                  <span className="text-sm font-semibold text-white block">{l.lang}</span>
                  <span className="text-xs text-[#94a3b8]">{l.level}</span>
                </div>
              </div>
              <div className="h-2 bg-[#1e1e2e] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
