// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";

// import your flag images (paths are from this file to src/sections/)
import EN_FLAG from "../sections/eng.png";
import IT_FLAG from "../sections/it.png";

/** routes keyed for i18n */
const ROUTES = [
  { to: "/", key: "about" },
  { to: "/resume", key: "resume" },
  { to: "/portfolio", key: "projects" },
  { to: "/contact", key: "contact" },
];

/** nav labels per language */
const NAV_LABELS = {
  en: { about: "About", resume: "Resume", projects: "Projects", contact: "Contact" },
  it: { about: "Chi sono", resume: "Curriculum", projects: "Progetti", contact: "Contatti" },
};

const FLAGS = { en: EN_FLAG, it: IT_FLAG };
const LABELS = { en: "EN", it: "IT" };

const activeClass = ({ isActive }) => `link ${isActive ? "text-white" : ""}`;

function Flag({ code, className = "" }) {
  return (
    <img
      src={FLAGS[code]}
      alt={`${LABELS[code]} flag`}
      className={`h-3.5 w-5 object-cover rounded-[2px] ring-1 ring-white/15 ${className}`}
      width="20"
      height="14"
      loading="lazy"
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = (v) => setOpen(typeof v === "boolean" ? v : !open);
  const { lang, setLang } = useLang();
  const labels = NAV_LABELS[lang];

  // desktop dropdown state
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  // close dropdown on outside click
  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  // Close on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const other = lang === "en" ? "it" : "en";
  const switchLang = (code) => {
    setLang(code);
    setLangOpen(false);
  };

  return (
    <>
      {/* NOT fixed – normal flow header */}
      <header>
        {/* higher z-index so dropdown stays above page/blur */}
        <div className="w-full border-b border-border bg-card backdrop-blur-xs relative z-[80]">
          <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
            <Link to="/" className="font-semibold tracking-wide">
              <span className="text-white">TINA</span>{" "}
              <span className="text-white/70">NOROUZI</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {ROUTES.map((l) => (
                <NavLink key={l.to} to={l.to} className={activeClass}>
                  {labels[l.key]}
                </NavLink>
              ))}

              {/* Compact Language DROPDOWN (desktop) — flag only, no globe icon */}
              <div ref={langRef} className="relative ml-2 z-[90]">
                <button
                  type="button"
                  onClick={() => setLangOpen((v) => !v)}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/5 hover:bg-white/10 px-2.5 py-1 text-xs transition"
                >
                  <Flag code={lang} />
                  <span className="text-sub">{LABELS[lang]}</span>
                  <ChevronDown className="h-3.5 w-3.5 text-sub" />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.16 }}
                      className="absolute right-0 mt-2 glass rounded-lg border border-border p-1 shadow-lg min-w-[120px] z-[100]"
                    >
                      <button
                        type="button"
                        onClick={() => switchLang(other)}
                        className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-md hover:bg-white/10 transition text-sm"
                      >
                        <Flag code={other} />
                        <span className="text-white">{LABELS[other]}</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Mobile burger */}
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
              onClick={() => toggle()}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER — right side, glass style */}
      <AnimatePresence>
        {open && (
          <>
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed inset-y-0 right-0 w-72 glass z-[120] p-6 pt-24"
            >
              {/* Close button */}
              <button
                aria-label="Close menu"
                onClick={() => toggle(false)}
                className="absolute top-3 right-3 p-2 rounded-lg hover:bg-white/5 text-sub"
              >
                <X />
              </button>

              {/* Mobile Language (accordion) */}
              <details className="mb-3 group open:mb-2">
                <summary className="flex cursor-pointer items-center gap-2 list-none rounded-lg px-2 py-2 hover:bg-white/5">
                  <Flag code={lang} />
                  <span className="text-sm">{LABELS[lang]}</span>
                  <ChevronRight className="ml-auto h-4 w-4 text-sub transition group-open:rotate-90" />
                </summary>
                <div className="mt-1 pl-2">
                  <button
                    type="button"
                    onClick={() => {
                      switchLang(other);
                      toggle(false);
                    }}
                    className="w-full flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/5 transition text-sm"
                  >
                    <Flag code={other} />
                    <span>{LABELS[other]}</span>
                  </button>
                </div>
              </details>

              {/* Mobile links */}
              <nav className="flex flex-col gap-4 text-lg">
                {ROUTES.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    onClick={() => toggle(false)}
                    className={activeClass}
                  >
                    {labels[l.key]}
                  </NavLink>
                ))}
              </nav>
            </motion.aside>

            {/* overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-[110]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => toggle(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
