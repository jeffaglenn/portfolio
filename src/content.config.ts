import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders"

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: ({image}) => z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
        image: z.object(
            {
                src: image(),
                alt: z.string(),
            }
        ),
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
        position: z.string(),
        company: z.string(),
        companyUrl: z.string(),
        dates: z.string()
    })
});

export const collections = {
    projects,
    experience
}