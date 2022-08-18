import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";
import { VitePWA } from "vite-plugin-pwa";
import { WEBSITE_URL } from "./src/utils/constants.mjs";

// https://astro.build/config
export default defineConfig({
  experimental: {
    integrations: true,
  },
  integrations: [
    tailwind(),
    prefetch(),
    astroImageTools,
    compress({
      img: {
        avif: {
          /**
           * Quality, integer 1-100
           * @default 50
           */
          quality: 60,

          /**
           * CPU effort, between 0 (fastest) and 9 (slowest)
           * @default 4
           */
          effort: 1,
        },
        webp: {
          /**
           * Quality, integer 1-100
           * @default 80
           */
          quality: 80,

          /**
           * Quality of alpha layer, integer 0-100
           * @default 100
           */
          alphaQuality: 100,

          /**
           * Use near_lossless compression mode
           * @default false
           */
          nearLossless: false,

          /**
           * Use high quality chroma subsampling
           * @default false
           */
          smartSubsample: false,

          /**
           * CPU effort, between 0 (fastest) and 6 (slowest)
           * @default 4
           */
          effort: 1,

          /**
           * Force WebP output, otherwise attempt to use input format
           * @default true
           */
          force: true,
        },
        jpeg: {
          /**
           * Quality, integer 1-100
           * @default 80
           */
          quality: 80,

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
    mdx(),
    sitemap(),
    robotsTxt(),
  ],
  site: WEBSITE_URL,
  vite: {
    plugins: [VitePWA()],
  },
});
