module.exports = {
  purge: ["./src/popup/**/*.{svelte,html}","./content-src/**/*.{svelte,html}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
