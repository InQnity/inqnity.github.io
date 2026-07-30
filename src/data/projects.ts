export type ProjectCategory =
  | "platform"
  | "web"
  | "game"
  | "mobile"
  | "data";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  stack: string[];
  status: "In production" | "Shipped" | "Prototype";
};

export const categories: {
  id: ProjectCategory;
  label: string;
  eyebrow: string;
  lead: string;
}[] = [
  {
    id: "platform",
    label: "Software systems",
    eyebrow: "Practice · Systems",
    lead: "Custom platforms, back-office systems, and the services that hold a business together — designed for scale and a long maintenance life.",
  },
  {
    id: "web",
    label: "Web products",
    eyebrow: "Practice · Web",
    lead: "Brand presences, commerce, and customer portals engineered for speed, accessibility, and measurable outcomes.",
  },
  {
    id: "data",
    label: "Data & intelligence",
    eyebrow: "Practice · Data",
    lead: "Pipelines, analytics, and applied AI that turn scattered operational data into decisions people actually trust.",
  },
  {
    id: "mobile",
    label: "Mobile & devices",
    eyebrow: "Practice · Mobile",
    lead: "Cross-platform apps and connected-device software, from field tooling to consumer products.",
  },
  {
    id: "game",
    label: "Interactive & games",
    eyebrow: "Practice · Interactive",
    lead: "Real-time and simulation work — original game titles, training simulators, and interactive experiences.",
  },
];

export const projects: Project[] = [
  {
    slug: "atlas-console",
    title: "Atlas Console",
    kind: "platform",
    year: "2026",
    role: "Operations platform · Architecture & build",
    summary:
      "A dense operations console replacing eleven spreadsheets. Real-time sync, role-based access, and audit trails their compliance team actually likes.",
    stack: ["TypeScript", "WebSockets", "Postgres"],
    status: "In production",
  },
  {
    slug: "keystone-erp",
    title: "Keystone",
    kind: "platform",
    year: "2025",
    role: "Core systems · Integration & migration",
    summary:
      "A modular order-to-cash system for a manufacturer, integrating legacy ERP, warehouse hardware, and finance in one event-driven backbone.",
    stack: [".NET", "Event streaming", "Kubernetes"],
    status: "Shipped",
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
    role: "Storefront & operations tooling",
    summary:
      "Headless commerce for a heritage goods maker: bespoke storefront, warehouse tooling, and a checkout that survived launch week traffic.",
    stack: ["SSR", "Stripe", "Edge functions"],
    status: "Shipped",
  },
  {
    slug: "lumen-insights",
    title: "Lumen Insights",
    kind: "data",
    year: "2026",
    role: "Data platform & applied AI",
    summary:
      "A unified reporting layer over six source systems, with document extraction and forecasting models the operations team tunes themselves.",
    stack: ["Python", "dbt", "LLM pipelines"],
    status: "In production",
  },
  {
    slug: "fieldmark",
    title: "Fieldmark",
    kind: "mobile",
    year: "2025",
    role: "Field application & sync engine",
    summary:
      "An offline-first inspection app for crews working without signal, with conflict-safe sync and hardware-backed evidence capture.",
    stack: ["React Native", "SQLite", "Offline sync"],
    status: "Shipped",
  },
  {
    slug: "aether-hollow",
    title: "Aether Hollow",
    kind: "game",
    year: "2026",
    role: "Original IP · Design & engineering",
    summary:
      "An atmospheric action-adventure set in a collapsed mining kingdom. Custom traversal systems, hand-authored lighting, and a score recorded live.",
    stack: ["Unity", "C#", "HLSL"],
    status: "In production",
  },
  {
    slug: "iron-parlour",
    title: "Iron Parlour",
    kind: "game",
    year: "2025",
    role: "Co-development · Gameplay & tools",
    summary:
      "A tactics roguelite for PC. We built the deterministic combat simulation, replay tooling, and the content pipeline the writers work in daily.",
    stack: ["Unreal", "C++", "Blueprints"],
    status: "Shipped",
  },
];
