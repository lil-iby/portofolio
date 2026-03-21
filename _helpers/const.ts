import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import type { Formation } from "@/interfaces/formation"


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
    period: "2022 — 2023",
    description: "Licence professionnelle orientée développement logiciel et architecture applicative.",
  },
  {
    degree: "Attestation de Formation DevOps",
    school: "Formation Cameroun",
    location: "Cameroun",
    period: "2022",
    description: "Formation intensive aux pratiques DevOps : JavaScript, Express.js, Docker, Ansible.",
  },
  {
    degree: "DUT Génie Informatique",
    school: "IUT de Ngaoundéré",
    location: "Cameroun",
    period: "2019 — 2022",
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
