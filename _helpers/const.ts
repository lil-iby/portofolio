import { FiMail, FiPhone, FiMapPin, FiFileText, FiCalendar as FiCalendarDoc, FiBookOpen as FiBookDoc } from "react-icons/fi";
import type { Formation, Experience, Skill } from "@/interfaces/formation"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  SiNextdotjs, SiVuedotjs, SiReact, SiLaravel, SiDocker,
  SiTypescript, SiJavascript, SiPython, SiHtml5, SiCss,
  SiMysql, SiGit, SiGithub, SiPhp, SiFirebase, SiAndroidstudio, SiTailwindcss,
  SiC, SiFlask, SiAnsible, SiGnubash, SiPycharm, SiWindsurf, SiGithubactions,
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
    degree: "Pré-MSc Pro (Promo 237)",
    school: "Epitech Bordeaux",
    location: "Bordeaux, France",
    period: "2026 - Présent",
    description: "Année de Pré-MSc Pro à Epitech Bordeaux. Recherche d'alternance pour septembre 2026.",
    highlight: true,
  },
  {
    degree: "Licence Professionnelle - Génie Logiciel",
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
    degree: "DUT - Génie Informatique",
    school: "IUT de Ngaoundéré",
    location: "Cameroun",
    period: "2021 - 2023",
    description: "Formation technique en informatique couvrant les bases du développement, réseaux et systèmes.",
  },
];

export const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "ngouibrahim3@gmail.com",
    href: "mailto:ngouibrahim3@gmail.com",
    color: "#c2542f",
  },
  {
    icon: FiPhone,
    label: "Téléphone",
    value: "06 10 73 82 81",
    href: "tel:+33610738281",
    color: "#c9a15a",
  },
  {
    icon: FiMapPin,
    label: "Localisation",
    value: "Caudéran, Bordeaux",
    href: "#",
    color: "#7c3348",
  },
];

export const experiences: Experience[] = [
  {
    type: "emploi",
    role: "Contrat étudiant",
    company: "ALDI",
    period: "Mars 2026 - Présent",
    description: [
      "Emploi étudiant à temps partiel, en parallèle du Pré-MSc Pro à Epitech et de la recherche d'alternance.",
    ],
    tags: ["Contrat étudiant"],
    color: "#8a7968",
  },
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
    color: "#7c3348",
  },
  {
    type: "emploi",
    role: "Développeur Frontend",
    company: "SYGALIN SAS (CDI)",
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
    company: "SYGALIN SAS ",
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
    role: "Développeur Web - Migration Auth",
    company: "SYGALIN SAS",
    period: "2023",
    description: [
      "Migration du service d'authentification de PHP vers Vue.js 3",
      "Refactoring et modernisation de l'architecture frontend",
      "Tests et validation des nouvelles fonctionnalités",
    ],
    tags: ["Vue.js 3", "PHP", "Authentication", "Migration"],
    color: "#c2542f",
  },
  {
    type: "stage",
    role: "Développeur Web - Backend",
    company: "SYGALIN SAS",
    period: "2022",
    description: [
      "Développement du backend d'un service de paiement en ligne avec Laravel",
      "Développement frontend et communication API avec Vue.js",
      "Travail en équipe et montée en compétences",
    ],
    tags: ["Laravel", "Vue.js", "Paiement en ligne", "API"],
    color: "#c9a15a",
  }
];

export const skills: Skill[] = [
  { name: "Vue.js", icon: SiVuedotjs, color: "#42b883", category: "Frontend", note: "Mon framework du quotidien chez Sygalin" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", category: "Frontend" },
  { name: "React.js", icon: SiReact, color: "#61dafb", category: "Frontend" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", category: "Frontend" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Frontend" },
  { name: "HTML5 / CSS3", icon: SiHtml5, color: "#e34f26", category: "Frontend" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#1bc9cf", category: "Frontend" },

  { name: "Laravel", icon: SiLaravel, color: "#ff2d20", category: "Backend", note: "Eloquent, service de paiement en ligne" },
  { name: "PHP", icon: SiPhp, color: "#777bb4", category: "Backend" },
  { name: "Python", icon: SiPython, color: "#3776ab", category: "Backend" },
  { name: "Flask", icon: SiFlask, color: "#ffffff", category: "Backend", note: "SQLAlchemy" },
  { name: "C", icon: SiC, color: "#a8b9cc", category: "Backend" },
  { name: "SQL / MySQL", icon: SiMysql, color: "#4479a1", category: "Backend" },

  { name: "Docker", icon: SiDocker, color: "#2496ed", category: "DevOps & Outils" },
  { name: "Git", icon: SiGit, color: "#f05032", category: "DevOps & Outils" },
  { name: "Git Bash", icon: SiGnubash, color: "#4eaa25", category: "DevOps & Outils" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", category: "DevOps & Outils" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088ff", category: "DevOps & Outils" },
  { name: "Ansible", icon: SiAnsible, color: "#ee0000", category: "DevOps & Outils", note: "Formation dédiée en 2024" },
  { name: "PyCharm", icon: SiPycharm, color: "#21d789", category: "DevOps & Outils" },
  { name: "Windsurf", icon: SiWindsurf, color: "#58e5c9", category: "DevOps & Outils" },
  { name: "Firebase", icon: SiFirebase, color: "#ffca28", category: "DevOps & Outils" },
  { name: "Android Studio", icon: SiAndroidstudio, color: "#3ddc84", category: "DevOps & Outils" },
];

export const documents = [
  {
    icon: FiFileText,
    label: "Mon CV",
    description: "Format PDF, à jour",
    href: "/CV-Ibrahim-NGOU-PARE.pdf",
    color: "#c2542f",
  },
  {
    icon: FiCalendarDoc,
    label: "Calendrier de l'alternance",
    description: "Rythme école / entreprise - Msc/MBA Promo 237",
    href: "/Calendrier_Msc-MBA_Promo-237_alternance.pdf",
    color: "#c9a15a",
  },
  {
    icon: FiBookDoc,
    label: "Programme du Msc/MBA",
    description: "Epitech - trame pédagogique E237",
    href: "/EPITECH-Programme_MasterOfScience-E237-V1_2025.05.pdf",
    color: "#7c3348",
  },
  {
    icon: FiBookDoc,
    label: "Livret d'accueil apprenant",
    description: "Epitech Bordeaux - 2026/2027",
    href: "/Livret_Accueil_Apprenant_Epitech_2627.pdf",
    color: "#f59e0b",
  },
];