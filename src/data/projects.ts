export type ProjectCategory = "platform" | "web" | "game" | "mobile" | "data";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectCategory;
  year: string;
  role: string;
  status: "In production" | "Shipped" | "Prototype";
  visual: {
    logoMark: string;
    cardGradient: string;
    logoImage?: string;
  };
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
    slug: "probrotherinvestment",
    title: "ProBrotherInvestment",
    kind: "web",
    year: "2026",
    role: "Brand site & investor portal",
    status: "In production",
    visual: {
      logoMark: "PBI",
      logoImage: "/projects-logo/probrotherinvestment-logo.png",
      cardGradient:
        "radial-gradient(120% 90% at 85% 10%, color-mix(in oklab, var(--gold) 28%, transparent) 0%, transparent 60%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 86%, var(--gold-soft) 14%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
  {
    slug: "kart-the-tech-filled-racing-game",
    title: "Kart: The Tech Filled Racing Game",
    kind: "game",
    year: "2025",
    role: "Original IP · Design & engineering",
    status: "In production",
    visual: {
      logoMark: "KART",
      logoImage: "/logo/kart-tech-filled-racing-logo.png",
      cardGradient:
        "radial-gradient(120% 90% at 90% 20%, color-mix(in oklab, var(--verdigris) 34%, transparent) 0%, transparent 58%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 82%, var(--verdigris) 18%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
];
