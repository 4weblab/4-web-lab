import { j as jsxDEV, b as Fragment } from "../main.mjs";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "vite-react-ssg";
import "react/jsx-dev-runtime";
import "lucide-react";
import "motion-dom";
import "motion-utils";
import "react/jsx-runtime";
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: [
      /* @__PURE__ */ jsxDEV("title", { children: "Pagina non trovata | 4 Web Lab" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("meta", { name: "robots", content: "noindex, nofollow" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "mb-4 text-4xl font-bold", children: "404" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/NotFound.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0);
};
export {
  NotFound as default
};
