import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a Project | InQnity" },
      {
        name: "description",
        content:
          "Tell us about your platform, product, or interactive project. We reply to every serious enquiry within two working days.",
      },
      { property: "og:title", content: "Contact — Start a Project" },
      {
        property: "og:description",
        content:
          "Tell us about your software project. We reply within two working days.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: ContactPage,
});

const fieldClass =
  "w-full border border-input bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

const labelClass =
  "font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground";

function ContactPage() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Front-end only for now — connect a backend to actually deliver enquiries.
    setTimeout(() => {
      setSending(false);
      e.currentTarget?.reset?.();
      toast.success("Enquiry received", {
        description: "We'll be in touch within two working days.",
      });
    }, 600);
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pt-24 pb-28">
      <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl">
            Start a <span className="gilt-text">conversation</span>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            Tell us what you're making, when it needs to exist, and what's in the
            way. We reply to every serious enquiry within two working days.
          </p>

          <dl className="mt-12 space-y-6">
            {[
              { k: "Email", v: "inqnity@gmail.com" },
              { k: "Phone", v: "+00 000 000 000" },
              { k: "Studio", v: "Remote · Worldwide" },
            ].map((row) => (
              <div key={row.k} className="hairline-top pt-4">
                <dt className={labelClass}>{row.k}</dt>
                <dd className="mt-2 text-lg text-foreground">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="vault-panel space-y-6 p-8 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className={labelClass} htmlFor="name">
                Name
              </label>
              <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={fieldClass}
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="company">
              Company (optional)
            </label>
            <input id="company" name="company" className={fieldClass} placeholder="Company" />
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="type">
              Project type
            </label>
            <select id="type" name="type" className={fieldClass} defaultValue="platform">
              <option value="platform">Custom platform / internal system</option>
              <option value="web">Web product or commerce</option>
              <option value="mobile">Mobile or connected devices</option>
              <option value="data">Data, analytics or AI</option>
              <option value="game">Game / real-time interactive</option>
              <option value="other">Something else / not sure yet</option>
            </select>

          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="budget">
              Indicative budget
            </label>
            <select id="budget" name="budget" className={fieldClass} defaultValue="mid">
              <option value="small">Under 25k</option>
              <option value="mid">25k – 100k</option>
              <option value="large">100k+</option>
              <option value="unknown">To be discussed</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={labelClass} htmlFor="message">
              Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className={fieldClass}
              placeholder="What are you building, and what does success look like?"
            />
          </div>

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-primary px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {sending ? "Sending…" : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}
