import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    gallery: z.array(z.object({
      image: z.string()
    })).optional(),
  }),
});

const galleryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    cover: z.string(),
    photos: z.array(z.object({
      photo: z.string()
    })),
  }),
});

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    address: z.string().optional(),
    email: z.string().optional(),
  }),
});

export const collections = {
  'news': newsCollection,
  'gallery': galleryCollection,
  'pages': pagesCollection,
};
