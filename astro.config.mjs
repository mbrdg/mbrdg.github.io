import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbrdg.github.io',
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
});
