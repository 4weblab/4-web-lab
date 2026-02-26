

## Analisi completa: canonical e dominio SEO

### Risultato della scansione

Tutte le pagine e i file di configurazione utilizzano `https://www.4weblab.it/` invece di `https://4weblab.it/`. Nessun canonical mancante, nessun duplicato, nessun URL relativo. L'unico problema e' l'uso sistematico di `www`.

### Riepilogo anomalie trovate

| File | Problema | Occorrenze `www.4weblab.it` |
|---|---|---|
| `index.html` | og:url, og:image, og:title, og:description, twitter | 6 |
| `src/App.tsx` | siteMetadata.url, siteMetadata.image, JSON-LD (url, logo, image) | ~8 |
| `src/pages/Index.tsx` | canonical, og:url, og:image, JSON-LD (url, logo, image), sameAs | ~10 |
| `src/pages/SitiWebProfessionisti.tsx` | canonical, og:url, og:image | 3 |
| `src/pages/SitiWebAziendali.tsx` | canonical, og:url, og:image | 3 |
| `src/pages/SitiWebPadova.tsx` | canonical, og:url, og:image | 3 |
| `src/pages/FaqSitiWeb.tsx` | canonical, og:url, og:image | 3 |
| `src/pages/PrivacyPolicy.tsx` | canonical, og:url, og:image | 3 |
| `src/pages/CookiePolicy.tsx` | canonical, og:url, og:image | 3 |
| `public/sitemap.xml` | tutti i `<loc>` | 7 |

NotFound.tsx non ha canonical (corretto, ha `noindex`).

### Piano di intervento

Sostituzione globale di `https://www.4weblab.it` con `https://4weblab.it` in tutti i file elencati. Nessuna modifica a title, description o contenuti testuali.

**File da modificare (10 file):**

1. **`index.html`** -- Sostituire tutte le occorrenze di `www.4weblab.it` con `4weblab.it` nei meta tag OG e Twitter
2. **`src/App.tsx`** -- Aggiornare `siteMetadata.url`, `siteMetadata.image` e il JSON-LD globale
3. **`src/pages/Index.tsx`** -- Aggiornare canonical, og:url, og:image e il `businessSchema` JSON-LD
4. **`src/pages/SitiWebProfessionisti.tsx`** -- canonical, og:url, og:image
5. **`src/pages/SitiWebAziendali.tsx`** -- canonical, og:url, og:image
6. **`src/pages/SitiWebPadova.tsx`** -- canonical, og:url, og:image
7. **`src/pages/FaqSitiWeb.tsx`** -- canonical, og:url, og:image
8. **`src/pages/PrivacyPolicy.tsx`** -- canonical, og:url, og:image
9. **`src/pages/CookiePolicy.tsx`** -- canonical, og:url, og:image
10. **`public/sitemap.xml`** -- Tutti i 7 `<loc>`

### Dettagli tecnici

L'operazione e' una sostituzione testuale semplice: `www.4weblab.it` → `4weblab.it` in ogni occorrenza URL di tutti i file sopra elencati. Non viene toccato alcun testo visibile, title o description. Il JSON-LD in App.tsx e Index.tsx verra' aggiornato nelle proprieta' `url`, `logo` e `image`.

