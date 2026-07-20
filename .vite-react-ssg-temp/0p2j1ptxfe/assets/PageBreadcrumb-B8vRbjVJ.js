import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { W, c as cn } from "../main.mjs";
import { ChevronRight } from "lucide-react";
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(W, { children: /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) }) }),
    /* @__PURE__ */ jsx(
      "nav",
      {
        "aria-label": "Breadcrumb",
        className: cn("mx-auto mb-6 flex max-w-3xl items-center justify-center", className),
        children: /* @__PURE__ */ jsx(
          "ol",
          {
            className: cn(
              "flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium sm:text-sm",
              baseColor
            ),
            children: items.map((item, idx) => {
              const isLast = idx === items.length - 1;
              return /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1.5", children: [
                idx > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("flex items-center", sepColor), children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3.5 w-3.5" }) }),
                isLast || !item.to ? /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-current": isLast ? "page" : void 0,
                    className: cn(
                      "max-w-[18rem] truncate sm:max-w-md",
                      isLast ? currentColor : baseColor
                    ),
                    title: item.label,
                    children: item.label
                  }
                ) : /* @__PURE__ */ jsx(Link, { to: item.to, className: cn("transition-colors", hoverColor), children: item.label })
              ] }, `${item.label}-${idx}`);
            })
          }
        )
      }
    )
  ] });
};
export {
  PageBreadcrumb as P
};
