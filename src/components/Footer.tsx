import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A small studio building games and web products with the patience of a
            craft house and the tooling of a modern engineering team.
          </p>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Navigate</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/projects" className="hover:text-primary">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                Studio
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Enquiries</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@yourcompany.com</li>
            <li>+00 000 000 000</li>
            <li>Remote · Worldwide</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 font-mono text-[0.65rem] uppercase tracking-[0.24em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Acme Interactive</span>
          <span>Games · Web · Interactive Systems</span>
        </div>
      </div>
    </footer>
  );
}
