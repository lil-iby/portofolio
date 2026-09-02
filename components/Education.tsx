"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiBookOpen, FiAward, FiExternalLink } from "react-icons/fi";
import { formations, documents } from "@/_helpers/const";
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
      className={`relative border p-6 transition-all duration-300 ${
        formation.highlight
          ? "bg-black border-black"
          : "bg-white border-black hover:bg-black group"
      }`}
    >
      {formation.highlight && (
        <div className="absolute -top-3 left-6">
          <span className="bg-white text-black text-xs font-bold uppercase tracking-wide px-3 py-1">
            {formation.badge ?? "En cours"}
          </span>
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className={`w-12 h-12 flex items-center justify-center flex-shrink-0 border ${
            formation.highlight ? "border-white" : "border-black group-hover:border-white"
          }`}
        >
          {formation.highlight ? (
            <FiAward size={22} className="text-white" />
          ) : (
            <FiBookOpen size={20} className="text-black group-hover:text-white transition-colors" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span
              className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 border ${
                formation.highlight
                  ? "border-white text-white"
                  : "border-black text-black group-hover:border-white group-hover:text-white"
              } transition-colors`}
            >
              {formation.period}
            </span>
            <span
              className={`text-xs ${
                formation.highlight ? "text-[#ccc]" : "text-[#777] group-hover:text-[#ccc]"
              } transition-colors`}
            >
              • {formation.location}
            </span>
          </div>

          <h3
            className={`text-lg font-bold mt-2 mb-1 ${
              formation.highlight ? "text-white" : "text-black group-hover:text-white"
            } transition-colors`}
          >
            {formation.degree}
          </h3>
          <p
            className={`text-sm font-semibold mb-3 ${
              formation.highlight ? "text-[#ddd]" : "text-[#333] group-hover:text-[#ddd]"
            } transition-colors`}
          >
            {formation.school}
          </p>

          {formation.description && (
            <p
              className={`text-sm leading-relaxed ${
                formation.highlight ? "text-[#ccc]" : "text-[#555] group-hover:text-[#ccc]"
              } transition-colors`}
            >
              {formation.description}
            </p>
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
    <section id="education" className="relative bg-white border-t border-black">
      <div className="bg-black py-8 md:py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-black uppercase text-white leading-[0.85] text-[clamp(2.2rem,7vw,4.5rem)]">
            FORMATION <span className="block sm:inline text-[clamp(1.4rem,4vw,2.6rem)]">&amp; PARCOURS</span>
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
            D&apos;un IUT au Cameroun à un cursus Ingénieur Informatique par apprentissage au CESI
            Angoulême - génie informatique, DevOps, puis ingénierie en alternance, chaque étape a
            nourri la suivante.
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
          <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-black" />
            À consulter
          </h3>
          <p className="text-sm text-[#555] mb-6 max-w-xl">
            Le rythme de mon alternance au CESI Angoulême et le détail du programme, pour ceux qui veulent creuser avant de me recevoir en entretien.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {documents
              .filter((doc) => doc.label !== "Mon CV")
              .map((doc, i) => (
                <motion.a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group border border-black hover:bg-black p-5 flex flex-col gap-3 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 border border-black group-hover:border-white flex items-center justify-center transition-colors">
                      <doc.icon size={18} className="text-black group-hover:text-white transition-colors" />
                    </div>
                    <FiExternalLink size={14} className="text-black group-hover:text-white transition-colors mt-1" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-black group-hover:text-white block mb-0.5 transition-colors">{doc.label}</span>
                    <span className="text-xs text-[#777] group-hover:text-[#ccc] transition-colors">{doc.description}</span>
                  </div>
                </motion.a>
              ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-black" />
            Centres d&apos;intérêt
          </h3>
          <div className="flex flex-wrap gap-4">
            {[
              { emoji: "🏀", label: "Basketball", sublabel: "Meneur - Poste 1" },
              { emoji: "⚽", label: "Football", sublabel: "Amateur" },
              { emoji: "💻", label: "Développement", sublabel: "Open Source" },
              { emoji: "🎮", label: "Gaming", sublabel: "Stratégie" },
            ].map((interest) => (
              <div
                key={interest.label}
                className="border border-black px-5 py-4 flex items-center gap-3 hover:bg-black group transition-colors"
              >
                <span className="text-2xl">{interest.emoji}</span>
                <div>
                  <span className="text-sm font-semibold text-black group-hover:text-white block transition-colors">{interest.label}</span>
                  <span className="text-xs text-[#777] group-hover:text-[#ccc] transition-colors">{interest.sublabel}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
