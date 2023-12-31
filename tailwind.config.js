/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        recommendations: "url('https://i.ibb.co/Fh71jGq/peoplesay.png')",
        "recommendations-dark":
          "url('https://i.ibb.co/YyVLKKn/peoplesaydark.png')",
      },

      height: {
        "viewport-height": "calc(min(100vh))",
      },
      colors: {
        primary: {
          Default: "#F3F8FF",
          light: "#FFFFFF",
          darkDefault: "#192333",
          highlight: "#FFBE62",
          carddark: "#222330",
          darkmodeblue: "#428DFF",
          accentBlue: "#0252CD",
          project1: "#5F9FFE",
          project2: "#56B0B9",
          project3: "#1F1D2B",
          formdefault: "#312E81",
          inputdark: "#2E2F3E",
          inputdefault: "#F0E7F9",
          inputdefaultnew: "#F3F8FF",
          inputdefaultnewdark: "#192333",
        },
        text: {
          projectdarkblue: "#1E9AFF",
          title: "#151E2C",
          accentBlue: "#0252CD",
          default: "#9D9D9D",
          navbar: "#6F74A7",
          dark: "#BEC1D5",
          contact: "#192333",
          contactdark: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
