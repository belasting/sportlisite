"use client";

import { motion } from "framer-motion";
import { Zap, Instagram, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  { icon: Instagram, label: "Instagram", color: "hover:text-pink-500 hover:border-pink-300" },
  { icon: Twitter, label: "Twitter/X", color: "hover:text-sky-400 hover:border-sky-300" },
  { icon: Facebook, label: "Facebook", color: "hover:text-blue-500 hover:border-blue-300" },
  { icon: Youtube, label: "YouTube", color: "hover:text-red-500 hover:border-red-300" },
  { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600 hover:border-blue-300" },
];

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <motion.div whileHover={{ scale: 1.04 }} className="flex items-center gap-2 mb-5 cursor-pointer">
              <div className="w-9 h-9 bg-gradient-brand rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Sport<span className="text-orange-400">li</span>
              </span>
            </motion.div>

            <p className="text-slate-500 text-sm leading-relaxed mb-6">{f.tagline}</p>

            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={s.label}
                  className={`w-9 h-9 bg-slate-800 border border-slate-700 rounded-xl flex items-center justify-center text-slate-400 transition-all duration-200 ${s.color}`}
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              {[
                { icon: "🍎", label: t.hero.appStoreLabel, sub: t.hero.appStore },
                { icon: "▶", label: t.hero.googlePlayLabel, sub: t.hero.googlePlay },
              ].map((store) => (
                <motion.a
                  key={store.label}
                  href="#download"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  <span className="text-base">{store.icon}</span>
                  <span>
                    <span className="block text-[10px] text-slate-600">{store.sub}</span>
                    <span className="font-semibold text-slate-400">{store.label}</span>
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(f.links).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold">{f.newsletter}</p>
              <p className="text-slate-500 text-sm">{f.newsletterSub}</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder={f.placeholder}
                className="flex-1 sm:w-64 bg-slate-800 border border-slate-700 text-slate-200 placeholder:text-slate-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-500 transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-gradient-brand text-white font-bold text-sm rounded-xl shrink-0"
              >
                {f.subscribe}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {f.copyright} {f.madeWith}
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-green-500 rounded-full"
            />
            {f.status}
          </div>
        </div>
      </div>
    </footer>
  );
}
