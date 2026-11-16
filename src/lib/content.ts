// Small helpers so every page gets entries the same way:
// drafts hidden in production, everything sorted by `order`.
import { getCollection, type CollectionKey } from 'astro:content';

const visible = ({ data }: { data: { draft?: boolean } }) => import.meta.env.DEV || !data.draft;
const byOrder = (a: { data: { order: number } }, b: { data: { order: number } }) => a.data.order - b.data.order;

export const getProjects = async () => (await getCollection('projects', visible)).sort(byOrder);
export const getFeaturedProjects = async () => (await getProjects()).filter((p) => p.data.featured);
export const getServices = async () => (await getCollection('services', visible)).sort(byOrder);
export const getClients = async () => (await getCollection('clients')).sort(byOrder);
export const getLogos = async () => (await getCollection('logos')).sort(byOrder);
export const getArchive = async () => (await getCollection('archive')).sort(byOrder);
export const getFaq = async () => (await getCollection('faq')).sort(byOrder);

export type { CollectionKey };
