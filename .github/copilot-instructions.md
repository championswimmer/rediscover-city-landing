# GitHub Copilot Instructions for Rediscover.city

## Project Overview

**Rediscover.city** is a location-aware AI storytelling application that transforms city walks into immersive historical and cultural experiences. The app provides users with fascinating stories, facts, and narration about their surroundings as they explore different cities.

### Key Product Features
- **Location-Aware AI**: Intelligent system that provides tailored stories based on precise user location
- **AI Narration**: Premium David Attenborough-style voice synthesis for immersive storytelling
- **Multi-City Support**: Stories across dozens of major cities worldwide
- **Freemium Model**: Free tier with basic features, premium subscription for advanced content

## Technology Stack

### Frontend Framework
- **React 18** with TypeScript
- **Vite** for build tooling and development server
- **React Router DOM** for client-side routing

### UI Framework & Styling
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for styling with custom design system
- **Lucide React** for icons
- **CSS Variables** for theming support

### Key Libraries
- **@tanstack/react-query** for server state management
- **React Hook Form** with Zod validation for forms
- **next-themes** for theme switching
- **PostHog** for analytics

## Development Workflow

### Scripts
```bash
npm run dev          # Start development server (port 8080)
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint checking
npm run preview      # Preview production build
```

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Features.tsx    # Feature showcase
│   ├── Hero.tsx        # Landing hero section
│   ├── Pricing.tsx     # Subscription plans
│   ├── Footer.tsx      # Site footer
│   └── WaitlistForm.tsx # Email signup
├── pages/              # Route components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── assets/             # Static assets
```

### Import Aliases
The project uses configured path aliases (see `components.json`):
- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/hooks` → `src/hooks`
- `@/components/ui` → `src/components/ui`

## Coding Standards & Patterns

### Component Architecture
- Use **functional components** with React hooks
- Prefer **composition over inheritance**
- Extract reusable logic into custom hooks
- Keep components focused on single responsibility

### TypeScript Usage
- Use **strict TypeScript** configuration
- Define explicit interfaces for props and data structures
- Avoid `any` types - use proper typing
- Use const assertions and as const for immutable data

### Styling Guidelines
- Use **Tailwind CSS classes** for styling
- Follow **mobile-first** responsive design
- Use **CSS variables** for consistent theming
- Leverage shadcn/ui components for consistency

### Component Patterns
```typescript
// Preferred component structure
interface ComponentProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const Component: React.FC<ComponentProps> = ({ 
  title, 
  description, 
  children 
}) => {
  return (
    <div className="container mx-auto px-6">
      <h2 className="font-serif text-4xl font-bold mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mb-8">
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
```

### Design System
- **Typography**: Playfair Display for headings (font-serif), Inter for body text
- **Colors**: Use CSS custom properties (hsl variables)
- **Spacing**: Follow Tailwind's spacing scale
- **Components**: Extend shadcn/ui components when needed

## Content & SEO Strategy

The application includes a sophisticated SEO content management system:

### SEO Page Structure
- Dynamic routing for SEO-optimized pages
- Markdown-based content management
- Automatic sitemap generation
- Open Graph meta tags

### Content Guidelines
- Focus on **city exploration** and **historical storytelling**
- Emphasize **AI-powered features** and **location awareness**
- Highlight **premium narration** and **multi-city support**
- Use engaging, descriptive language that appeals to urban explorers

## UI/UX Guidelines

### Landing Page Elements
- **Hero Section**: Full-screen with background image and compelling CTA
- **Features Section**: Grid layout showcasing key product benefits
- **Testimonials**: Social proof and user stories
- **Pricing**: Clear freemium model with feature comparison
- **Waitlist Form**: Email collection with validation

### Interactive Elements
- Use **hover effects** and **smooth transitions**
- Implement **loading states** for async operations
- Provide **clear feedback** for user actions
- Follow **accessibility best practices**

## Common Tasks & Patterns

### Adding New Components
1. Create component in appropriate directory
2. Use TypeScript interfaces for props
3. Follow naming conventions (PascalCase)
4. Export from index files when appropriate

### Styling New Elements
1. Use existing Tailwind classes first
2. Extend theme in tailwind.config.ts if needed
3. Maintain responsive design principles
4. Test across different screen sizes

### Form Handling
- Use **React Hook Form** with **Zod validation**
- Implement proper error handling and display
- Provide loading states during submission
- Follow accessibility guidelines for forms

### Custom Hooks Available
- **`useIsMobile()`**: Detects mobile breakpoint (< 768px) with proper SSR handling
- **`useToast()`**: Toast notification system for user feedback

```typescript
// Example usage of custom hooks
import { useIsMobile } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

const Component = () => {
  const isMobile = useIsMobile();
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      // Submit logic
      toast({
        title: "Success",
        description: "Your action was completed successfully.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className={isMobile ? "p-4" : "p-8"}>
      {/* Component content */}
    </div>
  );
};
```

### Working with shadcn/ui
- Use existing components from `/components/ui/`
- Customize variants using `class-variance-authority`
- Follow shadcn patterns for new component creation
- Maintain consistency with existing design tokens
- Use the `cn()` utility from `/lib/utils.ts` for conditional classes

### Utility Functions
```typescript
// Preferred way to combine Tailwind classes
import { cn } from "@/lib/utils";

const Component = ({ variant, className }) => {
  return (
    <div className={cn(
      "base-classes",
      variant === "large" && "lg:text-xl",
      className
    )}>
      Content
    </div>
  );
};
```

## Performance Considerations

- Use **React.lazy** for code splitting on routes
- Optimize images and use appropriate formats
- Minimize bundle size by avoiding unnecessary dependencies
- Implement proper **error boundaries**

## Testing Approach

While this project doesn't currently have extensive testing setup:
- Test components manually in development
- Verify responsive behavior across devices
- Check accessibility with screen readers
- Validate forms and user interactions

## Deployment

- Built with **Vite** for optimized production builds
- Deployed via **Lovable platform** with automatic GitHub integration
- Uses **GitHub Actions** for CI/CD pipeline
- Supports custom domain configuration

## Brand Voice & Messaging

When creating content or copy:
- **Enthusiastic** about urban exploration and history
- **Sophisticated** but accessible language
- **Technology-forward** but human-centered
- **Educational** while remaining entertaining
- Focus on **discovery, curiosity, and adventure**

## Common Issues & Solutions

### Linting Errors
The project has some existing linting issues that can be safely ignored for now:
- TypeScript warnings in UI components
- Empty block statements in form handlers
- Fast refresh warnings for utility exports

### Build Process
- Always test `npm run build` before submitting changes
- Use `npm run dev` for development with hot reload
- Check responsive design at various breakpoints

When implementing new features or making changes, prioritize:
1. **User experience** and intuitive navigation
2. **Mobile responsiveness** and accessibility
3. **Performance** and fast loading times
4. **SEO optimization** for discoverability
5. **Brand consistency** across all touchpoints