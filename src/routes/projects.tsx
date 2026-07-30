import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "../components/SectionHeading";
import { categories, projects, type Project } from "../data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Software Systems & Products | Acme Interactive" },
      {
        name: "description",
        content:
          "Selected software systems, web products, data platforms, mobile apps, and interactive work built by Acme Interactive.",
      },
      {
        property: "og:title",
        content: "Projects — Software Systems & Products | Acme Interactive",
      },
      {
        property: "og:description",
        content:
          "Selected platforms, products, and interactive systems built by Acme Interactive.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="vault-panel flex flex-col p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-3xl">{project.title}</h3>
        <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">
          {project.year}
        </span>
      </div>
      <p className="mt-2 text-sm text-primary">{project.role}</p>
      <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="border border-border px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>
      <p className="mt-6 hairline-top pt-4 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-primary">
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
          Software built to <span className="gilt-text">carry weight</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Platforms, products, data systems, and interactive work. Different
          domains, one standard of engineering.
        </p>
      </section>

      {grouped.map((group, i) => (
        <section
          key={group.id}
          id={group.id}
          className={
            i % 2 === 0
              ? "border-t border-border/70 bg-surface"
              : "border-t border-border/70"
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
