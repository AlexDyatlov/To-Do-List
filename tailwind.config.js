export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        robo: ['Roboto', 'Arial', 'Helvetica', 'sans-serif']
      }
    },
    screens: {
      xl: { max: '1024px' },
      lg: { max: '820px' },
      md: { max: '576px' }
    }
  },
  plugins: []
};
