import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Custom Software Engineering | InQnity" },
      {
        name: "description",
        content:
          "Custom software systems, web and mobile products, data and AI platforms, and interactive engineering — delivered by a senior-led team.",
      },
      { property: "og:title", content: "Services — Custom Software Engineering" },
      {
        property: "og:description",
        content:
          "Systems, products, data platforms, and interactive engineering, senior-led end to end.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const systemsServices = [
  {
    title: "Custom platforms & internal systems",
    copy: "Operations consoles, portals, and line-of-business systems replacing spreadsheets and ageing tools.",
  },
  {
    title: "Architecture & integration",
    copy: "APIs, event pipelines, and integrations that make existing systems talk without another silo.",
  },
  {
    title: "Cloud & reliability engineering",
    copy: "Infrastructure as code, observability, and release pipelines that let small teams ship safely.",
  },
];

const productServices = [
  {
    title: "Web products & commerce",
    copy: "Customer-facing sites, storefronts, and portals with real performance budgets and accessibility built in.",
  },
  {
    title: "Mobile & connected devices",
    copy: "Cross-platform apps, offline-first field tooling, and software for hardware that lives outside the office.",
  },
  {
    title: "Data, analytics & applied AI",
    copy: "Warehouses, reporting layers, and pragmatic AI features grounded in your own data.",
  },
];

const interactiveServices = [
  {
    title: "Games & original IP",
    copy: "Concept to launch on our IP or yours — design, engineering, art direction, and release.",
  },
  {
    title: "Simulation & real-time systems",
    copy: "Training simulators, digital twins, and visualisation where frame budget and physics matter.",
  },
  {
    title: "Prototypes & vertical slices",
    copy: "Fast, honest prototypes built to answer a specific question or win a pitch.",
  },
];

const process = [
  { step: "01", title: "Enquiry", copy: "A short call to understand the ambition, the constraints, and the deadline." },
  { step: "02", title: "Scoping", copy: "A written plan with milestones, risks, and a fixed shape for phase one." },
  { step: "03", title: "Build", copy: "Two-week cycles, a working build at the end of each, no status theatre." },
  { step: "04", title: "Handover", copy: "Documentation, tooling, and a support window so nothing stalls at launch." },
];

function ServiceGrid({ items }: { items: { title: string; copy: string }[] }) {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {items.map((s) => (
        <div key={s.title} className="hairline-top pt-6">
          <h3 className="text-2xl">{s.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {s.copy}
          </p>
        </div>
      ))}
    </div>
  );
}

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          What we take on, and how we <span className="gilt-text">work</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          We build software systems end to end — the platform underneath, the
          product on top, and the tooling that keeps both alive.
        </p>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Systems" title="Software systems & platforms" />
          <ServiceGrid items={systemsServices} />
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Products" title="Digital products & data" />
          <ServiceGrid items={productServices} />
        </div>
      </section>

      <section className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading eyebrow="Interactive" title="Games & real-time systems" />
          <ServiceGrid items={interactiveServices} />
        </div>
      </section>

      <section className="border-t border-border/70">
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
