export const sharedPictureProps = {
  flatten: true,
  format: ["webp"],
  formatOptions: {
    jpg: {
      quality: 100,
    },
    webp: {
      quality: 80,
    },
  },

  preload: "webp",
  loading: "lazy",
  fallbackFormat: "jpg",
  includeSourceFormat: false,
};
