// One place for site-wide facts. Pages, SEO and the footer read from here.
export const site = {
  name: 'Oleg Coada',
  title: 'Brand Identities for AI & Tech Companies in Serious Markets — Oleg Coada', // default <title>
  description:
    'Brand identities for AI and tech companies selling into serious markets. Logo, visual systems, Figma toolkits and launch assets.',
  tagline: 'Brand identities for AI and tech companies selling into serious markets.',
  email: 'hi@olegcoada.com',
  location: 'Chișinău, Republic of Moldova',
  locale: 'en_US',
  ogImage: '/og-default.png', // TODO: add a 1200×630 image to /public
  // Optional top-of-site announcement (the old site linked this to the Lumian case study)
  announcement: {
    text: 'Lumian launched with $3M from Flybridge, Bowery Capital and Fika Ventures',
    href: '/#lumian', // TODO: point at the Lumian case study once the structure exists
  },
  social: {
    x: 'https://x.com/olegcoada',
    linkedin: 'https://www.linkedin.com/in/oleg-coada-86519316a/',
    dribbble: 'https://dribbble.com/olegcoada',
    behance: 'https://www.behance.net/oleg_coada',
  },
  cta: { label: 'Start a project', href: '/inquire' },
} as const;
