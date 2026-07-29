import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // Only inject the dev-only JSX source tagger during `vite` serve.
    // It writes `window.sourceElementMap` at module top, which breaks SSG
    // prerender in Node (no `window`).
    mode === "development" && command === "serve" && componentTagger(),
  ].filter(Boolean),
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
