"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { formations } from "@/_helpers/const";
import type { Formation } from "@/interfaces/formation";



function FormationCard({ formation, index }: { formation: Formation; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 border transition-all duration-300 ${
        formation.highlight
          ? "bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 glow-border"
          : "bg-[#16161f] border-[#1e1e2e] hover:border-[#6366f1]/40"
      }`}
    >
      {formation.highlight && (
        <div className="absolute -top-3 left-6">
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            En cours ✦
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
            formation.highlight ? "bg-indigo-500/20" : "bg-[#1e1e2e]"
          }`}
        >
          {formation.highlight ? (
            <FiAward size={22} className="text-[#6366f1]" />
          ) : (
            <FiBookOpen size={20} className="text-[#94a3b8]" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                formation.highlight
                  ? "bg-indigo-500/20 text-indigo-300"
                  : "bg-[#1e1e2e] text-[#94a3b8]"
              }`}
            >
              {formation.period}
            </span>
            <span className="text-xs text-[#94a3b8]">• {formation.location}</span>
          </div>

          <h3
            className={`text-lg font-bold mt-2 mb-1 ${
              formation.highlight ? "text-white" : "text-[#e2e8f0]"
            }`}
          >
            {formation.degree}
          </h3>
          <p
            className={`text-sm font-semibold mb-3 ${
              formation.highlight ? "text-[#818cf8]" : "text-[#6366f1]"
            }`}
          >
            {formation.school}
          </p>

          {formation.description && (
            <p className="text-sm text-[#94a3b8] leading-relaxed">{formation.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-sm font-medium px-4 py-2 rounded-full mb-6">
            <FiBookOpen size={14} />
            Formation
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Mon <span className="gradient-text">parcours académique</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
            De l&apos;IUT au cycle ingénieur, une progression continue dans le domaine de l&apos;informatique.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {formations.map((formation, i) => (
            <FormationCard key={i} formation={formation} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-lg font-bold text-[#94a3b8] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#6366f1]" />
            Centres d&apos;intérêt
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { emoji: "🏀", label: "Basketball", sublabel: "Meneur — Poste 1" },
              { emoji: "⚽", label: "Football", sublabel: "Amateur" },
              { emoji: "💻", label: "Développement", sublabel: "Open Source" },
              { emoji: "🎮", label: "Gaming", sublabel: "Stratégie" },
            ].map((interest) => (
              <div
                key={interest.label}
                className="bg-[#16161f] border border-[#1e1e2e] rounded-2xl px-5 py-4 flex items-center gap-3 hover:border-[#6366f1]/40 transition-colors"
              >
                <span className="text-2xl">{interest.emoji}</span>
                <div>
                  <span className="text-sm font-semibold text-white block">{interest.label}</span>
                  <span className="text-xs text-[#94a3b8]">{interest.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
