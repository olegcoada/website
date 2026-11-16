# Oleg Coada — website

Astro foundation for the new site. Page structure and visual design are intentionally open.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type + content schema check
```

Requires Node 22+.

## Folder layout

```
public/                 Files served as-is (favicon, robots.txt, OG image)
src/
  site.config.ts        Site name, default title/description, social links
  layouts/BaseLayout    <html>/<head> shell used by every page
  components/Seo.astro  Title, description, canonical, Open Graph, X cards
  styles/tokens.css     Design tokens: colour, type scale, spacing, radius
  styles/global.css     Reset, base typography, .container/.section/.stack
  content.config.ts     Schemas for case studies and services
  content/projects/     One Markdown file per case study
  content/services/     One Markdown file per service
  lib/content.ts        getProjects(), getFeaturedProjects(), getServices()
  assets/               Images that Astro should optimise
  pages/                Routes (index and 404 are placeholders)
```

## Notes

- Entries with `draft: true` show in `npm run dev` but are left out of production builds.
- Before launch: set `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`
  to the real domain, and add `public/og-default.png` (1200×630).
