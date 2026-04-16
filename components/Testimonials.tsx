"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const TESTIMONIAL_DATA = [
  {
    name: "Emma Richardson",
    role: "Marathon Runner",
    location: "Amsterdam, NL",
    avatar: "🏃‍♀️",
    rating: 5,
    quote:
      "I found my running group through Sportli and we've completed 3 half-marathons together. The swipe feature is addictive — and the matches are incredibly relevant!",
    sport: "Running",
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    name: "Marcus Delgado",
    role: "Fitness Enthusiast",
    location: "Rotterdam, NL",
    avatar: "🏋️",
    rating: 5,
    quote:
      "Found my personal coach through Sportli in under 10 minutes. He's transformed my training. Best fitness investment I've ever made — 100% recommended.",
    sport: "Weightlifting",
    gradient: "from-orange-400 to-red-400",
  },
  {
    name: "Sophie van der Berg",
    role: "Yoga Instructor",
    location: "Utrecht, NL",
    avatar: "🧘‍♀️",
    rating: 4,
    quote:
      "As a coach on Sportli, I grew my client base significantly in just 2 months. The platform makes it so effortless to connect with motivated, serious athletes.",
    sport: "Yoga",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    name: "David Okonkwo",
    role: "Football Player",
    location: "The Hague, NL",
    avatar: "⚽",
    rating: 4,
    quote:
      "Needed players for a 5-a-side game. Sportli matched me with 4 players in an hour. We've been playing every weekend since — this app is great.",
    sport: "Football",
    gradient: "from-green-400 to-emerald-400",
  },
  {
    name: "Priya Sharma",
    role: "Tennis Player",
    location: "Eindhoven, NL",
    avatar: "🎾",
    rating: 5,
    quote:
      "The group chat feature is amazing for organizing matches. My entire tennis group coordinates through Sportli now. Really handy and easy to use!",
    sport: "Tennis",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    name: "Tom Fischer",
    role: "Cyclist",
    location: "Groningen, NL",
    avatar: "🚴",
    rating: 4,
    quote:
      "Matched with 3 cyclists who live 2 km from me. We now do morning rides every Saturday. Sportli literally changed my lifestyle — I'm the fittest I've ever been.",
    sport: "Cycling",
    gradient: "from-cyan-400 to-blue-500",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className={`text-lg ${s <= rating ? "text-yellow-400" : "text-slate-200"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { t } = useLanguage();
  const ts = t.testimonials;
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-tag bg-purple-50 text-purple-600 border border-purple-200">
            {ts.tag}
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mt-2">
            {ts.headline1}{" "}
            <span className="text-gradient">{ts.headline2}</span>
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            {ts.sub}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIAL_DATA.map((testimony, i) => (
            <motion.div
              key={testimony.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0,0,0,0.09)" }}
              className="bg-white rounded-3xl p-6 shadow-sm transition-all duration-300 flex flex-col"
            >
              <Stars rating={testimony.rating} />
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5">
                &ldquo;{testimony.quote}&rdquo;
              </p>
              <div className="h-px bg-slate-100 mb-4" />
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${testimony.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-md shrink-0`}
                >
                  {testimony.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-sm truncate">{testimony.name}</p>
                  <p className="text-xs text-slate-400 truncate">
                    {testimony.role} · {testimony.location}
                  </p>
                </div>
                <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full shrink-0">
                  {testimony.sport}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-slate-500 text-sm"
        >
          {ts.trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 font-medium">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
