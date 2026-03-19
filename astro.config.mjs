// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://sclappccsu.github.io',
  base: '/ai4ctdh-astro',
  vite: {
    plugins: [tailwindcss()]
  }
});
