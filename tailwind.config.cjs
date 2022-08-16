module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: "0.5em",
              marginBottom: "0.5em",
            },
          },
        },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "system-ui"],
    },
  },
  plugins: [require("flowbite/plugin"), require("flowbite-typography")],
};
