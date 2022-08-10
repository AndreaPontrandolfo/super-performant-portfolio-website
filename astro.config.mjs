import { defineConfig } from "astro/config";
import astro from "astro-compress";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: { integrations: true },
  integrations: [astro(), mdx(), sitemap(), tailwind()],
});
