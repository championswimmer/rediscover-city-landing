# SEO Content Management System

This directory contains markdown files for SEO pages that are automatically converted to React pages.

## How to Add a New SEO Page

1. Create a new `.md` file in `src/content/seo/` directory
2. Use the following frontmatter structure:

```yaml
---
title: "Page Title for SEO - Your Brand"
description: "Meta description for search engines"
keywords: "keyword1, keyword2, keyword3"
ogTitle: "Open Graph title for social sharing"
ogDescription: "Open Graph description for social sharing"
ogImage: "https://yourdomain.com/og-image.jpg"
canonicalUrl: "https://yourdomain.com/page-slug"
slug: "page-slug"
heroTitle: "Hero Section Title (optional)"
heroDescription: "Hero section description (optional)"
---
```

3. Write your content in markdown below the frontmatter
4. Run `npm run generate-markdown` to process the markdown files
5. The page will be automatically available at `/{slug}`

## Example New Page

Here's an example of adding a new SEO page:

**File: `src/content/seo/date-night-planning.md`**

```markdown
---
title: "Perfect Date Night Spots - Romantic Location Finder | Rediscover.city"
description: "Discover romantic date night locations with fascinating histories and stories. Our AI finds perfect spots for couples with rich local culture and ambiance."
keywords: "date night spots, romantic locations, couple meetup places, romantic restaurants, date ideas"
ogTitle: "Perfect Date Night Spots - Romantic Location Finder"
ogDescription: "Find amazing romantic locations for date nights with AI-powered suggestions and local stories."
ogImage: "https://rediscover.city/og-date-night.jpg"
canonicalUrl: "https://rediscover.city/date-night-planning"
slug: "date-night-planning"
heroTitle: "Discover Perfect Date Night Locations"
heroDescription: "AI-powered romantic location discovery with captivating love stories and local legends"
---

# Date Night Planning Made Special

## Why Choose Story-Rich Date Locations?

Transform ordinary date nights into extraordinary experiences with locations that have fascinating stories to tell. Our AI-powered system finds romantic venues with rich histories, local legends, and cultural significance that give you plenty to talk about and remember.

## Features

### Romantic Ambiance
Find venues with the perfect atmosphere for romantic conversations and memorable moments.

### Historical Stories
Each location comes with fascinating tales of local romance, historic couples, and love stories that unfolded in these very places.

### Conversation Starters
Rich local history and cultural insights provide natural conversation topics for your date.

## Ready to Plan an Unforgettable Date?

Discover romantic locations with stories that will make your date nights truly special.
```

After creating the file, run `npm run generate-markdown` and the page will be available at `/date-night-planning`.

## Build Process

The markdown files are processed at build time by `scripts/generateMarkdownData.cjs`, which:

1. Reads all `.md` files from `src/content/seo/`
2. Parses frontmatter and content using `gray-matter`
3. Generates `src/utils/markdownData.ts` with static data
4. Makes pages available through the dynamic route handler

## Sitemap Generation

The `vite-plugin-sitemap` automatically generates `sitemap.xml` and `robots.txt` files that include all dynamic routes defined in `vite.config.ts`.