import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['var(--font-cinzel)'],
        'sans': ['var(--font-quicksand)'],
      },
      colors: {
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
        accent: 'rgb(var(--accent-rgb))',
      }
    },
  },
  // CHANGED: Added the @tailwindcss/typography plugin.
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;