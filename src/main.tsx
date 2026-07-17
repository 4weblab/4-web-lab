import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Self-hosted fonts (no requests to fonts.gstatic.com / googleapis.com)
import "@fontsource-variable/inter";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";

declare global {
  interface Window {
    prerenderReady?: boolean;
  }
}

window.prerenderReady = false;

createRoot(document.getElementById("root")!).render(<App />);

// Segnala ai prerenderer (Prerender.io, Rendertron, ecc.) che la SPA è pronta
// per lo snapshot dopo che React ha renderizzato e react-helmet-async ha
// iniettato title/meta/JSON-LD nel <head>.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    window.prerenderReady = true;
  });
});
