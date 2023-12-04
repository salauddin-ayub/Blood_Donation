module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#E11B22",
        subbrandPrimary: "#EA5F64",
        textGrey: "#444",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
