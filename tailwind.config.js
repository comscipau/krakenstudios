/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004694",
        secondary: "#6196D0",
        sliderItem: "#ADD4FF",
      },
      fontFamily: {
        causten: ["Causten", "sans-serif"],
        spacegrotesk: ["SpaceGrotesk", "sans-serif"],
        vcr: ["VCR"],
      },
      backgroundImage: {
        rect_nft: "url('/src/images/rect_nft.png')",
        rect_webui: "url('/src/images/rect_webUI.png')",
        rect_marketing: "url('/src/images/rect_marketing.png')",
        rect_branding: "url('/src/images/rect_branding.png')",
        rect_community: "url('/src/images/rect_community.png')",
      },
      boxShadow: {
        shadowMain: "0px -5px 1px #004694",
        nftShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        filterMain: "0px 8px 8px rgba(0, 70, 148, 0.5)",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
