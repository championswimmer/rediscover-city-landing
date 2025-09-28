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
        '/meet-friends-middle',
        '/find-meeting-spot', 
        '/group-meeting-coordinate',
        '/date-night-planning'
      ],
    }),
  ].filter(Boolean),
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
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
