# Personal website

Astro static site — content-driven. See `docs/personal_website_expectations.md` for brief.

## Structure (v1)
- **Me** (`/me`) is the homepage (`/` → `/me`). Contains thoughts, articles, poems + Now. Content: `src/content/thoughts/*.md`, `src/content/articles/*.md`, `src/content/poems/*.md`, `src/content/now/now.md`
- **Life** (`/life`) archive hub — explicit sections: `/life/music`, `/life/films`, `/life/books`, `/life/projects` (projects has curated + GitHub allowlist)
- **Work** (`/work`) scaffolded, empty — Phase 2

## Adding content
```bash
# === Me (homepage /me) — ISO dates YYYY-MM-DD ===
# Thoughts — SINGLE FILE for all stickies at src/data/thoughts.json (whole-page clipboard board):
src/data/thoughts.json   # single file for all thoughts → board at /me/thoughts
# [
#   { "title": "My Thought", "description": "Summary — sticky text, 140 chars max", "date": "2026-10-03", "featured": false, "color": 1 },
#   { "title": "Another", "description": "...", "date": "2026-09-18", "color": 2 }
# ]
# fields: title, description, date (YYYY-MM-DD), featured (optional), color 1=yellow(default) 2=pink 3=green 4=blue
# no body needed — board shows title + description only (char-limited). Edit this one file, commit, push.

src/content/articles/my-article.md   # URL: /me/articles/my-article — description is enough, no body needed
src/content/poems/my-poem.md         # URL: /me/poems/my-poem  (verse preserved, line breaks matter)
# frontmatter for all writing: title, date (YYYY-MM-DD), description, tags, status (published|draft)
# poems: fixed to ISO now — e.g. 2025-07-20 not 2025-20-07; future files must use YYYY-MM-DD
# articles — link goes in frontmatter:
# ---
# title: "My Substack Piece"
# date: 2026-09-10
# description: "One-sentence summary — this is the card text, body not needed"
# tags: ["writing"]
# link: "https://yoursubstack.substack.com/p/my-piece"  # ← add your article URL here
# source: "Substack"                                      # optional label (shown as "Substack ↗")
# status: published
# ---
# no body needed

# === Life — single-file data (one page each, no per-entry detail) ===
src/data/music.json   # [{ title, artist, year, tags[] }]  → /life/music (table)
src/data/films.json   # [{ title, kind: "film"|"show", year, tags[] }] → /life/films
src/data/books.json   # [{ title, author, year, tags[] }] → /life/books  (no description)
# edit JSON array, commit, push — site rebuilds

# === Life/Projects — curated + GitHub allowlist (separate sections) ===
src/content/projects/muse.md       # + tech[], links.github/demo, projectStatus → Featured projects
src/lib/github.ts → ALLOWLIST = ["repo-name","another"] → More on GitHub (live from API)

# see src/content.config.ts:5 for full schemas
```

## Local dev
```bash
npm install
npm run dev    # http://localhost:4321/me
npm run build  # validates frontmatter, draft filtered
```

## Deploy
Push to `main` → `.github/workflows/deploy.yml` via `withastro/action` → GitHub Pages.
