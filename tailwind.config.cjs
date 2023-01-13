/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  plugins: [],
  theme: {
    extend: {
      // backgroundImage: { "hero-cover": "url('assets/images/cover-2.webp')" },
      backgroundImage: {
        "hero-cover": "url('assets/images/cover-neon.jpg')",
        "neon": `linear-gradient(
          var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2, #696bb8, #b262af
        )`,
      },
      animation: { "spin-slow": "spin 2.5s linear infinite" },
      colors: {
        "neon-1": "rgba(63,81,181,1) 20%",
        "neon-2": "rgba(171,71,188 ,1) 70%",
        "glass-teal": "#88ccca",
        "primary": "#0f97d5",
        "second": "#6366f1",
        "glass-teal-select": "#64CBC8",
        "deep-blue": "#212534",
        "grey-transparent": "#ffffff40",
        "black-transparent": "rgba(8, 8, 8, 0.478)",

        //buttons
        "hover-bt-bg": "#0E8AC2",
        "bt-text": "white",

        "dark-bt-bg": "black",
        "dark-bt-text": "white",
        "dark-hover-bt-bg": "",
      }
    }
  },
};
