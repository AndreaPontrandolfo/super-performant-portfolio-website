import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import critters from "astro-critters";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import { VitePWA } from "vite-plugin-pwa";
import { WEBSITE_URL } from "./src/utils/constants.mjs";
import { astroCompressConfig } from "./astroCompress.config.mjs";

export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    // mdx(),
    prefetch(),
    astroImageTools,
    compress({
      img: astroCompressConfig,
    }),
    critters({ fonts: true }),
    sitemap(),
    robotsTxt(),
  ],
  site: WEBSITE_URL,
  vite: {
    plugins: [VitePWA()],
  },
});
