/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#fbf8ff',
        surface: '#fbf8ff',
        'surface-low': '#f5f2fd',
        'surface-container': '#efecf7',
        'surface-high': '#e9e7f1',
        'surface-highest': '#e3e1ec',
        primary: '#294357',
        'primary-container': '#415a6f',
        'primary-soft': '#afcae2',
        secondary: '#b52517',
        charcoal: '#1b1b22',
        muted: '#43474c',
        outline: '#73777d',
        limestone: '#e5e2df',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        ambient: '0 24px 80px rgba(41, 67, 87, 0.10)',
        lift: '0 18px 45px rgba(41, 67, 87, 0.14)',
      },
    },
  },
  plugins: [],
};
