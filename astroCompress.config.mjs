export const astroCompressConfig = {
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
};
