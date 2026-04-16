"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const team = [
  { name: "Morad", role: "CEO & Co-Founder", emoji: "🚀", sport: "Kickboxing" },
  { name: "Sarah V.", role: "CTO", emoji: "💻", sport: "Running" },
  { name: "Lars B.", role: "Head of Design", emoji: "🎨", sport: "Cycling" },
  { name: "Aisha K.", role: "Head of Growth", emoji: "📈", sport: "Tennis" },
  { name: "Daan M.", role: "Lead Engineer", emoji: "⚙️", sport: "Swimming" },
  { name: "Emma R.", role: "Community Lead", emoji: "🤝", sport: "Yoga" },
];

export default function AboutPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 py-24">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl pointer-events-none"
          />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {isNL ? "Ons verhaal" : "Our story"}
            </div>
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-slate-900 mb-6 leading-tight">
              {isNL ? "Sport verbindt." : "Sport connects."}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                {isNL ? "Wij ook." : "So do we."}
              </span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              {isNL
                ? "Sportli is geboren uit een simpel idee: sporten is leuker met anderen. Wij bouwen de app die sporters in Nederland — en straks de rest van de wereld — met elkaar verbindt."
                : "Sportli was born from a simple idea: sports are better with others. We're building the app that connects athletes across the Netherlands — and soon the rest of the world."}
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  emoji: "🎯",
                  title: isNL ? "Onze Missie" : "Our Mission",
                  desc: isNL
                    ? "Elke sporter — van beginner tot elite — een community geven waar ze bij horen."
                    : "Give every athlete — from beginner to elite — a community where they belong.",
                },
                {
                  emoji: "🌍",
                  title: isNL ? "Onze Visie" : "Our Vision",
                  desc: isNL
                    ? "De wereldwijde #1 app voor sport sociale netwerken zijn."
                    : "Be the world's #1 app for sports social networking.",
                },
                {
                  emoji: "💪",
                  title: isNL ? "Onze Waarden" : "Our Values",
                  desc: isNL
                    ? "Community eerst. Eerlijkheid. Inclusiviteit. Plezier in elke swipe."
                    : "Community first. Honesty. Inclusivity. Fun in every swipe.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-8 border border-slate-100"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-poppins text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "50K+", label: isNL ? "Sporters" : "Athletes" },
                { value: "30+", label: isNL ? "Sporten" : "Sports" },
                { value: "85+", label: isNL ? "Coaches" : "Coaches" },
                { value: "2024", label: isNL ? "Opgericht" : "Founded" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="font-poppins text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-orange-400">
                    {stat.value}
                  </p>
                  <p className="text-slate-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <h2 className="font-poppins text-4xl font-black text-slate-900 mb-4">
                {isNL ? "Het team achter Sportli" : "The team behind Sportli"}
              </h2>
              <p className="text-slate-500 text-lg">
                {isNL ? "Sporters bouwen voor sporters." : "Athletes building for athletes."}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-6 text-center border border-slate-100"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                    {member.emoji}
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 text-lg">{member.name}</h3>
                  <p className="text-slate-500 text-sm mb-2">{member.role}</p>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {member.sport}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
