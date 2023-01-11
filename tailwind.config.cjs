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
        "hero-cover": "url('https://media.istockphoto.com/id/1240010681/video/infinite-flight-in-space-among-fluorescent-neon-lamps.jpg?s=640x640&k=20&c=D4kKP2W0J7PptB2SBnuNIE9T-yfkIpmgrpreb2uJd00=')",
        "neon": `linear-gradient(
          var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2, #696bb8, #b262af
        )`,
      },
      animation: { "spin-slow": "spin 2.5s linear infinite" },
      colors: {
        "glass-teal": "#88ccca",
        "primary": "#0f97d5",
        "second": "#6366f1",
        "glass-teal-select": "#64CBC8",
        "deep-blue": "#212534",
        "grey-transparent": "#ffffff40",
        "black-transparent": "rgba(8, 8, 8, 0.478)",

        //buttons
        "bt-bg": "#319795",
        "hover-bt-bg": "#0E8AC2",
        "bt-text": "white",

        "dark-bt-bg": "#6366f1",
        "dark-bt-text": "white",
        "dark-hover-bt-bg": "#4f46e5",
      }
    }
  },
};
