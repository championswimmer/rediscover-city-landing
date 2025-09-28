import { useParams } from "react-router-dom";
import { SEOLayout } from "@/components/SEOLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getMarkdownPage } from "@/utils/markdownLoader";

const MarkdownSEOPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div className="min-h-screen flex items-center justify-center">Page not found</div>;
  }

  const markdownContent = getMarkdownPage(slug);

  if (!markdownContent) {
    return <div className="min-h-screen flex items-center justify-center">Page not found</div>;
  }

  const { content, data } = markdownContent;

  // Convert markdown to HTML (simplified approach)
  const convertMarkdownToJSX = (markdown: string) => {
    const lines = markdown.split('\n');
    const elements: JSX.Element[] = [];
    let currentSection: JSX.Element[] = [];
    let sectionKey = 0;

    lines.forEach((line, index) => {
      const key = `line-${index}`;
      
      if (line.startsWith('# ')) {
        if (currentSection.length > 0) {
          elements.push(
            <section key={`section-${sectionKey}`} className="bg-card rounded-xl p-8 shadow-elegant">
              {currentSection}
            </section>
          );
          currentSection = [];
          sectionKey++;
        }
        // Skip main title as it's handled in hero section
      } else if (line.startsWith('## ')) {
        if (currentSection.length > 0) {
          elements.push(
            <section key={`section-${sectionKey}`} className="bg-card rounded-xl p-8 shadow-elegant">
              {currentSection}
            </section>
          );
          currentSection = [];
          sectionKey++;
        }
        currentSection.push(
          <h2 key={key} className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary pb-3">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        currentSection.push(
          <h3 key={key} className="text-2xl font-semibold text-foreground mb-3 mt-6">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- **') && line.includes(':**')) {
        const match = line.match(/- \*\*(.*?):\*\* (.*)/);
        if (match) {
          currentSection.push(
            <li key={key} className="flex items-start mb-2">
              <span className="font-semibold text-foreground mr-2">{match[1]}:</span>
              {match[2]}
            </li>
          );
        }
      } else if (line.startsWith('- ')) {
        currentSection.push(
          <li key={key} className="text-muted-foreground mb-2">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim() && !line.startsWith('#')) {
        currentSection.push(
          <p key={key} className="text-muted-foreground mb-4">
            {line}
          </p>
        );
      }
    });

    // Add the last section
    if (currentSection.length > 0) {
      elements.push(
        <section key={`section-${sectionKey}`} className="bg-card rounded-xl p-8 shadow-elegant">
          {currentSection}
        </section>
      );
    }

    return elements;
  };

  const contentElements = convertMarkdownToJSX(content);

  return (
    <SEOLayout {...data}>
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            {data.heroTitle || data.title}
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            {data.heroDescription || data.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {contentElements}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary-glow to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Gatherings?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users discovering perfect locations with captivating stories
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/#waitlist">Join the Waitlist</Link>
          </Button>
        </div>
      </section>
    </SEOLayout>
  );
};

export default MarkdownSEOPage;