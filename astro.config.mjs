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

export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    mdx(),
    prefetch(),
    astroImageTools,
    compress({
      img: {
        avif: false,
        png: false,
        webp: false,
        jpeg: {
          /**
           * Quality, integer 1-100
           * @default 80
           */
          quality: 70,

          /**
           * Use progressive (interlace) scan
           * @default false
           */
          progressive: true,

          /**
           * Set to '4:4:4' to prevent chroma subsampling otherwise defaults to '4:2:0' chroma subsampling/**
           * @default '4:2:0'
           */
          chromaSubsampling: "4:2:0",

          /**
           * Optimise Huffman coding tables
           * @default true
           */
          optimiseCoding: true,

          /**
           * Alternative spelling of optimiseCoding
           * @default true
           */
          optimizeCoding: true,

          /**
           * Use mozjpeg defaults, equivalent to { trellisQuantisation: true, overshootDeringing: true, optimiseScans: true, quantisationTable: 3 }
           * @default false
           */
          mozjpeg: true,

          /**
           * Force JPEG output, otherwise attempt to use input format
           * @default true
           */
          force: true,
        },
      },
    }),
    critters(),
    sitemap(),
    robotsTxt(),
  ],
  site: WEBSITE_URL,
  vite: {
    plugins: [VitePWA()],
  },
});
