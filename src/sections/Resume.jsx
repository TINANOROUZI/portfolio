// src/sections/Resume.jsx
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle.jsx";
import Stat from "../components/Stat.jsx";

function Slider({ value = 80 }) {
  return (
    <div className="h-1.5 rounded-full bg-white/10">
      <div className="h-full rounded-full bg-white/40" style={{ width: `${value}%` }} />
    </div>
  );
}

/* staggered animations for list items */
const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function Resume() {
  const software = [
    ["HTML", 90],
    ["CSS", 90],
    ["JavaScript", 80],
    ["Python", 70],
    ["Photo/Video Editing (Adobe Suite, Canva)", 75],
    ["Social Media Tools (Meta, LinkedIn, X, IG)", 70],
  ];
  const languages = [
    ["English (Advanced)", 85],
    ["Italian (Intermediate)", 70],
    ["Persian (Native)", 100],
  ];

  return (
    <section id="resume" className="section pt-14 md:pt-20 scroll-mt-24">
      {/* min-h + items-center keeps the card vertically centered and away from navbar */}
      <div className="min-h-[75vh] flex items-center">
        <div className="glass rounded-2xl p-6 md:p-10 w-full">
          <SectionTitle>Resume</SectionTitle>

          <div className="grid md:grid-cols-3 gap-10">
            {/* LEFT — Skills (staggered reveal) */}
            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-6"
            >
              <h3 className="font-semibold">Software Skills</h3>

              {software.map(([label, v]) => (
                <motion.div key={label} variants={itemVariants}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-sub">{label}</span>
                    <span>{v}%</span>
                  </div>
                  <Slider value={v} />
                </motion.div>
              ))}

              <h3 className="font-semibold mt-8">Languages</h3>

              {languages.map(([label, v]) => (
                <motion.div key={label} variants={itemVariants}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-sub">{label}</span>
                    <span>{v}%</span>
                  </div>
                  <Slider value={v} />
                </motion.div>
              ))}

              <h3 className="font-semibold mt-8">Personal Skills</h3>
              <motion.div variants={itemVariants} className="space-y-2">
                <Stat label="Problem Solving" value="Strong" />
                <Stat label="Communication" value="Good" />
                <Stat label="Organisation" value="Strong" />
              </motion.div>
            </motion.div>

            {/* MIDDLE — Experience */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              <h3 className="font-semibold">Experience</h3>
              <ol className="relative border-s border-white/10 pl-6">
                {[
                  ["Freelance Web Developer", "Built and deployed websites for small businesses (React, Tailwind, Netlify/Vercel)."],
                  ["Social Media Manager", "Managed Instagram, LinkedIn, and Facebook pages. Created posts, optimized content, and tracked analytics."],
                  ["Content Creator", "Edited photos and videos for brand campaigns using Adobe Photoshop, Premiere, and Canva."],
                  ["Personal Portfolio Projects", "Responsive UIs with React, Framer Motion, and API integrations."],
                  ["University Projects", "Python/Java coursework: algorithms, basic backend and data handling."],
                ].map(([title, desc], i) => (
                  <li key={i} className="mb-6">
                    <div className="absolute -left-2 top-1.5 h-4 w-4 rounded-full bg-accent/40 border border-accent" />
                    <div className="font-medium">{title}</div>
                    <div className="text-sub text-sm">{desc}</div>
                  </li>
                ))}
              </ol>

              <h3 className="font-semibold mt-10">Education</h3>
              <p className="text-sm">
                BSc in Computer Engineering (ongoing), Politecnico di Torino
              </p>
            </motion.div>

            {/* RIGHT — What I do */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-semibold">What can I do?</h3>
                <ul className="mt-3 space-y-2 text-sm text-sub">
                  <li>Responsive Websites · Landing Pages</li>
                  <li>Portfolio Sites · Dashboards</li>
                  <li>Social Media Content Management</li>
                  <li>Photo/Video Editing for digital campaigns</li>
                  <li>Deploy (Netlify · Vercel · GitHub Pages)</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Development & Creative Skills</h3>
                <ul className="mt-3 space-y-2 text-sm text-sub">
                  <li>HTML · CSS · JavaScript · React</li>
                  <li>Tailwind CSS · Framer Motion</li>
                  <li>Photo Editing: Photoshop · Canva</li>
                  <li>Video Editing: Premiere Pro · CapCut</li>
                  <li>Social Media Strategy · Content Creation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold">Hobbies & Interests</h3>
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
      </div>
    </section>
  );
}

