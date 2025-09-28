# SEO Page Generation for Rediscover.city

## Overview

This solution ensures that SEO pages are properly generated with optimized meta tags for production builds, solving the issue where search engines and social media crawlers couldn't see the proper page-specific metadata.

## How It Works

### 1. Static HTML Generation
During the build process (`npm run build`), the `generateSEOPages.cjs` script:

- Reads markdown data from `src/utils/markdownData.ts`
- Generates individual HTML files for each SEO page
- Includes proper meta tags: title, description, keywords, Open Graph, Twitter Cards
- Adds structured data (JSON-LD) for better search engine understanding
- Creates both directory-style (`/slug/index.html`) and direct file formats (`/slug.html`)

### 2. Hosting Configuration
The script also generates hosting platform configuration files:

- **`_redirects`**: For Netlify-style platforms
- **`vercel.json`**: For Vercel deployments

These ensure that URLs like `/meet-friends-middle` serve the SEO-optimized HTML files.

### 3. SEO Benefits

Each generated page includes:
- **Page-specific title tags** for search results
- **Meta descriptions** tailored to each page
- **Keywords** for SEO targeting
- **Open Graph tags** for social media sharing
- **Twitter Cards** for Twitter sharing
- **Canonical URLs** to prevent duplicate content issues
- **Structured data** for rich search results

## Generated Files

After running `npm run build`, the following SEO pages are created:

```
dist/
├── meet-friends-middle/
│   └── index.html
├── meet-friends-middle.html
├── find-meeting-spot/
│   └── index.html
├── find-meeting-spot.html
├── group-meeting-coordinate/
│   └── index.html
├── group-meeting-coordinate.html
├── date-night-planning/
│   └── index.html
├── date-night-planning.html
├── _redirects
└── vercel.json
```

## Accessibility

- **Direct URL access**: `/meet-friends-middle.html` → SEO-optimized HTML
- **Directory style**: `/meet-friends-middle/` → SEO-optimized HTML  
- **Platform rewrites**: `/meet-friends-middle` → redirected to SEO HTML (on supported platforms)
- **SPA fallback**: Still works for client-side navigation within the React app

## Verification

To verify SEO optimization:

```bash
# Build the project
npm run build

# Start preview server
npm run preview

# Test SEO page (note the .html extension or trailing slash)
curl http://localhost:4173/meet-friends-middle.html | grep "<title>"
curl http://localhost:4173/meet-friends-middle/ | grep "<title>"

# Should return page-specific title instead of generic site title
```

## Maintenance

When adding new SEO pages:

1. Create new `.md` files in `src/content/seo/`
2. Update `vite.config.ts` dynamicRoutes if needed for sitemap
3. Run `npm run generate-markdown` to update the data
4. Build process automatically includes new pages

The system is fully automated - no manual updates needed for existing pages.