import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders"

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: ({image}) => z.object({
        title: z.string(),
        url: z.string(),
        // Shown with empty alt text: the card's title already names the project.
        image: image(),
        technologies: z.array(z.enum([
            'Craft CMS',
            'Alpine.js',
            'TailwindCSS',
            'Astro.js',
            'GSAP',
            'Wordpress',
            'Algolia',
        ])),
    })
});

const experience = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/experience",
    }),
    schema: z.object({
        id: z.number(),
        position: z.string(),
        company: z.string(),
        companyUrl: z.string().optional(),
        dates: z.string()
    })
});

export const collections = {
    projects,
    experience
}