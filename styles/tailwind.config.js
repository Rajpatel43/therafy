module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#14b8a6",
        secondary: "#0f172a",
        muted: "#64748b",
        glassLight: "rgba(255, 255, 255, 0.7)",
        glassDark: "rgba(30, 30, 30, 0.6)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      opacity: ["group-hover"],
      visibility: ["group-hover"],
    },
  },
};
