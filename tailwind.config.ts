import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red-orange": {
          "50": "#fff2f1",
          "100": "#ffe2df",
          "200": "#ffcac5",
          "300": "#ffa59d",
          "400": "#ff7164",
          "500": "#ff4433",
          "600": "#ed2715",
          "700": "#c81d0d",
          "800": "#a51c0f",
          "900": "#881e14",
          "950": "#4b0a04",
        },
        shark: {
          "50": "#f7f7f8",
          "100": "#eeeef0",
          "200": "#dadadd",
          "300": "#babbbf",
          "400": "#94959c",
          "500": "#777880",
          "600": "#606169",
          "700": "#4e4e56",
          "800": "#434349",
          "900": "#3b3c3f",
          "950": "#28282b",
        },
      },
    },
  },
  plugins: [],
}
export default config
