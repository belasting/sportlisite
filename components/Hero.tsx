"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function PhoneApp() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* App header */}
      <div className="px-4 pt-3 pb-2 flex justify-between items-center">
        <span className="text-blue-600 font-black text-lg tracking-tight">sportli</span>
        <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center text-sm">
          🔔
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex px-4 gap-3 mb-3">
        {["Discover", "Coaches", "Groups"].map((t, i) => (
          <span
            key={t}
            className={`text-xs font-semibold px-3 py-1 rounded-full ${
              i === 0
                ? "bg-blue-600 text-white"
                : "text-slate-400 bg-slate-100"
            }`}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Swipe card */}
      <div className="flex-1 flex items-start justify-center px-4 pb-2">
        <motion.div
          animate={{ rotate: [-1.2, 1.2, -1.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full rounded-3xl shadow-2xl overflow-hidden relative bg-white"
          style={{ height: "310px" }}
        >
          {/* Card hero gradient */}
          <div className="h-44 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 relative overflow-hidden">
            <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -left-4 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />

            <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">
              <div className="w-14 h-14 bg-white/25 backdrop-blur rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/30">
                🏃‍♀️
              </div>
              <div className="flex-1">
                <p className="text-white font-black text-xl">Alex, 26</p>
                <p className="text-white/80 text-xs font-medium">📍 1.8 km</p>
              </div>
            </div>

            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1"
            >
              <span className="w-1.5 h-1.5 bg-white rounded-full" />
              ACTIVE
            </motion.div>
          </div>

          <div className="px-4 pt-3 pb-2">
            <div className="flex gap-2 mb-2 flex-wrap">
              {["Running 🏃", "Cycling 🚴", "HIIT 🔥"].map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              &ldquo;Morning runner looking for a training buddy!&rdquo;
            </p>
          </div>

          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-5">
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-lg shadow-lg border border-red-100"
            >
              ✕
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center text-2xl shadow-xl -mt-2"
            >
              ❤️
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.85 }}
              className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-lg shadow-lg border border-blue-100"
            >
              ⭐
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom nav bar */}
      <div className="px-4 pb-3 pt-1 flex justify-around">
        {["🔥", "💬", "👥", "👤"].map((icon, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-0.5 ${i === 0 ? "opacity-100" : "opacity-40"}`}
          >
            <span className="text-xl">{icon}</span>
            {i === 0 && (
              <div className="w-1 h-1 bg-blue-600 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[300px] mx-auto select-none">
      <div
        className="relative rounded-[3.2rem] shadow-2xl overflow-hidden border-[5px] border-slate-800"
        style={{ background: "#0f172a" }}
      >
        <div className="bg-slate-900 flex justify-between items-center px-6 pt-3 pb-1 text-white/50 text-[10px] font-medium">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <span>●●●</span>
            <span>WiFi</span>
            <span>🔋</span>
          </div>
        </div>

        <div style={{ height: "560px" }}>
          <PhoneApp />
        </div>

        <div className="bg-slate-900 flex justify-center pb-2 pt-1">
          <div className="w-28 h-1 bg-white/30 rounded-full" />
        </div>
      </div>
      <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-full z-10" />
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20"
    >
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-52 -right-52 w-[700px] h-[700px] bg-blue-200 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-52 -left-52 w-[600px] h-[600px] bg-orange-200 rounded-full blur-3xl pointer-events-none"
      />

      {[
        { top: "20%", left: "6%", size: "w-14 h-14", color: "bg-blue-400/15", delay: 0, shape: "rounded-2xl" },
        { top: "65%", left: "3%", size: "w-8 h-8", color: "bg-orange-400/20", delay: 1.5, shape: "rounded-xl" },
        { top: "35%", right: "5%", size: "w-10 h-10", color: "bg-purple-400/15", delay: 0.8, shape: "rounded-full" },
        { top: "75%", right: "8%", size: "w-6 h-6", color: "bg-blue-500/20", delay: 2, shape: "rounded-full" },
      ].map((shape, i) => (
        <motion.div
          key={i}
          animate={{ y: [-12, 12, -12], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
          className={`absolute ${shape.size} ${shape.color} ${shape.shape} pointer-events-none`}
          style={{ top: shape.top, left: (shape as { left?: string }).left, right: (shape as { right?: string }).right }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Launch badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-7">
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                {h.badge}
              </div>

              <h1 className="font-poppins text-6xl sm:text-7xl font-black leading-[1.0] mb-6 tracking-tight">
                <span className="text-slate-900">{h.headline1}</span>
                <br />
                <span className="text-gradient">{h.headline2}</span>
                <br />
                <span className="text-slate-900">{h.headline3}</span>{" "}
                <span className="text-gradient">{h.headline4}</span>
              </h1>

              <p className="text-xl text-slate-500 mb-9 max-w-lg leading-relaxed">
                {h.sub}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <motion.a
                  href="#download"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 48px rgba(15,23,42,0.25)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl font-semibold"
                >
                  <Apple className="w-6 h-6 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-normal">{h.appStore}</div>
                    <div className="font-bold">{h.appStoreLabel}</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#download"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 48px rgba(249,115,22,0.2)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-400 text-slate-800 px-6 py-4 rounded-2xl font-semibold transition-colors"
                >
                  <span className="text-2xl shrink-0">▶</span>
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-normal">{h.googlePlay}</div>
                    <div className="font-bold">{h.googlePlayLabel}</div>
                  </div>
                </motion.a>
              </div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap items-center gap-5"
              >
                <div className="flex -space-x-3">
                  {["🏃", "🚴", "🏊", "⚽", "🎾"].map((emoji, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-br from-blue-100 to-orange-100 rounded-full border-2 border-white flex items-center justify-center text-base shadow-sm"
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
                <div className="text-slate-500 text-sm">
                  <span className="text-slate-900 font-bold text-base">50.000+</span>{" "}
                  {h.socialProof}
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-full">
                  <span className="text-yellow-500 text-sm">★★★★½</span>
                  <span className="text-slate-700 font-bold text-sm">{h.rating}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Phone */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            style={{ y: phoneY }}
            className="flex justify-center relative"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-blue-300/30 rounded-full blur-3xl" />
              <div className="absolute w-52 h-52 bg-orange-300/20 rounded-full blur-2xl translate-x-12 translate-y-8" />
            </div>

            <PhoneMockup />

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 -left-6 glass rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
            >
              <span className="text-2xl">🔥</span>
              <div>
                <p className="text-xs text-slate-400 font-medium">{h.notifMatch}</p>
                <p className="text-sm font-bold text-slate-800">{h.notifMatchSub}</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-24 -right-6 glass rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
            >
              <span className="text-2xl">⚡</span>
              <div>
                <p className="text-xs text-slate-400 font-medium">{h.notifGoal}</p>
                <p className="text-sm font-bold text-slate-800">{h.notifGoalSub}</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -right-4 glass rounded-2xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2"
            >
              <span className="text-xl">👥</span>
              <div>
                <p className="text-xs font-bold text-slate-800">{h.notifNearby}</p>
                <p className="text-[10px] text-slate-400">{h.notifNearbySub}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
      >
        <p className="text-xs font-medium tracking-widest uppercase">{h.scrollHint}</p>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
