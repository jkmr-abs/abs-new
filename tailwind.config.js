/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abs: {
          orange: '#ff671d',
          'orange-soft': '#ffad82',
          ink: '#050608',
          panel: '#111318',
          text: '#f7f7f5',
          muted: '#a5a8ae',
          line: 'rgba(255, 255, 255, 0.14)',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
