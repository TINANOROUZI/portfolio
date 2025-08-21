import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { useLang } from "../context/LangContext.jsx";

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
    // scroll-mt so anchor links never hide under the header if you make it sticky later
    <section id="about" className="section pt-10 md:pt-16 scroll-mt-24">
      {/* min-h centers the two cards vertically; adjust 70vh to taste */}
      <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-10"
        >
          <SectionTitle>{t.heading}</SectionTitle>

          <p className="text-sub mb-6">
            <a href={`mailto:${t.email}`} className="hover:underline">
              {t.email}
            </a>
          </p>

          <p className="leading-relaxed">{t.desc}</p>

          <div className="mt-8 text-center text-sub text-sm">{t.location}</div>
        </motion.div>

        {/* Constrain the portrait height so it sits nicely; tweak values if you want it larger/smaller */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative glass rounded-2xl overflow-hidden h-[44vh] md:h-[56vh]"
        >
          <img
            src="/assets/about.jpg"
            alt="portrait"
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
