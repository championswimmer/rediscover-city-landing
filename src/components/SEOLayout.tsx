import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface SEOLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
}

export const SEOLayout = ({
  children,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
}: SEOLayoutProps) => {
  // Update document head
  document.title = title;
  
  // Update or create meta tags
  const updateMeta = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", name);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  const updateProperty = (property: string, content: string) => {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("property", property);
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  };

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", canonicalUrl);

  // Update meta tags
  updateMeta("description", description);
  updateMeta("keywords", keywords);
  updateProperty("og:title", ogTitle);
  updateProperty("og:description", ogDescription);
  updateProperty("og:url", canonicalUrl);
  updateProperty("og:image", ogImage);
  updateProperty("og:type", "website");
  updateProperty("og:site_name", "Rediscover.city");
  updateMeta("twitter:card", "summary_large_image");
  updateMeta("twitter:title", ogTitle);
  updateMeta("twitter:description", ogDescription);
  updateMeta("twitter:image", ogImage);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <nav className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-primary hover:text-primary/80 transition-colors">
            Rediscover.city
          </Link>
          <span className="text-muted-foreground mx-2">{'>'}</span>
          <span className="text-foreground">{ogTitle}</span>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12 text-center">
        <div className="container mx-auto px-4">
          <p>&copy; 2024 Rediscover.city - Walk the streets. Hear their stories.</p>
        </div>
      </footer>
    </div>
  );
};