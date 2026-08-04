import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio — About & Team | InQnity" },
      {
        name: "description",
        content:
          "A senior-led team of nine engineering software systems, digital products, and interactive software. Our principles, our people, and how we run projects.",
      },
      { property: "og:title", content: "The Studio — About & Team" },
      {
        property: "og:description",
        content: "A senior-led team of nine building software systems and digital products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const principles = [
  {
    title: "Small by choice",
    copy: "A focused senior team. The person you meet is the person who helps build it.",
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
          We started as a handful of engineers and designers who kept ending up on the same
          projects. Today we build software systems end to end — platforms, products, data, and
          real-time interactive work — for clients who want something made properly, and we intend
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
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            eyebrow="Team"
            title="Built by a senior, hands-on crew."
            lead="We are not publishing individual team profiles right now. Team structure and specialist roles are shared during project scoping."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Senior-led delivery",
                copy: "Product and engineering decisions stay with the team doing the work.",
              },
              {
                title: "Cross-discipline execution",
                copy: "Web, systems, data, mobile, and interactive capability under one studio brand.",
              },
              {
                title: "Scale-ready partnerships",
                copy: "As demand grows, we expand teams intentionally without lowering quality.",
              },
            ].map((item) => (
              <div key={item.title} className="vault-panel p-7">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
