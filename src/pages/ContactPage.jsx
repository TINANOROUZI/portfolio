import { useState } from "react";
import { Mail, Linkedin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact — ${form.name || "No name"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    // Sends via email client (no backend needed)
    window.location.href = `mailto:tinanorouzi14@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="section">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2 glass rounded-2xl p-6 md:p-10">
          <h2 className="text-xl tracking-widest text-sub font-semibold uppercase mb-6">
            Contact
          </h2>

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-sub mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                className="w-full rounded-xl bg-white/5 border border-border p-3 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-sub mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full rounded-xl bg-white/5 border border-border p-3 outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-sub mb-1" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me about your project…"
                rows={6}
                className="w-full rounded-xl bg-white/5 border border-border p-3 outline-none resize-y"
                required
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 rounded-full bg-accent/20 hover:bg-accent/30 border border-accent/40 transition inline-flex items-center gap-2"
            >
              <Send size={16} />
              Send
            </button>
          </form>
        </div>

        {/* Contact info */}
        <div className="glass rounded-2xl p-6 md:p-10 space-y-4">
          <h3 className="font-semibold">Contact Info</h3>
          <a href="mailto:tinanorouzi14@email.com" className="link flex items-center gap-3">
            <Mail size={18} /> Email
          </a>
          <a href="https://www.linkedin.com/in/tinanorouzimoghaddam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="link flex items-center gap-3">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href="tel:+393342896512" className="link flex items-center gap-3">
            <Phone size={18} /> Phone
          </a>
          <a href="https://t.me/tinanoruzi" target="_blank" rel="noopener noreferrer" className="link flex items-center gap-3">
            <Send size={18} /> Telegram
          </a>

          <div className="pt-4 text-sm text-sub">
            Torino, Italy — 10136
          </div>
        </div>
      </div>
    </div>
  );
}
