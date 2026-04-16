"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const { lang } = useLanguage();
  const isNL = lang === "nl";

  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-white">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-orange-50 py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="font-poppins text-5xl sm:text-6xl font-black text-slate-900 mb-5">
              {isNL ? "Neem contact op" : "Get in touch"}
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed">
              {isNL
                ? "Vragen, feedback of hulp nodig? Wij reageren doorgaans binnen een uur."
                : "Questions, feedback, or need help? We typically respond within an hour."}
            </p>
          </div>
        </section>

        {/* Contact options + form */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Mail,
                  titleNL: "E-mail",
                  titleEN: "Email",
                  descNL: "Stuur ons een mail",
                  descEN: "Send us an email",
                  value: "hello@sportli.app",
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  icon: MessageCircle,
                  titleNL: "Live chat",
                  titleEN: "Live chat",
                  descNL: "In de app beschikbaar",
                  descEN: "Available in the app",
                  value: isNL ? "Open de app" : "Open the app",
                  color: "from-orange-500 to-rose-500",
                },
                {
                  icon: Clock,
                  titleNL: "Responstijd",
                  titleEN: "Response time",
                  descNL: "Gemiddeld",
                  descEN: "On average",
                  value: "< 1 uur",
                  color: "from-green-500 to-emerald-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-poppins font-bold text-slate-900 mb-1">
                    {isNL ? item.titleNL : item.titleEN}
                  </h3>
                  <p className="text-slate-400 text-sm mb-2">{isNL ? item.descNL : item.descEN}</p>
                  <p className="font-semibold text-slate-700 text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Contact form */}
            <div className="max-w-2xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl border border-slate-100 shadow-lg p-8"
              >
                {sent ? (
                  <div className="text-center py-8">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="font-poppins text-2xl font-bold text-slate-900 mb-2">
                      {isNL ? "Bericht verzonden!" : "Message sent!"}
                    </h2>
                    <p className="text-slate-500">
                      {isNL
                        ? "We reageren zo snel mogelijk op je bericht."
                        : "We'll get back to you as soon as possible."}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-poppins text-2xl font-bold text-slate-900 mb-6">
                      {isNL ? "Stuur een bericht" : "Send a message"}
                    </h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          {isNL ? "Naam" : "Name"}
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                          placeholder={isNL ? "Jouw naam" : "Your name"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          {isNL ? "E-mailadres" : "Email address"}
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all"
                          placeholder="jouw@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        {isNL ? "Onderwerp" : "Subject"}
                      </label>
                      <select
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all bg-white"
                      >
                        <option value="">{isNL ? "Selecteer een onderwerp" : "Select a subject"}</option>
                        <option value="support">{isNL ? "Technische ondersteuning" : "Technical support"}</option>
                        <option value="account">{isNL ? "Account & facturering" : "Account & billing"}</option>
                        <option value="feedback">{isNL ? "Feedback geven" : "Give feedback"}</option>
                        <option value="partnership">{isNL ? "Samenwerking" : "Partnership"}</option>
                        <option value="other">{isNL ? "Overig" : "Other"}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        {isNL ? "Bericht" : "Message"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all resize-none"
                        placeholder={isNL ? "Beschrijf je vraag of feedback..." : "Describe your question or feedback..."}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl text-base hover:shadow-lg transition-all"
                    >
                      {isNL ? "Bericht versturen" : "Send message"}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
