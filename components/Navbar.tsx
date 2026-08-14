"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";
import Rosette from "./Rosette";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "Compétences", href: "#skills" },
  { label: "Expériences", href: "#experience" },
  { label: "Formation", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-xl border-black" : "bg-white border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("#hero")}
            className="flex items-center gap-2 font-display font-black text-base tracking-tight text-black"
          >
            <Rosette size={26} className="text-black" />
            IBRAHIM <span className="hidden sm:inline">NGOU PARE</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 relative group ${
                  activeSection === link.href.replace("#", "")
                    ? "text-black"
                    : "text-[#8a8a8a] hover:text-black"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/CV-Ibrahim-NGOU-PARE.pdf"
              download
              className="inline-flex items-center gap-2 border border-black text-black text-xs font-bold uppercase tracking-wider px-4 py-2.5 hover:bg-black hover:text-white transition-all duration-200"
            >
              <FiDownload size={14} />
              CV
            </a>
            <a
              href="mailto:ngouibrahim3@gmail.com"
              className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 hover:bg-[#222] transition-all duration-200"
            >
              Me contacter
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black p-2"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="font-display text-2xl font-black uppercase tracking-tight text-white hover:text-[#aaa] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col items-center gap-3 mt-4">
              <a
                href="mailto:ngouibrahim3@gmail.com"
                className="bg-white text-black px-8 py-3 font-bold text-lg uppercase tracking-wide"
              >
                Me contacter
              </a>
              <a
                href="/CV-Ibrahim-NGOU-PARE.pdf"
                download
                className="flex items-center gap-2 text-[#aaa] text-sm font-medium"
              >
                <FiDownload size={14} />
                Télécharger mon CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
