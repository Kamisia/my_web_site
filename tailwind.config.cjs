/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fafcfd",
      black: "#00161d",
      gray: "#6c6c6c",
      lightGray: "#9f9d9d",
      darkGray: "#212122",
      main: "#125B9A",
      lightMain: "#E4EBF3",
      darkMain: "#102C57",
      detail: "#06d6a0",
      lightDetail: "#D3FCF2",
      accent: "#0B8494",
      lightAccent: "#F05A7E",
    },
  },
  plugins: [],
};
