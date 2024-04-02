import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://mbrdg.github.io',
  integrations: [
    sitemap(),
    tailwind({
      nesting: true,
    }),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  }
});
