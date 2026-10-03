---
# Work entry template — copy this file to start a new role/project
# File location: src/content/work/<your-file-name>.md
# URL will be: /work/<your-file-name>/
# This template itself is a draft and will not appear on the site.

title: "Senior Engineer — Example Company"
date: 2024-02-01
endDate: Present
description: "One-line summary shown on cards and at top of detail page."
role: "Senior Engineer"
employer: "Example Company"
tech: ["TypeScript", "React", "Node.js"]
links:
  github: "https://github.com/KrishnarajaSagar/example"
  demo: "https://example.com"
tags:
  - work
  - engineering
status: draft      # change to published when ready
featured: false
---

<!-- Write the full work details below. This body appears on the detail page /work/<file-name>/ -->

## What I did

- Bullet point for key responsibility or achievement
- Another bullet

## Highlights

Short paragraph about impact, technologies, or team.

## Links

- [Live demo](https://example.com)
- [GitHub](https://github.com/KrishnarajaSagar/example)

---

# How to create a new Work entry

1. Copy this file: `src/content/work/_template.md` → `src/content/work/my-role.md`
2. Update frontmatter:
   - `title` — display title (e.g. "Staff Engineer — Acme")
   - `date` — start date YYYY-MM-DD (used with endDate for sorting, newest end first)
   - `endDate` — end date YYYY-MM-DD or `Present` for current role (e.g. `endDate: Present` or `endDate: 2025-08-01`)
   - `description` — one sentence for cards
   - `role` / `employer` — shown in listing meta as `role · Feb 2024 – Present`
   - `tech` — array of technologies
   - `links.github` / `links.demo` — optional URLs
   - `tags` — e.g. ["work", "leadership"]
   - `status: published` — to make it appear (draft hides it)
3. Write body below `---` in Markdown (headings, lists, links, images).
4. Add cover image if needed: put image in `public/images/work/` and reference `image: "/images/work/your-image.webp"` in frontmatter (optional).
5. Run `npm run dev` to preview at http://localhost:4321/work
6. Commit & push — `withastro/action` deploys to Pages.

# Frontmatter reference

- `title` (string, required)
- `date` (YYYY-MM-DD, required) — start date
- `endDate` (YYYY-MM-DD | `Present`, optional) — end date; use `Present` for current roles, sorting puts Present first
- `description` (string, optional)
- `role` (string, optional)
- `employer` (string, optional)
- `tech` (string[], optional)
- `links.github` / `links.demo` (url, optional)
- `tags` (string[], optional)
- `status` (published | draft, default published)
- `featured` (boolean, optional)
- `image` (string path, optional)
