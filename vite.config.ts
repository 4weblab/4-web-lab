import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react-helmet-async"],
  },
  ssr: {
    // Bundle CJS-only deps into the SSG bundle. react-helmet-async must NOT be
    // bundled here — vite-react-ssg wraps our app with its own HelmetProvider
    // imported from Node, and bundling would create a second instance with a
    // different React context.
    noExternal: ["framer-motion", "embla-carousel-react"],
  },
}));
