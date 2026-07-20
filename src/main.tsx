import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Self-hosted fonts (no requests to fonts.gstatic.com / googleapis.com)
import "@fontsource-variable/inter/wght.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/800.css";

// vite-react-ssg pre-renderizza tutte le route in HTML statico durante `vite-react-ssg build`
// e le idrata client-side al primo mount.
export const createRoot = ViteReactSSG({ routes });