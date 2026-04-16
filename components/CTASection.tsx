"use client";

import { motion } from "framer-motion";
import { Apple } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTASection() {
  const { t } = useLanguage();
  const c = t.cta;

  return (
    <section id="download" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900" />

      <motion.div
        animate={{ scale: [1, 1.4, 1], x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-orange-400/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.3, 1, 1.3], x: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center gap-2 bg-white/15 text-white text-sm font-bold px-5 py-2.5 rounded-full mb-8 border border-white/25 backdrop-blur-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 bg-green-400 rounded-full"
            />
            {c.badge}
          </motion.div>

          <h2 className="font-poppins text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {c.headline1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-300 to-yellow-300">
              {c.headline2}
            </span>
            <br />
            {c.headline3}
          </h2>

          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {c.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <motion.a
              href="#"
              whileHover={{ scale: 1.06, boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 bg-white text-slate-900 px-8 py-5 rounded-2xl font-bold text-base shadow-2xl"
            >
              <Apple className="w-8 h-8 shrink-0" />
              <div className="text-left">
                <div className="text-xs text-slate-400 font-normal">{t.hero.appStore}</div>
                <div className="text-lg">{t.hero.appStoreLabel}</div>
              </div>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.06, boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-4 bg-white/10 border border-white/25 text-white px-8 py-5 rounded-2xl font-bold text-base backdrop-blur-sm"
            >
              <span className="text-3xl shrink-0">▶</span>
              <div className="text-left">
                <div className="text-xs text-white/60 font-normal">{t.hero.googlePlay}</div>
                <div className="text-lg">{t.hero.googlePlayLabel}</div>
              </div>
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
            {c.trustItems.map((item) => (
              <span key={item} className="font-medium">{item}</span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap justify-center gap-8"
          >
            {[c.appStoreRating, c.playRating].map((r) => (
              <div
                key={r.store}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 text-center"
              >
                <p className="text-white/60 text-xs mb-1">{r.store}</p>
                <p className="text-yellow-300 text-xl">{r.stars}</p>
                <p className="text-white font-black text-2xl">{r.rating}</p>
                <p className="text-white/50 text-xs mt-0.5">{r.reviews}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
