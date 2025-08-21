import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";

/* stagger setup */
const list = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const items = [
  {
    id: 1,
    title: "Calculator Web App",
    img: "/assets/calculator.jpg",
    link: "https://calculator-tinanetlifyapp.netlify.app/",
    desc:
      "A simple and responsive calculator built with React and Tailwind CSS.",
  },
  {
    id: 2,
    title: "Social Media Dashboard",
    img: "/assets/social.jpg",
    link: "https://socialmedia-dash-tinanetlifyapp.netlify.app/",
    desc:
      "A dashboard interface for managing and monitoring social media activity.",
  },
  // add more projects here later...
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section pt-14 md:pt-20 scroll-mt-24">
      {/* centers the card on the viewport so it isn't glued to the navbar */}
      <div className="min-h-[75vh] flex items-center">
        <div className="glass rounded-2xl p-6 md:p-10 w-full">
          <SectionTitle>Projects</SectionTitle>

          <motion.div
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((it) => (
              <motion.article
                key={it.id}
                variants={item}
                className="rounded-xl overflow-hidden bg-white/5 border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={it.img}
                    alt={it.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{it.title}</h4>
                  <p className="text-sub text-sm mt-1">{it.desc}</p>
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link text-sm inline-block mt-2"
                  >
                    View project
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
