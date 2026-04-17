"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ boxShadow: open ? undefined : "0 4px 24px rgba(37,99,235,0.07)" }}
      className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
        open ? "border-blue-300 shadow-md" : "border-slate-200 hover:border-blue-200"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 text-left bg-white"
      >
        <span className="font-semibold text-slate-800 pr-4 leading-snug">{q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
            open ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-6 sm:pb-5 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-3 sm:pt-4 bg-blue-50/30">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <section id="faq" className="py-14 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="section-tag bg-green-50 text-green-600 border border-green-200">
            {f.tag}
          </span>
          <h2 className="font-poppins text-4xl sm:text-5xl font-black text-slate-900 mt-2">
            {f.headline1}{" "}
            <span className="text-gradient">{f.headline2}</span>
          </h2>
          <p className="mt-4 text-slate-500 text-lg">{f.sub}</p>
        </motion.div>

        <div className="space-y-3">
          {f.items.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <FAQItem q={faq.q} a={faq.a} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center bg-gradient-to-br from-blue-50 to-orange-50 border border-blue-100 rounded-3xl px-8 py-8"
        >
          <p className="text-2xl mb-2">💬</p>
          <h3 className="font-bold text-slate-900 text-lg mb-2">{f.stillQ}</h3>
          <p className="text-slate-500 text-sm mb-5">{f.stillSub}</p>
          <motion.a
            href="mailto:hello@sportli.app"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-gradient-brand text-white font-bold px-6 py-3 rounded-full text-sm shadow-md"
          >
            {f.contactBtn}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
