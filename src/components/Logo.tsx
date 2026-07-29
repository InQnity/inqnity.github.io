import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      {/* Placeholder logo mark — swap with your own SVG/asset */}
      <span
        aria-hidden
        className="relative grid size-9 place-items-center border border-[var(--hairline)] bg-surface-raised"
      >
        <span className="font-display text-lg leading-none text-primary">A</span>
        <span className="absolute inset-1 border border-border/60" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-wide text-foreground">
            Acme Interactive
          </span>
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            Studio · Est. 20XX
          </span>
        </span>
      )}
    </Link>
  );
}
