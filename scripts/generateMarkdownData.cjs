const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Define the content directory
const CONTENT_DIR = path.join(__dirname, '../src/content/seo');
const OUTPUT_FILE = path.join(__dirname, '../src/utils/markdownData.ts');

// Read all markdown files
const markdownFiles = fs.readdirSync(CONTENT_DIR)
  .filter(file => file.endsWith('.md'))
  .map(file => {
    const filePath = path.join(CONTENT_DIR, file);
    const rawContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(rawContent);
    const slug = path.basename(file, '.md');
    
    return {
      slug,
      content,
      data: { ...data, slug }
    };
  });

// Generate TypeScript file
const tsContent = `// Auto-generated file - do not edit manually
export interface SEOPageData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
  slug: string;
  heroTitle?: string;
  heroDescription?: string;
}

export interface MarkdownSEOPage {
  content: string;
  data: SEOPageData;
}

export const markdownPages: Record<string, MarkdownSEOPage> = ${JSON.stringify(
  markdownFiles.reduce((acc, page) => {
    acc[page.slug] = { content: page.content, data: page.data };
    return acc;
  }, {}),
  null,
  2
)};

export const getMarkdownPage = (slug: string): MarkdownSEOPage | null => {
  return markdownPages[slug] || null;
};

export const getAllMarkdownPages = (): MarkdownSEOPage[] => {
  return Object.values(markdownPages);
};

export const getAllMarkdownSlugs = (): string[] => {
  return Object.keys(markdownPages);
};
`;

// Write the output file
fs.writeFileSync(OUTPUT_FILE, tsContent);

console.log(`Generated ${OUTPUT_FILE} with ${markdownFiles.length} pages`);