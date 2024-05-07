/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DFD5CB",
        secondary: "#BD965B",
        dgrey: "#222325"
      },
      fontFamily: {
        pthin: ["Poppins-Thin"],
        pextralight: ["Poppins-ExtraLight"],
        plight: ["Poppins-Light"],
        pregular: ["Poppins-Regular"],
        pmedium: ["Poppins-Medium"],
        psemibold: ["Poppins-SemiBold"],
        pbold: ["Poppins-Bold"],
        pextrabold: ["Poppins-ExtraBold"],
        pblack: ["Poppins-Black"],
      },
    },
  },
  plugins: [],
}

