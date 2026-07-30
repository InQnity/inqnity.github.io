import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero.jpg";
import gamesImage from "../assets/games.jpg";
import webImage from "../assets/web.jpg";
import { SectionHeading } from "../components/SectionHeading";
import { projects } from "../data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InQnity — Software & Systems, Built to Last" },
      {
        name: "description",
        content:
          "An independent studio crafting original games and considered web products for clients who care about the details.",
      },
      { property: "og:title", content: "Acme Interactive — Games & Web, Built to Last" },
      {
        property: "og:description",
        content:
          "An independent studio crafting original games and considered web products.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = [projects[0], projects[3], projects[1]];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={1008}
          className="absolute inset-0 size-full object-cover opacity-60"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-veil)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-32 sm:pt-40 sm:pb-44">
          <p className="eyebrow">Independent software house</p>
          <h1 className="mt-8 max-w-3xl text-5xl leading-[1.02] sm:text-7xl">
            We build <span className="gilt-text">worlds</span> and the
            <br className="hidden sm:block" /> systems that carry them.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Two practices, one workshop: original game development and web
            products engineered with the same patience. No templates, no filler
            — only work we'd sign.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              View the work <ArrowUpRight className="size-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-[var(--hairline)] px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors hover:bg-accent"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>

      {/* Two practices */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Two practices"
          title="Games and web, kept deliberately separate."
          lead="Different disciplines, different rhythms. We staff them as distinct teams so neither one is a side project."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {[
            {
              image: gamesImage,
              label: "Practice 01",
              title: "Game Development",
              copy: "Original IP and co-development. Engine work, gameplay systems, tooling, and the unglamorous pipeline that keeps a team shipping.",
              to: "/projects" as const,
            },
            {
              image: webImage,
              label: "Practice 02",
              title: "Web Engineering",
              copy: "Brand sites, commerce, and internal platforms. Fast, accessible, and maintainable long after the launch announcement.",
              to: "/services" as const,
            },
          ].map((p) => (
            <Link
              key={p.title}
              to={p.to}
              className="group relative overflow-hidden vault-panel"
            >
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={1200}
                height={800}
                className="h-56 w-full object-cover opacity-55 transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-75"
              />
              <div className="p-8">
                <p className="eyebrow">{p.label}</p>
                <h3 className="mt-4 text-3xl">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {p.copy}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary">
                  Explore <ArrowUpRight className="size-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="border-y border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionHeading eyebrow="Selected work" title="A few recent commissions." />
          <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/projects"
                className="group flex flex-col gap-3 py-7 transition-colors hover:bg-accent/40 sm:flex-row sm:items-baseline sm:justify-between sm:px-4"
              >
                <div>
                  <h3 className="text-2xl text-foreground group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {p.kind === "game" ? "Game" : "Web"} · {p.year}
                </span>
              </Link>
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary"
          >
            All projects <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>

      {/* Numbers */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 sm:grid-cols-3">
          {[
            { k: "12+", v: "Products shipped across games and web" },
            { k: "9", v: "Craftspeople, no layers in between" },
            { k: "100%", v: "Of engagements led by a senior owner" },
          ].map((s) => (
            <div key={s.k} className="hairline-top pt-6">
              <p className="font-display text-6xl gilt-text">{s.k}</p>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="vault-panel px-8 py-16 text-center sm:px-16">
          <p className="eyebrow">Commissions open</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight sm:text-5xl">
            Tell us what you're building.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
            We take on a small number of projects each year so every one gets the
            attention it deserves.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-primary px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact the studio <ArrowUpRight className="size-3.5" />
          </Link>
        </div>
      </section>
    </>
  );
}
