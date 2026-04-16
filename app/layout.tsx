import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sportli — Vind Jouw Sportmaatje",
  description:
    "Swipe, match en train samen. Sportli verbindt sporters bij jou in de buurt — partners, coaches en communities, allemaal in één app.",
  keywords: [
    "sportmaatje",
    "sportapp",
    "fitness app nederland",
    "hardloopmaatje",
    "tennispartner",
    "sport partner vinden",
    "coaches",
  ],
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
  },
  openGraph: {
    title: "Sportli — Vind Jouw Sportmaatje",
    description: "Swipe right op fitness. Vind partners, coaches en community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-white text-slate-900`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
