import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import { useLang } from "../context/LangContext.jsx";

const list = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const items = [
  {
    id: 1,
    title: "Calculator Web App",
    img: "/assets/calculator.jpg",
    link: "https://calculator-tinanetlifyapp.netlify.app/",
    desc_en: "A simple and responsive calculator built with React and Tailwind CSS.",
    desc_it: "Una calcolatrice responsive sviluppata con React e Tailwind CSS.",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    img: "/assets/social.jpg",
    link: "https://socialmedia-dash-tinanetlifyapp.netlify.app/",
    desc_en: "A dashboard interface for managing and monitoring social media activity.",
    desc_it: "Una dashboard per gestire e monitorare l'attività sui social media.",
  },
];

export default function Portfolio() {
  const { lang } = useLang();
  const t = { en: { title: "Projects", view: "View project" }, it: { title: "Progetti", view: "Vedi progetto" } }[lang];

  return (
    <section id="portfolio" className="section pt-14 md:pt-20 scroll-mt-24">
      <div className="min-h-[75vh] flex items-center">
        <div className="glass rounded-2xl p-6 md:p-10 w-full">
          <SectionTitle>{t.title}</SectionTitle>

          <motion.div variants={list} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((it) => (
              <motion.article key={it.id} variants={item} className="rounded-xl overflow-hidden bg-white/5 border border-border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={it.img} alt={it.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{it.title}</h4>
                  <p className="text-sub text-sm mt-1">{lang === "en" ? it.desc_en : it.desc_it}</p>
                  <a href={it.link} target="_blank" rel="noopener noreferrer" className="link text-sm inline-block mt-2">
                    {t.view}
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
