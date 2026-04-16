"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Clock, ArrowRight } from "lucide-react";

const jobs = [
  {
    titleNL: "Senior React Native Developer",
    titleEN: "Senior React Native Developer",
    dept: "Engineering",
    location: "Amsterdam / Remote",
    type: "Full-time",
    emoji: "⚙️",
  },
  {
    titleNL: "Product Designer (UI/UX)",
    titleEN: "Product Designer (UI/UX)",
    dept: "Design",
    location: "Amsterdam",
    type: "Full-time",
    emoji: "🎨",
  },
  {
    titleNL: "Growth Marketeer",
    titleEN: "Growth Marketer",
    dept: "Marketing",
    location: "Amsterdam / Hybrid",
    type: "Full-time",
    emoji: "📈",
  },
  {
    titleNL: "Community Manager",
    titleEN: "Community Manager",
    dept: "Community",
    location: "Amsterdam",
    type: "Full-time",
    emoji: "🤝",
  },
  {
    titleNL: "Backend Engineer (Node.js)",
    titleEN: "Backend Engineer (Node.js)",
    dept: "Engineering",
    location: "Remote",
    type: "Full-time",
    emoji: "🖥️",
  },
];

const perks = [
  { emoji: "🏋️", labelNL: "Gratis sportlidmaatschap", labelEN: "Free gym membership" },
  { emoji: "🏖️", labelNL: "25 vakantiedagen", labelEN: "25 vacation days" },
  { emoji: "💻", labelNL: "Top apparatuur", labelEN: "Top-of-the-line gear" },
  { emoji: "🌍", labelNL: "Remote-friendly", labelEN: "Remote-friendly" },
  { emoji: "📚", labelNL: "Leerbudget €1.500/jaar", labelEN: "€1,500/yr learning budget" },
  { emoji: "🚀", labelNL: "Aandelenopties", labelEN: "Stock options" },
];

export default function CareersPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              💼 {isNL ? "We zijn aan het groeien!" : "We're growing!"}
            </div>
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-slate-900 mb-5 leading-tight">
              {isNL ? "Bouw mee aan de" : "Help build the"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                {isNL ? "toekomst van sport" : "future of sport"}
              </span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {isNL
                ? "Bij Sportli bouwen sporters producten voor sporters. Sluit je aan bij ons team in Amsterdam."
                : "At Sportli, athletes build products for athletes. Join our team in Amsterdam."}
            </p>
          </div>
        </section>

        {/* Perks */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="font-poppins text-3xl font-black text-slate-900 text-center mb-10">
              {isNL ? "Waarom Sportli?" : "Why Sportli?"}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {perks.map((perk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-5 border border-slate-100 text-center"
                >
                  <div className="text-3xl mb-2">{perk.emoji}</div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {isNL ? perk.labelNL : perk.labelEN}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open positions */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-poppins text-3xl font-black text-slate-900 mb-8">
              {isNL ? "Open posities" : "Open positions"}
            </h2>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-5 flex items-center gap-4 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-orange-100 rounded-xl flex items-center justify-center text-2xl shrink-0">
                    {job.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-poppins font-bold text-slate-900">
                      {isNL ? job.titleNL : job.titleEN}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <span className="text-slate-400 text-xs">{job.dept}</span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 text-xs">
                        <Clock className="w-3 h-3" /> {job.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-300 shrink-0" />
                </motion.div>
              ))}
            </div>

            <div className="mt-10 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
              <h3 className="font-poppins text-2xl font-bold mb-2">
                {isNL ? "Geen geschikte functie?" : "Don't see a fit?"}
              </h3>
              <p className="text-blue-200 mb-5">
                {isNL
                  ? "Stuur ons een open sollicitatie — we zijn altijd op zoek naar talent."
                  : "Send us an open application — we're always looking for talent."}
              </p>
              <a
                href="mailto:jobs@sportli.app"
                className="inline-block bg-white text-blue-700 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors"
              >
                jobs@sportli.app
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
