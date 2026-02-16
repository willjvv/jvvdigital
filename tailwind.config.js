/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'jvv-blue': '#0066FF',
        'jvv-orange': '#FF6B35',
        'jvv-dark': '#0F172A',
        'jvv-light': '#F8FAFC'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}