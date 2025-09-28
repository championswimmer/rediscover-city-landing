import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemapPlugin from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    sitemapPlugin({
      hostname: 'https://rediscover.city',
      dynamicRoutes: [
        '/london-walking-tour-guide',
        '/paris-walking-tour-guide',
        '/new-york-walking-tour-guide',
        '/istanbul-walking-tour-guide',
        '/berlin-walking-tour-guide',
        '/madrid-walking-tour-guide'
      ],
    }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        'london-walking-tour-guide': path.resolve(__dirname, 'london-walking-tour-guide.html'),
        'paris-walking-tour-guide': path.resolve(__dirname, 'paris-walking-tour-guide.html'),
        'new-york-walking-tour-guide': path.resolve(__dirname, 'new-york-walking-tour-guide.html'),
        'istanbul-walking-tour-guide': path.resolve(__dirname, 'istanbul-walking-tour-guide.html'),
        'berlin-walking-tour-guide': path.resolve(__dirname, 'berlin-walking-tour-guide.html'),
        'madrid-walking-tour-guide': path.resolve(__dirname, 'madrid-walking-tour-guide.html'),
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
