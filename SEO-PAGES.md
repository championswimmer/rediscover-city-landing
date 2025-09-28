# SEO Page Generation for Rediscover.city

## Overview

This solution ensures that SEO pages are properly generated with optimized meta tags for production builds using Vite's native multi-page application support, solving the issue where search engines and social media crawlers couldn't see the proper page-specific metadata.

## How It Works

### 1. HTML Entry Generation
During the build process, the `generateHTMLEntries.cjs` script:

- Reads markdown data from `src/utils/markdownData.ts`
- Generates individual HTML entry files for each SEO page in the project root
- Each HTML file includes proper meta tags: title, description, keywords, Open Graph, Twitter Cards
- Adds structured data (JSON-LD) for better search engine understanding
- These HTML files serve as entry points for Vite's build process

### 2. Vite Multi-Page Configuration
The `vite.config.ts` is configured with `rollupOptions.input` to include each HTML file:

```typescript
build: {
  rollupOptions: {
    input: {
      main: path.resolve(__dirname, 'index.html'),
      'meet-friends-middle': path.resolve(__dirname, 'meet-friends-middle.html'),
      'find-meeting-spot': path.resolve(__dirname, 'find-meeting-spot.html'),
      'group-meeting-coordinate': path.resolve(__dirname, 'group-meeting-coordinate.html'),
      'date-night-planning': path.resolve(__dirname, 'date-night-planning.html'),
    }
  }
}
```

This tells Vite to build each HTML file as a separate entry point, generating static pages with proper SEO optimization.

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

After running `npm run build`, Vite generates these files in `dist/`:

```
dist/
├── index.html                    # Main site
├── meet-friends-middle.html     # SEO-optimized page
├── find-meeting-spot.html       # SEO-optimized page
├── group-meeting-coordinate.html # SEO-optimized page
├── date-night-planning.html     # SEO-optimized page
├── sitemap.xml
└── assets/
    ├── main-[hash].js
    └── main-[hash].css
```

## Accessibility

- **Direct URL access**: `/meet-friends-middle.html` → SEO-optimized HTML served by Vite
- **SPA routing**: React Router handles client-side navigation between pages
- **Search engine friendly**: Each page serves proper HTML before JavaScript loads

## Verification

To verify SEO optimization:

```bash
# Build the project
npm run build

# Start preview server
npm run preview

# Test SEO page - shows page-specific title
curl http://localhost:4173/meet-friends-middle.html | grep "<title>"

# Should return page-specific title instead of generic site title
```

## Maintenance

When adding new SEO pages:

1. Create new `.md` files in `src/content/seo/`
2. Update `vite.config.ts` rollupOptions.input to include new HTML entry
3. Update `vite.config.ts` sitemap dynamicRoutes if needed
4. Run build process - HTML entries are automatically generated

The system automatically generates HTML entry files, and Vite handles the static page generation using its native multi-page support.

## Advantages of This Approach

- **Vite Native**: Uses Vite's built-in multi-page application support
- **Static Generation**: Each page is properly pre-rendered with SEO meta tags
- **Build Integration**: No post-build processing needed
- **Performance**: Vite optimizes each page during the build process
- **Maintainable**: Standard Vite configuration approach