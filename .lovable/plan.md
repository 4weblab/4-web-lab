

## Add JSON-LD Structured Data to Professionisti and Padova Pages

Both pages lack dedicated JSON-LD. Neither has FAQ sections, so only `ProfessionalService` schema is needed.

### 1. SitiWebProfessionisti.tsx

Insert a `<script type="application/ld+json">` inside the `<Helmet>` block (after line 30, before `</Helmet>`) with:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4weblab – Siti Web per Professionisti",
  "description": "Realizziamo siti web professionali per avvocati, commercialisti, medici e liberi professionisti. Struttura chiara, SEO locale e assistenza continua.",
  "url": "https://4weblab.it/realizzazione-siti-web-per-professionisti",
  "provider": {
    "@type": "Organization",
    "name": "4weblab",
    "url": "https://4weblab.it"
  },
  "areaServed": { "@type": "Country", "name": "IT" },
  "serviceType": "Web Design for Professionals"
}
```

### 2. SitiWebPadova.tsx

Insert a `<script type="application/ld+json">` inside the `<Helmet>` block (after line 31, before `</Helmet>`) with:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4weblab – Realizzazione Siti Web Padova",
  "description": "Agenzia web a Padova: realizziamo siti professionali per negozi, studi e aziende del territorio con SEO locale e assistenza dedicata.",
  "url": "https://4weblab.it/realizzazione-siti-web-padova",
  "provider": {
    "@type": "Organization",
    "name": "4weblab",
    "url": "https://4weblab.it"
  },
  "areaServed": {
    "@type": "City",
    "name": "Padova",
    "containedInPlace": { "@type": "Country", "name": "IT" }
  },
  "serviceType": "Web Design"
}
```

### Technical details

- Two files modified: `SitiWebProfessionisti.tsx`, `SitiWebPadova.tsx`
- Schema follows the same pattern used in `SitiWebAziendali.tsx`
- Padova page uses `areaServed: City` for local SEO; Professionisti uses `Country` since it targets all of Italy

