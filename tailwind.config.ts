import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1a2016',
        soft: '#f5f7f1',
        body: '#4a5240',
        primary: '#1a5c38',
        'primary-dark': '#0f3d25',
        'primary-light': '#e8f2ea',
        'primary-mid': '#b5d4bc',
        accent: '#c9932a',
        'accent-light': '#f5ead0',
        'accent-mid': '#e8c97a',
      },
      fontFamily: {
        fraunces: ['var(--font-fraunces)', 'Georgia', 'serif'],
        nunito: ['var(--font-nunito)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        pill: '100px',
      },
      boxShadow: {
        card: '0 2px 12px rgba(30,27,75,0.04)',
        'card-hover': '0 8px 30px rgba(26,92,56,0.08)',
        btn: '0 4px 14px rgba(26,92,56,0.30)',
        'btn-hover': '0 6px 20px rgba(26,92,56,0.40)',
        float: '0 6px 24px rgba(30,27,75,0.12)',
      },
    },
  },
  plugins: [],
}
export default config
