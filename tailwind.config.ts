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
      primarywhite:"#fbece2",
      cart:"#d6d6d8",
      cart2:"#212121",
      cart3:"#efe1c7",
      cart4:"#d7d7d9",
      

      },
    },
  },
  plugins: [],
};
export default config;
