import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio — About & Team | Acme Interactive" },
      {
        name: "description",
        content:
          "A senior-led studio of nine building games and web products. Our principles, our people, and how we run projects.",
      },
      { property: "og:title", content: "The Studio — About & Team" },
      {
        property: "og:description",
        content: "A senior-led studio of nine building games and web products.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Founder Name", role: "Founder · Technical Director", initials: "FN" },
  { name: "Team Member", role: "Game Director", initials: "TM" },
  { name: "Team Member", role: "Lead Engineer, Web", initials: "TM" },
  { name: "Team Member", role: "Art Director", initials: "TM" },
  { name: "Team Member", role: "Gameplay Engineer", initials: "TM" },
  { name: "Team Member", role: "Producer", initials: "TM" },
];

const principles = [
  {
    title: "Small by choice",
    copy: "Nine people, all senior. The person you meet is the person who builds it.",
  },
  {
    title: "Built to outlast us",
    copy: "Documented, tested, and handed over properly. No hostage codebases.",
  },
  {
    title: "Taste is a discipline",
    copy: "We argue about kerning and frame pacing because the details are the product.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="eyebrow">The studio</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          A workshop, not a <span className="gilt-text">factory</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We started as a handful of engineers and designers who kept ending up on
          the same projects. Today we split our time between original game work and
          web products for clients who want something made properly — and we intend
          to stay small enough to keep it that way.
        </p>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Principles" title="Three things we don't bend on." />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="hairline-top pt-6">
                <h3 className="text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Team"
            title="The people on the tools."
            lead="Placeholder names and roles — send us your team details and we'll swap them in."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m, i) => (
              <div key={i} className="vault-panel flex items-center gap-5 p-6">
                <span className="grid size-14 shrink-0 place-items-center border border-[var(--hairline)] font-display text-xl text-primary">
                  {m.initials}
                </span>
                <div>
                  <p className="text-lg text-foreground">{m.name}</p>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
