/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ph: {
          red: '#ee3a43',
          'red-dark': '#c8102e',
          'red-light': '#f25c63',
          green: '#00a651',
          'green-light': '#2db86a',
          yellow: '#ffc425',
          'yellow-light': '#ffd35a',
          white: '#ffffff',
          light: '#f5f5f5',
          slate: '#6b6b6b',
          dark: '#1a1a1a',
        },
      },
    },
  },
  plugins: [],
}

