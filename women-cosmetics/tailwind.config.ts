/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--gray-color)",
        darkGray: "var(--dark-gray:)",
        lightBlue: "var(--light-blue)",
        darkBlue: "var(--dark-blue)"
      },
    },
    screens: {
      xs: '350px',
      sm: '576px',
      md: '768px',
      mmd: '880px',
      lg: '992px',
      xl: '1024px',
      xxl: '1200px',
      xxxl: '1400px'
    }
  },
  plugins: [],
};
