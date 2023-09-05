import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        draft: z.boolean(),
        publishDate: z.string().transform(str => new Date(str)),
        title: z.string(),
        author: z.string()
    }),
});


export const collections = {
    'blog': blogCollection,
};