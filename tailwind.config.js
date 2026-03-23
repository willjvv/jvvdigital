/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'jvv-blue': '#0066FF',
        'jvv-orange': '#FF6B35',
        'jvv-dark': '#0F172A',
        'jvv-light': '#F8FAFC'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        soft: '0 16px 50px rgba(15, 23, 42, 0.08)',
        glowBlue: '0 18px 45px rgba(0, 102, 255, 0.15)',
        glowOrange: '0 18px 45px rgba(255, 107, 53, 0.16)'
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 1px 1px, rgba(15, 23, 42, 0.08) 1px, transparent 0)',
        'brand-surface': 'linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(255, 107, 53, 0.08))'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
