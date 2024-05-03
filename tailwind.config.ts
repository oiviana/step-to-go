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
        'v-dark-300':'#464158',
        'v-dark-500': '#2B2836',
        'v-dark-700': '#23212c',
        'v-dark-900': '#1D1A26',
        'v-dark-bold': '#17151e',
        'v-white-300': '#f2f2f2',
        'v-white-500': '#E9E9E9',
        'v-white-900': '#d9d9d9'
      },
      animation: {
        'vote': 'vote 0.4s ease-in-out',
    },
    keyframes: {
        vote: {
            '0%': {
                opacity: '0'
            },
            '100%': {
                opacity: '1'
            },
        }
    }
    },
  },
  plugins: [],
  darkMode:"class",
};
export default config;
