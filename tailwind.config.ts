import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
 
  theme: {
    extend: {
      bgCustom:'rgb(22,21,43)',
      
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    // backgroundImage: {
    //   'bg-image': "url(/images/herobackground.jpg)",
    // },
  },
  plugins: [],
};
export default config;
