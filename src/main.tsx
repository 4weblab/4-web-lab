import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Self-hosted fonts (no requests to fonts.gstatic.com / googleapis.com)
import "@fontsource-variable/inter/wght.css";
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
// per lo snapshot solo dopo:
//   1. mount di React (doppio rAF -> primo paint completato)
//   2. font self-hosted pronti (document.fonts.ready)
//   3. window.load (immagini LCP e risorse critiche scaricate)
// Timeout di sicurezza a 4s per non bloccare mai il flag.
const markReady = () => {
  if (window.prerenderReady) return;
  window.prerenderReady = true;
};

const waitForReady = async () => {
  await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
  try {
    if (document.fonts && document.fonts.ready) {
      await document.fonts.ready;
    }
  } catch { /* no-op */ }
  if (document.readyState !== "complete") {
    await new Promise<void>((r) => window.addEventListener("load", () => r(), { once: true }));
  }
  markReady();
};

waitForReady();
setTimeout(markReady, 4000);
