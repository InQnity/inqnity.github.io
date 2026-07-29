import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3">
      {/* Placeholder logo mark — swap with your own SVG/asset */}
       <img
        src="/inqnity-logo.png"
        alt="InQnity Logo"
        className="h-9 w-9 object-contain"
      />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg tracking-wide text-foreground">
            InQnity
          </span>
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-muted-foreground">
            Studio · Est. 2025
          </span>
        </span>
      )}
    </Link>
  );
}
