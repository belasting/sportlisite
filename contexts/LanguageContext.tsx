"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { en } from "@/lib/translations/en";
import { nl } from "@/lib/translations/nl";

type Lang = "en" | "nl";
type Translations = typeof en;

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function detectLangSync(): Lang {
  try {
    const saved = localStorage.getItem("sportli-lang");
    if (saved === "nl" || saved === "en") return saved;

    const browserLang =
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      "";
    if (browserLang.toLowerCase().startsWith("nl")) return "nl";

    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === "Europe/Amsterdam") return "nl";
  } catch {
    // SSR or restricted environment
  }
  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const detected = detectLangSync();
    setLangState(detected);

    // If no saved preference and sync detection returned "en", try IP geolocation
    try {
      const saved = localStorage.getItem("sportli-lang");
      if (!saved && detected === "en") {
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 3000);
        fetch("https://ipapi.co/json/", { signal: controller.signal })
          .then((r) => r.json())
          .then((data) => {
            clearTimeout(timer);
            if (data.country_code === "NL") {
              setLangState("nl");
            }
          })
          .catch(() => {});
      }
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("sportli-lang", l);
    } catch {}
  };

  const t = (lang === "nl" ? nl : en) as typeof en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
