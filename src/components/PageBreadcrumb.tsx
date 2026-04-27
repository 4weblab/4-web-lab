import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PageBreadcrumbItem {
  label: string;
  to?: string;
}

interface PageBreadcrumbProps {
  items: PageBreadcrumbItem[];
  variant?: "light" | "dark";
  className?: string;
}

const SITE_URL = "https://4weblab.it";

const toAbsoluteUrl = (path?: string) => {
  if (!path) return SITE_URL + "/";
  if (path.startsWith("http")) return path;
  return SITE_URL + (path.startsWith("/") ? path : "/" + path);
};

/**
 * Unified breadcrumb component.
 * Renders the visible UI AND emits the matching JSON-LD BreadcrumbList,
 * keeping content and structured data perfectly in sync.
 *
 * The last item in `items` represents the current page and should not have a `to`.
 */
const PageBreadcrumb = ({ items, variant = "light", className }: PageBreadcrumbProps) => {
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
      item: toAbsoluteUrl(item.to),
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <nav
        aria-label="Breadcrumb"
        className={cn("mx-auto mb-6 flex max-w-3xl items-center justify-center", className)}
      >
        <ol
          className={cn(
            "flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium sm:text-sm",
            baseColor,
          )}
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
                {idx > 0 && (
                  <span aria-hidden="true" className={cn("flex items-center", sepColor)}>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </span>
                )}
                {isLast || !item.to ? (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={cn(
                      "max-w-[18rem] truncate sm:max-w-md",
                      isLast ? currentColor : baseColor,
                    )}
                    title={item.label}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link to={item.to} className={cn("transition-colors", hoverColor)}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default PageBreadcrumb;