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
        // Here we are linking the CSS variables we defined in globals.css
        // This allows us to use `font-cinzel` and `font-sans` (for Quicksand) as classes.
        'cinzel': ['var(--font-cinzel)'],
        'sans': ['var(--font-quicksand)'],
      },
      colors: {
        // Here we are creating names for our CSS variable colors.
        // This allows us to use classes like `bg-background` or `text-primary`.
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
        accent: 'rgb(var(--accent-rgb))',
      }
    },
  },
  plugins: [],
};
export default config;