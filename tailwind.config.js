/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tv-lg': '2560px',
        'tv-4k': '3840px',
      },
      fontSize: {
        '10xl': '10rem',     // 160px
        '12xl': '12rem',     // 192px
        '14xl': '14rem',
        '15xl': '15rem',
        '17xl': '20rem',     // 224px
      },
      spacing: {
        '72': '18rem',       // 288px
        '80': '20rem',       // 320px
        '96': '24rem',       // 384px
      
      },
      maxWidth: {
        '120': '20rem'
      }
    }
    
  
  },
  plugins: [],
}

