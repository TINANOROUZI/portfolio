import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { useLang } from "../context/LangContext.jsx";

/* nice easing */
const ease = [0.22, 1, 0.36, 1];

export default function About() {
  const { lang } = useLang();

  const t = {
    en: {
      heading: "About",
      email: "tinanorouzi14@email.com",
      desc:
        "Designer & developer with 1+ years of experience crafting clean, minimal interfaces. " +
        "I bridge visual design and implementation, focusing on performance and brand consistency. " +
        "I am a bachelor's student in Computer Engineering at the Politecnico di Torino.",
      location: "Torino, Italy — 10136",
    },
    it: {
      heading: "Chi sono",
      email: "tinanorouzi14@email.com",
      desc:
        "Designer e developer con oltre 1 anno di esperienza nella creazione di interfacce pulite e minimal. " +
        "Unisco design visivo e implementazione, con attenzione a prestazioni e coerenza del brand. " +
        "Sono studentessa di laurea in Ingegneria Informatica al Politecnico di Torino.",
      location: "Torino, Italia — 10136",
    },
  }[lang];

  return (
    <section id="about" className="section pt-14 md:pt-20 scroll-mt-24">
      {/* ambient glow orbs (pure CSS, very light) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="absolute -top-10 -left-10 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.25), transparent)" }}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-12 -right-6 h-64 w-64 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(255,255,255,0.18), transparent)" }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>

      {/* center the two cards nicely on the page */}
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[75vh]">
        {/* LEFT: text card slides from left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="glass rounded-2xl p-6 md:p-10"
        >
          <SectionTitle>{t.heading}</SectionTitle>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease, delay: 0.25 }}
            className="text-sub mb-6"
          >
            <a href={`mailto:${t.email}`} className="hover:underline">
              {t.email}
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.32 }}
            className="leading-relaxed"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease, delay: 0.42 }}
            className="mt-8 text-center text-sub text-sm"
          >
            {t.location}
          </motion.div>
        </motion.div>

        {/* RIGHT: photo card slides from right with tiny scale pop */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, ease, delay: 0.15 }}
          className="relative glass rounded-2xl overflow-hidden h-[44vh] md:h-[56vh]"
        >
          <motion.img
            src="/assets/about.jpg"
            alt="portrait"
            className="w-full h-full object-cover opacity-80"
            initial={{ scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease }}
            loading="lazy"
          />
          {/* soft vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
