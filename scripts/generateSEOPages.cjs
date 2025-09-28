const fs = require('fs');
const path = require('path');

// Import the markdown data
const DIST_DIR = path.join(__dirname, '../dist');
const MARKDOWN_DATA_PATH = path.join(__dirname, '../src/utils/markdownData.ts');

// Read the base index.html template
const BASE_HTML_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(BASE_HTML_PATH)) {
  console.error('Build output not found. Please run `npm run build` first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(BASE_HTML_PATH, 'utf8');

// Extract markdown data by executing the generated TypeScript file
// We'll read it as text and extract the data object
const markdownDataContent = fs.readFileSync(MARKDOWN_DATA_PATH, 'utf8');

// Extract the markdownPages object from the TypeScript file
const markdownPagesMatch = markdownDataContent.match(/export const markdownPages: Record<string, MarkdownSEOPage> = ({[\s\S]*?});/);
if (!markdownPagesMatch) {
  console.error('Could not extract markdownPages from markdownData.ts');
  process.exit(1);
}

let markdownPages;
try {
  // Safely evaluate the extracted object
  markdownPages = eval(`(${markdownPagesMatch[1]})`);
} catch (error) {
  console.error('Failed to parse markdownPages:', error);
  process.exit(1);
}

// Generate HTML for each SEO page
Object.entries(markdownPages).forEach(([slug, pageData]) => {
  const { data } = pageData;
  
  // Create SEO-optimized HTML
  let seoHtml = baseHtml;
  
  // Replace title
  seoHtml = seoHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${data.title}</title>`
  );
  
  // Replace description
  seoHtml = seoHtml.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${data.description}" />`
  );
  
  // Add keywords meta tag (insert after description)
  if (!seoHtml.includes('name="keywords"')) {
    seoHtml = seoHtml.replace(
      /<meta name="description" content=".*?" \/>/,
      `$&\n    <meta name="keywords" content="${data.keywords}" />`
    );
  }
  
  // Replace Open Graph tags
  seoHtml = seoHtml.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${data.ogTitle}" />`
  );
  
  seoHtml = seoHtml.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${data.ogDescription}" />`
  );
  
  seoHtml = seoHtml.replace(
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${data.ogImage}" />`
  );
  
  // Add canonical URL
  if (!seoHtml.includes('rel="canonical"')) {
    seoHtml = seoHtml.replace(
      /<meta property="og:image" content=".*?" \/>/,
      `$&\n    <link rel="canonical" href="${data.canonicalUrl}" />`
    );
  }
  
  // Replace Twitter card tags
  seoHtml = seoHtml.replace(
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${data.ogImage}" />`
  );
  
  // Add Twitter title and description if not present
  if (!seoHtml.includes('name="twitter:title"')) {
    seoHtml = seoHtml.replace(
      /<meta name="twitter:image" content=".*?" \/>/,
      `<meta name="twitter:title" content="${data.ogTitle}" />
    <meta name="twitter:description" content="${data.ogDescription}" />
    $&`
    );
  }
  
  // Add structured data for better SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": data.title,
    "description": data.description,
    "url": data.canonicalUrl,
    "mainEntity": {
      "@type": "Article",
      "headline": data.heroTitle || data.title,
      "description": data.heroDescription || data.description,
      "url": data.canonicalUrl
    }
  };
  
  // Insert structured data before closing head tag
  seoHtml = seoHtml.replace(
    /<\/head>/,
    `    <script type="application/ld+json">
${JSON.stringify(structuredData, null, 6)}
    </script>
  </head>`
  );
  
  // Create directory if it doesn't exist and write the HTML file
  const outputPath = path.join(DIST_DIR, slug);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }
  
  // Write the directory-style HTML file
  fs.writeFileSync(path.join(outputPath, 'index.html'), seoHtml);
  console.log(`Generated SEO page: ${slug}/index.html`);
  
  // Also write a direct HTML file for URLs without trailing slash
  fs.writeFileSync(path.join(DIST_DIR, `${slug}.html`), seoHtml);
  console.log(`Generated SEO page: ${slug}.html`);
});

console.log(`Generated ${Object.keys(markdownPages).length} SEO pages successfully!`);

// Generate _redirects file for Netlify-style hosting
const redirects = Object.keys(markdownPages).map(slug => {
  return `/${slug} /${slug}.html 200`;
}).join('\n');

fs.writeFileSync(path.join(DIST_DIR, '_redirects'), redirects);
console.log('Generated _redirects file for hosting platforms');

// Generate vercel.json for Vercel hosting
const vercelConfig = {
  "rewrites": Object.keys(markdownPages).map(slug => ({
    "source": `/${slug}`,
    "destination": `/${slug}.html`
  }))
};

fs.writeFileSync(path.join(DIST_DIR, 'vercel.json'), JSON.stringify(vercelConfig, null, 2));
console.log('Generated vercel.json for Vercel hosting');