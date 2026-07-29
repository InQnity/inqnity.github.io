import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Game & Web Engineering | Acme Interactive" },
      {
        name: "description",
        content:
          "Game development, web engineering, and product strategy delivered by a senior-led studio team.",
      },
      { property: "og:title", content: "Services — Game & Web Engineering" },
      {
        property: "og:description",
        content: "Game development, web engineering, and product strategy, senior-led.",
      },
    ],
  }),
  component: ServicesPage,
});

const gameServices = [
  {
    title: "Original game development",
    copy: "Concept to launch on our own IP or yours — design, engineering, art direction, and release.",
  },
  {
    title: "Co-development",
    copy: "We embed with your team on gameplay systems, performance, porting, or content pipelines.",
  },
  {
    title: "Prototypes & vertical slices",
    copy: "Fast, honest prototypes built to answer a specific question or win a publisher pitch.",
  },
];

const webServices = [
  {
    title: "Brand & marketing sites",
    copy: "Typographically-led sites with real performance budgets and a CMS your team can run.",
  },
  {
    title: "Product & platform engineering",
    copy: "Dashboards, portals, and commerce systems with auth, data modelling, and audit trails.",
  },
  {
    title: "Rescue & modernisation",
    copy: "Inherited a codebase that fights back? We stabilise, document, and take it forward.",
  },
];

const process = [
  { step: "01", title: "Enquiry", copy: "A short call to understand the ambition, the constraints, and the deadline." },
  { step: "02", title: "Scoping", copy: "A written plan with milestones, risks, and a fixed shape for phase one." },
  { step: "03", title: "Build", copy: "Two-week cycles, a working build at the end of each, no status theatre." },
  { step: "04", title: "Handover", copy: "Documentation, tooling, and a support window so nothing stalls at launch." },
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          What we take on, and how we <span className="gilt-text">work</span>.
        </h1>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Games" title="Game development" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {gameServices.map((s) => (
              <div key={s.title} className="hairline-top pt-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Web" title="Web engineering" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {webServices.map((s) => (
              <div key={s.title} className="hairline-top pt-6">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Method" title="A four-step engagement." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="vault-panel p-7">
                <p className="font-mono text-[0.7rem] tracking-[0.28em] text-primary">
                  {p.step}
                </p>
                <h3 className="mt-4 text-2xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
