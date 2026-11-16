// One place for site-wide facts. Pages, SEO and the footer read from here.
export const site = {
  name: 'Oleg Coada',
  title: 'Oleg Coada — Brand Identity Design', // default <title>
  description: 'Brand identity design for founders and growing companies.', // TODO: final copy from Framer
  locale: 'en_US',
  ogImage: '/og-default.png', // TODO: add a 1200×630 image to /public
  social: {
    // TODO: fill in real handles
    x: '',
    linkedin: '',
  },
} as const;
