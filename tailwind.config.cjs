/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BB6BD9',
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
