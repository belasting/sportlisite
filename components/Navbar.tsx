"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const FlagNL = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" rx="2" fill="#AE1C28" />
    <rect y="4.67" width="20" height="4.66" fill="#fff" />
    <rect y="9.33" width="20" height="4.67" fill="#21468B" />
  </svg>
);

const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="40" rx="2" fill="#012169" />
    <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="11" />
    <path d="M0 0L60 40" stroke="#C8102E" strokeWidth="7" />
    <path d="M60 0L0 40" stroke="#C8102E" strokeWidth="7" />
    <path d="M30 0V40M0 20H60" stroke="#fff" strokeWidth="14" />
    <path d="M30 0V40M0 20H60" stroke="#C8102E" strokeWidth="9" />
  </svg>
);

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const companyRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: t.navbar.features, href: "#features" },
    { label: t.navbar.howItWorks, href: "#swipe-demo" },
    { label: t.navbar.pricing, href: "#pricing" },
    { label: t.navbar.faq, href: "#faq" },
  ];

  const companyLinks = [
    { label: lang === "nl" ? "Over ons" : "About us", href: "/about", emoji: "🚀" },
    { label: lang === "nl" ? "Vacatures" : "Careers", href: "/careers", emoji: "💼" },
    { label: lang === "nl" ? "Contact" : "Contact", href: "/contact", emoji: "💬" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close company dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (companyRef.current && !companyRef.current.contains(e.target as Node)) {
        setCompanyOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleLang = () => setLang(lang === "en" ? "nl" : "en");
  const TargetFlag = lang === "nl" ? FlagGB : FlagNL;
  const targetLabel = lang === "nl" ? "EN" : "NL";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-md py-1.5" : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.a href="/" whileHover={{ scale: 1.04 }} className="flex items-center shrink-0">
          <Image
            src="/logo.png"
            alt="Sportli"
            height={30}
            width={110}
            className="object-contain"
            priority
          />
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-medium text-xs px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* Company dropdown */}
          <div ref={companyRef} className="relative">
            <button
              type="button"
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium text-xs px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 cursor-pointer"
            >
              {lang === "nl" ? "Bedrijf" : "Company"}
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {companyOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1.5 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                >
                  {companyLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setCompanyOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <span className="text-base">{link.emoji}</span>
                      <span className="font-medium">{link.label}</span>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right cluster */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          {/* Language toggle */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLang}
            aria-label={`Switch to ${targetLabel}`}
            title={`Switch to ${targetLabel}`}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 hover:border-blue-300 text-slate-600 hover:text-blue-600 text-xs font-bold transition-all duration-200 bg-white/80 backdrop-blur-sm cursor-pointer select-none"
          >
            <TargetFlag />
            <span>{targetLabel}</span>
          </motion.button>

          {/* CTA */}
          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 24px rgba(37,99,235,0.3)" }}
            whileTap={{ scale: 0.97 }}
            className="px-4 py-2 bg-gradient-brand text-white font-bold text-xs rounded-full shadow-md"
          >
            {t.navbar.cta}
          </motion.a>
        </div>

        {/* Mobile: lang + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={`Switch to ${targetLabel}`}
            className="flex items-center gap-1 p-1.5 rounded-lg border border-slate-200 bg-white/80 cursor-pointer"
          >
            <TargetFlag />
            <span className="text-xs font-bold text-slate-600">{targetLabel}</span>
          </button>
          <button
            type="button"
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
            transition={{ duration: 0.22 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-700 font-semibold text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Divider */}
              <div className="my-1 border-t border-slate-100" />

              {companyLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 text-slate-700 font-semibold text-sm hover:text-blue-600 hover:bg-blue-50 px-3 py-2.5 rounded-xl transition-colors"
                >
                  <span>{link.emoji}</span>
                  {link.label}
                </a>
              ))}

              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 bg-gradient-brand text-white font-bold text-sm rounded-full text-center"
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
