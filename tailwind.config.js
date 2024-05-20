/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "15px",
      },
      colors: {
        accent: "#f94c25",
        acai: "#572143",
        folha: "#5c9332"
      },
      fontFamily: {
        nimbus: ['Nimbus Sans', 'sans-serif'], // Adicione a fonte Nimbus Sans aqui
      },
    },
  },
  plugins: [],
};
