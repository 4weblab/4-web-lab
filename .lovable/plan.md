## Modifiche prezzi: 199€ + range JSON-LD

### 1. FAQ homepage (`src/components/HomeFaqPreview.tsx`)
Risposta "Quanto costa realizzare un sito web?":
- Da: "Il costo parte generalmente da circa 400€ + IVA per una struttura one-page..."
- A: "Il costo parte generalmente a partire da 199€ per una struttura one-page e aumenta in base a pagine, funzionalità e ottimizzazione SEO."

### 2. Pagina FAQ (`src/pages/FaqSitiWeb.tsx`)
Aggiornare sia `answerText` (usato nel JSON-LD FAQPage) che `answer` JSX della prima domanda: sostituire `249€` con `199€`.

### 3. JSON-LD globale (`src/App.tsx`)
- Riga 97: `"priceRange": "249€ - 699€+"` → `"priceRange": "199€ - 549€+"`
- Riga 131: `"minPrice": "249"` → `"minPrice": "199"`
- Aggiungere `"maxPrice": "549"` accanto al minPrice nel `priceSpecification` per coerenza con il range.

### Note (non incluse, non richieste)
Restano invariati gli altri riferimenti a `249€` (meta description Index/App, SitiWebProfessionisti, SitiWebPadova, QuantoCostaSitoWeb, ecc.) e il `699€` in `BlogWebsiteCostArticle.tsx`. Posso aggiornarli in un passaggio successivo se vuoi allineare tutto.