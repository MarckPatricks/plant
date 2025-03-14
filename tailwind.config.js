// tailwind.config.js
module.exports = {
  content: [
    "./app/views/**/*.{html,erb,html.erb}",  // Rutas donde se encuentra el HTML/ERB
    "./app/helpers/**/*.rb",                
    "./app/assets/javascripts/**/*.js",      // Rutas para archivos JS
    './app/assets/stylesheets/**/*.css',
  ],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" }
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },   
          "100%": { transform: "scale(0.8)" },             
        }
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
      },
      fontFamily: {
        jost: ["Jost", 'sans-serif'],
        lobster: ["Lobster", 'sans-serif']
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}