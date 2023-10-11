import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#7DC242',
      'secondary': '#706D6E',
      'info': '#2194F3',
      "white": "#FFFF"


    },
    extend: {
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(to right, #4A90E2, #CD2E75)',
      }),
    },
    
  },
  fontSize: {
    'xs': '12px',
    'sm': '14px',
    'base': '16px',
    'lg': '18px',
    'xl': '20px',
    '2xl': '24px',
    // Add more custom font sizes as needed
  },
  plugins: [],
}
export default config
