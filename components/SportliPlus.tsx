"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Check, X, Zap, Star, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type Plan = {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ReactNode;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  normalYearly: number | null;
  trialDays?: number;
  accentFrom: string;
  accentTo: string;
  borderColor: string;
  badgeBg: string;
  popular?: boolean;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaStyle: string;
};

export default function SportliPlus() {
  const { t } = useLanguage();
  const p = t.pricing;
  const [yearly, setYearly] = useState(false);

  const plans: Plan[] = [
    {
      id: "free",
      name: p.plans.free.name,
      icon: <span className="text-2xl">🆓</span>,
      monthlyPrice: 0,
      yearlyPrice: null,
      normalYearly: null,
      accentFrom: "from-slate-400",
      accentTo: "to-slate-500",
      borderColor: "border-white/10",
      badgeBg: "",
      features: p.plans.free.features,
      cta: p.plans.free.cta,
      ctaStyle: "border border-white/20 text-white hover:bg-white/10",
    },
    {
      id: "plus",
      name: p.plans.plus.name,
      badge: "Plus",
      badgeColor: "text-blue-300",
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      monthlyPrice: 6.99,
      yearlyPrice: 69.99,
      normalYearly: 84,
      accentFrom: "from-blue-500",
      accentTo: "to-indigo-600",
      borderColor: "border-blue-500/30",
      badgeBg: "bg-blue-500/20",
      features: p.plans.plus.features,
      cta: p.plans.plus.cta,
      ctaStyle: "bg-blue-600 hover:bg-blue-500 text-white",
    },
    {
      id: "gold",
      name: p.plans.gold.name,
      badge: "Gold",
      badgeColor: "text-yellow-300",
      icon: <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />,
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      normalYearly: 120,
      trialDays: 7,
      accentFrom: "from-yellow-400",
      accentTo: "to-orange-500",
      borderColor: "border-yellow-500/40",
      badgeBg: "bg-yellow-500/20",
      popular: true,
      features: p.plans.gold.features,
      cta: p.plans.gold.cta,
      ctaStyle: "bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 font-black",
    },
    {
      id: "premium",
      name: p.plans.premium.name,
      badge: "Premium",
      badgeColor: "text-purple-300",
      icon: <Crown className="w-6 h-6 text-purple-400" />,
      monthlyPrice: 13.99,
      yearlyPrice: 129.99,
      normalYearly: 168,
      accentFrom: "from-purple-500",
      accentTo: "to-pink-600",
      borderColor: "border-purple-500/30",
      badgeBg: "bg-purple-500/20",
      features: p.plans.premium.features,
      cta: p.plans.premium.cta,
      ctaStyle: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    },
  ];

  return (
    <section id="pricing" className="py-14 md:py-24 relative overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-950" />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute -top-40 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, delay: 3 }}
        className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl pointer-events-none"
      />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
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
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${yearly ? "bg-orange-500" : "bg-slate-700"}`}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col rounded-3xl border ${plan.borderColor} overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-yellow-500/10 to-orange-500/10 shadow-2xl shadow-yellow-500/10"
                  : "bg-white/5"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-px">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 text-xs font-black px-5 py-1.5 rounded-b-xl"
                  >
                    {p.popularBadge}
                  </motion.div>
                </div>
              )}

              <div className={`p-6 flex flex-col flex-1 ${plan.popular ? "pt-9" : ""}`}>
                {/* Plan header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-10 h-10 ${plan.badgeBg || "bg-white/10"} rounded-xl flex items-center justify-center`}>
                    {plan.icon}
                  </div>
                  <div>
                    <p className={`font-bold text-base ${plan.badgeColor || "text-slate-300"}`}>
                      {plan.name}
                    </p>
                    {plan.trialDays && (
                      <p className="text-[11px] text-green-400 font-semibold">
                        {plan.trialDays} {p.trialLabel}
                      </p>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  {plan.monthlyPrice === 0 ? (
                    <p className="text-4xl font-black text-white">€0</p>
                  ) : (
                    <div>
                      <div className="flex items-end gap-1">
                        <motion.span
                          key={`${plan.id}-${yearly}`}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-4xl font-black text-white"
                        >
                          €{yearly
                            ? (plan.yearlyPrice! / 12).toFixed(2)
                            : plan.monthlyPrice!.toFixed(2)}
                        </motion.span>
                        <span className="text-slate-400 text-sm mb-1.5">{p.perMonth}</span>
                      </div>
                      {yearly && plan.yearlyPrice && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-1 flex items-center gap-2"
                        >
                          <span className="text-slate-400 text-xs">
                            €{plan.yearlyPrice}{p.perYear}
                          </span>
                          {plan.normalYearly && (
                            <span className="text-slate-600 text-xs line-through">
                              €{plan.normalYearly}
                            </span>
                          )}
                        </motion.div>
                      )}
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2">
                      {f.included ? (
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-gradient-to-br ${plan.accentFrom} ${plan.accentTo}`}>
                          <Check className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-slate-800/60">
                          <X className="w-2.5 h-2.5 text-slate-500" />
                        </div>
                      )}
                      <span className={`text-sm leading-snug ${f.included ? "text-slate-300" : "text-slate-600 line-through decoration-slate-600/50"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.a
                  href="#download"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block w-full text-center py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-10"
        >
          🔒 {p.guarantee}
        </motion.p>
      </div>
    </section>
  );
}
