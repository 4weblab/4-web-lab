import { Helmet } from "react-helmet-async";

export interface BreadcrumbCrumb {
  name: string;
  url: string;
}

/**
 * Emits a BreadcrumbList JSON-LD inside react-helmet-async.
 * Use INSIDE an existing <Helmet> only if no other Helmet is present on the page,
 * otherwise drop it as a sibling — react-helmet-async dedupes correctly.
 */
const BreadcrumbJsonLd = ({ items }: { items: BreadcrumbCrumb[] }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
};

export default BreadcrumbJsonLd;