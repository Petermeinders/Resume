// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site: 'https://petermeinders.com',
  base: '/',
  output: 'static',
});
