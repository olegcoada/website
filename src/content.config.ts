// Content collections: case studies and services live as Markdown files,
// validated against these schemas at build time. Any page structure
// (one-pager, case-studies-first, offer-first) can query them.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      client: z.string(),
      summary: z.string().max(200), // one-liner for cards and meta description
      year: z.number().int(),
      industry: z.string().optional(),
      services: z.array(z.string()).default([]), // e.g. ["Logo", "Visual identity"]
      cover: image().optional(), // put images in src/assets for optimisation
      coverAlt: z.string().optional(),
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
    timeline: z.string().optional(), // e.g. "4–6 weeks"
    priceFrom: z.string().optional(), // free text so "From €4,000" or "On request" both work
    order: z.number().default(100),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, services };
