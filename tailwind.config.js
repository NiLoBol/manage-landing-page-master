module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "img":"url('/images/bg-tablet-pattern.svg')",

        "sd":"url('/images/bg-simplify-section-desktop.svg')",
        "sm":"url('/images/bg-simplify-section-mobile.svg')"
      },
      fontWeight: {
        bold: "700",
        semi: "500",
        normal: "400",
      },
      colors: {
        BrightRed: "hsl(12, 88%, 59%)",
        DarkBlue: "hsl(228, 39%, 23%)",
        DarkGrayishBlue: "hsl(227, 12%, 61%)",
        VeryDarkBlue: "hsl(233, 12%, 13%)",
        VeryPaleRed: "hsl(13, 100%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
      },
      fontSize:{
        sub:""
      },
      
      
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
