/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f1f5f2',
          100: '#e2ebe5',
          200: '#c8d8cd',
          300: '#a8c0b0',
          400: '#829f8d',
          500: '#668270',
          600: '#526b5d',
          700: '#43574c',
          800: '#37473f',
          900: '#2e3b35',
          950: '#19231e',
        },
        paper: '#f7f4ec',
        ink: '#28302b',
        mist: '#ebe9e1',
        jade: '#668270',
        surface: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '"Noto Sans SC"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Consolas',
          'monospace',
        ],
        serif: [
          '"Noto Serif SC"',
          '"Songti SC"',
          'STSong',
          'SimSun',
          'serif',
        ],
      },
      typography: (/** @type {Function} */ theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.900'),
            '--tw-prose-links': theme('colors.brand.600'),
            '--tw-prose-bold': theme('colors.slate.900'),
            '--tw-prose-code': theme('colors.brand.700'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.200'),
            '--tw-prose-td-borders': theme('colors.slate.200'),
            lineHeight: '1.8',
            h1: { fontWeight: '800' },
            h2: { fontWeight: '700', marginTop: '2em' },
            a: {
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
