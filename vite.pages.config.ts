// Static build config used ONLY for GitHub Pages (see .github/workflows/deploy-pages.yml).
// The normal `vite.config.ts` build targets an edge/SSR runtime; this one runs TanStack
// Start's prerenderer so every route becomes plain HTML that a static host can serve.
//
// Static output: dist/client
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tanstackStart({
      // Keep the same SSR entry name as vite.config.ts (src/server.ts).
      server: { entry: "server" },
      prerender: {
        enabled: true,
        crawlLinks: true,
        // Cap output so a runaway crawl can never blow up the build.
        concurrency: 4,
      },
      pages: [
        { path: "/sitemap.xml", prerender: { enabled: true } },
        { path: "/", prerender: { enabled: true } },
        { path: "/projects", prerender: { enabled: true } },
        { path: "/services", prerender: { enabled: true } },
        { path: "/about", prerender: { enabled: true } },
        { path: "/contact", prerender: { enabled: true } },
      ],
    }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
