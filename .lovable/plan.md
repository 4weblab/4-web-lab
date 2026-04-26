# Ottimizzazione Structured Data (JSON-LD)

## Obiettivo
Eliminare la duplicazione dello schema `ProfessionalService` e arricchirlo con dati utili per **Local SEO** ed **E-E-A-T** (founder, geo, prezzi, orari, profili social).

---

## 1. `src/App.tsx` — Schema globale arricchito

Sostituire l'attuale blocco JSON-LD con la versione estesa:

```json
{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "WebDesignAgency"],
  "@id": "https://4weblab.it/#business",
  "name": "4 Web Lab di Fullin Carlo",
  "url": "https://4weblab.it/",
  "logo": "https://4weblab.it/logo.webp",
  "image": "https://4weblab.it/logo.webp",
  "telephone": "+393514656042",
  "email": "info@4weblab.it",
  "vatID": "05765760284",
  "founder": {
    "@type": "Person",
    "name": "Carlo Fullin",
    "sameAs": "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/"
  },
  "foundingDate": "2026",
  "priceRange": "249€ - 699€+",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Belluno 44",
    "addressLocality": "Legnaro",
    "addressRegion": "PD",
    "postalCode": "35020",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.3461,
    "longitude": 11.9536
  },
  "areaServed": ["IT", "Veneto", "Padova (PD)", "Venezia (VE)", "Treviso (TV)", "Vicenza (VI)", "Verona (VR)", "Rovigo (RO)", "Belluno (BL)"],
  "sameAs": [
    "https://share.google/oGOMV0sHAaV8JlqnZ",
    "https://www.linkedin.com/in/carlo-fullin-6aa6b73b7/"
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi 4 Web Lab",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Sito web a noleggio - tutto incluso",
        "price": "49",
        "priceCurrency": "EUR",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "49",
          "priceCurrency": "EUR",
          "unitCode": "MON"
        }
      },
      {
        "@type": "Offer",
        "name": "Sito web in acquisto",
        "price": "249",
        "priceCurrency": "EUR",
        "description": "Soluzioni a partire da 249€ una tantum"
      }
    ]
  }
}
```

## 2. `src/pages/Index.tsx` — Rimozione duplicato

- Eliminare la costante `businessSchema`
- Rimuovere il tag `<script type="application/ld+json">` dall'`<Helmet>`
- Lasciare invariati gli altri meta tag (title, description, OG, Twitter)

## 3. Memoria
- Aggiornare `mem://project/business-objectives` con `foundingDate: 2026` e LinkedIn del founder.

---

## File modificati
- `src/App.tsx`
- `src/pages/Index.tsx`
- `mem://project/business-objectives`
