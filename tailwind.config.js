/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Enable the dark mode variant
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1a202c", // Background color for dark mode
      },
      textColor: {
        dark: "#ffffff", // Text color for dark mode
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"], // Apply dark mode background color
      textColor: ["dark"], // Apply dark mode text color
    },
  },
  plugins: [],
};
