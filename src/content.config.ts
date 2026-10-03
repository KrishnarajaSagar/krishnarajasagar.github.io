import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Shared base fields per docs/personal_website_expectations.md:219
const baseSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  status: z.enum(["published", "draft"]).default("published"),
  featured: z.boolean().optional().default(false),
  // image support for later, optional string for v1
  image: z.string().optional(),
});

// Thoughts, Music, Films, Books, Articles are now single data files in src/data/*.json (single file for all entries)
// See src/data/thoughts.json, music.json, films.json, books.json, articles.json — single page each
// thoughts: single file for all sticky notes — no per-thought markdown body, only description
// articles: single file at src/data/articles.json — each entry has link (always, new tab), no per-article detail page

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: baseSchema.extend({
    tech: z.array(z.string()).optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
    projectStatus: z.string().optional(),
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: baseSchema.extend({
    role: z.string().optional(),
    employer: z.string().optional(),
    tech: z.array(z.string()).optional(),
    links: z
      .object({
        github: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/now" }),
  schema: baseSchema,
});

const poems = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/poems" }),
  schema: baseSchema,
});

export const collections = { poems, projects, work, now };
