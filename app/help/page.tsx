"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChevronDown, Search } from "lucide-react";

const categories = [
  {
    emoji: "🚀",
    titleNL: "Aan de slag",
    titleEN: "Getting started",
    items: [
      {
        qNL: "Hoe maak ik een account aan?",
        qEN: "How do I create an account?",
        aNL: "Download Sportli uit de App Store of Google Play. Open de app en tik op 'Aanmelden'. Voer je telefoonnummer in en verificeer via SMS. Vul je profiel in met je sport(en), niveau en locatie.",
        aEN: "Download Sportli from the App Store or Google Play. Open the app and tap 'Sign up'. Enter your phone number and verify via SMS. Complete your profile with your sport(s), level, and location.",
      },
      {
        qNL: "Is Sportli gratis?",
        qEN: "Is Sportli free?",
        aNL: "Ja! Sportli is volledig gratis te downloaden en te gebruiken. Sportli+ biedt extra functies zoals onbeperkt swipen, geavanceerde filters en profielboosters.",
        aEN: "Yes! Sportli is completely free to download and use. Sportli+ offers extras like unlimited swipes, advanced filters, and profile boosts.",
      },
    ],
  },
  {
    emoji: "❤️",
    titleNL: "Matchen & Swipen",
    titleEN: "Matching & Swiping",
    items: [
      {
        qNL: "Hoe werkt het swipen?",
        qEN: "How does swiping work?",
        aNL: "Swipe naar rechts als je iemand wilt ontmoeten, naar links als je wilt passen. Als jullie allebei naar rechts swipen, is het een match en kunnen jullie chatten.",
        aEN: "Swipe right if you want to meet someone, left to pass. When you both swipe right, it's a match and you can start chatting.",
      },
      {
        qNL: "Waarom zie ik weinig profielen?",
        qEN: "Why am I seeing few profiles?",
        aNL: "Controleer je zoekradius in de instellingen. Je kunt de afstand vergroten om meer sporters te zien. Zorg ook dat je sport en niveau correct zijn ingesteld.",
        aEN: "Check your search radius in settings. You can increase the distance to see more athletes. Also make sure your sport and level are set correctly.",
      },
    ],
  },
  {
    emoji: "💬",
    titleNL: "Chats & Groepen",
    titleEN: "Chats & Groups",
    items: [
      {
        qNL: "Hoe maak ik een groep aan?",
        qEN: "How do I create a group?",
        aNL: "Ga naar het tabblad 'Groepen' en tik op het '+' icoon. Kies een naam, sport, beschrijving en maximaal aantal leden. Nodig vrienden uit via de app of link.",
        aEN: "Go to the 'Groups' tab and tap the '+' icon. Choose a name, sport, description, and maximum member count. Invite friends via the app or a share link.",
      },
    ],
  },
  {
    emoji: "🔒",
    titleNL: "Privacy & Veiligheid",
    titleEN: "Privacy & Safety",
    items: [
      {
        qNL: "Hoe meld ik een gebruiker?",
        qEN: "How do I report a user?",
        aNL: "Open het profiel van de gebruiker en tik op de drie puntjes rechtsbovenin. Kies 'Rapporteren' en volg de stappen. Ons team bekijkt elke melding binnen 24 uur.",
        aEN: "Open the user's profile and tap the three dots in the top right. Choose 'Report' and follow the steps. Our team reviews every report within 24 hours.",
      },
      {
        qNL: "Wie kan mijn profiel zien?",
        qEN: "Who can see my profile?",
        aNL: "Alleen andere Sportli-gebruikers kunnen je profiel zien via de swipe-feed. Je locatie wordt nooit exact gedeeld — alleen de afstand wordt getoond.",
        aEN: "Only other Sportli users can see your profile through the swipe feed. Your exact location is never shared — only distance is shown.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-b border-slate-100 last:border-0"
      onClick={() => setOpen(!open)}
    >
      <button className="w-full text-left py-4 flex items-center justify-between gap-4">
        <span className="font-semibold text-slate-800 text-sm leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-slate-500 text-sm pb-4 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HelpPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-slate-900 mb-5">
              {isNL ? "Help Center" : "Help Center"}
            </h1>
            <p className="text-slate-500 text-xl mb-8">
              {isNL ? "Hoe kunnen we helpen?" : "How can we help you?"}
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={isNL ? "Zoek een onderwerp..." : "Search for a topic..."}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all text-base bg-white shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            {categories
              .filter((cat) => {
                if (!search) return true;
                const s = search.toLowerCase();
                return (
                  cat.titleNL.toLowerCase().includes(s) ||
                  cat.titleEN.toLowerCase().includes(s) ||
                  cat.items.some(
                    (item) =>
                      item.qNL.toLowerCase().includes(s) ||
                      item.qEN.toLowerCase().includes(s) ||
                      item.aNL.toLowerCase().includes(s) ||
                      item.aEN.toLowerCase().includes(s)
                  )
                );
              })
              .map((cat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="px-6 pt-6 pb-2 flex items-center gap-3 border-b border-slate-50">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h2 className="font-poppins font-bold text-slate-900 text-lg">
                      {isNL ? cat.titleNL : cat.titleEN}
                    </h2>
                  </div>
                  <div className="px-6">
                    {cat.items.map((item, j) => (
                      <FaqItem
                        key={j}
                        q={isNL ? item.qNL : item.qEN}
                        a={isNL ? item.aNL : item.aEN}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-poppins text-3xl font-bold text-white mb-3">
              {isNL ? "Niet gevonden wat je zoekt?" : "Didn't find what you're looking for?"}
            </h2>
            <p className="text-blue-200 mb-6">
              {isNL ? "Ons support-team staat 24/7 voor je klaar." : "Our support team is available 24/7."}
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl hover:bg-blue-50 transition-colors"
            >
              {isNL ? "Neem contact op" : "Contact support"}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
