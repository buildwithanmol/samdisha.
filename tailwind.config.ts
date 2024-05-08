import type { Config } from "tailwindcss";

const config: Config = {
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

      },
      colors: {
        primary: "#0E141B",
        accent: "#ff0a78",
        transition: "#1f2931",
        container: "#1e262f",
        header: "#182635",
        font: "#5c75f2",
        white: "#fcfcfc",
        button: "#2b4555"
      },
      backgroundColor: {
        primary: "#0E141B",
        accent: "#ff0a78",
        transition: "#1f2931",
        container: "#1e262f",
        header: "#182635",
        font: "#5c75f2",
        white: "#fcfcfc",
        button: "#2b4555"
      }
    },
  },
  plugins: [],
};
export default config;
