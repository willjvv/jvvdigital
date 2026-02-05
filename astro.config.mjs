import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jvvdigital.com',
  base: '/', 
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});