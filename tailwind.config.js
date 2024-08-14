/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor : {
        "textHeadingColor" : "#E14658",
        "paracolor" : "#C0B3A0",
        "textsecondHeadingColor" : "#3F3250"
      },
      backgroundColor : {
        "footerBackgroundColor" : "#22252C"
      }
    },
  },
  plugins: [],
};
