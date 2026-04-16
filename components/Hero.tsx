"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Apple, ChevronDown } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const badges = [
  {
    id: "match",
    // linksboven, hangt over de foto heen
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
    // rechtsboven
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
    // linksonder
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
    // rechtsonder
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── LEFT: copy ── */}
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
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 48px rgba(15,23,42,0.25)" }}
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
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 48px rgba(249,115,22,0.2)" }}
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

          {/* ── RIGHT: photo + badges ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            style={{ y: imgY }}
            className="flex justify-center"
          >
            {/* Wrapper: op desktop ruime padding voor badges, op mobiel gewoon 0 */}
            <div className="relative w-full" style={{ maxWidth: "580px" }}>

              {/* Glow */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 bg-gradient-to-br from-blue-400/25 to-orange-300/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Photo */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/padel.png"
                  alt="Padel spelers vinden via Sportli"
                  width={960}
                  height={640}
                  priority
                  className="w-full h-auto object-cover"
                  style={{ objectPosition: "center 30%" }}
                />
              </motion.div>

              {/* Floating badges — alleen op grote schermen */}
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
