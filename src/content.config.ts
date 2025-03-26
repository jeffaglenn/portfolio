import { file } from "astro/loaders"
import { defineCollection, z } from "astro:content";

export const collections = {
    projects: defineCollection({
        loader: file("src/content/projects.json"),
        schema: z.object({
            title: z.string(),
            description: z.string(),
            url: z.string(),
            technologies: z.array(z.string()),
        })
    }),
}