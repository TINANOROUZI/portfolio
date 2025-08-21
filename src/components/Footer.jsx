// src/components/Footer.jsx
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/tinanorouzimoghaddam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: Linkedin },
  { name: "GitHub",   href: "https://github.com/TINANOROUZI",            icon: Github },
  { name: "Instagram",href: "https://www.instagram.com/tinanoruzii?igsh=enMwZ2RydWU5bTdo&utm_source=qr",      icon: Instagram },
];

function SocialButton({ name, href, icon: Icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center h-10 w-10 rounded-full border border-border bg-white/5 hover:bg-white/10 transition
                 shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_6px_30px_-10px_rgba(255,255,255,0.25)]"
      aria-label={name}
    >
      {/* tooltip */}
      <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap
                       px-2 py-1 rounded-md bg-black/70 text-[11px] text-white/90 opacity-0 translate-y-1
                       group-hover:opacity-100 group-hover:translate-y-0 transition">
        {name}
      </span>

      <Icon className="h-[18px] w-[18px] text-white/90" />
      <ArrowUpRight
        className="absolute -right-1 -top-1 h-3 w-3 text-white/50 opacity-0 group-hover:opacity-100 transition"
        aria-hidden="true"
      />
    </motion.a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="w-full border-t border-border bg-card backdrop-blur-xs">
        <div className="mx-auto max-w-6xl px-4 md:px-6 h-14 md:h-16 flex items-center justify-between text-sm">
          <span className="text-sub">© {new Date().getFullYear()} Tina Norouzi</span>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <SocialButton key={s.name} {...s} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
