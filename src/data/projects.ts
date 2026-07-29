export type Project = {
  slug: string;
  title: string;
  kind: "game" | "web";
  year: string;
  role: string;
  summary: string;
  stack: string[];
  status: "In production" | "Shipped" | "Prototype";
};

export const projects: Project[] = [
  {
    slug: "aether-hollow",
    title: "Aether Hollow",
    kind: "game",
    year: "2026",
    role: "Original IP · Design & Engineering",
    summary:
      "An atmospheric action-adventure set in a collapsed mining kingdom. Custom traversal systems, hand-authored lighting, and a score recorded live.",
    stack: ["Unity", "C#", "HLSL", "FMOD"],
    status: "In production",
  },
  {
    slug: "iron-parlour",
    title: "Iron Parlour",
    kind: "game",
    year: "2025",
    role: "Co-development · Gameplay & Tools",
    summary:
      "A tactics roguelite for PC. We built the deterministic combat simulation, replay tooling, and the content pipeline the writers work in daily.",
    stack: ["Unreal", "C++", "Blueprints"],
    status: "Shipped",
  },
  {
    slug: "signal-garden",
    title: "Signal Garden",
    kind: "game",
    year: "2025",
    role: "Prototype · Concept to vertical slice",
    summary:
      "A browser-native puzzle game exploring generative audio. Delivered as a playable vertical slice for a publisher pitch in nine weeks.",
    stack: ["WebGL", "TypeScript", "Web Audio"],
    status: "Prototype",
  },
  {
    slug: "halcyon-capital",
    title: "Halcyon Capital",
    kind: "web",
    year: "2026",
    role: "Brand site & investor portal",
    summary:
      "A restrained, typographically-led presence for a private investment house, paired with a gated portal for quarterly reporting.",
    stack: ["React", "TypeScript", "Postgres"],
    status: "Shipped",
  },
  {
    slug: "meridian-commerce",
    title: "Meridian",
    kind: "web",
    year: "2025",
    role: "Storefront & operations platform",
    summary:
      "Headless commerce for a heritage goods maker: bespoke storefront, warehouse tooling, and a checkout that survived launch week traffic.",
    stack: ["Next-gen SSR", "Stripe", "Edge functions"],
    status: "Shipped",
  },
  {
    slug: "atlas-console",
    title: "Atlas Console",
    kind: "web",
    year: "2025",
    role: "Internal data platform",
    summary:
      "A dense operations console replacing eleven spreadsheets. Real-time sync, role-based access, and audit trails their compliance team actually likes.",
    stack: ["React", "WebSockets", "Postgres"],
    status: "In production",
  },
];
