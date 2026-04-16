"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t.navbar.features, href: "#features" },
    { label: t.navbar.howItWorks, href: "#swipe-demo" },
    { label: t.navbar.pricing, href: "#pricing" },
    { label: t.navbar.testimonials, href: "#testimonials" },
    { label: t.navbar.faq, href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-brand rounded-xl flex items-center justify-center shadow-md">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight">
            <span className="text-gradient">Sport</span>
            <span className="text-slate-800">li</span>
          </span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-brand group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* Right cluster */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 text-xs font-bold transition-all duration-200 bg-white/70 backdrop-blur-sm"
            title="Switch language"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === "en" ? "🇳🇱 NL" : "🇬🇧 EN"}
          </motion.button>

          {/* CTA */}
          <motion.a
            href="#download"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 28px rgba(37,99,235,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            className="px-5 py-2.5 bg-gradient-brand text-white font-bold text-sm rounded-full shadow-md"
          >
            {t.navbar.cta}
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "nl" : "en")}
            className="p-1.5 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 bg-white/70"
          >
            {lang === "en" ? "🇳🇱" : "🇬🇧"}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden glass border-t border-white/30 mt-1 overflow-hidden"
          >
            <div className="px-4 py-5 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 font-semibold hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="mt-1 px-5 py-3 bg-gradient-brand text-white font-bold text-sm rounded-full text-center"
              >
                {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
