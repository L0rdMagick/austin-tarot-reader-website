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
        'editorial': ['var(--font-cormorant)', 'serif'],
        'cinzel': ['var(--font-cinzel)', 'serif'],
        'sans': ['var(--font-jakarta)', 'var(--font-quicksand)', 'sans-serif'],
        'mono': ['var(--font-space)', 'monospace'],
      },
      colors: {
        background: 'rgb(var(--background-rgb))',
        foreground: 'rgb(var(--foreground-rgb))',
        primary: 'rgb(var(--primary-rgb))',
        secondary: 'rgb(var(--secondary-rgb))',
        accent: 'rgb(var(--accent-rgb))',
        obsidian: '#090A0F',
        surface: {
          DEFAULT: '#121622',
          elevated: '#1A2030',
          overlay: '#222A3E',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#9A7B1C',
        },
        amethyst: {
          DEFAULT: '#8B5CF6',
          dark: '#6D28D9',
        }
      }
    },
  },
  // CHANGED: Added the @tailwindcss/typography plugin.
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;