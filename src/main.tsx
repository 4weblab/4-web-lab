import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Self-hosted fonts (no requests to fonts.gstatic.com / googleapis.com).
// Solo subset latin + woff2: vedi src/fonts.css.
import "./fonts.css";


// vite-react-ssg pre-renderizza tutte le route in HTML statico durante `vite-react-ssg build`
// e le idrata client-side al primo mount.
export const createRoot = ViteReactSSG({ routes });