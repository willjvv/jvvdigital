import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://jvvdigital.com',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    format: 'directory'
  },
  integrations: [tailwind()],
  vite: {
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    }
  }
});