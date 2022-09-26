import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import lit from "@astrojs/lit";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    // Enable Lit for Web Component integration.
    lit(),
    // Enable support for MDX.
    mdx(),
  ],
  site: "https://inlinejs.github.io",
  outDir: "./docs",
});
