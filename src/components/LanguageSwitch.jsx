import { useLang } from "../context/LangContext.jsx";

const FLAGS = {
  en: "/assets/flags/en.png",
  it: "/assets/flags/it.png",
};

export default function LanguageSwitch({ className = "" }) {
  const { lang, setLang } = useLang();

  const Btn = ({ code, label }) => (
    <button
      type="button"
      onClick={() => setLang(code)}
      className={`px-3 py-1.5 rounded-full text-sm inline-flex items-center gap-2 transition
        ${lang === code ? "bg-white/15 text-white" : "text-sub hover:bg-white/10"}`}
      aria-pressed={lang === code}
    >
      <img
        src={FLAGS[code]}
        alt={`${label} flag`}
        className="h-4 w-6 object-cover rounded-[2px] ring-1 ring-white/15"
        loading="lazy"
        width="24"
        height="16"
      />
      <span>{label}</span>
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`inline-flex rounded-full bg-white/5 border border-border p-0.5 ${className}`}
    >
      <Btn code="en" label="EN" />
      <Btn code="it" label="IT" />
    </div>
  );
}
