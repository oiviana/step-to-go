import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'v-dark-500': '#2B2836',
        'v-dark-900': '#1D1A26',
        'v-white-500': '#E9E9E9',
        'v-white-900': '#d9d9d9'
      },
    },
  },
  plugins: [],
  darkMode:"class",
};
export default config;
