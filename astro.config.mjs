// @ts-check
import { defineConfig } from 'astro/config';

// GitHub project Pages: https://petermeinders.github.io/Resume/ → base /Resume/
// Custom domain petermeinders.com → set ASTRO_BASE=/ and ASTRO_SITE in workflow
const site = process.env.ASTRO_SITE ?? 'https://petermeinders.com';
const base = process.env.ASTRO_BASE ?? '/';

// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
  site,
  base,
  output: 'static',
});
