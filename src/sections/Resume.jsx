import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import Stat from "../components/Stat.jsx";
import { useLang } from "../context/LangContext.jsx";

function Slider({ value = 80 }) {
  return (
    <div className="h-1.5 rounded-full bg-white/10">
      <div className="h-full rounded-full bg-white/40" style={{ width: `${value}%` }} />
    </div>
  );
}

export default function Resume() {
  const { lang } = useLang();

  const t = {
    en: {
      title: "Resume",
      tech: "Technical Skills",
      langs: "Languages",
      soft: "Personal Skills",
      exp: "Experience",
      edu: "Education",
      what: "What can I do?",
      dev: "Development & Creative Skills",
      hobbies: "Hobbies & Interests",
      bullets: [
        "Responsive Websites & Landing Pages",
        "Portfolio Sites & Dashboards",
        "Social Media Management",
        "Photo & Video Editing for campaigns",
        "Deployment on Netlify · Vercel · GitHub Pages",
      ],
      eduText: "BSc in Computer Engineering (ongoing), Politecnico di Torino",
    },
    it: {
      title: "Curriculum",
      tech: "Competenze tecniche",
      langs: "Lingue",
      soft: "Competenze personali",
      exp: "Esperienze",
      edu: "Formazione",
      what: "Cosa posso fare?",
      dev: "Competenze di sviluppo e creative",
      hobbies: "Hobby & interessi",
      bullets: [
        "Siti responsive e landing page",
        "Siti portfolio e dashboard",
        "Gestione social media",
        "Editing foto e video per campagne",
        "Deployment su Netlify · Vercel · GitHub Pages",
      ],
      eduText: "Laurea in Ingegneria Informatica (in corso), Politecnico di Torino",
    },
  }[lang];

  return (
    <section id="resume" className="section">
      <div className="glass rounded-2xl p-6 md:p-10">
        <SectionTitle>{t.title}</SectionTitle>

        <div className="grid md:grid-cols-3 gap-10">
          {/* LEFT — Skills */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="font-semibold">{t.tech}</h3>
            {[
              ["HTML", 80],
              ["CSS", 90],
              ["JavaScript", 80],
              ["Python", 70],
              ["Photo/Video Editing (Adobe, Canva, CapCut)", 80],
              ["Social Media Tools (Meta, LinkedIn, Instagram, X)", 90],
            ].map(([label, v]) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-sub">{label}</span><span>{v}%</span>
                </div>
                <Slider value={v} />
              </div>
            ))}

            <h3 className="font-semibold mt-8">{t.langs}</h3>
            {[
              ["English (Advanced)", 85],
              ["Italian (Intermediate)", 50],
              ["Persian (Native)", 100],
            ].map(([label, v]) => (
              <div key={label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-sub">{label}</span><span>{v}%</span>
                </div>
                <Slider value={v} />
              </div>
            ))}

            <h3 className="font-semibold mt-8">{t.soft}</h3>
            <Stat label="Problem Solving" value="Strong" />
            <Stat label="Communication" value="Good" />
            <Stat label="Organisation" value="Strong" />
            <Stat label="Creativity" value="Excellent" />
          </motion.div>

          {/* MIDDLE — Experience */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h3 className="font-semibold">{t.exp}</h3>
            <ol className="relative border-s border-white/10 pl-6">
              {[
                ["Freelance Web Developer", "Designed and deployed websites for small businesses using React, Tailwind CSS, and Netlify/Vercel."],
                ["Social Media Manager", "Planned, created, and managed posts for Instagram, LinkedIn, and Facebook. Improved engagement and tracked analytics."],
                ["Content Creator", "Edited photos and videos for digital campaigns using Photoshop, Premiere Pro, Canva, and CapCut."],
                ["Portfolio Projects", "Built and showcased personal projects like a Calculator Web App and a Social Media Dashboard."],
                ["University Projects", "Worked on Python and Java projects (algorithms, backend basics, and data handling)."],
              ].map(([title, desc], i) => (
                <li key={i} className="mb-6">
                  <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-accent/40 border border-accent" />
                  <div className="font-medium">{title}</div>
                  <div className="text-sub text-sm">{desc}</div>
                </li>
              ))}
            </ol>

            <h3 className="font-semibold mt-10">{t.edu}</h3>
            <p className="text-sm">{t.eduText}</p>
          </motion.div>

          {/* RIGHT — What I do */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <h3 className="font-semibold">{t.what}</h3>
              <ul className="mt-3 space-y-2 text-sm text-sub">
                {t.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">{t.dev}</h3>
              <ul className="mt-3 space-y-2 text-sm text-sub">
                <li>HTML · CSS · JavaScript · React</li>
                <li>Tailwind CSS · Framer Motion</li>
                <li>Photo Editing: Photoshop · Canva</li>
                <li>Video Editing: Premiere Pro · CapCut</li>
                <li>Social Media Strategy · Content Creation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">{t.hobbies}</h3>
              <ul className="mt-3 space-y-2 text-sm text-sub">
                <li>UI/UX design exploration</li>
                <li>Building side projects</li>
                <li>Social media trends & digital marketing</li>
                <li>Photography · Travel</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
