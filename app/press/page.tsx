"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const coverage = [
  { outlet: "NRC", date: "Mrt 2026", quote: "\"De Tinder van de sportwereld heeft nu ook Nederland veroverd.\"" },
  { outlet: "Bright", date: "Feb 2026", quote: "\"Sportli maakt het eindelijk makkelijk om een trainingsmaatje te vinden.\"" },
  { outlet: "AD", date: "Jan 2026", quote: "\"50.000 sporters in minder dan een jaar — Sportli groeit razendsnel.\"" },
];

export default function PressPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              📰 {isNL ? "Pers & Media" : "Press & Media"}
            </div>
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-white mb-5">
              {isNL ? "Sportli in de" : "Sportli in the"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                {isNL ? "media" : "media"}
              </span>
            </h1>
            <p className="text-blue-200 text-xl leading-relaxed">
              {isNL
                ? "Persberichten, media-assets en contactinformatie voor journalisten."
                : "Press releases, media assets, and contact information for journalists."}
            </p>
          </div>
        </section>

        {/* Press kit download */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Kit download card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100"
              >
                <div className="text-5xl mb-5">📦</div>
                <h2 className="font-poppins text-2xl font-bold text-slate-900 mb-3">
                  {isNL ? "Press Kit" : "Press Kit"}
                </h2>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  {isNL
                    ? "Inclusief logo's, screenshots, brandingrichtlijnen, statistieken en achtergrondverhaal."
                    : "Includes logos, screenshots, brand guidelines, statistics, and company backstory."}
                </p>
                <button className="flex items-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors">
                  <Download className="w-4 h-4" />
                  {isNL ? "Download Press Kit" : "Download Press Kit"}
                </button>
              </motion.div>

              {/* Logo preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-slate-100 overflow-hidden"
              >
                <div className="bg-white p-8 flex items-center justify-center h-40 border-b border-slate-100">
                  <Image src="/logo.png" alt="Sportli logo" width={200} height={56} className="object-contain" />
                </div>
                <div className="bg-slate-950 p-8 flex items-center justify-center h-40">
                  <Image
                    src="/logo.png"
                    alt="Sportli logo dark"
                    width={200}
                    height={56}
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </motion.div>
            </div>

            {/* Brand colors */}
            <div className="mt-10">
              <h3 className="font-poppins text-xl font-bold text-slate-900 mb-5">
                {isNL ? "Merkidentiteit" : "Brand identity"}
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { color: "#2563EB", name: "Sportli Blue" },
                  { color: "#F97316", name: "Sportli Orange" },
                  { color: "#0F172A", name: "Sportli Dark" },
                  { color: "#F8FAFC", name: "Sportli Light" },
                ].map((c) => (
                  <div key={c.color} className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl border border-slate-200 shadow-sm"
                      style={{ background: c.color }}
                    />
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{c.name}</p>
                      <p className="text-slate-400 text-xs font-mono">{c.color}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media coverage */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-poppins text-3xl font-black text-slate-900 mb-8">
              {isNL ? "Media-aandacht" : "Media coverage"}
            </h2>
            <div className="space-y-5">
              {coverage.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0">
                      {item.outlet}
                    </div>
                    <div>
                      <p className="text-slate-800 font-medium italic leading-relaxed">{item.quote}</p>
                      <p className="text-slate-400 text-sm mt-2">{item.outlet} · {item.date}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Press contact */}
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <Mail className="w-10 h-10 text-blue-600 mx-auto mb-4" />
            <h2 className="font-poppins text-3xl font-bold text-slate-900 mb-3">
              {isNL ? "Perscontact" : "Press contact"}
            </h2>
            <p className="text-slate-500 mb-5">
              {isNL
                ? "Vragen voor de pers? Wij reageren doorgaans binnen 2 uur op werkdagen."
                : "Press inquiries? We typically respond within 2 hours on business days."}
            </p>
            <a
              href="mailto:press@sportli.app"
              className="inline-block bg-blue-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-blue-700 transition-colors text-lg"
            >
              press@sportli.app
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
