import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jvvdigital.com',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [tailwind()]
});
