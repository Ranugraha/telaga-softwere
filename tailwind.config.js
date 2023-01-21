/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        navbar: "0px 5px 8px rgb(0 0 0 / 3%)",
      },
      colors: {
        textcolor: {
          primary: "#1F284F",
          brown: "#575757",
        },
        black: "#1A1919",
        primaryUI: {
          primary: "#525256",
          "primary/10%": "#E8F2FE",
          secondary: "#1F384F",
          secondary1: "#2EC5CE",
        },
        accentColors: {
          acecent1: "#3CBA79",
          acecent2: "#EC5252",
          acecent3: "#B7C5CC",
          acecent4: "#DBDBDB",
        },
        labelColor: {
          primary: "#1F284F",
          secondary: "#515458",
        },
        sistemBackground: {
          primary: "#FFFFFF",
          secondary: {
            linear01: "#F5F0FF",
            linear02: "#EFF6FE",
            linear03: "#EDFAF5",
          },
          tertiary: "#FAFBFC",
        },
      },
    },
  },
  plugins: [],
};
