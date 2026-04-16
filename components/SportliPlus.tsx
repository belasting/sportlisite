"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, ChevronDown, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function PlusFAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/20 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left text-white bg-white/5 hover:bg-white/10 transition-colors"
      >
        <span className="font-semibold text-sm pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="w-4 h-4 text-white/60" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 pt-3 text-white/60 text-sm leading-relaxed border-t border-white/10">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SportliPlus() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [yearly, setYearly] = useState(false);

  const monthlyPrice = 9.99;
  const yearlyMonthly = 5.99;

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/60 to-slate-950" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-orange-500/30 mb-4">
            <Zap className="w-3 h-3" />
            {p.tag}
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl font-black text-white mt-2">
            {p.headline1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              {p.headline2}
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {p.sub}
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-semibold ${!yearly ? "text-white" : "text-slate-500"}`}>
              {p.monthly}
            </span>
            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                yearly ? "bg-orange-500" : "bg-slate-700"
              }`}
            >
              <motion.div
                animate={{ x: yearly ? 24 : 2 }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
              />
            </button>
            <span className={`text-sm font-semibold ${yearly ? "text-white" : "text-slate-500"}`}>
              {p.yearly}
            </span>
            <AnimatePresence>
              {yearly && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8, x: -5 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xs font-bold text-white bg-green-500 px-2.5 py-1 rounded-full"
                >
                  {p.saveLabel}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Free plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col"
          >
            <div className="mb-6">
              <p className="text-slate-400 text-sm font-semibold mb-1">{p.free}</p>
              <p className="text-4xl font-black text-white">€0</p>
              <p className="text-slate-500 text-sm mt-1">{p.freeSub}</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {p.freeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-slate-400 text-sm">
                  <Check className="w-4 h-4 text-slate-500 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href="#download"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="block w-full text-center py-3.5 rounded-2xl border border-white/20 text-white font-bold text-sm hover:bg-white/10 transition-colors"
            >
              {p.startFree}
            </motion.a>
          </motion.div>

          {/* Plus plan */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-gradient-to-b from-orange-500/20 to-blue-600/20 border border-orange-500/40 rounded-3xl p-8 flex flex-col overflow-hidden shadow-2xl shadow-orange-500/10"
          >
            {/* Popular badge */}
            <div className="absolute top-0 right-6 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg"
              >
                {p.popularBadge}
              </motion.div>
            </div>

            {/* Shine */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-orange-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-orange-400" />
                <p className="text-orange-300 text-sm font-bold">{p.plus}</p>
              </div>
              <div className="flex items-end gap-1">
                <motion.span
                  key={yearly ? "year" : "month"}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-black text-white"
                >
                  €{yearly ? yearlyMonthly.toFixed(2) : monthlyPrice.toFixed(2)}
                </motion.span>
                <span className="text-slate-400 text-sm mb-1.5">{p.perMonth}</span>
              </div>
              {yearly && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-slate-400 text-xs mt-1"
                >
                  €{(yearlyMonthly * 12).toFixed(2)}{p.perYear}
                </motion.p>
              )}
              <p className="text-slate-400 text-sm mt-1">{p.plusSub}</p>
            </div>

            <ul className="space-y-3 flex-1 mb-8">
              {p.plusFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white text-sm">
                  <div className="w-4 h-4 bg-orange-500/25 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-orange-400" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <motion.a
              href="#download"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 16px 48px rgba(249,115,22,0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className="block w-full text-center py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 text-white font-black text-sm shadow-lg"
            >
              {p.getPlusCta}
            </motion.a>
          </motion.div>
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mb-14"
        >
          🔒 {p.guarantee}
        </motion.p>

        {/* Feature comparison highlight bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-14"
        >
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            {[
              { icon: "⚡", label: "Unlimited swipes", sub: "Never run out of matches" },
              { icon: "👀", label: "See who liked you", sub: "Know before you swipe" },
              { icon: "🚀", label: "2× profile boost", sub: "Get seen by more athletes" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl mb-2">{item.icon}</div>
                <p className="text-white font-bold mb-1">{item.label}</p>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mini FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest text-center mb-5">
            {p.faqLabel}
          </p>
          <div className="space-y-2">
            {p.faqs.map((faq) => (
              <PlusFAQ key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
