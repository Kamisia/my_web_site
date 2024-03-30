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
      darkGray: "#353535",
      main: "#118ab2",
      lightMain: "#e4f0f4",
      darkMain: "#035570",
      detail: "#06d6a0",
      lightDetail: "#D3FCF2",
      accent: "#ef476f",
      lightAccent: "#FBB4C5",
    },
  },
  plugins: [],
};
