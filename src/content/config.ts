import { defineCollection, z } from "astro:content";

const demos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    component: z.string(),
    category: z.string(),
    colors: z.union([z.string(), z.array(z.string())]).optional(),
    date: z.coerce.date().optional(),
    tags: z
      .array(z.string())
      .optional()
      .transform((tags) => {
        if (!tags) return [];
        return [...new Set(tags.map((tag) => tag.toLowerCase()))];
      }),
  }),
});

export const collections = {
  demos,
};
