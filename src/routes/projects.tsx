import { createFileRoute } from "@tanstack/react-router";
import gamesImage from "../assets/games.jpg";
import webImage from "../assets/web.jpg";
import { SectionHeading } from "../components/SectionHeading";
import { projects, type Project } from "../data/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Games & Web | Acme Interactive" },
      {
        name: "description",
        content:
          "Selected game titles and web platforms built by Acme Interactive, from original IP to internal data consoles.",
      },
      { property: "og:title", content: "Projects — Games & Web | Acme Interactive" },
      {
        property: "og:description",
        content: "Selected game titles and web platforms built by Acme Interactive.",
      },
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
  const games = projects.filter((p) => p.kind === "game");
  const web = projects.filter((p) => p.kind === "web");

  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-24 pb-14">
        <p className="eyebrow">Portfolio</p>
        <h1 className="mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
          The work, in two <span className="gilt-text">registers</span>.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Game projects and web projects are kept apart on purpose — different
          teams, different craft, the same standard.
        </p>
      </section>

      {/* Games */}
      <section id="games" className="border-t border-border/70 bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Section 01 · Games"
              title="Game projects"
              lead="Original titles and co-development work — gameplay systems, engine-level tooling, and production pipelines."
            />
            <img
              src={gamesImage}
              alt="Concept art from an in-development game world"
              loading="lazy"
              width={1200}
              height={800}
              className="h-64 w-full border border-border object-cover opacity-70"
            />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {games.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Web */}
      <section id="web" className="border-t border-border/70">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Section 02 · Web"
              title="Web projects"
              lead="Brand presences, commerce, and internal platforms — engineered for speed, accessibility, and a long maintenance life."
            />
            <img
              src={webImage}
              alt="Abstract visual representing web platform work"
              loading="lazy"
              width={1200}
              height={800}
              className="h-64 w-full border border-border object-cover opacity-70"
            />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {web.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
