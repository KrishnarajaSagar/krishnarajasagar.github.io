# Personal Website Revamp — Expectations & Design Brief

## 1. Project Overview

This website is a complete replacement for an old portfolio website that was originally based on a downloaded template and has not been meaningfully updated for roughly four years.

The new website should **not** be treated as a redesign of the existing portfolio. The existing site is disposable. Its useful content can be reviewed and migrated, but its visual structure, information architecture, and technical implementation do not need to be preserved.

The new website should function as a long-term **personal website and evolving digital archive**, with professional work as one clearly defined part of it.

The site should communicate:

- What I do professionally.
- What I build outside of work.
- What I think about.
- What I stand for.
- What I care about as a person.
- What I listen to, watch, read, and explore.
- What I am currently interested in or paying attention to.

The website should feel like a place that belongs to a specific person, rather than a generic developer portfolio.

---

# 2. Core Concept

## Working concept

**A small human corner of the internet.**

The site should feel personal, curated, thoughtful, and alive.

A useful conceptual combination is:

**Editorial publication + personal notebook + library/archive.**

The editorial aspect provides hierarchy and structure.

The notebook aspect allows thoughts, observations, principles, and small entries to exist without requiring every piece of content to become a formal article.

The library/archive aspect gives long-term value to the site. Content should accumulate over time rather than being replaced whenever the homepage changes.

The site should communicate that this is a human-curated space in an internet increasingly dominated by algorithmic feeds, generated content, disposable media, and frictionless consumption.

This should be communicated through the design and content itself rather than through excessive slogans about being "human."

---

# 3. What the Website Should Represent

The site should represent both **what I have done** and **how I see the world**.

Important themes include:

## Creativity

I value human creative expression and am skeptical of replacing creative work with AI-generated output, particularly in fields where the act of creating is itself important.

This does not need to become the site's sole theme. It is one of the principles that should be represented naturally through the site.

## Mindfulness and presence

I value being attentive to the present moment and being meaningfully engaged with the physical world instead of constantly operating through screens, feeds, notifications, and digital abstractions.

## The physical world

The website can intentionally draw inspiration from physical things that digital platforms have replaced or diminished:

- Books and notebooks.
- Newspapers and magazines.
- Record collections.
- Film archives.
- Personal libraries.
- Printed photographs.
- Physical notes and annotations.
- Personal collections.

This should influence the site's visual language without turning the website into a literal retro or skeuomorphic recreation.

## Music

Music is an important part of the site.

The music section should not simply be a list of favorite artists. It should be able to record things such as:

- Albums I have listened to.
- Albums that stayed with me.
- New discoveries.
- Personal observations.
- Repeated listens.
- Favorite tracks.
- Thoughts about music.

The system should allow this section to evolve continuously.

## Movies

Movies are another meaningful personal interest.

The site should be able to contain:

- Movies I have watched.
- Favorites.
- Personal notes.
- Reviews or reflections.
- Films that had a particular impact.
- Lists or collections.

This should feel like a personal film archive rather than an attempt to recreate a movie database.

## Building things

The website should document things I have made, including:

- Hobby projects.
- Apps.
- Games.
- Experiments.
- Side projects.
- Creative or technical experiments.

The distinction between professional work and personal projects should remain clear.

## Learning and exploration

The site should be able to document things I am currently learning, exploring, researching, or thinking about.

This section does not need to become a formal learning-management system. It should support lightweight entries.

---

# 4. Primary Goals

The website should satisfy these goals:

1. Present my professional work clearly.
2. Give visitors a genuine sense of who I am.
3. Communicate my principles without sounding like a corporate values page.
4. Provide a home for writing and personal observations.
5. Give me a long-term archive for music, films, books, projects, and other interests.
6. Make adding content extremely easy.
7. Allow the site to evolve frequently without requiring structural or code changes.
8. Remain visually distinctive without sacrificing usability.
9. Work well on both desktop and mobile.
10. Remain lightweight and fast.
11. Avoid making the website itself another source of unnecessary digital friction.

---

# 5. Publishing Model — Critical Requirement

This is one of the most important requirements of the entire project.

## Content must be separated from website code.

I should **not have to modify the website's code every time I want to add something**.

The desired workflow is:

1. I create or edit a text/Markdown file.
2. I add the relevant content and metadata.
3. The website automatically renders that content in the appropriate section.
4. The existing design and components remain unchanged.
5. The new item becomes part of the archive.

The site should therefore be designed as a **content-driven static website** rather than as a collection of hardcoded pages.

### Desired content workflow

For example:

```text
content/
    thoughts/
        being-present.md
        ai-and-creativity.md

    projects/
        muse.md
        sequence-game.md

    music/
        album-name.md

    films/
        film-name.md

    books/
        book-name.md
```

The exact folder structure can change during implementation, but the principle should remain:

**Content lives in files. Components render content.**

---

# 6. Content Format

Markdown should be the default authoring format wherever practical.

Each content item should support front matter / metadata.

For example:

```yaml
---
title: "Being Somewhere Should Mean Being There"
date: 2026-10-03
type: thought
tags:
  - mindfulness
  - technology
status: published
featured: false
---
```

The exact metadata schema should be determined during implementation, but the system should support at least:

- Title.
- Date.
- Content type/category.
- Tags.
- Publication status.
- Featured status where relevant.
- Image/media references where relevant.
- Optional external links.
- Optional short description/excerpt.

Different content types can have different metadata.

For example, a music entry may additionally support:

- Artist.
- Album.
- Release year.
- Genre.
- Rating or personal score, if eventually desired.
- Cover image.
- Listening date or period.

A film entry may support:

- Director.
- Release year.
- Country/language where useful.
- Poster/still.
- Date watched.
- Personal rating, if eventually desired.

A project entry may support:

- Project status.
- Technology.
- GitHub link.
- Demo link.
- Started date.
- Updated date.

The metadata should not become unnecessarily complicated. The goal is easy publishing, not building another enterprise CMS disguised as YAML.

---

# 7. Content Types

The site should support multiple content types without requiring a different publishing mechanism for each.

Expected content types include:

## Professional Work

Professional employment and work-related projects.

This should remain separate from personal projects.

## Personal Projects

Hobby projects, games, applications, experiments, prototypes, and things built outside work.

## Thoughts

Long-form or short-form writing.

A thought can be:

- A paragraph.
- A short note.
- A multi-page essay.
- An observation.
- An argument.
- A reflection.

The system should not force everything into "blog post" territory.

## Principles

Ideas I stand for or recurring beliefs.

Principles may also be represented through longer thoughts. The site should not require principles to exist only as isolated statements.

## Music

Albums, artists, tracks, discoveries, listening notes, essays, and personal collections.

## Films

Movies, reflections, reviews, lists, and film notes.

## Books

Books read, currently reading, favorite books, notes, and reflections.

## Currently / Now

A lightweight representation of what I am currently:

- Listening to.
- Watching.
- Reading.
- Building.
- Thinking about.
- Learning.

This section should be easy to update.

## Other Archive Items

The system should remain flexible enough to eventually support:

- Photography.
- Games.
- Places.
- Personal experiments.
- Collections.
- Miscellaneous notes.
- New categories that do not yet exist.

Adding a future category should ideally require creating a content type/configuration, not rebuilding the website.

---

# 8. Information Architecture

The primary navigation should remain intentionally small.

Proposed top-level structure:

```text
Home
Work
Archive
Thoughts
About
```

## Home

The homepage should introduce me and provide a curated snapshot of the rest of the site.

It should not be a conventional portfolio landing page.

## Work

Professional identity and professional work.

This section should include:

- Current role.
- Professional experience.
- Selected work.
- Skills / technologies where useful.
- Relevant accomplishments.
- Links to professional profiles where appropriate.

The Work section should be the most conventional section of the site because visitors may use it specifically to understand my professional background.

However, it should still visually belong to the overall site.

## Archive

The main personal collection.

Possible categories:

```text
Projects
Music
Films
Books
Other
```

The Archive should feel like a collection that grows over time.

## Thoughts

Writing, principles, observations, essays, and personal ideas.

The Thoughts section should support both long-form and short-form content.

## About

A personal introduction.

This should go beyond a résumé.

Potential content:

- Who I am.
- What I do.
- What I make.
- What I care about.
- What interests me.
- How I think about technology and creativity.
- Current interests.
- Links/contact information.

---

# 9. Homepage Expectations

The homepage is not intended to be a résumé.

It should feel more like the front page of a personal publication or the entrance to a personal archive.

Potential structure:

## Introduction

A clear introduction to who I am.

It can be minimal and personality-driven rather than a conventional:

> "Hello, my name is X and I am a passionate software engineer..."

Avoid generic portfolio language.

## Current focus

A "Currently" or "Now" area showing a few things occupying my attention.

Examples:

- Listening to...
- Watching...
- Reading...
- Building...
- Thinking about...

## Selected work

A small selection of professional work.

This should not attempt to display my entire professional history.

## From the archive

Recent or noteworthy personal projects, music, films, books, etc.

## Recent thoughts

Recent writing or reflections.

## Principles

A small entry point into what I stand for.

## Archive entry point

A clear invitation to explore the wider collection.

The homepage should provide enough variety that repeated visits can feel different as new content is added.

---

# 10. Archive Behavior

The archive should be designed for accumulation.

Older content should remain accessible rather than becoming difficult to discover.

Useful mechanisms may include:

- Categories.
- Tags.
- Chronological browsing.
- Search.
- Featured items.
- Related content.
- Cross-links.

The archive should be able to contain years of content without becoming unwieldy.

A future visitor should be able to discover something I published years earlier.

---

# 11. Connections Between Content

The website should not behave like a collection of unrelated pages.

Content should be able to reference other content.

For example:

```text
Thought about creativity
    ↓
Music entry
    ↓
Album that influenced the thought
```

or:

```text
Personal project
    ↓
Technical explanation
    ↓
Thought about why I built it
```

or:

```text
Film
    ↓
Personal reflection
    ↓
Principle / idea
```

Relevant internal links and tags should allow these connections to emerge naturally.

This is an important part of making the website feel like a personal knowledge space rather than a portfolio.

---

# 12. Visual Direction

## Primary starting point

**Editorial.**

The visual language should borrow from:

- Newspapers.
- Magazines.
- Books.
- Personal notebooks.
- Catalogs.
- Libraries.
- Record collections.
- Film archives.

The site should feel curated and intentional.

## Important distinction

Do NOT interpret this as:

- Fake paper everywhere.
- Excessive vintage styling.
- Typewriter fonts everywhere.
- Faux newspaper layouts on every page.
- Literal cassette tapes and books as UI elements.
- Heavy skeuomorphism.
- A "retro website."

The goal is to borrow the **structure and feeling of physical media**, not imitate physical media literally.

---

# 13. Alternative Visual Directions Worth Exploring

The editorial direction is the current preference, but the design process should explore nearby concepts before committing.

Potential directions:

## Editorial Archive

Modern magazine-like layout with strong typography, hierarchy, sections, captions, metadata, and curated imagery.

## Personal Library

The site behaves conceptually like a room/library containing shelves of work, thoughts, music, films, books, and objects of interest.

## Digital Notebook

More intimate and personal, with notes, annotations, side comments, dates, fragments, and evolving entries.

## Contemporary Journal

A clean personal publication where entries feel like journal pieces rather than blog posts.

## Museum / Collection

More formal and curated, treating personal interests and projects as a collection.

The final design could combine elements of these rather than selecting one literally.

---

# 14. Human-vs-Digital Theme

A recurring design idea can be:

**The website is digital, but its visual language is inspired by things digital systems have replaced.**

Examples:

- Editorial typography from print.
- Archive structures from libraries.
- Album presentation inspired by physical records.
- Film entries presented like a personal film cabinet.
- Writing presented like pages or notes.
- Dates and metadata presented like catalog information.
- Personal notes treated like annotations.

This theme should be subtle.

It should make someone think:

> "This feels unusually tangible for a website."

rather than:

> "This person really likes vintage aesthetics."

---

# 15. Typography

Typography should be a major part of the identity.

Possible system:

- Serif typeface for editorial/reflection-heavy content.
- Sans-serif typeface for navigation and functional information.
- Monospace for technical metadata or small system-like details.

The exact fonts should be selected during visual design.

Typography should prioritize:

- Readability.
- Strong hierarchy.
- Long-form reading comfort.
- Distinct personality.
- Good mobile rendering.

---

# 16. Color

The palette should be restrained.

Potential approach:

- Neutral base.
- Strong text contrast.
- One distinctive accent color.
- Occasional secondary tones for content categorization.

The site should not depend on bright gradients or generic "developer dark mode" aesthetics.

Dark mode may be supported, but it should be treated as a designed visual mode rather than merely inverting the colors.

---

# 17. Imagery

Images should support the editorial/archive feeling.

Potential image treatments:

- Full-width editorial images.
- Film stills.
- Album artwork.
- Project screenshots.
- Photographs.
- Small thumbnail grids.
- Contact-sheet-like collections.
- Captions and metadata.

Images should feel curated.

Avoid decorative stock imagery unless there is a specific reason to use it.

---

# 18. Interaction & Animation

Animation should be restrained.

Useful animation may include:

- Page transitions.
- Subtle content reveals.
- Hover states.
- Image expansion.
- Archive navigation.
- Small editorial interactions.

Animation should support atmosphere and navigation rather than exist purely to demonstrate that CSS has recently been discovered.

Performance takes priority over effects.

---

# 19. Content Update Experience

Updating the website should be easy enough that I actually keep doing it.

The ideal experience is:

```text
Think / watch / listen / build something
        ↓
Create a Markdown file
        ↓
Add metadata
        ↓
Commit / publish
        ↓
Website updates automatically
```

I should not need to:

- Edit React/HTML components.
- Manually add cards to pages.
- Modify navigation for every entry.
- Update a massive JSON file by hand.
- Copy content into multiple places.
- Rebuild page layouts for new categories.

The system should handle rendering, sorting, filtering, indexing, related content, and archive placement automatically.

---

# 20. Deployment Model

The existing website is hosted on GitHub.

The new site should remain compatible with a Git-based deployment workflow.

Preferred model:

```text
Git repository
    ↓
Content + code
    ↓
Static site build
    ↓
Automatic deployment
```

GitHub Pages is a natural option unless there is a strong technical reason to use another static hosting service.

The architecture should favor:

- Static generation.
- Minimal infrastructure.
- Low maintenance.
- Fast loading.
- Easy deployment.
- No unnecessary backend for v1.

---

# 21. Technology Expectations

The exact framework is open for discussion.

The important architectural properties are:

1. Static or mostly static output.
2. Markdown/content-file driven.
3. Good support for structured content.
4. Easy local development.
5. Automatic deployment from Git.
6. Good performance.
7. Easy future expansion.

Possible technical approaches can include static-site frameworks such as Astro, Eleventy, Next.js static generation, or another suitable generator.

The framework should be selected based on the content model and maintenance experience rather than popularity.

---

# 22. Content Schema Philosophy

The content schema should be:

**Structured enough to power the site. Simple enough that I will willingly maintain it for years.**

Avoid building an elaborate CMS schema before there is evidence that it is necessary.

Prefer:

```yaml
---
title:
date:
type:
tags:
---
```

plus optional type-specific metadata.

The website should infer as much as possible.

For example:

- A filename can determine the URL slug.
- Folder location can determine content category where appropriate.
- Publication date can determine chronological ordering.
- Tags can generate archive filters.
- `featured: true` can determine homepage placement.
- Related content can be inferred from tags or explicit references.

---

# 23. URLs

URLs should be stable and human-readable.

Examples:

```text
/work/
 /work/project-name/

 /thoughts/being-somewhere/
 /thoughts/ai-and-creativity/

 /archive/music/album-name/
 /archive/films/film-name/
 /archive/books/book-name/

 /projects/project-name/
```

Avoid IDs, query-heavy URLs, or URLs that expose implementation details.

Once published, URLs should be treated as permanent wherever possible.

---

# 24. Search

Search is not necessarily required for the first version, but the architecture should not prevent it.

As the archive grows, search will become useful.

The eventual search system should be able to find:

- Titles.
- Content.
- Tags.
- Artists.
- Directors.
- Project names.
- Other metadata.

A static client-side search index could be sufficient for a site of this size.

---

# 25. Accessibility

Accessibility should be built into the system rather than added later.

Requirements include:

- Semantic HTML.
- Keyboard navigation.
- Visible focus states.
- Appropriate heading hierarchy.
- Alt text for meaningful images.
- Sufficient color contrast.
- Reduced-motion support.
- Readable text sizes.
- Mobile-friendly interactions.
- Screen-reader-friendly navigation.

The editorial aesthetic must not compromise accessibility.

---

# 26. Responsive Design

The website must be designed mobile-first or at least mobile-equivalently.

The archive, typography, media layouts, navigation, and long-form writing should all remain comfortable on small screens.

Do not simply shrink the desktop design.

The mobile layout may deliberately simplify or reorder editorial elements.

---

# 27. Performance

Performance should be treated as part of the site's identity.

The site should:

- Load quickly.
- Avoid unnecessary JavaScript.
- Optimize images.
- Avoid excessive animation.
- Minimize third-party dependencies.
- Prefer static content where possible.

External embeds should be used cautiously.

A personal website does not need fourteen analytics scripts, three tracking pixels, a cookie banner and a loading animation before displaying a paragraph. Humanity's ability to overengineer a webpage remains undefeated.

---

# 28. Privacy

The site should collect as little user data as possible.

Analytics, if eventually added, should be minimal and privacy-conscious.

No unnecessary trackers should be introduced.

The website should not require visitor accounts.

The archive should be publicly readable unless a specific piece of content is intentionally private or unpublished.

---

# 29. RSS / Feed

The architecture should ideally support a feed later.

Possible feeds:

- Thoughts.
- All recent content.
- Possibly a combined personal feed.

This fits the site's philosophy because it allows people to follow the website directly rather than depending entirely on social-media algorithms.

Not required for the first release, but worth keeping in mind.

---

# 30. Social Sharing

The site should generate appropriate metadata for sharing pages.

Each page should support:

- Title.
- Description.
- Social preview image where useful.
- Canonical URL.

Social sharing should be supported without turning the site into a social platform.

---

# 31. External Links

External services can be linked where relevant:

- GitHub.
- LinkedIn.
- Music services.
- Film databases.
- Other personal profiles.

External services should act as references, not as the primary home of the content.

Where practical, the website should preserve my own description and notes rather than outsourcing my identity to a third-party platform.

---

# 32. Professional Work vs Personal Content

This separation is important.

Professional work should have a dedicated section and clear boundaries.

Personal content should have considerably more creative freedom.

For example:

```text
WORK
- Employment
- Professional projects
- Technical experience
- Selected achievements

EVERYTHING ELSE
- Personal projects
- Thoughts
- Principles
- Music
- Films
- Books
- Interests
- Experiments
- Current obsessions
```

The two areas should still visually belong to the same website.

---

# 33. What the Website Should NOT Become

The website should avoid becoming:

## A generic developer portfolio

Avoid the standard sequence of:

```text
Hero
About Me
Skills
Projects
Experience
Testimonials
Contact
```

unless a particular part genuinely serves a purpose.

## A résumé clone

The website should not merely reproduce my LinkedIn profile.

## A personal-brand marketing site

Avoid trying to sound like a startup founder, motivational speaker, or "thought leader."

## A generic blog

The content model should support thoughts and essays without forcing everything into blog chronology.

## A social network

Visitors do not need profiles, comments, likes, followers, or feeds.

## A nostalgia gimmick

The physical-media inspiration should support the site's meaning, not become an aesthetic costume.

## An AI showcase

AI may be relevant to my views and technical work, but the website itself should not feel like a demonstration of every generative feature available.

---

# 34. Long-Term Maintainability

The most important long-term requirement is:

**The site must make continued publishing easier, not harder.**

The original site became outdated partly because the barrier to meaningful updates was apparently high enough that four years passed.

The new architecture should make small updates trivial.

For example:

Adding a movie:

```text
create films/the-film.md
```

Adding a thought:

```text
create thoughts/the-thought.md
```

Adding a project:

```text
create projects/the-project.md
```

Then commit and publish.

This should be enough.

---

# 35. Content Lifecycle

Entries should support basic lifecycle states:

```text
draft
published
archived
```

Draft content must not appear publicly.

Archived content should remain accessible unless intentionally removed.

Deletion should be treated carefully because this is intended to become a long-term archive.

---

# 36. Versioning

Git provides a natural history for content.

The repository should therefore function as both:

- The website source.
- The historical record of how the website evolved.

Markdown content should remain readable outside the website codebase wherever possible.

This means the content should not become trapped inside a proprietary CMS.

---

# 37. Future Possibilities

The architecture should leave room for future features without requiring them in v1.

Potential future additions:

- RSS.
- Full-text search.
- Content recommendations.
- Related entries.
- Timeline view.
- "On this day" archive.
- Now page.
- Reading/listening/watching logs.
- Photo collections.
- Interactive archive.
- Lightweight statistics.
- Export functionality.
- Automated content indexing.
- Additional content types.

These should not be implemented merely because they are technically possible.

---

# 38. Suggested Content Relationships

A useful conceptual graph is:

```text
                ┌─────────────┐
                │    WORK     │
                └──────┬──────┘
                       │
                       │
┌──────────┐     ┌─────▼─────┐     ┌──────────┐
│  MUSIC   │────▶│    ME     │◀────│  FILMS   │
└──────────┘     └─────┬─────┘     └──────────┘
                       │
            ┌──────────┼──────────┐
            │          │          │
        ┌───▼───┐  ┌───▼───┐  ┌──▼────┐
        │THOUGHTS│  │PROJECTS│  │ BOOKS │
        └───┬───┘  └───────┘  └───────┘
            │
        ┌───▼────┐
        │PRINCIPLES│
        └─────────┘
```

The point is not to literally visualize this graph on the site.

The point is that all of these areas should feel like parts of one person's life.

---

# 39. Editorial Voice

The content should sound like me rather than like website copy.

The site should allow:

- Direct opinions.
- Nuance.
- Personal reflections.
- Curiosity.
- Uncertainty.
- Humor where natural.
- Technical detail where appropriate.

Not every entry needs to reach a grand conclusion.

The website should have room for:

> "I don't fully know what I think about this yet."

That is a legitimate state for a personal archive.

---

# 40. Homepage Content Should Evolve Automatically

The homepage should be largely generated from content metadata.

Examples:

```text
Latest thought
Latest project
Recently watched film
Recently listened-to album
Currently reading
Featured principle
```

This means updating a content file can automatically change the homepage.

I should not need to edit `Home.tsx` just because I watched another movie.

---

# 41. Editing Existing Content

Editing an existing Markdown file should automatically update:

- The detail page.
- Archive listing.
- Search index.
- Related content.
- Homepage placement where relevant.
- Metadata.
- Social sharing information.

Again, no manual component edits.

---

# 42. Images and Media

The content system should support local media wherever practical.

For example:

```text
content/
assets/
    music/
    films/
    projects/
    thoughts/
```

Images should be optimized during the build process.

The content authoring workflow should make it straightforward to associate images with Markdown entries.

The implementation should avoid unnecessarily duplicating the same image in multiple places.

---

# 43. Design Principle: Curation Over Quantity

The website should value selection.

Not everything needs to be documented.

The archive should answer:

> "What have I chosen to remember or share?"

rather than:

> "Can I put every fact about myself on the internet?"

This also keeps the website readable as it grows.

---

# 44. Design Principle: Personality Over Conventionality

The site should not follow conventions simply because other portfolio websites do.

Conventions should be used where they improve usability.

Personality should be allowed where the content benefits from it.

The goal is not to make the website unusual for the sake of being unusual.

The goal is to make the site feel like it could not have belonged to just anyone.

---

# 45. Design Principle: Physical References Should Have Purpose

Any visual reference to books, paper, newspapers, albums, libraries, notebooks, etc. should reinforce the conceptual theme.

For example:

Good:

- Editorial typography.
- Catalog-like metadata.
- Marginal notes.
- Archival numbering.
- Curated image layouts.

Potentially bad:

- Random paper textures.
- Fake page curls.
- Decorative cassette illustrations.
- Excessive handwriting fonts.
- Fake "stamps" everywhere.

The physical-world influence should feel natural rather than theatrical.

---

# 46. Initial Navigation Concept

A possible first implementation:

```text
┌───────────────────────────────────────────────┐
│ SAGAR                     HOME WORK ARCHIVE   │
│                           THOUGHTS ABOUT      │
├───────────────────────────────────────────────┤
│                                               │
│                 INTRODUCTION                  │
│                                               │
├───────────────────────────────────────────────┤
│ CURRENTLY                                     │
│                                               │
├───────────────────────┬───────────────────────┤
│ FROM WORK             │ FROM THE ARCHIVE      │
├───────────────────────┴───────────────────────┤
│                                               │
│ RECENT THOUGHT                                │
│                                               │
├───────────────────────────────────────────────┤
│ WHAT I BELIEVE                                │
│                                               │
└───────────────────────────────────────────────┘
```

This is only a structural sketch.

The final UI should be developed after visual exploration.

---

# 47. Technical Separation of Responsibilities

The implementation should conceptually separate:

```text
CONTENT
    Markdown + metadata

CONTENT MODEL
    Parsing + validation + indexing

COMPONENTS
    Reusable visual presentation

LAYOUT
    Page and responsive structure

THEME
    Typography + colors + visual identity

BUILD
    Static generation + optimization

DEPLOYMENT
    GitHub / static hosting
```

Changing content should not require changing components.

Changing the visual design should not require rewriting content.

Adding a content item should not require modifying a page manually.

This separation is a core architectural requirement.

---

# 48. Validation

The build system should catch common authoring mistakes.

Examples:

- Missing title.
- Invalid date.
- Unknown content type.
- Invalid front matter.
- Missing required metadata for a specific content type.
- Broken local image references.
- Broken internal content links where detectable.

The goal is to make Markdown editing forgiving while still preventing broken pages.

---

# 49. Content Preview / Local Workflow

A convenient local workflow is desirable.

Ideally:

```bash
npm run dev
```

and then Markdown changes can be seen immediately in the local site.

The content authoring experience should be simple enough that I can make a change, preview it, commit it, and move on.

---

# 50. Quality Bar

Before the website is considered complete, it should pass the following conceptual test:

If someone visits only the homepage, they should understand:

1. Who I am.
2. What I do.
3. That I make things.
4. That I think about things.
5. That I care about things beyond work.
6. That this is a living website rather than a static résumé.

If someone explores the archive, they should be able to gradually build a picture of my interests and personality.

If someone reads my thoughts, they should understand some of my principles without needing to read a generic list of values.

If someone visits again months later, there should be evidence that the website has continued to evolve.

---

# 51. Definition of Success

The new website is successful when it feels less like:

> "Here is my professional profile."

and more like:

> "This is a place where you can see what I have made, what I care about, what I think about, and what has occupied my attention over time."

The website should be something I genuinely want to keep updating.

That is more important than whether it has every conventional portfolio feature.

---

# 52. Initial Product Decisions

The following should be treated as the current baseline:

- Existing website design will not be preserved.
- Website is a personal website, not merely a portfolio.
- Professional Work gets its own section.
- Personal projects and interests have creative freedom.
- Music and movies are meaningful first-class content areas.
- Thoughts and principles should be part of the site.
- Mindfulness, physical-world presence, and human creativity are important themes.
- Editorial is the primary visual direction to explore.
- A library/archive concept is also worth exploring.
- Physical-world references should influence the visual system without becoming a retro gimmick.
- Content should live primarily in Markdown/text files.
- Website pages should render automatically from content.
- Adding an entry should not require code changes.
- Git should remain the primary source-control and publishing mechanism.
- The site should be static or mostly static where possible.
- The system should be designed for frequent updates over many years.
- The site should prioritize personality, curation, readability, accessibility, and performance.
- The site should not become a generic portfolio, résumé clone, blog platform, social network, or AI showcase.

---

# 53. Next Design Phase

The next phase should NOT begin with coding.

First determine:

## A. Final information architecture

Define the precise relationship between:

- Home.
- Work.
- Archive.
- Thoughts.
- About.
- Music.
- Films.
- Books.
- Projects.
- Principles.
- Currently.

## B. Visual direction

Create several distinct design directions based on:

- Editorial archive.
- Personal library.
- Digital notebook.
- Contemporary journal.

Compare them based on how well they express the site's identity.

## C. Content model

Define the exact Markdown schemas for each content type.

## D. Homepage composition

Determine the actual hierarchy and components on the homepage.

## E. Design system

Define:

- Typography.
- Spacing.
- Color.
- Image treatment.
- Grid.
- Navigation.
- Interaction.
- Responsive behavior.

## F. Technical architecture

Select the framework and build system only after the content model and design direction are sufficiently clear.

---

# 54. Guiding Principle

The website should ultimately answer a simple question:

**What would remain about me on the internet if I removed the résumé, the algorithm, and the social profile?**

The answer should be the website.
