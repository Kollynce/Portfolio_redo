/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#794bc5',
        // 'secondary': '#a5b1c2',
      },
    },
  },
  plugins: [],
  fontFamily: {
    'sans': ['Poppins', 'sans-serif'],
    'serif': ['Lora', 'serif'],
  },  
}
