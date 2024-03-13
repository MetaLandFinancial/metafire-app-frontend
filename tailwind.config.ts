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
      colors: {
        'rgba-blue-500': 'rgba(71, 118, 230, 0.04)',
        'rgba-purple-600': 'rgba(142, 84, 233, 0.04)',
        'custom-gradient-start': 'rgba(71, 118, 230, 0.04)',
        'custom-gradient-end': 'rgba(142, 84, 233, 0.04)',
        'gradient-start': 'rgba(71, 118, 230, 0.20)',
        'gradient-end': 'rgba(142, 84, 233, 0.20)',
      },
      boxShadow: {
        'button': '0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset',
        'custom-shadow': '0px 0px 30px 7px rgba(142, 84, 233, 0.20) inset',
      },

      backgroundImage:{
        'deporitsImg': 'url(../../public/assets/deposit_summery_bg.svg)',
        'deporitsImgTwo': 'url(../../public/assets/deposit_respon.svg)'
      }
    },
  },
  plugins: [],
};
export default config;
