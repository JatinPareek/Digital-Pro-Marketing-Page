/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#181818",
        "main-text": "#525252",
        white: "#fff",
        "accent-2": "#7939ee",
        mediumslateblue: "#2a62fe",
        heading: "#1c1c1c",
        grey: "#f9f9f9",
        gainsboro: "#e2e2e2",
      },
      spacing: {},
      fontFamily: {
        "main-text-p2-400": "'Open Sans'",
        "headings-h6-700": "Sora",
      },
      borderRadius: {
        "21xl": "40px",
        "61xl": "80px",
      },
    },
    fontSize: {
      xs: "12px",
      "2xl": "21px",
      mid: "17px",
      base: "16px",
      "48xl": "67px",
      "21xl": "40px",
      "35xl": "54px",
      "9xl": "28px",
      "3xl": "22px",
      "31xl": "50px",
      "11xl": "30px",
      "63xl": "82px",
      "6xl": "25px",
      "22xl": "41px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
