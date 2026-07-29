import { j as jsxDEV, b as Fragment } from "../main.mjs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const SITE_URL = "https://4weblab.it";
const toAbsoluteUrl = (path) => {
  if (!path) return SITE_URL + "/";
  if (path.startsWith("http")) return path;
  return SITE_URL + (path.startsWith("/") ? path : "/" + path);
};
const PageBreadcrumb = ({ items, variant = "light", className }) => {
  if (!items || items.length === 0) return null;
  const isLight = variant === "light";
  const baseColor = isLight ? "text-primary-foreground/70" : "text-muted-foreground";
  const hoverColor = isLight ? "hover:text-primary-foreground" : "hover:text-foreground";
  const sepColor = isLight ? "text-primary-foreground/40" : "text-muted-foreground/50";
  const currentColor = isLight ? "text-primary-foreground/90" : "text-foreground";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: toAbsoluteUrl(item.to)
    }))
  };
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) }, void 0, false, {
      fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: cn("mx-auto mb-6 flex max-w-3xl items-center justify-center", className),
        children: /* @__PURE__ */ jsxDEV(
          "ol",
          {
            className: cn(
              "flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium sm:text-sm",
              baseColor
            ),
            children: items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-1.5", children: [
                idx > 0 && /* @__PURE__ */ jsxDEV("span", { "aria-hidden": "true", className: cn("flex items-center", sepColor), children: /* @__PURE__ */ jsxDEV(ChevronRight, { className: "h-3.5 w-3.5" }, void 0, false, {
                  fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
                  lineNumber: 74,
                  columnNumber: 21
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
                  lineNumber: 73,
                  columnNumber: 19
                }, void 0),
                isLast || !item.to ? /* @__PURE__ */ jsxDEV(
                  "span",
                  {
                    "aria-current": isLast ? "page" : void 0,
                    className: cn(
                      "max-w-[18rem] truncate sm:max-w-md",
                      isLast ? currentColor : baseColor
                    ),
                    title: item.label,
                    children: item.label
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
                    lineNumber: 78,
                    columnNumber: 19
                  },
                  void 0
                ) : /* @__PURE__ */ jsxDEV(Link, { to: item.to, className: cn("transition-colors", hoverColor), children: item.label }, void 0, false, {
                  fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
                  lineNumber: 89,
                  columnNumber: 19
                }, void 0)
              ] }, `${item.label}-${idx}`, true, {
                fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
                lineNumber: 71,
                columnNumber: 15
              }, void 0);
            })
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
            lineNumber: 62,
            columnNumber: 9
          },
          void 0
        )
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
        lineNumber: 58,
        columnNumber: 7
      },
      void 0
    )
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/PageBreadcrumb.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, void 0);
};
export {
  PageBreadcrumb as P,
  cn as c
};
