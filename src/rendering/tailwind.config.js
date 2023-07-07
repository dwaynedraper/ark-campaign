/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderWidth: {
        '1': '1px'
      },
      colors: {
        // Compassion blue is primary
        'primary': '#005EB8',
        'primary-dark': '#003C71',
        'primary-light': '#0086bf',
        'primary-lighter': '#71b2c9',
        'primary-lightest': '#bbdde6',
        // Compassion yellow is secondary
        'secondary': '#ffd100',
        'secondary-dark': '#ffb600',
        // Compassion greys
        'neutral': '#768692',
        'neutral-dark': '#425563',
        'neutral-light': '#d9e1e2',
        'neutral-lighter': '#E3E4E2',
      }
    },
  },
  prefix: 't-'
}