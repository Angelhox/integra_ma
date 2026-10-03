/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Puedes definir un color único o una escala completa
        'brand-primary': '#4f46e5', // El color principal
        'brand-secondary': '#1e293b', 
        'client-logo': {
          light: '#6366f1',
          DEFAULT: '#4f46e5',
          dark: '#3730a3',
        },
        'bg-main': '#f8fafc',
      },
    },
  },
  plugins: [],
}
