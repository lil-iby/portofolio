import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import type { Formation, Experience, Skill } from "@/interfaces/formation"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiNextdotjs, SiVuedotjs, SiReact, SiLaravel, SiDocker,
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss,
  SiMysql, SiGit, SiGithub, SiPhp, SiFirebase, SiAndroidstudio, SiTailwindcss,
} from "react-icons/si";

export const socials = [
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
export const formations: Formation[] = [
  {
    degree: "Ingénieur en Informatique",
    school: "CESI",
    location: "Bordeaux, France",
    period: "2025 — Présent",
    description: "Formation d'ingénieur en informatique avec spécialisation en développement logiciel et systèmes d'information. Recherche d'alternance pour septembre 2026.",
    highlight: true,
  },
  {
    degree: "Licence Professionnelle — Génie Logiciel",
    school: "IUT de Ngaoundéré",
    location: "Cameroun",
    period: "2024",
    description: "Licence professionnelle orientée développement logiciel et architecture applicative.",
  },
  {
    degree: "Attestation de Formation DevOps",
    school: "Formation Cameroun",
    location: "Cameroun",
    period: "2024",
    description: "Formation intensive aux pratiques DevOps : JavaScript, Express.js, Docker, Ansible.",
  },
  {
    degree: "DUT Génie Informatique",
    school: "IUT de Ngaoundéré",
    location: "Cameroun",
    period: "2021 — 2023",
    description: "Formation technique en informatique couvrant les bases du développement, réseaux et systèmes.",
  },
];

export const contactInfo = [
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

export const experiences: Experience[] = [
  {
    type: "stage",
    role: "Développeur Logiciel",
    company: "SAINA ENGINEERING",
    period: "2026",
    description: [
      "Développement d'un outil de post-traitement de données scientifiques",
      "Mise en place d'une architecture et d'un pipeline de gestion des versions en local",
      "Installation et configuration de réseau local (Installation de Gitea sur le réseau local de l'entreprise)",
    ],
    tags: ["Python", "Data Processing", "Git", "Réseau"],
    color: "#f59e0b",
  },
  {
    type: "projet",
    role: "Développeur Embarqué",
    company: "POCL Balise MOBILIS",
    period: "Projet académique 2025",
    description: [
      "Programmation d'un microcontrôleur ESP32 avec MicroPython",
      "Utilisation de l'API REST de Bordeaux métropole pour accéder en temps réelle aux données.",
      "Intégration de capteurs et affichage de données en temps réel",
    ],
    tags: ["ESP32", "MicroPython", "POCL", "API REST"],
    color: "#ec4899",
  },
  {
    type: "emploi",
    role: "Développeur Frontend",
    company: "SYDALIN SAS (CDI)",
    period: "2024 - 2025",
    description: [
      "Développement d'interfaces modernes avec Next.js",
      "Communication et intégration d'une API externe",
      "Collaboration en équipe en méthodologie Agile",
    ],
    tags: ["Next.js", "API REST", "Agile"],
    color: "#42b883",
  },
  {
    type: "stage",
    role: "Développeur Frontend",
    company: "SYDALIN SAS ",
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
  }
];

export const skills: Skill[] = [
  { name: "Next.js", icon: SiNextdotjs, level: 80, color: "#ffffff", category: "Frontend" },
  { name: "Vue.js", icon: SiVuedotjs, level: 85, color: "#42b883", category: "Frontend" },
  { name: "React.js", icon: SiReact, level: 75, color: "#61dafb", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, level: 70, color: "#3178c6", category: "Frontend" },
  { name: "HTML5", icon: SiHtml5, level: 90, color: "#e34f26", category: "Frontend" },
  { name: "CSS3", icon: SiCss, level: 85, color: "#1572b6", category: "Frontend" },
  { name: "TailwindCSS", icon: SiTailwindcss, level: 70, color: "#1bc9cf", category: "Frontend" },

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