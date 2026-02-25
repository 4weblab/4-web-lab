

## Piano SEO completo

### 1. Aggiornare JSON-LD globale in `src/pages/Index.tsx`

Sostituire l'oggetto `businessSchema` (righe 14-44) con i dati reali forniti dall'utente:

```js
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "4 Web Lab di Fullin Carlo",
  "url": "https://www.4weblab.it/",
  "logo": "https://www.4weblab.it/logo.png",
  "image": "https://www.4weblab.it/logo.png",
  "telephone": "+393516826560",
  "email": "info@4weblab.it",
  "vatID": "05765760284",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Belluno 44",
    "addressLocality": "Legnaro",
    "addressRegion": "PD",
    "postalCode": "35020",
    "addressCountry": "IT"
  },
  "areaServed": ["IT", "Veneto", "Padova (PD)", ...],
  "sameAs": ["https://share.google/oGOMV0sHAaV8JlqnZ"],
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "byAppointmentOnly": true }]
}
```

Inoltre, spostare il rendering del `<script type="application/ld+json">` dentro il blocco `<Helmet>` della homepage (anziche fuori, come attualmente alle righe 65-68) per coerenza con le altre pagine.

### 2. Aggiungere JSON-LD globale in `src/App.tsx`

Inserire lo stesso JSON-LD `ProfessionalService` dentro il `<Helmet>` globale di `App.tsx`, cosi che sia presente su tutte le pagine del sito come dato strutturato di base.

### 3. Completare OG/Twitter Card sulle pagine satellite mancanti

Le seguenti pagine hanno `canonical` e `title`/`description` ma mancano di Open Graph e Twitter Card:

- **`SitiWebProfessionisti.tsx`**: aggiungere `og:type`, `og:url`, `og:title`, `og:description`, `og:image`, `og:locale`
- **`SitiWebAziendali.tsx`**: idem
- **`SitiWebPadova.tsx`**: idem
- **`PrivacyPolicy.tsx`**: aggiungere `og:description`, `og:image`, `og:locale` (ha gia `og:title`, `og:url`, `og:type`)
- **`CookiePolicy.tsx`**: idem

### 4. Aggiungere Helmet alla pagina `NotFound.tsx`

Attualmente la 404 non ha alcun tag SEO. Aggiungere:
- `<title>Pagina non trovata | 4 Web Lab</title>`
- `<meta name="robots" content="noindex, nofollow" />`

### 5. Aggiornare dati nel Footer (`Footer.tsx`)

Aggiornare `businessInfo` con i dati reali:
- `fullName`: "4 Web Lab di Fullin Carlo"
- `vatNumber`: "P.IVA: 05765760284"
- `address`: "Via Belluno 44"
- `city`: "Legnaro (PD)"
- `postalCode`: "35020"

### 6. Aggiornare `MapSection.tsx`

Aggiornare `businessData` con indirizzo, coordinate e URL mappa corretti per "Via Belluno 44, Legnaro (PD)".

### 7. Aggiornare `robots.txt`

Il file attuale blocca tutti i crawler generici (`Disallow: /`) e poi consente solo Googlebot, Bingbot, Twitterbot e facebookexternalhit. Semplificare per consentire il crawling a tutti:

```
User-agent: *
Allow: /

Sitemap: https://www.4weblab.it/sitemap.xml
```

### 8. Aggiornare `sitemap.xml`

Aggiornare `lastmod` delle pagine modificate e verificare che tutti gli URL usino il dominio `www`.  La sitemap attuale e gia corretta nell'uso di `https://www.4weblab.it/`.

### 9. Redirect 301 non-www → www

I redirect 301 da `4weblab.it` a `www.4weblab.it` non possono essere gestiti lato codice React (client-side SPA). Devono essere configurati a livello di hosting/DNS/CDN. Aggiungero una nota nel codice e le istruzioni per la configurazione.

### Dettagli tecnici

- **File modificati**: `src/App.tsx`, `src/pages/Index.tsx`, `src/pages/SitiWebProfessionisti.tsx`, `src/pages/SitiWebAziendali.tsx`, `src/pages/SitiWebPadova.tsx`, `src/pages/PrivacyPolicy.tsx`, `src/pages/CookiePolicy.tsx`, `src/pages/NotFound.tsx`, `src/components/Footer.tsx`, `src/components/MapSection.tsx`, `public/robots.txt`
- **Nessuna pagina rimossa**, solo aggiornamento metadati e dati strutturati
- Il redirect 301 non-www → www richiede configurazione lato hosting (non applicabile nel codice SPA)

