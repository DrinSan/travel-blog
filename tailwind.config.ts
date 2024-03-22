module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      colors: {
        primary: "#fb7185",
        fromDark: "#110611",
        toDark: "#110611",
        darkpurple: "#1D1A31",
        cultured: "#F6F8FA",
        mainDark: "#0f0f25",
        mainLight: "#e7e7e7",
        darkDarker: "#171733",
        lightDarker: "#e1e1e1",
        mainGray: "#5e5b70",
        good: "#48e5b5",
        bad: "#e55368",
      },
      screens: {
        xs: "400px",
        xs2: "450px",
        xs3: "540px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1850px",
      },
      fontFamily: {
        sans: ["var(--sans-font)"],
        serif: ["var(--serif-font)"],
        articleSerif: ["var(--article-serif-font)"],
        condensedSansFont: ["var(--condensed-sans-font)"],
        oswald: ["var(--oswald-font)"],
      },
      fontSize: {
        "3xs": [
          ".45rem",
          {
            lineHeight: ".43rem",
            letterSpacing: ".5px",
          },
        ],
        "2xs": [
          ".6rem",
          {
            lineHeight: ".55rem",
            letterSpacing: ".5px",
          },
        ],
        "2.5xs": [
          ".7rem",
          {
            lineHeight: ".65rem",
            letterSpacing: ".5px",
          },
        ],
        "2sm": [
          ".8rem",
          {
            lineHeight: "1.15rem",
            letterSpacing: ".5px",
          },
        ],
        "2.5xl": [
          "1.75rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: ".3px",
          },
        ],
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: "0%" },
        },
        fadeDark: {
          "0%": { opacity: "0%" },
          "2%": { opacity: "40%" },
          "100%": { opacity: "10%" },
        },
        fade: {
          "0%": { opacity: "0%" },
          "2%": { opacity: "70%" },
          "100%": { opacity: "30%" },
        },
        grown: {
          "100%": { transform: "scale(1.25)" },
        },
        write: {
          "0%": { opacity: "100%" },
          "20%": { opacity: "0%" },
          "40%": { opacity: "100%" },
          "60%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      },
      animation: {
        write: "write .6s linear infinite",
        fadeOut: "fadeOut 1.5s linear",
        fade: "fade 8s linear",
        fadeDark: "fadeDark 8s linear",
        grown: "grown 8s linear",
      },
      transitionDuration: {
        1800: "1800ms",
      },
      boxShadow: {
        "footer-dark": "0px 0px 50px 50px rgba(0, 0, 0, 1)",
        "footer-light": "0px 0px 50px 50px rgba(246, 248, 250, 1)",
        dashboardDark:
          "rgba(0, 0, 0, 0.69) 0px 13px 15px -10px, rgba(0, 0, 0, 0.73) 0px 8px 5px -10px",
        dashboard:
          "rgba(0, 0, 0, 0.15) 0px 13px 15px -10px, rgba(0, 0, 0, 0.2) 0px 8px 5px -10px",
      },
    },
  },
};
