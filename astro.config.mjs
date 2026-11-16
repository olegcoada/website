// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with the real domain before launch (used for canonical URLs + sitemap)
  site: 'https://example.com',
  integrations: [sitemap()],
});
