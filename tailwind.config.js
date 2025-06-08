/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "tv-lg": "2560px",
        "3xl" : "1980px",

        "tv-4k": "3840px",
        xga: { raw: "(min-width: 1024px) and (max-height: 700px)" },
      }, // TVs 1024x600      }
      fontSize: {
        "10xl": "10rem", // 160px
        "12xl": "12rem", // 192px
        "14xl": "14rem",
        "15xl": "15rem",
        "16xl": "17rem",
        "17xl": "20rem", // 224px
      },
      spacing: {
        72: "18rem", // 288px
        80: "20rem", // 320px
        96: "24rem", // 384px
      },
      maxWidth: {
        120: "20rem",
      },
      animation: {
        fadeIn: "fadeIn 0.7s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      }
    
    },
  },
  plugins: [],
};
