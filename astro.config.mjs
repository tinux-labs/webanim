// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  prefetch: true,
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
