"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 shrink-0">
    <path d="M3.18 23.39C3.07 23.32 3 23.18 3 23V1C3 .82 3.07.68 3.18.61L13.54 12z" fill="#00D2FF" />
    <path d="M16.85 8.8L5.44 2.15 13.54 12z" fill="#0DE06A" />
    <path d="M5.44 21.85l11.41-6.65L13.54 12z" fill="#FF3D39" />
    <path d="M20.38 10.25l-3.53-2.06-3.31 3.81 3.31 3.81 3.54-2.06a2 2 0 000-3.5z" fill="#FFD400" />
  </svg>
);

const badges = [
  {
    id: "match",
    style: { top: "10%", left: "-160px" },
    delay: 0,
    floatY: [-6, 6, -6],
    content: (
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-xl shadow-md shrink-0">
          🔥
        </div>
        <div>
          <p className="text-[11px] text-slate-400 font-medium leading-none mb-1">Nieuwe Match!</p>
          <p className="text-sm font-bold text-slate-800 leading-none">Sarah liked you ❤️</p>
        </div>
      </div>
    ),
  },
  {
    id: "active",
    style: { top: "10%", right: "-148px" },
    delay: 0.6,
    floatY: [6, -6, 6],
    content: (
      <div className="flex items-center gap-2.5">
        <div className="relative shrink-0">
          <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-xl shadow-md">
            👥
          </div>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 leading-none">+2.400</p>
          <p className="text-[11px] text-slate-400 leading-none mt-0.5">sporters NL</p>
        </div>
      </div>
    ),
  },
  {
    id: "goal",
    style: { bottom: "15%", left: "-160px" },
    delay: 1.2,
    floatY: [-5, 8, -5],
    content: (
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-xl shadow-md shrink-0">
          🏆
        </div>
        <div>
          <p className="text-[11px] text-slate-400 font-medium leading-none mb-1">Doel behaald!</p>
          <p className="text-sm font-bold text-slate-800 leading-none">10 km voltooid 🎉</p>
        </div>
      </div>
    ),
  },
  {
    id: "rating",
    style: { bottom: "15%", right: "-140px" },
    delay: 1.8,
    floatY: [5, -7, 5],
    content: (
      <div className="flex items-center gap-2.5">
        <div className="w-11 h-11 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center text-xl shadow-md shrink-0">
          ⭐
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 leading-none">4.4 / 5</p>
          <p className="text-[11px] text-slate-400 leading-none mt-0.5">App Store</p>
        </div>
      </div>
    ),
  },
];

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 pt-20"
    >
      {/* Background blobs */}
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

      {/* Floating shapes */}
      {[
        { top: "20%", left: "4%", size: "w-14 h-14", color: "bg-blue-400/15", delay: 0, shape: "rounded-2xl" },
        { top: "65%", left: "2%", size: "w-8 h-8", color: "bg-orange-400/20", delay: 1.5, shape: "rounded-xl" },
      ].map((shape, i) => (
        <motion.div
          key={i}
          animate={{ y: [-12, 12, -12], rotate: [0, i % 2 === 0 ? 15 : -15, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: shape.delay }}
          className={`absolute ${shape.size} ${shape.color} ${shape.shape} pointer-events-none`}
          style={{ top: shape.top, left: shape.left }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 lg:py-16 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT: copy ── */}
          <motion.div style={{ y: textY }} className="order-1 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Launch badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <motion.span
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                {h.badge}
              </div>

              <h1 className="font-poppins text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.0] mb-5 tracking-tight">
                <span className="block text-slate-900">{h.headline3}</span>
                <span className="block text-gradient">{h.headline4}</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                {h.sub}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-9">
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 48px rgba(15,23,42,0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-slate-900 text-white px-6 py-4 rounded-2xl font-semibold"
                >
                  <AppleIcon />
                  <div className="text-left">
                    <div className="text-xs text-slate-400 font-normal">{h.appStore}</div>
                    <div className="font-bold">{h.appStoreLabel}</div>
                  </div>
                </motion.a>

                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 48px rgba(249,115,22,0.2)" }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-3 bg-white border-2 border-slate-200 hover:border-orange-400 text-slate-800 px-6 py-4 rounded-2xl font-semibold transition-colors"
                >
                  <GooglePlayIcon />
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
                className="flex flex-wrap items-center gap-4"
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
                <div className="flex items-center gap-1 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-full">
                  <span className="text-yellow-500 text-sm">★★★★½</span>
                  <span className="text-slate-700 font-bold text-sm">{h.rating}</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo + badges ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{ y: imgY }}
            className="order-2 lg:order-2 w-full"
          >
            {/* Desktop wrapper with space for floating badges */}
            <div className="relative xl:mx-16">
              {/* Glow */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-gradient-to-br from-blue-400/25 to-orange-300/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/padel.png"
                  alt="Kickboxers vinden via Sportli — All Your Sports, One App"
                  width={960}
                  height={640}
                  priority
                  className="w-full object-cover"
                  style={{
                    height: "clamp(260px, 48vw, 540px)",
                    objectPosition: "center 20%",
                  }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

                {/* Mobile badges — inside the photo */}
                <div className="xl:hidden absolute bottom-4 left-4 right-4 flex justify-between items-end gap-2">
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg"
                  >
                    <span className="text-lg">🔥</span>
                    <div>
                      <p className="text-[10px] text-slate-400 leading-none">Nieuwe Match!</p>
                      <p className="text-xs font-bold text-slate-800 leading-none mt-0.5">Sarah liked you ❤️</p>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [3, -3, 3] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                    className="glass rounded-2xl px-3 py-2 flex items-center gap-2 shadow-lg"
                  >
                    <span className="text-lg">⭐</span>
                    <div>
                      <p className="text-xs font-bold text-slate-800 leading-none">4.4 / 5</p>
                      <p className="text-[10px] text-slate-400 leading-none mt-0.5">App Store</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Desktop floating badges */}
              {badges.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1, y: badge.floatY }}
                  transition={{
                    opacity: { delay: 0.5 + badge.delay, duration: 0.45 },
                    scale: { delay: 0.5 + badge.delay, duration: 0.45, type: "spring", stiffness: 200 },
                    y: { duration: 4.5 + badge.delay * 0.4, repeat: Infinity, ease: "easeInOut", delay: badge.delay },
                  }}
                  style={badge.style}
                  className="absolute glass rounded-2xl px-4 py-3 shadow-xl z-10 whitespace-nowrap hidden xl:block"
                >
                  {badge.content}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
