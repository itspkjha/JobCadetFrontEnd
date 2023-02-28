/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background':"#FFFFFF",
        'accentColor':"#0A8080",
        'headingColor' : "#343D48",
        'servicesBgColor' : "#FFFAF6"
      },
      backgroundImage: {
      },
    },
  },
  plugins: [],
}
