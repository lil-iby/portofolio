"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { contactInfo } from "@/_helpers/const";
import { socials } from "@/_helpers/const";


export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative bg-white border-t border-black">
      <div className="bg-black py-8 md:py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display font-black uppercase text-white leading-[0.85] text-[clamp(2.2rem,7vw,4.5rem)]">
            ON EN <span className="block sm:inline text-[clamp(1.4rem,4vw,2.6rem)]">PARLE ?</span>
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
            Je cherche mon alternance en Nouvelle-Aquitaine, en lien avec mon admission au CESI
            Angoulême. Un mail, un appel, ou un message LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="group border border-black hover:bg-black p-5 flex items-center gap-4 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-black group-hover:border-white flex items-center justify-center flex-shrink-0 transition-colors">
                  <info.icon size={20} className="text-black group-hover:text-white transition-colors" />
                </div>
                <div>
                  <span className="text-xs text-[#777] group-hover:text-[#ccc] font-medium block mb-0.5 transition-colors">{info.label}</span>
                  <span className="text-sm font-semibold text-black group-hover:text-white transition-colors">
                    {info.value}
                  </span>
                </div>
              </motion.a>
            ))}
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
                  className="flex-1 border border-black hover:bg-black group p-4 flex flex-col items-center gap-2 transition-all duration-300 text-center"
                >
                  <s.icon size={22} className="text-black group-hover:text-white transition-colors" />
                  <span className="text-xs font-bold text-black group-hover:text-white transition-colors">{s.label}</span>
                  <span className="text-xs text-[#777] group-hover:text-[#ccc] transition-colors">{s.handle}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="border border-black p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-black mb-3">
                Pourquoi me faire confiance
              </h3>
              <p className="text-[#333] leading-relaxed mb-6">
                J&apos;ai déjà tenu un CDI de développeur frontend, migré un système d&apos;authentification
                entier de PHP vers Vue.js 3, et livré un backend de paiement en Laravel. Je ne cherche pas
                une première expérience - je cherche une équipe pour la suite.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Fullstack", "Vue.js", "Next.js", "Laravel", "Bordeaux"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 border border-black text-black"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:ngouibrahim3@gmail.com"
                className="flex-1 flex items-center justify-center gap-2 bg-black hover:bg-[#222] text-white font-semibold px-6 py-3.5 transition-all duration-200"
              >
                <FiMail size={16} />
                Envoyer un email
              </a>
              <a
                href="tel:+33610738281"
                className="flex-1 flex items-center justify-center gap-2 border border-black hover:bg-black hover:text-white text-black font-semibold px-6 py-3.5 transition-all duration-200"
              >
                <FiPhone size={16} />
                Appeler
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative bg-black pt-20 pb-10 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <span className="font-display text-sm font-bold uppercase tracking-wide text-white block mb-2">
            Ibrahim NGOU PARE
          </span>
          <h2 className="font-display font-black uppercase leading-[0.82] tracking-tight text-white text-[clamp(3rem,13vw,8.5rem)]">
            PORT
          </h2>
          <h2 className="font-display font-black uppercase leading-[0.82] tracking-tight text-white text-[clamp(3rem,13vw,8.5rem)] -mt-[2vw]">
            FOLIO
          </h2>

          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mt-12 pt-8 border-t border-[#333]">
            <div className="border border-white px-6 py-5">
              <span className="text-xs font-bold uppercase tracking-widest text-white block mb-3">Contact</span>
              <div className="flex flex-col gap-1 text-sm text-[#ccc]">
                <span>ngouibrahim3@gmail.com</span>
                <span>06 10 73 82 81</span>
                <span>github.com/lil-iby</span>
              </div>
            </div>
            <span className="text-[#888] text-sm">
              © 2026 Ibrahim NGOU PARE — Construit avec Next.js &amp; Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
