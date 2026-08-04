import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { categories, projects, type Project } from "../data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Software Systems & Products | InQnity" },
      {
        name: "description",
        content:
          "Current and upcoming software systems, web products, data platforms, mobile apps, and interactive work by InQnity.",
      },
      {
        property: "og:title",
        content: "Projects — Software Systems & Products | InQnity",
      },
      {
        property: "og:description",
        content:
          "Current and upcoming platforms, products, and interactive systems built by InQnity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="vault-panel relative isolate overflow-hidden p-8">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0" style={{ background: project.visual.cardGradient }} />
        {project.visual.logoImage ? (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${project.visual.logoImage})`,
              backgroundPosition: "right -1rem bottom -1.2rem",
              backgroundRepeat: "no-repeat",
              backgroundSize: "min(68%, 23rem)",
              mixBlendMode: "screen",
              opacity: 0.2,
              filter: "saturate(0.95) contrast(1.08)",
            }}
          />
        ) : (
          <span className="absolute -right-6 -bottom-8 font-display text-[6.75rem] leading-none tracking-wide text-primary/12 sm:text-[8.5rem]">
            {project.visual.logoMark}
          </span>
        )}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, color-mix(in oklab, var(--background) 58%, transparent) 12%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 flex items-baseline justify-between gap-4">
        <h3 className="text-3xl">{project.title}</h3>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="relative z-10 mt-2 text-sm text-primary">{project.role}</p>
      <p className="relative z-10 mt-5 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <p className="relative z-10 mt-6 hairline-top pt-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-primary">
        {project.status}
      </p>
    </article>
  );
}

function ProjectsPage() {
  const grouped = categories
    .map((c) => ({ ...c, items: projects.filter((p) => p.kind === c.id) }))
    .filter((c) => c.items.length > 0);

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-14">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          Current products and the <span className="gilt-text">road ahead</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Today we are showcasing one web product and one game. InQnity is expanding into broader
          systems, data, and platform work next.
        </p>
      </section>

      {grouped.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={
            i % 2 === 0 ? "border-t border-border/70 bg-surface" : "border-t border-border/70"
          }
        >
          <div className="mx-auto max-w-6xl px-6 py-20">
            <SectionHeading
              eyebrow={`${String(i + 1).padStart(2, "0")} · ${group.label}`}
              title={group.label}
              lead={group.lead}
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {group.items.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
