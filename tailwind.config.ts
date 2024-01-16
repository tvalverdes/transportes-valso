import type { Config } from 'tailwindcss'

const config: Config = {
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
        'hero-image': "url('../../public/images/home/furgoneta.webp');",
        'services-image': "url('../../public/images/home/descargar-material.webp');",
        'work-image': "url('../../public/images/home/work-with-us.webp');",
        'work-mobile-image': "url('../../public/images/home/work-with-us-mobile.webp');",
      },
      colors: {
        primary: "#05b772",
        understate: "#6b7280"
      }
    },
  },
  plugins: [],
}
export default config
