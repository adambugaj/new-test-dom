import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://domjakosci.pl',
  output: 'static',
  integrations: [tailwind()],
  build: {
    format: 'file'
  }
});