import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        beige: {
          100: "#FFFFFF",
          200: "#FCF7F2",
          300: "#f5e9e1",
          500: "#F4E7DD",
          400: "#F6E6DB",
          600: '#e0cbb9',
        },
      },
      backgroundImage: {
        fruits: "url('/public/fruit.jpg')",
      },
      height: {
        standard: '771px',
        490: '490px',
      },
      width: {
        490: '490px',
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
