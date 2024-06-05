/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      backgroundColor: {
        disabled: "#D1D5DB", // Custom gray for disabled state
      },
      textColor: {
        disabled: "#565656", // Custom text color for disabled state
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
