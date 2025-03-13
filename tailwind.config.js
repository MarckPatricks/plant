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
            xl: "1180px",
        },
      extend: {},
      fontFamily: {
        jost: ["Jost", 'sans-serif'],
        lobster: ["Lobster", 'sans-serif']
      },
      container: {
        center: true,
        padding: {
            DEFAULT: "12px",
            md: "32px",
        }, 
      },
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }
  