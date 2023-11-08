import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.tsx', './mdx-components.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      }
    }
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        ludo: {
          primary: '#FFEF14',
          secondary: '#0569F3',
          // accent: '#37CDBE',
          neutral: '#2A323C',
          'base-100': '#1D232A',
          info: '#0569F3',
          success: '#0C9C59',
          warning: '#FFEF14',
          error: '#FF4714',
          '--btn-text-case': 'none'
        }
      }
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    prefix: '',
    logs: true
  }
} satisfies Config;
