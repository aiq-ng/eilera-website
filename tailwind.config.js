/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      "main-dark-green": "#086D37",
      "main-light-green": "#7e5bef",
      "fine-green": "#1CB374",
      "light-green": "#D9FFDF",
      white: "#FFFFFF",
      grey: "#333333",
      "light-grey": "#00000066",
      "medium-grey": "#00000099",
    },
    fontFamily: {
      display: ['"Satoshi-Variable"'],
      body: ['"Satoshi-Variable"'],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        homeImage: "url('/assets/images/bgImage.webp')",
        "eilera-logo": "url('/assets/icons/eilera-logo.svg')",
      },
    },
  },
  safelist: ["font-family"],
};
