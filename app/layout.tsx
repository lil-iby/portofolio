import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Ibrahim NGOU PARE | Développeur Fullstack",
  description:
    "Portfolio d'Ibrahim NGOU PARE, étudiant en Pré-MSc Pro à Epitech Bordeaux. Développeur fullstack en recherche d'alternance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
