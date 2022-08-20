export const sharedPictureProps = {
  flatten: true,
  format: ["avif", "webp"],
  formatOptions: {
    jpg: {
      quality: 100,
    },
    webp: {
      quality: 80,
    },
  },
  preload: "webp",
  fallbackFormat: "jpg",
  includeSourceFormat: false,
};
