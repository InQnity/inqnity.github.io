export type ProjectCategory = "platform" | "product" | "game" | "data";

export type Project = {
  slug: string;
  title: string;
  kind: ProjectCategory;
  year: string;
  role: string;
  status: "In production" | "Shipped" | "Prototype";
  url?: string;
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
    id: "product",
    label: "Digital products",
    eyebrow: "Practice · Web & Apps",
    lead: "Websites, web platforms, and mobile apps designed as one product discipline — fast, accessible, and built around measurable outcomes.",
  },
  {
    id: "data",
    label: "Data & intelligence",
    eyebrow: "Practice · Data",
    lead: "Pipelines, analytics, and applied AI that turn scattered operational data into decisions people actually trust.",
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
    slug: "chiaturn",
    title: "ChiaTurn",
    kind: "product",
    year: "2025",
    role: "Salon operations app · Product design & engineering",
    status: "Shipped",
    url: "https://chiaturn.com/",
    visual: {
      logoMark: "CT",
      cardGradient:
        "radial-gradient(120% 90% at 86% 12%, color-mix(in oklab, var(--verdigris) 30%, transparent) 0%, transparent 58%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 84%, var(--verdigris) 16%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
  {
    slug: "probrotherinvestment",
    title: "ProBrotherInvestment",
    kind: "product",
    year: "2026",
    role: "Brand site & investor portal",
    status: "In production",
    url: "https://probrothersinvestment.com/",
    visual: {
      logoMark: "PBI",
      logoImage: "/projects-logo/probrotherinvestment-logo.png",
      cardGradient:
        "radial-gradient(120% 90% at 85% 10%, color-mix(in oklab, var(--gold) 28%, transparent) 0%, transparent 60%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 86%, var(--gold-soft) 14%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
  {
    slug: "mythical-hunt",
    title: "Mythical Hunt",
    kind: "game",
    year: "In development",
    role: "Game concept · Ideation & prototyping",
    status: "Prototype",
    visual: {
      logoMark: "MH",
      cardGradient:
        "radial-gradient(120% 90% at 88% 14%, color-mix(in oklab, var(--gold) 24%, transparent) 0%, transparent 58%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 88%, var(--gold-soft) 12%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
  {
    slug: "kart-the-tech-filled-racing-game",
    title: "Kart: The Tech Filled Racing Game",
    kind: "game",
    year: "2025",
    role: "Game development · In collaboration with ChadsThatCode",
    status: "In production",
    url: "https://store.steampowered.com/app/2165230/Kart_The_Tech_Filled_Racing_Game/",
    visual: {
      logoMark: "KART",
      logoImage: "/logo/kart-tech-filled-racing-logo.png",
      cardGradient:
        "radial-gradient(120% 90% at 90% 20%, color-mix(in oklab, var(--verdigris) 34%, transparent) 0%, transparent 58%), linear-gradient(160deg, color-mix(in oklab, var(--surface-raised) 82%, var(--verdigris) 18%) 0%, var(--surface) 62%, var(--background) 100%)",
    },
  },
];
