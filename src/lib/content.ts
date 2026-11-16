// Small helpers so every page gets entries the same way:
// drafts hidden in production, sorted by `order`.
import { getCollection } from 'astro:content';

const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getProjects() {
  const items = await getCollection('projects', visible);
  return items.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getFeaturedProjects() {
  return (await getProjects()).filter((p) => p.data.featured);
}

export async function getServices() {
  const items = await getCollection('services', visible);
  return items.sort((a, b) => a.data.order - b.data.order);
}
