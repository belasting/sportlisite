"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const posts = [
  {
    emoji: "🏃",
    category: "Tips",
    date: "12 Apr 2026",
    titleNL: "5 tips om een hardloopmaatje te vinden in Amsterdam",
    titleEN: "5 tips to find a running buddy in Amsterdam",
    descNL: "Amsterdam heeft duizenden hardlopers — maar hoe vind je de perfecte match? Wij geven je de beste strategieën.",
    descEN: "Amsterdam has thousands of runners — but how do you find the perfect match? We share the best strategies.",
    readTime: "4 min",
  },
  {
    emoji: "🥊",
    category: "Sport",
    date: "8 Apr 2026",
    titleNL: "Kickboxen voor beginners: wat je moet weten",
    titleEN: "Kickboxing for beginners: what you need to know",
    descNL: "Kickboxen is explosief, effectief en ongelooflijk leuk. Hier is alles wat je moet weten als je begint.",
    descEN: "Kickboxing is explosive, effective, and incredibly fun. Here's everything you need to know to get started.",
    readTime: "6 min",
  },
  {
    emoji: "🎾",
    category: "Community",
    date: "3 Apr 2026",
    titleNL: "Hoe onze community 50.000 sporters bereikte",
    titleEN: "How our community reached 50,000 athletes",
    descNL: "In minder dan een jaar groeide Sportli van 0 naar 50.000 sporters. Dit is ons verhaal.",
    descEN: "In less than a year Sportli grew from 0 to 50,000 athletes. Here's our story.",
    readTime: "5 min",
  },
  {
    emoji: "🏋️",
    category: "Fitness",
    date: "28 Mrt 2026",
    titleNL: "De beste krachttraining routines voor 2026",
    titleEN: "The best strength training routines for 2026",
    descNL: "Van compound lifts tot isolatie-oefeningen — expert coaches delen hun favoriete programma's.",
    descEN: "From compound lifts to isolation exercises — expert coaches share their favorite programs.",
    readTime: "8 min",
  },
  {
    emoji: "🚴",
    category: "Tips",
    date: "20 Mrt 2026",
    titleNL: "Fietsen in Nederland: de mooiste routes",
    titleEN: "Cycling in the Netherlands: the most beautiful routes",
    descNL: "Nederland is het fietsparadijs van de wereld. Ontdek de routes die onze community het meest waardeert.",
    descEN: "The Netherlands is the cycling paradise of the world. Discover the routes our community loves most.",
    readTime: "7 min",
  },
  {
    emoji: "🧘",
    category: "Wellness",
    date: "14 Mrt 2026",
    titleNL: "Herstel en mindfulness voor sporters",
    titleEN: "Recovery and mindfulness for athletes",
    descNL: "Spieren groeien niet tijdens de training — maar tijdens herstel. Zo optimaliseer je jouw herstelproces.",
    descEN: "Muscles don't grow during training — they grow during recovery. Here's how to optimize yours.",
    readTime: "5 min",
  },
];

const categoryColors: Record<string, string> = {
  Tips: "bg-blue-100 text-blue-700",
  Sport: "bg-orange-100 text-orange-700",
  Community: "bg-green-100 text-green-700",
  Fitness: "bg-purple-100 text-purple-700",
  Wellness: "bg-pink-100 text-pink-700",
};

export default function BlogPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-orange-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              ✍️ {isNL ? "Sportli Blog" : "Sportli Blog"}
            </div>
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-slate-900 mb-5">
              {isNL ? "Verhalen, tips &" : "Stories, tips &"}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                {isNL ? "inspiratie" : "inspiration"}
              </span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {isNL
                ? "Alles over sport, gezondheid en community — rechtstreeks van de Sportli-experts."
                : "Everything about sport, health, and community — straight from Sportli experts."}
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {posts.map((post, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                >
                  {/* Card top color */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-500" />
                  <div className="p-6">
                    <div className="text-4xl mb-4">{post.emoji}</div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColors[post.category]}`}>
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-xs">{post.date}</span>
                      <span className="text-slate-400 text-xs ml-auto">{post.readTime} read</span>
                    </div>
                    <h2 className="font-poppins font-bold text-slate-900 text-lg mb-3 leading-snug">
                      {isNL ? post.titleNL : post.titleEN}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {isNL ? post.descNL : post.descEN}
                    </p>
                    <div className="mt-5 text-blue-600 text-sm font-semibold hover:text-blue-800 transition-colors">
                      {isNL ? "Lees meer →" : "Read more →"}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-poppins text-3xl font-black text-slate-900 mb-3">
              {isNL ? "Mis geen enkel artikel" : "Never miss a post"}
            </h2>
            <p className="text-slate-500 mb-7">
              {isNL
                ? "Schrijf je in voor onze nieuwsbrief en ontvang wekelijks de beste sporttips."
                : "Subscribe to our newsletter and get the best sport tips weekly."}
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={isNL ? "jouw@email.nl" : "your@email.com"}
                className="flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-5 py-3 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold text-sm rounded-xl shrink-0">
                {isNL ? "Inschrijven" : "Subscribe"}
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
