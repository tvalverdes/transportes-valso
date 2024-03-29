import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      errors: ["Roboto"]
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-image': "url('../../public/images/home/furgoneta.webp');",
        'services-image': "url('../../public/images/home/descargar-material.webp');",
        'work-image': "url('../../public/images/home/work-with-us.webp');",
        'work-mobile-image': "url('../../public/images/home/work-with-us-mobile.webp');",
        'work-truck-image': "url('../../public/images/work/trabajar-camion.webp');",
        'work-driver-image': "url('../../public/images/work/chofer.webp');",
      },
      colors: {
        primary: "#05b772",
        dark: "#022437",
        understate: "#9A9FA9"
      }
    },
  },
  plugins: [],
}
export default config
