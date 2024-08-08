/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mainImage": "url('./assets/city.jpg')"
      },
      boxShadow: {
        "dark": '0 4px 8px rgba(0, 0, 0, 0.79)'
      },
      screens: {
        'sm': '500px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },

}