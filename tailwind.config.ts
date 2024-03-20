import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: { xs: '320px' },
      maxWidth: {
        wrapper: '1072px',
        'lg-wrapper': '1360px'
      },
      dropShadow: {
        dark: '0 4px 20px #000000'
      }
    },
  },
  plugins: [],
};
export default config;
