/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#0a0a0a",
          800: "#111827",
          700: "#1f2937",
          600: "#374151",
        },
        accent: {
          DEFAULT: "#14b8a6",
          light: "#06b6d4",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
