import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { useLang } from "../context/LangContext.jsx";

const items = [
  {
    id: 1,
    title: "Calculator Web App",
    img: "/assets/calculator.jpg",
    link: "https://calculator-tinanetlifyapp.netlify.app/",
    desc_en: "Responsive calculator built with React + Tailwind. Supports core arithmetic with a clean UI.",
    desc_it: "Calcolatrice responsive sviluppata con React e Tailwind. Supporta le operazioni base con interfaccia pulita.",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    img: "/assets/social.jpg",
    link: "https://socialmedia-dash-tinanetlifyapp.netlify.app/",
    desc_en: "Dashboard interface to monitor social platforms with a dark, minimal layout.",
    desc_it: "Dashboard per monitorare le piattaforme social con layout scuro e minimale.",
  },
];

export default function Portfolio() {
  const { lang } = useLang();
  const t = {
    en: { title: "Projects", view: "View Project" },
    it: { title: "Progetti", view: "Vedi progetto" },
  }[lang];

  return (
    <section id="portfolio" className="section">
      <div className="glass rounded-2xl p-6 md:p-10">
        <SectionTitle>{t.title}</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.article
              key={it.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
              className="rounded-xl overflow-hidden bg-white/5 border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden bg-black/20">
                <img
                  src={it.img}
                  alt={it.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h4 className="font-medium">{it.title}</h4>
                <p className="text-sub text-sm">{lang === "en" ? it.desc_en : it.desc_it}</p>
                <a
                  href={it.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-sm"
                >
                  {t.view}
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
