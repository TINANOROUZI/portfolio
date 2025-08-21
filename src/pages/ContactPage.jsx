import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { useLang } from "../context/LangContext.jsx";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

export default function ContactPage() {
  const { lang } = useLang();
  const t = {
    en: {
      title: "Contact",
      intro: "I’m available for freelance work and collaborations. Reach out via email or any platform below.",
      name: "Name",
      email: "Email",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@example.com",
      placeholderMsg: "Tell me about your project...",
      send: "Send",
    },
    it: {
      title: "Contatti",
      intro: "Disponibile per lavori freelance e collaborazioni. Scrivimi via email o su una delle piattaforme qui sotto.",
      name: "Nome",
      email: "Email",
      message: "Messaggio",
      placeholderName: "Il tuo nome",
      placeholderEmail: "tu@esempio.com",
      placeholderMsg: "Raccontami del tuo progetto...",
      send: "Invia",
    },
  }[lang];

  return (
    <section id="contact" className="section pt-14 md:pt-20 scroll-mt-24">
      <div className="min-h-[75vh] flex items-center">
        <div className="glass rounded-2xl p-6 md:p-10 w-full">
          <SectionTitle>{t.title}</SectionTitle>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: form */}
            <motion.form variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <motion.div variants={item} className="space-y-2">
                <label className="text-sm text-sub">{t.name}</label>
                <input type="text" placeholder={t.placeholderName} className="w-full rounded-lg bg-white/5 border border-border px-3 py-2 outline-none focus:border-white/40" />
              </motion.div>

              <motion.div variants={item} className="space-y-2">
                <label className="text-sm text-sub">{t.email}</label>
                <input type="email" placeholder={t.placeholderEmail} className="w-full rounded-lg bg-white/5 border border-border px-3 py-2 outline-none focus:border-white/40" />
              </motion.div>

              <motion.div variants={item} className="space-y-2">
                <label className="text-sm text-sub">{t.message}</label>
                <textarea rows="5" placeholder={t.placeholderMsg} className="w-full rounded-lg bg-white/5 border border-border px-3 py-2 outline-none focus:border-white/40 resize-none" />
              </motion.div>

              <motion.div variants={item}>
                <button type="submit" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 border border-border transition">
                  {t.send}
                </button>
              </motion.div>
            </motion.form>

            {/* Right: info */}
            <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="space-y-4">
              <motion.p variants={item} className="text-sub">{t.intro}</motion.p>

              <motion.a variants={item} href="mailto:tinanorouzi14@email.com" className="inline-flex items-center gap-2 link">
                <Mail className="h-4 w-4" />
                tinanorouzi14@email.com
              </motion.a>

              <motion.div variants={item} className="flex gap-3 pt-2">
                <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-white/5 hover:bg-white/10 transition" href="https://www.linkedin.com/in/your-handle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-[18px] w-[18px]" />
                </a>
                <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-white/5 hover:bg-white/10 transition" href="https://github.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-[18px] w-[18px]" />
                </a>
                <a className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-white/5 hover:bg-white/10 transition" href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-[18px] w-[18px]" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
