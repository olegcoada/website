// Content collections. Everything here is content only (copy, case study data,
// media references) pulled from the old Framer site. No layout or visual design
// is implied: any page structure can query these.
import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

// A gallery item. `src` is a remote Framer CDN URL for now; swap for a local
// path under src/assets once the files are downloaded.
const media = z.object({
  type: z.enum(['image', 'video']),
  src: z.string(),
  alt: z.string().default(''),
  caption: z.string().optional(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    discipline: z.string().default('Visual Identity'),
    summary: z.string().max(200), // one-liner for cards and meta description
    industry: z.string().optional(),
    year: z.number().int().optional(),
    highlights: z.array(z.string()).default([]), // facts worth surfacing, e.g. funding
    gallery: z.array(media).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100), // lower shows first
    testimonial: z
      .object({ quote: z.string(), author: z.string(), role: z.string().optional() })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    deliverables: z.array(z.string()).default([]),
    outcome: z.string().optional(),
    timeline: z.string().optional(),
    priceFrom: z.string().optional(), // free text: "$12,000", "On request"
    terms: z.array(z.string()).default([]),
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

// Standalone page copy (about, offer, contact). Markdown body + optional lists.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(), // meta description
    sections: z
      .array(z.object({ heading: z.string(), intro: z.string().optional(), items: z.array(z.string()).default([]) }))
      .default([]),
  }),
});

// Track record: short client lines used on the offer/inquire page.
const clients = defineCollection({
  loader: file('./src/content/data/clients.json'),
  schema: z.object({ name: z.string(), line: z.string(), order: z.number() }),
});

// Logo wall: each mark has a mono version and a colour version.
const logos = defineCollection({
  loader: file('./src/content/data/logos.json'),
  schema: z.object({
    name: z.string(),
    industry: z.string(),
    order: z.number(),
    mono: z.object({ src: z.string(), alt: z.string() }),
    color: z.object({ src: z.string(), alt: z.string() }),
  }),
});

// Archive: loose shots from many projects, shown as a grid.
const archive = defineCollection({
  loader: file('./src/content/data/archive.json'),
  schema: media.extend({ order: z.number() }),
});

// FAQ: question + answer. Old site used a chat widget; content is plain Q&A here.
const faq = defineCollection({
  loader: file('./src/content/data/faq.json'),
  schema: z.object({ question: z.string(), answer: z.string(), order: z.number() }),
});

export const collections = { projects, services, pages, clients, logos, archive, faq };
