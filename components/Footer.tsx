"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Twitter, Facebook, Youtube, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AppleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const GooglePlayIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.18 23.39C3.07 23.32 3 23.18 3 23V1C3 .82 3.07.68 3.18.61L13.54 12z" fill="#00D2FF"/>
    <path d="M16.85 8.8L5.44 2.15 13.54 12z" fill="#0DE06A"/>
    <path d="M5.44 21.85l11.41-6.65L13.54 12z" fill="#FF3D39"/>
    <path d="M20.38 10.25l-3.53-2.06-3.31 3.81 3.31 3.81 3.54-2.06a2 2 0 000-3.5z" fill="#FFD400"/>
  </svg>
);

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <motion.a href="/" whileHover={{ scale: 1.04 }} className="flex items-center mb-5 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Sportli"
                height={38}
                width={130}
                className="object-contain brightness-0 invert"
              />
            </motion.a>

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

            <div className="mt-6 flex flex-col gap-3">
              <motion.a
                href="#download"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 rounded-xl px-4 py-3 transition-colors"
              >
                <AppleIcon className="w-6 h-6 text-slate-300 shrink-0" />
                <span>
                  <span className="block text-[10px] text-slate-500">{t.hero.appStore}</span>
                  <span className="font-semibold text-slate-300 text-sm">{t.hero.appStoreLabel}</span>
                </span>
              </motion.a>

              <motion.a
                href="#download"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 rounded-xl px-4 py-3 transition-colors"
              >
                <GooglePlayIcon className="w-6 h-6 shrink-0" />
                <span>
                  <span className="block text-[10px] text-slate-500">{t.hero.googlePlay}</span>
                  <span className="font-semibold text-slate-300 text-sm">{t.hero.googlePlayLabel}</span>
                </span>
              </motion.a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(f.links).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {(links as { text: string; href: string }[]).map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-slate-200 text-sm transition-colors duration-200"
                    >
                      {link.text}
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
