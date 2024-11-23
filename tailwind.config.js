const defaultTheme = require('tailwindcss/defaultConfig')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      colors: {
        ...defaultTheme.colors,
        primary: '#161727',
        white: "#FFFFFF",
        text: {
          DEFAULT: "#1F2937",
          light: "#6C7281",
        },
        bkcolor: {
          DEFAULT: "#141523",
          lighter: "#2E2E38"
        },
      },
    extend: {},
  },
  plugins: [],
};
