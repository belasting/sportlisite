"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Users,
  MessageCircle,
  Activity,
  Target,
  UserPlus,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FEATURE_META = [
  {
    icon: Heart,
    tagColor: "text-rose-500",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    cardBg: "bg-rose-50",
    glow: "group-hover:shadow-rose-100",
    mini: (
      <div className="mt-4 flex gap-2">
        <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm text-center">
          <div className="text-2xl mb-1">🏃‍♀️</div>
          <p className="text-xs font-bold text-slate-800">Maria, 27</p>
          <p className="text-[10px] text-slate-400 mb-2">1.2 km</p>
          <div className="flex justify-center gap-2">
            <button className="w-7 h-7 bg-red-100 rounded-full text-xs flex items-center justify-center">✕</button>
            <button className="w-7 h-7 bg-green-100 rounded-full text-xs flex items-center justify-center">♥</button>
          </div>
        </div>
        <div className="flex-1 bg-white/60 rounded-2xl p-3 shadow-sm text-center opacity-50 scale-95">
          <div className="text-2xl mb-1">🏋️</div>
          <p className="text-xs font-bold text-slate-700">Jake, 31</p>
          <p className="text-[10px] text-slate-400">0.8 km</p>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    tagColor: "text-blue-500",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    cardBg: "bg-blue-50",
    glow: "group-hover:shadow-blue-100",
    mini: (
      <div className="mt-4 bg-white rounded-2xl p-3 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center text-base shadow">
            👨‍🏫
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold text-slate-800">Coach Mark</p>
            <p className="text-[10px] text-yellow-500">★★★★☆ 4.3 · 38 reviews</p>
          </div>
          <button className="text-[10px] bg-blue-600 text-white px-2 py-1 rounded-lg font-semibold">
            Book
          </button>
        </div>
        <div className="flex gap-1 flex-wrap">
          {["Running", "HIIT", "Triathlon"].map((s) => (
            <span key={s} className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    icon: MessageCircle,
    tagColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-500",
    cardBg: "bg-emerald-50",
    glow: "group-hover:shadow-emerald-100",
    mini: (
      <div className="mt-4 bg-white rounded-2xl p-3 shadow-sm space-y-2">
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs shrink-0">🏃</div>
          <div className="bg-blue-100 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[75%]">
            <p className="text-xs text-slate-700">7am run morgen? 🔥</p>
          </div>
        </div>
        <div className="flex gap-2 items-end flex-row-reverse">
          <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-xs shrink-0">🤸</div>
          <div className="bg-emerald-100 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[75%]">
            <p className="text-xs text-slate-700">Doe mee! 💪</p>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-xs shrink-0">⚽</div>
          <div className="bg-blue-100 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[75%]">
            <p className="text-xs text-slate-700">Ik ook!! 🙌</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Activity,
    tagColor: "text-violet-500",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
    cardBg: "bg-violet-50",
    glow: "group-hover:shadow-violet-100",
    mini: (
      <div className="mt-4 bg-white rounded-2xl p-3 shadow-sm">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-bold text-slate-700">Weekly distance</span>
          <span className="text-xs text-emerald-500 font-bold">↑ 23%</span>
        </div>
        <div className="flex items-end gap-1 h-12 mb-1">
          {[35, 55, 42, 75, 60, 85, 68].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className={`flex-1 rounded-sm ${i === 5 ? "bg-violet-500" : "bg-violet-200"}`}
            />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-slate-400">
          <span>Mon</span>
          <span>Sun</span>
        </div>
      </div>
    ),
  },
  {
    icon: Target,
    tagColor: "text-orange-500",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    cardBg: "bg-orange-50",
    glow: "group-hover:shadow-orange-100",
    mini: (
      <div className="mt-4 bg-white rounded-2xl p-3 shadow-sm space-y-3">
        {[
          { label: "50km this month", pct: 72, color: "from-orange-400 to-orange-500" },
          { label: "10 workouts/week", pct: 80, color: "from-blue-400 to-blue-500" },
        ].map((goal) => (
          <div key={goal.label}>
            <div className="flex justify-between text-[11px] mb-1">
              <span className="font-medium text-slate-700">{goal.label}</span>
              <span className="text-orange-500 font-bold">{goal.pct}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${goal.pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${goal.color} rounded-full`}
              />
            </div>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1">
          <span className="text-base">🏆</span>
          <p className="text-[11px] text-slate-500">3 goals done this week!</p>
        </div>
      </div>
    ),
  },
  {
    icon: UserPlus,
    tagColor: "text-cyan-500",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-500",
    cardBg: "bg-cyan-50",
    glow: "group-hover:shadow-cyan-100",
    mini: (
      <div className="mt-4 bg-white rounded-2xl p-3 shadow-sm">
        <p className="text-[10px] text-slate-400 font-medium mb-2">People you may know</p>
        {[
          { emoji: "⚽", name: "Tom Fischer", mutual: 5 },
          { emoji: "🎾", name: "Lisa Chen", mutual: 3 },
        ].map((f) => (
          <div key={f.name} className="flex items-center gap-2 mb-2 last:mb-0">
            <div className="w-8 h-8 bg-cyan-100 rounded-xl flex items-center justify-center text-sm shrink-0">
              {f.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-800 truncate">{f.name}</p>
              <p className="text-[10px] text-slate-400">{f.mutual} mutual friends</p>
            </div>
            <button className="text-[10px] bg-cyan-500 text-white px-2 py-1 rounded-lg font-semibold shrink-0">
              + Add
            </button>
          </div>
        ))}
      </div>
    ),
  },
];

export default function Features() {
  const { t } = useLanguage();
  const f = t.features;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-tag bg-blue-50 text-blue-600 border border-blue-200">
            {f.tag}
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mt-2">
            {f.headline1}{" "}
            <span className="text-gradient">{f.headline2}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {f.sub}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURE_META.map((meta, i) => {
            const item = f.items[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
                className={`${meta.cardBg} rounded-3xl p-6 group cursor-default transition-all duration-300 ${meta.glow}`}
              >
                <div
                  className={`w-12 h-12 ${meta.iconBg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <meta.icon className={`w-6 h-6 ${meta.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                {meta.mini}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
