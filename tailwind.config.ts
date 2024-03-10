import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      'sm' : '600px',
      'md' : '700px',
      'lg' : '1000px',
      'xl' : '1280px',
      '2xl' : '1500px'
    }
  },
  plugins: [],
};
export default config;
