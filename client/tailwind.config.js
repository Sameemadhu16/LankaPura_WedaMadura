/** @type {import('tailwindcss').Config} */
export default {
  content:
      [
        './index.html',                // Include index.html
        './src/**/*.{js,ts,jsx,tsx}',  // Include all React files
      ],
  theme: {
    extend: {
      colors: {
        green: {
          light: '#a3e635',    // Light green
          DEFAULT: '#4caf50',  // Default green
          dark: '#2e7d32',     // Dark green
        },
        brown: {
          light: '#d2b48c',    // Light brown
          DEFAULT: '#8b4513',  // Default brown
          dark: '#5d3a17',     // Dark brown
        },
        yellow: {
          light: '#fdfd96',    // Light yellow
          DEFAULT: '#fdd835',  // Default yellow
          dark: '#fbc02d',     // Dark yellow
        },
      },
    },
  },
  plugins: [],
};
