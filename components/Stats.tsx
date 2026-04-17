"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    {
      value: 50000,
      suffix: "+",
      label: t.stats.athletes,
      icon: "🏃",
      color: "text-blue-600",
      bg: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
    {
      value: 10000,
      suffix: "+",
      label: t.stats.matches,
      icon: "❤️",
      color: "text-rose-500",
      bg: "from-rose-50 to-pink-100",
      border: "border-rose-200",
    },
    {
      value: 85,
      suffix: "+",
      label: t.stats.coaches,
      icon: "🏅",
      color: "text-orange-500",
      bg: "from-orange-50 to-amber-100",
      border: "border-orange-200",
    },
    {
      value: 30,
      suffix: "+",
      label: t.stats.sports,
      icon: "⚡",
      color: "text-purple-500",
      bg: "from-purple-50 to-violet-100",
      border: "border-purple-200",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent mb-8 md:mb-16" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-gradient-to-br ${stat.bg} border ${stat.border} rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center overflow-hidden group cursor-default`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="text-3xl sm:text-4xl mb-2 sm:mb-3 block"
              >
                {stat.icon}
              </motion.div>
              <div className={`text-2xl sm:text-4xl font-black ${stat.color} mb-1`}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
              <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-white/40 rounded-full" />
            </motion.div>
          ))}
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent mt-8 md:mt-16" />
      </div>
    </section>
  );
}
