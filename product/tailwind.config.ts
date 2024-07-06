import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        text: "text 5s ease infinite",
        fadein: "fadein 0.5s ease-in-out",
        fadeout: "fadeout 0.5s ease-in-out",
      },
      keyframes: {
        fadein: { "0%": { opacity: ".6" }, "100%": { opacity: "1" } },
        fadeout: { "0%": { opacity: "1" }, "100%": { opacity: ".6" } },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        text: {
          "0%, 100%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "left center",
          },
          "50%": {
            backgroundSize: "200% 200%",
            backgroundPosition: "right center",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
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
          600: "#e0cbb9",
        },
      },
      backgroundImage: {
        fruits: "url('/public/fruit.jpg')",
      },
      height: {
        standard: "771px",
        490: "490px",
      },
      width: {
        490: "490px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
