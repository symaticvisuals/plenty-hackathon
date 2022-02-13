module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      mulish: ["Mulish", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        frontpage: 'url("/src/assets/images/banner-bg.png")',
      },
      colors: {
        "body-fill": "var(--color-body-fill)",
        "body-hr": "var(--color-body-hr)",
        "body-logo": "var(--color-body-logo)",
        "body-logo-frontpage": "var(--color-body-logo-frontpage)",
        "bg-primary": "var(--color-bg-primary)",
        "bg-alt": "var(--color-bg-alt)",
        "bg-light": "var(--color-bg-light)",
        "border-dark": "var(--color-border-dark)",
        "border-main": "var(--color-border)",
        "border-checkbox": "var(--color-border-checkbox)",
      },
      textColor: {
        skin: {
          "body-text": "var(--color-body-text)",
          "body-span": "var(--color-body-span)",
          "icon-fill": "var(--color-icon-fill)",
          "icon-fill-hover": "var(--color-icon-fill-hover)",
          "icon-bg-start": "var(--color-icon-bg-start)",
          "icon-bg-end": "var(--color-icon-bg-end)",
          "icon-bg-hover-start": "var(--color-icon-bg-hover-start)",
          "icon-bg-hover-end": "var(--color-icon-bg-hover-end)",
          "border-checkbox": "var(--color-border-checkbox)",
          "text-inverted": "var(--color-text-inverted)",
          "body-logo-frontpage": "var(--color-body-logo-frontpage)",
          "fill-frontpage": "var(--color-fill-frontpage)",
        },
      },
      backgroundColor: {
        skin: {
          "body-fill": "var(--color-body-fill)",
          "body-hr": "var(--color-body-hr)",
          "body-logo": "var(--color-body-logo)",
          "body-logo-frontpage": "var(--color-body-logo-frontpage)",
          "bg-primary": "var(--color-bg-primary)",
          "bg-alt": "var(--color-bg-alt)",
          "bg-light": "var(--color-bg-light)",
          "dropdown-light": "var(--color-dropdown-light)",
          dropdown: "var(--color-dropdown)",
          "icon-fill": "var(--color-icon-fill)",
          "icon-fill-bg": "var(--color-icon-fill-bg)",
          "icon-bg-start": "var(--color-icon-bg-start)",
          "icon-bg-end": "var(--color-icon-bg-end)",
          "icon-bg-hover-start": "var(--color-icon-bg-hover-start)",
          "icon-bg-hover-end": "var(--color-icon-bg-hover-end)",
          "button-primary": "var(--color-button-primary)",
          "fill-frontpage": "var(--color-fill-frontpage)",
        },
      },
    },
    screens: {
      "3xl": { max: "2000px" },
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
