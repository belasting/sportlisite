"use client";

import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { useState } from "react";
import { X, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const PROFILES = [
  {
    name: "Maria",
    age: 27,
    emoji: "👩‍🦱",
    activities: ["Swimming", "Yoga"],
    km: "1.5",
    color: "from-blue-400 via-cyan-400 to-teal-400",
    bio: "Early bird swimmer & yoga enthusiast. Let's train together!",
  },
  {
    name: "Jake",
    age: 31,
    emoji: "🧔",
    activities: ["Weightlifting", "CrossFit"],
    km: "0.8",
    color: "from-violet-500 via-purple-500 to-indigo-500",
    bio: "5am gym sessions. Looking for a serious lifting partner.",
  },
  {
    name: "Sarah",
    age: 24,
    emoji: "👩",
    activities: ["Running", "HIIT"],
    km: "2.1",
    color: "from-orange-400 via-red-400 to-pink-400",
    bio: "Half-marathon runner. Need someone to push my pace!",
  },
  {
    name: "Carlos",
    age: 29,
    emoji: "👨‍🦰",
    activities: ["Football", "Tennis"],
    km: "3.2",
    color: "from-green-400 via-emerald-400 to-teal-500",
    bio: "Weekend warrior. Always up for a 5-a-side or tennis match.",
  },
];

function SwipeCard({
  profile,
  index,
  onSwipe,
}: {
  profile: (typeof PROFILES)[0];
  index: number;
  onSwipe: (dir: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-220, 220], [-22, 22]);
  const opacity = useTransform(x, [-180, -80, 0, 80, 180], [0, 1, 1, 1, 0]);
  const likeOpacity = useTransform(x, [30, 90], [0, 1]);
  const nopeOpacity = useTransform(x, [-90, -30], [1, 0]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (Math.abs(info.offset.x) > 90) {
      const dir = info.offset.x > 0 ? "right" : "left";
      animate(x, dir === "right" ? 600 : -600, { duration: 0.35 });
      setTimeout(() => onSwipe(dir), 350);
    } else {
      animate(x, 0, { type: "spring", stiffness: 280, damping: 25 });
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        opacity,
        position: "absolute",
        zIndex: PROFILES.length - index,
        top: 0,
        left: 0,
        right: 0,
        scale: 1 - index * 0.04,
        y: index * 14,
      }}
      drag="x"
      dragConstraints={{ left: -600, right: 600 }}
      dragElastic={0.7}
      onDragEnd={handleDragEnd}
      className="cursor-grab active:cursor-grabbing touch-none"
    >
      <div
        className="bg-white rounded-3xl shadow-2xl overflow-hidden select-none w-full"
        style={{ height: "420px" }}
      >
        <div
          className={`h-60 bg-gradient-to-br ${profile.color} relative overflow-hidden`}
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full" />
          <div className="absolute -left-6 -bottom-10 w-24 h-24 bg-white/10 rounded-full" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl filter drop-shadow-lg">{profile.emoji}</div>
          </div>

          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-5 left-5 bg-green-500 text-white text-xl font-black px-5 py-2 rounded-2xl border-4 border-white rotate-[-15deg] shadow-lg"
          >
            LIKE ❤️
          </motion.div>

          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-5 right-5 bg-red-500 text-white text-xl font-black px-5 py-2 rounded-2xl border-4 border-white rotate-[15deg] shadow-lg"
          >
            NOPE ✕
          </motion.div>

          <div className="absolute bottom-4 left-5 right-5">
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-white text-2xl font-black">
                  {profile.name}, {profile.age}
                </h3>
                <p className="text-white/80 text-sm font-medium">
                  📍 {profile.km} km
                </p>
              </div>
              <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Online
              </div>
            </div>
          </div>
        </div>

        <div className="p-5">
          <div className="flex gap-2 flex-wrap mb-3">
            {profile.activities.map((a) => (
              <span
                key={a}
                className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="text-slate-500 text-sm leading-relaxed">{profile.bio}</p>
        </div>

        {index === 0 && (
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <motion.p
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-slate-400 text-xs font-medium"
            >
              ← Drag to decide →
            </motion.p>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function SwipeDemo() {
  const { t } = useLanguage();
  const s = t.swipeDemo;
  const [profiles, setProfiles] = useState(PROFILES);
  const [action, setAction] = useState<"like" | "nope" | null>(null);

  const cycle = (dir: "left" | "right") => {
    setAction(dir === "right" ? "like" : "nope");
    setTimeout(() => {
      setProfiles((prev) => [...prev.slice(1), prev[0]]);
      setAction(null);
    }, 420);
  };

  return (
    <section
      id="swipe-demo"
      className="py-14 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/40 to-orange-50/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="section-tag bg-orange-50 text-orange-600 border border-orange-200">
              {s.tag}
            </span>
            <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mt-2 mb-5">
              {s.headline1}{" "}
              <span className="text-gradient">{s.headline2}</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              {s.sub}
            </p>

            <div className="space-y-5">
              {[
                { icon: "👉", title: s.step1title, desc: s.step1desc },
                { icon: "✅", title: s.step2title, desc: s.step2desc },
                { icon: "💬", title: s.step3title, desc: s.step3desc },
              ].map((step) => (
                <motion.div
                  key={step.title}
                  whileHover={{ x: 6 }}
                  className="flex items-start gap-4 group"
                >
                  <span className="text-2xl mt-0.5">{step.icon}</span>
                  <div>
                    <p className="font-bold text-slate-900">{step.title}</p>
                    <p className="text-slate-500 text-sm mt-0.5">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="max-w-sm mx-auto">
              <div className="relative" style={{ height: "450px" }}>
                {profiles.slice(0, 3).map((profile, i) => (
                  <SwipeCard
                    key={profile.name}
                    profile={profile}
                    index={i}
                    onSwipe={cycle}
                  />
                ))}
              </div>

              <div className="flex justify-center items-center gap-6 mt-4">
                <motion.button
                  whileHover={{ scale: 1.12, boxShadow: "0 12px 30px rgba(239,68,68,0.25)" }}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => cycle("left")}
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-red-100 hover:border-red-400 transition-colors"
                >
                  <X className="w-7 h-7 text-red-400" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center border border-slate-200 text-lg"
                >
                  ⭐
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.12, boxShadow: "0 12px 30px rgba(34,197,94,0.25)" }}
                  whileTap={{ scale: 0.88 }}
                  onClick={() => cycle("right")}
                  className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-100 hover:border-green-400 transition-colors"
                >
                  <Heart className="w-7 h-7 text-green-400" />
                </motion.button>
              </div>

              <div className="h-8 flex items-center justify-center mt-3">
                {action ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className={`text-lg font-black ${
                      action === "like" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {action === "like" ? s.liked : s.passed}
                  </motion.div>
                ) : (
                  <p className="text-xs text-slate-400 font-medium">{s.hint}</p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
