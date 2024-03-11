import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '572px',
        md: '752px',
        lg: '952px',
        xl: '1152px',
        xxl: '1252px',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // 'heroBG': "url('/img/herobgG.png') lightgray 50% / cover",
        'hero-bg': "url('/img/heroLine.png') lightgray 50% / cover",
        'finance-bg': "url('/img/finance.png') , lightgray -1081px 0px / 249.413% 304.943% no-repeat",
      },
    }
  },
  plugins: [],
};
export default config;
